import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Disclaimer } from "./Disclaimer";

export function Footer({ content, year }: { content: SiteContent; year: number }) {
  const { footer, brand, cta, disclaimer } = content;

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
          <Disclaimer disclaimer={disclaimer} variant="footer" />
        </div>

        {/* Baseline */}
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.line}</p>
          <p>
            © {year} {brand.name}. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
