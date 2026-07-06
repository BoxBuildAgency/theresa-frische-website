import type { Locale, SiteContent, BlogPost } from "./types";
import { en } from "./en";
import { de } from "./de";

const CONTENT: Record<Locale, SiteContent> = { en, de };

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}

/** Published posts, newest first (excludes any ready-to-fill stub drafts). */
export function getPublishedPosts(locale: Locale): BlogPost[] {
  return getContent(locale)
    .blog.posts.filter((p) => !p.draft)
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return getPublishedPosts(locale).find((p) => p.slug === slug);
}

export type { Locale, SiteContent, BlogPost };
