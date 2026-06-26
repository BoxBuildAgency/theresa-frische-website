import type { Metadata } from "next";
import { getContent, getPostBySlug, getPublishedPosts } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export function generateStaticParams() {
  return getPublishedPosts("de").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("de", slug);
  const c = getContent("de");
  if (!post) return { title: c.blog.metaTitle };
  return {
    ...buildMetadata({
      locale: "de",
      routeKey: "blog",
      title: `${post.title} · ${c.brand.name}`,
      description: post.excerpt,
    }),
    alternates: {
      canonical: `/de/blog/${slug}`,
      languages: { en: `/blog/${slug}`, "de-DE": `/de/blog/${slug}`, "x-default": `/blog/${slug}` },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostPage locale="de" slug={slug} />;
}
