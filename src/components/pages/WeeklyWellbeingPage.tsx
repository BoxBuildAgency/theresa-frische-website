import Image from "next/image";
import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MetaList, QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { ButtonLink } from "@/components/ui/Button";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageCrumbs } from "@/lib/site";

export function WeeklyWellbeingPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const w = c.weeklyWellbeing;
  const crumbs = pageCrumbs(locale, "/weekly-wellbeing", w.eyebrow);

  return (
    <>
      {/* HERO with lake image */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/weekly-wellbeing.webp"
          alt={w.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-pine/85 via-pine/60 to-pine/30" />
        <Container className="py-28 sm:py-36">
          <div className="max-w-2xl text-cream">
            <Eyebrow className="!text-cream/80">{w.eyebrow}</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl font-light leading-tight text-cream sm:text-5xl">
              {w.heading}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/90">{w.lead}</p>
          </div>
        </Container>
      </section>

      {/* INTRO + facts */}
      <Section tone="cream">
        <Breadcrumbs items={crumbs} className="mb-10" />
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="space-y-5">
            {w.intro.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>
          <div className="rounded-3xl border border-line bg-sand/50 p-8">
            <MetaList items={w.facts} />
            <ButtonLink href={c.cta.primary.href} variant="primary" className="mt-6 w-full">
              {locale === "de" ? "Mehr erfahren" : "Get in touch to join"}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* WHY JOIN */}
      <Section tone="sand" containerSize="narrow">
        <SectionHeader heading={w.why.heading} intro={w.why.intro} />
        <ul className="mt-8 flex flex-wrap gap-3">
          {w.why.items.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line-strong bg-cream px-4 py-2 text-sm text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* QUOTES */}
      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-3">
          {w.quotes.map((q, i) => (
            <QuoteBlock key={i} quote={q} tone="forest" className="text-lg" />
          ))}
        </div>
      </Section>

      <FurtherReading locale={locale} pageKey="weekly-wellbeing" tone="sand" />

      {/* CLOSING */}
      <Section tone="cream" containerSize="narrow" className="text-center">
        <h2 className="font-serif text-3xl font-light text-ink sm:text-4xl">{w.closing.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{w.closing.body}</p>
        <ButtonLink href={c.cta.primary.href} variant="primary" size="lg" className="mt-8">
          {c.cta.primary.label}
        </ButtonLink>
      </Section>
    </>
  );
}
