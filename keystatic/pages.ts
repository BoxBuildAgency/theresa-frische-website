import { singleton, fields } from "@keystatic/core";
import { ctaLink, metaPair, paragraphs, quotes, seoFields } from "./fields";

/**
 * The page singletons — one form per page, per language.
 *
 * Every schema here covers EVERY key in the matching JSON file. That is not
 * optional: Keystatic writes back only what the schema declares, so a missing
 * field would be silently deleted the first time Theresa saved that page.
 * `npm run check:schema` enforces it.
 */

type Loc = "en" | "de";
const at = (locale: Loc, name: string) => `content/${locale}/pages/${name}`;

/** Title + body rows, used by several card grids. */
const cards = (label: string, description: string) =>
  fields.array(
    fields.object({
      title: fields.text({ label: "Heading" }),
      body: fields.text({ label: "Text", multiline: true }),
    }),
    { label, description, itemLabel: (p) => p.fields.title.value || "Untitled" },
  );

/** Title + body + link, used by the service teaser cards. */
const linkCards = (label: string, description: string) =>
  fields.array(
    fields.object({
      title: fields.text({ label: "Heading" }),
      body: fields.text({ label: "Text", multiline: true }),
      href: fields.text({
        label: "Link",
        description: "German pages must link to /de/… paths.",
      }),
    }),
    { label, description, itemLabel: (p) => p.fields.title.value || "Card" },
  );

