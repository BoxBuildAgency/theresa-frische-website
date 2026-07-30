import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // v2 re-slug (2026-07-30). Nothing was indexed under the old paths, but any
    // link already shared should still land in the right place.
    return [
      { source: "/work-together", destination: "/work-with-me", permanent: true },
      { source: "/de/work-together", destination: "/de/angebot", permanent: true },
      { source: "/de/about", destination: "/de/ueber-mich", permanent: true },
      { source: "/de/organisations", destination: "/de/fuer-unternehmen", permanent: true },
      // Note: /llm.txt is kept as a real duplicate file in public/, not a
      // redirect, so both paths serve content directly.
    ];
  },
};

export default nextConfig;
