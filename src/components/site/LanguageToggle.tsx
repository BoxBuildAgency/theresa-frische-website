"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { counterpartPath } from "@/lib/site";
import type { Locale } from "@/content/types";

// Fixed visual order: EN always left, DE always right — never reorder on toggle.
const ORDER: Locale[] = ["en", "de"];

export function LanguageToggle({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() ?? (locale === "de" ? "/de" : "/");
  // counterpartPath() returns the path for the non-active locale, which is the
  // only inactive locale here — so the inactive pill always links to it.
  const other = counterpartPath(pathname);

  return (
    <div className={className} role="group" aria-label={label}>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider">
        {ORDER.map((loc, i) => {
          const code = loc.toUpperCase();
          const active = loc === locale;
          return (
            <Fragment key={loc}>
              {i > 0 && (
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
              )}
              {active ? (
                <span aria-current="true" className="text-forest">
                  {code}
                </span>
              ) : (
                <Link
                  href={other.path}
                  hrefLang={loc}
                  className="text-ink-muted transition-colors hover:text-forest"
                >
                  {code}
                </Link>
              )}
            </Fragment>
          );
        })}
      </span>
    </div>
  );
}
