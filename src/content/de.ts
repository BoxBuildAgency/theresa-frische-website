import type { SiteContent } from "./types";
import { wwmChildrenDe } from "./services/work-with-me";
import { orgChildrenDe } from "./services/organisations";
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
    { label: "Über mich", href: "/de/ueber-mich" },
    {
      label: "Angebot",
      href: "/de/angebot",
      children: [
        { label: "Psychologische Beratung", href: "/de/angebot/psychologische-beratung" },
        { label: "Paarberatung", href: "/de/angebot/paarberatung" },
        { label: "Burnout-Prävention", href: "/de/angebot/burnout-praevention" },
        { label: "Somatic Experiencing®", href: "/de/angebot/somatic-experiencing" },
      ],
    },
    {
      label: "Für Unternehmen",
      href: "/de/fuer-unternehmen",
      children: [
        { label: "Vorträge, Workshops & Kurse", href: "/de/fuer-unternehmen/vortraege-workshops-kurse" },
        { label: "Führungskräfte-Coaching", href: "/de/fuer-unternehmen/fuehrungskraefte-coaching" },
        { label: "Beratung für Mitarbeitende", href: "/de/fuer-unternehmen/beratung-mitarbeitende" },
      ],
    },
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
      { label: "Über mich", href: "/de/ueber-mich" },
      { label: "Angebot", href: "/de/angebot" },
      { label: "Psychologische Beratung", href: "/de/angebot/psychologische-beratung" },
      { label: "Paarberatung", href: "/de/angebot/paarberatung" },
      { label: "Burnout-Prävention", href: "/de/angebot/burnout-praevention" },
      { label: "Somatic Experiencing®", href: "/de/angebot/somatic-experiencing" },
      { label: "Für Unternehmen", href: "/de/fuer-unternehmen" },
      { label: "Vorträge, Workshops & Kurse", href: "/de/fuer-unternehmen/vortraege-workshops-kurse" },
      { label: "Führungskräfte-Coaching", href: "/de/fuer-unternehmen/fuehrungskraefte-coaching" },
      { label: "Beratung für Mitarbeitende", href: "/de/fuer-unternehmen/beratung-mitarbeitende" },
      { label: "Weekly Wellbeing", href: "/de/weekly-wellbeing" },
      { label: "Blog", href: "/de/blog" },
      { label: "FAQ", href: "/de/faq" },
      { label: "KI-Informationen", href: "/de/ai-info" },
    ],
    legalNav: [
      { label: "Kontakt", href: "/de/contact" },
      { label: "KI-Info", href: "/de/ai-info" },
      { label: "Impressum", href: "/de/impressum" },
      { label: "Datenschutz", href: "/de/datenschutz" },
      { label: "AGB", href: "/de/agb" },
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
    eyebrow: "Psychologische Beratung · Online",
    heroTitle: "Ein Raum für das, was",
    heroTitleAccent: "sich in Ihnen verändert",
    heroLead:
      "Vertrauliche Begleitung bei Stress, Burnout, Überforderung und Lebensübergängen — für Menschen, die viel leisten, viel tragen und wieder mehr Verbindung zu sich selbst finden möchten.",
    heroParas: [
      "Das Leben verändert sich selten geradlinig. Meist verschiebt sich etwas ganz allmählich — bis sich in Ihnen etwas anders anfühlt als zuvor.",
      "Manchmal läuft im Außen alles weiter, während innen Erschöpfung, innere Unruhe oder Überforderung wachsen — oder das leise Gefühl, sich selbst fremd geworden zu sein.",
      "Viele Menschen suchen Unterstützung nicht, weil etwas zerbrochen ist, sondern weil sich etwas verschoben hat — und weil das, was früher getragen hat, nicht mehr recht trägt.",
    ],
    heroEmphasis:
      "In dieser Arbeit geht es nicht darum, etwas zu reparieren, das nicht mehr funktioniert. Es geht darum, einen vertraulichen Raum zu schaffen, in dem Sie sich selbst besser verstehen lernen, Ihre Ressourcen stärken und ein Leben gestalten, das zu Ihren Bedürfnissen und Werten passt.",
    heroPrimary: { label: "Kennenlerngespräch buchen", href: "/de/contact" },
    heroSecondary: { label: "Angebote entdecken", href: "/de/angebot" },
    reachLine:
      "Online-Beratung auf Deutsch und Englisch — für Klient:innen in der Schweiz, in Deutschland und international.",
    trustPillars: [
      {
        title: "Diskret",
        body: "Ein geschützter, wertfreier Rahmen — für das, was sonst nirgends Raum findet.",
      },
      {
        title: "Fundiert",
        body: "Wissenschaftlich fundierte Methoden, sorgfältig auf Sie abgestimmt.",
      },
      {
        title: "Flexibel",
        body: "Eine Begleitung, die sich Ihrem Leben anpasst — nicht umgekehrt.",
      },
    ],
    testimonial: {
      text: "Theresa schafft einen Raum, der sich sicher, geerdet und zutiefst unterstützend anfühlt. Durch ihre Begleitung bin ich widerstandsfähiger geworden, präsenter — und wieder mehr bei mir selbst.",
      attribution: "Ariana",
    },
    testimonials: [
      {
        text: "Theresa schafft einen Raum, der sich sicher, geerdet und zutiefst unterstützend anfühlt. Durch ihre Begleitung bin ich widerstandsfähiger geworden, präsenter — und wieder mehr bei mir selbst.",
        attribution: "Ariana",
      },
      {
        text: "Am meisten hat mich berührt, wie authentisch Theresa als Mensch präsent ist. Ihr körperorientierter Ansatz hat mir geholfen, meine Gefühle wieder zu spüren und zu verstehen.",
        attribution: "Nicolas",
      },
    ],
    audience: {
      eyebrow: "Schwerpunkte",
      heading: "Für wen dieser Raum gedacht ist",
      intro:
        "Für Menschen in bedeutsamen Übergängen — wenn Altes nicht mehr trägt und Neues noch nicht greifbar ist.",
      items: [
        {
          title: "Lebensübergänge",
          body: "Umzug, Trennung, beruflicher Wandel, Verlust, Elternschaft — Veränderungen, die viel innere Anpassung verlangen.",
        },
        {
          title: "Identität & Orientierung",
          body: "Phasen der Unsicherheit, Neuorientierung und Fragen nach Sinn und Richtung im Leben.",
        },
        {
          title: "Überforderung & Burnout",
          body: "Frühe Anzeichen von Burnout erkennen, anhaltenden Stress regulieren und zurück zu Verbindung und Balance finden — auch dann, wenn die eigenen Kräfte aufgebraucht scheinen.",
        },
        {
          title: "Emotions- & Nervensystemregulation",
          body: "Umgang mit Sorgen, innerer Unruhe und körperlichen Stressreaktionen — und mit emotionalen Erfahrungen, die zu schwer sind, um sie allein zu tragen.",
        },
        {
          title: "Beziehungsthemen & Paarberatung",
          body: "Festgefahrene Muster durchbrechen, die Kommunikation verbessern und Konflikte konstruktiv lösen — und den Weg zurück zu Verständnis und Nähe finden.",
        },
        {
          title: "Expat- & internationales Leben",
          body: "Was es bedeutet, zwischen Ländern, Kulturen und sich wandelnden sozialen Welten zu leben. Beratung für Expats und internationale Paare auf Deutsch & Englisch — online in der Schweiz, in Deutschland und international.",
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
          body: "Ein neugieriger, mitfühlender Blick auf die verschiedenen Anteile in Ihnen, die widersprüchliche Bedürfnisse, Sorgen oder Reaktionen tragen — hin zu mehr innerem Zusammenhalt.",
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
    steps: {
      eyebrow: "Mein Ansatz",
      heading: "Systemisch. Körperorientiert. Integrativ.",
      intro:
        "Ich verbinde wissenschaftlich fundierte Perspektiven — Systemische Beratung, Somatic Experiencing®, Anteilearbeit sowie achtsamkeitsbasierte Ansätze — mit einer integrativen Haltung und tiefem Respekt für die individuelle Geschichte und die inneren Ressourcen jedes Menschen. Für nachhaltige Veränderung statt kurzfristiger Lösungen.",
      items: [
        {
          title: "01 Muster verstehen",
          body: "Wiederkehrende Verhaltens- und Beziehungsmuster verstehen und Raum für Neues schaffen.",
        },
        {
          title: "02 Nervensystem regulieren",
          body: "Stress im Körper sanft lösen, um wieder ruhiger und präsenter sein zu können.",
        },
        {
          title: "03 Innere Konflikte lösen",
          body: "Widersprüchliche Bedürfnisse und innere Anteile in Einklang bringen.",
        },
        {
          title: "04 Leben und Werte in Einklang bringen",
          body: "Handeln und Entscheidungen wieder an dem ausrichten, was Ihnen wirklich wichtig ist.",
        },
      ],
      closing:
        "Psychologische Beratung ist ein gemeinsamer Prozess. Sie bleiben Expert:in für Ihr eigenes Leben; ich begleite Sie mit fachlicher Expertise, Empathie und neuen Perspektiven.",
      ctaLabel: "Mehr über meine Philosophie",
    },
    privatePay: {
      eyebrow: "Selbstzahler-Praxis",
      heading: "Ihre Vorteile als Selbstzahler:in",
      items: [
        {
          title: "Volle Diskretion & Privatsphäre",
          body: "Keine Diagnosen in Krankenkassenakten. Keine Meldung an eine Versicherung — was besprochen wird, bleibt vertraulich.",
        },
        {
          title: "Schnelle Hilfe",
          body: "Wir beginnen, sobald Sie bereit sind — ohne ärztliche Überweisung, ohne Wartezeit über eine Kasse.",
        },
        {
          title: "Maximale Flexibilität",
          body: "Ortsunabhängig online, auf Deutsch und Englisch — für ein Leben, das sich über mehr als ein Land erstreckt.",
        },
      ],
    },
    aboutBlock: {
      eyebrow: "Über mich",
      heading: "Ich bin Theresa Frische",
      body: "Mit einem Master of Science in Klinischer Psychologie und Weiterbildungen in systemischer Beratung, körperorientierten Verfahren und Achtsamkeit begleite ich Einzelpersonen und Paare durch emotionale Belastungsphasen und bedeutsame Lebensübergänge.",
      ctaLabel: "Mehr über mich",
    },
  },

  about: {
    metaTitle: "Über mich — Theresa Frische",
    metaDescription:
      "Theresa Frische ist Systemische & Integrative Beraterin und begleitet Internationals, Expats und Paare durch Veränderung. M.Sc. Klinische Psychologie · Somatic Experiencing® Practitioner.",
    eyebrow: "Über mich",
    name: "Theresa Frische",
    subtitle: "Eine Beraterin für Menschen im Übergang.",
    credentials:
      "M.Sc. Klinische Psychologie · Somatic Experiencing® Practitioner · Systemische & Integrative Beraterin",
    lead: "Seit über acht Jahren begleite ich Menschen und Organisationen durch bedeutsame Veränderungsprozesse — mit tiefer Aufmerksamkeit für die gesamte menschliche Erfahrung.",
    intro: [
      "Ich weiß, wie es sich anfühlt, wenn das Leben zu viel wird — wenn sich Stress aufbaut, Beziehungen belastet sind oder man das Gefühl hat, den Boden unter den Füßen zu verlieren.",
      "Mit der Zeit habe ich verstanden, wie eng Nervensystem, Beziehungen und Lebensumstände miteinander verwoben sind. Ist ein Bereich überlastet, wirkt sich das oft auf alles andere aus — wie wir fühlen, wie wir in Verbindung gehen, wie wir uns durch die Welt bewegen. Dieses Verständnis steht im Zentrum meiner Arbeit.",
    ],
    imageAlt: "Porträt von Theresa Frische, Systemische & Integrative Beraterin, lächelnd am Fenster.",
    lived: {
      heading: "Ein Leben zwischen Welten",
      body: [
        "Mein eigenes Leben hat sich zwischen verschiedenen Ländern, Kulturen und Identitäten bewegt — geprägt von Fernbeziehungen und interkulturellen Partnerschaften sowie dem wiederholten Ankommen in neuen beruflichen Umfeldern. Bevor ich mich der Psychologie widmete, habe ich zeitgenössischen Tanz und klassisches Ballett studiert und mich intensiv mit kontemplativer Praxis auseinandergesetzt.",
        "Diese Erfahrungen haben mir ein tiefes Verständnis dafür gegeben, was es bedeutet, im Übergang zu sein — nicht nur äußerlich, sondern innerlich: die Unsicherheit, die Orientierungslosigkeit, das Bedürfnis, inmitten von Veränderung Halt zu finden.",
      ],
      emphasis:
        "So einzigartig die Geschichte jedes Menschen auch ist — ich verstehe die emotionale Landschaft, die große Lebensübergänge und komplexe Beziehungen oft mit sich bringen.",
    },
    philosophy: {
      heading: "Den Menschen als Ganzes sehen",
      body: [
        "Ich bin davon überzeugt: Jeder Mensch trägt die Kapazität für Veränderung, Regulation und Wachstum bereits in sich. In meiner Arbeit geht es nicht darum, Sie zu „reparieren“ oder Ihnen vorgefertigte Ratschläge zu geben, sondern darum, Bedingungen zu schaffen, unter denen sich nachhaltige Entwicklung entfalten kann.",
        "Ich verbinde evidenzbasierte Psychologie, systemische Beratung, körperorientierte Ansätze (Somatic Experiencing®), Anteilearbeit und Achtsamkeit zu einem integrativen Prozess, um Sie auf allen Ebenen anzusprechen — mental, emotional, körperlich, relational und in existenziellen Sinnfragen. Dabei denke ich nicht in Schubladen, sondern richte meinen Blick auf zugrundeliegende Zusammenhänge — darauf, wie Lebensgeschichte, Nervensystem, Beziehungsmuster und Lebenskontext unser Erleben prägen.",
        "Mein Anliegen ist es, Menschen dabei zu begleiten, mehr innere Stabilität, Flexibilität und Widerstandskraft zu entwickeln — und ein erfülltes, werteorientiertes Leben zu gestalten, in Verbindung mit sich selbst und anderen.",
      ],
    },
    philosophySections: [
      {
        number: "01",
        heading: "Muster verstehen & kontextualisieren",
        paras: [
          "Unsere heutigen Denk-, Fühl- und Verhaltensmuster sind keine Fehlfunktionen. Sie sind kluge Anpassungsleistungen unseres Systems an frühere Lebensumstände, Beziehungen oder Belastungssituationen. Früher waren diese Strategien schützend und oft überlebenswichtig — heute jedoch können sie uns im Alltag, im Beruf oder in Beziehungen im Weg stehen.",
          "Gemeinsam betrachten wir Ihre wiederkehrenden Dynamiken ohne Bewertung. Wir erforschen behutsam, welche Funktion diese Muster einst hatten und warum sie bis heute fortbestehen. Indem wir ihre Ursprünge und Auslöser verstehen, verlieren alte Automatismen ihre Macht — und es entsteht der Freiraum, bewusste, neue Entscheidungen zu treffen.",
        ],
      },
      {
        number: "02",
        heading: "Das Nervensystem & den Körper einbeziehen",
        paras: [
          "Reines Verstehen auf verstandesmäßiger Ebene reicht oft nicht aus, um tiefgreifende Veränderung zu bewirken. Der Verstand kann logisch erfassen, dass eine Situation sicher ist — während der Körper, unser Nervensystem, weiterhin mit Anspannung, Erstarrung oder Überforderung reagiert.",
          "Über körperorientierte Ansätze wie Somatic Experiencing® lernen Sie, die feinen Signale Ihres Nervensystems wahrzunehmen und zu verstehen. Wir arbeiten daran, Stress behutsam zu lösen und die Selbstregulationsfähigkeit Ihres Organismus wiederherzustellen. Das Ergebnis ist eine wachsende innere Stabilität, mehr emotionale Belastbarkeit und eine neue, spürbare Präsenz im Alltag.",
        ],
      },
      {
        number: "03",
        heading: "Innere Konflikte & Anteile integrieren",
        paras: [
          "Häufig erleben wir in herausfordernden Lebensphasen innere Widersprüche: Ein Teil von uns möchte Veränderung, ein anderer sucht Sicherheit; ein Teil möchte klare Grenzen setzen, ein anderer will niemanden enttäuschen. Solche inneren Zerreißproben kosten enorm viel Energie.",
          "In Anlehnung an das Modell des Internal Family Systems (IFS) begegnen wir Ihren unterschiedlichen inneren Anteilen mit Neugier und Wertschätzung. Statt ungewollte Impulse oder Gefühle wegzudrücken, schaffen wir einen geschützten Raum, in dem alle Anteile gehört werden können. Indem wir die zugrundeliegenden Bedürfnisse und Befürchtungen dieser Anteile klären, lösen sich innere Blockaden — aus innerer Zerrissenheit wird Klarheit, Selbstmitgefühl und Handlungsfähigkeit.",
        ],
      },
      {
        number: "04",
        heading: "Das Leben am eigenen Wertekompass ausrichten",
        paras: [
          "Achtsame Präsenz schafft den Raum, in dem Wahlfreiheit möglich wird. Nachhaltige Zufriedenheit entsteht dort, wo unser tägliches Handeln, unsere Entscheidungen und unsere Beziehungen im Einklang mit unseren tiefsten persönlichen Werten stehen.",
          "Gemeinsam erarbeiten wir, was Ihnen wirklich wichtig ist — jenseits von externen Erwartungen, gesellschaftlichem Druck oder gelernten Anpassungsmustern. So gestalten wir schrittweise einen Lebensweg, der sich auch im Inneren stimmig, authentisch und erfüllt anfühlt.",
        ],
      },
    ],
    psyCoNote:
      "Die Anerkennung dieses Hochschulabschlusses durch die Psychologieberufekommission (PsyKo) ist beantragt und derzeit pendent.",
    quotes: [
      { text: "Das Leben ist ein Gleichgewicht aus Festhalten und Loslassen.", attribution: "Rumi" },
      {
        text: "Ihre einfühlsame Art macht es leicht, sich zu öffnen. Ihr breites psychologisches Wissen aus ganz unterschiedlichen Ansätzen hat mir geholfen, so vieles zu verstehen und einzuordnen — sie als Begleiterin in meinem Leben zu haben, ist für mich unbezahlbar.",
        attribution: "Klient:in",
      },
    ],
    education: {
      heading: "Qualifikationen & Fundament",
      items: [
        {
          title: "Systemische Weiterbildung",
          body: "IF Weinheim/Mannheim, seit 2023",
        },
        {
          title: "Körperorientierte Ansätze",
          body: "Somatic Experiencing® (SE), zertifizierte Praktikerin; weitere Fortbildungen in Ego-State, Hakomi und körperorientierten Methoden für die Arbeit mit Stress und Überforderung",
        },
        { title: "M.Sc. Klinische Psychologie", body: "Universität Witten/Herdecke" },
        { title: "B.Sc. Psychologie", body: "Universität zu Köln" },
        {
          title: "Klassischer & zeitgenössischer Tanz",
          body: "HfMDK Frankfurt & CODARTS Rotterdam",
        },
      ],
    },
  },

  workTogether: {
    metaTitle: "Angebot — Psychologische Beratung & Paarberatung | Theresa Frische",
    metaDescription:
      "Online-Beratung für Einzelpersonen und Paare auf Deutsch und Englisch: psychologische Beratung, Paarberatung, Burnout-Prävention und Somatic Experiencing®. Beginnen Sie mit einem kostenlosen Kennenlerngespräch (15 Minuten).",
    eyebrow: "Angebot",
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
    cards: [
      {
        title: "Psychologische Beratung",
        body: "Ein vertraulicher Raum für Reflexion und Klarheit — für Einzelpersonen.",
        href: "/de/angebot/psychologische-beratung",
      },
      {
        title: "Paarberatung",
        body: "Ein geschützter Raum für echte Begegnung und neue Bewegung in der Beziehung.",
        href: "/de/angebot/paarberatung",
      },
      {
        title: "Burnout-Prävention",
        body: "Stressmuster erkennen, bevor Erschöpfung zum Zusammenbruch führt.",
        href: "/de/angebot/burnout-praevention",
      },
      {
        title: "Somatic Experiencing®",
        body: "Körperorientierte Verarbeitung von Stress und belastenden Erfahrungen.",
        href: "/de/angebot/somatic-experiencing",
      },
    ],
    switzerland: {
      heading: "Begleitung in der Schweiz, in Deutschland und international",
      paras: [
        "Die Beratung findet ausschließlich online per Video statt — auf Deutsch und Englisch, für Klient:innen in der Schweiz, in Deutschland und international. Wer in Zürich, Zug oder einer anderen Schweizer Region lebt, arbeitet mit mir also von dort aus, ohne Anfahrt und ohne Wartezimmer.",
        "Dieses Format passt besonders zu Internationals und Expats, die beruflich umgezogen sind: Sie können die Begleitung beibehalten, auch wenn sich der Wohnort, das Land oder die Arbeitssituation wieder verändert. Paare, die an unterschiedlichen Orten leben, können ebenfalls gemeinsam teilnehmen.",
        "Termine vergebe ich nach Vereinbarung; Zeitzonen außerhalb Mitteleuropas lassen sich in vielen Fällen einrichten. Die Sitzungen sind Selbstzahlerleistungen — es braucht keine Überweisung und keine Meldung an eine Versicherung.",
      ],
    },
  },

  organisations: {
    metaTitle: "Für Unternehmen — Wohlbefinden am Arbeitsplatz | Theresa Frische",
    metaDescription:
      "Wohlbefinden am Arbeitsplatz, Keynotes, Workshops und Beratungsangebote für Mitarbeitende von Organisationen in Deutschland und der Schweiz. Über acht Jahre Erfahrung.",
    eyebrow: "Für Unternehmen",
    heading: "Mentale Gesundheit & Wohlbefinden am Arbeitsplatz",
    lead: "Mentale Gesundheit am Arbeitsplatz ist kein Luxus — sie ist die Grundlage für leistungsfähige, engagierte und widerstandsfähige Teams.",
    intro:
      "Mit über acht Jahren Erfahrung unterstütze ich Organisationen in Deutschland und der Schweiz dabei, eine Kultur zu entwickeln, die psychisches Wohlbefinden ernst nimmt. Stress im Job, schwierige Kommunikation und emotionale Erschöpfung haben spürbare Folgen — für den Einzelnen wie für die ganze Organisation. Gemeinsam mit Unternehmen und Institutionen schaffe ich psychologische Sicherheit, Widerstandskraft und Rahmenbedingungen, unter denen Menschen dauerhaft ihr Bestes geben können.",
    facts: [
      { label: "Erfahrung", value: "8+ Jahre in der betrieblichen Gesundheitsförderung" },
      { label: "Sprachen", value: "Deutsch & Englisch" },
      { label: "Zertifizierung", value: "Somatic Experiencing® (SE) Practitioner" },
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
    cards: [
      {
        title: "Vorträge, Workshops & Kurse",
        body: "Keynotes, Workshops, vertiefende Trainings und 8-Wochen-Programme.",
        href: "/de/fuer-unternehmen/vortraege-workshops-kurse",
      },
      {
        title: "Führungskräfte-Coaching",
        body: "Einzelcoaching für Führungskräfte zu Selbstführung und tragfähigem Umgang mit Druck.",
        href: "/de/fuer-unternehmen/fuehrungskraefte-coaching",
      },
      {
        title: "Beratung für Mitarbeitende",
        body: "Vertrauliche Einzelbegleitung, eingebettet in Ihr betriebliches Gesundheitsmanagement.",
        href: "/de/fuer-unternehmen/beratung-mitarbeitende",
      },
    ],
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
      "Antworten auf häufige Fragen zu Online-Beratungssitzungen, Sprachen, Format, Somatic Experiencing® und der Weekly Wellbeing Community.",
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
          "Scheffelstraße 23",
          "79102 Freiburg im Breisgau",
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
          "Kleinunternehmerin gemäß § 19 UStG. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
        ],
      },
      {
        heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        lines: ["Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Theresa Frische.", "Anschrift wie oben."],
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
          "Verantwortliche für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:",
          "Theresa Frische — Systemische & Integrative Beraterin. Scheffelstraße 23, 79102 Freiburg im Breisgau, Deutschland. E-Mail: theresafrische@gmail.com. Telefon: +49 157 38920374.",
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
      {
        heading: "Allgemeine Geschäftsbedingungen",
        paras: [
          "Die für Beratungsleistungen geltenden Bedingungen — unter anderem zu Sitzungen, Zahlung, Absage, Vertraulichkeit und Widerrufsrecht — finden Sie in den [Allgemeinen Geschäftsbedingungen](/de/agb).",
        ],
      },
    ],
  },

  serviceChildren: { ...wwmChildrenDe, ...orgChildrenDe },

  terms: {
    metaTitle: "Allgemeine Geschäftsbedingungen — Theresa Frische",
    metaDescription:
      "Die Allgemeinen Geschäftsbedingungen für Beratungsleistungen von Theresa Frische: Geltungsbereich, Art der Leistung, Sitzungen, Zahlung, Absage, Vertraulichkeit, Widerruf und Haftung.",
    heading: "Allgemeine Geschäftsbedingungen",
    sections: [
      {
        heading: "1. Geltungsbereich",
        paras: [
          "Diese Allgemeinen Geschäftsbedingungen gelten für Beratungsleistungen von Theresa Frische (im Folgenden \"die Beraterin\") gegenüber privaten Klient:innen (im Folgenden \"Klient:in\"). Sie gelten für Einzelberatung, Paarberatung sowie für die Teilnahme an Gruppenangeboten wie der Weekly Wellbeing Community.",
        ],
      },
      {
        heading: "2. Art der Leistung",
        paras: [
          "Die Beraterin erbringt psychologische Beratung. Beratung ist keine Psychotherapie, keine medizinische Behandlung und kein Ersatz für beides. Sie umfasst keine Diagnostik, keine medizinische Versorgung und keine Behandlung von Krankheiten. Wenn die Situation einer Klient:in medizinische oder psychotherapeutische Versorgung erfordert, weist die Beraterin darauf hin und unterstützt, soweit möglich, bei der Suche nach geeigneter Hilfe.",
          "Beratung ist ein gemeinsamer Prozess. Ein bestimmtes Ergebnis wird nicht zugesagt oder garantiert.",
        ],
      },
      {
        heading: "3. Zustandekommen des Vertrags",
        paras: [
          "Anfragen über die Website sind eine Einladung zur Kontaktaufnahme und begründen keinen Vertrag. Der Vertrag kommt zustande, wenn die Beraterin einen Termin ausdrücklich bestätigt. Das kostenfreie 15-minütige Kennenlerngespräch ist unverbindlich und begründet keine Verpflichtung.",
        ],
      },
      {
        heading: "4. Sitzungen und Format",
        paras: [
          "Die Sitzungen finden online per Video auf Deutsch oder Englisch statt. Einzelsitzungen dauern 60 Minuten, Paarsitzungen 60 bis 120 Minuten. Die Klient:in sorgt für eine stabile Internetverbindung, ein geeignetes Gerät und einen ungestörten, privaten Raum. Kann eine Sitzung aus technischen Gründen auf Seiten der Beraterin nicht stattfinden, wird sie kostenfrei nachgeholt.",
        ],
      },
      {
        heading: "5. Honorar und Zahlung",
        paras: [
          "Das Honorar wird individuell bei der Terminvereinbarung vereinbart. Soweit nicht anders vereinbart, wird nach der Sitzung eine Rechnung gestellt, zahlbar innerhalb von 14 Tagen. Bei Klient:innen außerhalb der EU kann Vorauszahlung vereinbart werden. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
          "Die Leistungen sind Selbstzahlerleistungen. Eine Abrechnung mit oder Erstattung durch die gesetzliche oder private Krankenversicherung erfolgt nicht.",
        ],
      },
      {
        heading: "6. Absage und Terminverschiebung",
        paras: [
          "Termine können bis 24 Stunden vor dem vereinbarten Zeitpunkt kostenfrei abgesagt oder verlegt werden. Bei Absagen innerhalb von 24 Stunden oder bei Nichterscheinen wird das vollständige Honorar fällig. In Fällen von Krankheit oder echten Notfällen entscheidet die Beraterin nach billigem Ermessen.",
          "Muss die Beraterin einen Termin verlegen, informiert sie so früh wie möglich; ein Honorar fällt in diesem Fall nicht an.",
        ],
      },
      {
        heading: "7. Vertraulichkeit",
        paras: [
          "Alle Gesprächsinhalte werden vertraulich behandelt. Informationen werden ohne Einwilligung der Klient:in nicht an Dritte weitergegeben, außer soweit eine gesetzliche Pflicht zur Offenlegung besteht oder eine erhebliche und unmittelbare Gefahr für Leben oder Gesundheit der Klient:in oder einer anderen Person abzuwenden ist. Erfolgt die Beratung über ein arbeitgeberfinanziertes Programm, werden keine Gesprächsinhalte an den Arbeitgeber berichtet.",
        ],
      },
      {
        heading: "8. Widerrufsrecht",
        paras: [
          "Ist die Klient:in Verbraucher:in und wird der Vertrag im Fernabsatz geschlossen, steht ihr ein Widerrufsrecht zu. Die Klient:in kann den Vertrag binnen 14 Tagen ab Vertragsschluss ohne Angabe von Gründen widerrufen. Der Widerruf ist in eindeutiger Erklärung mitzuteilen; eine E-Mail an theresafrische@gmail.com genügt.",
          "Verlangt die Klient:in ausdrücklich, dass die Beratung vor Ablauf der Widerrufsfrist beginnt, so schuldet sie einen angemessenen Betrag für die bereits erbrachte Leistung. Das Widerrufsrecht erlischt bei vollständiger Erbringung der Dienstleistung, wenn die Klient:in dem vorzeitigen Beginn ausdrücklich zugestimmt und ihre Kenntnis vom Erlöschen des Widerrufsrechts bestätigt hat.",
        ],
      },
      {
        heading: "9. Haftung",
        paras: [
          "Die Beraterin haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Im Übrigen ist die Haftung auf die Verletzung einer wesentlichen Vertragspflicht und auf den vertragstypisch vorhersehbaren Schaden begrenzt. Eine gesetzlich nicht abdingbare Haftung bleibt unberührt.",
        ],
      },
      {
        heading: "10. Krisensituationen",
        paras: [
          "Beratung ist kein Krisen- oder Notdienst und außerhalb der Sitzungszeiten nicht erreichbar. In einer Notlage wenden sich Klient:innen an den örtlichen Notruf oder eine Krisenhotline. Kontaktdaten sind auf der [Kontaktseite](/de/contact) dieser Website angegeben.",
        ],
      },
      {
        heading: "11. Datenschutz",
        paras: [
          "Personenbezogene Daten werden entsprechend der [Datenschutzerklärung](/de/datenschutz) dieser Website verarbeitet.",
        ],
      },
      {
        heading: "12. Anwendbares Recht und Schlussbestimmungen",
        paras: [
          "Es gilt deutsches Recht. Erfüllungsort ist Freiburg im Breisgau. Sollte eine Bestimmung unwirksam sein oder werden, bleiben die übrigen Bestimmungen unberührt.",
        ],
      },
    ],
    version: "Stand: 30. Juli 2026",
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
          "Theresa Frische ist Systemische & Integrative Beraterin und bietet psychologische Beratung online für Einzelpersonen und Paare international an. Sie hat einen M.Sc. in Klinischer Psychologie, ist zertifizierte Somatic Experiencing®-Praktikerin, absolviert seit 2023 eine systemische Weiterbildung am IF Weinheim/Mannheim und verfügt über mehr als acht Jahre Erfahrung in der Begleitung von Menschen und Organisationen durch Veränderung.",
        ],
      },
      {
        heading: "Was die Praxis anbietet",
        bullets: [
          "Psychologische Beratung im Einzelsetting — Online-Sitzungen zu zweit (60 Minuten).",
          "Paarberatung — Online-Sitzungen für Paare (60–120 Minuten).",
          "Burnout-Prävention — Begleitung beim Erkennen und Regulieren von Stressmustern.",
          "Somatic Experiencing® — körperorientierte Verarbeitung von Stress und belastenden Erfahrungen.",
          "Weekly Wellbeing Community — eine wöchentliche Online-Gruppe für Achtsamkeit und Wohlbefinden (dienstags, auf Englisch).",
          "Für Unternehmen — Vorträge, Workshops und Kurse, Führungskräfte-Coaching sowie vertrauliche Beratung für Mitarbeitende.",
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
          "Die Arbeit ist integrativ und kontextorientiert und schöpft aus systemischer Beratung, körperorientierten Ansätzen (Somatic Experiencing®), Anteilearbeit und achtsamkeitsbasierter Praxis — passend zum jeweiligen Menschen und nicht als eine einzelne feste Methode.",
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
          "Über mich: /de/ueber-mich — Hintergrund, Qualifikationen und Ansatz von Theresa.",
          "Angebot (Übersicht): /de/angebot — alle Beratungsangebote für Einzelpersonen und Paare.",
          "Psychologische Beratung: /de/angebot/psychologische-beratung — Einzelberatung online.",
          "Paarberatung: /de/angebot/paarberatung — Beratung für Paare online.",
          "Burnout-Prävention: /de/angebot/burnout-praevention — Stressmuster erkennen und regulieren.",
          "Somatic Experiencing®: /de/angebot/somatic-experiencing — körperorientierte Arbeit mit Stress.",
          "Für Unternehmen (Übersicht): /de/fuer-unternehmen — Wohlbefinden am Arbeitsplatz für Teams.",
          "Vorträge, Workshops & Kurse: /de/fuer-unternehmen/vortraege-workshops-kurse — Keynotes, Workshops, Trainings und 8-Wochen-Programme.",
          "Führungskräfte-Coaching: /de/fuer-unternehmen/fuehrungskraefte-coaching — Einzelcoaching für Führungskräfte.",
          "Beratung für Mitarbeitende: /de/fuer-unternehmen/beratung-mitarbeitende — vertrauliche Einzelbegleitung im betrieblichen Kontext.",
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
