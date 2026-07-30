import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { renderInline } from "@/lib/inline";

/** Renders the Impressum and (separately) the Privacy page from typed content. */

export function ImpressumPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const i = c.impressum;

  return (
    <article className="bg-cream">
      <Container size="narrow" className="py-20 sm:py-24">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl font-light text-ink sm:text-5xl">{i.heading}</h1>
        <div className="mt-12 space-y-10">
          {i.blocks.map((block) => (
            <section key={block.heading}>
              <h2 className="font-serif text-xl text-ink">{block.heading}</h2>
              <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink-soft">
                {block.lines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = c.privacy;

  return (
    <article className="bg-cream">
      <Container size="narrow" className="py-20 sm:py-24">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl font-light text-ink sm:text-5xl">{p.heading}</h1>
        <p className="mt-6 leading-relaxed text-ink-soft">{p.intro}</p>
        <div className="prose-tf mt-12">
          {p.sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2>{s.heading}</h2>
              {s.paras.map((para, idx) => (
                <p key={idx}>{renderInline(para)}</p>
              ))}
              {s.bullets && (
                <ul>
                  {s.bullets.map((b, idx) => (
                    <li key={idx}>{renderInline(b)}</li>
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

/**
 * Terms & Conditions / AGB. Same shell as the Privacy page: conventional legal
 * text, numbered clauses, version line at the end.
 */
export function TermsPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = c.terms;

  return (
    <article className="bg-cream">
      <Container size="narrow" className="py-20 sm:py-24">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl font-light text-ink sm:text-5xl">{t.heading}</h1>
        <div className="prose-tf mt-12">
          {t.sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2>{s.heading}</h2>
              {s.paras.map((para, idx) => (
                <p key={idx}>{renderInline(para)}</p>
              ))}
            </section>
          ))}
        </div>
        <p className="mt-4 border-t border-line pt-6 text-sm text-ink-muted">{t.version}</p>
      </Container>
    </article>
  );
}
