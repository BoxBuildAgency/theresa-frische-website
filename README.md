# Theresa Frische — Counselling Website

A production website for **Theresa Frische — Psychological Counselling (Systemic & Integrative)**,
an online, international counselling practice serving internationals, expats, and couples in
transition.
Bilingual (English primary at `/`, German at `/de`), privacy-first, no tracking.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. Content is hard-coded in
typed modules — there is no CMS or database. The contact form sends email via **Resend**. Hosted
on **Netlify**.

---

## ⚠️ Compliance: counselling, not psychotherapy

Theresa is not (yet) licensed to offer psychotherapy in Switzerland, so **the service is described
as counselling only**, in both languages. When editing copy, never reintroduce these words to
describe the service:

- **English:** therapy, psychotherapy, psychotherapist, treatment, treat, diagnosis, diagnose,
  clinical work, patient, heal/healing, cure, symptoms, disorder, mental illness, disease.
- **German:** Therapie, Psychotherapie, Psychotherapeut:in, Behandlung, behandeln, Diagnose,
  diagnostizieren, Patient:in, heilen/Heilung, Symptome, Störung, psychische Krankheit.

Use instead: counselling / **Beratung**, support / Unterstützung, Begleitung, clients /
Klient:innen, navigating, exploring, overwhelm / Überforderung, strain / Belastung. The public
title is always **"Systemic & Integrative Counsellor" / "Systemische & Integrative Beraterin."**
(These terms are allowed where the copy explicitly says the service is *not* psychotherapy — e.g.
the disclaimers — and "corporate mental health" / "Krankenkasse" are kept as standard industry
terms on the Organisations and FAQ pages.)

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

> **Note:** the contact form needs the Resend env vars (below) to actually send. Without them the
> form validates and shows its UI, and the API route returns a configuration error on submit.

---

## Project structure

```
src/
  app/
    (en)/…            English routes — root layout sets <html lang="en">
    (de)/de/…         German routes — root layout sets <html lang="de">
    api/contact/      Resend contact form handler
    sitemap.ts        all EN + DE routes + blog posts
    robots.ts
    not-found.tsx
  components/
    site/             header, footer, language toggle, disclaimer, crisis box, contact form, JSON-LD
    sections/         reusable page sections (hero, CTA band)
    pages/            one component per page, rendered by both locales
    ui/               buttons, container, cards, etc.
  content/
    types.ts          the SiteContent shape both locales implement
    load.ts           reads content/<locale>/*.json and rebuilds SiteContent
    en.ts / de.ts     thin adapters: `loadContent("en" | "de")`
    index.ts          getContent() / blog helpers (posts sorted newest-first)
    blog/related.ts   cluster map: RELATED + PAGE_POSTS (link architecture, not copy)
  lib/
    site.ts           routes table + EN↔DE path mapping
    seo.ts            per-page metadata (canonical + hreflang + OG)
    fonts.ts          next/font (Cormorant Garamond + Inter)
public/
  images/             her 8 photographs + og-default.jpg (see Images below)
  llms.txt, llms-full.txt, llm.txt (legacy duplicate)
content/              THE EDITABLE CONTENT (Keystatic writes here)
  en/ , de/           site.json, pages/*.json, posts/*.json, faq/*.json, services/*.json
keystatic.config.ts   the admin's forms and labels
keystatic/fields.ts   shared field builders (SEO, blog body, facts tables)
scripts/              compliance-sweep.mjs, check-schema-coverage.mjs
```

The two locales render the **same** presentational components, fed by `content/en.ts` and
`content/de.ts`. Only text differs.

### Routes (v2)

English is at the root, German under `/de` with keyword-rich German slugs. The single source of
truth is the `ROUTES` table in `src/lib/site.ts` — it drives the language toggle, `hreflang`,
canonicals, breadcrumbs and the sitemap, so **adding or renaming a page means editing that table
and nothing else**.

