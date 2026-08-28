#!/usr/bin/env node
/**
 * Schema-coverage guard.
 *
 * Keystatic writes back only the fields its schema knows about, and it refuses
 * to open an entry that holds a key the schema does not declare. Either way an
 * undeclared key is a live bug: the page becomes uneditable, or the key is
 * silently dropped the first time Theresa saves and live content disappears.
 *
 * WHY THIS WAS REWRITTEN
 *
 * The previous version kept its own hand-written list of the declared fields
 * and compared the content against that. It was therefore a second copy of the
 * schema, and it could disagree with the real one without anyone noticing —
 * which is exactly what happened. `education` was removed from the About
 * singleton in c5935c1 but left in this script's list, so the guard went on
 * reporting "0 undeclared fields" while the About page had already become
 * unopenable in the admin, in both locales, on the live site.
 *
 * A guard that keeps its own copy of the thing it is checking cannot catch that
 * class of bug at all. So this version imports keystatic.config.ts and walks
 * the real field objects. There is now one source of truth, and no list here to
 * fall out of date.
 *
 * It also walks the whole tree rather than only the top level: objects, arrays,
 * and conditionals, at any depth. The blog-body breakage that had to be found
 * by hand — 744 blocks stored in a shape Keystatic would not open — is caught
 * by the conditional case below.
 *
 * Run with:  npm run check:schema
 */

import { readFileSync, readdirSync, statSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content");

/**
 * Import the Keystatic config from a Node script.
 *
 * Three obstacles, all of them boring: the config is TypeScript; @keystatic/core
 * is ESM-only with no `require` condition, so it cannot be loaded from CommonJS;
 * and CI and Netlify both run Node 20, which has neither type stripping nor
 * module.registerHooks. So the three self-contained schema files are transpiled
 * to .mjs and imported from there. tsc leaves relative specifiers
 * extensionless, which ESM will not resolve, so they are rewritten.
 *
 * The output goes under node_modules/.cache rather than the system temp dir so
 * that `@keystatic/core` still resolves: from /tmp there is no node_modules to
 * walk up into.
 */
async function loadKeystaticConfig() {
  const sources = ["keystatic.config.ts", "keystatic/fields.ts", "keystatic/pages.ts"];
  const cache = path.join(ROOT, "node_modules", ".cache");
  mkdirSync(cache, { recursive: true });
  const dir = mkdtempSync(path.join(cache, "keystatic-schema-"));
  try {
    for (const rel of sources) {
      const { outputText } = ts.transpileModule(readFileSync(path.join(ROOT, rel), "utf8"), {
        fileName: rel,
        compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
      });
      const js = outputText.replace(
        /(from\s*["'])(\.\.?\/[^"']+?)(["'])/g,
        (whole, before, spec, after) =>
          /\.[a-z]+$/.test(spec) ? whole : `${before}${spec}.mjs${after}`,
      );
      const dest = path.join(dir, rel.replace(/\.ts$/, ".mjs"));
      mkdirSync(path.dirname(dest), { recursive: true });
      writeFileSync(dest, js);
    }
    const mod = await import(pathToFileURL(path.join(dir, "keystatic.config.mjs")).href);
    return mod.default ?? mod.config;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/* ------------------------------------------------------------------ walking */

const problems = [];
const note = (file, where, message) => problems.push({ file, where, message });

/** A Keystatic field object: `kind` is object | array | conditional | form. */
function checkValue(value, field, file, where) {
  switch (field?.kind) {
    case "object":
      checkObject(value, field.fields, file, where);
      break;

    case "array":
      if (!Array.isArray(value)) {
        note(file, where, `declared as a list, but the file holds ${typeName(value)}`);
        break;
      }
      value.forEach((item, i) => checkValue(item, field.element, file, `${where}[${i}]`));
      break;

    case "conditional": {
      // The one shape Keystatic will open a conditional from. This is the check
      // the blog bodies failed: they were stored as { type, text }.
      if (value === null || typeof value !== "object" || Array.isArray(value)) {
        note(file, where, `declared as a conditional block, but the file holds ${typeName(value)}`);
        break;
      }
      const keys = Object.keys(value).sort();
      if (keys.length !== 2 || keys[0] !== "discriminant" || keys[1] !== "value") {
        note(
          file,
          where,
          `conditional blocks must hold exactly { discriminant, value }; this holds { ${Object.keys(value).join(", ")} }`,
        );
        break;
      }
      const inner = field.values?.[value.discriminant];
      if (!inner) {
        note(
          file,
          where,
          `unknown block type "${value.discriminant}" — the schema allows ${Object.keys(field.values ?? {}).join(", ")}`,
        );
        break;
      }
      checkValue(value.value, inner, file, `${where}.value`);
      break;
    }

    default:
      // A leaf (text, select, image, ...). Keystatic coerces these, so there is
      // nothing here that would make an entry refuse to open.
      break;
  }
}

function checkObject(value, fields, file, where) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    note(file, where || "(root)", `declared as a group of fields, but the file holds ${typeName(value)}`);
    return;
  }
  for (const key of Object.keys(value)) {
    const at = where ? `${where}.${key}` : key;
    if (!(key in fields)) {
      note(file, at, "present in the file, not declared in the admin schema");
      continue;
    }
    checkValue(value[key], fields[key], file, at);
  }
}

const typeName = (v) =>
  v === null ? "null" : Array.isArray(v) ? "a list" : typeof v === "object" ? "a group" : `a ${typeof v}`;

/* -------------------------------------------------------------------- files */

function walkDir(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walkDir(full));
    else if (entry.endsWith(".json")) out.push(full);
  }
  return out;
}

