import fs from "node:fs";
import path from "node:path";

/**
 * Serves the llms.txt family through Next rather than from `public/`.
 *
 * These files used to live in `public/`, where Netlify uploads them as CDN
 * assets and serves them without ever invoking Next — so the host-conditional
 * `X-Robots-Tag` in next.config.ts never reached them, and they were the one
 * gap in the v3 §5.3 staging noindex. Routes rendered by Next (robots.txt,
 * sitemap.xml) do get the header, so serving them here closes it.
 *
 * The handlers are `force-static`, so the file is read once at build time and
 * the response is baked into the output — no per-request filesystem access.
 */
export function readLlmsFile(name: "llms.txt" | "llms-full.txt" | "llm.txt"): string {
  return fs.readFileSync(path.join(process.cwd(), "src", "content", "llms", name), "utf8");
}

/** Plain-text response with the same caching posture as the other static routes. */
export function textResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
