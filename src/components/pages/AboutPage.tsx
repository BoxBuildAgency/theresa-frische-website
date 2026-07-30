import Image from "next/image";
import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { PersonServiceJsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageCrumbs } from "@/lib/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const a = c.about;
  const crumbs = pageCrumbs(locale, "/about", a.eyebrow);

  return (
    <>
      <PersonServiceJsonLd content={c} />

      {/* INTRO with portrait */}
      <section className="border-b border-line bg-sand">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-24">
          <div className="order-2 lg:order-1">
            <Breadcrumbs items={crumbs} className="mb-6" />
            <Eyebrow>{a.eyebrow}</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
              {a.name}
            </h1>
            <p className="mt-3 font-serif text-2xl font-light italic text-forest">{a.subtitle}</p>
            <p className="eyebrow mt-6 normal-case tracking-normal text-ink-muted">{a.credentials}</p>
            <p className="mt-6 max-w-xl border-l-2 border-sage pl-5 text-lg leading-relaxed text-ink-soft">
              {a.lead}
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-cream shadow-sm">
              <Image
                src="/images/about-theresa.jpg"
                alt={a.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO paragraphs */}
      <Section tone="cream" containerSize="narrow">
        <div className="space-y-6">
          {a.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* LIVED EXPERIENCE */}
      <Section tone="sand" containerSize="narrow">
        <SectionHeader heading={a.lived.heading} eyebrow={locale === "de" ? "Gelebte Erfahrung" : "Lived experience"} />
        <div className="mt-8 space-y-6">
          {a.lived.body.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
        <p className="mt-8 font-serif text-2xl font-light italic leading-snug text-forest">
          {a.lived.emphasis}
        </p>
      </Section>

      {/* PHILOSOPHY */}
      <Section tone="cream" containerSize="narrow">
        <SectionHeader heading={a.philosophy.heading} eyebrow={locale === "de" ? "Meine Haltung" : "My philosophy"} />
        <div className="mt-8 space-y-6">
          {a.philosophy.body.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* PHILOSOPHY 01–04 */}
      <Section tone="sand" containerSize="narrow">
        <ol className="space-y-14">
          {a.philosophySections.map((sec) => (
            <li key={sec.number}>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl font-light text-clay-deep">{sec.number}</span>
                <h3 className="font-serif text-2xl font-light leading-snug text-ink">
                  {sec.heading}
                </h3>
              </div>
              <div className="mt-4 space-y-4">
                {sec.paras.map((para, i) => (
                  <p key={i} className="leading-relaxed text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* QUOTES */}
      <section className="relative isolate overflow-hidden bg-pine py-14 sm:py-24">
        <Image
          src="/images/band-olive.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-pine/85" />
        <Container size="narrow" className="relative">
          <div className="space-y-14">
            {a.quotes.map((q, i) => (
              <QuoteBlock key={i} quote={q} tone="forest" />
            ))}
          </div>
        </Container>
      </section>

      {/* EDUCATION */}
      <Section tone="sand" containerSize="narrow">
        <SectionHeader
          heading={a.education.heading}
          eyebrow={locale === "de" ? "Qualifikationen" : "Qualifications"}
        />
        <ul className="mt-10 divide-y divide-line">
          {a.education.items.map((item) => (
            <li key={item.title} className="grid gap-1 py-5 sm:grid-cols-[0.9fr_1.4fr] sm:gap-6">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{a.psyCoNote}</p>
      </Section>

      <FurtherReading locale={locale} pageKey="about" tone="cream" />

      <CtaBand locale={locale} />
    </>
  );
}
