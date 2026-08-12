import type { Locale, SiteContent, BlogPost } from "./types";
import { en } from "./en";
import { de } from "./de";
import { loadContent } from "./load";

const CONTENT: Record<Locale, SiteContent> = { en, de };

/**
 * In development, re-read the JSON on every call.
 *
 * `en`/`de` read their files once, when the module is first evaluated. That is
 * exactly right for production — every page is statically generated, so the
 * content is read once at build time and reused. But it means a save in the
 * admin does not show up locally until the dev server restarts, which reads as
 * "my edit did not save".
 *
 * Re-reading per call costs a handful of synchronous file reads per request,
 * which is irrelevant in dev and never happens in production: the branch is
 * decided by NODE_ENV, which Next sets to "production" for both `next build`
 * and `next start`, so the built site keeps the read-once behaviour unchanged.
 */
const isDev = process.env.NODE_ENV === "development";

export function getContent(locale: Locale): SiteContent {
  return isDev ? loadContent(locale) : CONTENT[locale];
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
