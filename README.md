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
    en.ts             English copy (source of truth) — imports blog + faq modules
    de.ts             German translation — imports blog + faq modules
    index.ts          getContent() / blog helpers (posts sorted newest-first)
    blog/             blog posts, split out of en.ts/de.ts
      set-existing.ts, set-a.ts … set-f.ts   post batches (each exports *En / *De)
      posts.en.ts / posts.de.ts              assemble all 23 posts in order
      related.ts                             cluster map: RELATED + PAGE_POSTS
    services/         long-form Work With Me / For Organisations child pages
      work-with-me.ts                        wwmChildrenEn / wwmChildrenDe
      organisations.ts                       orgChildrenEn / orgChildrenDe
    faq/              FAQ, grouped into categories
      faq-1.ts, faq-2.ts, faq-3.ts           category batches (*En / *De)
      faq.en.ts / faq.de.ts                  assemble all 9 categories
  lib/
    site.ts           routes table + EN↔DE path mapping
    seo.ts            per-page metadata (canonical + hreflang + OG)
    fonts.ts          next/font (Cormorant Garamond + Inter)
public/
  images/             her 8 photographs + og-default.jpg (see Images below)
  llms.txt, llms-full.txt, llm.txt (legacy duplicate)
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

- **Page copy:** edit `src/content/en.ts` and the matching keys in `src/content/de.ts`. The shape
  is enforced by `src/content/types.ts`, so TypeScript will flag anything missing.
- **Keep both languages in sync** and keep the compliance rules above.

### Blog & FAQ content

There are **23 full blog posts** (EN + DE) and **9 FAQ categories (59 questions)**. To keep files
manageable, blog posts and the FAQ live in their own modules under `src/content/blog/` and
`src/content/faq/`, assembled by `posts.en.ts` / `posts.de.ts` and `faq.en.ts` / `faq.de.ts` and
imported into `en.ts` / `de.ts`. Posts are shown newest-first (sorted by `date`).

**Add a blog post:** add an entry to one of the `set-*.ts` files in `src/content/blog/` (in the
`*En` array), and the **same post** (same `slug`) translated into the matching `*De` array:

```ts
{
  slug: "my-new-post",          // URL slug — identical in the En and De arrays
  title: "My New Post",
  category: "Mindfulness",
  date: "2026-07-01",           // ISO date (controls ordering)
  readingTime: "5",
  excerpt: "One-sentence summary.",
  body: [
    { type: "p", text: "A paragraph, with an [internal link](/work-together)." },
    { type: "h2", text: "A subheading" },
    { type: "ul", items: ["point one", "point two"] },
    { type: "quote", text: "A quote.", attribution: "Author" },
  ],
}
```

Inside `p` and `ul` text you can embed internal links as markdown — `[label](/path)` — EN posts use
`/path`, DE posts use `/de/path`. The index card, `/blog/[slug]` page, sitemap, and Article JSON-LD
all update automatically. (A post may optionally carry `draft: true` with `body: []` to hide it
until finished.)

**Add / edit an FAQ:** each category is `{ id, title, items: [{ q, a }] }` in a `faq-*.ts` file
(`*En` + `*De`). Keep the same `id` across EN/DE — it powers the jump-nav anchor. Answers may
contain the same `[label](/path)` internal links as posts (EN `/path`, DE `/de/path`); the FAQPage
JSON-LD strips them so the schema stays plain text.

### Internal linking

The internal-link architecture lives in `src/content/blog/related.ts`:

- `RELATED` — for each post, the 3 hand-picked, same-cluster posts shown in the "Continue reading"
  block (never random, never self; rendered in the current locale).
- `PAGE_POSTS` — which posts each service/pillar page (`work-together`, `organisations`, `about`,
  `weekly-wellbeing`) links out to via the **Further reading** band (`FurtherReading` component).

Every post carries an in-body link to a service page plus the recurring discovery-call CTA; blog
posts and the main content pages render **breadcrumbs** (`Breadcrumbs` component) with
`BreadcrumbList` JSON-LD. All internal links stay within their own locale (EN → `/…`, DE →
`/de/…`); only the language toggle crosses locales. To re-audit the link graph, crawl the running
site and check for broken links, orphans, and cross-locale links.

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
