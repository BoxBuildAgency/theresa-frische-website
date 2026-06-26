import type { SiteContent } from "@/content/types";
import { clsx } from "@/lib/clsx";

/**
 * Hard-coded compliance disclaimer: counselling is not psychotherapy.
 * Rendered in the footer and on the contact page.
 */
export function Disclaimer({
  disclaimer,
  variant = "footer",
}: {
  disclaimer: SiteContent["disclaimer"];
  variant?: "footer" | "card";
}) {
  return (
    <aside
      aria-label={disclaimer.heading}
      className={clsx(
        variant === "card" &&
          "rounded-2xl border border-line bg-sand/60 p-6 sm:p-8",
        variant === "footer" && "",
      )}
    >
      <p className="eyebrow mb-2">{disclaimer.heading}</p>
      <p
        className={clsx(
          "text-sm leading-relaxed",
          variant === "footer" ? "text-ink-muted" : "text-ink-soft",
        )}
      >
        {disclaimer.body}
      </p>
    </aside>
  );
}
