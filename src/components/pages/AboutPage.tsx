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
                src="/images/about-theresa-2026.webp"
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

      {/* Philosophy, the numbered 01–04 sections and the quotes band moved to
          /about/philosophy in August 2026 (§4). About Me now reads as an
          introduction; the depth lives one click away and is linked from the
          About nav dropdown and from the card below. */}

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
              <div>
                <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
                {/* The PsyCo recognition note belongs to the master's degree, not
                    to the systemic training it used to sit beneath. Rendered from
                    the same single field, so the wording is unchanged and there is
                    still only one place to edit it. */}
                {item.title.startsWith("M.Sc.") && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.psyCoNote}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* ---------------------------------------------------------------
            ASSOCIATION LOGOS — placeholder, intentionally empty (v3 §2.3).
            Theresa is considering requesting the Somatic Experiencing
            association logo. Third-party logos need WRITTEN PERMISSION from
            the association before they may be displayed, so nothing is
            rendered here yet.

            To enable later: drop the artwork into public/images/ and render a
            small, muted row here, e.g.
              <ul className="mt-8 flex flex-wrap items-center gap-6 opacity-80">
                <li><Image src="/images/logo-se-association.png" alt="…" width={120} height={48} /></li>
              </ul>
            Keep logos small and greyscale-ish so they don't undercut the
            premium feel, per her design note.
        --------------------------------------------------------------- */}
      </Section>

      <FurtherReading locale={locale} pageKey="about" tone="cream" />

      <CtaBand locale={locale} />
    </>
  );
}
