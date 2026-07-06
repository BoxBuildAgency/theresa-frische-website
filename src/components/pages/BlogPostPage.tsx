import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale, BlogBlock } from "@/content/types";
import { getContent, getPostBySlug, getPublishedPosts } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArticleJsonLd } from "@/components/site/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { RELATED, RELATED_FALLBACK } from "@/content/blog/related";
import { renderInline } from "@/lib/inline";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{renderInline(block.text)}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-sage pl-6 font-serif text-2xl font-light italic text-forest">
          {block.text}
          {block.attribution && (
            <footer className="mt-2 font-sans text-sm not-italic text-ink-muted">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );
  }
}

export function BlogPostPage({ locale, slug }: { locale: Locale; slug: string }) {
  const c = getContent(locale);
  const post = getPostBySlug(locale, slug);
  if (!post) notFound();

  const base = locale === "de" ? "/de/blog" : "/blog";
  const dateLabel = new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.date));

  // Cluster-driven related posts: 3 hand-picked same-cluster slugs, same locale,
  // never self. Fall back to fill from other posts if any slug is missing.
  const all = getPublishedPosts(locale);
  const relatedSlugs = RELATED[post.slug] ?? RELATED_FALLBACK;
  const related = relatedSlugs
    .filter((s) => s !== post.slug)
    .map((s) => all.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  for (const p of all) {
    if (related.length >= 3) break;
    if (p.slug !== post.slug && !related.some((r) => r.slug === p.slug)) related.push(p);
  }
  const relatedPosts = related.slice(0, 3);

  const homeHref = locale === "de" ? "/de" : "/";
  const homeLabel = locale === "de" ? "Startseite" : "Home";
  const crumbs = [
    { label: homeLabel, href: homeHref },
    { label: "Blog", href: base },
    { label: post.title, href: `${base}/${post.slug}` },
  ];

  return (
    <article className="bg-cream">
      <ArticleJsonLd
        content={c}
        locale={locale}
        slug={post.slug}
        title={post.title}
        description={post.excerpt}
        date={post.date}
      />

      {/* Header */}
      <header className="border-b border-line bg-sand">
        <Container size="narrow" className="py-16 sm:py-20">
          <Breadcrumbs items={crumbs} className="mb-8" />
          <Eyebrow className="mt-2">{post.category}</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-ink-muted">
            {dateLabel} · {post.readingTime} {c.blog.minRead}
          </p>
        </Container>
      </header>

      {/* Body */}
      <Container size="narrow" className="py-14 sm:py-16">
        <div className="prose-tf text-lg">
          <p className="!text-xl !leading-relaxed text-ink">{post.excerpt}</p>
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* Author box */}
        <section className="mt-14 rounded-2xl border border-line bg-sand/50 p-7">
          <p className="eyebrow">{c.blog.authorHeading}</p>
          <p className="mt-3 font-serif text-xl text-ink">{c.brand.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.blog.authorBody}</p>
        </section>

        {/* Blog disclaimer */}
        <aside className="mt-8 rounded-xl border border-line bg-cream p-5 text-xs leading-relaxed text-ink-muted">
          {c.blogDisclaimer}
        </aside>
      </Container>

      {/* Related — cluster-driven, 3 same-locale posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-line bg-sand">
          <Container className="py-16">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl text-ink">{c.blog.relatedHeading}</h2>
              <Link
                href={base}
                className="shrink-0 text-sm font-medium text-forest transition-colors hover:text-forest-dark"
              >
                {c.blog.backToBlog} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <article key={p.slug} className="rounded-2xl border border-line bg-cream p-6">
                  <p className="text-xs font-medium text-forest">{p.category}</p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-ink">
                    <Link href={`${base}/${p.slug}`} className="hover:text-forest">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand locale={locale} />
    </article>
  );
}
