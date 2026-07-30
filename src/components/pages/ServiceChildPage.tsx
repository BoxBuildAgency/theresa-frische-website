import Link from "next/link";
import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { MetaList } from "@/components/ui/Pieces";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { childCrumbs, ROUTES } from "@/lib/site";
import { renderInline } from "@/lib/inline";

/**
 * Shared long-form template for the Work With Me and For Organisations child
 * pages (v2). Content comes from `serviceChildren[routeKey]`, so both locales
 * render the same component.
 */
export function ServiceChildPage({
  locale,
  routeKey,
  parentEnPath,
  parentLabel,
}: {
  locale: Locale;
  routeKey: string;
  parentEnPath: string;
  parentLabel: string;
}) {
  const c = getContent(locale);
  const page = c.serviceChildren[routeKey];
  const route = ROUTES.find((r) => r.key === routeKey);
  const crumbs = childCrumbs(
    locale,
    parentEnPath,
    parentLabel,
    route?.en ?? parentEnPath,
    page.heading,
  );

  const seeAlso = locale === "de" ? "Passend dazu" : "See also";

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.heading} lead={page.lead} crumbs={crumbs} />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="prose-tf text-lg">
            {page.paras.map((para, i) => (
              <p key={i}>{renderInline(para)}</p>
            ))}
          </div>

          <aside className="space-y-8">
            {page.facts && page.facts.length > 0 && (
              <div className="rounded-3xl border border-line bg-sand/50 p-8">
                <MetaList items={page.facts} />
              </div>
            )}

            {page.crossLinks && page.crossLinks.length > 0 && (
              <div className="rounded-2xl border border-line bg-cream p-6">
                <p className="eyebrow mb-4">{seeAlso}</p>
                <ul className="space-y-3">
                  {page.crossLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-forest underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-forest"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      {/* Numbered service row (01–04), used by Talks, Workshops & Courses */}
      {page.numbered && page.numbered.length > 0 && (
        <Section tone="sand">
          <Container className="!px-0">
            <ul className="divide-y divide-line border-t border-line">
              {page.numbered.map((item) => (
                <li key={item.title} className="grid gap-3 py-8 sm:grid-cols-[0.8fr_1.6fr] sm:gap-10">
                  <h2 className="font-serif text-2xl font-light text-ink">{item.title}</h2>
                  <p className="leading-relaxed text-ink-soft">{item.body}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <FurtherReading locale={locale} pageKey={routeKey} tone="cream" />

      <CtaBand locale={locale} />
    </>
  );
}
