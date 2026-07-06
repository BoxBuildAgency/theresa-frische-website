import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { SiteShell } from "@/components/site/SiteShell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Theresa Frische — Systemic & Integrative Counsellor",
    template: "%s · Theresa Frische",
  },
  description:
    "Online counselling in English and German for individuals and couples navigating change, transition, and life across borders.",
  // Icons are handled by the App Router file convention (src/app/favicon.ico,
  // icon.svg, apple-icon.png) — no manual `icons` entry, which would override it.
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="bg-cream text-ink antialiased">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
