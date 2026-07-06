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
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
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
      <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="text-ink-soft">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-forest">
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