| Page | EN | DE |
| --- | --- | --- |
| Home | `/` | `/de` |
| About | `/about` | `/de/ueber-mich` |
| Work With Me | `/work-with-me` | `/de/angebot` |
| → Psychological Counselling | `/work-with-me/psychological-counselling` | `/de/angebot/psychologische-beratung` |
| → Couples Counselling | `/work-with-me/couples-counselling` | `/de/angebot/paarberatung` |
| → Burnout Prevention | `/work-with-me/burnout-prevention` | `/de/angebot/burnout-praevention` |
| → Somatic Experiencing® | `/work-with-me/somatic-experiencing` | `/de/angebot/somatic-experiencing` |
| For Organisations | `/organisations` | `/de/fuer-unternehmen` |
| → Talks, Workshops & Courses | `/organisations/talks-workshops-courses` | `/de/fuer-unternehmen/vortraege-workshops-kurse` |
| → Leadership Coaching | `/organisations/leadership-coaching` | `/de/fuer-unternehmen/fuehrungskraefte-coaching` |
| → Employee Counselling | `/organisations/employee-counselling` | `/de/fuer-unternehmen/beratung-mitarbeitende` |
| Weekly Wellbeing | `/weekly-wellbeing` | `/de/weekly-wellbeing` |
| Blog (23 posts) | `/blog`, `/blog/[slug]` | `/de/blog`, `/de/blog/[slug]` |
| FAQ (9 categories, 59 Qs) | `/faq` | `/de/faq` |
| Contact | `/contact` | `/de/contact` |
| AI Info | `/ai-info` | `/de/ai-info` |
| Impressum | `/impressum` | `/de/impressum` |
| Privacy | `/privacy` | `/de/datenschutz` |
| Terms & Conditions | `/terms` | `/de/agb` |

The pre-v2 paths (`/work-together`, `/de/work-together`, `/de/about`, `/de/organisations`) 301 to
their new homes via `redirects()` in `next.config.ts`.

Main-nav dropdowns (desktop hover **and** click, mobile accordion) come from the optional
`children` array on each `nav` item in `content/en.ts` / `de.ts`.

### Multiple root layouts (how the language toggle works)

There is intentionally **no `src/app/layout.tsx`**. Each route group — `(en)` and `(de)` — has its
own root layout so it can set the correct `<html lang>`. Switching EN↔DE is a full page load (by
design, so the language attribute is always correct). Path mapping lives in `counterpartPath()` in
`src/lib/site.ts`.

---

## Editing content

Day to day, edit in the admin at **`/keystatic`** — see "Editing the site" below. Under the
hood the copy is JSON in `content/en/` and `content/de/`, which you can also edit by hand.
The shape is enforced by `src/content/types.ts`, so TypeScript flags anything missing, and
`npm run check:schema` flags anything the admin does not yet know about.

**Keep both languages in sync**, keep the same slug/id for a page in EN and DE (the language
toggle and hreflang depend on it), and keep the compliance rules above.

### Blog & FAQ content

There are **23 full blog posts** (EN + DE) and **9 FAQ categories (59 questions)**. To keep files
manageable, blog posts and the FAQ live in their own modules under `src/content/blog/` and
`src/content/faq/`, assembled by `posts.en.ts` / `posts.de.ts` and `faq.en.ts` / `faq.de.ts` and
imported into `en.ts` / `de.ts`. Posts are shown newest-first (sorted by `date`).

**Add a blog post:** in the admin, open **Blog articles — EN**, click *New*, and create the
matching German entry under **Blog articles — DE** using the *same slug*. The index card, the
`/blog/[slug]` page, the sitemap and the Article JSON-LD all follow automatically. Tick "Hide
this article" to keep a draft out of the site.

---

## Environment variables

Copy `.env.example` to `.env.local` for local development, and set the same values in the Netlify
UI for production.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from Theresa's Resend account |
| `CONTACT_TO_EMAIL` | Where enquiries are delivered (currently `theresafrische@gmail.com`) |
| `CONTACT_FROM_EMAIL` | The "from" sender — **must be on a domain verified in Resend** |

The contact form collects **name, email, and a short message only** — no health data — and is
**relayed by email, never stored**.

---

## Deploy (Netlify + Resend + GoDaddy DNS)

