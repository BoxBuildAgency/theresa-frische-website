import type { FeatureItem, MetaPair, Quote } from "@/content/types";
import { clsx } from "@/lib/clsx";

/** Soft editorial card for an "area of focus" / approach item. */
export function FeatureCard({ item, index }: { item: FeatureItem; index?: number }) {
  return (
    <article className="group rounded-2xl border border-line bg-cream p-7 transition-colors hover:border-line-strong">
      {typeof index === "number" && (
        <span className="font-serif text-2xl text-sage">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3 className="mt-3 font-serif text-xl text-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
    </article>
  );
}

/** Definition-style list of label/value rows (practical info, facts). */
export function MetaList({ items, className }: { items: MetaPair[]; className?: string }) {
  return (
    <dl className={clsx("divide-y divide-line", className)}>
      {items.map((m) => (
        <div key={m.label} className="flex items-baseline justify-between gap-6 py-3">
          <dt className="text-sm text-ink-muted">{m.label}</dt>
          <dd className="text-right text-sm font-medium text-ink">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function QuoteBlock({
  quote,
  tone = "default",
  className,
}: {
  quote: Quote;
  tone?: "default" | "forest";
  className?: string;
}) {
  return (
    <figure
      className={clsx(
        "relative",
        tone === "forest" ? "text-cream" : "text-ink",
        className,
      )}
    >
      <blockquote className="font-serif text-2xl font-light italic leading-snug sm:text-3xl">
        <span className={tone === "forest" ? "text-clay" : "text-clay-deep"}>“</span>
        {quote.text}
        <span className={tone === "forest" ? "text-clay" : "text-clay-deep"}>”</span>
      </blockquote>
      <figcaption
        className={clsx(
          "mt-4 text-sm",
          tone === "forest" ? "text-cream/70" : "text-ink-muted",
        )}
      >
        — {quote.attribution}
      </figcaption>
    </figure>
  );
}

/** Eyebrow + serif heading block used at the top of inner pages / sections. */
export function SectionHeader({
  eyebrow,
  heading,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-light leading-tight text-ink sm:text-4xl">
        {heading}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}
