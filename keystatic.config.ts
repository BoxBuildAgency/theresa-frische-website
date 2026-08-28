import { config, collection, singleton, fields } from "@keystatic/core";
import { blogBody, ctaLink, metaPair, paragraphs } from "./keystatic/fields";
import {
  aboutPage, philosophyPage,
  aiInfoPage,
  blogIndexPage,
  contactPage,
  faqIndexPage,
  homePage,
  notFoundPage,
  organisationsPage,
  weeklyWellbeingPage,
  workWithMePage,
} from "./keystatic/pages";

/**
 * Keystatic admin for the Theresa Frische site.
 *
 * Storage: GitHub in production, so every save is a commit to the repo and
 * Netlify rebuilds. Local mode is used automatically in development.
 *
 * IMPORTANT for whoever extends this: a singleton's schema must cover EVERY key
 * in its JSON file. Keystatic writes back only what the schema knows about, so a
 * missing field would be silently dropped the first time Theresa saves that page.
 * There is a guard for this — `npm run check:schema` compares the JSON keys with
 * the schema keys and fails if they drift.
 */

const isGitHub = Boolean(process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG);

/* ------------------------------------------------------------------ *
 * Blog posts — the collection Theresa will use most.
 * ------------------------------------------------------------------ */
const posts = (locale: "en" | "de") =>
  collection({
    label: `Blog posts — ${locale.toUpperCase()}`,
    path: `content/${locale}/posts/*`,
    format: { data: "json" },
    slugField: "title",
    columns: ["title", "category", "date"],
    entryLayout: "form",
    schema: {
      title: fields.slug({
        name: {
          label: "Article title",
          description: "The headline shown at the top of the article and in the blog list.",
          validation: { length: { min: 1 } },
        },
        slug: {
          label: "Web address (slug)",
          description:
            "The last part of the link, e.g. why-mindfulness-calms-the-nervous-system. IMPORTANT: the English and German versions of the same article must use the SAME slug, otherwise the language switch cannot find its pair.",
        },
      }),
      category: fields.text({
        label: "Category",
        description:
          "Shown as a tag and used by the filter buttons on the blog page. Reuse an existing category name exactly, or it will create a new filter.",
      }),
      date: fields.date({
        label: "Publication date",
        description: "Articles are listed newest first, based on this date.",
      }),
      readingTime: fields.text({
        label: "Reading time in minutes",
        description: "Just the number, e.g. 7. Shown as '7 min read'.",
      }),
      excerpt: fields.text({
        label: "Short summary",
        multiline: true,
        description:
          "One or two sentences. Shown on the blog list, on related-article cards, and used as the search description if you leave the SEO one empty.",
      }),
      body: blogBody(),
      draft: fields.checkbox({
        label: "Hide this article (work in progress)",
        description:
          "Tick to keep the article out of the blog, the sitemap and search engines while you finish it.",
        defaultValue: false,
      }),
    },
  });

/* ------------------------------------------------------------------ *
 * FAQ — 9 categories, each with its own list of questions.
 * ------------------------------------------------------------------ */
const faq = (locale: "en" | "de") =>
  collection({
    label: `FAQ categories — ${locale.toUpperCase()}`,
    path: `content/${locale}/faq/*`,
    format: { data: "json" },
    slugField: "title",
    columns: ["title", "order"],
    schema: {
      title: fields.slug({
        name: {
          label: "Category name",
          description: "The heading above this group of questions, e.g. 'Getting Started'.",
        },
        slug: {
          label: "Anchor id",
          description:
            "Used by the 'jump to a topic' menu, e.g. getting-started. Must be IDENTICAL in English and German, and is best left alone once set.",
        },
      }),
      order: fields.integer({
        label: "Position on the page",
        description: "1 appears first. Use the same numbers in English and German.",
        validation: { min: 1 },
      }),
      items: fields.array(
        fields.object({
          q: fields.text({ label: "Question" }),
          a: fields.text({
            label: "Answer",
            multiline: true,
            description:
              "Two to five sentences. You can link to another page with [text](/path).",
          }),
        }),
        {
          label: "Questions in this category",
          itemLabel: (props) => props.fields.q.value || "New question",
        },
      ),
    },
  });