1. **Resend:** in Theresa's own Resend account, add and verify the sending domain
   (e.g. `theresafrische.com`), then create an API key. Set `CONTACT_FROM_EMAIL` to an address on
   that verified domain (e.g. `hello@theresafrische.com`). For an interim preview you can use
   `onboarding@resend.dev` as the sender.
2. **Netlify:** create a new site from this repo. `netlify.toml` already configures the build and
   the `@netlify/plugin-nextjs` plugin — no manual build settings needed.
3. **Env vars:** in *Site settings → Environment variables*, add `RESEND_API_KEY`,
   `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Redeploy.
4. **Domain (GoDaddy):** the domain stays at GoDaddy. Point it at Netlify either by adding it as a
   custom domain in Netlify and following Netlify's DNS instructions (recommended), or by adding a
   `CNAME`/`A`/`ALIAS` record at GoDaddy to the Netlify target. Netlify provisions HTTPS
   automatically once DNS resolves.
5. **Migration deadline:** the old Hostinger hosting expires **28 October 2026** — the site must be
   live on Netlify before then.

---

## Editing the site (Keystatic admin)

**What it is, in two sentences.** Keystatic is a small admin panel built into the
website at `/keystatic`. When Theresa saves an edit it writes the change straight into
the project's files on GitHub and Netlify rebuilds the site — so there is no database,
no extra monthly cost, and every change has a full history that can be undone.

Content lives as JSON under `content/en/` and `content/de/`. `src/content/load.ts`
reads those files at build time and rebuilds the exact same `SiteContent` shape the
components already used, so the rendered pages are unchanged.

### What José must do before Theresa can log in

1. **Create a GitHub OAuth app** — GitHub → Settings → Developer settings → OAuth Apps
   → *New OAuth App*:
   - Application name: `Theresa Frische site admin`
   - Homepage URL: `https://theresafrische.com`
   - **Authorization callback URL:** `https://theresafrische.com/api/keystatic/github/oauth/callback`
   - After creating it, also add a second callback for the staging domain if you want
     to test there: `https://<site>.netlify.app/api/keystatic/github/oauth/callback`
2. **Set these environment variables in Netlify** (Site settings → Environment variables):
   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | the app slug from the OAuth app's URL |
   | `KEYSTATIC_GITHUB_CLIENT_ID` | from the OAuth app |
   | `KEYSTATIC_GITHUB_CLIENT_SECRET` | from the OAuth app |
   | `KEYSTATIC_SECRET` | any long random string (`openssl rand -hex 32`) |
   Without `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` the admin falls back to local mode,
   which is what you want for `npm run dev`.
3. **Give Theresa access to the repo** — invite her GitHub account to
   `BoxBuildAgency/theresa-frische-website` with **Write** access. Keystatic commits as
   the signed-in user, so she needs write permission for saves to work.

### The compliance check (why full editing is safe)

Every push — including the commits Keystatic makes when Theresa saves — runs
`.github/workflows/checks.yml`, which runs:

```bash
npm run check:compliance   # counselling-only wording, EN + DE
npm run check:schema       # the admin cannot silently drop a field
npm run build
npm run lint
```

If the wording check fails, **the build fails and the change never reaches the live
site**. The failure message is written for a non-developer and names the word and the
file, e.g. *"The word 'Psychotherapie' was found in content/de/pages/home.json (line 7).
… reword the sentence and save again."* Nothing is lost when this happens — the live
site simply stays as it was until the wording is fixed.

To run it yourself before pushing: `npm run check:compliance`.

### Undoing a bad edit

Every save is a normal git commit, so:

```bash
git log --oneline -- content/          # find the commit
git revert <commit>                    # undo it, keeping history
git push
```

Or on github.com: open the commit → **Revert**. Netlify rebuilds automatically.

### Adding a new field or collection later

1. Add the field to `keystatic.config.ts` (give it a plain-English `label` and a
   `description` saying where it appears).
2. Add the same key to the matching type in `src/content/types.ts`.
3. Add it to `DECLARED` in `scripts/check-schema-coverage.mjs`.
4. Run `npm run check:schema` — it fails if a content file has a key the admin does not
   declare, which is the situation that would silently delete content on save.

