import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { SiteShell } from "@/components/site/SiteShell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Theresa Frische — Systemische & Integrative Beraterin",
    template: "%s · Theresa Frische",
  },
  description:
    "Online-Beratung auf Deutsch und Englisch für Einzelpersonen und Paare in Veränderung, Übergängen und im Leben zwischen Kulturen.",
  icons: { icon: "/favicon.ico" },
};

export default function DeRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={fontVariables}>
      <body className="bg-cream text-ink antialiased">
        <SiteShell locale="de">{children}</SiteShell>
      </body>
    </html>
  );
}