/* ------------------------------------------------------------------ *
 * Service child pages — the four under Work With Me and the three under
 * For Organisations all share one shape.
 * ------------------------------------------------------------------ */
const servicePage = (locale: "en" | "de", key: string, label: string) =>
  singleton({
    label,
    path: `content/${locale}/services/${key}`,
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({
        label: "Small label above the heading",
        description: "e.g. 'Work With Me'. Keep it short.",
      }),
      heading: fields.text({ label: "Page heading (the big title)" }),
      lead: fields.text({
        label: "Opening sentence",
        multiline: true,
        description: "The single sentence directly under the heading.",
      }),
      paras: paragraphs(
        "Page text",
        "The main body, one paragraph per box. Link to another page with [text](/path).",
      ),
      numbered: fields.array(
        fields.object({
          title: fields.text({ label: "Heading (e.g. '01 Keynotes')" }),
          body: fields.text({ label: "Text", multiline: true }),
        }),
        {
          label: "Numbered list (only used on Talks, Workshops & Courses)",
          description: "Leave empty on the other pages.",
          itemLabel: (props) => props.fields.title.value || "Item",
        },
      ),
      facts: metaPair(),
      crossLinks: fields.array(
        fields.object({
          label: fields.text({ label: "Link text" }),
          href: fields.text({
            label: "Link",
            description: "A path on this site. German pages must link to /de/… paths.",
          }),
        }),
        {
          label: "'See also' links",
          description: "The small box of related links beside the text.",
          itemLabel: (props) => props.fields.label.value || "Link",
        },
      ),
      metaTitle: fields.text({
        label: "Page title (browser tab and Google)",
        description: "Aim for under about 60 characters.",
      }),
      metaDescription: fields.text({
        label: "Search description",
        multiline: true,
        description: "Aim for under about 155 characters.",
      }),
    },
  });

/* ------------------------------------------------------------------ *
 * Legal pages. Editable, but clearly marked as consequential.
 * ------------------------------------------------------------------ */
const LEGAL_WARNING =
  "⚠️ LEGAL PAGE. This text has real-world legal consequences and the wording was chosen deliberately. You can edit it, but please check with José before changing anything beyond a typo.";

const impressum = (locale: "en" | "de") =>
  singleton({
    label: `Impressum — ${locale.toUpperCase()}`,
    path: `content/${locale}/pages/impressum`,
    format: { data: "json" },
    schema: {
      heading: fields.text({ label: "Page heading", description: LEGAL_WARNING }),
      blocks: fields.array(
        fields.object({
          heading: fields.text({ label: "Section heading" }),
          lines: fields.array(fields.text({ label: "Line", multiline: true }), {
            label: "Lines",
            itemLabel: (props) => (props.value || "").slice(0, 60),
          }),
        }),
        { label: "Sections", itemLabel: (props) => props.fields.heading.value || "Section" },
      ),
      metaTitle: fields.text({ label: "Page title (browser tab and Google)" }),
      metaDescription: fields.text({ label: "Search description", multiline: true }),
    },
  });

const privacy = (locale: "en" | "de") =>
  singleton({
    label: `Privacy / Datenschutz — ${locale.toUpperCase()}`,
    path: `content/${locale}/pages/privacy`,
    format: { data: "json" },
    schema: {
      heading: fields.text({ label: "Page heading", description: LEGAL_WARNING }),
      intro: fields.text({ label: "Opening paragraph", multiline: true }),
      sections: fields.array(
        fields.object({
          heading: fields.text({ label: "Section heading" }),
          paras: paragraphs("Paragraphs", "Link with [text](/path)."),
          bullets: fields.array(fields.text({ label: "Bullet", multiline: true }), {
            label: "Bullet list (optional)",
            itemLabel: (props) => (props.value || "").slice(0, 60),
          }),
        }),
        { label: "Sections", itemLabel: (props) => props.fields.heading.value || "Section" },
      ),
      metaTitle: fields.text({ label: "Page title (browser tab and Google)" }),
      metaDescription: fields.text({ label: "Search description", multiline: true }),
    },
  });