### What is in the admin today

**Everything.** `npm run check:schema` reports 106 content files exposed, 0 not exposed,
and 0 undeclared fields — so there is no page Theresa can open, save, and accidentally
strip. Grouped in the sidebar by how often she will need them:

- **Blog articles** (EN + DE) — all 23, with the article body built block by block
- **Questions & answers** (EN + DE) — all 9 categories, their questions, and page order
- **Service pages** (EN + DE) — the four Work With Me and three For Organisations children
- **Main pages** (EN + DE) — Home, About, Work With Me overview, For Organisations
  overview, Weekly Wellbeing, Contact, Blog page, FAQ page, AI info, and the
  "page not found" message
- **Site-wide text** (EN + DE) — menus, footer, the discovery-call button, the disclaimer
  and the crisis resources (the last two flagged as safety-critical in the form)
- **Legal pages** (EN + DE) — Impressum, Privacy/Datenschutz, Terms/AGB, each flagged as
  legally consequential

Every page also has its own **Page title** and **Search description** fields for Google.
Canonical URLs and hreflang stay generated in code from the routes table — making them
editable would break the EN/DE pairing.

A few fields carry warnings rather than being locked: the About qualifications and the
recognition note (worded deliberately for regulatory reasons), the disclaimer and crisis
resources, and the legal pages. They are editable, but the form says to check with José.

### A note on the lockfile and CI

CI installs with `npm install`, not `npm ci`. The lockfile is resolved on macOS, and on
Linux npm hoists part of the tree differently (chokidar needs `picomatch@2`, tinyglobby
needs `picomatch@4`, and the two platforms disagree about which sits at the root of
`node_modules`). `npm ci` demands an exact lockfile/tree match and fails on the runner;
`npm install` honours the lockfile where it can and reconciles the rest.

**Worth watching on the first Netlify deploy:** Netlify also builds on Linux and runs
`npm ci` when a lockfile is present, so it may hit the same error. If it does, the fix is
to commit a lockfile generated on Linux (run `npm install` once in a Linux container or in
CI and commit the result).

## Go-live checklist

The staging deploy is deliberately kept out of search indexes. `next.config.ts` sends
`X-Robots-Tag: noindex, nofollow` **only** when the request Host ends in `.netlify.app`, so it
switches itself off automatically once the site is served from `theresafrische.com` — there is no
site-wide noindex to remember to remove. Canonicals already point at the production domain, which is
correct for go-live.

At go-live, in order:

1. Point `theresafrische.com` at Netlify and wait for HTTPS to provision.
2. Verify the noindex is **gone** on production and **still present** on staging:
   ```bash
   curl -sI https://theresafrische.com/ | grep -i x-robots-tag     # expect: no output
   curl -sI https://<site>.netlify.app/ | grep -i x-robots-tag     # expect: noindex, nofollow
   ```
3. Set the Resend env vars (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) and send a
   test enquiry through the contact form.
4. Submit `https://theresafrische.com/sitemap.xml` in Google Search Console, and confirm the
   property is verified on the production domain (not the Netlify subdomain).
5. Replace the two remaining placeholders if they have changed: nothing outstanding in the legal
   pages, but re-check the Impressum address and the published phone number.

## Privacy / analytics

There is **no analytics, no tracking, and no cookies** at launch, so **no cookie-consent banner is
required**. If analytics (or any third-party script that sets cookies / processes personal data) is
added later, you **must** add a cookie-consent banner and update the privacy policy accordingly.

---

## Images

All imagery is **Theresa's own photography**, supplied in `assets-v2/` and optimised into
`public/images/` (long edge 2000px, JPEG q82; `next/image` negotiates WebP/AVIF per browser, with
the JPEG as the fallback). The three earlier Unsplash placeholders have been retired — the files
were overwritten with her photographs, so no code references changed.

