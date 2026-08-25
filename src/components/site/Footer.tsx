import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Disclaimer } from "./Disclaimer";

/**
 * No year in the copyright line, deliberately.
 *
 * The site is statically generated, so any year — hard-coded or read from the
 * clock at build time — freezes at the last deploy. If nothing is published for
 * a year the footer quietly says the wrong thing, and nobody notices. A bare
 * "© Theresa Frische" is always correct and never needs maintaining.
 */
export function Footer({ content }: { content: SiteContent }) {
  const { footer, brand, cta, disclaimer, locale } = content;

  return (
    <footer className="border-t border-line bg-sand">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + CTA */}
          <div>
            <p className="font-serif text-2xl text-ink">{brand.name}</p>
            <p className="eyebrow mt-2">{brand.title}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {footer.builtNote}
            </p>
            <ButtonLink href={cta.primary.href} variant="primary" className="mt-6">
              {cta.primary.label}
            </ButtonLink>
          </div>

          {/* Site nav */}
          <nav aria-label="Footer">
            <p className="eyebrow mb-4">{brand.tagline}</p>
            <ul className="space-y-3">
              {footer.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal nav */}
          <nav aria-label="Legal">
            <p className="eyebrow mb-4">&nbsp;</p>
            <ul className="space-y-3">
              {footer.legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 border-t border-line pt-10">
          <Disclaimer disclaimer={disclaimer} locale={locale} variant="footer" />
        </div>

        {/* Baseline */}
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.line}</p>
          <p>
            © {brand.name}. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
