import type { Locale, SiteContent } from "@/content/types";
import { clsx } from "@/lib/clsx";

/**
 * Hard-coded compliance disclaimer: counselling is not psychotherapy.
 * Rendered in the footer and on the contact page.
 */

/**
 * Crisis numbers, deliberately hard-coded rather than CMS-editable.
 *
 * The disclaimer tells someone in crisis to contact emergency services; on its
 * own that is advice without a number, at the moment a number is the only thing
 * that helps. Swiss numbers first, matching the Impressum, then the European
 * one. Not editable because an emergency number is not copy: a typo here is the
 * one typo on this site that could matter, and nobody would notice it.
 *
 * Plain text rather than tel: links, matching how the crisis block on the
 * contact page already renders its numbers.
 *
 * The footer only. The contact page renders the full CrisisResources list
 * directly above this same disclaimer, so repeating them there would just
 * print the same numbers twice on one screen.
 */
const CRISIS_LINE: Record<Locale, string> = {
  en: "Switzerland: 144 emergency · 143 Die Dargebotene Hand, free, 24h · Europe: 112",
  de: "Schweiz: 144 Notruf · 143 Die Dargebotene Hand, kostenlos, 24 h · Europa: 112",
};
export function Disclaimer({
  disclaimer,
  locale,
  variant = "footer",
}: {
  disclaimer: SiteContent["disclaimer"];
  locale: Locale;
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
      {variant === "footer" && (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{CRISIS_LINE[locale]}</p>
      )}
    </aside>
  );
}