| File | Source photograph | Placement |
| --- | --- | --- |
| `hero.jpg` | Blonde Haare am Strand | Home hero, full-bleed behind the headline (`priority`) |
| `about-theresa.jpg` | Headshot | About portrait (4:5) and the Home about block |
| `weekly-wellbeing.jpg` | Weekly Wellbeing | Weekly Wellbeing hero (`priority`) |
| `organisations.jpg` | Organisation Page | For Organisations, her delivering a seminar |
| `band-quote.jpg` | Schattenspiel | Home testimonials band (under a Pine scrim) |
| `band-cta.jpg` | Wasserreflexion mit Horizont | The recurring CTA band (under a Pine scrim) |
| `band-meadow.jpg` | Frühlingswiese im Morgentau | Work With Me — Switzerland/international band |
| `band-olive.jpg` | Olivenzweig im Himmel | About quotes band (under a Pine scrim) |
| `og-default.jpg` | generated | Open Graph / social card |

To swap a photograph, replace the file **keeping the same filename and roughly the same aspect
ratio**; nothing else needs editing. The hero scrim is tuned for a light image — the headline
measures ~12.6:1 against it (AA needs 4.5:1). If a darker hero is ever used, lighten the scrim
gradient in `HomePage.tsx`.

## Design tokens (v2)

Her v2 palette sits alongside the original warm-sand system, with contrast verified for every
pairing (see the comments in `src/app/globals.css`):

- **Pine `#1F2E27`** — hero/CTA/dark section backgrounds. Cream on Pine = 13.3:1.
- **Clay `#C4A35A`** — gold accent for eyebrows, hairlines and quote marks **on Pine only**
  (5.9:1 there; it fails at 2.2:1 on light, so it is never used as text on light).
- **Clay Deep `#9C7C3D`** — 3.7:1 on light: large text, rules and borders only.
- **Clay Ink `#7A5F2C`** — added because the 12px uppercase eyebrow is *small* text and needs
  4.5:1, which Clay Deep does not reach. 5.6:1 on cream. (This also fixed the previous sage
  eyebrow, which failed at 3.4:1.)

Typography stays Cormorant Garamond + Inter (not Fraunces), and the primary button stays
forest-on-cream (10.1:1) rather than her Clay Deep fill, which would fail AA for button text.

## Assumptions & notes for handover

- **Open items still needing Theresa's input** (not invented here): no booking link exists, so the
  CTA routes to the contact form; her document asks for a public phone number — confirm she is
  happy for her personal mobile to be published. The Terms & Conditions / AGB are now live at
  `/terms` and `/de/agb` from her supplied draft (24-hour cancellation notice, invoice payable within
  14 days, full fee for a late cancellation or no-show, dated 30 July 2026) — she should have them
  checked by a German lawyer before go-live, and no fees are published on the site.
- **Deliberately omitted pending her written go-ahead:** the psychotherapy-qualification claim
  ("in postgraduate training as a licensed psychological psychotherapist" / "Approbationsausbildung"),
  "Therapy/Therapie" as a heading or offering, `MedicalBusiness`/`HealthAndBeautyBusiness` schema,
  and any "soon in Zug" / in-person or Swiss-location availability claim. Switzerland appears only
  as an *online* audience reference, structured so a real location can be switched on later with a
  content edit alone.
- **On-site delivery for organisations** ("Online or on-site, Germany & Switzerland") is kept: it is
  pre-existing approved copy about corporate workshops she travels to deliver, not a counselling
  practice location. Worth confirming with her that this framing is still right.
- **Legal pages — two fields pending Theresa:** the **postal address** and **VAT status** were
  marked pending in `business-details.md`, which explicitly instructed to ship clearly-marked
  placeholders and continue. They render as `Address: [to be added]` / `Anschrift: [Adresse wird
  ergänzt]` and the §19 UStG Kleinunternehmer note. **Replace these in `src/content/en.ts` and
  `de.ts` (the `impressum` and `privacy` keys) before go-live.** Everything else in the legal pages
  is final.
- **Partner logos (AXA / Siemens / Trusted Shops / Cornings):** named testimonials are included as
  supplied; do not add company logos without written permission.
- **`CONTENT.md` and `business-details.md`** are kept in the repo root as the working source
  references.

---

## GitHub

If you need to set the remote manually:

```bash
git remote add origin https://github.com/<owner>/theresa-frische-website.git
git push -u origin main
```
