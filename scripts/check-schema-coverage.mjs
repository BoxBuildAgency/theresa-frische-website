#!/usr/bin/env node
/**
 * Schema-coverage guard.
 *
 * Keystatic writes back only the fields its schema knows about. If a content
 * file has a key the schema does not declare, that key is silently DROPPED the
 * first time Theresa saves that page — which would quietly delete live content.
 *
 * This check compares the top-level keys of every content file against the
 * fields declared in keystatic.config.ts, and fails if a file is exposed in the
 * admin with an incomplete schema. Files not yet exposed are reported as
 * "not in the admin yet" and are safe, because nothing can save over them.
 *
 * Run with:  npm run check:schema
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

/**
 * Read every Keystatic source file, so exposure is detected wherever the
 * singleton/collection is declared (keystatic.config.ts or keystatic/*.ts).
 */
const cfg = [
  path.join(ROOT, "keystatic.config.ts"),
  ...readdirSync(path.join(ROOT, "keystatic"))
    .filter((f) => f.endsWith(".ts"))
    .map((f) => path.join(ROOT, "keystatic", f)),
]
  .map((f) => readFileSync(f, "utf8"))
  .join("\n");

/** Which content files does the admin expose for editing? */
const exposed = [];
const collectionPath = (dir) => new RegExp("path: `content/\\$\\{locale\\}/" + dir + "/\\*`");
if (collectionPath("posts").test(cfg)) exposed.push(/^content\/(en|de)\/posts\/[^/]+\.json$/);
if (collectionPath("faq").test(cfg)) exposed.push(/^content\/(en|de)\/faq\/[^/]+\.json$/);
if (/path: `content\/\$\{locale\}\/services\/\$\{key\}`/.test(cfg))
  exposed.push(/^content\/(en|de)\/services\/[^/]+\.json$/);
if (/path: `content\/\$\{locale\}\/site`/.test(cfg)) exposed.push(/^content\/(en|de)\/site\.json$/);

// Page singletons are declared either with a literal path template or via the
// `at(locale, "name")` helper in keystatic/pages.ts.
const PAGE_NAMES = [
  "home", "about", "workTogether", "organisations", "weeklyWellbeing",
  "blog", "faq", "contact", "aiInfo", "notFound", "impressum", "privacy", "terms",
];
for (const name of PAGE_NAMES) {
  const literal = new RegExp("path: `content/\\$\\{locale\\}/pages/" + name + "`");
  const viaHelper = new RegExp('at\\(locale, "' + name + '"\\)');
  if (literal.test(cfg) || viaHelper.test(cfg))
    exposed.push(new RegExp("^content/(en|de)/pages/" + name + "\\.json$"));
}

/** Declared field names per content shape, read from the config source. */
const DECLARED = {
  posts: ["title", "category", "date", "readingTime", "excerpt", "body", "draft"],
  faq: ["title", "order", "items"],
  services: ["eyebrow", "heading", "lead", "paras", "numbered", "facts", "crossLinks", "metaTitle", "metaDescription"],
  site: ["locale", "htmlLang", "brand", "nav", "header", "footer", "cta", "disclaimer", "blogDisclaimer", "crisis"],
  impressum: ["heading", "blocks", "metaTitle", "metaDescription"],
  privacy: ["heading", "intro", "sections", "metaTitle", "metaDescription"],
  terms: ["heading", "sections", "version", "metaTitle", "metaDescription"],
  home: ["metaTitle", "metaDescription", "eyebrow", "heroTitle", "heroTitleAccent", "heroLead", "heroParas", "heroEmphasis", "heroPrimary", "heroSecondary", "testimonial", "audience", "practical", "reachLine", "trustPillars", "steps", "privatePay", "aboutBlock", "testimonials"],
  about: ["metaTitle", "metaDescription", "eyebrow", "name", "subtitle", "credentials", "lead", "intro", "imageAlt", "lived", "philosophy", "quotes", "education", "philosophySections", "psyCoNote"],
  workTogether: ["metaTitle", "metaDescription", "eyebrow", "heading", "intro", "discovery", "quote", "individual", "couples", "closing", "cards", "switzerland"],
  organisations: ["metaTitle", "metaDescription", "eyebrow", "heading", "lead", "intro", "facts", "formats", "individual", "topics", "approach", "testimonials", "closing", "cards"],
  weeklyWellbeing: ["metaTitle", "metaDescription", "eyebrow", "heading", "lead", "intro", "imageAlt", "facts", "why", "quotes", "closing"],
  blog: ["metaTitle", "metaDescription", "eyebrow", "heading", "intro", "allLabel", "readMore", "backToBlog", "relatedHeading", "authorHeading", "authorBody", "minRead"],
  faqPage: ["metaTitle", "metaDescription", "eyebrow", "heading", "intro", "jumpLabel"],
  contact: ["metaTitle", "metaDescription", "eyebrow", "heading", "lead", "form", "directHeading", "directBody", "emailLabel", "phoneLabel"],
  aiInfo: ["metaTitle", "metaDescription", "eyebrow", "heading", "intro", "updated", "sections"],
  notFound: ["title", "body", "cta"],
};