/* ----------------------------------------------------------------- HOME */
export const homePage = (locale: Loc) =>
  singleton({
    label: `Home page — ${locale.toUpperCase()}`,
    path: at(locale, "home"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({
        label: "Small label above the headline",
        description: "The gold uppercase line, e.g. 'Psychological Counselling · Online'.",
      }),
      heroTitle: fields.text({
        label: "Headline — first part",
        description: "Shown in the normal weight, before the italic part.",
      }),
      heroTitleAccent: fields.text({
        label: "Headline — italic green part",
        description: "The end of the headline, shown in italic green.",
      }),
      heroLead: fields.text({
        label: "Opening sentence under the headline",
        multiline: true,
      }),
      reachLine: fields.text({
        label: "Small grey line under the opening sentence",
        description: "Where you work, e.g. online in German and English.",
        multiline: true,
      }),
      heroPrimary: ctaLink("Main button", "The dark green button in the hero."),
      heroSecondary: ctaLink("Second button", "The outlined button beside it."),
      heroPortrait: fields.object(
        {
          src: fields.text({
            label: "Image file",
            description:
              "A photo already in the site's images folder, written as /images/filename.jpg. " +
              "Upright (portrait) photos work best — around 1200 × 1500 pixels. " +
              "To use a new photo, send it to José to add first.",
          }),
          alt: fields.text({
            label: "Photo description (for screen readers)",
            multiline: true,
            description: "Describe the photo for someone who cannot see it.",
          }),
        },
        {
          label: "Hero portrait",
          description:
            "The photo of you beside the headline at the top of the home page. " +
            "This is separate from the About page photo, so you can change one without the other.",
        },
      ),
      heroParas: paragraphs(
        "Introduction paragraphs",
        "The section directly under the hero, one paragraph per box.",
      ),
      heroEmphasis: fields.text({
        label: "Highlighted sentence",
        multiline: true,
        description: "Shown larger, in green italic, with a line down the left.",
      }),
      trustPillars: cards(
        "Three reassurance points",
        "The row of three under the hero: Discreet · Evidence-based · Flexible.",
      ),
      testimonials: quotes(
        "Client quotes (shown on the dark green band)",
        "First names only. No photos, no star ratings.",
      ),
      testimonial: fields.object(
        {
          text: fields.text({ label: "Quote", multiline: true }),
          attribution: fields.text({ label: "Who said it" }),
        },
        {
          label: "Legacy single quote (not shown on the page)",
          description:
            "Kept for compatibility. The page shows the list above — you can ignore this.",
        },
      ),
      audience: fields.object(
        {
          eyebrow: fields.text({ label: "Small label above the heading" }),
          heading: fields.text({ label: "Section heading" }),
          intro: fields.text({ label: "Intro sentence", multiline: true }),
          items: cards("Cards", "The grid of focus areas. Six keeps the grid even."),
        },
        { label: "'Who this space is for' section" },
      ),
      pauseBand: fields.object(
        {
          text: fields.text({
            label: "The sentence",
            multiline: true,
            description: "One sentence, in your voice. Keep it short — it sits alone over a photograph.",
          }),
        },
        {
          label: "Pause band (photo strip between the focus areas and the four steps)",
          description:
            "A full-width photograph with a single line over it, giving the eye somewhere to rest " +
            "between two long sections. The photograph itself is set in the code.",
        },
      ),
      steps: fields.object(
        {
          eyebrow: fields.text({ label: "Small label above the heading" }),
          heading: fields.text({ label: "Section heading" }),
          intro: fields.text({ label: "Intro paragraph", multiline: true }),
          items: cards("The four steps", "Numbered 01–04 in the headings."),
          modalities: fields.object(
            {
              heading: fields.text({ label: "Heading above the list" }),
              items: fields.array(fields.text({ label: "Approach" }), {
                label: "The approaches",
                description: "One per line. Keep the ® on Somatic Experiencing®.",
                itemLabel: (p) => p.value || "Empty",
              }),
              note: fields.text({
                label: "The line underneath",
                multiline: true,
                description:
                  "⚠️ This sentence says the work is counselling and that you are not a " +
                  "psychotherapist. It is what makes naming these approaches safe. Please " +
                  "leave it in place — check with José before changing it.",
              }),
            },
            { label: "Modalities I draw from" },
          ),
          closing: fields.text({ label: "Closing sentence", multiline: true }),
          ctaLabel: fields.text({ label: "Button text under the closing sentence" }),
        },
        { label: "'My approach' section" },
      ),
      aboutBlock: fields.object(
        {
          eyebrow: fields.text({ label: "Small label" }),
          heading: fields.text({ label: "Heading" }),
          body: fields.text({ label: "Text", multiline: true }),
          ctaLabel: fields.text({ label: "Button text" }),
        },
        { label: "Short 'About me' block (with the portrait)" },
      ),
      privatePay: fields.object(
        {
          eyebrow: fields.text({ label: "Small label" }),
          heading: fields.text({ label: "Heading" }),
          items: cards("The three advantages", ""),
        },
        { label: "'Your advantages as a private-pay client' section" },
      ),
      practical: fields.object(
        {
          eyebrow: fields.text({ label: "Small label" }),
          heading: fields.text({ label: "Heading" }),
          items: metaPair(),
          closing: fields.text({ label: "Closing sentence", multiline: true }),
        },
        { label: "'Practical information' section" },
      ),
      ...seoFields(),
    },
  });

/* ---------------------------------------------------------------- ABOUT */
export const aboutPage = (locale: Loc) =>
  singleton({
    label: `About page — ${locale.toUpperCase()}`,
    path: at(locale, "about"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({ label: "Small label above the name" }),
      name: fields.text({ label: "Name (the page headline)" }),
      subtitle: fields.text({ label: "Italic line under the name" }),
      credentials: fields.text({
        label: "Qualifications line",
        multiline: true,
        description:
          "⚠️ The wording here was chosen deliberately for regulatory reasons — the site describes counselling only. Please check with José before changing it.",
      }),
      lead: fields.text({ label: "Opening sentence (in the box with the green line)", multiline: true }),
      imageAlt: fields.text({
        label: "Photo description (for screen readers)",
        description: "Describe the portrait for someone who cannot see it.",
      }),
      intro: paragraphs("Introduction paragraphs", ""),
      lived: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          body: paragraphs("Paragraphs", ""),
          emphasis: fields.text({ label: "Highlighted closing sentence", multiline: true }),
        },
        { label: "'A life between worlds' section" },
      ),
      philosophy: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          body: paragraphs("Paragraphs", ""),
        },
        { label: "'Seeing the whole person' section" },
      ),
      philosophySections: fields.array(
        fields.object({
          number: fields.text({ label: "Number", description: "e.g. 01" }),
          heading: fields.text({ label: "Heading" }),
          paras: paragraphs("Paragraphs", ""),
        }),
        {
          label: "The four numbered philosophy sections",
          itemLabel: (p) => `${p.fields.number.value} ${p.fields.heading.value}`,
        },
      ),
      quotes: quotes("Quotes on the dark green band", ""),
      education: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          items: cards(
            "Qualifications",
            "⚠️ These entries were worded deliberately for regulatory reasons — the site describes counselling only, and the training is named factually. Please check with José before changing them.",
          ),
        },
        { label: "Qualifications section" },
      ),
      psyCoNote: fields.text({
        label: "Recognition note under the qualifications",
        multiline: true,
        description: "⚠️ Legally sensitive — states that recognition is applied for and pending.",
      }),
      ...seoFields(),
    },
  });

