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
  /** Child pages, rendered as a desktop dropdown / mobile accordion. */
  children?: NavItem[];
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

/** A numbered or plain item used in card grids and service rows. */
export interface CardLink {
  title: string;
  body: string;
  href: string;
}

/** Long-form child page under Work With Me / For Organisations (v2). */
export interface ServicePageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lead: string;
  paras: string[];
  /** Numbered service row (e.g. the four organisation formats, 01–04). */
  numbered?: FeatureItem[];
  facts?: MetaPair[];
  /** "See also" contextual links rendered under the body. */
  crossLinks?: CtaLink[];
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
    /**
     * The portrait that leads the home hero. Kept separate from the About
     * photograph so the two can be changed independently in the admin.
     */
    heroPortrait: { src: string; alt: string };
    testimonial: Quote;
    audience: {
      eyebrow: string;
      heading: string;
      intro: string;
      items: FeatureItem[];
    };
    /**
     * A single sentence in her voice, over a full-width photograph, sitting
     * between the focus areas and the four steps — a deliberate pause in a long
     * stretch of text.
     */
    pauseBand: { text: string };
    // NOTE: the duplicate `approach` block was removed in v3 (§1.3) — the home
    // page has a single approach section, `steps` below (01–04).
    practical: {
      eyebrow: string;
      heading: string;
      items: MetaPair[];
      closing: string;
    };
    // ---- v2 additions ----
    /** Reach framing: online, DE/EN, Switzerland + Germany + international (no location claim). */
    reachLine: string;
    /** Discreet · Evidence-based · Flexible */
    trustPillars: FeatureItem[];
    /** The four-step approach: 01 Understand Patterns … 04 Align Life & Values. */
    steps: {
      eyebrow: string;
      heading: string;
      intro: string;
      items: FeatureItem[];
      /**
       * The approaches she draws on, named plainly.
       *
       * `note` is load-bearing: it states that this is counselling and that she
       * is not a psychotherapist. That sentence, together with the same
       * statement in the Impressum and in section 2 of the Terms, is what keeps
       * naming these modalities safe now that the wording check only warns.
       * Do not remove it.
       */
      modalities: { heading: string; items: string[]; note: string };
      closing: string;
      ctaLabel: string;
    };
    /** "Your Advantages as a Private-Pay Client" */
    privatePay: { eyebrow: string; heading: string; items: FeatureItem[] };
    /** Short about block on the home page, linking through to /about. */
    aboutBlock: { eyebrow: string; heading: string; body: string; ctaLabel: string };
    /** Client testimonials (first names only, no photos, no star ratings). */
    testimonials: Quote[];
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
    education: { heading: string; items: FeatureItem[] };
    /** Factual, neutral PsyKo/PsyCo recognition line (application pending). */
    psyCoNote: string;
  };

  /**
   * My Philosophy — split out of About in August 2026 (§4).
   *
   * `/about/philosophy` and `/de/ueber-mich/philosophie`. The prose and the
   * numbered 01–04 sections used to live on the About page; they were long
   * enough to deserve their own route, and About Me now reads as an
   * introduction rather than an essay.
   */
  philosophyPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    body: string[];
    /** Alt text for the softening band; empty means decorative. */
    bandAlt: string;
    sections: { number: string; heading: string; paras: string[] }[];
    testimonial: Quote;
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
    // ---- v2 additions ----
    /** Teaser cards linking to the four Work With Me child pages. */
    cards: CardLink[];
    /** Switzerland / international topical section (no in-person or location claim). */
    switzerland: { heading: string; paras: string[] };
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
    // ---- v2 additions ----
    /** Teaser cards linking to the three For Organisations child pages. */
    cards: CardLink[];
  };

  weeklyWellbeing: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    lead: string;
    /** Her v3 description, as separate paragraphs. */
    intro: string[];
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

  /**
   * Long-form child pages under Work With Me and For Organisations, keyed by the
   * route key in lib/site.ts ROUTES (e.g. "wwm-couples-counselling").
   */
  serviceChildren: Record<string, ServicePageContent>;

  /**
   * Terms & Conditions / AGB. Legal text is conventional and precise — it is NOT
   * transcreated, and the "not psychotherapy, not medical treatment" wording in
   * section 2 must stay exactly as drafted. No prices are published.
   */
  terms: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    /** The 12 numbered clauses; the number is part of each heading. */
    sections: { heading: string; paras: string[] }[];
    /** "Version: 30 July 2026" / "Stand: 30. Juli 2026" */
    version: string;
  };

  aiInfo: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    updated: string; // "Last reviewed: ..." line
    sections: { heading: string; paras?: string[]; bullets?: string[] }[];
  };

  notFound: {
    title: string;
    body: string;
    cta: CtaLink;
  };
}
