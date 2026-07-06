import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqJsonLd } from "@/components/site/JsonLd";

export function FaqPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const f = c.faq;

  return (
    <>
      <FaqJsonLd faq={f} />
      <PageHero eyebrow={f.eyebrow} title={f.heading} lead={f.intro} />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[210px_1fr] lg:gap-16">
            {/* Category jump nav */}
            <nav aria-label={f.jumpLabel} className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow mb-4">{f.jumpLabel}</p>
              <ul className="space-y-2.5 border-l border-line pl-4">
                {f.categories.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      className="text-sm text-ink-soft transition-colors hover:text-forest"
                    >
                      {cat.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Categories with accordions */}
            <div className="space-y-14">
              {f.categories.map((cat) => (
                <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-h`} className="scroll-mt-28">
                  <h2
                    id={`${cat.id}-h`}
                    className="font-serif text-2xl font-light text-ink sm:text-3xl"
                  >
                    {cat.title}
                  </h2>
                  <div className="mt-5 divide-y divide-line border-t border-line">
                    {cat.items.map((item) => (
                      <details key={item.q} className="group py-4">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                          <h3 className="text-base font-medium text-ink">{item.q}</h3>
                          <span
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-xl font-light leading-none text-sage transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