/* ------------------------------------------------- WORK WITH ME (overview) */
export const workWithMePage = (locale: Loc) =>
  singleton({
    label: `Work With Me overview — ${locale.toUpperCase()}`,
    path: at(locale, "workTogether"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({ label: "Small label above the heading" }),
      heading: fields.text({ label: "Page heading" }),
      intro: fields.text({ label: "Opening sentence", multiline: true }),
      cards: linkCards("The four service cards", "Each links to its own page."),
      discovery: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          intro: fields.text({ label: "Intro sentence", multiline: true }),
          steps: cards("The three steps", ""),
        },
        { label: "Discovery-call section" },
      ),
      quote: fields.object(
        {
          text: fields.text({ label: "Quote", multiline: true }),
          attribution: fields.text({ label: "Who said it" }),
        },
        { label: "Quote on the dark green band" },
      ),
      individual: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          subheading: fields.text({ label: "Small label above the heading" }),
          body: fields.text({ label: "Text", multiline: true }),
          meta: metaPair(),
        },
        { label: "Individual sessions card" },
      ),
      couples: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          subheading: fields.text({ label: "Small label above the heading" }),
          body: fields.text({ label: "Text", multiline: true }),
          meta: metaPair(),
        },
        { label: "Couples sessions card" },
      ),
      switzerland: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          paras: paragraphs("Paragraphs", ""),
        },
        {
          label: "Switzerland / international section",
          description:
            "⚠️ Describes online reach only. Do not add a claim of in-person sessions or a practice address — that would need to be true and checked first.",
        },
      ),
      closing: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          body: fields.text({ label: "Text", multiline: true }),
          note: fields.text({
            label: "Small note under the button",
            multiline: true,
            description: "Never put a price here — fees are agreed in the discovery call.",
          }),
        },
        { label: "Closing section" },
      ),
      ...seoFields(),
    },
  });

/* ------------------------------------------------ ORGANISATIONS (overview) */
export const organisationsPage = (locale: Loc) =>
  singleton({
    label: `For Organisations overview — ${locale.toUpperCase()}`,
    path: at(locale, "organisations"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({ label: "Small label above the heading" }),
      heading: fields.text({ label: "Page heading" }),
      lead: fields.text({ label: "Opening sentence", multiline: true }),
      intro: fields.text({ label: "Introduction paragraph", multiline: true }),
      facts: metaPair(),
      cards: linkCards("The three service cards", "Each links to its own page."),
      formats: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          intro: fields.text({ label: "Intro sentence", multiline: true }),
          items: cards("Formats", ""),
        },
        { label: "Formats section" },
      ),
      individual: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          intro: fields.text({ label: "Intro sentence", multiline: true }),
          items: cards("Types of one-to-one support", ""),
        },
        { label: "Individual support section" },
      ),
      topics: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          items: fields.array(fields.text({ label: "Topic" }), {
            label: "Topics",
            description: "Shown as small rounded tags.",
            itemLabel: (p) => p.value || "Topic",
          }),
        },
        { label: "Core topics section" },
      ),
      approach: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          facts: metaPair(),
          body: fields.text({ label: "Text", multiline: true }),
          emphasis: fields.text({ label: "Highlighted sentence", multiline: true }),
        },
        { label: "Approach section" },
      ),
      testimonials: quotes("Organisation testimonials", "Named business references are fine here."),
      closing: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          body: fields.text({ label: "Text", multiline: true }),
        },
        { label: "Closing section" },
      ),
      ...seoFields(),
    },
  });

