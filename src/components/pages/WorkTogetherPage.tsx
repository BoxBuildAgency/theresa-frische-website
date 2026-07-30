import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MetaList, QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { ButtonLink } from "@/components/ui/Button";
import { pageCrumbs } from "@/lib/site";

export function WorkTogetherPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const w = c.workTogether;
  const crumbs = pageCrumbs(locale, "/work-with-me", w.eyebrow);

  return (
    <>
      <PageHero eyebrow={w.eyebrow} title={w.heading} lead={w.intro} crumbs={crumbs} />

      {/* FOUR SERVICE CARDS -> child pages */}
      <Section tone="cream">
        <ul className="grid gap-5 sm:grid-cols-2">
          {w.cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-8 transition-colors hover:border-clay-deep/50"
              >
                <h2 className="font-serif text-2xl font-light text-ink transition-colors group-hover:text-forest">
                  {card.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{card.body}</p>
                <span className="mt-5 text-sm font-medium text-forest">
                  {locale === "de" ? "Mehr erfahren" : "Learn more"} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* DISCOVERY CALL STEPS */}
      <Section tone="cream">
        <SectionHeader heading={w.discovery.heading} intro={w.discovery.intro} />
        <ol className="mt-12 grid gap-5 sm:grid-cols-3">
          {w.discovery.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-line bg-cream p-7">
              <span className="font-serif text-3xl text-sage">{i + 1}</span>
              <h3 className="mt-3 font-serif text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* QUOTE */}
      <Section tone="forest" containerSize="narrow" className="text-center">
        <QuoteBlock quote={w.quote} tone="forest" className="mx-auto max-w-2xl" />
      </Section>

      {/* SESSION TYPES */}
      <Section tone="sand">
        <div className="grid gap-6 lg:grid-cols-2">
          {[w.individual, w.couples].map((s) => (
            <article key={s.heading} className="flex flex-col rounded-3xl border border-line bg-cream p-8 sm:p-10">
              <p className="eyebrow">{s.subheading}</p>
              <h3 className="mt-3 font-serif text-2xl text-ink">{s.heading}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{s.body}</p>
              <MetaList items={s.meta} className="mt-6" />
            </article>
          ))}
        </div>
      </Section>

      {/* CLOSING */}
      <Section tone="cream" containerSize="narrow" className="text-center">
        <h2 className="font-serif text-3xl font-light text-ink sm:text-4xl">{w.closing.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{w.closing.body}</p>
        <ButtonLink href={c.cta.primary.href} variant="primary" size="lg" className="mt-8">
          {c.cta.primary.label}
        </ButtonLink>
        <p className="mt-6 text-sm text-ink-muted">{w.closing.note}</p>
      </Section>

      {/* SWITZERLAND / INTERNATIONAL — online reach, no location claim */}
      <section className="relative isolate overflow-hidden border-y border-line">
        <Image
          src="/images/band-meadow.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cream/92" />
        <Container size="narrow" className="relative py-14 sm:py-24">
          <h2 className="font-serif text-3xl font-light text-ink sm:text-4xl">
            {w.switzerland.heading}
          </h2>
          <div className="mt-6 space-y-5">
            {w.switzerland.paras.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <FurtherReading locale={locale} pageKey="work-with-me" />

      <CtaBand locale={locale} />
    </>
  );
}
