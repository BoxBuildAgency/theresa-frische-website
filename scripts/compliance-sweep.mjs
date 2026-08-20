#!/usr/bin/env node
/**
 * Wording check — advisory, not a gate.
 *
 * This used to fail the build. It no longer does, and that is deliberate:
 * Theresa has taken advice and writes what she judges right. The check now
 * exists to tell her something, not to stop her. It always exits 0, so
 * Keystatic saves and Netlify deploys regardless.
 *
 * What it watches for is unchanged, and the list is worth keeping. The Swiss
 * line is not the word "therapy" — it is claiming the protected title
 * Psychotherapeutin, or practising psychotherapy (treating people who are ill,
 * using psychotherapeutic methods) without a cantonal
 * Berufsausübungsbewilligung. Naming a method she draws on is fine. Describing
 * herself as a psychotherapist, or the service as psychotherapy, is not.
 *
 * The sentences that actually carry the safety now are the ones under the
 * modality list, in the Impressum, and in section 2 of the Terms. Those say
 * plainly that she is not an authorised psychotherapist and offers no
 * psychotherapy. Do not edit them away.
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
  // The modality note, the Impressum and Terms section 2 all say plainly that
  // she does NOT offer psychotherapy. Those sentences are the safety net; the
  // check must not spend its credibility warning about them.
  /\bdo(?:es)? not offer psychotherapy\b/i,
  /\b(?:am|is) not a psychotherapist\b/i,
  /\bnot an authorised psychotherapist\b/i,
  /\bkeine Psychotherapie an\b/i,
  /\bkeine Psychotherapeutin\b/i,
  /\bkeine eidgenössisch anerkannte Psychotherapeutin\b/i,
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
  console.log("✓ Wording check: nothing on the watch list appears in the content.");
  process.exit(0);
}

// Advisory note, written for a non-developer. Never fails the build.
console.log("");
for (const h of hits) {
  console.log(`Heads up: the word "${h.term}" appears in ${h.file}.`);
}
console.log("");
console.log("Switzerland protects the title psychotherapist and the practice of psychotherapy.");
console.log("Naming a method you draw on is fine. Describing yourself as a psychotherapist,");
console.log("or your service as psychotherapy, is not. This has been published anyway.");
console.log("");
console.log(`(${hits.length} ${hits.length === 1 ? "mention" : "mentions"} in total. If you are unsure about any of them, send this to José.)`);
console.log("");

// Always succeed. The check informs; it does not block.
process.exit(0);
