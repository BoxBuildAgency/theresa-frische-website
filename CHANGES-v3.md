# Change Brief v3 — Theresa's Review Feedback

Source: Theresa's "Website Changes" document, 2 August 2026, plus her email confirmations.

**Her document is written in German only. Every change must be applied to BOTH locales.** Where she
gives new German wording, write the equivalent English yourself, matching the existing English voice.
Do not leave EN and DE out of sync.

Compliance firewall unchanged and still absolute. She has now explicitly confirmed both held-back
items: keep the wording non-medical and strictly counselling/systemic across the site, and keep
structured data purely non-medical. Nothing pending on either.

---

## 1. HOME

**1.1 Hero paragraph, one word.** "die viel leisten" → "die viel geben" (more inclusive of people who
don't identify as high achievers). Update the English equivalent to match the same shift: not
"achieve a great deal" but closer to "give a great deal".

**1.2 Schwerpunkte grid: 7 blocks → 6.** Remove "Persönliches Wachstum / Personal Growth" entirely
(EN + DE). Remaining six stay as they are: Lebensübergänge, Identität & Orientierung, Überforderung &
Burnout, Emotions- & Nervensystemregulation, Beziehungsthemen & Paarberatung, Expat- &
internationales Leben. Verify the grid now renders cleanly as 2×3 / 3×2 with no orphan item wrapping
alone, desktop and mobile.

**1.3 DUPLICATE SECTION — remove.** The home page currently has two sections titled "Mein Ansatz" /
"My Approach". This is a real bug introduced in the v2 merge.
- **REMOVE** the first: "Mein Ansatz — Integrativ und kontextorientiert" with the four lettered
  approaches (Systemische Beratung / Körperwahrnehmung / Teile-Arbeit / Achtsamkeitsbasierte Praxis).
- **KEEP** the second: "Systemisch. Körperorientiert. Integrativ." with the 01–04 numbered steps
  (Muster verstehen / Nervensystem regulieren / Innere Konflikte lösen / Leben und Werte in Einklang
  bringen).
- Apply in EN and DE. After removal, confirm only one "My Approach" / "Mein Ansatz" H2 exists per
  page, and that no internal link or jump-nav anchor pointed at the removed section.

**1.4 Trim final sentence.** In the kept section's intro paragraph, delete the closing sentence
"Für nachhaltige Veränderung statt kurzfristiger Lösungen." and its English equivalent ("For lasting
change rather than short-term solutions" or however it currently reads). Her note: it reads as
generic coaching language.

New DE paragraph ends at: "...und die inneren Ressourcen jedes Menschen."

---

## 2. ABOUT / ÜBER MICH

**2.1 Recurring-dynamics paragraph.** Replace with her new German verbatim:

> Gemeinsam betrachten wir Ihre wiederkehrenden Dynamiken ohne Bewertung. Wir erforschen behutsam,
> welche wertvolle Funktion diese Muster in Ihrem System erfüllen und wie sie Sie bisher geschützt
> haben. Sobald dieser Sinn verstanden ist, verlieren alte Automatismen ihre Alternativlosigkeit —
> und es entsteht neuer Freiraum für stimmige, bewusste Entscheidungen im Hier und Jetzt.

Write the matching English. The meaning shift is deliberate and must carry across: patterns served a
**valuable protective function**, and understanding that meaning is what loosens them. Not "why they
persist" but "how they protected you".

**2.2 Parts-work paragraph.** Replace with her new German verbatim:

> In Anlehnung an das Modell des Internal Family Systems (IFS) begegnen wir Ihren unterschiedlichen
> inneren Anteilen mit Neugier und Wertschätzung. Statt ungewollte Impulse oder Gefühle wegzudrücken,
> schaffen wir einen geschützten Raum, in dem alle Anteile gehört werden können. Sobald Ihr
> erwachsenes Selbst ihre Funktion erkennt und sich mitfühlend um ihre Bedürfnisse und Befürchtungen
> kümmert, lösen sich Blockaden — und aus innerer Zerrissenheit entstehen Klarheit, Selbstmitgefühl
> und neue Kraft.

Matching English. The IFS-accurate shift is the **adult Self** recognising the parts' function and
tending to them, rather than the work being done to the parts.

Note: her document uses an em dash in both paragraphs. Keep her German exactly as written; use
standard punctuation in the English.

**2.3 Association logos — DO NOT ADD YET.** She is *considering* requesting the Somatic Experiencing
association logo. Third-party logos need written permission from the association. Leave a clearly
commented placeholder in the About component so it can be dropped in later, but add nothing now.

---

## 3. FOR ORGANISATIONS

**3.1 Remove a certification.** On the Organisations overview page, remove "Somatic Experiencing
Practitioner" from the certifications/credentials list (EN + DE). Her reasoning: SE reads as a
trauma-focused method and sends the wrong signal in a corporate-health (BGF) context.
**Scope: the Organisations overview only.** SE stays everywhere else — the About qualifications, the
dedicated Somatic Experiencing service page, and the counselling pages.

**3.2 German wording fix.** "Mitarbeitendenunterstützungsprogramm" is not real German (a calque of
"Employee Assistance Program"). On the Beratung für Mitarbeitende & Führungskräfte page:

> Current: „Vertrauliche Einzelbegleitung als Teil eines Mitarbeitendenunterstützungsprogramms —
> online und nach Vereinbarung"
> New: „Vertrauliche Einzelbegleitung als Teil der betrieblichen Gesundheitsförderung — online und
> nach Vereinbarung"

Then **sweep the whole German site** for any other occurrence of "Mitarbeitendenunterstützungsprogramm"
or similar EAP calques and replace with "betriebliche Gesundheitsförderung". The English "employee
assistance programme" is a real term and stays as-is on the English side.

---

## 4. WEEKLY WELLBEING

Replace the description with her new German verbatim:

> Die Weekly Wellbeing Community ist Ihre wöchentliche Einladung zur Selbstfürsorge — ein ruhiger,
> geschützter Raum, um wieder bei sich anzukommen und Ihr emotionales Wohlbefinden nachhaltig zu
> stärken.
>
> In unseren wöchentlichen 60-minütigen Treffen widmen wir uns etwa 30 bis 45 Minuten geleiteten
> Achtsamkeitsübungen sowie der Regulation des Nervensystems. Anschließend bleibt Raum für einen
> mitfühlenden, bewertungsfreien Austausch.
>
> Ohne Leistungsdruck und ohne Zwang zum Teilen: Hier dürfen Sie einfach so sein, wie Sie gerade sind.
> Ziel ist eine tiefere, authentische Verbundenheit — mit sich selbst und mit einer unterstützenden
> Gemeinschaft.

Matching English. Keep the new concrete detail: 60-minute sessions, 30–45 minutes guided mindfulness
and nervous-system regulation, then open compassionate sharing, no pressure to share.

Check this against the existing session facts (Tuesdays 20:30–21:30, online, English) and keep those
consistent. **Note for José:** her new text describes the sessions in German while the format line
says the group runs in English. Worth confirming with her which is correct.

---

## 5. TECHNICAL

**5.1 Pricing — DO NOT ADD.** Decision: no prices on the site (unchanged from the original brief).
Instead, ensure the FAQ answers the question head-on without a figure. Confirm the existing
"How do sessions work financially?" answer states plainly: sessions are self-pay, the fee is agreed
individually during the free 15-minute discovery call, and there is no billing to or reimbursement
from statutory or private health insurance. Strengthen that answer if it is vaguer than this.
Add the same to the Angebot / Work With Me page as a short line if not already present.

**5.2 H1 — NO CHANGE.** Keep the existing poetic H1 ("Ein Raum für das, was sich in Ihnen verändert"
and its English counterpart). The keyword-bearing eyebrow sits directly above it, and the search
terms appear throughout the page, headings, service pages and FAQ.

**5.3 STAGING NOINDEX — IMPORTANT, implement now.**
The Netlify staging domain is publicly crawlable while every canonical points at
`https://theresafrische.com`, which does not yet resolve. Risk of the staging domain being indexed.

- Add `X-Robots-Tag: noindex` for the staging deploy. Cleanest route: a `netlify.toml` header rule or
  middleware keyed on the host, so it applies **only** when the host is `*.netlify.app` and NOT when
  served from `theresafrische.com`.
- Do **not** hardcode a site-wide noindex: it must switch off automatically on the production domain.
- Leave canonicals pointing at `https://theresafrische.com` — that is correct for go-live.
- Add a go-live checklist note in the README: verify `noindex` is absent on the production domain,
  then submit the sitemap in Search Console.

---

## 6. VERIFY

- [ ] Every change applied in **both** EN and DE; no locale drift
- [ ] Only one "My Approach" / "Mein Ansatz" section per home page; no dead anchors to the removed one
- [ ] Schwerpunkte grid renders 6 blocks cleanly, desktop + mobile
- [ ] No occurrence of "Mitarbeitendenunterstützungsprogramm" anywhere in the German content
- [ ] SE removed from Organisations overview only; still present on About, the SE service page, and
      counselling pages
- [ ] No prices anywhere; FAQ answers the fee question clearly without a figure
- [ ] `noindex` present on the `.netlify.app` host, absent when host is `theresafrische.com`
- [ ] Prohibited-term sweep clean, EN + DE
- [ ] Internal-link audit: 0 broken, 0 cross-locale, 0 orphans
- [ ] `npm run build` and `npm run lint` green; commit and push

## 7. FLAG BACK TO JOSÉ (do not decide)

- Weekly Wellbeing language: new German copy vs the "in English" format line (§4)
- Association logos: pending her request and written permission (§2.3)
