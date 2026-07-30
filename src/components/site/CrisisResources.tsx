import type { SiteContent } from "@/content/types";

/**
 * Hard-coded crisis resources. Shown near the contact form and alongside the
 * disclaimer. Values are not editable content — they are safety information.
 */
export function CrisisResources({ crisis }: { crisis: SiteContent["crisis"] }) {
  return (
    <section
      aria-label={crisis.heading}
      className="rounded-2xl border border-clay/25 bg-pine p-6 text-cream sm:p-8"
    >
      <h2 className="font-serif text-2xl text-cream">{crisis.heading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-cream/80">{crisis.intro}</p>
      <ul className="mt-6 space-y-3">
        {crisis.items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col gap-0.5 border-b border-cream/15 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <span className="text-sm text-cream/75">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
              >
                {item.value}
              </a>
            ) : (
              <span className="font-medium tracking-wide text-cream">{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
