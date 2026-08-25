import fs from "node:fs";
import path from "node:path";
import type {
  BlogBlock,
  BlogPost,
  FaqCategory,
  Locale,
  ServicePageContent,
  SiteContent,
} from "./types";

/**
 * Reads the Keystatic-managed JSON in `content/<locale>/` and rebuilds the exact
 * `SiteContent` shape the components already expect.
 *
 * Why files rather than the old hand-written TypeScript modules: Keystatic edits
 * data files and commits them, so the content has to live in files it can write.
 * Nothing about the rendered output changes — this is a storage swap.
 *
 * Why synchronous `fs` rather than Keystatic's async reader: `getContent()` is
 * called from `sitemap.ts`, from `generateMetadata`, and from server components
 * at build time. Every page is statically generated, so reading from disk during
 * the build is safe and keeps the whole content API synchronous. Client
 * components only ever import `./types` (type-only, erased at compile time), so
 * `fs` never reaches the browser bundle.
 */

const ROOT = path.join(process.cwd(), "content");

function readJson<T>(...segments: string[]): T {
  return JSON.parse(fs.readFileSync(path.join(ROOT, ...segments), "utf8")) as T;
}

/**
 * Read every .json file in a directory, injecting the filename under `keyAs`.
 * Keystatic derives an entry's filename from its slug field, so the slug/id is
 * the filename rather than a duplicated value inside the file.
 */
function readDir<T>(keyAs: string, ...segments: string[]): T[] {
  const dir = path.join(ROOT, ...segments);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({
      [keyAs]: f.replace(/\.json$/, ""),
      ...(JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as object),
    })) as T[];
}

type PageBag = Record<string, unknown>;

/**
 * Blog body blocks, as Keystatic stores them.
 *
 * The body is a `fields.conditional`, and Keystatic requires every entry on disk
 * to be exactly `{ discriminant, value }` — it refuses to open an entry whose
 * blocks are shaped any other way. The renderer, meanwhile, wants the flat
 * discriminated union `{ type, ...fields }` declared in types.ts.
 *
 * Converting here keeps both happy: the files stay in the only shape the admin
 * accepts, and `BlogBlock` (and every component using it) is untouched.
 */
type StoredBlock = { discriminant: BlogBlock["type"]; value: Record<string, unknown> };
type RawPost = Omit<BlogPost, "body"> & { body?: StoredBlock[] };

function toBlock(b: StoredBlock): BlogBlock {
  return { type: b.discriminant, ...(b.value ?? {}) } as BlogBlock;
}

/**
 * Expand `{location}` wherever it appears in the content.
 *
 * Where Theresa works is stated in eighteen places: the Format row on each
 * service page, the two rows on Work With Me, and the home page facts table.
 * They were separate strings and had already drifted — some still said sessions
 * were online only, after she started seeing people in Zug. Rather than bind a
 * component to a fixed row index (the rows are free-form label/value pairs and
 * she can reorder them), any field may contain the token and the loader
 * substitutes the one value from Site settings.
 *
 * A field that has no token is left exactly as written, so a page that genuinely
 * differs can still say something of its own.
 */
function expandTokens<T>(node: T, location: string): T {
  if (typeof node === "string") {
    return (node.includes("{location}") ? node.replaceAll("{location}", location) : node) as T;
  }
  if (Array.isArray(node)) return node.map((v) => expandTokens(v, location)) as T;
  if (node && typeof node === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node)) out[k] = expandTokens(v, location);
    return out as T;
  }
  return node;
}

export function loadContent(locale: Locale): SiteContent {
  const site = readJson<PageBag>(locale, "site.json");
  const page = <T>(name: string) => readJson<T>(locale, "pages", `${name}.json`);

  // Blog posts: display order is applied in content/index.ts (newest first), so
  // a new post added in the admin appears without any code change.
  const posts = readDir<RawPost>("slug", locale, "posts").map(
    (p): BlogPost => ({ ...p, body: (p.body ?? []).map(toBlock) }),
  );

  // FAQ categories carry an editable `order` field — it drives the jump-nav
  // sequence, so it must not depend on filename or on read order.
  const faqCategories = readDir<FaqCategory & { order?: number }>("id", locale, "faq")
    .slice()
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .map((cat) => {
      // `order` drives the jump-nav sequence in the admin; it is not part of the
      // rendered shape, so it is dropped once the sort has been applied.
      const rest = { ...cat } as FaqCategory & { order?: number };
      delete rest.order;
      return rest as FaqCategory;
    });

  // Service child pages are keyed by their route key (the filename).
  const serviceChildren: Record<string, ServicePageContent> = {};
  const servicesDir = path.join(ROOT, locale, "services");
  if (fs.existsSync(servicesDir)) {
    for (const file of fs.readdirSync(servicesDir).filter((f) => f.endsWith(".json"))) {
      serviceChildren[file.replace(/\.json$/, "")] = JSON.parse(
        fs.readFileSync(path.join(servicesDir, file), "utf8"),
      ) as ServicePageContent;
    }
  }

  const content: SiteContent = {
    ...(site as unknown as Pick<
      SiteContent,
      | "locale"
      | "htmlLang"
      | "brand"
      | "practice"
      | "nav"
      | "header"
      | "footer"
      | "cta"
      | "disclaimer"
      | "blogDisclaimer"
      | "crisis"
    >),
    home: page<SiteContent["home"]>("home"),
    about: page<SiteContent["about"]>("about"),
    philosophyPage: page<SiteContent["philosophyPage"]>("philosophy"),
    workTogether: page<SiteContent["workTogether"]>("workTogether"),
    organisations: page<SiteContent["organisations"]>("organisations"),
    weeklyWellbeing: page<SiteContent["weeklyWellbeing"]>("weeklyWellbeing"),
    serviceChildren,
    blog: { ...page<Omit<SiteContent["blog"], "posts">>("blog"), posts },
    faq: { ...page<Omit<SiteContent["faq"], "categories">>("faq"), categories: faqCategories },
    contact: page<SiteContent["contact"]>("contact"),
    aiInfo: page<SiteContent["aiInfo"]>("aiInfo"),
    impressum: page<SiteContent["impressum"]>("impressum"),
    privacy: page<SiteContent["privacy"]>("privacy"),
    terms: page<SiteContent["terms"]>("terms"),
    notFound: page<SiteContent["notFound"]>("notFound"),
  };

  return expandTokens(content, content.practice.locationLine);
}
