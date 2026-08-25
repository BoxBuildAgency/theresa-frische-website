import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  label: string;
  href: string; // locale-relative path
}

/**
 * Visible breadcrumb trail + BreadcrumbList JSON-LD. The last item is the
 * current page (not a link).
 */
export function Breadcrumbs({
  items,
  className,
  tone = "default",
}: {
  items: Crumb[];
  className?: string;
  /** "onImage" inverts the trail for the photographic page banners. */
  tone?: "default" | "onImage";
}) {
  const onImage = tone === "onImage";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: SITE_URL + c.href,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={`flex flex-wrap items-center gap-2 text-xs ${
          onImage ? "text-cream/75" : "text-ink-muted"
        }`}
      >
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className={onImage ? "text-cream/50" : "text-line-strong"}>
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className={onImage ? "text-cream" : "text-ink-soft"}>
                  {c.label}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className={`transition-colors ${onImage ? "hover:text-cream" : "hover:text-forest"}`}
                >
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
