import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale, BlogBlock } from "@/content/types";
import { getContent, getPostBySlug, getPublishedPosts } from "@/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArticleJsonLd } from "@/components/site/JsonLd";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
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

  const related = getPublishedPosts(locale)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

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
          <Link href={base} className="text-sm text-ink-muted transition-colors hover:text-forest">
            ← {c.blog.backToBlog}
          </Link>
          <Eyebrow className="mt-6">{post.category}</Eyebrow>
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

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line bg-sand">
          <Container size="narrow" className="py-16">
            <h2 className="font-serif text-2xl text-ink">{c.blog.relatedHeading}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
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