/* ------------------------------------------------------- WEEKLY WELLBEING */
export const weeklyWellbeingPage = (locale: Loc) =>
  singleton({
    label: `Weekly Wellbeing — ${locale.toUpperCase()}`,
    path: at(locale, "weeklyWellbeing"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({ label: "Small label above the heading" }),
      heading: fields.text({ label: "Page heading" }),
      lead: fields.text({ label: "Opening sentence", multiline: true }),
      imageAlt: fields.text({ label: "Photo description (for screen readers)" }),
      intro: paragraphs("Description paragraphs", "What the sessions are and how they run."),
      facts: metaPair(),
      why: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          intro: fields.text({ label: "Intro sentence", multiline: true }),
          items: fields.array(fields.text({ label: "Reason" }), {
            label: "Reasons",
            description: "Shown as small rounded tags.",
            itemLabel: (p) => p.value || "Reason",
          }),
        },
        { label: "'Why join' section" },
      ),
      quotes: quotes("Participant quotes", ""),
      closing: fields.object(
        {
          heading: fields.text({ label: "Heading" }),
          body: fields.text({ label: "Text", multiline: true }),
        },
        { label: "Closing section" },
      ),
      ...seoFields(),
    },
  });

/* ------------------------------------------------------------ BLOG INDEX */
export const blogIndexPage = (locale: Loc) =>
  singleton({
    // Named to be unmistakable against the "Blog posts" collection. This entry
    // holds only the furniture around the articles; the articles themselves are
    // collection entries. Do not shorten this back to "Blog page".
    label: `Blog page text only — ${locale.toUpperCase()}`,
    path: at(locale, "blog"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({
        label: "Small label above the heading",
        description:
          "This form holds only the wording around the article list — headings and button text. " +
          "The articles themselves are under 'Blog posts' in the sidebar.",
      }),
      heading: fields.text({ label: "Page heading" }),
      intro: fields.text({ label: "Intro sentence", multiline: true }),
      allLabel: fields.text({ label: "'All' filter button" }),
      readMore: fields.text({ label: "'Read more' link text" }),
      backToBlog: fields.text({ label: "'Back to all articles' link text" }),
      relatedHeading: fields.text({ label: "Heading above related articles" }),
      authorHeading: fields.text({ label: "Heading of the author box" }),
      authorBody: fields.text({ label: "Author box text", multiline: true }),
      minRead: fields.text({ label: "'min read' wording", description: "e.g. 'min read'." }),
      ...seoFields(),
    },
  });

/* ------------------------------------------------------------- FAQ INDEX */
export const faqIndexPage = (locale: Loc) =>
  singleton({
    // Named to be unmistakable against the "FAQ categories" collection. This
    // entry holds only the heading and intro above the questions; the questions
    // themselves are collection entries. Do not shorten this back to "FAQ page".
    label: `FAQ page text only — ${locale.toUpperCase()}`,
    path: at(locale, "faq"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({
        label: "Small label above the heading",
        description:
          "This form holds only the heading and intro above the questions. " +
          "The questions and answers themselves are under 'FAQ categories' in the sidebar.",
      }),
      heading: fields.text({ label: "Page heading" }),
      intro: fields.text({ label: "Intro sentence", multiline: true }),
      jumpLabel: fields.text({
        label: "'Jump to a topic' heading",
        description: "Above the list of categories on the left.",
      }),
      ...seoFields(),
    },
  });

