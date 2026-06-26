# Theresa Frische — Counselling Website

A production website for **Theresa Frische — Systemic & Integrative Counsellor**, an online,
international counselling practice serving internationals, expats, and couples in transition.
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
    en.ts             English copy (source of truth)
    de.ts             German translation
    index.ts          getContent() / blog helpers
  lib/
    site.ts           routes table + EN↔DE path mapping
    seo.ts            per-page metadata (canonical + hreflang + OG)
    fonts.ts          next/font (Cormorant Garamond + Inter)
public/
  images/             about-theresa.jpg, weekly-wellbeing-lake.jpg, og-default.jpg
  llm.txt
```

The two locales render the **same** presentational components, fed by `content/en.ts` and
`content/de.ts`. Only text differs.

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

### Add a blog post

1. In `src/content/en.ts`, add an entry to `blog.posts`:

   ```ts
   {
     slug: "my-new-post",          // URL slug (keep identical in de.ts)
     title: "My New Post",
     category: "Mindfulness",
     date: "2026-07-01",           // ISO date
     readingTime: "5",
     excerpt: "One-sentence summary.",
     body: [
       { type: "p", text: "A paragraph." },
       { type: "h2", text: "A subheading" },
       { type: "ul", items: ["point one", "point two"] },
       { type: "quote", text: "A quote.", attribution: "Author" },
     ],
   }
   ```

2. Add the **same post** (same `slug`) to `src/content/de.ts`, translated.
3. That's it — the index card, the `/blog/[slug]` page, sitemap, and JSON-LD update automatically.

The 7 "stub" posts have `draft: true` and an empty `body: []`. They are **hidden** from the site
(index, routes, sitemap) until you give them a `body` and remove `draft: true`.

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

## Assumptions & notes for handover

- **Hero background:** the warm-sand home hero uses an on-brand CSS gradient (no stock photo was
  supplied for it). The two real photos — the About headshot and the Weekly Wellbeing lake photo —
  were extracted from the supplied PDFs, optimised, and placed in `public/images/`. The lake photo
  was rotated 90° in the source and has been corrected.
- **Organisations images:** none were supplied, so that page uses typographic/colour layout blocks
  rather than placeholder image boxes. Drop images into `public/images/` and wire them into
  `OrganisationsPage.tsx` if/when provided.
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