const terms = (locale: "en" | "de") =>
  singleton({
    label: `Terms / AGB — ${locale.toUpperCase()}`,
    path: `content/${locale}/pages/terms`,
    format: { data: "json" },
    schema: {
      heading: fields.text({ label: "Page heading", description: LEGAL_WARNING }),
      // `version` sits above `sections`, matching the order in terms.json.
      // Keystatic rewrites a file in schema order on save, so a mismatch here
      // meant her first edit to Terms would silently reorder two keys as well
      // as making her change. It also reads better next to the heading.
      version: fields.text({
        label: "Version line",
        description: "Shown at the foot of the page, e.g. 'Version: 30 July 2026'.",
      }),
      sections: fields.array(
        fields.object({
          heading: fields.text({ label: "Clause heading (e.g. '1. Scope')" }),
          paras: paragraphs("Paragraphs", ""),
        }),
        { label: "Clauses", itemLabel: (props) => props.fields.heading.value || "Clause" },
      ),
      metaTitle: fields.text({ label: "Page title (browser tab and Google)" }),
      metaDescription: fields.text({ label: "Search description", multiline: true }),
    },
  });

/* ------------------------------------------------------------------ *
 * Global site strings: navigation, footer, the CTA, the disclaimer and
 * the crisis resources.
 * ------------------------------------------------------------------ */
const navItem = () =>
  fields.array(
    fields.object({
      label: fields.text({ label: "Menu label" }),
      href: fields.text({ label: "Link" }),
      children: fields.array(
        fields.object({
          label: fields.text({ label: "Submenu label" }),
          href: fields.text({ label: "Link" }),
        }),
        { label: "Dropdown items", itemLabel: (props) => props.fields.label.value || "Item" },
      ),
    }),
    {
      label: "Main menu",
      description: "The links across the top of every page. Dropdown items are optional.",
      itemLabel: (props) => props.fields.label.value || "Menu item",
    },
  );

