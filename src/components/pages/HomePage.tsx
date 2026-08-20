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
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
            {/* Portrait first in the DOM so it leads on mobile and is the first
                thing a screen reader meets. On desktop it moves to the right,
                keeping the headline on the natural reading edge. */}
            <div className="lg:order-2">
              <div className="relative mx-auto aspect-[5/4] w-full max-w-md overflow-hidden rounded-3xl border border-line bg-cream shadow-[0_1px_40px_-12px] shadow-forest/15 sm:aspect-[4/3] sm:max-w-lg lg:aspect-[4/5] lg:ml-auto lg:mr-0 lg:max-w-[420px]">
                <Image
                  src={h.heroPortrait.src}
                  alt={h.heroPortrait.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 46vw"
                  /* The face sits slightly right of centre and high in the
                     frame, so the crop is anchored there and stays safe when
                     the aspect ratio widens on smaller screens. */
                  className="object-cover object-[58%_28%] lg:object-[58%_32%]"
                />
              </div>
            </div>

            <div className="lg:order-1">
              <Eyebrow>{h.eyebrow}</Eyebrow>
              <h1 className="mt-5 font-serif text-4xl font-light leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
                {h.heroTitle} <span className="accent">{h.heroTitleAccent}</span>
              </h1>
              {/* Her background, as its own line rather than inside the eyebrow.
                  As an eyebrow the full credential string ran to 3–4 lines of
                  12px uppercase at 320–375px, which wrecked the calm; here it
                  reads as a byline, mirroring the About page order of
                  headline → credentials → lead.

                  Sourced from the About page content so the two can never drift
                  apart — Theresa edits her qualifications in one place. */}
              <p className="eyebrow mt-5 max-w-xl normal-case tracking-normal text-ink-soft">
                {c.about.credentials}
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

      {/* TRUST PILLARS — Discreet · Evidence-based · Flexible */}
      <section className="border-b border-line bg-sand">
        <Container className="py-14">
          <ul className="grid gap-8 sm:grid-cols-3">
            {h.trustPillars.map((pillar) => (
              <li key={pillar.title} className="border-t border-clay-deep/40 pt-5">
                <h2 className="font-serif text-xl text-ink">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

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
          src="/images/band-quote.jpg"
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
          src="/images/hero.jpg"
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

      {/* FOUR-STEP APPROACH (01–04) — sand section with cream cards, the
          inverse of the focus tiles above, so the two groups read as different
          without introducing a new colour. */}
      <Section tone="sand">
        <SectionHeader eyebrow={h.steps.eyebrow} heading={h.steps.heading} intro={h.steps.intro} />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {h.steps.items.map((step) => (
            <li key={step.title} className="rounded-2xl border border-line-strong bg-cream p-7">
              <h3 className="font-serif text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 max-w-2xl">
          <p className="quote-rule font-serif text-xl font-light italic leading-snug text-forest">
            {h.steps.closing}
          </p>
          <ButtonLink href={aboutHref} variant="outline" className="mt-8">
            {h.steps.ctaLabel}
          </ButtonLink>
        </div>
      </Section>

      {/* ABOUT BLOCK — her portrait + short intro */}
      <Section tone="sand">
        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-line bg-cream">
            {/* Her portrait now leads the hero, so this block carries mood
                imagery instead — the two-column rhythm survives without the
                same photograph appearing twice on one page. Decorative, so it
                is hidden from screen readers rather than described. */}
            <Image
              src="/images/band-meadow.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 1024px) 70vw, 320px"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>{h.aboutBlock.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-light text-ink sm:text-4xl">
              {h.aboutBlock.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{h.aboutBlock.body}</p>
            <ButtonLink href={aboutHref} variant="outline" className="mt-8">
              {h.aboutBlock.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* PRIVATE-PAY ADVANTAGES */}
      <Section tone="cream">
        <SectionHeader eyebrow={h.privatePay.eyebrow} heading={h.privatePay.heading} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {h.privatePay.items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-sand/50 p-7">
              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* PRACTICAL INFO */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={h.practical.eyebrow} heading={h.practical.heading} />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">{h.practical.closing}</p>
            <ButtonLink href={c.cta.primary.href} variant="primary" size="lg" className="mt-8">
              {c.cta.primary.label}
            </ButtonLink>
          </div>
          <div className="rounded-3xl border border-line bg-sand/50 p-8 sm:p-10">
            <MetaList items={h.practical.items} />
          </div>
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
