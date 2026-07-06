import type { Locale } from "@/content/types";

export const SITE_URL = "https://theresafrische.com";

export const LOCALES: Locale[] = ["en", "de"];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * Canonical route table. Each entry maps a logical page to its English and
 * German URL paths. English is primary at `/`; German lives under `/de`.
 * This is the single source of truth for the EN/DE language toggle and for
 * generating sitemap + hreflang alternates.
 */
export interface RouteDef {
  key: string;
  en: string; // e.g. "/about"
  de: string; // e.g. "/de/about"
}

export const ROUTES: RouteDef[] = [
  { key: "home", en: "/", de: "/de" },
  { key: "about", en: "/about", de: "/de/about" },
  { key: "work-together", en: "/work-together", de: "/de/work-together" },
  { key: "organisations", en: "/organisations", de: "/de/organisations" },
  { key: "weekly-wellbeing", en: "/weekly-wellbeing", de: "/de/weekly-wellbeing" },
  { key: "blog", en: "/blog", de: "/de/blog" },
  { key: "faq", en: "/faq", de: "/de/faq" },
  { key: "contact", en: "/contact", de: "/de/contact" },
  { key: "impressum", en: "/impressum", de: "/de/impressum" },
  { key: "privacy", en: "/privacy", de: "/de/datenschutz" },
];

/** Detect the active locale from a pathname. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}

/**
 * Given the current pathname, return the equivalent path in the other locale.
 * Falls back to the locale home if no exact route match is found (e.g. for
 * dynamic blog slugs, which share the same slug across locales).
 */
export function counterpartPath(pathname: string): { locale: Locale; path: string } {
  const current = localeFromPath(pathname);
  const target: Locale = current === "en" ? "de" : "en";

  // Exact static route match
  for (const r of ROUTES) {
    if (r[current] === pathname) {
      return { locale: target, path: r[target] };
    }
  }

  // Dynamic blog post: /blog/[slug] <-> /de/blog/[slug]
  const blogMatch = pathname.match(/^(?:\/de)?\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    return { locale: target, path: target === "de" ? `/de/blog/${slug}` : `/blog/${slug}` };
  }

  // Fallback: locale home
  return { locale: target, path: target === "de" ? "/de" : "/" };
}

/** Prefix a logical EN path with the active locale's base. */
export function localizedPath(locale: Locale, enPath: string): string {
  const route = ROUTES.find((r) => r.en === enPath);
  if (route) return route[locale];
  // Generic prefixing for blog slugs etc.
  if (locale === "de") return enPath === "/" ? "/de" : `/de${enPath}`;
  return enPath;
}

/** Build a two-level breadcrumb trail (Home › Page) for an inner page. */
export function pageCrumbs(
  locale: Locale,
  enPath: string,
  label: string,
): { label: string; href: string }[] {
  return [
    { label: locale === "de" ? "Startseite" : "Home", href: locale === "de" ? "/de" : "/" },
    { label, href: localizedPath(locale, enPath) },
  ];
}

/** hreflang alternate map for a given route key. */
export function alternatesForKey(key: string): { en: string; de: string } | null {
  const r = ROUTES.find((x) => x.key === key);
  if (!r) return null;
  return { en: SITE_URL + r.en, de: SITE_URL + r.de };
}