const site = (locale: "en" | "de") =>
  singleton({
    label: `Site-wide text — ${locale.toUpperCase()}`,
    path: `content/${locale}/site`,
    format: { data: "json" },
    schema: {
      locale: fields.text({ label: "Locale code", description: "Do not change." }),
      htmlLang: fields.text({ label: "HTML language code", description: "Do not change." }),
      brand: fields.object(
        {
          name: fields.text({ label: "Name in the header" }),
          tagline: fields.text({
            label: "Small line under the name",
            description:
              "Shown in the header on every page. Keep it to about 18 characters: " +
              "on a tablet-width screen the header runs out of room beyond that and " +
              "the menu starts to squash up. It will not wrap onto a second line.",
          }),
          title: fields.text({ label: "Professional title" }),
        },
        { label: "Brand" },
      ),
      practice: fields.object(
        {
          locationLine: fields.text({
            label: "Where sessions take place",
            description:
              "Written once here, and used in eighteen places: the Format row on " +
              "every service page, both rows on Work With Me, and the practical " +
              "table on the home page. Change it here and it changes everywhere. " +
              "If one page needs to say something different, type the wording " +
              "into that page instead of {location} and it will be left alone.",
          }),
        },
        { label: "Practice" },
      ),
      nav: navItem(),
      header: fields.object(
        {
          bookCta: ctaLink("Header button", "The button in the top-right of every page."),
          menuOpen: fields.text({ label: "'Open menu' label (for screen readers)" }),
          menuClose: fields.text({ label: "'Close menu' label (for screen readers)" }),
          langToggleLabel: fields.text({ label: "Language switch label (for screen readers)" }),
          otherLangCode: fields.text({ label: "Other language code, e.g. DE" }),
          otherLangName: fields.text({ label: "Other language name" }),
        },
        { label: "Header" },
      ),
      footer: fields.object(
        {
          line: fields.text({ label: "Footer credit line" }),
          nav: fields.array(
            fields.object({
              label: fields.text({ label: "Label" }),
              href: fields.text({ label: "Link" }),
            }),
            { label: "Footer links", itemLabel: (props) => props.fields.label.value || "Link" },
          ),
          legalNav: fields.array(
            fields.object({
              label: fields.text({ label: "Label" }),
              href: fields.text({ label: "Link" }),
            }),
            { label: "Legal links", itemLabel: (props) => props.fields.label.value || "Link" },
          ),
          rights: fields.text({ label: "Rights line" }),
          builtNote: fields.text({ label: "Short note under the name" }),
        },
        { label: "Footer" },
      ),
      cta: fields.object(
        {
          primary: ctaLink("Discovery-call button", "Used in the band at the bottom of most pages."),
          secondaryLabel: fields.text({ label: "Secondary button label" }),
        },
        { label: "Call to action" },
      ),
      disclaimer: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          body: fields.text({
            label: "Disclaimer text",
            multiline: true,
            description:
              "⚠️ SAFETY-CRITICAL. This is the statement that counselling is not psychotherapy or medical treatment. It appears in the footer of every page. Please do not change the meaning — check with José first.",
          }),
        },
        { label: "Disclaimer (shown site-wide)" },
      ),
      blogDisclaimer: fields.text({
        label: "Disclaimer at the end of each article",
        multiline: true,
        description: "⚠️ SAFETY-CRITICAL — same rule as the disclaimer above.",
      }),
      crisis: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          intro: fields.text({ label: "Intro sentence", multiline: true }),
          items: fields.array(
            fields.object({
              label: fields.text({ label: "Service name" }),
              value: fields.text({ label: "Phone number or address" }),
              href: fields.text({ label: "Link (optional)" }),
            }),
            {
              label: "Crisis lines",
              itemLabel: (props) => `${props.fields.label.value} — ${props.fields.value.value}`,
            },
          ),
        },
        {
          label: "Crisis resources",
          description:
            "⚠️ SAFETY-CRITICAL. These phone numbers are shown to people who may be in crisis. Verify any number before changing it, and check with José.",
        },
      ),
    },
  });

/* ------------------------------------------------------------------ */

