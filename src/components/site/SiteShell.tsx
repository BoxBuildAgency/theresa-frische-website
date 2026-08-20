import type { Locale } from "@/content/types";
import { getContent } from "@/content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCta } from "./StickyMobileCta";
import { localizedPath } from "@/lib/site";

/**
 * Shared chrome (skip link + header + footer) wrapping every page in both
 * locales. Each route-group root layout renders this with its own locale.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const content = getContent(locale);
  const home = localizedPath(locale, "/");
  const skipLabel = locale === "de" ? "Zum Inhalt springen" : "Skip to content";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2 focus:text-sm focus:text-cream"
      >
        {skipLabel}
      </a>

      <Header
        locale={locale}
        home={home}
        brandName={content.brand.name}
        brandTagline={content.brand.tagline}
        nav={content.nav}
        bookCta={content.header.bookCta}
        menuOpen={content.header.menuOpen}
        menuClose={content.header.menuClose}
        langToggleLabel={content.header.langToggleLabel}
      />

      <main id="main">{children}</main>

      <Footer content={content} />

      {/* Mobile-only booking bar (§2.4). Rendered last so it sits above the
          page, and it hides itself over the footer and the crisis block. */}
      <StickyMobileCta cta={content.cta.primary} />
    </>
  );
}