/* --------------------------------------------------------------- CONTACT */
export const contactPage = (locale: Loc) =>
  singleton({
    label: `Contact page — ${locale.toUpperCase()}`,
    path: at(locale, "contact"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({ label: "Small label above the heading" }),
      heading: fields.text({ label: "Page heading" }),
      lead: fields.text({ label: "Opening paragraph", multiline: true }),
      directHeading: fields.text({ label: "Heading of the 'write directly' box" }),
      directBody: fields.text({ label: "Text in that box", multiline: true }),
      emailLabel: fields.text({ label: "Label for the email row" }),
      phoneLabel: fields.text({ label: "Label for the phone row" }),
      form: fields.object(
        {
          nameLabel: fields.text({ label: "Name field label" }),
          namePlaceholder: fields.text({ label: "Name field placeholder" }),
          emailLabel: fields.text({ label: "Email field label" }),
          emailPlaceholder: fields.text({ label: "Email field placeholder" }),
          messageLabel: fields.text({ label: "Message field label" }),
          messagePlaceholder: fields.text({ label: "Message field placeholder" }),
          consentLabel: fields.text({
            label: "Consent checkbox text",
            multiline: true,
            description:
              "Must keep the {privacy} placeholder exactly as it is — it becomes the link to the privacy page.",
          }),
          submit: fields.text({ label: "Send button" }),
          submitting: fields.text({ label: "Button text while sending" }),
          successTitle: fields.text({ label: "Thank-you heading" }),
          successBody: fields.text({ label: "Thank-you text", multiline: true }),
          errorTitle: fields.text({ label: "Error heading" }),
          errorGeneric: fields.text({ label: "Error text", multiline: true }),
          validation: fields.object(
            {
              name: fields.text({ label: "Missing name" }),
              email: fields.text({ label: "Invalid email" }),
              message: fields.text({ label: "Missing message" }),
              consent: fields.text({ label: "Consent not ticked" }),
            },
            {
              label: "Messages when something is missing",
              description: "Shown under the field if the visitor has not filled it in correctly.",
            },
          ),
        },
        {
          label: "Contact form wording",
          description:
            "The form deliberately collects only name, email and a short message — no health details.",
        },
      ),
      ...seoFields(),
    },
  });

/* --------------------------------------------------------------- AI INFO */
export const aiInfoPage = (locale: Loc) =>
  singleton({
    label: `AI info page — ${locale.toUpperCase()}`,
    path: at(locale, "aiInfo"),
    format: { data: "json" },
    schema: {
      eyebrow: fields.text({ label: "Small label above the heading" }),
      heading: fields.text({ label: "Page heading" }),
      intro: fields.text({ label: "Opening paragraph", multiline: true }),
      updated: fields.text({
        label: "'Last reviewed' line",
        description: "Update this when you change the page, e.g. 'Last reviewed: July 2026'.",
      }),
      sections: fields.array(
        fields.object({
          heading: fields.text({ label: "Section heading" }),
          paras: paragraphs("Paragraphs", "Leave empty if you use bullets instead."),
          bullets: fields.array(fields.text({ label: "Bullet", multiline: true }), {
            label: "Bullets",
            description: "Leave empty if you use paragraphs instead.",
            itemLabel: (p) => (p.value || "").slice(0, 60) || "Empty",
          }),
        }),
        {
          label: "Sections",
          description:
            "A plain, factual summary for AI assistants. Keep it accurate — this is what they quote.",
          itemLabel: (p) => p.fields.heading.value || "Section",
        },
      ),
      ...seoFields(),
    },
  });

/* --------------------------------------------------------------- 404 PAGE */
export const notFoundPage = (locale: Loc) =>
  singleton({
    label: `"Page not found" message — ${locale.toUpperCase()}`,
    path: at(locale, "notFound"),
    format: { data: "json" },
    schema: {
      title: fields.text({ label: "Heading" }),
      body: fields.text({ label: "Text", multiline: true }),
      cta: ctaLink("Button", "Usually sends people back to the home page."),
    },
  });