export default config({
  storage: isGitHub
    ? { kind: "github", repo: { owner: "BoxBuildAgency", name: "theresa-frische-website" } }
    : { kind: "local" },
  ui: {
    brand: { name: "Theresa Frische" },
    // Ordered by how often Theresa will use them.
    navigation: {
      "Blog articles": ["postsEn", "postsDe"],
      "Questions & answers": ["faqEn", "faqDe"],
      // Named after their parents, so it is obvious that the child pages of
      // "Work With Me" and "For Organisations" live here rather than inside
      // those overview entries. Group headings wrap freely (no line clamp), so
      // the extra length costs a second line and nothing else.
      "Sub-pages of Work With Me & Organisations — English": [
        "wwm-psychological-counselling_en",
        "wwm-couples-counselling_en",
        "wwm-burnout-prevention_en",
        "wwm-somatic-experiencing_en",
        "org-talks-workshops-courses_en",
        "org-leadership-coaching_en",
        "org-employee-counselling_en",
      ],
      "Sub-pages of Work With Me & Organisations — German": [
        "wwm-psychological-counselling_de",
        "wwm-couples-counselling_de",
        "wwm-burnout-prevention_de",
        "wwm-somatic-experiencing_de",
        "org-talks-workshops-courses_de",
        "org-leadership-coaching_de",
        "org-employee-counselling_de",
      ],
      "Main pages — English": [
        "homeEn", "aboutEn",
        "philosophyEn", "workWithMeEn", "organisationsEn", "weeklyWellbeingEn",
        "contactEn", "blogIndexEn", "faqIndexEn", "aiInfoEn", "notFoundEn",
      ],
      "Main pages — German": [
        "homeDe", "aboutDe",
        "philosophyDe", "workWithMeDe", "organisationsDe", "weeklyWellbeingDe",
        "contactDe", "blogIndexDe", "faqIndexDe", "aiInfoDe", "notFoundDe",
      ],
      "Site-wide text": ["siteEn", "siteDe"],
      "Legal pages": ["impressumEn", "impressumDe", "privacyEn", "privacyDe", "termsEn", "termsDe"],
    },
  },
  collections: {
    postsEn: posts("en"),
    postsDe: posts("de"),
    faqEn: faq("en"),
    faqDe: faq("de"),
  },
  singletons: {
    homeEn: homePage("en"),
    homeDe: homePage("de"),
    aboutEn: aboutPage("en"),
    philosophyEn: philosophyPage("en"),
    aboutDe: aboutPage("de"),
    philosophyDe: philosophyPage("de"),
    workWithMeEn: workWithMePage("en"),
    workWithMeDe: workWithMePage("de"),
    organisationsEn: organisationsPage("en"),
    organisationsDe: organisationsPage("de"),
    weeklyWellbeingEn: weeklyWellbeingPage("en"),
    weeklyWellbeingDe: weeklyWellbeingPage("de"),
    blogIndexEn: blogIndexPage("en"),
    blogIndexDe: blogIndexPage("de"),
    faqIndexEn: faqIndexPage("en"),
    faqIndexDe: faqIndexPage("de"),
    contactEn: contactPage("en"),
    contactDe: contactPage("de"),
    aiInfoEn: aiInfoPage("en"),
    aiInfoDe: aiInfoPage("de"),
    notFoundEn: notFoundPage("en"),
    notFoundDe: notFoundPage("de"),
    siteEn: site("en"),
    siteDe: site("de"),
    impressumEn: impressum("en"),
    impressumDe: impressum("de"),
    privacyEn: privacy("en"),
    privacyDe: privacy("de"),
    termsEn: terms("en"),
    termsDe: terms("de"),
    "wwm-psychological-counselling_en": servicePage("en", "wwm-psychological-counselling", "Psychological Counselling — EN"),
    "wwm-couples-counselling_en": servicePage("en", "wwm-couples-counselling", "Couples Counselling — EN"),
    "wwm-burnout-prevention_en": servicePage("en", "wwm-burnout-prevention", "Burnout Prevention — EN"),
    "wwm-somatic-experiencing_en": servicePage("en", "wwm-somatic-experiencing", "Somatic Experiencing® — EN"),
    "org-talks-workshops-courses_en": servicePage("en", "org-talks-workshops-courses", "Talks, Workshops & Courses — EN"),
    "org-leadership-coaching_en": servicePage("en", "org-leadership-coaching", "Leadership Coaching — EN"),
    "org-employee-counselling_en": servicePage("en", "org-employee-counselling", "Employee Counselling — EN"),
    "wwm-psychological-counselling_de": servicePage("de", "wwm-psychological-counselling", "Psychologische Beratung — DE"),
    "wwm-couples-counselling_de": servicePage("de", "wwm-couples-counselling", "Paarberatung — DE"),
    "wwm-burnout-prevention_de": servicePage("de", "wwm-burnout-prevention", "Burnout-Prävention — DE"),
    "wwm-somatic-experiencing_de": servicePage("de", "wwm-somatic-experiencing", "Somatic Experiencing® — DE"),
    "org-talks-workshops-courses_de": servicePage("de", "org-talks-workshops-courses", "Vorträge, Workshops & Kurse — DE"),
    "org-leadership-coaching_de": servicePage("de", "org-leadership-coaching", "Führungskräfte-Coaching — DE"),
    "org-employee-counselling_de": servicePage("de", "org-employee-counselling", "Beratung für Mitarbeitende — DE"),
  },
});
