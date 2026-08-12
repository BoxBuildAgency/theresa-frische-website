import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Named AI / answer-engine crawlers we explicitly welcome. A wildcard rule also
// allows everything, but listing these signals intent and future-proofs against
// any later tightening of the wildcard.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/keystatic", "/api/keystatic"] },
      ...AI_CRAWLERS.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/keystatic", "/api/keystatic"] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
