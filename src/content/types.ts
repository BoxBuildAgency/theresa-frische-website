// Shared content types for the locale-keyed content modules (en.ts / de.ts).
// Both locales implement the exact same SiteContent shape so the shared
// presentational components can render either language unchanged.

export type Locale = "en" | "de";

export interface CtaLink {
  label: string;
  href: string; // locale-relative path, e.g. "/contact" or "/de/contact"
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  body: string;
}

export interface MetaPair {
  label: string;
  value: string;
}

export interface Quote {
  text: string;
  attribution: string;
}

export interface CrisisItem {
  label: string;
  value: string;
  href?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string; // stable anchor id, used by the jump nav
  title: string;
  items: FaqItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: string;
  excerpt: string;
  /** Full body as ordered blocks. Stubs use an empty body array. */
  body: BlogBlock[];
  draft?: boolean; // true for the 7 ready-to-fill stubs
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface SiteContent {
  locale: Locale;
  htmlLang: string;

  brand: {
    name: string;
    tagline: string; // "Systemic Counselling" / "Systemische Beratung"
    title: string; // "Systemic & Integrative Counsellor"
  };

  nav: NavItem[];

  header: {
    bookCta: CtaLink;
    menuOpen: string;
    menuClose: string;
    langToggleLabel: string; // accessible label
    otherLangCode: string; // "DE" when on EN
    otherLangName: string;
  };

  footer: {
    line: string;
    nav: NavItem[];
    legalNav: NavItem[];
    rights: string;
    builtNote: string;
  };

  cta: {
    // The single recurring discovery-call CTA used site-wide
    primary: CtaLink;
    secondaryLabel: string;
  };

  disclaimer: {
    heading: string;
    body: string;
  };

  blogDisclaimer: string;

  crisis: {
    heading: string;
    intro: string;
    items: CrisisItem[];
  };

  home: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heroTitle: string;
    heroTitleAccent: string; // italic green accent words
    heroLead: string;
    heroParas: string[];
    heroEmphasis: string;
    heroPrimary: CtaLink;
    heroSecondary: CtaLink;
    testimonial: Quote;
    audience: {
      eyebrow: string;
      heading: string;
      intro: string;
      items: FeatureItem[];
    };
    approach: {
      eyebrow: string;
      heading: string;
      intro: string;
      items: FeatureItem[];
    };
    practical: {
      eyebrow: string;
      heading: string;
      items: MetaPair[];
      closing: string;
    };
  };

  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    name: string;
    subtitle: string;
    credentials: string;
    lead: string;
    intro: string[];
    imageAlt: string;
    lived: { heading: string; body: string[]; emphasis: string };
    philosophy: { heading: string; body: string[] };
    quotes: Quote[];
    education: { heading: string; items: FeatureItem[] };
  };

  workTogether: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    discovery: {
      heading: string;
      intro: string;
      steps: FeatureItem[];
    };
    quote: Quote;
    individual: { heading: string; subheading: string; body: string; meta: MetaPair[] };
    couples: { heading: string; subheading: string; body: string; meta: MetaPair[] };
    closing: { heading: string; body: string; note: string };
  };

  organisations: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    lead: string;
    intro: string;
    facts: MetaPair[];
    formats: { heading: string; intro: string; items: FeatureItem[] };
    individual: { heading: string; intro: string; items: FeatureItem[] };
    topics: { heading: string; items: string[] };
    approach: { heading: string; facts: MetaPair[]; body: string; emphasis: string };
    testimonials: Quote[];
    closing: { heading: string; body: string };
  };

  weeklyWellbeing: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    lead: string;
    intro: string;
    imageAlt: string;
    facts: MetaPair[];
    why: { heading: string; intro: string; items: string[] };
    quotes: Quote[];
    closing: { heading: string; body: string };
  };

  blog: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    allLabel: string;
    readMore: string;
    backToBlog: string;
    relatedHeading: string;
    authorHeading: string;
    authorBody: string;
    minRead: string;
    posts: BlogPost[];
  };

  faq: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    jumpLabel: string; // heading for the category jump-nav
    categories: FaqCategory[];
  };

  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    lead: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      consentLabel: string; // contains {privacy} token replaced with a link
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorGeneric: string;
      validation: {
        name: string;
        email: string;
        message: string;
        consent: string;
      };
    };
    directHeading: string;
    directBody: string;
    emailLabel: string;
    phoneLabel: string;
  };

  impressum: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    blocks: { heading: string; lines: string[] }[];
  };

  privacy: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    intro: string;
    sections: { heading: string; paras: string[]; bullets?: string[] }[];
  };

  notFound: {
    title: string;
    body: string;
    cta: CtaLink;
  };
}
