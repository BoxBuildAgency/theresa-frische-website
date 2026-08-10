import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PersonServiceJsonLd } from "@/components/site/JsonLd";
import { pageCrumbs } from "@/lib/site";

/**
 * Human-readable, AI-extraction-friendly summary of the practice.
 * Plain factual prose + Person/Service JSON-LD (non-medical).
 */
export function AiInfoPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const a = c.aiInfo;
  const crumbs = pageCrumbs(locale, "/ai-info", a.eyebrow);

  return (
    <article className="bg-cream">
      <PersonServiceJsonLd content={c} />
      <Container size="narrow" className="py-20 sm:py-24">
        <Breadcrumbs items={crumbs} className="mb-6" />
        <Eyebrow>{a.eyebrow}</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl font-light text-ink sm:text-5xl">{a.heading}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{a.intro}</p>
        <p className="mt-2 text-sm text-ink-muted">{a.updated}</p>

        <div className="prose-tf mt-12">
          {a.sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2>{s.heading}</h2>
              {(s.paras ?? []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.bullets && s.bullets.length > 0 && (
                <ul>
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
