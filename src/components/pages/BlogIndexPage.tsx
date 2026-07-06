import type { Locale } from "@/content/types";
import { getContent, getPublishedPosts } from "@/content";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { BlogList } from "@/components/site/BlogList";
import { pageCrumbs } from "@/lib/site";

export function BlogIndexPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const b = c.blog;
  const posts = getPublishedPosts(locale);
  const crumbs = pageCrumbs(locale, "/blog", b.eyebrow);

  return (
    <>
      <PageHero eyebrow={b.eyebrow} title={b.heading} lead={b.intro} crumbs={crumbs} />
      <Section tone="cream">
        <BlogList
          posts={posts}
          locale={locale}
          allLabel={b.allLabel}
          minRead={b.minRead}
          readMore={b.readMore}
        />
      </Section>
      <CtaBand locale={locale} />
    </>
  );
}
