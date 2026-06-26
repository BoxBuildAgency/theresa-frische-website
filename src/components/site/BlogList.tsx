"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost, Locale } from "@/content/types";
import { clsx } from "@/lib/clsx";

export function BlogList({
  posts,
  locale,
  allLabel,
  minRead,
  readMore,
}: {
  posts: BlogPost[];
  locale: Locale;
  allLabel: string;
  minRead: string;
  readMore: string;
}) {
  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return [allLabel, ...Array.from(set)];
  }, [posts, allLabel]);

  const [active, setActive] = useState(allLabel);
  const filtered = active === allLabel ? posts : posts.filter((p) => p.category === active);
  const base = locale === "de" ? "/de/blog" : "/blog";

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === cat
                ? "border-forest bg-forest text-cream"
                : "border-line-strong bg-cream text-ink-soft hover:border-forest/40",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-2xl border border-line bg-cream p-7 transition-colors hover:border-line-strong"
          >
            <div className="flex items-center gap-3 text-xs text-ink-muted">
              <span className="rounded-full bg-sand px-3 py-1 font-medium text-forest">
                {post.category}
              </span>
              <span>
                {post.readingTime} {minRead}
              </span>
            </div>
            <h2 className="mt-4 font-serif text-2xl font-normal leading-snug text-ink">
              <Link href={`${base}/${post.slug}`} className="transition-colors group-hover:text-forest">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
            <Link
              href={`${base}/${post.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest"
            >
              {readMore} <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
