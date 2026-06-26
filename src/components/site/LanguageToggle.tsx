"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { counterpartPath } from "@/lib/site";
import type { Locale } from "@/content/types";

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
  const other = counterpartPath(pathname);
  const otherCode = other.locale.toUpperCase();
  const currentCode = locale.toUpperCase();

  return (
    <div className={className} role="group" aria-label={label}>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider">
        <span aria-current="true" className="text-forest">
          {currentCode}
        </span>
        <span aria-hidden="true" className="text-line-strong">
          /
        </span>
        <Link
          href={other.path}
          hrefLang={other.locale}
          className="text-ink-muted transition-colors hover:text-forest"
        >
          {otherCode}
        </Link>
      </span>
    </div>
  );
}
