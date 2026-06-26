import Link from "next/link";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { getContent } from "@/content";

// Global 404. With multiple root layouts (no app/layout.tsx) this page must
// provide its own <html>/<body>. Defaults to English.
export default function NotFound() {
  const c = getContent("en");
  return (
    <html lang="en" className={fontVariables}>
      <body className="bg-cream text-ink antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 font-serif text-4xl font-light text-ink sm:text-5xl">
            {c.notFound.title}
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-ink-soft">{c.notFound.body}</p>
          <Link
            href={c.notFound.cta.href}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-dark"
          >
            {c.notFound.cta.label}
          </Link>
        </main>
      </body>
    </html>
  );
}
