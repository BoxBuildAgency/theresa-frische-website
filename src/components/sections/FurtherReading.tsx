import Link from "next/link";
import type { Locale } from "@/content/types";
import { getPublishedPosts } from "@/content";
import { PAGE_POSTS } from "@/content/blog/related";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/Pieces";

/**
 * "Further reading" band on the service / pillar pages — links each page out to
 * its most relevant posts (per the cluster map in related.ts). Same-locale.
 */
export function FurtherReading({
  locale,
  pageKey,
  tone = "sand",
}: {
  locale: Locale;
  pageKey: string;
  tone?: "sand" | "cream";
}) {
  const slugs = PAGE_POSTS[pageKey] ?? [];
  const posts = getPublishedPosts(locale);
  const items = slugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (items.length === 0) return null;

  const base = locale === "de" ? "/de/blog" : "/blog";
  const heading = locale === "de" ? "Weiterlesen" : "Further reading";
  const intro =
    locale === "de"
      ? "Beiträge aus dem Journal, die zu diesem Thema passen."
      : "Reflections from the journal that go deeper on this theme.";
  const allLabel = locale === "de" ? "Alle Beiträge ansehen" : "Browse all articles";

  return (
    <Section tone={tone}>
      <SectionHeader eyebrow={heading} heading={intro} />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <li key={p.slug}>
            <Link
              href={`${base}/${p.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-line-strong"
            >
              <span className="text-xs font-medium text-forest">{p.category}</span>
              <span className="mt-3 font-serif text-lg leading-snug text-ink transition-colors group-hover:text-forest">
                {p.title}
              </span>
              <span className="mt-3 text-sm leading-relaxed text-ink-soft">{p.excerpt}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={base}
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-forest"
      >
        {allLabel} <span aria-hidden="true">→</span>
      </Link>
    </Section>
  );
}
