import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { SITE_URL, ROUTES, alternatesForKey } from "./site";

/**
 * Build per-page metadata with canonical URL, EN/DE hreflang alternates, and
 * Open Graph. `routeKey` ties the page to the ROUTES table so alternates and
 * canonicals stay correct for both locales.
 */
export function buildMetadata(opts: {
  locale: Locale;
  routeKey: string;
  title: string;
  description: string;
  ogImage?: string;
  noTitleTemplate?: boolean;
}): Metadata {
  const { locale, routeKey, title, description } = opts;
  const route = ROUTES.find((r) => r.key === routeKey);
  const canonicalPath = route ? route[locale] : "/";
  const canonical = SITE_URL + canonicalPath;
  const alt = alternatesForKey(routeKey);
  const ogImage = opts.ogImage ?? "/images/og-default.jpg";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: alt
        ? {
            en: alt.en,
            "de-DE": alt.de,
            "x-default": alt.en,
          }
        : undefined,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "Theresa Frische",
      locale: locale === "de" ? "de_DE" : "en_GB",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