const rel = (abs) => path.relative(ROOT, abs).split(path.sep).join("/");

/* --------------------------------------------------------------------- main */

const config = await loadKeystaticConfig();

// Every content file the admin can write, mapped to the schema that governs it.
// Derived from the config, so adding a page to the admin needs no edit here.
const governed = new Map();
for (const entry of Object.values(config.singletons ?? {})) {
  governed.set(`${entry.path}.json`, { fields: entry.schema });
}
// The slug field is deliberately NOT excluded. Keystatic names the file from
// the slug and still stores the field itself, which is why every post carries a
// "title" and still opens; excluding it here flagged all 46 of them.
const collections = Object.values(config.collections ?? {}).map((c) => ({
  prefix: c.path.replace(/\*$/, ""),
  fields: c.schema,
}));

const files = walkDir(CONTENT).sort();
let checked = 0;
const unexposed = [];

for (const abs of files) {
  const r = rel(abs);
  let schema = governed.get(r);
  if (!schema) {
    const c = collections.find((c) => r.startsWith(c.prefix));
    if (c) schema = { fields: c.fields };
  }
  if (!schema) {
    unexposed.push(r);
    continue;
  }
  let data;
  try {
    data = JSON.parse(readFileSync(abs, "utf8"));
  } catch (e) {
    note(r, "(file)", `is not valid JSON: ${e.message}`);
    continue;
  }
  checkObject(data, schema.fields, r, "");
  checked += 1;
}

/* ------------------------------------------------------------------- report */

console.log(
  `Schema coverage: ${checked} file(s) checked against the live admin schema, ${unexposed.length} not exposed yet.`,
);

if (unexposed.length) {
  console.log("\nNot in the admin yet (safe — nothing can save over them):");
  for (const f of unexposed) console.log(`  ${f}`);
}

if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s). Keystatic will refuse to open these entries:\n`);
  const byFile = new Map();
  for (const p of problems) {
    if (!byFile.has(p.file)) byFile.set(p.file, []);
    byFile.get(p.file).push(p);
  }
  for (const [file, list] of byFile) {
    console.error(`  ${file}`);
    for (const p of list) console.error(`     ${p.where}\n        ${p.message}`);
  }
  console.error(
    "\nEither declare the field in keystatic/pages.ts, or remove it from the file.\n" +
      "Do not remove it without checking whether a component still renders it.",
  );
  process.exit(1);
}

console.log("✓ Every value in every exposed file matches the admin schema — entries open, and saving cannot drop content.");
