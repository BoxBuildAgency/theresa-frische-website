import type { MetadataRoute } from "next";
import { SITE_URL, ROUTES } from "@/lib/site";
import { getPublishedPosts } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = ROUTES.flatMap((r) => {
    const priority = r.key === "home" ? 1 : r.key === "impressum" || r.key === "privacy" ? 0.3 : 0.7;
    return [r.en, r.de].map((path) => ({
      url: SITE_URL + path,
      changeFrequency: "monthly" as const,
      priority,
    }));
  });

  const blogEntries: MetadataRoute.Sitemap = [
    ...getPublishedPosts("en").map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...getPublishedPosts("de").map((p) => ({
      url: `${SITE_URL}/de/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  // AI / answer-engine resources.
  const aiEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/llms.txt`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/llms-full.txt`, changeFrequency: "monthly", priority: 0.3 },
  ];

  return [...staticEntries, ...blogEntries, ...aiEntries];
}
