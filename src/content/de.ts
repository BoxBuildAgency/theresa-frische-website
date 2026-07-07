import type { SiteContent } from "./types";
import { blogPostsDe } from "./blog/posts.de";
import { faqCategoriesDe } from "./faq/faq.de";

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
      { label: "KI-Info", href: "/de/ai-info" },
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
      "Online-Beratung auf Deutsch und Englisch für Einzelpersonen und Paare in Zeiten von Veränderung, Umbruch, Überforderung und einem Leben zwischen Ländern und Kulturen. Buchen Sie Ihr kostenloses Kennenlerngespräch (15 Minuten).",
    eyebrow: "Systemisch · Somatisch · Integrativ",
    heroTitle: "Ein Raum für das, was",
    heroTitleAccent: "sich in Ihnen verändert",
    heroLead:
      "Für Einzelpersonen und Paare in Zeiten von Veränderung und Umbruch — und für die leiseren Belastungen, für die es oft keine Worte gibt.",
    heroParas: [
      "Das Leben verändert sich selten geradlinig. Meist verschiebt sich etwas ganz allmählich — bis sich in Ihnen etwas anders anfühlt als zuvor.",
      "Nach außen funktionieren Sie vielleicht noch, während innerlich Anspannung, Erschöpfung oder das leise Gefühl wächst, sich selbst fremd geworden zu sein.",
      "Viele Menschen suchen Unterstützung nicht, weil etwas zerbrochen ist, sondern weil sich etwas verschoben hat — und weil das, was früher getragen hat, nicht mehr recht trägt.",
    ],
    heroEmphasis:
      "In dieser Arbeit geht es nicht darum, etwas zu reparieren, das nicht mehr funktioniert. Es geht darum, einen geschützten Raum zu schaffen, in dem Sie sich selbst besser verstehen und sich einem Leben annähern, das zu Ihren Werten passt.",
    heroPrimary: { label: "Kennenlerngespräch buchen", href: "/de/contact" },
    heroSecondary: { label: "Angebote entdecken", href: "/de/work-together" },
    testimonial: {
      text: "Theresa schafft einen Raum, der sich sicher, geerdet und zutiefst tragend anfühlt. Ich bin widerstandsfähiger und präsenter geworden und fühle mich wieder stärker mit mir selbst verbunden.",
      attribution: "Klient:in",
    },
    audience: {
      eyebrow: "Schwerpunkte",
      heading: "Für wen diese Arbeit gedacht ist",
      intro:
        "Diese Arbeit ist für Menschen in bedeutsamen Übergängen — wenn das Innere nach etwas anderem verlangt als nach dem, was bisher vertraut war.",
      items: [
        {
          title: "Lebensübergänge",
          body: "Umzug, Trennung, beruflicher Wandel, Verlust, Elternschaft — Veränderungen, die einiges an innerer Anpassung verlangen.",
        },
        {
          title: "Beziehungen",
          body: "Kommunikation, emotionale Distanz, wiederkehrende Konflikte — und der Weg zurück zu Verständnis und Nähe.",
        },
        {
          title: "Identität & Orientierung",
          body: "Phasen der Unsicherheit, Neuorientierung und Fragen nach Sinn und Richtung im Leben.",
        },
        {
          title: "Leben zwischen Ländern",
          body: "Was es bedeutet, zwischen Ländern, Kulturen und immer wieder neuen sozialen Umfeldern zu leben.",
        },
        {
          title: "Überforderung & Erschöpfung",
          body: "Begleitung dabei, wieder in Verbindung und ins Gleichgewicht zu kommen, wenn die eigenen Kräfte aufgebraucht scheinen.",
        },
        {
          title: "Persönliches Wachstum",
          body: "Mehr Klarheit, emotionale Widerstandskraft und ein stabileres Selbstgefühl mitten in der Veränderung.",
        },
      ],
    },
    approach: {
      eyebrow: "Mein Ansatz",
      heading: "Integrativ und kontextorientiert",
      intro:
        "Statt einer festen Methode zu folgen, schöpfe ich aus mehreren, einander ergänzenden Perspektiven, um jedem Menschen mit Feingefühl zu begegnen. Im Zentrum steht eine mitfühlende Aufmerksamkeit — für das, was sich in Ihnen, in Ihren Beziehungen und im größeren Zusammenhang Ihres Lebens zeigt.",
      items: [
        {
          title: "Systemische Beratung",
          body: "Wir schauen auf Muster in Ihren Beziehungen und Lebensumständen — und darauf, wie sie Ihr Erleben und Ihren Umgang mit dem Leben prägen.",
        },
        {
          title: "Körperwahrnehmung (Somatic Awareness)",
          body: "Aufmerksamkeit dafür, wie der Körper auf Stress und Veränderung reagiert — als Weg zu mehr Regulation, Erdung und innerer Stabilität.",
        },
        {
          title: "Teile-Arbeit (Parts Work)",
          body: "Ein neugieriger, mitfühlender Blick auf die verschiedenen Anteile in Ihnen, die widersprüchliche Bedürfnisse, Ängste oder Reaktionen tragen — hin zu mehr innerem Zusammenhalt.",
        },
        {
          title: "Achtsamkeitsbasierte Praxis",
          body: "Ein wacheres Gespür für Gedanken und eingespielte Reaktionsmuster — damit mehr Raum und Wahlfreiheit entsteht, wie Sie reagieren.",
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
        "Bereit für den ersten Schritt? Buchen Sie Ihr kostenloses Kennenlerngespräch (15 Minuten) — ein entspannter, unverbindlicher Einstieg.",
    },
  },

  about: {
    metaTitle: "Über mich — Theresa Frische",
    metaDescription:
      "Theresa Frische ist Systemische & Integrative Beraterin und begleitet Internationals, Expats und Paare durch Veränderung. M.Sc. Clinical Psychology · Somatic Experiencing Practitioner.",
    eyebrow: "Über mich",
    name: "Theresa Frische",
    subtitle: "Eine Beraterin für Menschen im Übergang.",
    credentials:
      "M.Sc. Clinical Psychology · Somatic Experiencing Practitioner · Systemische & Integrative Beraterin",
    lead: "Seit über acht Jahren begleite ich Einzelpersonen und Organisationen durch bedeutsame Veränderung — mit einer tiefen Aufmerksamkeit für den ganzen Menschen.",
    intro: [
      "Ich weiß, wie es sich anfühlt, wenn das Leben zu viel wird — wenn der Druck steigt, Beziehungen sich anspannen oder Sie den festen Boden unter den Füßen verlieren.",
      "Mit der Zeit habe ich verstanden, wie eng unser Nervensystem, unsere Beziehungen und unsere Lebensumstände miteinander verwoben sind. Gerät ein Bereich unter Druck, wirkt sich das oft auf alles andere aus — darauf, wie wir uns fühlen, wie wir in Verbindung gehen und wie wir uns durchs Leben bewegen. Dieses Verständnis steht im Zentrum meiner Arbeit.",
    ],
    imageAlt: "Porträt von Theresa Frische, Systemische & Integrative Beraterin, lächelnd am Fenster.",
    lived: {
      heading: "Ein Leben über Grenzen hinweg",
      body: [
        "Mein eigenes Leben hat mich durch verschiedene Länder geführt, durch Fern- und interkulturelle Beziehungen und durch das Ankommen in immer neuen kulturellen und beruflichen Umfeldern. Bevor ich zur Psychologie kam, habe ich zeitgenössischen Tanz studiert und mich in kontemplative Praxis vertieft.",
        "Diese Erfahrungen haben mir ein tiefes Gespür dafür gegeben, was es heißt, im Übergang zu sein — nicht nur äußerlich, sondern auch innerlich: die Unsicherheit, das Gefühl der Orientierungslosigkeit und den Wunsch, mitten in der Veränderung Halt zu finden.",
      ],
      emphasis:
        "So einzigartig die Geschichte jedes Menschen auch ist — die innere Landschaft, die große Lebensübergänge und komplexe Beziehungen oft mit sich bringen, ist mir vertraut.",
    },
    philosophy: {
      heading: "Den Menschen als Ganzes sehen",
      body: [
        "Ich bin überzeugt: Nachhaltiges Wohlbefinden entsteht dort, wo ein Mensch als Ganzes gesehen wird — im Zusammenspiel von Körper, Geist und sozialem Umfeld.",
        "In meiner Arbeit verbinde ich evidenzbasierte Psychologie mit einem körper- und systemorientierten Ansatz. Statt in Schubladen zu denken, schaue ich auf die Zusammenhänge dahinter — darauf, wie Lebensgeschichte, Nervensystem, Beziehungsmuster und Lebensumstände unser Erleben prägen.",
        "Mein Anliegen ist es, Menschen dabei zu begleiten, mehr innere Stabilität, Flexibilität und Widerstandskraft zu entwickeln — und ein erfülltes, werteorientiertes Leben zu gestalten, in Verbindung mit sich selbst und anderen.",
      ],
    },
    quotes: [
      { text: "Das Leben ist ein Gleichgewicht aus Festhalten und Loslassen.", attribution: "Rumi" },
      {
        text: "Ihre einfühlsame Art macht es leicht, sich zu öffnen. Ihr breites psychologisches Wissen aus ganz unterschiedlichen Ansätzen hat mir geholfen, so vieles zu verstehen und einzuordnen — sie als Begleiterin in meinem Leben zu haben, ist für mich unbezahlbar.",
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
      "Online-Beratung für Einzelpersonen und Paare auf Deutsch und Englisch. Beginnen Sie mit einem kostenlosen Kennenlerngespräch (15 Minuten).",
    eyebrow: "Zusammenarbeit",
    heading: "So beginnen wir",
    intro:
      "Die Sitzungen finden online statt, auf Deutsch und Englisch, für Einzelpersonen und Paare weltweit. Der einfachste erste Schritt ist ein kostenloses, unverbindliches Kennenlerngespräch.",
    discovery: {
      heading: "Kostenloses Kennenlerngespräch (15 Minuten)",
      intro:
        "Ein kurzes, entspanntes Gespräch, in dem Sie erzählen können, was Sie herführt, und wir gemeinsam spüren, ob eine Zusammenarbeit stimmig ist — ganz unverbindlich.",
      steps: [
        {
          title: "Kostenloses Kennenlerngespräch buchen",
          body: "Wählen Sie einen Zeitpunkt, der Ihnen passt. Wir sprechen kurz darüber, was Sie herführt.",
        },
        {
          title: "Spüren, ob es passt",
          body: "Ganz ohne Druck — dieses Gespräch ist einfach eine Gelegenheit, ein Gefühl für die Zusammenarbeit zu bekommen.",
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
      body: "Die Einzelberatung bietet einen vertraulichen, verlässlichen Raum, um zur Ruhe zu kommen und dem, was Sie gerade beschäftigt, einen Sinn zu geben. Die Sitzungen schöpfen aus systemischen, somatischen, teileorientierten und achtsamkeitsbasierten Ansätzen — ausgerichtet an dem, was gerade bei Ihnen ansteht.",
      meta: [
        { label: "Dauer", value: "60 Minuten" },
        { label: "Format", value: "Online (Video)" },
        { label: "Sprachen", value: "Deutsch & Englisch" },
      ],
    },
    couples: {
      heading: "Paarsitzungen",
      subheading: "Paarberatung",
      body: "Die Paarberatung unterstützt Partner:innen dabei, Muster der Entfremdung zu verstehen, wieder besser miteinander ins Gespräch zu kommen und zurück zu emotionaler Nähe zu finden. Die Sitzungen bieten einen geschützten Rahmen, in dem sich beide gehört fühlen und einander neu zuhören können.",
      meta: [
        { label: "Dauer", value: "60–120 Minuten" },
        { label: "Format", value: "Online (Video)" },
        { label: "Sprachen", value: "Deutsch & Englisch" },
      ],
    },
    closing: {
      heading: "Bereit für den ersten Schritt?",
      body: "Buchen Sie Ihr kostenloses Kennenlerngespräch (15 Minuten) — ein entspannter, unverbindlicher Einstieg.",
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
      "Mit über acht Jahren Erfahrung unterstütze ich Organisationen in Deutschland und der Schweiz dabei, eine Kultur zu entwickeln, die psychisches Wohlbefinden ernst nimmt. Stress im Job, schwierige Kommunikation und emotionale Erschöpfung haben spürbare Folgen — für den Einzelnen wie für die ganze Organisation. Gemeinsam mit Unternehmen und Institutionen schaffe ich psychologische Sicherheit, Widerstandskraft und Rahmenbedingungen, unter denen Menschen dauerhaft ihr Bestes geben können.",
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
          title: "Keynotes",
          body: "Inspirierende Impulse zu mentaler Gesundheit, Widerstandskraft und Achtsamkeit — für Konferenzen, große Gruppen oder Team-Events. (30–60 Min · online oder vor Ort)",
        },
        {
          title: "Workshops & Seminare",
          body: "Interaktive Formate, die evidenzbasierte psychologische Ansätze mit praktischen Werkzeugen und Reflexion verbinden. (2–4 Stunden · online oder vor Ort)",
        },
        {
          title: "Vertiefende Trainings",
          body: "Mehrtägige Trainings für Führungskräfte und Teams, die Kompetenzen rund um Wohlbefinden nachhaltig aufbauen. (1–3 Tage · online oder vor Ort)",
        },
        {
          title: "8-Wochen-Programme",
          body: "Strukturierte Programme, die Stressreduktion, Achtsamkeit und emotionale Regulation über einen längeren Zeitraum verankern. (8 Wochen · 15–60 Min wöchentlich)",
        },
      ],
    },
    individual: {
      heading: "Beratung für Mitarbeitende & Führungskräfte",
      intro:
        "Vertrauliche Einzelbegleitung als Teil eines Mitarbeitendenunterstützungsprogramms — online und nach Vereinbarung.",
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
      body: "Meine Art zu begleiten ist psychologisch fundiert und beziehungsorientiert, ruhig und zugewandt — sie verbindet fundiertes Wissen mit praktischen Werkzeugen für den Alltag.",
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
      body: "Für Anfragen zu Workshops, Programmen oder der Begleitung von Führungskräften melden Sie sich gerne direkt. Gemeinsam finden wir heraus, was für Ihren Kontext am hilfreichsten ist.",
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
      "Die Weekly Wellbeing Community bietet ein geerdetes, unterstützendes Umfeld, um zur Ruhe zu kommen, wieder in Verbindung zu gehen und für Ihr emotionales Wohlbefinden zu sorgen. Die Sitzungen verbinden Achtsamkeitsübungen, Regulation des Nervensystems, Reflexion und ein mitfühlendes Miteinander — in einer Atmosphäre, die ruhig, einladend und frei von Bewertung ist.",
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
      body: "Wenn Sie mehr über die Weekly Wellbeing Community erfahren möchten, melden Sie sich gerne bei mir.",
    },
  },

  blog: {
    metaTitle: "Blog — Gedanken & Perspektiven | Theresa Frische",
    metaDescription:
      "Durchdachte, psychologisch fundierte Texte über emotionales Wohlbefinden, Beziehungen, Stress, Achtsamkeit und den Umgang mit Veränderung.",
    eyebrow: "Blog",
    heading: "Gedanken & Perspektiven",
    intro:
      "Durchdachte, psychologisch fundierte Texte über emotionales Wohlbefinden, Beziehungen, Stress, Achtsamkeit und den Umgang mit Veränderung — ruhig, reflektiert und verständlich.",
    allLabel: "Alle",
    readMore: "Weiterlesen",
    backToBlog: "Zurück zu allen Artikeln",
    relatedHeading: "Weiterlesen",
    authorHeading: "Über die Autorin",
    authorBody:
      "Theresa Frische ist Systemische & Integrative Beraterin und arbeitet online mit Internationals, Expats und Paaren, die sich in Zeiten der Veränderung befinden. Die Sitzungen finden auf Deutsch und Englisch statt.",
    minRead: "Min. Lesezeit",
    posts: blogPostsDe,
  },

  faq: {
    metaTitle: "FAQ — Theresa Frische",
    metaDescription:
      "Antworten auf häufige Fragen zu Online-Beratungssitzungen, Sprachen, Format, Somatic Experiencing und der Weekly Wellbeing Community.",
    eyebrow: "FAQ",
    heading: "Häufig gestellte Fragen",
    intro:
      "Einige Fragen, die vor dem Einstieg häufig aufkommen. Wenn Ihre Frage nicht dabei ist, melden Sie sich gerne bei mir.",
    jumpLabel: "Zu einem Thema springen",
    categories: faqCategoriesDe,
  },

  contact: {
    metaTitle: "Kontakt — Kennenlerngespräch buchen | Theresa Frische",
    metaDescription:
      "Melden Sie sich, um ein kostenloses Kennenlerngespräch (15 Minuten) zu buchen oder Fragen zur Beratung, zur Weekly Wellbeing Community oder zur Zusammenarbeit mit Ihrer Organisation zu stellen.",
    eyebrow: "Kontakt",
    heading: "Kostenloses Kennenlerngespräch buchen",
    lead: "Schreiben Sie mir kurz, was Sie herführt, und ich melde mich bei Ihnen. Sie müssen nicht ins Detail gehen — ein paar Zeilen genügen. In der Regel antworte ich innerhalb von 2–3 Werktagen.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "sie@beispiel.de",
      messageLabel: "Nachricht",
      messagePlaceholder: "Ein paar Worte dazu, was Sie herführt und was Sie gerne fragen möchten.",
      consentLabel: "Ich habe die {privacy} gelesen und willige ein, dass meine Angaben verwendet werden, um meine Anfrage zu beantworten.",
      submit: "Nachricht senden",
      submitting: "Wird gesendet…",
      successTitle: "Vielen Dank — Ihre Nachricht ist unterwegs.",
      successBody: "Ich habe Ihre Nachricht erhalten und melde mich innerhalb von 2–3 Werktagen. Wenn Ihr Anliegen dringend ist, wenden Sie sich bitte an eine der hier aufgeführten Krisenanlaufstellen.",
      errorTitle: "Da ist etwas schiefgelaufen.",
      errorGeneric: "Ihre Nachricht ließ sich gerade nicht senden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt an theresafrische@gmail.com.",
      validation: {
        name: "Bitte geben Sie Ihren Namen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        message: "Bitte geben Sie eine kurze Nachricht ein.",
        consent: "Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.",
      },
    },
    directHeading: "Lieber direkt schreiben?",
    directBody: "Sie erreichen mich auch gerne per E-Mail oder telefonisch.",
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

  aiInfo: {
    metaTitle: "KI- & Zitier-Informationen — Theresa Frische",
    metaDescription:
      "Eine klare, sachliche Zusammenfassung der Beratungspraxis von Theresa Frische für KI-Assistenten und Antwortmaschinen: wer sie ist, was sie anbietet, in welchen Sprachen, für wen es gedacht ist und wie man beginnt.",
    eyebrow: "Für KI-Assistenten",
    heading: "Über diese Praxis — eine sachliche Zusammenfassung",
    intro:
      "Diese Seite fasst die Beratungspraxis von Theresa Frische klar und strukturiert zusammen — so, dass KI-Assistenten und Antwortmaschinen die Angaben präzise erfassen und zitieren können. Alle Angaben finden sich ausführlicher auch auf den übrigen Seiten.",
    updated: "Zuletzt geprüft: Juli 2026.",
    sections: [
      {
        heading: "Wer Theresa Frische ist",
        paras: [
          "Theresa Frische ist Systemische & Integrative Beraterin und bietet Online-Beratung für Einzelpersonen und Paare international an. Sie hat einen M.Sc. in Klinischer Psychologie, ist ausgebildete Somatic-Experiencing-Praktikerin mit fortgeschrittener systemischer Ausbildung und verfügt über mehr als acht Jahre Erfahrung in der Begleitung von Menschen und Organisationen durch Veränderung.",
        ],
      },
      {
        heading: "Was die Praxis anbietet",
        bullets: [
          "Einzelberatung — Online-Sitzungen zu zweit (60 Minuten).",
          "Paarberatung — Online-Sitzungen für Paare (60–120 Minuten).",
          "Weekly Wellbeing Community — eine wöchentliche Online-Gruppe für Achtsamkeit und Wohlbefinden (dienstags, auf Englisch).",
          "Für Organisationen — Impulsvorträge, Workshops, mehrtägige Trainings, 8-Wochen-Programme sowie vertrauliche Beratung für Mitarbeitende und Führungskräfte.",
        ],
      },
      {
        heading: "Format und Sprachen",
        bullets: [
          "Format: online (Video), weltweit. Die Arbeit mit Organisationen ist online oder vor Ort in Deutschland und der Schweiz möglich.",
          "Sprachen: Englisch und Deutsch.",
          "Verfügbarkeit: nach Vereinbarung.",
        ],
      },
      {
        heading: "Für wen es gedacht ist",
        paras: [
          "Die Praxis unterstützt leistungsstarke, kulturell vielfältige Internationals, Expats und Paare, die mit Veränderung, Übergängen, einem Umzug, Überforderung, Belastung, Spannungen in Beziehungen, Fragen von Identität und Orientierung sowie dem Leben zwischen Ländern und Kulturen zu tun haben.",
        ],
      },
      {
        heading: "Ansatz",
        paras: [
          "Die Arbeit ist integrativ und kontextorientiert und schöpft aus systemischer Beratung, körperorientierter Achtsamkeit (Somatic Experiencing), Teilearbeit und achtsamkeitsbasierter Praxis — passend zum jeweiligen Menschen und nicht als eine einzelne feste Methode.",
        ],
      },
      {
        heading: "Wie man beginnt",
        paras: [
          "Der erste Schritt ist ein kostenloses 15-minütiges Kennenlerngespräch — ein entspanntes, unverbindliches Gespräch. Die Sitzungen sind Selbstzahlerleistungen. Anfragen erfolgen über die Kontaktseite.",
        ],
      },
      {
        heading: "Was Beratung ist — und was nicht",
        paras: [
          "Dies ist eine Beratungspraxis (Beratung). Beratung ist keine Psychotherapie, keine medizinische Versorgung und kein Ersatz für eine von beiden; sie umfasst keine Diagnose und keine medizinische Behandlung. In Krisensituationen oder bei dringendem Hilfebedarf wenden Sie sich bitte an den örtlichen Notruf oder an eine Krisenhotline (zum Beispiel 112 in der EU).",
        ],
      },
      {
        heading: "Wichtige Seiten",
        bullets: [
          "Über mich: /de/about — Hintergrund und Ansatz von Theresa.",
          "Zusammenarbeit: /de/work-together — Einzel- und Paarberatung.",
          "Organisationen: /de/organisations — Wohlbefinden am Arbeitsplatz für Teams.",
          "Weekly Wellbeing: /de/weekly-wellbeing — die wöchentliche Online-Community.",
          "Blog: /de/blog — Beiträge zu Stress, Überforderung, Beziehungen, Übergängen und dem Leben im Ausland.",
          "FAQ: /de/faq — häufige Fragen zur Zusammenarbeit.",
          "Kontakt: /de/contact — ein kostenloses Kennenlerngespräch buchen.",
          "Englische Version: Jede Seite hat eine englische Entsprechung unter der Wurzel (diese Seite unter /ai-info).",
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
