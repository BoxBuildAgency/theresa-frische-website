# theresafrische.com

A bilingual marketing site for a counselling practice. English at `/`, German at `/de`, with
full parity between the two: every page exists in both languages and the language toggle maps
each URL to its counterpart.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. Content lives in JSON and is
edited through **Keystatic**, a git-based CMS: every save is a commit, and the commit triggers a
rebuild. There is no database. The contact form sends email through **Resend**. Hosted on
**Netlify**.

---

## Run locally

```bash
npm ci
npm run dev        # http://127.0.0.1:3000
```

Use `127.0.0.1`, not `localhost`. Keystatic redirects to it when GitHub storage is configured,
because GitHub App callbacks cannot use `localhost`.

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run check:schema` | Verifies the CMS schema covers every field on disk (see below) |
| `npm run check:compliance` | Advisory wording check. Never fails the build. |

The contact form needs the Resend variables below to send. Without them the form renders and
the API route returns a configuration error rather than failing silently.

---

## Project structure

```
src/
  app/
    (en)/…            English routes; this route group's layout sets <html lang="en">
    (de)/de/…         German routes; its own layout sets <html lang="de">
    (keystatic)/…     The admin, in its own route group
    api/contact/      Resend handler for the contact form
    api/keystatic/    Keystatic's API route
    sitemap.ts        Generated from the ROUTES table
    robots.ts
    llms.txt/ …       Route handlers serving src/content/llms/*.txt
  components/
    site/             Header, footer, language toggle, forms, JSON-LD
    sections/         Reusable page sections
    pages/            One component per page, shared by both locales
    ui/               Buttons, containers, cards
  content/
    types.ts          The SiteContent shape both locales implement
    load.ts           Reads content/<locale>/*.json and rebuilds SiteContent
    en.ts / de.ts     Thin adapters over load.ts
    index.ts          getContent() and the blog helpers
  lib/
    site.ts           ROUTES table, EN↔DE path mapping, breadcrumbs
    seo.ts            Per-page metadata: canonical, hreflang, Open Graph
content/              The editable content. Keystatic writes here.
  en/ , de/           site.json, pages/*.json, posts/*.json, faq/*.json, services/*.json
keystatic.config.ts   Admin configuration
keystatic/            Field builders and the page singletons
scripts/              check-schema-coverage.mjs, compliance-sweep.mjs
```

Both locales render the **same** presentational components, fed by different content. Only text
differs.

### Multiple root layouts

There is intentionally **no `src/app/layout.tsx`**. Each route group provides its own root
layout so it can set the correct `<html lang>`. Switching language is a full page load, by
design, so the language attribute is always right.

### Routing

`ROUTES` in `src/lib/site.ts` is the single source of truth. It drives the language toggle,
`hreflang`, canonicals, breadcrumbs and the sitemap, so **adding or renaming a page means
editing that table and nothing else**. German slugs are keyword-rich rather than transliterated,
for example `/work-with-me/couples-counselling` ↔ `/de/angebot/paarberatung`.

---

## Content and the CMS

Content is JSON under `content/<locale>/`, read synchronously by `src/content/load.ts`. It is
synchronous deliberately: `getContent()` is called from `sitemap.ts`, from `generateMetadata`
and from server components at build time, and every page is statically generated, so reading
from disk during the build is safe and keeps the whole content API synchronous.

In development the content is re-read on every request, so a save in the admin shows up on the
next page load. In production it is read once at build time.

### Two guards worth understanding

**`npm run check:schema` is a hard gate.** Keystatic writes back only the fields its schema
declares, so a field present on disk but missing from the schema would be silently deleted the
first time that page is saved. This check compares the two and fails if they drift. It also
verifies that blog post bodies are stored as `{ discriminant, value }`, which is the only shape
Keystatic will open a conditional field from.

**`npm run check:compliance` is advisory and always exits 0.** It reports where certain words
appear in the content so the author can see them. It does not block a save or a deploy.

### Adding a field

1. Add it to the type in `src/content/types.ts`
2. Add it to the matching singleton or collection in `keystatic/`
3. Add it to the JSON for **both** locales, in the same position as the schema
4. Run `npm run check:schema`

Content files are kept in schema field order. Keystatic rewrites a file in that order when it
saves, so matching it means an editor's first save produces a small diff rather than a
whole-file reorder.

### Undoing an edit

Every save is a commit, so `git revert` on that commit restores the previous text and triggers a
rebuild. The commit history is the undo mechanism and should not be rewritten.

---

## Environment variables

Copy `.env.example` to `.env` and fill it in. Nothing here is committed.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Contact form delivery |
| `CONTACT_TO_EMAIL` | Where enquiries arrive |
| `CONTACT_FROM_EMAIL` | Sender; must be on a domain verified in Resend |
| `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | GitHub App slug, e.g. `theresa-frische-content` |
| `KEYSTATIC_GITHUB_CLIENT_ID` | GitHub App client ID |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | GitHub App client secret |
| `KEYSTATIC_SECRET` | Session secret, `openssl rand -hex 40` |
| `KEYSTATIC_PUBLIC_URL` | Optional. Pins the public origin if the host does not set forwarded headers. |

The four `KEYSTATIC_*` variables switch the admin from local mode to GitHub mode. Set none of
them locally and the admin writes straight to disk, which is the easier way to develop.

`NEXT_PUBLIC_*` variables are inlined at build time, so changing one in Netlify requires a
redeploy before it takes effect.

---

## Deployment

Netlify builds from `main` using `@netlify/plugin-nextjs`. Every push rebuilds; every Keystatic
save is a push.

The lockfile is **generated on Linux**, which is what CI and Netlify build on, so `npm ci` can
enforce it exactly. `npm` resolves the dependency tree differently per platform, and a
macOS-resolved lockfile fails `npm ci` on Linux. If you add or upgrade a dependency, regenerate
the lockfile with the workflow in `.github/workflows/lockfile.yml` rather than committing
whatever macOS produced.

### Staging is kept out of search

`next.config.ts` sends `X-Robots-Tag: noindex, nofollow` only when the request host ends in
`.netlify.app`, so it switches itself off on the production domain with nothing to remember at
go-live. Canonicals always point at the production domain. `/keystatic` is noindexed on every
host and disallowed in `robots.txt`.

### Behind the proxy

Keystatic builds its OAuth `redirect_uri` from `request.url`, which behind Netlify is the
internal deploy URL rather than the public one. `src/app/api/keystatic/[...params]/route.ts`
rebuilds the URL from `x-forwarded-host` before delegating. Without it, GitHub rejects the login.

---

## Privacy

No analytics, no tracking, no cookies, therefore no consent banner. The only personal data the
site collects is what a visitor types into the contact form, which is relayed by email and not
stored. Keeping it that way is a deliberate constraint, not an oversight.

---

## Images

Photography lives in `public/images/`, served through `next/image`. Everything except the Open
Graph card is WebP; the OG card stays JPEG at 1200×630 because some scrapers still do not
accept WebP.

Portraits render at their source aspect ratio inside a max-height cap rather than a forced
square, so faces are never cropped at the chin or forehead. If you replace a portrait, keep
roughly the same aspect ratio, and check `object-position` in the component if the subject sits
somewhere unusual in the frame.

The home hero portrait is editable in the admin, separately from the About photograph. It takes
a path to a file already in `public/images/`; uploading is deliberately not part of the admin,
so that optimisation and naming stay consistent.

---

## Design tokens

Defined in `src/app/globals.css`. Contrast was checked for every pairing in use:

- **Pine `#1F2E27`** — dark section backgrounds. Cream on Pine is 13.3:1.
- **Clay `#C4A35A`** — gold accent, on Pine only. It fails on light backgrounds.
- **Clay Deep `#9C7C3D`** — 3.7:1 on light: large text, rules and borders only.
- **Clay Ink `#7A5F2C`** — 5.6:1 on cream, for the small uppercase eyebrow, which is small text
  and needs 4.5:1.

> **Known gap.** `--color-ink-muted` (`#857c70`) measures 3.84:1 on cream and 3.58:1 on sand,
> below the 4.5:1 AA needs at the 12–14px it is used at. Darkening it to `#746c61` clears AA and
> is a ~13% change. Not applied yet.

Typography is Cormorant Garamond for headings and Inter for body, both via `next/font`.
