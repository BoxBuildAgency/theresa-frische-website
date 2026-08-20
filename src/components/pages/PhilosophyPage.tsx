import Image from "next/image";
import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { QuoteBlock, SectionHeader } from "@/components/ui/Pieces";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { PersonServiceJsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { pageCrumbs } from "@/lib/site";

/**
 * My Philosophy — split out of About in August 2026 (§4).
 *
 * The prose, the numbered 01–04 sections and the client testimonial all used to
 * sit at the bottom of the About page, which had grown long enough that few
 * people reached them. They are the substance of how she works, so they get
 * their own route and their own place in the About dropdown.
 */
export function PhilosophyPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = c.philosophyPage;
  const crumbs = pageCrumbs(locale, "/about/philosophy", p.eyebrow);

  return (
    <>
      <PersonServiceJsonLd content={c} />

      <PageHero eyebrow={p.eyebrow} title={p.heading} crumbs={crumbs} />

      {/* The prose */}
      <Section tone="cream" containerSize="narrow">
        <div className="space-y-6">
          {p.body.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              {para}
            </p>
          ))}
        </div>
      </Section>

      {/* SOFTENING BAND (§4b.2) — a full-width photograph between the prose and
          the numbered sections, so the page has somewhere to breathe before the
          detail starts. Decorative unless she gives it alt text in the admin. */}
      <section className="relative isolate overflow-hidden bg-sand">
        <Image
          src="/images/band-meadow-morning.webp"
          alt={p.bandAlt}
          aria-hidden={p.bandAlt ? undefined : "true"}
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream/30 via-cream/10 to-sand/40"
        />
        <div className="relative h-48 sm:h-64 lg:h-80" />
      </section>

      {/* The numbered 01–04 sections */}
      <Section tone="cream" containerSize="narrow">
        <ol className="space-y-14">
          {p.sections.map((sec) => (
            <li key={sec.number}>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl font-light text-clay-deep">{sec.number}</span>
                <h2 className="font-serif text-2xl font-light leading-snug text-ink">
                  {sec.heading}
                </h2>
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

      {/* The client testimonial that used to sit under 01 (§4b.4) */}
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
          <QuoteBlock quote={p.testimonial} tone="forest" />
        </Container>
      </section>

      <FurtherReading locale={locale} pageKey="about" tone="cream" />

      <CtaBand locale={locale} />
    </>
  );
}
