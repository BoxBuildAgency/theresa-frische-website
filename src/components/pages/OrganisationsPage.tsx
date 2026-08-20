import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";
import { FeatureCard, MetaList, QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { PageHero } from "@/components/sections/PageHero";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { ButtonLink } from "@/components/ui/Button";
import { pageCrumbs } from "@/lib/site";

export function OrganisationsPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const o = c.organisations;
  const crumbs = pageCrumbs(locale, "/organisations", o.eyebrow);

  return (
    <>
      <PageHero eyebrow={o.eyebrow} title={o.heading} lead={o.lead} crumbs={crumbs} />

      {/* INTRO + facts */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <p className="text-lg leading-relaxed text-ink-soft">{o.intro}</p>
          <div className="rounded-3xl border border-line bg-sand/50 p-8">
            <MetaList items={o.facts} />
          </div>
        </div>
      </Section>

      {/* THREE SUBPAGE CARDS */}
      <Section tone="sand">
        <ul className="grid gap-5 sm:grid-cols-3">
          {o.cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-7 transition-colors hover:border-clay-deep/50"
              >
                <h2 className="font-serif text-xl font-light text-ink transition-colors group-hover:text-forest">
                  {card.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{card.body}</p>
                <span className="mt-5 text-sm font-medium text-forest">
                  {locale === "de" ? "Mehr erfahren" : "Learn more"} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* HER PHOTOGRAPH — delivering a seminar */}
      <div className="relative aspect-[3/2] w-full sm:aspect-[21/9]">
        <Image
          src="/images/organisations.webp"
          alt={locale === "de"
            ? "Theresa Frische bei einem Seminar zu Wohlbefinden am Arbeitsplatz."
            : "Theresa Frische delivering a workplace wellbeing seminar."}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

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

      <FurtherReading locale={locale} pageKey="organisations" tone="cream" />

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
