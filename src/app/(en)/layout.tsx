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
  icons: { icon: "/favicon.ico" },
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