function shapeOf(rel) {
  if (/\/posts\//.test(rel)) return "posts";
  // pages/faq.json is the FAQ *page* chrome; faq/*.json are the categories.
  if (/\/pages\/faq\.json$/.test(rel)) return "faqPage";
  for (const p of ["home", "about", "workTogether", "organisations", "weeklyWellbeing", "blog", "contact", "aiInfo", "notFound"]) {
    if (new RegExp(`/pages/${p}\\.json$`).test(rel)) return p;
  }
  if (/\/faq\//.test(rel)) return "faq";
  if (/\/services\//.test(rel)) return "services";
  if (/\/site\.json$/.test(rel)) return "site";
  if (/\/pages\/impressum\.json$/.test(rel)) return "impressum";
  if (/\/pages\/privacy\.json$/.test(rel)) return "privacy";
  if (/\/pages\/terms\.json$/.test(rel)) return "terms";
  return null;
}

function walk(dir) {
  const out = [];
  for (const n of readdirSync(dir)) {
    const p = path.join(dir, n);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (n.endsWith(".json")) out.push(p);
  }
  return out;
}

const problems = [];
let checked = 0;
let notExposed = 0;

for (const abs of walk(path.join(ROOT, "content"))) {
  const rel = path.relative(ROOT, abs).split(path.sep).join("/");
  const isExposed = exposed.some((re) => re.test(rel));
  if (!isExposed) {
    notExposed++;
    continue;
  }
  const shape = shapeOf(rel);
  const declared = DECLARED[shape];
  if (!declared) continue;
  checked++;
  const keys = Object.keys(JSON.parse(readFileSync(abs, "utf8")));
  const missing = keys.filter((k) => !declared.includes(k));
  if (missing.length) problems.push({ rel, missing });
}

/**
 * Blog body blocks must be stored the way Keystatic stores a `fields.conditional`:
 * exactly `{ discriminant, value }`.
 *
 * This is not cosmetic. Keystatic refuses to OPEN an entry whose conditional
 * blocks are shaped differently — "Must only contain keys discriminant and
 * value" — so a post in the wrong shape is not editable at all. The top-level
 * check above cannot see this, because `body` is a valid top-level key either
 * way; that is exactly how it went unnoticed until every post was affected.
 */
const BLOCK_FIELDS = {
  p: ["text"],
  h2: ["text"],
  ul: ["items"],
  quote: ["text", "attribution"],
};

const blockProblems = [];
for (const abs of walk(path.join(ROOT, "content"))) {
  const rel = path.relative(ROOT, abs).split(path.sep).join("/");
  if (!/\/posts\/[^/]+\.json$/.test(rel)) continue;
  const body = JSON.parse(readFileSync(abs, "utf8")).body;
  if (!Array.isArray(body)) continue;
  body.forEach((block, i) => {
    const keys = Object.keys(block ?? {}).sort();
    if (keys.length !== 2 || keys[0] !== "discriminant" || keys[1] !== "value") {
      blockProblems.push(`${rel} — block ${i} has keys [${keys}], expected [discriminant, value]`);
      return;
    }
    const allowed = BLOCK_FIELDS[block.discriminant];
    if (!allowed) {
      blockProblems.push(`${rel} — block ${i} has unknown type "${block.discriminant}"`);
      return;
    }
    const extra = Object.keys(block.value ?? {}).filter((k) => !allowed.includes(k));
    if (extra.length) {
      blockProblems.push(`${rel} — block ${i} (${block.discriminant}) has unknown field(s): ${extra}`);
    }
  });
}

if (blockProblems.length) {
  console.error("\n✗ Blog post bodies are not in the shape Keystatic requires.");
  console.error("  Posts in this state cannot be opened in the admin at all.\n");
  for (const p of blockProblems.slice(0, 20)) console.error(`  ${p}`);
  if (blockProblems.length > 20) console.error(`  … and ${blockProblems.length - 20} more`);
  process.exit(1);
}

console.log(`Schema coverage: ${checked} file(s) exposed in the admin, ${notExposed} not exposed yet.`);
console.log(`Blog body blocks: all conditional blocks stored as { discriminant, value }.`);
if (!problems.length) {
  console.log("✓ Every field of every exposed file is declared — saving cannot drop content.");
  process.exit(0);
}
console.error("\n✗ These files are editable in the admin but have undeclared fields.");
console.error("  Saving them in Keystatic would DELETE the fields listed. Add them to");
console.error("  keystatic.config.ts (and to DECLARED in this script) before shipping.\n");
for (const p of problems) console.error(`  ${p.rel}\n     undeclared: ${p.missing.join(", ")}`);
process.exit(1);
