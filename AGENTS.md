<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# A green build is not evidence the CMS works

Theresa edits this site herself through Keystatic at `/keystatic`, and every save
is a commit. Twice now she has been blocked by something every check reported as
fine:

- **the blog bodies** — all 46 posts unopenable, because the blocks were stored
  in a shape Keystatic refuses to read
- **the About page** — unopenable in both locales for eight days, because a
  schema field was deleted while the content and the renderer kept using it

Both times the site built, the tests passed, the pages rendered correctly for
visitors, and she was the one who found it. The build proves the site renders.
It proves nothing about whether she can edit it.

## End every round with this

Before reporting a round complete, run the dev server with no `KEYSTATIC_*`
variables set — that is local mode, where the admin writes straight to disk —
and:

1. Open an entry in **both** locales at `/keystatic`, including any entry whose
   schema or content you touched.
2. Confirm each opens with **no validation error**. "Failed validation: field
   key on object value X is not allowed" means an entry is unopenable for her.
3. Make a small edit and save it. Confirm the write lands on disk, and confirm
   the diff is only your edit: nothing dropped, nothing reordered, no unrelated
   field added.
4. Revert the edit and prove the tree is clean with `git status`.

Note that clicking Save without editing writes nothing — Keystatic no-ops when
the form is not dirty — so a real edit is needed to test a save.

## The guard, and its limits

`npm run check:schema` reads the real `keystatic.config.ts` and checks three
directions, because content, schema and renderer can disagree in three ways:

| in the file, not the schema | the entry refuses to open |
| in the schema, not the file | the first save writes it as empty |
| in `types.ts`, not the schema | the site renders what the CMS cannot edit |

`npm run test:schema-guard` proves the guard still fails on each of those. Both
are blocking in CI. Run them, but do not treat them as a substitute for step 1
above: they catch the shapes we have already been bitten by, not every way
Keystatic can refuse an entry.

**Never hand-maintain a second copy of the schema.** The old guard did, the copy
drifted from the real schema, and that is precisely why the About outage went
unreported for eight days.
