import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";
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

      <Section tone="cream" containerSize="narrow">
        <div className="divide-y divide-line">
          {f.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h2 className="font-serif text-xl font-normal text-ink">{item.q}</h2>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-2xl font-light leading-none text-sage transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
