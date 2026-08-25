import Image from "next/image";
import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard, MetaList, QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { CtaBand } from "@/components/sections/CtaBand";
import { PersonServiceJsonLd } from "@/components/site/JsonLd";
import { localizedPath } from "@/lib/site";
import { shortCredentials } from "@/lib/credentials";

export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const h = c.home;
  const aboutHref = localizedPath(locale, "/about");

  return (
    <>
      <PersonServiceJsonLd content={c} />

      {/* HERO — her portrait leads, headline beside it.
          hero.jpg used to sit here as a 25% texture; it has been promoted to a
          full section further down the page, so the hero is now a plain warm
          wash and the photograph appears exactly once. */}
      <section className="relative isolate overflow-hidden bg-sand">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream/95 to-sand"
        />
        <Container className="relative py-16 sm:py-24 lg:py-28">
          {/* Text column widened from 0.85fr to 1fr against a 0.75fr portrait column
                (Aug 25 §1.4). The headline ran to four lines in a 470px measure; it
                needs a wider measure, not smaller type, to reach three. The portrait
                is capped at 420px so its column had slack to give. */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
            {/* Portrait first in the DOM so it leads on mobile and is the first
                thing a screen reader meets. On desktop it moves to the right,
                keeping the headline on the natural reading edge. */}
            <div className="lg:order-2">
              <div className="relative mx-auto aspect-[4/5] max-h-[62vh] w-full max-w-[19rem] overflow-hidden rounded-3xl border border-line bg-cream shadow-[0_1px_40px_-12px] shadow-forest/15 sm:max-w-sm lg:ml-auto lg:mr-0 lg:max-h-none lg:max-w-[420px]">
                <Image
                  src={h.heroPortrait.src}
                  alt={h.heroPortrait.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 46vw"
                  /* The box is 4:5 at every breakpoint, matching the source, so
                     nothing is cropped and the whole photograph shows — that was
                     Theresa's question. object-position still matters if she
                     swaps in a portrait of a different shape: the face sits
                     slightly right of centre and high in the frame, so the crop
                     is anchored there. */
                  className="object-cover object-[58%_30%]"
                />
              </div>
            </div>

            <div className="lg:order-1">
              {/* Measured at 1024, where the lg column is 503px wide.
                  At the default eyebrow size the longest string she is likely to
                  use, "Psychological Counselling in Zug, Zürich & Online",
                  needs 503px — it fits by nothing at all, and a font-load or
                  subpixel difference would break it onto a second line. One
                  step down in size and tracking, at lg only, brings it to 396px
                  and leaves real headroom. 1280 and up have a wider column and
                  keep the default. Mobile may wrap, as the brief allows. */}
              <Eyebrow className="lg:text-[11px] lg:tracking-[0.145em] xl:text-xs xl:tracking-[0.22em]">
                {h.eyebrow}
              </Eyebrow>
              <h1 className="mt-5 font-serif text-4xl font-light leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
                {h.heroTitle} <span className="accent">{h.heroTitleAccent}</span>
              </h1>
              {/* Her background, as its own line rather than inside the eyebrow.
                  As an eyebrow the full credential string ran to 3–4 lines of
                  12px uppercase at 320–375px, which wrecked the calm; here it
                  reads as a byline, mirroring the About page order of
                  headline → credentials → lead.

                  Sourced from the About page content so the two can never drift
                  apart — Theresa edits her qualifications in one place. The hero
                  shows a shortened form of that same string; see
                  lib/credentials.ts. */}
              <p className="eyebrow mt-5 max-w-xl normal-case tracking-normal text-ink-soft">
                {shortCredentials(c.about.credentials, locale)}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{h.heroLead}</p>
              <p className="mt-3 max-w-xl text-sm text-ink-muted">{h.reachLine}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={h.heroPrimary.href} variant="primary" size="lg">
                  {h.heroPrimary.label}
                </ButtonLink>
                <ButtonLink href={h.heroSecondary.href} variant="outline" size="lg">
                  {h.heroSecondary.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST PILLARS — removed from the page (Aug 2026 §3.5): the trio
          duplicated the three points further down. The content field is kept so
          nothing is lost and the copy can be restored, but it is not rendered. */}

      {/* INTRO PARAGRAPHS */}
      <Section tone="cream" containerSize="narrow">
        <div className="space-y-6">
          {h.heroParas.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
        <p className="mt-10 border-l-2 border-sage pl-6 font-serif text-2xl font-light italic leading-snug text-forest">
          {h.heroEmphasis}
        </p>
      </Section>

      {/* TESTIMONIALS — her photograph under a deep pine scrim */}
      <section className="relative isolate overflow-hidden bg-pine py-14 sm:py-24">
        <Image
          src="/images/band-quote.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-pine/85" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {h.testimonials.map((t) => (
              <QuoteBlock key={t.attribution} quote={t} tone="forest" className="!text-xl" />
            ))}
          </div>
        </Container>
      </section>

      {/* AUDIENCE */}
      <Section tone="cream">
        <SectionHeader eyebrow={h.audience.eyebrow} heading={h.audience.heading} intro={h.audience.intro} />
        {/* Sand fill on a cream section, so the tiles lift instead of vanishing
            into the background. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {h.audience.items.map((item) => (
            <FeatureCard key={item.title} item={item} className="bg-sand" />
          ))}
        </div>
      </Section>

      {/* PAUSE BAND — a full-width photograph and one line, between two long
          sections. Deliberately light, because the testimonials band above is
          dark pine; alternating tone keeps the page from reading as a stack of
          identical photo strips. */}
      <section className="relative isolate overflow-hidden bg-sand">
        <Image
          src="/images/hero.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          /* She sits right of centre, so the crop is anchored there and the
             pale water on the left is left clear for the sentence. */
          className="-z-20 object-cover object-[68%_center]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40"
        />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <p className="quote-rule max-w-xl font-serif text-2xl font-light italic leading-snug text-forest sm:text-3xl">
            {h.pauseBand.text}
          </p>
        </Container>
      </section>

      {/* MY APPROACH — two columns (Aug 25 §1.6).
          Left: eyebrow, heading, the shortened intro and the pull quote.
          Right: a second eyebrow over a vertical stack of modality cards.
          The 01–04 cards are gone; Theresa removed their content herself and the
          modalities now carry that job.

          Structure follows the reference she gave. Palette, type and card
          treatment are this site's own: cream cards on the sand section, the
          same border and radius as the focus tiles above. Cards carry the
          modality name alone — she has not supplied descriptions, so none are
          invented. */}
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-[45fr_55fr] lg:gap-20">
          {/* Left column */}
          <div>
            <Eyebrow>{h.steps.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-ink sm:text-4xl">
              {h.steps.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{h.steps.intro}</p>
            <p className="quote-rule mt-8 font-serif text-xl font-light italic leading-snug text-forest">
              {h.steps.closing}
            </p>
            <ButtonLink href={aboutHref} variant="outline" className="mt-8">
              {h.steps.ctaLabel}
            </ButtonLink>
          </div>

          {/* Right column: the modality stack */}
          <div>
            <Eyebrow>{h.steps.modalities.heading}</Eyebrow>
            <ul className="mt-5 space-y-3">
              {h.steps.modalities.items.map((m) => (
                <li
                  key={m}
                  className="rounded-2xl border border-line-strong bg-cream px-6 py-5 font-serif text-lg text-ink"
                >
                  {m}
                </li>
              ))}
            </ul>
            {/* Not decoration. This states that the work is counselling and that
                she is not a psychotherapist, which is what keeps naming these
                approaches safe now the wording check only warns. The same
                statement appears in the Impressum and in section 2 of the Terms.
                Her optional second footnote was deliberately not added. */}
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              {h.steps.modalities.note}
            </p>
          </div>
        </div>
      </Section>

      {/* The standalone About Me band was removed (Aug 25 §1.7): it duplicated
          the About Me page, which is one click away in the nav. The aboutBlock
          content field is kept so nothing is lost and it can be restored, and
          band-meadow-morning.webp stays in the repo because My Philosophy uses
          it. */}


      {/* PRIVATE-PAY ADVANTAGES */}
      <Section tone="cream">
        <SectionHeader eyebrow={h.privatePay.eyebrow} heading={h.privatePay.heading} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {h.privatePay.items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line-strong bg-sand p-7">
              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* PRACTICAL INFO */}
      <Section tone="cream">
        {/* Aug 2026 §3.10 — the upper CTA paragraph and button are gone. The
            discovery-call band immediately below already makes that ask, and two
            CTAs this close together competed with each other. The facts table
            stays; the closing sentence remains in the content files so nothing
            is lost and it can be restored. */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeader eyebrow={h.practical.eyebrow} heading={h.practical.heading} />
          <div className="rounded-3xl border border-line bg-sand/50 p-8 sm:p-10">
            <MetaList items={h.practical.items} />
          </div>
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
