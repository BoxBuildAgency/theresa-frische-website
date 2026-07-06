import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";
import { MetaList, QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { ButtonLink } from "@/components/ui/Button";
import { pageCrumbs } from "@/lib/site";

export function WorkTogetherPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const w = c.workTogether;
  const crumbs = pageCrumbs(locale, "/work-together", w.eyebrow);

  return (
    <>
      <PageHero eyebrow={w.eyebrow} title={w.heading} lead={w.intro} crumbs={crumbs} />

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

      <FurtherReading locale={locale} pageKey="work-together" />

      <CtaBand locale={locale} />
    </>
  );
}
