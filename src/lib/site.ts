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
  { key: "about", en: "/about", de: "/de/ueber-mich" },
  // About Me split into two pages, August 2026 (§4). The German slug follows the
  // existing convention: keyword-rich, no possessive, mirroring the EN segment.
  { key: "about-philosophy", en: "/about/philosophy", de: "/de/ueber-mich/philosophie" },
  // Work With Me (v2: renamed from /work-together) + its four child pages
  { key: "work-with-me", en: "/work-with-me", de: "/de/angebot" },
  {
    key: "wwm-psychological-counselling",
    en: "/work-with-me/psychological-counselling",
    de: "/de/angebot/psychologische-beratung",
  },
  {
    key: "wwm-couples-counselling",
    en: "/work-with-me/couples-counselling",
    de: "/de/angebot/paarberatung",
  },
  {
    key: "wwm-burnout-prevention",
    en: "/work-with-me/burnout-prevention",
    de: "/de/angebot/burnout-praevention",
  },
  {
    key: "wwm-somatic-experiencing",
    en: "/work-with-me/somatic-experiencing",
    de: "/de/angebot/somatic-experiencing",
  },
  // For Organisations + its three child pages
  { key: "organisations", en: "/organisations", de: "/de/fuer-unternehmen" },
  {
    key: "org-talks-workshops-courses",
    en: "/organisations/talks-workshops-courses",
    de: "/de/fuer-unternehmen/vortraege-workshops-kurse",
  },
  {
    key: "org-leadership-coaching",
    en: "/organisations/leadership-coaching",
    de: "/de/fuer-unternehmen/fuehrungskraefte-coaching",
  },
  {
    key: "org-employee-counselling",
    en: "/organisations/employee-counselling",
    de: "/de/fuer-unternehmen/beratung-mitarbeitende",
  },
  { key: "weekly-wellbeing", en: "/weekly-wellbeing", de: "/de/weekly-wellbeing" },
  { key: "blog", en: "/blog", de: "/de/blog" },
  { key: "faq", en: "/faq", de: "/de/faq" },
  { key: "contact", en: "/contact", de: "/de/contact" },
  { key: "ai-info", en: "/ai-info", de: "/de/ai-info" },
  { key: "impressum", en: "/impressum", de: "/de/impressum" },
  { key: "privacy", en: "/privacy", de: "/de/datenschutz" },
  { key: "terms", en: "/terms", de: "/de/agb" },
];

/** Route keys of the Work With Me child pages, in display order. */
export const WWM_CHILD_KEYS = [
  "wwm-psychological-counselling",
  "wwm-couples-counselling",
  "wwm-burnout-prevention",
  "wwm-somatic-experiencing",
] as const;

/** Route keys of the For Organisations child pages, in display order. */
export const ORG_CHILD_KEYS = [
  "org-talks-workshops-courses",
  "org-leadership-coaching",
  "org-employee-counselling",
] as const;

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

/**
 * Three-level breadcrumb trail for a child page: Home > Parent > Child.
 * Paths are resolved from the ROUTES table so they stay correct per locale.
 */
export function childCrumbs(
  locale: Locale,
  parentEnPath: string,
  parentLabel: string,
  childEnPath: string,
  childLabel: string,
): { label: string; href: string }[] {
  return [
    { label: locale === "de" ? "Startseite" : "Home", href: locale === "de" ? "/de" : "/" },
    { label: parentLabel, href: localizedPath(locale, parentEnPath) },
    { label: childLabel, href: localizedPath(locale, childEnPath) },
  ];
}

/** hreflang alternate map for a given route key. */
export function alternatesForKey(key: string): { en: string; de: string } | null {
  const r = ROUTES.find((x) => x.key === key);
  if (!r) return null;
  return { en: SITE_URL + r.en, de: SITE_URL + r.de };
}
