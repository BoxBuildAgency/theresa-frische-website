import type { SiteContent } from "./types";
import { blogPostsEn } from "./blog/posts.en";
import { faqCategoriesEn } from "./faq/faq.en";

// English content — primary locale at `/`.
// Copy is taken from CONTENT.md (the compliance-scrubbed source of truth) and
// kept in counselling-only language. Do not reintroduce prohibited clinical
// terms (therapy, treatment, diagnosis, patient, healing, symptoms, etc.).

export const en: SiteContent = {
  locale: "en",
  htmlLang: "en",

  brand: {
    name: "Theresa Frische",
    tagline: "Systemic Counselling",
    title: "Systemic & Integrative Counsellor",
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Work Together", href: "/work-together" },
    { label: "Organisations", href: "/organisations" },
    { label: "Weekly Wellbeing", href: "/weekly-wellbeing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],

  header: {
    bookCta: { label: "Book a discovery call", href: "/contact" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langToggleLabel: "Switch language",
    otherLangCode: "DE",
    otherLangName: "Deutsch",
  },

  footer: {
    line: "Theresa Frische · Systemic & Integrative Counsellor · Online Practice — International",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Work Together", href: "/work-together" },
      { label: "Organisations", href: "/organisations" },
      { label: "Weekly Wellbeing", href: "/weekly-wellbeing" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    legalNav: [
      { label: "Contact", href: "/contact" },
      { label: "AI Info", href: "/ai-info" },
      { label: "Impressum", href: "/impressum" },
      { label: "Privacy", href: "/privacy" },
    ],
    rights: "All rights reserved.",
    builtNote: "Online counselling in English & German, worldwide.",
  },

  cta: {
    primary: { label: "Book a free discovery call", href: "/contact" },
    secondaryLabel: "Explore services",
  },

  disclaimer: {
    heading: "An important note",
    body: "This is a counselling practice. Counselling is not psychotherapy, medical treatment, or a substitute for either. If you are in crisis or need urgent support, please contact your local emergency services or a crisis line.",
  },

  blogDisclaimer:
    "This article is for general information and reflection only. It is not psychotherapy, medical advice, or a substitute for either. If you are in crisis or need urgent support, please contact your local emergency services or a crisis line.",

  crisis: {
    heading: "If you need urgent support",
    intro:
      "Counselling is not a crisis service. If you are in crisis or need immediate help, please reach out to one of the resources below.",
    items: [
      { label: "Emergency (EU)", value: "112" },
      { label: "Telefonseelsorge (DE) — free, 24h", value: "0800 111 0 111 · 0800 111 0 222" },
      { label: "Die Dargebotene Hand (CH)", value: "143" },
      { label: "International directory", value: "findahelpline.com", href: "https://findahelpline.com" },
    ],
  },

  home: {
    metaTitle: "Theresa Frische — Systemic & Integrative Counsellor",
    metaDescription:
      "Online counselling in English and German for individuals and couples navigating change, transition, burnout, and life across borders. Book a free 15-minute discovery call.",
    eyebrow: "Systemic · Somatic · Integrative",
    heroTitle: "A space for what is",
    heroTitleAccent: "shifting within you",
    heroLead:
      "For individuals and couples navigating change, transition, and the quieter pressures that often go unnamed.",
    heroParas: [
      "Life rarely changes in clear or linear ways. More often, it shifts gradually — until something begins to feel different within yourself.",
      "Outwardly, you may still be functioning, while inwardly there may be strain, fatigue, or a quiet sense of disconnection from yourself.",
      "Many people seek support not because something has broken, but because something has shifted — and familiar ways of coping no longer feel fully sufficient.",
    ],
    heroEmphasis:
      "This work is not about fixing what is broken. It is about creating a reflective space to better understand yourself and move toward a life aligned with your values.",
    heroPrimary: { label: "Book a discovery call", href: "/contact" },
    heroSecondary: { label: "Explore services", href: "/work-together" },
    testimonial: {
      text: "Theresa creates a space that feels safe, grounded, and deeply supportive. I've become more resilient, more present, and more connected to myself.",
      attribution: "Client",
    },
    audience: {
      eyebrow: "Areas of focus",
      heading: "Who this is for",
      intro:
        "This work is for people moving through meaningful transitions — where the inner world asks for something different than what is already known.",
      items: [
        {
          title: "Life Transitions",
          body: "Relocation, separation, career shifts, loss, parenthood — changes that ask for deep emotional adaptation.",
        },
        {
          title: "Relationships",
          body: "Communication, emotional distance, recurring conflict, and rebuilding understanding and closeness.",
        },
        {
          title: "Identity & Direction",
          body: "Periods of uncertainty, reorientation, and questions of purpose and life direction.",
        },
        {
          title: "International Life",
          body: "The complexity of living across countries, cultures, and shifting social environments.",
        },
        {
          title: "Burnout & Overwhelm",
          body: "Supporting reconnection and regulation when internal resources feel depleted.",
        },
        {
          title: "Personal Growth",
          body: "Strengthening clarity, emotional resilience, and a steadier sense of self through change.",
        },
      ],
    },
    approach: {
      eyebrow: "My approach",
      heading: "Integrative and context-oriented",
      intro:
        "Rather than applying a fixed method, I draw from complementary perspectives to meet each person's experience with nuance. At the centre of this work is compassionate attention — to what is happening internally, relationally, and within the wider context of your life.",
      items: [
        {
          title: "Systemic Counselling",
          body: "Exploring relational and contextual patterns, and how they shape emotional experience and ways of responding to life.",
        },
        {
          title: "Somatic Awareness",
          body: "Attending to the body's responses to stress and change, supporting regulation, grounding, and greater internal stability.",
        },
        {
          title: "Parts Work",
          body: "Exploring the different parts of yourself that hold conflicting needs, fears, or responses — with curiosity and compassion, toward greater integration.",
        },
        {
          title: "Mindfulness-Based Practice",
          body: "Developing awareness of thoughts and patterns of reactivity — creating space and choice in how we respond.",
        },
      ],
    },
    practical: {
      eyebrow: "Practical information",
      heading: "Working together",
      items: [
        { label: "Format", value: "Online, worldwide" },
        { label: "Languages", value: "English & German" },
        { label: "Individual sessions", value: "60 minutes" },
        { label: "Couples sessions", value: "60–120 minutes" },
        { label: "Availability", value: "By appointment" },
      ],
      closing:
        "Ready to take the first step? Book a free 15-minute discovery call — a relaxed, no-obligation way to begin.",
    },
  },

  about: {
    metaTitle: "About — Theresa Frische",
    metaDescription:
      "Theresa Frische is a Systemic & Integrative Counsellor supporting internationals, expats, and couples through change. M.Sc. Clinical Psychology · Somatic Experiencing Practitioner.",
    eyebrow: "About",
    name: "Theresa Frische",
    subtitle: "A counsellor for those in transition.",
    credentials:
      "M.Sc. Clinical Psychology · Somatic Experiencing Practitioner · Systemic & Integrative Counsellor",
    lead: "For over eight years, I have supported individuals and organisations through meaningful change — with deep attentiveness to the whole human experience.",
    intro: [
      "I know what it feels like when life becomes too much — when stress builds up, relationships feel strained, or you no longer feel fully grounded in yourself.",
      "Over time, I've come to understand how deeply our nervous system, relationships, and life circumstances are interconnected. When one area becomes overloaded, it often affects everything else — how we feel, how we connect, and how we move through the world. This understanding is at the heart of my work.",
    ],
    imageAlt: "Portrait of Theresa Frische, Systemic & Integrative Counsellor, smiling by a window.",
    lived: {
      heading: "A life across borders",
      body: [
        "My own life has involved living across different countries, navigating long-distance and intercultural relationships, and adapting to new cultural and professional environments over time. Before dedicating myself to psychology, I studied contemporary dance and immersed myself in contemplative practice.",
        "These experiences have given me a deep appreciation of what it means to be in transition — not just externally, but internally. The uncertainty, the disorientation, and the need to find stability within change.",
      ],
      emphasis:
        "While each person's story is unique, I understand the emotional landscape that often comes with major life transitions and relational complexity.",
    },
    philosophy: {
      heading: "People are best understood in their whole experience",
      body: [
        "I'm convinced that lasting wellbeing emerges where people are understood in their whole experience — through the interaction of body, mind, and social environment.",
        "In my work, I combine evidence-based psychology with a body- and systems-oriented approach. Rather than focusing on labels or categories, I pay attention to the underlying connections — how life history, the nervous system, relationship patterns, and life context shape our experience.",
        "My aim is to support people in developing greater inner stability, flexibility, and resilience — and in building a fulfilling, value-oriented life in connection with themselves and others.",
      ],
    },
    quotes: [
      { text: "Life is a balance of holding on and letting go.", attribution: "Rumi" },
      {
        text: "Her empathic way of working makes it easy to open up. Her broad psychological knowledge across different approaches helped me understand and make sense of so much — having her as a companion in my life is of immeasurable value to me.",
        attribution: "Client",
      },
    ],
    education: {
      heading: "Education & qualifications",
      items: [
        {
          title: "Advanced systemic training",
          body: "IF Weinheim/Mannheim · in progress since 2023",
        },
        {
          title: "Body-oriented training",
          body: "Somatic Experiencing (SE), fully trained practitioner · further training in Ego-State, Hakomi, and body-oriented methods for working with stress and overwhelm",
        },
        { title: "M.Sc. Clinical Psychology", body: "University of Witten/Herdecke" },
        { title: "B.Sc. Psychology", body: "University of Cologne" },
        {
          title: "Classical & Contemporary Dance",
          body: "CODARTS Rotterdam & HfMDK Frankfurt",
        },
      ],
    },
  },

  workTogether: {
    metaTitle: "Work Together — Theresa Frische",
    metaDescription:
      "Online counselling for individuals and couples in English and German. Start with a free 15-minute discovery call.",
    eyebrow: "Work Together",
    heading: "Getting started",
    intro:
      "Sessions are offered online in English and German, to individuals and couples worldwide. The easiest first step is a free, no-obligation discovery call.",
    discovery: {
      heading: "Free 15-minute discovery call",
      intro:
        "A short, relaxed conversation to share what brings you here and see whether working together feels right — no obligation to continue.",
      steps: [
        {
          title: "Book a free discovery call",
          body: "Choose a time that works for you. We'll talk briefly about what's bringing you here.",
        },
        {
          title: "See if it's a good fit",
          body: "There's no pressure — this call is simply a chance to get a feel for working together.",
        },
        {
          title: "Begin sessions",
          body: "If it feels right, we'll schedule regular sessions at a pace that suits you.",
        },
      ],
    },
    quote: {
      text: "We cannot become what we want by remaining what we are.",
      attribution: "Max DePree",
    },
    individual: {
      heading: "Individual sessions",
      subheading: "One-to-one counselling",
      body: "One-to-one counselling offers a confidential, steady space to slow down and make sense of what is happening in your life. Sessions draw from systemic, somatic, parts-based, and mindfulness-informed approaches, shaped by what is present for you.",
      meta: [
        { label: "Duration", value: "60 minutes" },
        { label: "Format", value: "Online (video)" },
        { label: "Languages", value: "English & German" },
      ],
    },
    couples: {
      heading: "Couples sessions",
      subheading: "Counselling for couples",
      body: "Couples counselling supports partners in understanding patterns of disconnection, improving communication, and finding their way back toward emotional closeness. Sessions offer a structured space to be heard and to hear one another differently.",
      meta: [
        { label: "Duration", value: "60–120 minutes" },
        { label: "Format", value: "Online (video)" },
        { label: "Languages", value: "English & German" },
      ],
    },
    closing: {
      heading: "Ready to take the first step?",
      body: "Book your free 15-minute discovery call — a relaxed, no-obligation way to begin.",
      note: "Sessions are self-pay · Responding within 2–3 business days.",
    },
  },

  organisations: {
    metaTitle: "Organisations — Workplace Wellbeing | Theresa Frische",
    metaDescription:
      "Workplace wellbeing, keynotes, workshops, and employee counselling support for organisations in Germany and Switzerland. Over eight years of experience.",
    eyebrow: "For Organisations",
    heading: "Corporate mental health & workplace wellbeing",
    lead: "Mental health at work is not a luxury — it is the foundation for high-performing, engaged, and resilient teams.",
    intro:
      "With over eight years of experience, I support organisations in Germany and Switzerland in building a culture that takes psychological wellbeing seriously. Workplace stress, communication difficulties, and emotional exhaustion have a real impact on individuals and on organisations as a whole — I work with companies and institutions to build psychological safety, resilience, and the conditions for people to do their best work, sustainably.",
    facts: [
      { label: "Experience", value: "8+ years in workplace health promotion" },
      { label: "Languages", value: "English & German" },
      { label: "Certification", value: "Somatic Experiencing (SE) Practitioner" },
      { label: "Delivery", value: "Online or on-site, Germany & Switzerland" },
    ],
    formats: {
      heading: "Formats",
      intro: "Tailored to your team and context.",
      items: [
        {
          title: "Keynote Talks",
          body: "Inspiring impulses on mental health, resilience, and mindfulness — for conferences, large groups, or team events. (30–60 min · online or on-site)",
        },
        {
          title: "Workshops & Seminars",
          body: "Interactive sessions combining evidence-based psychological approaches with practical tools and reflection. (2–4 hours · online or on-site)",
        },
        {
          title: "In-Depth Trainings",
          body: "Multi-day trainings for leaders and teams, designed for sustainable skill development in wellbeing. (1–3 days · online or on-site)",
        },
        {
          title: "8-Week Programmes",
          body: "Structured wellbeing programmes supporting sustainable stress reduction, mindfulness, and emotional regulation. (8 weeks · 15–60 min weekly)",
        },
      ],
    },
    individual: {
      heading: "Counselling for employees & leaders",
      intro:
        "Confidential, one-to-one support as part of an employee assistance programme — available by arrangement, online.",
      items: [
        {
          title: "Employee Counselling",
          body: "Confidential counselling support for employees navigating stress, overwhelm, or personal challenges.",
        },
        {
          title: "Leadership Counselling",
          body: "Support for leaders navigating pressure, communication challenges, team dynamics, and emotional demands.",
        },
      ],
    },
    topics: {
      heading: "Areas I work with most",
      items: [
        "Stress & Burnout Prevention",
        "Emotional Regulation",
        "Mindfulness in the Workplace",
        "Communication & Team Dynamics",
        "Positive Psychology",
        "Resilience & Change Management",
        "Nervous System Regulation",
      ],
    },
    approach: {
      heading: "How we work",
      facts: [
        { label: "Experience", value: "8+ years" },
        { label: "Approach", value: "Systemic & evidence-based" },
        { label: "Delivery", value: "Online or in-person" },
        { label: "Languages", value: "English & German" },
      ],
      body: "My facilitation style is psychologically informed and relational, calm and engaging — combining theoretical grounding with practical, applicable tools.",
      emphasis:
        "Sustainable performance begins with people who feel genuinely supported — not just managed.",
    },
    testimonials: [
      {
        text: "Theresa Frische delights as a seminar leader with her comprehensive expertise and the perfect balance of theory and practice. With sensitivity and clear structure, she creates an atmosphere of trust in which learning and personal growth go hand in hand. A clear recommendation for organisations wanting to support their employees' health and development.",
        attribution: "Sophia Vennen, HR, Trusted Shops",
      },
      {
        text: "Theresa is an outstanding trainer whose calm, clear guidance and engaging approach made the experience both inspiring and easy to apply in daily life.",
        attribution: "Workshop Participant, Cornings",
      },
    ],
    closing: {
      heading: "Let's talk about your organisation",
      body: "For enquiries about workshops, programmes, or leadership support, please reach out directly. I'm happy to discuss what would be most useful for your context.",
    },
  },

  weeklyWellbeing: {
    metaTitle: "Weekly Wellbeing Community — Theresa Frische",
    metaDescription:
      "A calm weekly online space for mindfulness, stress reduction, and community connection. Tuesdays 20:30–21:30, in English.",
    eyebrow: "Weekly Wellbeing",
    heading: "Weekly online mindfulness & wellbeing community",
    lead: "A calm online space for mindfulness, stress reduction, and community connection.",
    intro:
      "The Weekly Wellbeing Community offers a supportive and grounded environment to slow down, reconnect, and care for your emotional wellbeing. Sessions combine mindfulness practices, nervous system regulation, reflection, and compassionate community connection — in an atmosphere that is calm, welcoming, and non-judgmental.",
    imageAlt: "A woman sitting quietly on a wooden dock beside still water at dusk.",
    facts: [
      { label: "When", value: "Tuesdays, 20:30–21:30" },
      { label: "Format", value: "Online via Teams" },
      { label: "Language", value: "English" },
    ],
    why: {
      heading: "Why join",
      intro: "What participants often look for.",
      items: [
        "Stress reduction",
        "Emotional regulation",
        "Mindfulness practice",
        "Nervous system grounding",
        "Self-compassion",
        "Presence & awareness",
        "Community connection",
        "Emotional balance",
      ],
    },
    quotes: [
      { text: "Regulation happens in relationship.", attribution: "Deb Dana" },
      {
        text: "The weekly hour of wellbeing is sacred to me. Each time, I take away something important and good — and the world becomes a little kinder, and life a little more beautiful.",
        attribution: "Corinna",
      },
      {
        text: "Theresa's compassionate approach and profound understanding of the human mind have been truly enriching.",
        attribution: "Lazar",
      },
    ],
    closing: {
      heading: "You are welcome to join",
      body: "If you'd like to receive more information about the Weekly Wellbeing Community, you are warmly welcome to get in touch.",
    },
  },

  blog: {
    metaTitle: "Blog — Reflections & Perspectives | Theresa Frische",
    metaDescription:
      "Thoughtful, psychologically informed writing on emotional wellbeing, relationships, stress, mindfulness, and navigating change.",
    eyebrow: "Blog",
    heading: "Reflections & perspectives",
    intro:
      "Thoughtful, psychologically informed writing on emotional wellbeing, relationships, stress, mindfulness, and navigating change — calm, reflective, and accessible.",
    allLabel: "All",
    readMore: "Read more",
    backToBlog: "Back to all articles",
    relatedHeading: "Continue reading",
    authorHeading: "About the author",
    authorBody:
      "Theresa Frische is a Systemic & Integrative Counsellor working online with internationals, expats, and couples navigating change. Sessions are offered in English and German.",
    minRead: "min read",
    posts: blogPostsEn,
  },

  faq: {
    metaTitle: "FAQ — Theresa Frische",
    metaDescription:
      "Answers to common questions about online counselling sessions, languages, format, Somatic Experiencing, and the Weekly Wellbeing Community.",
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    intro:
      "A few of the questions people often ask before getting started. If yours isn't here, you're warmly welcome to get in touch.",
    jumpLabel: "Jump to a topic",
    categories: faqCategoriesEn,
  },

  contact: {
    metaTitle: "Contact — Book a Discovery Call | Theresa Frische",
    metaDescription:
      "Get in touch to book a free 15-minute discovery call, or to ask about counselling, the Weekly Wellbeing Community, or work with your organisation.",
    eyebrow: "Contact",
    heading: "Book a free discovery call",
    lead: "Share a little about what brings you here, and I'll be in touch. There's no need to go into detail — a few lines are plenty. I usually respond within 2–3 business days.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "A few words about what brings you here, and what you'd like to ask.",
      consentLabel: "I have read the {privacy} and consent to my details being used to respond to my enquiry.",
      submit: "Send message",
      submitting: "Sending…",
      successTitle: "Thank you — your message is on its way.",
      successBody: "I've received your message and will be in touch within 2–3 business days. If your matter is urgent, please use one of the crisis resources listed here.",
      errorTitle: "Something went wrong.",
      errorGeneric: "Your message couldn't be sent just now. Please try again, or email me directly at theresafrische@gmail.com.",
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please enter a short message.",
        consent: "Please confirm you have read the privacy notice.",
      },
    },
    directHeading: "Prefer to write directly?",
    directBody: "You're also welcome to reach me by email or phone.",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },

  impressum: {
    metaTitle: "Impressum — Theresa Frische",
    metaDescription: "Legal disclosure (Impressum) for the counselling practice of Theresa Frische.",
    heading: "Impressum",
    blocks: [
      {
        heading: "Information pursuant to § 5 DDG",
        lines: [
          "Theresa Frische",
          "Systemic & Integrative Counsellor (Beratung)",
          "Address: [to be added]",
          "Germany",
        ],
      },
      {
        heading: "Contact",
        lines: ["Phone: +49 157 38920374", "Email: theresafrische@gmail.com"],
      },
      {
        heading: "VAT / tax status",
        lines: [
          "Small business under § 19 UStG — VAT status to be confirmed. No VAT is shown on invoices (Kleinunternehmer­regelung).",
        ],
      },
      {
        heading: "Responsible for content pursuant to § 18 (2) MStV",
        lines: ["Theresa Frische (address as above)"],
      },
      {
        heading: "Nature of the practice",
        lines: [
          "This is a counselling (Beratung) practice. The services offered are counselling, supervision-style support, workshops, and wellbeing programmes. This practice does not offer psychotherapy or medical treatment.",
        ],
      },
      {
        heading: "EU online dispute resolution",
        lines: [
          "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr.",
          "I am neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        heading: "Liability for content",
        lines: [
          "As a service provider, I am responsible for my own content on these pages in accordance with general law. However, I am not obliged to monitor transmitted or stored third-party information, or to investigate circumstances that indicate unlawful activity. Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the point in time at which a concrete infringement of the law becomes known. Upon becoming aware of such infringements, I will remove the content in question immediately.",
        ],
      },
      {
        heading: "Liability for links",
        lines: [
          "This site may contain links to external websites of third parties, over whose content I have no influence. Therefore, I cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking; no unlawful content was discernible. Permanent monitoring of the content of linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, I will remove such links immediately.",
        ],
      },
      {
        heading: "Copyright",
        lines: [
          "The content and works on these pages created by the site operator are subject to copyright law. Duplication, processing, distribution, and any form of commercialisation beyond the scope of copyright require the written consent of the respective author or creator. Downloads and copies of this site are permitted for private, non-commercial use only.",
        ],
      },
    ],
  },

  privacy: {
    metaTitle: "Privacy Policy — Theresa Frische",
    metaDescription: "How personal data is handled on this website, in accordance with the GDPR and the Swiss FADP (nDSG).",
    heading: "Privacy Policy",
    intro:
      "Your privacy matters. This policy explains what personal data is collected when you use this website, why, and what rights you have. It is written to meet the requirements of the EU General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (nDSG / FADP).",
    sections: [
      {
        heading: "Controller",
        paras: [
          "The controller responsible for data processing on this website is:",
          "Theresa Frische — Systemic & Integrative Counsellor. Address: [to be added]. Email: theresafrische@gmail.com. Phone: +49 157 38920374.",
        ],
      },
      {
        heading: "Principle of data minimisation",
        paras: [
          "This website is designed to collect as little personal data as possible. There is no user tracking, no analytics, no advertising pixels, and no cookies are set for marketing or analytics purposes. No special categories of data (such as health data) are requested through this website, and you are asked not to share sensitive details such as health information through the contact form.",
        ],
      },
      {
        heading: "Contact form",
        paras: [
          "When you use the contact form, the following data is processed: your name, your email address, and the content of your message. This information is used solely to respond to your enquiry.",
          "Legal basis: Art. 6 (1)(b) GDPR (steps prior to entering into a contract) where your enquiry relates to counselling services, and Art. 6 (1)(a) GDPR (consent) for processing your message, which you give by submitting the form. You can withdraw your consent at any time with effect for the future.",
          "Your submission is delivered to me by email and is not stored in a database on this website.",
        ],
      },
      {
        heading: "Email delivery processor (Resend)",
        paras: [
          "Contact form messages are transmitted using Resend, an email delivery service provided by Resend, Inc. Resend processes the data contained in your message (name, email address, message text) on my behalf solely for the purpose of delivering the email to me.",
          "Resend acts as a processor under Art. 28 GDPR, and a data processing agreement is in place. Where data is transferred to servers outside the EU/EEA, the transfer is safeguarded by appropriate measures such as the EU Standard Contractual Clauses.",
        ],
      },
      {
        heading: "Hosting (Netlify)",
        paras: [
          "This website is hosted by Netlify (Netlify, Inc.). When you visit the site, Netlify automatically collects and stores information that your browser transmits in server log files. This may include your IP address, the date and time of the request, the page accessed, the referrer URL, and your browser and operating system.",
          "Legal basis: Art. 6 (1)(f) GDPR (legitimate interest in the secure, stable, and efficient provision of the website). Netlify acts as a processor under Art. 28 GDPR. As Netlify is based in the United States, data may be transferred there; such transfers are safeguarded by appropriate measures such as the EU Standard Contractual Clauses.",
        ],
      },
      {
        heading: "Retention",
        paras: [
          "Personal data is retained only for as long as necessary for the purpose for which it was collected. Enquiries received by email are kept for as long as needed to handle your request and, where applicable, to meet statutory retention obligations, and are then deleted. Server log files are retained by the hosting provider for a limited period for security purposes.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paras: [
          "This website does not use analytics or tracking cookies and does not embed third-party advertising or social media tracking. Only technically necessary functions required to operate the site are used. Should analytics ever be introduced in future, this policy will be updated and, where required, your consent will be obtained beforehand.",
        ],
      },
      {
        heading: "Your rights",
        paras: ["Under the GDPR and the Swiss FADP, you have the following rights regarding your personal data:"],
        bullets: [
          "The right to access the personal data held about you.",
          "The right to rectification of inaccurate or incomplete data.",
          "The right to erasure (\"the right to be forgotten\").",
          "The right to restriction of processing.",
          "The right to data portability.",
          "The right to object to processing based on legitimate interests.",
          "The right to withdraw consent at any time, with effect for the future.",
          "The right to lodge a complaint with a supervisory authority.",
        ],
      },
      {
        heading: "Right to complain",
        paras: [
          "If you believe that the processing of your personal data infringes data protection law, you have the right to lodge a complaint with a supervisory authority — in particular in the EU member state of your residence, place of work, or the place of the alleged infringement, or, for Switzerland, with the Federal Data Protection and Information Commissioner (FDPIC).",
        ],
      },
      {
        heading: "Updates to this policy",
        paras: [
          "This privacy policy may be updated to reflect changes to the website or to legal requirements. The current version always applies.",
        ],
      },
    ],
  },

  aiInfo: {
    metaTitle: "AI & Citation Info — Theresa Frische",
    metaDescription:
      "A plain, factual summary of Theresa Frische's counselling practice for AI assistants and answer engines: who she is, what is offered, languages, who it is for, and how to start.",
    eyebrow: "For AI assistants",
    heading: "About this practice — a factual summary",
    intro:
      "This page is a plain, structured summary of Theresa Frische's counselling practice, written for accurate reading and citation by AI assistants and answer engines. Everything here also appears, in fuller form, across the rest of the site.",
    updated: "Last reviewed: July 2026.",
    sections: [
      {
        heading: "Who Theresa Frische is",
        paras: [
          "Theresa Frische is a Systemic & Integrative Counsellor offering online counselling to individuals and couples internationally. She holds an M.Sc. in Clinical Psychology and is a trained Somatic Experiencing practitioner, with advanced systemic training, and has over eight years of experience supporting individuals and organisations through change.",
        ],
      },
      {
        heading: "What the practice offers",
        bullets: [
          "Individual counselling — one-to-one online sessions (60 minutes).",
          "Couples counselling — online sessions for couples (60–120 minutes).",
          "Weekly Wellbeing Community — a weekly online mindfulness and wellbeing group (Tuesdays, in English).",
          "For organisations — keynotes, workshops, in-depth trainings, 8-week wellbeing programmes, and confidential employee and leadership counselling.",
        ],
      },
      {
        heading: "Format and languages",
        bullets: [
          "Format: online (video), worldwide. Organisational work can be delivered online or on-site in Germany and Switzerland.",
          "Languages: English and German.",
          "Availability: by appointment.",
        ],
      },
      {
        heading: "Who it is for",
        paras: [
          "The practice supports high-functioning, cross-cultural internationals, expats, and couples navigating change, transition, relocation, burnout, overwhelm, relationship strain, questions of identity and direction, and life across countries and cultures.",
        ],
      },
      {
        heading: "Approach",
        paras: [
          "The work is integrative and context-oriented, drawing on systemic counselling, somatic awareness (Somatic Experiencing), parts work, and mindfulness-based practice — chosen to fit each person rather than a single fixed method.",
        ],
      },
      {
        heading: "How to start",
        paras: [
          "The first step is a free 15-minute discovery call — a relaxed, no-obligation conversation. Sessions are self-pay. Enquiries are made through the contact page.",
        ],
      },
      {
        heading: "What counselling is — and is not",
        paras: [
          "This is a counselling (Beratung) practice. Counselling is not psychotherapy, medical treatment, or a substitute for either, and it does not involve diagnosis or medical care. If you are in crisis or need urgent support, please contact your local emergency services or a crisis line (for example, 112 in the EU).",
        ],
      },
      {
        heading: "Key pages",
        bullets: [
          "About: /about — Theresa's background and approach.",
          "Work Together: /work-together — individual and couples counselling.",
          "Organisations: /organisations — workplace wellbeing for teams.",
          "Weekly Wellbeing: /weekly-wellbeing — the weekly online community.",
          "Blog: /blog — articles on stress, burnout, relationships, transitions, and living abroad.",
          "FAQ: /faq — common questions about working together.",
          "Contact: /contact — book a free discovery call.",
          "German version: every page has a German mirror under /de (this page is at /de/ai-info).",
        ],
      },
    ],
  },

  notFound: {
    title: "This page couldn't be found",
    body: "The page you're looking for may have moved. Let's get you back to a good starting point.",
    cta: { label: "Return home", href: "/" },
  },
};
