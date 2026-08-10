import { fields } from "@keystatic/core";

/**
 * Shared field builders for the Theresa Frische admin.
 *
 * Everything here exists to make the admin readable for a non-developer:
 * plain-English labels, a one-line description under anything non-obvious, and
 * SEO grouped into its own clearly-marked section at the bottom of each form.
 */

/**
 * Per-page, per-locale SEO. Canonical URLs and hreflang are deliberately NOT
 * here — they are generated from the routes table in src/lib/site.ts, and making
 * them editable would break the EN/DE pairing.
 */
export const seo = () =>
  fields.object(
    {
      metaTitle: fields.text({
        label: "Page title (shown in the browser tab and in Google results)",
        description:
          "Aim for under about 60 characters so Google does not cut it off. Include what the page is about, e.g. 'Couples Counselling — Theresa Frische'.",
        validation: { length: { min: 1 } },
      }),
      metaDescription: fields.text({
        label: "Search description (the grey text under the title in Google)",
        description:
          "Aim for under about 155 characters. Write it as a sentence that would make someone click.",
        multiline: true,
        validation: { length: { min: 1 } },
      }),
      ogTitle: fields.text({
        label: "Social share title (optional)",
        description:
          "Only fill this in if you want a different title when the page is shared on LinkedIn, WhatsApp or Facebook. Leave empty to reuse the page title above.",
      }),
      ogDescription: fields.text({
        label: "Social share description (optional)",
        description:
          "Leave empty to reuse the search description above.",
        multiline: true,
      }),
      ogImage: fields.image({
        label: "Social share image (optional)",
        description:
          "The picture shown when the page is shared. Ideal size 1200 × 630 pixels. Leave empty to use the site default.",
        directory: "public/images",
        publicPath: "/images/",
      }),
    },
    {
      label: "Search engines & social sharing (SEO)",
      description:
        "How this page appears in Google and when shared on social media. Safe to edit — it does not change the page itself.",
    },
  );

/** A simple label/value row, used for the facts tables. */
export const metaPair = () =>
  fields.array(
    fields.object({
      label: fields.text({ label: "Label", description: "e.g. Duration" }),
      value: fields.text({ label: "Value", description: "e.g. 60 minutes" }),
    }),
    {
      label: "Facts table",
      description: "The small two-column table of practical details.",
      itemLabel: (props) => `${props.fields.label.value} — ${props.fields.value.value}`,
    },
  );

/** Title + body card, used across the card grids. */
export const featureItems = (label: string, description: string) =>
  fields.array(
    fields.object({
      title: fields.text({ label: "Heading" }),
      body: fields.text({ label: "Text", multiline: true }),
    }),
    { label, description, itemLabel: (props) => props.fields.title.value || "Untitled" },
  );

/** Quote with attribution. */
export const quotes = (label: string, description: string) =>
  fields.array(
    fields.object({
      text: fields.text({ label: "Quote", multiline: true }),
      attribution: fields.text({
        label: "Who said it",
        description: "First name only, or a role. Never a full name or a photo.",
      }),
    }),
    { label, description, itemLabel: (props) => props.fields.attribution.value || "Quote" },
  );

/** Repeatable plain paragraphs. */
export const paragraphs = (label: string, description: string) =>
  fields.array(fields.text({ label: "Paragraph", multiline: true }), {
    label,
    description,
    itemLabel: (props) => (props.value || "").slice(0, 60) || "Empty paragraph",
  });

/** Link with a visible label. */
export const ctaLink = (label: string, description: string) =>
  fields.object(
    {
      label: fields.text({ label: "Button text" }),
      href: fields.text({
        label: "Link",
        description: "A path on this site, e.g. /contact (German pages use /de/contact).",
      }),
    },
    { label, description },
  );

/**
 * Blog body. Mirrors the existing typed block array exactly — paragraph,
 * subheading, bullet list, quote — so posts round-trip without being reshaped.
 * Inline links inside paragraphs and bullets stay as markdown, e.g.
 * [couples counselling](/work-with-me/couples-counselling).
 */
export const blogBody = () =>
  fields.array(
    fields.conditional(
      fields.select({
        label: "Block type",
        options: [
          { label: "Paragraph", value: "p" },
          { label: "Subheading", value: "h2" },
          { label: "Bullet list", value: "ul" },
          { label: "Pull quote", value: "quote" },
        ],
        defaultValue: "p",
      }),
      {
        p: fields.object({
          text: fields.text({
            label: "Paragraph",
            multiline: true,
            description:
              "To link to another page, use square brackets then the path in round brackets, like this: [couples counselling](/work-with-me/couples-counselling).",
          }),
        }),
        h2: fields.object({ text: fields.text({ label: "Subheading" }) }),
        ul: fields.object({
          items: fields.array(fields.text({ label: "Bullet" }), {
            label: "Bullets",
            itemLabel: (props) => (props.value || "").slice(0, 60) || "Empty",
          }),
        }),
        quote: fields.object({
          text: fields.text({ label: "Quote", multiline: true }),
          attribution: fields.text({ label: "Attribution (optional)" }),
        }),
      },
    ),
    {
      label: "Article body",
      description:
        "Build the article block by block. Use 'Paragraph' for normal text and 'Subheading' to break the article into sections.",
      itemLabel: (props) => {
        const kind = props.discriminant as string;
        const v = props.value as { fields?: Record<string, { value?: unknown }> };
        const text = (v?.fields?.text?.value as string) || "";
        const names: Record<string, string> = {
          p: "Paragraph",
          h2: "Subheading",
          ul: "Bullet list",
          quote: "Quote",
        };
        return `${names[kind] ?? kind}${text ? ` — ${text.slice(0, 50)}` : ""}`;
      },
    },
  );
