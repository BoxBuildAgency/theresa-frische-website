import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

/**
 * The single recurring conversion CTA used across the site: the free
 * 15-minute discovery call. No pricing is ever shown.
 */
export function CtaBand({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const heading =
    locale === "de" ? "Bereit für den ersten Schritt?" : "Ready to take the first step?";
  const body =
    locale === "de"
      ? "Buchen Sie ein kostenloses 15-minütiges Kennenlerngespräch – entspannt und unverbindlich."
      : "Book a free 15-minute discovery call — a relaxed, no-obligation way to begin.";

  return (
    <section className="bg-sand">
      <Container className="py-20">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-forest px-8 py-14 text-cream sm:px-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-light leading-tight text-cream sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-cream/80">{body}</p>
          </div>
          <ButtonLink
            href={c.cta.primary.href}
            size="lg"
            className="shrink-0 bg-cream text-forest hover:bg-cream/90"
          >
            {c.cta.primary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
