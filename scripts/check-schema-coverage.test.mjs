#!/usr/bin/env node
/**
 * Regression tests for the schema guard.
 *
 * A guard is only worth having if it fails when it should. Twice now a check
 * reported green over a real breakage — the blog bodies, then the About page —
 * so each failure mode the guard claims to catch is reintroduced here and the
 * guard must reject it.
 *
 * Each case edits a real file, runs the guard, asserts the exit code, and puts
 * the file back. Everything is restored in a finally block, and the run ends by
 * comparing `git status` with what it was before, so a crashed test cannot leave
 * an edit behind unnoticed.
 *
 * Run with:  npm run test:schema-guard
 */

import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const ROOT = process.cwd();
const GUARD = path.join(ROOT, "scripts", "check-schema-coverage.mjs");

/** Runs the guard. Returns its exit code and output; 0 means nothing wrong. */
function runGuard() {
  try {
    const out = execFileSync(process.execPath, [GUARD], { cwd: ROOT, encoding: "utf8", stdio: "pipe" });
    return { code: 0, out };
  } catch (e) {
    return { code: e.status ?? 1, out: `${e.stdout ?? ""}${e.stderr ?? ""}` };
  }
}

/** What the tree looked like before the tests, so we assert on OUR edits only. */
const treeBefore = execFileSync("git", ["status", "--porcelain"], { cwd: ROOT, encoding: "utf8" });

const results = [];
function check(name, expectation, run, expectInOutput) {
  const files = new Map();
  const edit = (rel, transform) => {
    const abs = path.join(ROOT, rel);
    if (!files.has(rel)) files.set(rel, readFileSync(abs, "utf8"));
    writeFileSync(abs, transform(files.get(rel)));
  };
  let result;
  try {
    run(edit);
    result = runGuard();
  } finally {
    for (const [rel, original] of files) writeFileSync(path.join(ROOT, rel), original);
  }
  const { code, out } = result;
  const codeOk = expectation === "fails" ? code !== 0 : code === 0;
  // Asserting on the message too, so a test cannot pass because the guard
  // failed for some unrelated reason.
  const messageOk = !expectInOutput || out.includes(expectInOutput);
  const pass = codeOk && messageOk;
  results.push({ name, expectation, code, pass });
  console.log(
    `  ${pass ? "ok  " : "FAIL"}  ${name}\n         exit ${code} (expected ${expectation})` +
      (expectInOutput ? `, message ${messageOk ? "matched" : `MISSING: "${expectInOutput}"`}` : ""),
  );
}

const editJson = (edit, rel, mutate) =>
  edit(rel, (text) => {
    const data = JSON.parse(text);
    mutate(data);
    return `${JSON.stringify(data, null, 2)}\n`;
  });

/** Removes a whole `name: fields.…(` block from a schema source file. */
const dropSchemaField = (edit, rel, fieldStart, nextField) =>
  edit(rel, (text) => {
    const from = text.indexOf(fieldStart);
    const to = text.indexOf(nextField, from);
    if (from === -1 || to === -1) throw new Error(`could not find ${fieldStart} in ${rel}`);
    return text.slice(0, from) + text.slice(to);
  });

console.log("Schema guard regression tests\n");

// The guard must be green before any of this means anything.
check("baseline: the repository as committed", "passes", () => {});

// 1  In the file, not in the schema. The About outage: the entry will not open.
check(
  "a field on disk that the schema does not declare",
  "fails",
  (edit) =>
    dropSchemaField(edit, "keystatic/pages.ts", "      education: fields.object(", "      psyCoNote: fields.text({"),
  "not declared in the admin schema",
);

// 2  The same failure one level down, which the old top-level-only guard missed.
check("an undeclared field nested inside an object", "fails", (edit) =>
  editJson(edit, "content/en/pages/home.json", (d) => {
    d.steps.modalities.subtitle = "undeclared, three levels down";
  }),
  "steps.modalities.subtitle",
);

// 3  A conditional block in the shape that made all 46 blog posts unopenable.
check("a blog body block stored as { type, text }", "fails", (edit) =>
  editJson(edit, "content/en/posts/what-is-somatic-experiencing.json", (d) => {
    const first = d.body[0];
    d.body[0] = { type: first.discriminant, text: first.value.text ?? "" };
  }),
  "must hold exactly { discriminant, value }",
);

// 4  In the schema, not in the file. Her first save writes it as empty.
check("a schema field missing from the file", "fails", (edit) =>
  editJson(edit, "content/en/pages/privacy.json", (d) => {
    delete d.sections[0].bullets;
  }),
  "the first save will add it as empty",
);

// 5  In types.ts, not in the schema: the site renders what the CMS cannot edit.
//    Uses a page whose field is NOT also removed from the JSON, so this can only
//    be caught by the types-vs-schema comparison and not by check 1.
check("a field types.ts declares that the schema has lost", "fails", (edit) => {
  dropSchemaField(edit, "keystatic/pages.ts", "      education: fields.object(", "      psyCoNote: fields.text({");
  editJson(edit, "content/en/pages/about.json", (d) => delete d.education);
  editJson(edit, "content/de/pages/about.json", (d) => delete d.education);
},
  // Only the types-vs-schema comparison can see this: the field is gone from
  // the JSON too, so neither direction of the file check would fire.
  "a component can render this, but the schema does not declare it",
);

/* ------------------------------------------------------------------ verdict */

const treeAfter = execFileSync("git", ["status", "--porcelain"], { cwd: ROOT, encoding: "utf8" });
if (treeAfter !== treeBefore) {
  console.error("\n✗ the tests changed the working tree. Before and after differ:");
  console.error(`  before:\n${treeBefore || "    (clean)"}\n  after:\n${treeAfter}`);
  process.exit(1);
}
console.log("\n  working tree unchanged — every test edit was reverted");

const failed = results.filter((r) => !r.pass);
if (failed.length) {
  console.error(`\n✗ ${failed.length} of ${results.length} guard tests failed.`);
  console.error("  The guard is not catching something it claims to catch.");
  process.exit(1);
}
console.log(`\n✓ ${results.length}/${results.length} — the guard fails on every breakage it is meant to catch.`);
