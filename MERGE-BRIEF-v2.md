> **SUPERSEDED in part — August 2026.**
> The business details in this brief (Freiburg address, § 19 UStG note, § 18 Abs. 2 MStV
> content responsibility) described German residency and no longer apply. Theresa is
> resident in Zug; the current details are in `business-details.md` and in the legal pages.
>
> The structural parts of this brief were implemented and remain accurate. Kept for the
> record.

---

# Claude Code Brief: Theresa Frische Website, v2 Merge

**Governing principle: ADD and OPTIMISE. Do not remove anything already built.**
Theresa's new documents were written without knowledge of what already exists on the site. Treat
them as enhancement input, not as a replacement specification. Nothing currently live is deleted
unless it is factually wrong.

Source inputs (place in repo root before running):
- `SEO-EN.md` and `SEO-DE.md` (converted from Theresa's two Word documents, 24 July)
- `assets-v2/` (her ten photographs)

---

## 0. Explicitly DO NOT REMOVE

These exist and stay, in both languages:

- All **20 blog posts** (her documents wrongly state none exist). Three new posts are ADDED, see §6.
- The **entire FAQ**: 9 categories, ~59 questions, jump nav, FAQPage JSON-LD. Her sitemap omits it. It stays.
- **Contact page**, **AI Info page** (`/ai-info`, `/de/ai-info`), **Impressum**, **Privacy/Datenschutz**.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, favicon set.
- The **internal-linking architecture** (`related.ts`, `PAGE_POSTS`, `FurtherReading`, breadcrumbs).
- The **spacious layout** and **Cormorant Garamond** headline typography. Theresa explicitly asked to
  keep the 6 July look and feel and deferred design to us over her document's spec.

---

## 1. COMPLIANCE FIREWALL, UPDATED

Theresa has now stated her own legal positioning explicitly. Apply this revision:

**NOW PERMITTED as the public positioning** (her decision as the practitioner):
- EN: "Psychological Counselling"  ·  DE: "Psychologische Beratung"
- Factual credentials: "M.Sc. Clinical Psychology", "Somatic Experiencing® Practitioner",
  "Systemic & Integrative Counselling / Systemische & Integrative Beratung"

**STILL PROHIBITED, and DELIBERATELY OMITTED from this build pending her written go-ahead:**

1. **The psychotherapy-qualification claim.** Do NOT implement, in either language:
   - EN: "In postgraduate training as a licensed psychological psychotherapist"
   - DE: "In Approbationsausbildung zur Psychologischen Psychotherapeutin"
   Instead render the qualifications row factually and without the psychotherapy framing:
   - EN: `Systemic training | IF Weinheim/Mannheim, in progress since 2023`
   - DE: `Systemische Weiterbildung | IF Weinheim/Mannheim, seit 2023`
   Name the programme; do not claim the title or the Approbation track.
2. **"Therapy / Therapie" as a heading or as her offering.** The qualifications heading
   "Systemic Therapy / Systemische Therapie" becomes "Systemic training / Systemische Weiterbildung".
   In body copy, "systemic therapy" becomes "systemic counselling / systemische Beratung".
3. **Clinical symptom language describing what she works with.** Soften throughout:
   - "stress, burnout, anxiety and life transitions" → "stress, burnout, overwhelm and life transitions"
   - "worry, anxiety, panic and physical stress reactions" → "worry, inner restlessness, and physical
     stress responses" / DE: "Sorgen, innere Unruhe und körperliche Stressreaktionen"
   - Keep: stress, burnout, overwhelm, exhaustion, strain, disconnection, feeling stuck.
   - Avoid: anxiety, panic, disorder, symptoms, diagnosis, treatment, patient, healing.
4. **Schema.org `MedicalBusiness` / `HealthAndBeautyBusiness`.** Do NOT implement. Keep the existing
   non-medical `Person` + `Service` (serviceType "Counselling"), `FAQPage`, `Article`,
   `BreadcrumbList`. Medical markup would contradict her own stated positioning in the structured data.
5. **In-person Zug availability.** See §5.

Keep the existing disclaimer and hard-coded crisis resources unchanged. Run the prohibited-term
sweep (EN + DE) as the final gate before commit.

---

## 2. NEW PAGE STRUCTURE (add, with dropdown navigation)

Adopt her deeper structure. **English stays at the root** (`/`), German at `/de`. Do not move English
to `/en`: root carries more weight, nothing is indexed yet, and it avoids adding middleware we
deliberately excluded. Adopt her keyword-rich German slugs.

| Page | EN | DE | Status |
|---|---|---|---|
| Home | `/` | `/de` | exists, enhance |
| About | `/about` | `/de/ueber-mich` | exists, enhance + re-slug DE |
| Work With Me (overview) | `/work-with-me` | `/de/angebot` | rename from work-together |
| → Psychological Counselling | `/work-with-me/psychological-counselling` | `/de/angebot/psychologische-beratung` | NEW |
| → Couples Counselling | `/work-with-me/couples-counselling` | `/de/angebot/paarberatung` | NEW |
| → Burnout Prevention | `/work-with-me/burnout-prevention` | `/de/angebot/burnout-praevention` | NEW |
| → Somatic Experiencing® | `/work-with-me/somatic-experiencing` | `/de/angebot/somatic-experiencing` | NEW |
| For Organisations (overview) | `/organisations` | `/de/fuer-unternehmen` | exists, enhance |
| → Talks, Workshops & Courses | `/organisations/talks-workshops-courses` | `/de/fuer-unternehmen/vortraege-workshops-kurse` | NEW |
| → Leadership Coaching | `/organisations/leadership-coaching` | `/de/fuer-unternehmen/fuehrungskraefte-coaching` | NEW |
| → Employee Counselling | `/organisations/employee-counselling` | `/de/fuer-unternehmen/beratung-mitarbeitende` | NEW |
| Weekly Wellbeing | `/weekly-wellbeing` | `/de/weekly-wellbeing` | exists |
| Blog + posts | `/blog`, `/blog/[slug]` | `/de/blog`, `/de/blog/[slug]` | exists |
| FAQ | `/faq` | `/de/faq` | exists, KEEP |
| Contact | `/contact` | `/de/contact` | exists, KEEP |
| AI Info | `/ai-info` | `/de/ai-info` | exists, KEEP |
| Impressum | `/impressum` | `/de/impressum` | exists, complete |
| Privacy | `/privacy` | `/de/datenschutz` | exists, complete |

**Navigation:** add hover/click dropdowns under Work With Me and For Organisations, listing their
children. Mobile: accordion within the menu. Language toggle stays top-right, fixed EN-left /
DE-right order, swapping to the counterpart URL at any depth (not back to home).

**Critical follow-through when slugs change:** update `counterpartPath()`, all `hreflang` alternates,
canonicals, breadcrumbs, `sitemap.ts`, `llms.txt`, `llms-full.txt`, the AI Info page link list, and
every internal link and `PAGE_POSTS` / `related.ts` target. Re-run a full internal-link audit
afterwards: zero broken, zero cross-locale, zero orphans.

---

## 3. NEW CONTENT BLOCKS (add to existing pages)

Take copy from `SEO-EN.md` / `SEO-DE.md`, applying §1 substitutions.

**Home:**
- Eyebrow: "PSYCHOLOGICAL COUNSELLING · ONLINE" / "PSYCHOLOGISCHE BERATUNG · ONLINE"
  (no "soon in Zug", see §5)
- Three trust pillars: Discreet · Evidence-based · Flexible
- Expanded "Who this space is for" as a 3×2 card grid: Life Transitions · Identity & Orientation ·
  Overwhelm & Burnout · Emotional & Nervous System Regulation · Relationship Challenges & Couples ·
  Expat & International Life
- The four-step approach (01 Understand Patterns · 02 Regulate the Nervous System ·
  03 Resolve Inner Conflict · 04 Align Life & Values)
- **"Your Advantages as a Private-Pay Client"**: Complete Discretion & Privacy (no diagnoses in
  insurance records, no reporting to insurers) · Fast Access (no referral, no insurer waiting time) ·
  Maximum Flexibility (online, German & English)
- Testimonials: add Ariana and Nicolas. **Drop the ★★★★★ star graphics**: star ratings read
  e-commerce rather than boutique, and displaying them without genuine aggregate review data invites
  a review-schema mismatch. Keep the quotes and first names. No client photos.

**About:** her expanded philosophy sections 01 to 04, lived-experience section, qualifications table
per §1, PsyCo recognition line kept factual and neutral ("Recognition of this degree by the Swiss
Psychology Professions Commission (PsyCo) has been applied for and is pending").

**Work With Me children:** long-form page each, built from her copy, with a facts table
(duration · format · language) and the shared CTA band. Somatic Experiencing® always with
superscript ®.

**Organisations children:** the four numbered formats as a vertical service row (01 to 04),
Leadership Coaching, Employee Counselling. Cross-link Employee Counselling to Burnout Prevention.

---

## 4. CONTACT DETAILS AND CTA

Replace her `[Phone]` / `[Email]` / `[Booking Link]` placeholders:
- Email: `info@theresafrische.com`
- Phone: `+49 157 38920374`
- **No booking link exists yet.** The primary CTA remains the free 15-minute discovery call routed
  to the existing contact form. Do not invent a scheduling URL.
- Still no pricing anywhere on the site.

---

## 5. ZUG AND SWITZERLAND: TOPICAL RELEVANCE, NO LOCATION CLAIM

Do NOT implement "SOON IN ZUG" / "BALD IN ZUG" in the hero or eyebrow, and do not claim in-person
availability or a Zug practice anywhere. It buys no local visibility (local results require a
verified physical address and a Google Business Profile) and it would advertise Swiss in-person
availability before PsyCo recognition.

DO build the topical relevance that compounds now:
- Frame reach as: "Online counselling in German and English, for clients in Switzerland, Germany
  and internationally."
- Add a Switzerland/international audience section on Work With Me and in the Expat & International
  Life card, naturally referencing Zug, Zurich and Switzerland where it reads honestly.
- Ensure the expat/international blog cluster speaks to internationals living in Switzerland.
- Keep the copy structured so a location claim and a Zug address can be switched on later with a
  content edit only, no rebuild.

---

## 6. BLOG: ADD THREE POSTS (20 → 23)

Full ~700 to 1,000 word posts, EN + DE, same template, disclaimer footer, 3 to 6 contextual internal
links, added to the cluster map and related-posts config:

1. **ACT & Values-Based Living** — "How Acceptance and Commitment Therapy Helps You Find Your Own
   Compass of Values". Keywords: acceptance and commitment therapy, finding your values,
   decision-making, inner clarity.
2. **Mindfulness-Based Approaches** — "More Than a Trend: Why Mindfulness Calms the Nervous System
   for Good". Keywords: mindfulness-based approaches, stress reduction, emotion regulation, MBSR.
3. **Parts Work / Internal Family Systems** — "Understanding Inner Conflict: More Harmony Through
   Working With Your Inner Parts". Keywords: Internal Family Systems, parts work, resolving inner
   conflict, self-compassion.

Note: describe ACT, MBSR and IFS as **models and approaches informing her counselling**, never as
therapy she delivers or treatment she provides. Add the matching blog categories to the filter.

---

## 7. LEGAL PAGES: COMPLETE, NO PLACEHOLDERS

- **Theresa Frische, Scheffelstraße 23, 79102 Freiburg im Breisgau, Germany**
- Email and phone as §4
- **Kleinunternehmer per § 19 UStG**: add the standard note that no VAT is shown
  ("Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."). No USt-IdNr.
- Responsible for content per § 18 Abs. 2 MStV: Theresa Frische
- Data controller: Theresa Frische, address as above
- Keep it a clean **Beratung** Impressum: no regulated-psychotherapy-profession disclosures.
- Remove every remaining placeholder marker from both languages.
- Privacy notice: controller as above, contact form, Resend as processor, Netlify hosting, data
  minimisation, no analytics or cookies, data-subject rights.

---

## 8. IMAGES: REPLACE ALL PLACEHOLDERS WITH HER PHOTOGRAPHS

All ten files in `assets-v2/` are legitimate and cleared for use. Optimise into `public/images/`
(long edge ~2000px, WebP with JPEG fallback, `next/image`, descriptive alt text, `priority` only on
above-the-fold heroes). Retire the three Unsplash placeholders.

| File | Placement |
|---|---|
| `Headshot_Landing_Page_and_About_Me.jpg` | About page portrait (4:5) and Home about block |
| `Weekly_Wellbeing.jpg` | Weekly Wellbeing hero |
| `Organisation_Page.jpg` | Organisations page (her delivering a seminar) |
| `Blonde_Haare_am_Strand_scharf.jpeg` | Home hero, full-bleed behind the headline |
| `Fruhlingswiese_im_Morgentau.jpg` | Section band or blog cover |
| `Olivenzweig_im_Himmel.jpg` | Section band or blog cover |
| `Schattenspiel.jpg` | Quote band / soft texture band |
| `Wasserreflexion_mit_Horizont.jpg` | CTA band or Somatic Experiencing page |

Tune the hero scrim so the Cormorant headline keeps WCAG AA contrast over the chosen image.

---

## 9. DESIGN: EVOLVE, DO NOT REPLACE

Theresa explicitly wants the existing spacious, boutique look kept and deferred her document's
design spec to us. So:

- **Keep** Cormorant Garamond headlines + Inter body, the generous whitespace, and current component
  structure. Do NOT switch to Fraunces.
- **Deepen the green** toward her Pine value `#1F2E27` for hero bands, CTA bands and dark sections
  (she asked for more of that dark-green contrast).
- **Add a restrained gold accent**: Clay `#C4A35A` and Clay Deep `#9C7C3D` for eyebrows, thin
  borders, icons and quote-block rules.
- **Accessibility, non-negotiable:** Clay on light fails contrast (~2.15:1). Use Clay only on dark
  (Pine) backgrounds. Clay Deep on light passes for large text only (≥18px, or ≥14px bold): eyebrows,
  headings, buttons. Body copy stays Charcoal `#26302B` on Ivory `#F5F2EA`. Verify every pairing.
- Keep the existing solid `onDark` CTA button variant (cream fill, forest text) already fixed.
- Visible keyboard focus states; honour `prefers-reduced-motion`; transitions 300 to 400ms ease-out.
- Generous section padding: 96px desktop / 56px mobile top and bottom on hero and CTA bands.

---

## 10. VERIFY, THEN COMMIT

- [ ] Nothing from §0 removed. 23 posts, ~59 FAQs, all pages present in EN + DE.
- [ ] §1 omissions applied: no psychotherapist/Approbation claim, no Therapie-as-offering, softened
      symptom language, non-medical schema only.
- [ ] No "soon in Zug", no in-person or Swiss availability claim anywhere.
- [ ] Prohibited-term sweep clean in EN and DE (negations and the positioning article excepted).
- [ ] New slugs live; `counterpartPath()`, hreflang, canonicals, breadcrumbs, sitemap, llms.txt,
      llms-full.txt and AI Info all updated to match.
- [ ] Internal-link audit: 0 broken, 0 cross-locale, 0 orphans; dropdowns work on desktop and mobile.
- [ ] Legal pages complete, zero placeholders, § 19 UStG note present.
- [ ] All ten photographs in place, Unsplash placeholders retired, hero contrast verified.
- [ ] `npm run build` and `npm run lint` both green. Commit and push.

---

## 11. OPEN ITEMS TO RAISE WITH THERESA (do not invent)

- **Booking link**: none exists. Contact form used meanwhile.
- **Publishing her mobile number**: her document asks for a phone number; confirm she is happy for
  her personal mobile to be public.
- **AGB / terms**: her document mentions terms and conditions. Sensible for a private-pay practice
  (cancellation window, payment terms, session policy) but needs her actual terms. Not invented here.
