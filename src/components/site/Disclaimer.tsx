import type { SiteContent } from "@/content/types";
import { clsx } from "@/lib/clsx";

/**
 * The footer disclaimer and the emergency numbers beneath it.
 *
 * Every word here is CMS content. Both the disclaimer text and the crisis line
 * used to be fixed in code — the crisis line as a constant in this file — which
 * meant Theresa could not reword or remove either without a developer. Each is
 * now a field she owns, and clearing either one hides it.
 *
 * The crisis line renders in the footer only: the contact page already shows
 * the full CrisisResources list directly above this same disclaimer, so
 * repeating the numbers there would print them twice on one screen.
 */
export function Disclaimer({
  disclaimer,
  variant = "footer",
}: {
  disclaimer: SiteContent["disclaimer"];
  variant?: "footer" | "card";
}) {
  const crisisLine = disclaimer.crisisLine?.trim();

  return (
    <aside
      aria-label={disclaimer.heading}
      className={clsx(variant === "card" && "rounded-2xl border border-line bg-sand/60 p-6 sm:p-8")}
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
      {variant === "footer" && crisisLine && (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{crisisLine}</p>
      )}
    </aside>
  );
}
