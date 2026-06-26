import type { SiteContent } from "./types";

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
    posts: [
      {
        slug: "functioning-well-vs-feeling-well",
        title: "When \"Functioning Well\" Isn't the Same as Feeling Well",
        category: "Stress & Burnout",
        date: "2026-05-28",
        readingTime: "6",
        excerpt:
          "Why high-functioning stress often goes unnoticed, and what the early signs of burnout can look like from the inside.",
        body: [
          { type: "p", text: "From the outside, everything looks fine. You meet your deadlines, you show up for the people who depend on you, you keep the plates spinning. And yet, somewhere underneath the steady surface, something feels off — a low hum of fatigue that sleep doesn't quite touch, a flatness where enthusiasm used to be, a sense that you are managing your life rather than living it." },
          { type: "p", text: "This is the quiet paradox of high-functioning stress. The very competence that earns praise can also hide how depleted a person has become. When you are good at coping, the people around you — and often you yourself — assume you are doing well. Feeling well, however, is a different question altogether." },
          { type: "h2", text: "Functioning is a behaviour. Feeling is an experience." },
          { type: "p", text: "Functioning describes what you can still do: get to work, answer the emails, hold the conversations. Feeling describes what it costs you to do it. For many capable, conscientious people, these two can drift far apart before anyone notices. You can be highly functional and quietly running on empty at the same time." },
          { type: "p", text: "The gap tends to widen slowly. Coping strategies that once felt sustainable — pushing through, staying busy, putting your own needs last — keep working just well enough that there is never an obvious moment to stop. Until, gradually, the effort required to keep going starts to outweigh what you have to give." },
          { type: "h2", text: "Early signs that are easy to dismiss" },
          { type: "p", text: "Overwhelm rarely announces itself dramatically. More often it shows up in small, dismissible ways — the kind of signals it is tempting to explain away as a busy phase." },
          { type: "ul", items: [
            "Rest that doesn't restore — waking tired, weekends that don't refill the tank.",
            "A shrinking emotional range — less joy, less irritation, a general sense of \"meh\".",
            "Small tasks feeling disproportionately heavy.",
            "Withdrawing from the people and activities that usually sustain you.",
            "A body that keeps the score — tension, disrupted sleep, a stomach that knots before the week begins.",
          ] },
          { type: "p", text: "None of these are failures. They are information. The body and nervous system have ways of signalling when the load has become too much for too long — and learning to read those signals early is far kinder than waiting until they become impossible to ignore." },
          { type: "h2", text: "Why \"I should be able to handle this\" keeps people stuck" },
          { type: "p", text: "One of the most common things I hear is some version of \"other people manage, so I should too.\" But the amount of strain you are carrying is not a measure of your strength, and continuing to cope is not the same as being well. The belief that you should be fine can become the very thing that stops you from getting support while it is still light work to do so." },
          { type: "p", text: "There is also a quieter cost. When you spend a long time overriding your own signals — staying calm when you are not, saying yes when you mean no — you can begin to lose contact with yourself. The disconnection people describe is often exactly this: a kind of low-grade estrangement from their own inner life." },
          { type: "h2", text: "A different starting point" },
          { type: "p", text: "Reconnecting usually begins not with doing more, but with noticing. With giving yourself permission to ask a simple, honest question: how am I, actually? Not how am I performing, or how am I managing — but how am I." },
          { type: "p", text: "Counselling can offer a steady, reflective space to slow down and listen to what has gone unnamed. Sometimes that means making sense of how the strain built up. Sometimes it means gently experimenting with new ways of responding — to your own needs, your relationships, and the pace of your life. The aim is not to make you function even better, but to help you feel more like yourself again." },
          { type: "p", text: "If you recognise yourself in any of this, it does not mean something is wrong with you. It may simply mean that something has shifted, and that the ways of coping that carried you this far are asking to be updated. That is not a breakdown. It is an invitation to come back into relationship with yourself." },
        ],
      },
      {
        slug: "what-is-somatic-experiencing",
        title: "What Is Somatic Experiencing — and How Does It Help With Stress?",
        category: "Somatic Experiencing & Nervous System Regulation",
        date: "2026-05-12",
        readingTime: "6",
        excerpt:
          "An accessible introduction to Somatic Experiencing, the nervous system, and why the body matters when we're under stress.",
        body: [
          { type: "p", text: "Most of us are used to thinking about stress as something that happens in the mind — a matter of thoughts, worries, and to-do lists. And it is. But stress also lives in the body. Your heart rate, your breathing, the tension in your shoulders, the knot in your stomach: these are not side effects of a stressful life. They are part of how stress actually works." },
          { type: "p", text: "Somatic Experiencing (SE) is a body-oriented approach, developed by Dr Peter Levine, that takes this seriously. It works with the nervous system and the felt sense of the body to support people in moving through stress and overwhelming experiences — not by analysing them from a distance, but by gently helping the body complete what it could not at the time." },
          { type: "h2", text: "A quick tour of the nervous system" },
          { type: "p", text: "Your autonomic nervous system is constantly, quietly scanning for safety and threat — long before conscious thought gets involved. When it senses a demand it perceives as too much, it mobilises: the familiar fight-or-flight surge of energy. When something feels overwhelming or inescapable, it can do the opposite — shutting down, numbing, going still." },
          { type: "p", text: "These responses are intelligent and protective. The difficulty is that, under sustained pressure, the nervous system can get stuck in a state of high activation or shutdown even after the demand has passed. You may notice this as feeling permanently wired, on edge, exhausted, or strangely flat — as though the body never quite got the message that it is safe to settle." },
          { type: "h2", text: "What Somatic Experiencing actually involves" },
          { type: "p", text: "SE is gentle and gradual. Rather than asking you to relive difficult events in detail, it pays careful attention to the body's present-moment experience — sensations, small impulses, subtle shifts of tension and ease." },
          { type: "ul", items: [
            "Building awareness of body sensations, a little at a time, within a window you can tolerate.",
            "Noticing where there is tension or activation — and, just as importantly, where there is steadiness and ease.",
            "Allowing the nervous system to discharge held energy slowly, so settling feels safe rather than flooding.",
            "Strengthening your felt sense of grounding, so that regulation becomes more available in daily life.",
          ] },
          { type: "p", text: "An important principle is that more is not better. SE works within a person's capacity, moving back and forth between activation and calm so the system learns, experientially, that it can move out of stress and back into balance. Over time, that flexibility tends to generalise — you recover a little faster, settle a little more easily." },
          { type: "h2", text: "Why the body matters when we're under stress" },
          { type: "p", text: "Insight alone — understanding why you feel as you do — is valuable, but it does not always change how the body responds. You can know, rationally, that you are safe and still feel your chest tighten the moment a certain email arrives. That gap is exactly where body-oriented work can help. By involving the nervous system directly, SE supports change at the level where stress is actually held." },
          { type: "p", text: "In my own work, Somatic Experiencing is one perspective among several. I draw on it alongside systemic and mindfulness-based approaches, depending on what feels useful for the person in front of me. For some people, attention to the body is the missing piece; for others, it is one strand of a broader exploration." },
          { type: "h2", text: "A gentler relationship with your own responses" },
          { type: "p", text: "Perhaps the most quietly powerful thing SE offers is a change in relationship to your own reactions. Instead of fighting your tension or being frightened by your fatigue, you begin to meet these states with curiosity — as meaningful signals from a system that has been doing its best to protect you. From that place, grounding and steadiness have room to grow." },
        ],
      },
      {
        slug: "why-big-life-changes-feel-harder",
        title: "Why Big Life Changes Feel Harder Than They \"Should\"",
        category: "Life Transitions",
        date: "2026-04-22",
        readingTime: "5",
        excerpt:
          "Why transitions are emotionally demanding even when they are positive — and what helps when you feel unsteady through change.",
        body: [
          { type: "p", text: "A new job. A move to a city you chose. A relationship beginning, or a long-held dream finally arriving. By every external measure, things are going well — and yet you feel unexpectedly unsteady, tired, or strangely sad. If a part of you is quietly asking why this is so hard when nothing is wrong, you are not alone." },
          { type: "p", text: "We tend to assume that difficult feelings belong to difficult events. So when a positive change leaves us disoriented, we often add a second layer of distress on top of the first: I shouldn't feel this way. But transitions are demanding by their very nature — not because something has gone wrong, but because change asks a great deal of us, even when it is welcome." },
          { type: "h2", text: "Every gain contains a loss" },
          { type: "p", text: "Beneath almost every meaningful change is something being left behind. A new role means letting go of the comfort of competence you had in the old one. A move forward in life can quietly close the door on a version of yourself, or a way of living, that you were attached to. These losses are often invisible — even to us — which is part of why the feelings that come with them can be so confusing." },
          { type: "p", text: "Naming the loss inside the gain is often a relief. It explains the grief that can sit, unexpectedly, beside genuine excitement. You are not being ungrateful. You are metabolising a real change." },
          { type: "h2", text: "Transitions ask the nervous system to recalibrate" },
          { type: "p", text: "Familiarity is a form of safety. Even routines we complain about provide a kind of scaffolding the nervous system relies on. When that scaffolding changes — new surroundings, new people, new expectations — the body has to work harder, orienting to everything afresh. That extra effort is real, and it is tiring, which is why transitions so often come with a fatigue that pure logic can't account for." },
          { type: "ul", items: [
            "The \"in-between\" feeling — no longer who you were, not yet who you are becoming.",
            "Heightened sensitivity, self-doubt, or a shorter fuse than usual.",
            "Tiredness that rest doesn't fully resolve.",
            "Waves of emotion that seem out of proportion to events.",
          ] },
          { type: "h2", text: "The space between is not a mistake" },
          { type: "p", text: "Many traditions describe transition as a threshold — a liminal space between an old structure and a new one. It is uncomfortable precisely because it is unformed. But it is also where genuine reorientation happens. Rushing to feel settled can short-circuit the very process that allows something new to take shape." },
          { type: "p", text: "What helps, more often than not, is permission: to feel unsteady without treating it as a problem to be solved; to move at a humane pace; to stay in contact with your values while the outer details rearrange themselves." },
          { type: "h2", text: "Support through the in-between" },
          { type: "p", text: "Counselling can offer a steady point of reference while everything else is shifting — a reflective space to make sense of what is being left behind, what is being asked of you, and what matters most as you move forward. Not to speed the transition up, but to help you move through it with more steadiness and self-understanding." },
          { type: "p", text: "If a change that should feel good is leaving you more tender than you expected, consider it a sign of how much the moment is asking of you — and how much it matters. That is not weakness. It is the ordinary, demanding work of becoming." },
        ],
      },
      {
        slug: "built-a-life-abroad-not-at-home",
        title: "When You've Built a Life Abroad but Don't Feel at Home",
        category: "Expat Life",
        date: "2026-04-02",
        readingTime: "5",
        excerpt:
          "Why emotional loneliness can persist in a new country, and how subtle disconnection shows up in everyday expat life.",
        body: [],
        draft: true,
      },
      {
        slug: "growing-apart-growing-together",
        title: "Growing Apart, Growing Together: Navigating Distance in Long-Term Relationships",
        category: "Relationships",
        date: "2026-03-18",
        readingTime: "6",
        excerpt:
          "Understanding emotional distance in couples, and practical first steps toward reconnection.",
        body: [],
        draft: true,
      },
      {
        slug: "love-across-cultures",
        title: "Love Across Cultures: Navigating Intercultural Relationships",
        category: "International & Cross-Cultural Relationships",
        date: "2026-03-04",
        readingTime: "6",
        excerpt:
          "The joys and challenges of cross-cultural partnerships, and how to build shared understanding.",
        body: [],
        draft: true,
      },
      {
        slug: "mindfulness-is-not-clearing-your-mind",
        title: "Mindfulness Isn't About Clearing Your Mind — Here's What It Actually Is",
        category: "Mindfulness",
        date: "2026-02-19",
        readingTime: "5",
        excerpt:
          "Debunking common myths and how a regular practice supports emotional regulation.",
        body: [],
        draft: true,
      },
      {
        slug: "burnout-in-leadership",
        title: "Burnout in Leadership: Why Leaders Often Hide It Longest",
        category: "Burnout in Leadership",
        date: "2026-02-05",
        readingTime: "6",
        excerpt:
          "The particular pressures leaders face, and why psychological support matters at every level.",
        body: [],
        draft: true,
      },
      {
        slug: "workplace-wellbeing-that-works",
        title: "What Makes a Workplace Wellbeing Programme Actually Work?",
        category: "Workplace Wellbeing",
        date: "2026-01-22",
        readingTime: "6",
        excerpt:
          "How sustainable wellbeing cultures are built, beyond one-off events.",
        body: [],
        draft: true,
      },
      {
        slug: "resilience-is-not-toughing-it-out",
        title: "Resilience Isn't About Toughing It Out",
        category: "Resilience in Times of Change",
        date: "2026-01-08",
        readingTime: "5",
        excerpt:
          "Reframing resilience as flexibility and recovery, not just endurance.",
        body: [],
        draft: true,
      },
    ],
  },

  faq: {
    metaTitle: "FAQ — Theresa Frische",
    metaDescription:
      "Answers to common questions about online counselling sessions, languages, format, Somatic Experiencing, and the Weekly Wellbeing Community.",
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    intro:
      "A few of the questions people often ask before getting started. If yours isn't here, you're warmly welcome to get in touch.",
    items: [
      {
        q: "How do I get started?",
        a: "The first step is a free 15-minute discovery call. It's a relaxed, no-obligation conversation where you can share what brings you here, ask any questions, and get a sense of whether working together feels right.",
      },
      {
        q: "What languages do you offer sessions in?",
        a: "Sessions are available in both English and German, for individuals and couples internationally.",
      },
      {
        q: "Are sessions online or in person?",
        a: "Individual and couples sessions are offered online via video, allowing me to work with clients internationally. For organisations, workshops and trainings can be delivered online or on-site in Germany and Switzerland.",
      },
      {
        q: "How long are sessions, and how often do we meet?",
        a: "Individual sessions last 60 minutes; couples sessions run 60–120 minutes. How often we meet is something we agree on together, based on what feels right for your situation.",
      },
      {
        q: "What is Somatic Experiencing, and how is it used in our sessions?",
        a: "Somatic Experiencing is a body-oriented approach to working with stress and overwhelming experiences. It supports the nervous system in releasing held tension and returning to a greater sense of safety and regulation. It's drawn on alongside systemic and mindfulness-based approaches, depending on what feels useful for you.",
      },
      {
        q: "Is this covered by health insurance (Krankenkasse)?",
        a: "Sessions are self-pay and not reimbursed by statutory or private health insurance. This allows for a flexible, confidential way of working — with no insurance paperwork, no reporting requirements, and no need to fit your experience into clinical categories.",
      },
      {
        q: "How is couples counselling different from individual counselling?",
        a: "Couples counselling focuses on relational patterns — communication, connection, and recurring conflict. Sessions are usually longer (60–120 minutes) to allow space for both perspectives to be heard.",
      },
      {
        q: "How can I join the Weekly Wellbeing Community?",
        a: "The community meets online via Teams on Tuesdays from 20:30–21:30, in English. Get in touch using the contact form to receive more information and a link to join.",
      },
      {
        q: "Can my organisation book a one-off session, or only longer programmes?",
        a: "Both. I offer everything from single keynote talks and workshops (2–4 hours) to multi-day trainings and structured 8-week programmes — tailored to what your organisation needs.",
      },
    ],
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

  notFound: {
    title: "This page couldn't be found",
    body: "The page you're looking for may have moved. Let's get you back to a good starting point.",
    cta: { label: "Return home", href: "/" },
  },
};
