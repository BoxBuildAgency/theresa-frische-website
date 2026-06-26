import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";
import { FeatureCard, MetaList, QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export function OrganisationsPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const o = c.organisations;

  return (
    <>
      <PageHero eyebrow={o.eyebrow} title={o.heading} lead={o.lead} />

      {/* INTRO + facts */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <p className="text-lg leading-relaxed text-ink-soft">{o.intro}</p>
          <div className="rounded-3xl border border-line bg-sand/50 p-8">
            <MetaList items={o.facts} />
          </div>
        </div>
      </Section>

      {/* FORMATS */}
      <Section tone="sand">
        <SectionHeader heading={o.formats.heading} intro={o.formats.intro} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {o.formats.items.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </Section>

      {/* INDIVIDUAL SUPPORT */}
      <Section tone="cream">
        <SectionHeader heading={o.individual.heading} intro={o.individual.intro} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {o.individual.items.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      {/* TOPICS */}
      <Section tone="sand" containerSize="narrow">
        <SectionHeader heading={o.topics.heading} />
        <ul className="mt-8 flex flex-wrap gap-3">
          {o.topics.items.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line-strong bg-cream px-4 py-2 text-sm text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* APPROACH */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeader heading={o.approach.heading} />
            <p className="mt-6 leading-relaxed text-ink-soft">{o.approach.body}</p>
            <p className="mt-6 font-serif text-2xl font-light italic leading-snug text-forest">
              {o.approach.emphasis}
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-sand/50 p-8">
            <MetaList items={o.approach.facts} />
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-2">
          {o.testimonials.map((q, i) => (
            <QuoteBlock key={i} quote={q} tone="forest" />
          ))}
        </div>
      </Section>

      {/* CLOSING */}
      <Section tone="sand" containerSize="narrow" className="text-center">
        <h2 className="font-serif text-3xl font-light text-ink sm:text-4xl">{o.closing.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{o.closing.body}</p>
        <ButtonLink href={c.cta.primary.href} variant="primary" size="lg" className="mt-8">
          {c.cta.primary.label}
        </ButtonLink>
      </Section>
    </>
  );
}
