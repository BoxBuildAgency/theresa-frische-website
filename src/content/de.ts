import type { SiteContent } from "./types";

// Deutscher Inhalt — Locale unter `/de`.
// Texte sind durchgehend in reiner Beratungssprache gehalten. Bitte keine
// klinischen Begriffe einführen (Therapie, Behandlung, Diagnose, Patient:in,
// Heilung, Symptome usw.).

export const de: SiteContent = {
  locale: "de",
  htmlLang: "de",

  brand: {
    name: "Theresa Frische",
    tagline: "Systemische Beratung",
    title: "Systemische & Integrative Beraterin",
  },

  nav: [
    { label: "Über mich", href: "/de/about" },
    { label: "Zusammenarbeit", href: "/de/work-together" },
    { label: "Organisationen", href: "/de/organisations" },
    { label: "Weekly Wellbeing", href: "/de/weekly-wellbeing" },
    { label: "Blog", href: "/de/blog" },
    { label: "FAQ", href: "/de/faq" },
  ],

  header: {
    bookCta: { label: "Kennenlerngespräch buchen", href: "/de/contact" },
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    langToggleLabel: "Sprache wechseln",
    otherLangCode: "EN",
    otherLangName: "English",
  },

  footer: {
    line: "Theresa Frische · Systemische & Integrative Beraterin · Online-Praxis — international",
    nav: [
      { label: "Startseite", href: "/de" },
      { label: "Über mich", href: "/de/about" },
      { label: "Zusammenarbeit", href: "/de/work-together" },
      { label: "Organisationen", href: "/de/organisations" },
      { label: "Weekly Wellbeing", href: "/de/weekly-wellbeing" },
      { label: "Blog", href: "/de/blog" },
      { label: "FAQ", href: "/de/faq" },
    ],
    legalNav: [
      { label: "Kontakt", href: "/de/contact" },
      { label: "Impressum", href: "/de/impressum" },
      { label: "Datenschutz", href: "/de/datenschutz" },
    ],
    rights: "Alle Rechte vorbehalten.",
    builtNote: "Online-Beratung auf Deutsch & Englisch, weltweit.",
  },

  cta: {
    primary: { label: "Kostenloses Kennenlerngespräch buchen", href: "/de/contact" },
    secondaryLabel: "Angebote entdecken",
  },

  disclaimer: {
    heading: "Ein wichtiger Hinweis",
    body: "Dies ist eine Beratungspraxis. Beratung ist keine Psychotherapie, keine medizinische Versorgung und kein Ersatz für eine von beiden. Wenn Sie sich in einer Krise befinden oder dringende Unterstützung brauchen, wenden Sie sich bitte an den örtlichen Notruf oder an eine Krisenhotline.",
  },

  blogDisclaimer:
    "Dieser Artikel dient ausschließlich der allgemeinen Information und Reflexion. Er ist keine Psychotherapie, keine medizinische Beratung und kein Ersatz für eine von beiden. Wenn Sie sich in einer Krise befinden oder dringende Unterstützung brauchen, wenden Sie sich bitte an den örtlichen Notruf oder an eine Krisenhotline.",

  crisis: {
    heading: "Wenn Sie dringend Unterstützung brauchen",
    intro:
      "Beratung ist kein Krisendienst. Wenn Sie sich in einer Krise befinden oder sofortige Hilfe brauchen, wenden Sie sich bitte an eine der folgenden Stellen.",
    items: [
      { label: "Notruf (EU)", value: "112" },
      { label: "Telefonseelsorge (DE) — kostenlos, 24 h", value: "0800 111 0 111 · 0800 111 0 222" },
      { label: "Die Dargebotene Hand (CH)", value: "143" },
      { label: "Internationales Verzeichnis", value: "findahelpline.com", href: "https://findahelpline.com" },
    ],
  },

  home: {
    metaTitle: "Theresa Frische — Systemische & Integrative Beraterin",
    metaDescription:
      "Online-Beratung auf Deutsch und Englisch für Einzelpersonen und Paare in Zeiten von Veränderung, Übergang, Überforderung und einem Leben über Grenzen hinweg. Buchen Sie ein kostenloses 15-minütiges Kennenlerngespräch.",
    eyebrow: "Systemisch · Somatisch · Integrativ",
    heroTitle: "Ein Raum für das, was",
    heroTitleAccent: "sich in Ihnen verändert",
    heroLead:
      "Für Einzelpersonen und Paare in Zeiten von Veränderung, Übergang und den leiseren Belastungen, die oft unbenannt bleiben.",
    heroParas: [
      "Das Leben verändert sich selten auf klare oder geradlinige Weise. Häufiger verschiebt sich etwas allmählich — bis sich in Ihnen selbst etwas anders anzufühlen beginnt.",
      "Nach außen funktionieren Sie vielleicht noch, während sich im Inneren Anspannung, Erschöpfung oder ein leises Gefühl der Entfremdung von sich selbst zeigt.",
      "Viele Menschen suchen Unterstützung nicht, weil etwas zerbrochen ist, sondern weil sich etwas verschoben hat — und vertraute Bewältigungsweisen sich nicht mehr ganz ausreichend anfühlen.",
    ],
    heroEmphasis:
      "In dieser Arbeit geht es nicht darum, etwas Kaputtes zu reparieren. Es geht darum, einen reflexiven Raum zu schaffen, um sich selbst besser zu verstehen und sich auf ein Leben zuzubewegen, das mit Ihren Werten im Einklang steht.",
    heroPrimary: { label: "Kennenlerngespräch buchen", href: "/de/contact" },
    heroSecondary: { label: "Angebote entdecken", href: "/de/work-together" },
    testimonial: {
      text: "Theresa schafft einen Raum, der sich sicher, geerdet und zutiefst unterstützend anfühlt. Ich bin widerstandsfähiger, präsenter und stärker mit mir selbst verbunden geworden.",
      attribution: "Klient:in",
    },
    audience: {
      eyebrow: "Schwerpunkte",
      heading: "Für wen das gedacht ist",
      intro:
        "Diese Arbeit ist für Menschen, die bedeutsame Übergänge durchleben — wo die innere Welt nach etwas anderem verlangt als nach dem bereits Bekannten.",
      items: [
        {
          title: "Lebensübergänge",
          body: "Umzug, Trennung, beruflicher Wandel, Verlust, Elternschaft — Veränderungen, die eine tiefe emotionale Anpassung verlangen.",
        },
        {
          title: "Beziehungen",
          body: "Kommunikation, emotionale Distanz, wiederkehrende Konflikte und das Wiederherstellen von Verständnis und Nähe.",
        },
        {
          title: "Identität & Orientierung",
          body: "Phasen der Unsicherheit, Neuorientierung und Fragen nach Sinn und Lebensrichtung.",
        },
        {
          title: "Leben über Grenzen hinweg",
          body: "Die Komplexität eines Lebens zwischen Ländern, Kulturen und sich wandelnden sozialen Umfeldern.",
        },
        {
          title: "Überforderung & Erschöpfung",
          body: "Begleitung beim Wiederverbinden und Regulieren, wenn die inneren Ressourcen erschöpft scheinen.",
        },
        {
          title: "Persönliches Wachstum",
          body: "Mehr Klarheit, emotionale Widerstandskraft und ein stabileres Selbstgefühl durch Veränderung hindurch.",
        },
      ],
    },
    approach: {
      eyebrow: "Mein Ansatz",
      heading: "Integrativ und kontextorientiert",
      intro:
        "Statt einer festen Methode zu folgen, schöpfe ich aus sich ergänzenden Perspektiven, um jedem Menschen mit Feingefühl zu begegnen. Im Zentrum dieser Arbeit steht mitfühlende Aufmerksamkeit — für das, was sich innerlich, in Beziehungen und im größeren Kontext Ihres Lebens zeigt.",
      items: [
        {
          title: "Systemische Beratung",
          body: "Erkunden relationaler und kontextueller Muster und wie sie das emotionale Erleben und die Art, dem Leben zu begegnen, prägen.",
        },
        {
          title: "Körperwahrnehmung (Somatic Awareness)",
          body: "Aufmerksamkeit für die Reaktionen des Körpers auf Stress und Veränderung, zur Unterstützung von Regulation, Erdung und größerer innerer Stabilität.",
        },
        {
          title: "Teile-Arbeit (Parts Work)",
          body: "Erkunden der verschiedenen Anteile in Ihnen, die widersprüchliche Bedürfnisse, Ängste oder Reaktionen tragen — mit Neugier und Mitgefühl, hin zu mehr Integration.",
        },
        {
          title: "Achtsamkeitsbasierte Praxis",
          body: "Entwickeln eines Bewusstseins für Gedanken und Reaktionsmuster — um Raum und Wahlmöglichkeit darin zu schaffen, wie wir reagieren.",
        },
      ],
    },
    practical: {
      eyebrow: "Praktische Informationen",
      heading: "Die Zusammenarbeit",
      items: [
        { label: "Format", value: "Online, weltweit" },
        { label: "Sprachen", value: "Deutsch & Englisch" },
        { label: "Einzelsitzungen", value: "60 Minuten" },
        { label: "Paarsitzungen", value: "60–120 Minuten" },
        { label: "Verfügbarkeit", value: "Nach Vereinbarung" },
      ],
      closing:
        "Bereit für den ersten Schritt? Buchen Sie ein kostenloses 15-minütiges Kennenlerngespräch — ein entspannter, unverbindlicher Einstieg.",
    },
  },

  about: {
    metaTitle: "Über mich — Theresa Frische",
    metaDescription:
      "Theresa Frische ist Systemische & Integrative Beraterin und begleitet internationale Menschen, Expats und Paare durch Veränderung. M.Sc. Clinical Psychology · Somatic Experiencing Practitioner.",
    eyebrow: "Über mich",
    name: "Theresa Frische",
    subtitle: "Eine Beraterin für Menschen im Übergang.",
    credentials:
      "M.Sc. Clinical Psychology · Somatic Experiencing Practitioner · Systemische & Integrative Beraterin",
    lead: "Seit über acht Jahren begleite ich Einzelpersonen und Organisationen durch bedeutsame Veränderung — mit tiefer Aufmerksamkeit für das ganze menschliche Erleben.",
    intro: [
      "Ich weiß, wie es sich anfühlt, wenn das Leben zu viel wird — wenn sich Stress aufbaut, Beziehungen sich angespannt anfühlen oder Sie sich nicht mehr ganz bei sich selbst geerdet fühlen.",
      "Mit der Zeit habe ich verstanden, wie tief unser Nervensystem, unsere Beziehungen und unsere Lebensumstände miteinander verwoben sind. Wenn ein Bereich überlastet wird, wirkt sich das oft auf alles andere aus — darauf, wie wir uns fühlen, wie wir uns verbinden und wie wir uns durch die Welt bewegen. Dieses Verständnis steht im Zentrum meiner Arbeit.",
    ],
    imageAlt: "Porträt von Theresa Frische, Systemische & Integrative Beraterin, lächelnd am Fenster.",
    lived: {
      heading: "Ein Leben über Grenzen hinweg",
      body: [
        "Mein eigenes Leben hat mich durch verschiedene Länder geführt, durch Fern- und interkulturelle Beziehungen und durch das Ankommen in immer neuen kulturellen und beruflichen Umfeldern. Bevor ich mich der Psychologie widmete, studierte ich zeitgenössischen Tanz und vertiefte mich in kontemplative Praxis.",
        "Diese Erfahrungen haben mir ein tiefes Verständnis dafür gegeben, was es heißt, im Übergang zu sein — nicht nur äußerlich, sondern auch innerlich. Die Unsicherheit, die Desorientierung und das Bedürfnis, inmitten der Veränderung Halt zu finden.",
      ],
      emphasis:
        "Auch wenn die Geschichte jedes Menschen einzigartig ist, kenne ich die emotionale Landschaft, die große Lebensübergänge und beziehungsbezogene Komplexität oft mit sich bringen.",
    },
    philosophy: {
      heading: "Menschen versteht man am besten in ihrem ganzen Erleben",
      body: [
        "Ich bin überzeugt, dass nachhaltiges Wohlbefinden dort entsteht, wo Menschen in ihrem ganzen Erleben verstanden werden — im Zusammenspiel von Körper, Geist und sozialem Umfeld.",
        "In meiner Arbeit verbinde ich evidenzbasierte Psychologie mit einem körper- und systemorientierten Ansatz. Statt auf Etiketten oder Kategorien zu schauen, achte ich auf die zugrunde liegenden Zusammenhänge — wie Lebensgeschichte, Nervensystem, Beziehungsmuster und Lebenskontext unser Erleben prägen.",
        "Mein Anliegen ist es, Menschen darin zu unterstützen, mehr innere Stabilität, Flexibilität und Widerstandskraft zu entwickeln — und ein erfülltes, werteorientiertes Leben in Verbindung mit sich selbst und anderen aufzubauen.",
      ],
    },
    quotes: [
      { text: "Das Leben ist ein Gleichgewicht aus Festhalten und Loslassen.", attribution: "Rumi" },
      {
        text: "Ihre empathische Art zu arbeiten macht es leicht, sich zu öffnen. Ihr breites psychologisches Wissen über verschiedene Ansätze hinweg hat mir geholfen, so vieles zu verstehen und einzuordnen — sie als Begleiterin in meinem Leben zu haben, ist für mich von unschätzbarem Wert.",
        attribution: "Klient:in",
      },
    ],
    education: {
      heading: "Ausbildung & Qualifikationen",
      items: [
        {
          title: "Systemische Weiterbildung",
          body: "IF Weinheim/Mannheim · seit 2023 in Ausbildung",
        },
        {
          title: "Körperorientierte Ausbildung",
          body: "Somatic Experiencing (SE), vollständig ausgebildete Praktikerin · weitere Fortbildungen in Ego-State, Hakomi und körperorientierten Methoden für die Arbeit mit Stress und Überforderung",
        },
        { title: "M.Sc. Clinical Psychology", body: "Universität Witten/Herdecke" },
        { title: "B.Sc. Psychologie", body: "Universität zu Köln" },
        {
          title: "Klassischer & zeitgenössischer Tanz",
          body: "CODARTS Rotterdam & HfMDK Frankfurt",
        },
      ],
    },
  },

  workTogether: {
    metaTitle: "Zusammenarbeit — Theresa Frische",
    metaDescription:
      "Online-Beratung für Einzelpersonen und Paare auf Deutsch und Englisch. Beginnen Sie mit einem kostenlosen 15-minütigen Kennenlerngespräch.",
    eyebrow: "Zusammenarbeit",
    heading: "Der Einstieg",
    intro:
      "Die Sitzungen werden online auf Deutsch und Englisch angeboten, für Einzelpersonen und Paare weltweit. Der einfachste erste Schritt ist ein kostenloses, unverbindliches Kennenlerngespräch.",
    discovery: {
      heading: "Kostenloses 15-minütiges Kennenlerngespräch",
      intro:
        "Ein kurzes, entspanntes Gespräch, um zu teilen, was Sie herführt, und zu spüren, ob sich eine Zusammenarbeit stimmig anfühlt — ganz ohne Verpflichtung, weiterzumachen.",
      steps: [
        {
          title: "Kostenloses Kennenlerngespräch buchen",
          body: "Wählen Sie eine Zeit, die für Sie passt. Wir sprechen kurz darüber, was Sie herführt.",
        },
        {
          title: "Spüren, ob es passt",
          body: "Es gibt keinen Druck — dieses Gespräch ist einfach eine Gelegenheit, ein Gefühl für die Zusammenarbeit zu bekommen.",
        },
        {
          title: "Mit den Sitzungen beginnen",
          body: "Wenn es sich stimmig anfühlt, vereinbaren wir regelmäßige Sitzungen in einem Tempo, das zu Ihnen passt.",
        },
      ],
    },
    quote: {
      text: "Wir können nicht das werden, was wir sein wollen, wenn wir bleiben, was wir sind.",
      attribution: "Max DePree",
    },
    individual: {
      heading: "Einzelsitzungen",
      subheading: "Beratung im Einzelsetting",
      body: "Die Beratung im Einzelsetting bietet einen vertraulichen, verlässlichen Raum, um zur Ruhe zu kommen und dem, was in Ihrem Leben geschieht, einen Sinn zu geben. Die Sitzungen schöpfen aus systemischen, somatischen, teileorientierten und achtsamkeitsbasierten Ansätzen, ausgerichtet an dem, was für Sie gerade da ist.",
      meta: [
        { label: "Dauer", value: "60 Minuten" },
        { label: "Format", value: "Online (Video)" },
        { label: "Sprachen", value: "Deutsch & Englisch" },
      ],
    },
    couples: {
      heading: "Paarsitzungen",
      subheading: "Paarberatung",
      body: "Die Paarberatung unterstützt Partner:innen dabei, Muster der Entfremdung zu verstehen, die Kommunikation zu verbessern und zurück zu emotionaler Nähe zu finden. Die Sitzungen bieten einen strukturierten Raum, gehört zu werden und einander auf andere Weise zuzuhören.",
      meta: [
        { label: "Dauer", value: "60–120 Minuten" },
        { label: "Format", value: "Online (Video)" },
        { label: "Sprachen", value: "Deutsch & Englisch" },
      ],
    },
    closing: {
      heading: "Bereit für den ersten Schritt?",
      body: "Buchen Sie Ihr kostenloses 15-minütiges Kennenlerngespräch — ein entspannter, unverbindlicher Einstieg.",
      note: "Sitzungen sind Selbstzahlerleistungen · Antwort innerhalb von 2–3 Werktagen.",
    },
  },

  organisations: {
    metaTitle: "Organisationen — Wohlbefinden am Arbeitsplatz | Theresa Frische",
    metaDescription:
      "Wohlbefinden am Arbeitsplatz, Keynotes, Workshops und Beratungsangebote für Mitarbeitende von Organisationen in Deutschland und der Schweiz. Über acht Jahre Erfahrung.",
    eyebrow: "Für Organisationen",
    heading: "Mentale Gesundheit & Wohlbefinden am Arbeitsplatz",
    lead: "Mentale Gesundheit am Arbeitsplatz ist kein Luxus — sie ist die Grundlage für leistungsfähige, engagierte und widerstandsfähige Teams.",
    intro:
      "Mit über acht Jahren Erfahrung unterstütze ich Organisationen in Deutschland und der Schweiz dabei, eine Kultur aufzubauen, die psychisches Wohlbefinden ernst nimmt. Stress am Arbeitsplatz, Kommunikationsschwierigkeiten und emotionale Erschöpfung haben reale Auswirkungen auf Einzelne und auf Organisationen als Ganzes — ich arbeite mit Unternehmen und Institutionen daran, psychologische Sicherheit, Widerstandskraft und die Bedingungen zu schaffen, unter denen Menschen ihre beste Arbeit nachhaltig leisten können.",
    facts: [
      { label: "Erfahrung", value: "8+ Jahre in der betrieblichen Gesundheitsförderung" },
      { label: "Sprachen", value: "Deutsch & Englisch" },
      { label: "Zertifizierung", value: "Somatic Experiencing (SE) Practitioner" },
      { label: "Durchführung", value: "Online oder vor Ort, Deutschland & Schweiz" },
    ],
    formats: {
      heading: "Formate",
      intro: "Zugeschnitten auf Ihr Team und Ihren Kontext.",
      items: [
        {
          title: "Keynote-Vorträge",
          body: "Inspirierende Impulse zu mentaler Gesundheit, Widerstandskraft und Achtsamkeit — für Konferenzen, große Gruppen oder Team-Events. (30–60 Min · online oder vor Ort)",
        },
        {
          title: "Workshops & Seminare",
          body: "Interaktive Formate, die evidenzbasierte psychologische Ansätze mit praktischen Werkzeugen und Reflexion verbinden. (2–4 Stunden · online oder vor Ort)",
        },
        {
          title: "Vertiefende Trainings",
          body: "Mehrtägige Trainings für Führungskräfte und Teams, ausgelegt auf nachhaltige Kompetenzentwicklung im Bereich Wohlbefinden. (1–3 Tage · online oder vor Ort)",
        },
        {
          title: "8-Wochen-Programme",
          body: "Strukturierte Wohlbefindensprogramme zur Unterstützung nachhaltiger Stressreduktion, Achtsamkeit und emotionaler Regulation. (8 Wochen · 15–60 Min wöchentlich)",
        },
      ],
    },
    individual: {
      heading: "Beratung für Mitarbeitende & Führungskräfte",
      intro:
        "Vertrauliche Einzelbegleitung als Teil eines Mitarbeitendenunterstützungsprogramms — nach Vereinbarung, online verfügbar.",
      items: [
        {
          title: "Beratung für Mitarbeitende",
          body: "Vertrauliche Beratung für Mitarbeitende, die mit Stress, Überforderung oder persönlichen Schwierigkeiten umgehen.",
        },
        {
          title: "Beratung für Führungskräfte",
          body: "Unterstützung für Führungskräfte im Umgang mit Druck, Kommunikationsherausforderungen, Teamdynamiken und emotionalen Anforderungen.",
        },
      ],
    },
    topics: {
      heading: "Themen, mit denen ich am häufigsten arbeite",
      items: [
        "Stress- & Burnout-Prävention",
        "Emotionale Regulation",
        "Achtsamkeit am Arbeitsplatz",
        "Kommunikation & Teamdynamik",
        "Positive Psychologie",
        "Widerstandskraft & Veränderungsbegleitung",
        "Regulation des Nervensystems",
      ],
    },
    approach: {
      heading: "Wie wir arbeiten",
      facts: [
        { label: "Erfahrung", value: "8+ Jahre" },
        { label: "Ansatz", value: "Systemisch & evidenzbasiert" },
        { label: "Durchführung", value: "Online oder vor Ort" },
        { label: "Sprachen", value: "Deutsch & Englisch" },
      ],
      body: "Mein Stil in der Begleitung ist psychologisch fundiert und beziehungsorientiert, ruhig und zugewandt — er verbindet theoretische Fundierung mit praktischen, anwendbaren Werkzeugen.",
      emphasis:
        "Nachhaltige Leistung beginnt mit Menschen, die sich wirklich unterstützt fühlen — und nicht bloß verwaltet.",
    },
    testimonials: [
      {
        text: "Theresa Frische begeistert als Seminarleiterin mit ihrer umfassenden Fachkompetenz und der perfekten Balance aus Theorie und Praxis. Mit Feingefühl und klarer Struktur schafft sie eine Atmosphäre des Vertrauens, in der Lernen und persönliches Wachstum Hand in Hand gehen. Eine klare Empfehlung für Organisationen, die die Gesundheit und Entwicklung ihrer Mitarbeitenden unterstützen möchten.",
        attribution: "Sophia Vennen, HR, Trusted Shops",
      },
      {
        text: "Theresa ist eine herausragende Trainerin, deren ruhige, klare Anleitung und zugewandte Art die Erfahrung zugleich inspirierend und leicht im Alltag anwendbar gemacht haben.",
        attribution: "Workshop-Teilnehmer:in, Cornings",
      },
    ],
    closing: {
      heading: "Sprechen wir über Ihre Organisation",
      body: "Für Anfragen zu Workshops, Programmen oder der Begleitung von Führungskräften melden Sie sich gerne direkt. Ich bespreche gern mit Ihnen, was für Ihren Kontext am hilfreichsten wäre.",
    },
  },

  weeklyWellbeing: {
    metaTitle: "Weekly Wellbeing Community — Theresa Frische",
    metaDescription:
      "Ein ruhiger wöchentlicher Online-Raum für Achtsamkeit, Stressreduktion und Verbundenheit in Gemeinschaft. Dienstags 20:30–21:30, auf Englisch.",
    eyebrow: "Weekly Wellbeing",
    heading: "Wöchentliche Online-Community für Achtsamkeit & Wohlbefinden",
    lead: "Ein ruhiger Online-Raum für Achtsamkeit, Stressreduktion und Verbundenheit in Gemeinschaft.",
    intro:
      "Die Weekly Wellbeing Community bietet ein unterstützendes, geerdetes Umfeld, um zur Ruhe zu kommen, sich wieder zu verbinden und für Ihr emotionales Wohlbefinden zu sorgen. Die Sitzungen verbinden Achtsamkeitsübungen, Regulation des Nervensystems, Reflexion und mitfühlende Verbundenheit in Gemeinschaft — in einer Atmosphäre, die ruhig, einladend und wertungsfrei ist.",
    imageAlt: "Eine Frau sitzt in der Abenddämmerung still auf einem hölzernen Steg neben ruhigem Wasser.",
    facts: [
      { label: "Wann", value: "Dienstags, 20:30–21:30" },
      { label: "Format", value: "Online über Teams" },
      { label: "Sprache", value: "Englisch" },
    ],
    why: {
      heading: "Warum teilnehmen",
      intro: "Wonach Teilnehmende oft suchen.",
      items: [
        "Stressreduktion",
        "Emotionale Regulation",
        "Achtsamkeitspraxis",
        "Erdung des Nervensystems",
        "Selbstmitgefühl",
        "Präsenz & Gewahrsein",
        "Verbundenheit in Gemeinschaft",
        "Emotionales Gleichgewicht",
      ],
    },
    quotes: [
      { text: "Regulation geschieht in Beziehung.", attribution: "Deb Dana" },
      {
        text: "Die wöchentliche Stunde des Wohlbefindens ist mir heilig. Jedes Mal nehme ich etwas Wichtiges und Gutes mit — und die Welt wird ein wenig freundlicher und das Leben ein wenig schöner.",
        attribution: "Corinna",
      },
      {
        text: "Theresas mitfühlender Zugang und ihr tiefes Verständnis des menschlichen Geistes sind eine echte Bereicherung gewesen.",
        attribution: "Lazar",
      },
    ],
    closing: {
      heading: "Sie sind herzlich willkommen",
      body: "Wenn Sie mehr Informationen über die Weekly Wellbeing Community erhalten möchten, melden Sie sich gerne bei mir.",
    },
  },

  blog: {
    metaTitle: "Blog — Gedanken & Perspektiven | Theresa Frische",
    metaDescription:
      "Durchdachte, psychologisch fundierte Texte über emotionales Wohlbefinden, Beziehungen, Stress, Achtsamkeit und das Navigieren von Veränderung.",
    eyebrow: "Blog",
    heading: "Gedanken & Perspektiven",
    intro:
      "Durchdachte, psychologisch fundierte Texte über emotionales Wohlbefinden, Beziehungen, Stress, Achtsamkeit und das Navigieren von Veränderung — ruhig, reflektiert und zugänglich.",
    allLabel: "Alle",
    readMore: "Weiterlesen",
    backToBlog: "Zurück zu allen Artikeln",
    relatedHeading: "Weiterlesen",
    authorHeading: "Über die Autorin",
    authorBody:
      "Theresa Frische ist Systemische & Integrative Beraterin und arbeitet online mit internationalen Menschen, Expats und Paaren, die Veränderung navigieren. Die Sitzungen werden auf Deutsch und Englisch angeboten.",
    minRead: "Min. Lesezeit",
    posts: [
      {
        slug: "functioning-well-vs-feeling-well",
        title: "Wenn „gut funktionieren\" nicht dasselbe ist wie sich gut fühlen",
        category: "Stress & Überforderung",
        date: "2026-05-28",
        readingTime: "6",
        excerpt:
          "Warum hochfunktionaler Stress oft unbemerkt bleibt und wie die frühen Anzeichen von Überforderung von innen aussehen können.",
        body: [
          { type: "p", text: "Von außen sieht alles in Ordnung aus. Sie halten Ihre Termine ein, Sie sind für die Menschen da, die auf Sie zählen, Sie halten alle Bälle in der Luft. Und doch fühlt sich irgendwo unter der ruhigen Oberfläche etwas falsch an — ein leises Summen von Erschöpfung, das der Schlaf nicht ganz erreicht, eine Flachheit dort, wo früher Begeisterung war, ein Gefühl, dass Sie Ihr Leben eher verwalten als leben." },
          { type: "p", text: "Das ist das stille Paradox hochfunktionalen Stresses. Genau die Tüchtigkeit, die Lob einbringt, kann zugleich verbergen, wie erschöpft ein Mensch geworden ist. Wenn Sie gut darin sind zu bewältigen, gehen die Menschen um Sie herum — und oft auch Sie selbst — davon aus, dass es Ihnen gut geht. Sich gut zu fühlen ist jedoch eine ganz andere Frage." },
          { type: "h2", text: "Funktionieren ist ein Verhalten. Fühlen ist ein Erleben." },
          { type: "p", text: "Funktionieren beschreibt, was Sie noch tun können: zur Arbeit kommen, die E-Mails beantworten, die Gespräche führen. Fühlen beschreibt, was es Sie kostet, das zu tun. Bei vielen fähigen, gewissenhaften Menschen können diese beiden weit auseinanderdriften, bevor es jemand bemerkt. Sie können hochfunktional sein und zugleich still auf Reserve laufen." },
          { type: "p", text: "Die Kluft weitet sich meist langsam. Bewältigungsstrategien, die sich einmal tragfähig anfühlten — durchhalten, beschäftigt bleiben, die eigenen Bedürfnisse hintanstellen — funktionieren gerade so gut, dass es nie einen offensichtlichen Moment zum Innehalten gibt. Bis allmählich die Anstrengung, weiterzumachen, das übersteigt, was Sie zu geben haben." },
          { type: "h2", text: "Frühe Anzeichen, die sich leicht abtun lassen" },
          { type: "p", text: "Überforderung kündigt sich selten dramatisch an. Häufiger zeigt sie sich auf kleine, leicht abzutuende Weise — die Art von Signalen, die man verführerisch leicht als bloß stressige Phase erklären kann." },
          { type: "ul", items: [
            "Ruhe, die nicht erholt — müde aufwachen, Wochenenden, die den Tank nicht wieder füllen.",
            "Eine schrumpfende emotionale Bandbreite — weniger Freude, weniger Gereiztheit, ein allgemeines Gefühl von „naja\".",
            "Kleine Aufgaben fühlen sich unverhältnismäßig schwer an.",
            "Rückzug von den Menschen und Tätigkeiten, die Sie sonst tragen.",
            "Ein Körper, der mitzählt — Anspannung, gestörter Schlaf, ein Magen, der sich verknotet, bevor die Woche beginnt.",
          ] },
          { type: "p", text: "Nichts davon ist ein Versagen. Es sind Informationen. Körper und Nervensystem haben Wege zu signalisieren, wenn die Last zu lange zu groß geworden ist — und zu lernen, diese Signale früh zu lesen, ist weitaus freundlicher, als zu warten, bis sie unmöglich zu übersehen sind." },
          { type: "h2", text: "Warum „ich sollte das doch hinbekommen\" Menschen festhält" },
          { type: "p", text: "Eines der häufigsten Dinge, die ich höre, ist eine Variante von „andere schaffen das, also sollte ich das auch\". Aber das Maß der Belastung, die Sie tragen, ist kein Maßstab für Ihre Stärke, und weiter zu bewältigen ist nicht dasselbe, wie es Ihnen gut geht. Die Überzeugung, dass es Ihnen eigentlich gut gehen müsste, kann genau das werden, was Sie davon abhält, sich Unterstützung zu holen, solange das noch leicht zu tun ist." },
          { type: "p", text: "Es gibt auch einen leiseren Preis. Wenn Sie lange Zeit Ihre eigenen Signale übergehen — ruhig bleiben, obwohl Sie es nicht sind, Ja sagen, wenn Sie Nein meinen — können Sie den Kontakt zu sich selbst verlieren. Die Entfremdung, die Menschen beschreiben, ist oft genau das: eine Art leise Entfremdung vom eigenen Innenleben." },
          { type: "h2", text: "Ein anderer Ausgangspunkt" },
          { type: "p", text: "Wiederverbindung beginnt meist nicht damit, mehr zu tun, sondern damit, wahrzunehmen. Damit, sich selbst die Erlaubnis zu geben, eine einfache, ehrliche Frage zu stellen: Wie geht es mir eigentlich? Nicht wie funktioniere ich oder wie bewältige ich — sondern wie es mir geht." },
          { type: "p", text: "Beratung kann einen verlässlichen, reflexiven Raum bieten, um zur Ruhe zu kommen und dem zuzuhören, was unbenannt geblieben ist. Manchmal heißt das, zu verstehen, wie sich die Belastung aufgebaut hat. Manchmal heißt es, behutsam mit neuen Weisen des Reagierens zu experimentieren — auf Ihre eigenen Bedürfnisse, Ihre Beziehungen und das Tempo Ihres Lebens. Das Ziel ist nicht, dass Sie noch besser funktionieren, sondern Ihnen dabei zu helfen, sich wieder mehr wie Sie selbst zu fühlen." },
          { type: "p", text: "Wenn Sie sich in irgendetwas davon wiedererkennen, bedeutet das nicht, dass mit Ihnen etwas nicht stimmt. Es kann einfach bedeuten, dass sich etwas verschoben hat und dass die Bewältigungsweisen, die Sie bis hierher getragen haben, danach verlangen, aktualisiert zu werden. Das ist kein Zusammenbruch. Es ist eine Einladung, wieder in Beziehung mit sich selbst zu treten." },
        ],
      },
      {
        slug: "what-is-somatic-experiencing",
        title: "Was ist Somatic Experiencing — und wie hilft es bei Stress?",
        category: "Somatic Experiencing & Regulation des Nervensystems",
        date: "2026-05-12",
        readingTime: "6",
        excerpt:
          "Eine zugängliche Einführung in Somatic Experiencing, das Nervensystem und warum der Körper zählt, wenn wir unter Stress stehen.",
        body: [
          { type: "p", text: "Die meisten von uns sind es gewohnt, Stress als etwas zu betrachten, das im Kopf geschieht — eine Sache von Gedanken, Sorgen und To-do-Listen. Und das ist er auch. Aber Stress lebt auch im Körper. Ihr Herzschlag, Ihre Atmung, die Anspannung in den Schultern, der Knoten im Magen: Das sind keine Nebenwirkungen eines stressigen Lebens. Sie sind Teil dessen, wie Stress tatsächlich wirkt." },
          { type: "p", text: "Somatic Experiencing (SE) ist ein körperorientierter Ansatz, entwickelt von Dr. Peter Levine, der dies ernst nimmt. Er arbeitet mit dem Nervensystem und dem gespürten Sinn des Körpers, um Menschen dabei zu unterstützen, durch Stress und überwältigende Erfahrungen hindurchzugehen — nicht indem er sie aus der Distanz analysiert, sondern indem er dem Körper behutsam hilft, zu vollenden, was er damals nicht vollenden konnte." },
          { type: "h2", text: "Ein kurzer Rundgang durch das Nervensystem" },
          { type: "p", text: "Ihr autonomes Nervensystem scannt ständig und leise nach Sicherheit und Bedrohung — lange bevor bewusstes Denken ins Spiel kommt. Wenn es eine Anforderung wahrnimmt, die es als zu viel einschätzt, mobilisiert es: der vertraute Energieschub von Kampf oder Flucht. Wenn sich etwas überwältigend oder ausweglos anfühlt, kann es das Gegenteil tun — herunterfahren, taub werden, erstarren." },
          { type: "p", text: "Diese Reaktionen sind intelligent und schützend. Die Schwierigkeit besteht darin, dass das Nervensystem unter anhaltendem Druck in einem Zustand hoher Aktivierung oder des Herunterfahrens steckenbleiben kann, selbst nachdem die Anforderung vorüber ist. Sie bemerken das vielleicht als ein Gefühl, dauerhaft unter Strom zu stehen, angespannt, erschöpft oder seltsam flach zu sein — als hätte der Körper die Botschaft nie ganz erhalten, dass es sicher ist, sich zu beruhigen." },
          { type: "h2", text: "Was Somatic Experiencing tatsächlich umfasst" },
          { type: "p", text: "SE ist behutsam und allmählich. Statt Sie zu bitten, schwierige Ereignisse im Detail noch einmal zu durchleben, richtet es sorgfältige Aufmerksamkeit auf das gegenwärtige Erleben des Körpers — Empfindungen, kleine Impulse, feine Verschiebungen von Anspannung und Leichtigkeit." },
          { type: "ul", items: [
            "Ein Bewusstsein für Körperempfindungen aufbauen, Stück für Stück, innerhalb eines Bereichs, den Sie aushalten können.",
            "Bemerken, wo Anspannung oder Aktivierung ist — und, ebenso wichtig, wo Stabilität und Leichtigkeit sind.",
            "Dem Nervensystem erlauben, gehaltene Energie langsam zu entladen, sodass sich das Beruhigen sicher anfühlt statt überflutend.",
            "Ihren gespürten Sinn von Erdung stärken, sodass Regulation im Alltag verfügbarer wird.",
          ] },
          { type: "p", text: "Ein wichtiges Prinzip ist, dass mehr nicht besser ist. SE arbeitet innerhalb der Kapazität eines Menschen und bewegt sich hin und her zwischen Aktivierung und Ruhe, sodass das System erfahrungsbasiert lernt, dass es aus dem Stress heraus und zurück ins Gleichgewicht gelangen kann. Mit der Zeit neigt diese Flexibilität dazu, sich zu verallgemeinern — Sie erholen sich ein wenig schneller, beruhigen sich ein wenig leichter." },
          { type: "h2", text: "Warum der Körper zählt, wenn wir unter Stress stehen" },
          { type: "p", text: "Einsicht allein — zu verstehen, warum Sie sich fühlen, wie Sie sich fühlen — ist wertvoll, ändert aber nicht immer, wie der Körper reagiert. Sie können rational wissen, dass Sie sicher sind, und dennoch spüren, wie sich Ihre Brust zusammenzieht, sobald eine bestimmte E-Mail eintrifft. Genau in dieser Kluft kann körperorientierte Arbeit helfen. Indem SE das Nervensystem direkt einbezieht, unterstützt es Veränderung auf der Ebene, auf der Stress tatsächlich gehalten wird." },
          { type: "p", text: "In meiner eigenen Arbeit ist Somatic Experiencing eine Perspektive unter mehreren. Ich schöpfe daraus neben systemischen und achtsamkeitsbasierten Ansätzen, je nachdem, was sich für den Menschen vor mir hilfreich anfühlt. Für manche Menschen ist die Aufmerksamkeit für den Körper das fehlende Stück; für andere ist sie ein Strang einer umfassenderen Erkundung." },
          { type: "h2", text: "Eine sanftere Beziehung zu den eigenen Reaktionen" },
          { type: "p", text: "Das vielleicht still wirksamste, was SE bietet, ist eine Veränderung in der Beziehung zu den eigenen Reaktionen. Statt Ihre Anspannung zu bekämpfen oder sich von Ihrer Erschöpfung erschrecken zu lassen, beginnen Sie, diesen Zuständen mit Neugier zu begegnen — als bedeutsame Signale eines Systems, das sein Bestes getan hat, um Sie zu schützen. Von dort aus haben Erdung und Stabilität Raum zu wachsen." },
        ],
      },
      {
        slug: "why-big-life-changes-feel-harder",
        title: "Warum sich große Lebensveränderungen schwerer anfühlen, als sie „sollten\"",
        category: "Lebensübergänge",
        date: "2026-04-22",
        readingTime: "5",
        excerpt:
          "Warum Übergänge emotional fordernd sind, selbst wenn sie positiv sind — und was hilft, wenn Sie sich durch Veränderung hindurch unsicher fühlen.",
        body: [
          { type: "p", text: "Ein neuer Job. Ein Umzug in eine Stadt, die Sie gewählt haben. Eine Beziehung, die beginnt, oder ein lang gehegter Traum, der endlich Wirklichkeit wird. Nach jedem äußeren Maßstab läuft es gut — und doch fühlen Sie sich unerwartet unsicher, müde oder seltsam traurig. Wenn ein Teil von Ihnen leise fragt, warum das so schwer ist, obwohl nichts falsch läuft, sind Sie damit nicht allein." },
          { type: "p", text: "Wir neigen anzunehmen, dass schwierige Gefühle zu schwierigen Ereignissen gehören. Wenn uns also eine positive Veränderung desorientiert, fügen wir oft eine zweite Schicht der Belastung auf die erste: So sollte ich mich nicht fühlen. Aber Übergänge sind ihrer Natur nach fordernd — nicht weil etwas schiefgelaufen ist, sondern weil Veränderung uns viel abverlangt, selbst wenn sie willkommen ist." },
          { type: "h2", text: "Jeder Gewinn enthält einen Verlust" },
          { type: "p", text: "Unter fast jeder bedeutsamen Veränderung liegt etwas, das zurückgelassen wird. Eine neue Rolle bedeutet, die Geborgenheit der Kompetenz loszulassen, die Sie in der alten hatten. Ein Schritt nach vorn im Leben kann leise die Tür zu einer Version Ihrer selbst oder einer Lebensweise schließen, an der Sie hingen. Diese Verluste sind oft unsichtbar — auch für uns selbst —, was mit ein Grund dafür ist, dass die Gefühle, die mit ihnen kommen, so verwirrend sein können." },
          { type: "p", text: "Den Verlust im Gewinn zu benennen ist oft eine Erleichterung. Es erklärt die Trauer, die unerwartet neben echter Vorfreude sitzen kann. Sie sind nicht undankbar. Sie verarbeiten eine reale Veränderung." },
          { type: "h2", text: "Übergänge verlangen vom Nervensystem, sich neu einzustellen" },
          { type: "p", text: "Vertrautheit ist eine Form von Sicherheit. Selbst Routinen, über die wir uns beklagen, bieten eine Art Gerüst, auf das sich das Nervensystem verlässt. Wenn sich dieses Gerüst verändert — neue Umgebung, neue Menschen, neue Erwartungen —, muss der Körper härter arbeiten und sich an alles aufs Neue orientieren. Diese zusätzliche Anstrengung ist real, und sie ist ermüdend, weshalb Übergänge so oft mit einer Erschöpfung einhergehen, die reine Logik nicht erklären kann." },
          { type: "ul", items: [
            "Das „Dazwischen\"-Gefühl — nicht mehr, wer Sie waren, noch nicht, wer Sie werden.",
            "Erhöhte Empfindsamkeit, Selbstzweifel oder eine kürzere Zündschnur als sonst.",
            "Müdigkeit, die sich durch Ruhe nicht ganz auflöst.",
            "Wellen von Gefühlen, die im Verhältnis zu den Ereignissen unangemessen scheinen.",
          ] },
          { type: "h2", text: "Der Raum dazwischen ist kein Fehler" },
          { type: "p", text: "Viele Traditionen beschreiben Übergang als eine Schwelle — einen liminalen Raum zwischen einer alten Struktur und einer neuen. Er ist gerade deshalb unbequem, weil er ungeformt ist. Aber er ist auch der Ort, an dem echte Neuorientierung geschieht. Sich zu beeilen, um sich gefestigt zu fühlen, kann genau den Prozess kurzschließen, der es etwas Neuem erlaubt, Gestalt anzunehmen." },
          { type: "p", text: "Was meist hilft, ist Erlaubnis: sich unsicher fühlen zu dürfen, ohne es als Problem zu behandeln, das gelöst werden muss; sich in einem menschlichen Tempo zu bewegen; in Kontakt mit Ihren Werten zu bleiben, während sich die äußeren Einzelheiten neu ordnen." },
          { type: "h2", text: "Begleitung durch das Dazwischen" },
          { type: "p", text: "Beratung kann einen verlässlichen Bezugspunkt bieten, während sich alles andere verschiebt — einen reflexiven Raum, um zu verstehen, was zurückgelassen wird, was von Ihnen verlangt wird und was am meisten zählt, während Sie sich vorwärtsbewegen. Nicht um den Übergang zu beschleunigen, sondern um Ihnen zu helfen, mit mehr Stabilität und Selbstverständnis hindurchzugehen." },
          { type: "p", text: "Wenn eine Veränderung, die sich gut anfühlen sollte, Sie verletzlicher zurücklässt, als Sie erwartet haben, nehmen Sie es als Zeichen dafür, wie viel der Moment Ihnen abverlangt — und wie sehr er zählt. Das ist keine Schwäche. Es ist die ganz gewöhnliche, fordernde Arbeit des Werdens." },
        ],
      },
      {
        slug: "built-a-life-abroad-not-at-home",
        title: "Wenn Sie sich im Ausland ein Leben aufgebaut haben, sich aber nicht zu Hause fühlen",
        category: "Expat-Leben",
        date: "2026-04-02",
        readingTime: "5",
        excerpt:
          "Warum emotionale Einsamkeit in einem neuen Land fortbestehen kann und wie sich subtile Entfremdung im Alltag von Expats zeigt.",
        body: [],
        draft: true,
      },
      {
        slug: "growing-apart-growing-together",
        title: "Auseinanderwachsen, Zusammenwachsen: Distanz in langjährigen Beziehungen navigieren",
        category: "Beziehungen",
        date: "2026-03-18",
        readingTime: "6",
        excerpt:
          "Emotionale Distanz in Paaren verstehen und praktische erste Schritte zurück zur Verbindung.",
        body: [],
        draft: true,
      },
      {
        slug: "love-across-cultures",
        title: "Liebe über Kulturen hinweg: Interkulturelle Beziehungen navigieren",
        category: "Internationale & interkulturelle Beziehungen",
        date: "2026-03-04",
        readingTime: "6",
        excerpt:
          "Die Freuden und Herausforderungen interkultureller Partnerschaften und wie man ein gemeinsames Verständnis aufbaut.",
        body: [],
        draft: true,
      },
      {
        slug: "mindfulness-is-not-clearing-your-mind",
        title: "Bei Achtsamkeit geht es nicht darum, den Kopf frei zu bekommen — das ist sie wirklich",
        category: "Achtsamkeit",
        date: "2026-02-19",
        readingTime: "5",
        excerpt:
          "Verbreitete Mythen entkräften und wie eine regelmäßige Praxis die emotionale Regulation unterstützt.",
        body: [],
        draft: true,
      },
      {
        slug: "burnout-in-leadership",
        title: "Überforderung in Führungsrollen: Warum Führungskräfte sie am längsten verbergen",
        category: "Überforderung in Führungsrollen",
        date: "2026-02-05",
        readingTime: "6",
        excerpt:
          "Die besonderen Belastungen, denen Führungskräfte ausgesetzt sind, und warum psychologische Unterstützung auf jeder Ebene zählt.",
        body: [],
        draft: true,
      },
      {
        slug: "workplace-wellbeing-that-works",
        title: "Was macht ein Programm für Wohlbefinden am Arbeitsplatz wirklich wirksam?",
        category: "Wohlbefinden am Arbeitsplatz",
        date: "2026-01-22",
        readingTime: "6",
        excerpt:
          "Wie nachhaltige Kulturen des Wohlbefindens entstehen, über einmalige Veranstaltungen hinaus.",
        body: [],
        draft: true,
      },
      {
        slug: "resilience-is-not-toughing-it-out",
        title: "Bei Widerstandskraft geht es nicht darum, durchzubeißen",
        category: "Widerstandskraft in Zeiten der Veränderung",
        date: "2026-01-08",
        readingTime: "5",
        excerpt:
          "Widerstandskraft neu denken als Flexibilität und Erholung, nicht nur als Durchhalten.",
        body: [],
        draft: true,
      },
    ],
  },

  faq: {
    metaTitle: "FAQ — Theresa Frische",
    metaDescription:
      "Antworten auf häufige Fragen zu Online-Beratungssitzungen, Sprachen, Format, Somatic Experiencing und der Weekly Wellbeing Community.",
    eyebrow: "FAQ",
    heading: "Häufig gestellte Fragen",
    intro:
      "Einige der Fragen, die Menschen vor dem Einstieg oft stellen. Wenn Ihre Frage nicht dabei ist, melden Sie sich gerne bei mir.",
    items: [
      {
        q: "Wie fange ich an?",
        a: "Der erste Schritt ist ein kostenloses 15-minütiges Kennenlerngespräch. Es ist ein entspanntes, unverbindliches Gespräch, in dem Sie teilen können, was Sie herführt, Ihre Fragen stellen und ein Gefühl dafür bekommen, ob sich eine Zusammenarbeit stimmig anfühlt.",
      },
      {
        q: "In welchen Sprachen bieten Sie Sitzungen an?",
        a: "Die Sitzungen sind auf Deutsch und Englisch verfügbar, für Einzelpersonen und Paare international.",
      },
      {
        q: "Finden die Sitzungen online oder vor Ort statt?",
        a: "Einzel- und Paarsitzungen werden online per Video angeboten, sodass ich mit Klient:innen international arbeiten kann. Für Organisationen können Workshops und Trainings online oder vor Ort in Deutschland und der Schweiz durchgeführt werden.",
      },
      {
        q: "Wie lange dauern die Sitzungen und wie oft treffen wir uns?",
        a: "Einzelsitzungen dauern 60 Minuten; Paarsitzungen 60–120 Minuten. Wie oft wir uns treffen, vereinbaren wir gemeinsam, je nachdem, was sich für Ihre Situation stimmig anfühlt.",
      },
      {
        q: "Was ist Somatic Experiencing und wie wird es in unseren Sitzungen genutzt?",
        a: "Somatic Experiencing ist ein körperorientierter Ansatz für die Arbeit mit Stress und überwältigenden Erfahrungen. Er unterstützt das Nervensystem dabei, gehaltene Anspannung zu lösen und zu einem größeren Gefühl von Sicherheit und Regulation zurückzukehren. Er wird neben systemischen und achtsamkeitsbasierten Ansätzen genutzt, je nachdem, was sich für Sie hilfreich anfühlt.",
      },
      {
        q: "Wird das von der Krankenkasse übernommen?",
        a: "Die Sitzungen sind Selbstzahlerleistungen und werden weder von der gesetzlichen noch von der privaten Krankenversicherung erstattet. Das ermöglicht eine flexible, vertrauliche Art zu arbeiten — ohne Schriftverkehr mit der Versicherung, ohne Meldepflichten und ohne die Notwendigkeit, Ihr Erleben in klinische Kategorien zu pressen.",
      },
      {
        q: "Wie unterscheidet sich Paarberatung von Einzelberatung?",
        a: "Die Paarberatung richtet den Blick auf beziehungsbezogene Muster — Kommunikation, Verbindung und wiederkehrende Konflikte. Die Sitzungen sind in der Regel länger (60–120 Minuten), um Raum dafür zu schaffen, dass beide Perspektiven gehört werden.",
      },
      {
        q: "Wie kann ich an der Weekly Wellbeing Community teilnehmen?",
        a: "Die Community trifft sich online über Teams, dienstags von 20:30–21:30, auf Englisch. Melden Sie sich über das Kontaktformular, um mehr Informationen und einen Link zur Teilnahme zu erhalten.",
      },
      {
        q: "Kann meine Organisation eine einzelne Sitzung buchen oder nur längere Programme?",
        a: "Beides. Ich biete alles von einzelnen Keynote-Vorträgen und Workshops (2–4 Stunden) bis hin zu mehrtägigen Trainings und strukturierten 8-Wochen-Programmen — zugeschnitten auf das, was Ihre Organisation braucht.",
      },
    ],
  },

  contact: {
    metaTitle: "Kontakt — Kennenlerngespräch buchen | Theresa Frische",
    metaDescription:
      "Melden Sie sich, um ein kostenloses 15-minütiges Kennenlerngespräch zu buchen oder Fragen zur Beratung, zur Weekly Wellbeing Community oder zur Zusammenarbeit mit Ihrer Organisation zu stellen.",
    eyebrow: "Kontakt",
    heading: "Kostenloses Kennenlerngespräch buchen",
    lead: "Teilen Sie ein wenig davon, was Sie herführt, und ich melde mich bei Ihnen. Sie müssen nicht ins Detail gehen — ein paar Zeilen genügen. In der Regel antworte ich innerhalb von 2–3 Werktagen.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "sie@beispiel.de",
      messageLabel: "Nachricht",
      messagePlaceholder: "Ein paar Worte dazu, was Sie herführt und was Sie fragen möchten.",
      consentLabel: "Ich habe die {privacy} gelesen und willige ein, dass meine Angaben verwendet werden, um meine Anfrage zu beantworten.",
      submit: "Nachricht senden",
      submitting: "Wird gesendet…",
      successTitle: "Vielen Dank — Ihre Nachricht ist auf dem Weg.",
      successBody: "Ich habe Ihre Nachricht erhalten und melde mich innerhalb von 2–3 Werktagen. Wenn Ihr Anliegen dringend ist, nutzen Sie bitte eine der hier aufgeführten Krisenanlaufstellen.",
      errorTitle: "Etwas ist schiefgelaufen.",
      errorGeneric: "Ihre Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt an theresafrische@gmail.com.",
      validation: {
        name: "Bitte geben Sie Ihren Namen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        message: "Bitte geben Sie eine kurze Nachricht ein.",
        consent: "Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.",
      },
    },
    directHeading: "Lieber direkt schreiben?",
    directBody: "Sie können mich auch gerne per E-Mail oder Telefon erreichen.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
  },

  impressum: {
    metaTitle: "Impressum — Theresa Frische",
    metaDescription: "Impressum für die Beratungspraxis von Theresa Frische.",
    heading: "Impressum",
    blocks: [
      {
        heading: "Angaben gemäß § 5 DDG",
        lines: [
          "Theresa Frische",
          "Systemische & Integrative Beraterin (Beratung)",
          "Anschrift: [Adresse wird ergänzt]",
          "Deutschland",
        ],
      },
      {
        heading: "Kontakt",
        lines: ["Telefon: +49 157 38920374", "E-Mail: theresafrische@gmail.com"],
      },
      {
        heading: "Umsatzsteuer / Steuerstatus",
        lines: [
          "Kleinunternehmer gemäß § 19 UStG — USt-Status wird bestätigt; kein Ausweis der Umsatzsteuer auf Rechnungen (Kleinunternehmer­regelung).",
        ],
      },
      {
        heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        lines: ["Theresa Frische (Anschrift wie oben)"],
      },
      {
        heading: "Art der Praxis",
        lines: [
          "Dies ist eine Beratungspraxis (Beratung). Die angebotenen Leistungen sind Beratung, supervisionsartige Begleitung, Workshops und Wohlbefindensprogramme. Diese Praxis bietet keine Psychotherapie und keine medizinische Versorgung an.",
        ],
      },
      {
        heading: "EU-Online-Streitbeilegung",
        lines: [
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.",
          "Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bin ich nicht verpflichtet und nicht bereit.",
        ],
      },
      {
        heading: "Haftung für Inhalte",
        lines: [
          "Als Diensteanbieterin bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.",
        ],
      },
      {
        heading: "Haftung für Links",
        lines: [
          "Diese Seite kann Links zu externen Websites Dritter enthalten, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets die jeweilige Anbieterin oder Betreiberin verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.",
        ],
      },
      {
        heading: "Urheberrecht",
        lines: [
          "Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Urheberin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        ],
      },
    ],
  },

  privacy: {
    metaTitle: "Datenschutzerklärung — Theresa Frische",
    metaDescription: "Wie personenbezogene Daten auf dieser Website verarbeitet werden, im Einklang mit der DSGVO und dem Schweizer nDSG.",
    heading: "Datenschutzerklärung",
    intro:
      "Ihre Privatsphäre ist wichtig. Diese Erklärung beschreibt, welche personenbezogenen Daten bei der Nutzung dieser Website erhoben werden, warum und welche Rechte Sie haben. Sie ist so verfasst, dass sie den Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO) und des Schweizer Bundesgesetzes über den Datenschutz (nDSG / DSG) entspricht.",
    sections: [
      {
        heading: "Verantwortlicher",
        paras: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
          "Theresa Frische — Systemische & Integrative Beraterin. Anschrift: [Adresse wird ergänzt]. E-Mail: theresafrische@gmail.com. Telefon: +49 157 38920374.",
        ],
      },
      {
        heading: "Grundsatz der Datenminimierung",
        paras: [
          "Diese Website ist darauf ausgelegt, so wenige personenbezogene Daten wie möglich zu erheben. Es gibt kein Nutzer-Tracking, keine Analyse, keine Werbe-Pixel, und es werden keine Cookies zu Marketing- oder Analysezwecken gesetzt. Über diese Website werden keine besonderen Kategorien von Daten (etwa Gesundheitsdaten) erfragt, und Sie werden gebeten, über das Kontaktformular keine sensiblen Angaben wie Gesundheitsinformationen zu teilen.",
        ],
      },
      {
        heading: "Kontaktformular",
        paras: [
          "Wenn Sie das Kontaktformular nutzen, werden folgende Daten verarbeitet: Ihr Name, Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht. Diese Informationen werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen), soweit sich Ihre Anfrage auf Beratungsleistungen bezieht, sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für die Verarbeitung Ihrer Nachricht, die Sie durch das Absenden des Formulars erteilen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
          "Ihre Übermittlung wird mir per E-Mail zugestellt und nicht in einer Datenbank auf dieser Website gespeichert.",
        ],
      },
      {
        heading: "Auftragsverarbeiter für den E-Mail-Versand (Resend)",
        paras: [
          "Nachrichten aus dem Kontaktformular werden über Resend übermittelt, einen E-Mail-Versanddienst der Resend, Inc. Resend verarbeitet die in Ihrer Nachricht enthaltenen Daten (Name, E-Mail-Adresse, Nachrichtentext) in meinem Auftrag ausschließlich zum Zweck der Zustellung der E-Mail an mich.",
          "Resend handelt als Auftragsverarbeiter nach Art. 28 DSGVO, und es besteht ein Auftragsverarbeitungsvertrag. Soweit Daten an Server außerhalb der EU/des EWR übertragen werden, ist die Übertragung durch geeignete Maßnahmen wie die EU-Standardvertragsklauseln abgesichert.",
        ],
      },
      {
        heading: "Hosting (Netlify)",
        paras: [
          "Diese Website wird von Netlify (Netlify, Inc.) gehostet. Wenn Sie die Website besuchen, erhebt und speichert Netlify automatisch Informationen, die Ihr Browser in Server-Logdateien übermittelt. Dazu können Ihre IP-Adresse, Datum und Uhrzeit der Anfrage, die aufgerufene Seite, die Referrer-URL sowie Ihr Browser und Betriebssystem gehören.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren, stabilen und effizienten Bereitstellung der Website). Netlify handelt als Auftragsverarbeiter nach Art. 28 DSGVO. Da Netlify in den Vereinigten Staaten ansässig ist, können Daten dorthin übertragen werden; solche Übertragungen sind durch geeignete Maßnahmen wie die EU-Standardvertragsklauseln abgesichert.",
        ],
      },
      {
        heading: "Speicherdauer",
        paras: [
          "Personenbezogene Daten werden nur so lange aufbewahrt, wie es für den Zweck, zu dem sie erhoben wurden, erforderlich ist. Per E-Mail eingegangene Anfragen werden so lange aufbewahrt, wie es zur Bearbeitung Ihres Anliegens und gegebenenfalls zur Erfüllung gesetzlicher Aufbewahrungspflichten nötig ist, und anschließend gelöscht. Server-Logdateien werden vom Hosting-Anbieter zu Sicherheitszwecken für einen begrenzten Zeitraum aufbewahrt.",
        ],
      },
      {
        heading: "Cookies und Analyse",
        paras: [
          "Diese Website verwendet keine Analyse- oder Tracking-Cookies und bindet keine Werbung oder Social-Media-Tracking Dritter ein. Es werden nur technisch notwendige Funktionen genutzt, die für den Betrieb der Website erforderlich sind. Sollte künftig jemals eine Analyse eingeführt werden, wird diese Erklärung aktualisiert und, soweit erforderlich, vorab Ihre Einwilligung eingeholt.",
        ],
      },
      {
        heading: "Ihre Rechte",
        paras: ["Nach der DSGVO und dem Schweizer nDSG haben Sie folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:"],
        bullets: [
          "Das Recht auf Auskunft über die zu Ihnen gespeicherten personenbezogenen Daten.",
          "Das Recht auf Berichtigung unrichtiger oder unvollständiger Daten.",
          "Das Recht auf Löschung („Recht auf Vergessenwerden\").",
          "Das Recht auf Einschränkung der Verarbeitung.",
          "Das Recht auf Datenübertragbarkeit.",
          "Das Recht, der auf berechtigten Interessen beruhenden Verarbeitung zu widersprechen.",
          "Das Recht, eine Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.",
          "Das Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen.",
        ],
      },
      {
        heading: "Beschwerderecht",
        paras: [
          "Wenn Sie der Auffassung sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen — insbesondere in dem EU-Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts der mutmaßlichen Verletzung, oder für die Schweiz beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB).",
        ],
      },
      {
        heading: "Aktualisierungen dieser Erklärung",
        paras: [
          "Diese Datenschutzerklärung kann aktualisiert werden, um Änderungen an der Website oder an gesetzlichen Anforderungen Rechnung zu tragen. Es gilt stets die aktuelle Fassung.",
        ],
      },
    ],
  },

  notFound: {
    title: "Diese Seite konnte nicht gefunden werden",
    body: "Die Seite, die Sie suchen, wurde möglicherweise verschoben. Lassen Sie uns zu einem guten Ausgangspunkt zurückkehren.",
    cta: { label: "Zur Startseite", href: "/de" },
  },
};
