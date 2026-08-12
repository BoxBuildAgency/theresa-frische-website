import type { Metadata } from "next";

// The admin is never indexed and never surfaced to AI crawlers. It is also
// absent from sitemap.ts, robots.ts and the llms.txt files.
export const metadata: Metadata = {
  title: "Content admin",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

// This project has no app/layout.tsx (each locale route group is its own root
// layout), so the admin needs to provide <html>/<body> itself.
export default function KeystaticRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
