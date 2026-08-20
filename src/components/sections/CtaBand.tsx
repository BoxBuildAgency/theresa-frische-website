import Image from "next/image";
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
  const eyebrow = locale === "de" ? "Kennenlerngespräch" : "Discovery call";
  const body =
    locale === "de"
      ? "Buchen Sie ein kostenloses 15-minütiges Kennenlerngespräch – entspannt und unverbindlich."
      : "Book a free 15-minute discovery call — a relaxed, no-obligation way to begin.";

  return (
    <section className="bg-sand">
      <Container className="py-14 sm:py-24">
        <div className="relative isolate flex flex-col items-start gap-8 overflow-hidden rounded-3xl bg-pine px-8 py-14 text-cream sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Subtle warm-sand texture behind the deep forest panel */}
          <Image
            src="/images/band-cta.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-pine/88" />
          <div className="max-w-xl">
            <p className="eyebrow eyebrow-dark mb-3">{eyebrow}</p>
            <h2 className="font-serif text-3xl font-light leading-tight text-cream sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-cream/80">{body}</p>
          </div>
          <ButtonLink
            href={c.cta.primary.href}
            variant="onDark"
            size="lg"
            className="shrink-0"
          >
            {c.cta.primary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
