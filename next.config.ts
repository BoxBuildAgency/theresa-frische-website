import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // v3 §5.3 — keep the staging deploy out of search indexes.
    //
    // Every canonical points at https://theresafrische.com, which does not resolve
    // yet, so the publicly crawlable *.netlify.app host could be indexed instead.
    // This applies `X-Robots-Tag: noindex` ONLY when the request Host ends in
    // .netlify.app, so it switches itself off automatically on the production
    // domain — no site-wide noindex to remember to remove at go-live.
    //
    // Implemented here rather than in netlify.toml because Netlify's [[headers]]
    // cannot be conditioned on the host, and rather than in middleware because
    // this project deliberately ships without middleware. Next.js matches `has`
    // host values as an anchored regex.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.netlify\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      // The content admin is never indexed, on any host.
      {
        source: "/keystatic/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      { source: "/keystatic", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      {
        source: "/api/keystatic/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },

  async redirects() {
    // v2 re-slug (2026-07-30). Nothing was indexed under the old paths, but any
    // link already shared should still land in the right place.
    return [
      { source: "/work-together", destination: "/work-with-me", permanent: true },
      { source: "/de/work-together", destination: "/de/angebot", permanent: true },
      { source: "/de/about", destination: "/de/ueber-mich", permanent: true },
      { source: "/de/organisations", destination: "/de/fuer-unternehmen", permanent: true },
      // Note: /llm.txt is kept as a real duplicate of /llms.txt, not a
      // redirect, so both paths serve content directly. Both are served by
      // route handlers under src/app/, not from public/ — see
      // src/content/llms/serve.ts for why.
    ];
  },
};

export default nextConfig;
