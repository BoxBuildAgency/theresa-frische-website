#!/usr/bin/env node
/**
 * Compliance sweep — the safety net that makes full CMS editing safe.
 *
 * Theresa can edit every word on the site. This check exists to stop exactly one
 * class of mistake reaching the public site: describing the service as
 * psychotherapy, medical treatment, or diagnosis. She is not licensed for that in
 * Switzerland, so the site must describe counselling only.
 *
 * It scans the content files (content/**.json) in both languages and fails the
 * build if a prohibited term is used. Terms are allowed where the copy explicitly
 * says the service is NOT psychotherapy (the disclaimers, the legal pages, and
 * the article that compares counselling with psychotherapy and coaching) — those
 * are listed as exceptions below.
 *
 * Run locally with:  npm run check:compliance
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "content");

/** Terms that must never describe the service. */
const RULES = [
  { term: "psychotherapy", lang: "EN", re: /\bpsychotherapy\b|\bpsychotherapist\b/i },
  { term: "Psychotherapie", lang: "DE", re: /\bPsychotherapie\b|\bPsychotherapeut/i },
  { term: "medical treatment", lang: "EN", re: /\bmedical treatment\b/i },
  { term: "Behandlung", lang: "DE", re: /\bBehandlung\b|\bbehandeln\b/i },
  { term: "diagnosis", lang: "EN", re: /\bdiagnosis\b|\bdiagnose\b|\bdiagnostic\b/i },
  { term: "Diagnose", lang: "DE", re: /\bDiagnose\b|\bDiagnostik\b|\bdiagnostizier/i },
  { term: "anxiety", lang: "EN", re: /\banxiety\b|\bpanic\b/i },
  { term: "Angst", lang: "DE", re: /(?<![A-Za-zäöüß])Ängste|(?<![A-Za-zäöüß])Angst(?![a-zäöüß])|\bPanik\b/ },
  { term: "disorder", lang: "EN", re: /\bdisorder\b|\bsymptoms\b/i },
  { term: "Störung", lang: "DE", re: /(?<![A-Za-zäöüß])Störung|(?<![A-Za-zäöüß])Symptome/ },
  { term: "patient", lang: "EN", re: /\bpatients\b|\b(?:the|a|each|every|my|your)\s+patient\b/i },
  { term: "Patient", lang: "DE", re: /\bPatient(?:in|innen|en)?\b/ },
  { term: "healing", lang: "EN", re: /\bhealing\b|\bcure\b/i },
  { term: "Heilung", lang: "DE", re: /\bHeilung\b|\bheilen\b/i },
];

/**
 * Files where these words are expected, because the copy is explicitly saying
 * the service is NOT those things, or is naming them as a different profession.
 */
const ALLOWED_FILES = [
  /\/pages\/(impressum|privacy|terms)\.json$/,           // legal pages
  /\/posts\/counselling-vs-therapy-vs-coaching\.json$/,  // the positioning article
  /\/faq\/understanding-counselling\.json$/,             // the "is this therapy?" answers
  /\/site\.json$/,                                        // the disclaimer + crisis block
  /\/pages\/(blog|aiInfo)\.json$/,                        // blog disclaimer, AI-info negations
];

/** Phrases that are always fine: they are negations or industry-standard terms. */
const ALLOWED_PHRASES = [
  // Explicit negations — the copy is saying the service is NOT these things.
  /\bnot psychotherapy\b/i,
  /\bkeine Psychotherapie\b/i,
  /nicht.{0,25}Psychotherapie/i,
  /\bno diagnosis\b|\bwithout a diagnosis\b|\bno diagnoses\b|\bdo(?:es)? not (?:involve|provide) (?:any )?diagnos/i,
  /\bkeine Diagnos|\bohne Diagnos|\bnicht diagnostizier/i,
  /weder\s+(?:eine\s+)?Diagnose/i,                    // "weder eine Diagnose noch …"
  // German idiom "etwas ALS x behandeln" = to treat something AS x — not a service claim.
  /als\s+[^"]{0,45}\bzu behandeln\b|\bals\s+\w+\s+behandelt\b/i,
  /\bnot (?:billed|reimbursed)\b/i,
  // Naming the comparison article / the distinct profession, not offering it.
  /psychotherapy and coaching|Psychotherapie und Coaching/i,
  /counselling-vs-therapy-vs-coaching/i,
  /\bpsychotherapeutic care\b|\bpsychotherapeutische Versorgung\b/i,
  /licensed psychotherapist|approbierte[rn]? Psychotherapeut/i,
  // Standard industry / factual terms that are approved site-wide.
  /Krankenkasse|Krankenversicherung/i,
  /\bmental health\b|mentale Gesundheit/i,
  /M\.Sc\. Clinical Psychology|Klinische Psychologie/i,
  /\bno referral\b|\bohne .{0,15}Überweisung\b/i,
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".json")) out.push(p);
  }
  return out;
}

function findings() {
  const results = [];
  for (const file of walk(ROOT)) {
    const rel = file.replace(process.cwd() + path.sep, "");
    if (ALLOWED_FILES.some((re) => re.test(file.replace(/\\/g, "/")))) continue;
    const raw = readFileSync(file, "utf8");
    for (const rule of RULES) {
      for (const m of raw.matchAll(new RegExp(rule.re, rule.re.flags.includes("g") ? rule.re.flags : rule.re.flags + "g"))) {
        const around = raw.slice(Math.max(0, m.index - 120), m.index + 120);
        if (ALLOWED_PHRASES.some((re) => re.test(around))) continue;
        const line = raw.slice(0, m.index).split("\n").length;
        results.push({ file: rel, line, term: m[0], lang: rule.lang, context: around.replace(/\s+/g, " ").trim() });
      }
    }
  }
  return results;
}

const hits = findings();

if (hits.length === 0) {
  console.log("✓ Compliance check passed — no prohibited wording found in the content.");
  process.exit(0);
}

// Plain-language failure, written for a non-developer.
console.error("");
console.error("──────────────────────────────────────────────────────────────────");
console.error("  YOUR CHANGE HAS NOT BEEN PUBLISHED");
console.error("──────────────────────────────────────────────────────────────────");
console.error("");
console.error("  This website describes counselling only. A few words are not");
console.error("  allowed, because using them would describe the service as");
console.error("  psychotherapy or medical care.");
console.error("");
for (const h of hits) {
  console.error(`  • The word "${h.term}" was found in ${h.file} (line ${h.line}).`);
  console.error(`    …${h.context.slice(0, 150)}…`);
  console.error("");
}
console.error("  What to do: open the admin at /keystatic, reword the sentence");
console.error("  above without that word, and save again. As a guide, use:");
console.error("");
console.error("    counselling / Beratung        instead of therapy / Therapie");
console.error("    support, working together     instead of treatment / Behandlung");
console.error("    overwhelm, stress, strain     instead of anxiety / Ängste");
console.error("    clients / Klient:innen        instead of patients / Patient:innen");
console.error("");
console.error("  Nothing is broken and nothing is lost — the live site is unchanged");
console.error("  until this is fixed. If you are unsure, send this message to José.");
console.error("");
process.exit(1);
