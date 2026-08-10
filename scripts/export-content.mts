import { mkdirSync, writeFileSync } from "node:fs";
import { en } from "../src/content/en";
import { de } from "../src/content/de";
import type { SiteContent } from "../src/content/types";

const ROOT = "content";
const w = (p: string, data: unknown) => {
  mkdirSync(p.split("/").slice(0, -1).join("/"), { recursive: true });
  writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
};

// Singleton page keys that map 1:1 to a content key
const PAGE_KEYS = [
  "home","about","workTogether","organisations","weeklyWellbeing",
  "blog","faq","contact","aiInfo","impressum","privacy","terms","notFound",
] as const;

for (const [loc, c] of Object.entries({ en, de }) as [string, SiteContent][]) {
  const base = `${ROOT}/${loc}`;
  // global site strings
  w(`${base}/site.json`, {
    locale: c.locale, htmlLang: c.htmlLang, brand: c.brand, nav: c.nav,
    header: c.header, footer: c.footer, cta: c.cta,
    disclaimer: c.disclaimer, blogDisclaimer: c.blogDisclaimer, crisis: c.crisis,
  });
  // page singletons (blog/faq minus their collections)
  for (const k of PAGE_KEYS) {
    const v: Record<string, unknown> = { ...(c as unknown as Record<string, Record<string, unknown>>)[k] };
    if (k === "blog") delete v.posts;
    if (k === "faq") delete v.categories;
    w(`${base}/pages/${k}.json`, v);
  }
  // service child pages
  for (const [key, page] of Object.entries(c.serviceChildren)) w(`${base}/services/${key}.json`, page);
  // blog posts (order preserved via an index)
  const order: string[] = [];
  for (const p of c.blog.posts) { const { slug, ...rest } = p; order.push(slug); w(`${base}/posts/${slug}.json`, rest); }
  // faq categories
  const cats: string[] = [];
  c.faq.categories.forEach((cat, i) => { const { id, ...rest } = cat; cats.push(id); w(`${base}/faq/${id}.json`, { ...rest, order: i + 1 }); });
  console.log(`${loc}: site + ${PAGE_KEYS.length} pages + ${Object.keys(c.serviceChildren).length} services + ${order.length} posts + ${cats.length} faq categories`);
}
