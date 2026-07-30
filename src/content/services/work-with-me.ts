import type { ServicePageContent } from "../types";

/**
 * Long-form copy for the four Work With Me child pages.
 * Keys match the ROUTES keys in lib/site.ts.
 *
 * Compliance: counselling only. Her service is "Psychological Counselling" /
 * "Psychologische Beratung". No pricing, no booking link (the CTA is the free
 * 15-minute discovery call via the contact page), no in-person claim.
 */

export const wwmChildrenEn: Record<string, ServicePageContent> = {
  "wwm-psychological-counselling": {
    metaTitle: "Psychological Counselling — Theresa Frische",
    metaDescription:
      "Online psychological counselling in English and German for individuals: a confidential space for reflection, clarity and change. Free 15-minute discovery call.",
    eyebrow: "Work With Me",
    heading: "Psychological Counselling",
    lead: "A confidential space to pause, reflect, and gain greater clarity about what is moving you.",
    paras: [
      "Individual counselling offers something that is increasingly rare: an hour that belongs entirely to you, held by someone whose only task is to understand. Together we slow down enough to look at what is actually happening in your life — the situation in front of you, the feelings underneath it, and the story you have been telling yourself about both. Nothing has to be dramatic to be worth bringing. Many people arrive simply because something no longer fits, and they would like to understand why before making their next decision.",
      "In our work together we look at inner patterns, emotions, and experiences to build a deeper understanding of yourself and to open up new possibilities for change. Patterns are rarely accidental. The way you take on responsibility, keep the peace, push through, or hold others at a careful distance almost always made sense at some point in your life. When we can see a pattern clearly and with some compassion, it stops running quietly in the background — and you regain a choice you did not know you had.",
      "People come with very different questions. Life transitions such as a move, a separation, a career change, loss, or becoming a parent, which ask for more inner adjustment than the outside world tends to acknowledge. Phases of uncertainty and reorientation, and questions about meaning and direction. Ongoing strain, overwhelm, and exhaustion in demanding roles. Inner restlessness, difficulty switching off, physical stress responses that will not settle. Relationship difficulties, recurring conflict, or the particular complexity of living between countries, cultures, and languages.",
      "My approach is systemic and integrative. Systemic means I am interested in context — the relationships, roles, family history, and expectations that shape how you experience yourself. Integrative means I draw on several well-founded perspectives rather than one method: systemic counselling, body-oriented work through [Somatic Experiencing®](/work-with-me/somatic-experiencing), parts work, and mindfulness-informed practice. What we use depends on you, not on a protocol. Some sessions are largely conversation and reflection; others include quiet attention to what your body is registering while we talk.",
      "You remain the expert on your own life. My role is to bring professional expertise, careful attention, and perspectives you may not be able to reach from inside the situation — not to hand you conclusions. Sessions are confidential, unhurried, and shaped by what is present for you on the day. Some people come for a focused handful of conversations around a specific question; others value a longer, steadier accompaniment through a period of change. Both are entirely legitimate, and we review the pace together as we go.",
      "Sessions take place online by video, in English or German, and last 60 minutes. I work with clients in Switzerland, Germany, and internationally, which makes it possible to keep the work going through relocations, travel, and busy seasons. Online also means discretion: you can speak from your own space, without a waiting room and without arranging your week around a commute.",
      "If you are wondering whether this is the right fit, the simplest starting point is a [free 15-minute discovery call](/contact). It is a short, relaxed conversation — you can say as much or as little as you like about what brings you here, ask anything you want to ask, and decide afterwards, with no obligation to continue.",
    ],
    facts: [
      { label: "Duration", value: "60 minutes" },
      { label: "Format", value: "Online (video)" },
      { label: "Languages", value: "English & German" },
    ],
    crossLinks: [
      {
        label: "Counselling, psychotherapy and coaching compared",
        href: "/blog/counselling-vs-therapy-vs-coaching",
      },
      { label: "How online counselling works", href: "/blog/how-online-counselling-works" },
    ],
  },

  "wwm-couples-counselling": {
    metaTitle: "Couples Counselling — Theresa Frische",
    metaDescription:
      "Online couples counselling in English and German: a protected space for honest encounter, communication and fresh momentum. Free 15-minute discovery call.",
    eyebrow: "Work With Me",
    heading: "Couples Counselling",
    lead: "A protected space for honest encounter, mutual understanding, and fresh momentum for your relationship.",
    paras: [
      "Couples counselling creates a protected space in which both of you can speak honestly and be heard properly — including the things that are usually said too late in the evening, or not at all. Together we explore the entrenched patterns you keep landing in, the needs underneath them, and a more conscious way of communicating. My role is not to decide who is right. It is to make the conversation possible again.",
      "Most couples who come to me are not in crisis. They are tired of the same argument. Something has quietly shifted: less curiosity, more efficiency; more logistics, less closeness. Or the opposite — a single unresolved event that keeps reappearing in different disguises. Long-term partnerships also change shape around real life: work pressure, small children, ageing parents, a move to another country, differing needs for closeness and independence. Coming in early, before the distance hardens, usually makes the work shorter and gentler.",
      "In sessions we slow the dynamic down enough to see it. Almost every couple has a loop — one partner presses for contact, the other withdraws to keep the peace; one names problems, the other hears criticism. Inside the loop it feels like a fight about the dishwasher or the calendar. From the outside it is usually two people trying to protect something that matters to them and reaching for it in a way the other cannot receive. When you can both recognise the loop as it starts, you stop being opponents in it.",
      "From there we work practically. How to raise something difficult without an opening line that guarantees defence. How to stay present when you feel accused. How to repair after a rupture instead of waiting for the atmosphere to clear on its own. How to speak about needs, sexuality, money, family, and time in a way that does not immediately become a negotiation. I keep the space balanced and safe, so that neither of you leaves a session feeling outnumbered.",
      "I also work with international and intercultural couples, in English and German, and with partners who do not share a first language. What looks like a difference in character is often a difference in what each of you learned to expect from family, conflict, independence, and belonging. Naming that openly tends to bring relief: the problem becomes something between you and the pattern, rather than something wrong with either of you.",
      "Couples sessions run 60 to 120 minutes online by video — a longer format usually serves two people better, as it gives both of you room without the clock cutting the conversation off at its most useful point. We agree the length and rhythm together. Occasional individual sessions alongside the joint work are possible where that would help, always with transparency about the shared frame. If one of you would first like to look at something on your own, [individual counselling](/work-with-me/psychological-counselling) is a good place to start.",
      "You can begin with a [free 15-minute discovery call](/contact). Either of you may make the first contact — many people do so alone — and there is no obligation to continue afterwards.",
    ],
    facts: [
      { label: "Duration", value: "60–120 minutes" },
      { label: "Format", value: "Online (video)" },
      { label: "Languages", value: "English & German" },
    ],
    crossLinks: [
      {
        label: "Navigating distance in a long-term relationship",
        href: "/blog/growing-apart-growing-together",
      },
      { label: "Love across cultures", href: "/blog/love-across-cultures" },
    ],
  },

  "wwm-burnout-prevention": {
    metaTitle: "Burnout Prevention — Theresa Frische",
    metaDescription:
      "Online burnout prevention counselling in English and German: recognise your stress patterns and recover before exhaustion takes over. Free discovery call.",
    eyebrow: "Work With Me",
    heading: "Burnout Prevention",
    lead: "Recognising your stress patterns before sustained exhaustion turns into collapse.",
    paras: [
      "Burnout rarely arrives suddenly. It develops gradually — through sustained stress, self-overextension, and the habit of overlooking early warning signs because there is always something more urgent. In burnout prevention we look together at your personal stress patterns, strengthen your self-awareness, and develop concrete strategies for regulation and recovery, while you still have the capacity to use them.",
      "The people I work with are usually competent and highly committed. They lead teams, hold responsibility, carry others, and deliver reliably even in difficult seasons. That is precisely the risk profile. Capability delays the reckoning: you can compensate for a long time, and because you compensate well, nobody intervenes — including you. Early signs tend to be quiet and easy to explain away. Sleep that no longer restores. Inner restlessness alongside a heavy tiredness. Weekends that recover nothing. Shrinking patience with people you love. A creeping cynicism about work that used to matter to you. Physical stress responses — tension, a tight chest, digestion, recurring minor illness — that appear before any words do.",
      "So we begin by making your pattern visible rather than by adding another routine to your calendar. What actually depletes you, and what only looks demanding? Where does the load come from the volume of work, and where does it come from how you carry it — the difficulty in delegating, the reluctance to disappoint, the standard you would never apply to a colleague? Which values keep you in an arrangement that is costing you too much? This is where systemic work is useful: it locates the strain in a real context of roles, expectations, and relationships, instead of turning it into a personal failing.",
      "Alongside that understanding we work with your nervous system, because insight alone does not restore capacity. Sustained pressure trains the body to stay mobilised, and a body that never fully leaves that mode cannot recover, however sensible your intentions are. Using body-oriented approaches including [Somatic Experiencing®](/work-with-me/somatic-experiencing), you learn to notice the earlier, subtler signals — the point at which you are still tired rather than depleted — and to find your way back down from activation deliberately, in ways that fit a real working day rather than an idealised one.",
      "From there we build something practical and small enough to survive a difficult week. Recovery that genuinely recovers, rather than time off that quietly becomes another obligation. Boundaries you can hold in your actual role, phrased in your own language. Ways of noticing overload before it becomes a decision made for you. Where the strain is structural, we also look honestly at what is yours to change and what belongs to the organisation — an important distinction, because trying harder inside an unworkable arrangement is itself a source of exhaustion.",
      "Sessions take place online by video, in English or German, and last 60 minutes. I work with clients in Switzerland, Germany, and internationally, which makes the work sustainable across travel and demanding schedules. Many people begin during a stretch they describe as intense but manageable — the most useful moment to start, and the point at which prevention still deserves the name.",
      "If any of this sounds familiar, a [free 15-minute discovery call](/contact) is an easy first step: a short, confidential conversation with no obligation to continue.",
    ],
    facts: [
      { label: "Duration", value: "60 minutes" },
      { label: "Format", value: "Online (video)" },
      { label: "Languages", value: "English & German" },
    ],
    crossLinks: [
      {
        label: "Counselling for employees & leaders",
        href: "/organisations/employee-counselling",
      },
      {
        label: "Early signs of burnout",
        href: "/blog/running-on-empty-early-signs-of-burnout",
      },
    ],
  },

  "wwm-somatic-experiencing": {
    metaTitle: "Somatic Experiencing® — Theresa Frische",
    metaDescription:
      "Somatic Experiencing® counselling online in English and German: body-oriented work with stress, overwhelm and difficult experiences. Free discovery call.",
    eyebrow: "Work With Me",
    heading: "Somatic Experiencing®",
    lead: "A body-oriented approach to processing stress, overwhelm, and difficult experiences.",
    paras: [
      "Somatic Experiencing® is a body-oriented approach to working with stress, overwhelm, and difficult experiences. Rather than going over what happened on a purely mental level, we turn attention to the signals of the nervous system — tension, protective reactions, and impulses that never had the chance to complete. This creates room to process overwhelming experiences gently, to build greater inner stability, and to regain your capacity to act.",
      "Many people arrive already understanding their own history quite well and are puzzled that the understanding has not changed much. They can explain exactly why they react as they do, and still find themselves braced in a particular meeting, flooded by a certain tone of voice, or unable to settle at the end of a day that was objectively fine. That gap is not a lack of insight or willpower. Some responses are organised well below the level of language, and they respond to a different kind of attention than analysis.",
      "The nervous system is continuously assessing whether the present moment is safe, and it prepares you accordingly — mobilising for effort, or shutting activity down when effort seems futile. Both are intelligent responses. Difficulty arises when a response that was necessary once stays switched on afterwards, so that the body keeps reading an ordinary situation as a demanding one. What is felt then is inner restlessness, difficulty coming to rest, a tight chest or jaw, exhaustion that sleep does not touch, or a sense of being oddly distant from your own life.",
      "In a session this looks quieter than people expect. We work slowly, in small pieces, staying within what you can comfortably stay present for. I might invite you to notice where in your body something is registering while you speak, what happens in the moments when it eases, and what your attention does when it moves toward a difficult edge. We keep returning to what feels steady, so activation is met in doses your system can actually complete rather than in one overwhelming approach. You stay in control of the pace throughout, and there is no requirement to recount details you would rather not describe.",
      "Over time, this changes something practical. You start noticing your own signals earlier, while there is still room to respond. Stress rises and then genuinely comes back down instead of accumulating across the week. Emotions become more bearable to feel, and you spend less energy managing them at a distance. Many clients describe a growing inner steadiness, more resilience under pressure, and a new sense of being present in their own body and daily life.",
      "I am a certified Somatic Experiencing® practitioner, with further training in ego-state work, Hakomi, and other body-oriented methods for working with stress and overwhelm. Somatic Experiencing® is rarely the whole of our work: it usually sits within a broader integrative and systemic frame, so that what your body is holding, the patterns you have learned, and the context you live in are all part of the same conversation. It combines well with [individual counselling](/work-with-me/psychological-counselling) and with [burnout prevention](/work-with-me/burnout-prevention).",
      "Sessions take place online by video, in English or German, and last 60 minutes. This work translates well to video: you are in your own space, which many people find helps them settle more quickly than an unfamiliar room. If you would like to find out whether it suits you, begin with a [free 15-minute discovery call](/contact) — no obligation to continue.",
    ],
    facts: [
      { label: "Duration", value: "60 minutes" },
      { label: "Format", value: "Online (video)" },
      { label: "Languages", value: "English & German" },
    ],
    crossLinks: [
      { label: "What is Somatic Experiencing®?", href: "/blog/what-is-somatic-experiencing" },
      {
        label: "A plain-English guide to your nervous system",
        href: "/blog/nervous-system-plain-english-guide",
      },
    ],
  },
};

export const wwmChildrenDe: Record<string, ServicePageContent> = {
  "wwm-psychological-counselling": {
    metaTitle: "Psychologische Beratung — Theresa Frische",
    metaDescription:
      "Psychologische Beratung online auf Deutsch und Englisch: ein vertraulicher Raum für Reflexion, Klarheit und Veränderung. Kostenloses 15-minütiges Erstgespräch.",
    eyebrow: "Angebot",
    heading: "Psychologische Beratung",
    lead: "Ein vertraulicher Raum, um innezuhalten, zu reflektieren und mehr Klarheit über das zu gewinnen, was Sie bewegt.",
    paras: [
      "Einzelberatung bietet etwas, das im Alltag selten geworden ist: eine Stunde, die ganz Ihnen gehört — begleitet von jemandem, dessen einzige Aufgabe darin besteht, zu verstehen. Gemeinsam werden wir langsam genug, um wirklich hinzusehen: auf die Situation, in der Sie stehen, auf die Gefühle darunter und auf die Geschichte, die Sie sich selbst darüber erzählen. Es muss nichts dramatisch sein, um Raum zu verdienen. Viele Menschen kommen, weil etwas nicht mehr passt — und weil sie verstehen möchten, warum, bevor sie die nächste Entscheidung treffen.",
      "In der Beratung betrachten wir innere Muster, Emotionen und Erfahrungen, um ein tieferes Verständnis für Sie selbst zu entwickeln und neue Möglichkeiten für Veränderung entstehen zu lassen. Muster sind selten zufällig. Wie Sie Verantwortung übernehmen, den Frieden bewahren, durchhalten oder andere auf vorsichtigem Abstand halten — all das hatte irgendwann in Ihrem Leben einen guten Grund. Wenn ein Muster klar und mit Wohlwollen sichtbar wird, läuft es nicht länger unbemerkt im Hintergrund mit. Und Sie gewinnen eine Wahlmöglichkeit zurück, von der Sie nicht wussten, dass Sie sie haben.",
      "Die Anliegen sind unterschiedlich. Lebensübergänge wie ein Umzug, eine Trennung, ein beruflicher Wandel, ein Verlust oder Elternschaft — Veränderungen, die mehr innere Anpassung verlangen, als das Umfeld meist wahrnimmt. Phasen der Unsicherheit und Neuorientierung, Fragen nach Sinn und Richtung. Anhaltende Belastung, Überforderung und Erschöpfung in fordernden Rollen. Innere Unruhe, das Gefühl, nicht abschalten zu können, körperliche Stressreaktionen, die nicht zur Ruhe kommen. Beziehungsthemen, wiederkehrende Konflikte oder die besondere Komplexität eines Lebens zwischen Ländern, Kulturen und Sprachen.",
      "Ich arbeite systemisch und integrativ. Systemisch heißt: Mich interessiert der Zusammenhang — Beziehungen, Rollen, Familiengeschichte und Erwartungen, die prägen, wie Sie sich selbst erleben. Integrativ heißt: Ich schöpfe aus mehreren fundierten Perspektiven statt aus einer einzigen Methode — systemische Beratung, körperorientierte Arbeit mit [Somatic Experiencing®](/de/angebot/somatic-experiencing), Anteilearbeit und achtsamkeitsbasierte Ansätze. Was zum Einsatz kommt, richtet sich nach Ihnen und nicht nach einem festen Ablauf. Manche Sitzungen bestehen vor allem aus Gespräch und Reflexion, andere schließen die stille Aufmerksamkeit dafür ein, was Ihr Körper währenddessen wahrnimmt.",
      "Sie bleiben die Expert:in für Ihr eigenes Leben. Meine Aufgabe ist es, fachliche Expertise, aufmerksames Zuhören und Perspektiven einzubringen, die aus der Situation heraus schwer zu erreichen sind — nicht, Ihnen Antworten zu geben. Die Gespräche sind vertraulich, unaufgeregt und richten sich nach dem, was an diesem Tag da ist. Manche Klient:innen kommen für einige fokussierte Gespräche zu einer konkreten Frage, andere schätzen eine längere, verlässliche Begleitung durch eine Zeit der Veränderung. Beides ist möglich, und wir schauen gemeinsam immer wieder auf das passende Tempo.",
      "Die Gespräche finden online per Video statt, auf Deutsch oder Englisch, und dauern 60 Minuten. Ich arbeite mit Klient:innen in der Schweiz, in Deutschland und international — so bleibt die Begleitung auch über Umzüge, Reisen und dichte Phasen hinweg möglich. Online bedeutet zugleich Diskretion: Sie sprechen aus Ihrem eigenen Raum, ohne Wartezimmer und ohne Anfahrtswege einplanen zu müssen.",
      "Wenn Sie herausfinden möchten, ob das für Sie passt, ist ein [kostenloses 15-minütiges Erstgespräch](/de/contact) der einfachste Anfang. Ein kurzes, entspanntes Gespräch: Sie erzählen so viel oder so wenig, wie Sie möchten, stellen Ihre Fragen und entscheiden danach in Ruhe — ganz ohne Verpflichtung.",
    ],
    facts: [
      { label: "Dauer", value: "60 Minuten" },
      { label: "Format", value: "Online (Video)" },
      { label: "Sprachen", value: "Deutsch & Englisch" },
    ],
    crossLinks: [
      {
        label: "Beratung, Psychotherapie und Coaching im Vergleich",
        href: "/de/blog/counselling-vs-therapy-vs-coaching",
      },
      { label: "Wie Online-Beratung funktioniert", href: "/de/blog/how-online-counselling-works" },
    ],
  },

  "wwm-couples-counselling": {
    metaTitle: "Paarberatung — Theresa Frische",
    metaDescription:
      "Paarberatung online auf Deutsch und Englisch: ein geschützter Raum für ehrliche Begegnung, bessere Kommunikation und neue Impulse. Kostenloses Erstgespräch.",
    eyebrow: "Angebot",
    heading: "Paarberatung",
    lead: "Ein geschützter Raum für ehrliche Begegnung, gegenseitiges Verstehen und neue Impulse für Ihre Beziehung.",
    paras: [
      "Paarberatung schafft einen geschützten Raum, in dem Sie beide ehrlich sprechen und wirklich gehört werden können — auch das, was sonst zu spät am Abend gesagt wird oder gar nicht. Gemeinsam erkunden wir die festgefahrenen Muster, in denen Sie immer wieder landen, die Bedürfnisse dahinter und eine bewusstere Form der Kommunikation. Meine Aufgabe ist nicht, zu entscheiden, wer recht hat, sondern das Gespräch wieder möglich zu machen.",
      "Die meisten Paare, die zu mir kommen, stecken nicht in einer Krise. Sie sind müde von derselben Auseinandersetzung. Etwas hat sich leise verschoben: weniger Neugier, mehr Effizienz; mehr Organisation, weniger Nähe. Oder umgekehrt: ein einzelnes unaufgelöstes Ereignis, das in immer neuen Verkleidungen zurückkehrt. Lange Beziehungen verändern ihre Form rund um das echte Leben — berufliche Belastung, kleine Kinder, älter werdende Eltern, ein Umzug in ein anderes Land, unterschiedliche Bedürfnisse nach Nähe und Eigenständigkeit. Früh zu kommen, bevor der Abstand fest wird, macht die Arbeit meist kürzer und leichter.",
      "In den Sitzungen verlangsamen wir die Dynamik so weit, dass sie sichtbar wird. Fast jedes Paar hat eine Schleife: Eine Person sucht Kontakt, die andere zieht sich zurück, um den Frieden zu halten; eine benennt Probleme, die andere hört Kritik. Von innen fühlt es sich an wie ein Streit über die Spülmaschine oder den Kalender. Von außen betrachtet versuchen zwei Menschen, etwas zu schützen, das ihnen wichtig ist — und greifen dabei auf eine Weise danach, die beim anderen nicht ankommen kann. Wenn Sie beide die Schleife im Entstehen erkennen, sind Sie darin keine Gegner mehr.",
      "Von dort aus arbeiten wir konkret. Wie Sie ein schwieriges Thema so ansprechen, dass der erste Satz nicht schon die Abwehr auslöst. Wie Sie präsent bleiben, wenn Sie sich angegriffen fühlen. Wie Sie nach einem Bruch aktiv wieder in Verbindung kommen, statt zu warten, bis sich die Stimmung von allein klärt. Wie über Bedürfnisse, Sexualität, Geld, Familie und Zeit gesprochen werden kann, ohne dass daraus sofort eine Verhandlung wird. Ich halte den Raum ausgewogen und sicher, damit niemand von Ihnen mit dem Gefühl geht, in der Minderheit gewesen zu sein.",
      "Ich arbeite auch mit internationalen und interkulturellen Paaren, auf Deutsch und Englisch, und mit Partner:innen, die keine gemeinsame Erstsprache haben. Was wie ein Charakterunterschied wirkt, ist oft ein Unterschied darin, was jede:r von Familie, Konflikt, Eigenständigkeit und Zugehörigkeit gelernt hat zu erwarten. Das offen zu benennen, bringt meist Erleichterung: Das Thema liegt dann zwischen Ihnen und dem Muster — und nicht in einem von Ihnen.",
      "Paargespräche dauern 60 bis 120 Minuten und finden online per Video statt. Das längere Format tut zwei Menschen meist gut, weil beide Raum bekommen, ohne dass die Uhr das Gespräch genau dort abbricht, wo es gerade fruchtbar wird. Länge und Rhythmus legen wir gemeinsam fest. Einzelgespräche begleitend zur Paararbeit sind möglich, wenn das hilfreich ist — immer transparent innerhalb des gemeinsamen Rahmens. Wenn einer von Ihnen zuerst etwas für sich anschauen möchte, ist die [psychologische Beratung für Einzelpersonen](/de/angebot/psychologische-beratung) ein guter Anfang.",
      "Beginnen können Sie mit einem [kostenlosen 15-minütigen Erstgespräch](/de/contact). Die erste Kontaktaufnahme kann von einem von Ihnen ausgehen — viele melden sich zunächst allein — und es entsteht daraus keine Verpflichtung.",
    ],
    facts: [
      { label: "Dauer", value: "60–120 Minuten" },
      { label: "Format", value: "Online (Video)" },
      { label: "Sprachen", value: "Deutsch & Englisch" },
    ],
    crossLinks: [
      {
        label: "Wenn Nähe in einer langen Beziehung verloren geht",
        href: "/de/blog/growing-apart-growing-together",
      },
      { label: "Liebe über Kulturen hinweg", href: "/de/blog/love-across-cultures" },
    ],
  },

  "wwm-burnout-prevention": {
    metaTitle: "Burnout-Prävention — Theresa Frische",
    metaDescription:
      "Burnout-Prävention online auf Deutsch und Englisch: Stressmuster erkennen und Erholung finden, bevor Erschöpfung übernimmt. Kostenloses Erstgespräch möglich.",
    eyebrow: "Angebot",
    heading: "Burnout-Prävention",
    lead: "Stressmuster erkennen, bevor aus anhaltender Erschöpfung ein Zusammenbruch wird.",
    paras: [
      "Burnout kommt selten plötzlich. Es entwickelt sich schleichend — über anhaltenden Stress, Selbstüberforderung und die Gewohnheit, frühe Warnsignale zu übergehen, weil immer etwas Dringenderes wartet. In der Burnout-Prävention richten wir gemeinsam den Blick auf Ihre persönlichen Stressmuster, stärken Ihre Selbstwahrnehmung und erarbeiten konkrete Strategien zur Regulation und Erholung — solange Sie noch die Kraft haben, sie zu nutzen.",
      "Die Menschen, mit denen ich arbeite, sind meist sehr kompetent und hoch engagiert. Sie führen Teams, tragen Verantwortung, halten anderen den Rücken frei und liefern auch in schwierigen Phasen verlässlich. Genau darin liegt das Risiko. Leistungsfähigkeit verschiebt den Moment der Wahrheit: Man kann lange kompensieren — und weil man gut kompensiert, greift niemand ein, man selbst am wenigsten. Frühe Anzeichen sind leise und leicht zu erklären. Schlaf, der nicht mehr erholt. Innere Unruhe neben einer schweren Müdigkeit. Wochenenden, die nichts zurückgeben. Weniger Geduld mit den Menschen, die man liebt. Eine schleichende Distanz zu einer Arbeit, die einmal wichtig war. Körperliche Stressreaktionen — Anspannung, Enge im Brustraum, Verdauung, häufige kleine Infekte — die sich melden, bevor es Worte gibt.",
      "Deshalb beginnen wir nicht mit einer weiteren Routine im Kalender, sondern damit, Ihr Muster sichtbar zu machen. Was zehrt tatsächlich an Ihnen, und was sieht nur anstrengend aus? Wo entsteht die Belastung durch die Menge an Arbeit, und wo dadurch, wie Sie sie tragen — durch die Schwierigkeit abzugeben, die Scheu zu enttäuschen, den Anspruch, den Sie an keine andere Person stellen würden? Welche Werte halten Sie in einer Konstellation, die Sie zu viel kostet? Hier ist die systemische Perspektive hilfreich: Sie verortet die Belastung in einem realen Zusammenhang aus Rollen, Erwartungen und Beziehungen, statt sie zu einem persönlichen Versagen zu machen.",
      "Neben diesem Verstehen arbeiten wir mit Ihrem Nervensystem, denn Einsicht allein stellt keine Kraft wieder her. Dauerhafter Druck trainiert den Körper darauf, in Bereitschaft zu bleiben — und ein Körper, der diesen Modus nie ganz verlässt, kann sich nicht erholen, so vernünftig Ihre Vorsätze auch sind. Mit körperorientierten Ansätzen, darunter [Somatic Experiencing®](/de/angebot/somatic-experiencing), lernen Sie, die früheren, feineren Signale wahrzunehmen — den Punkt, an dem Sie noch müde und nicht schon leer sind — und bewusst wieder aus der Aktivierung herauszufinden, auf Wegen, die in einen echten Arbeitstag passen und nicht in einen idealen.",
      "Daraus entsteht etwas Praktisches, das klein genug ist, um eine schwierige Woche zu überleben. Erholung, die wirklich erholt, statt freier Zeit, die still zur nächsten Verpflichtung wird. Grenzen, die Sie in Ihrer tatsächlichen Rolle halten können, in Ihrer eigenen Sprache formuliert. Wege, Überlastung zu bemerken, bevor sie zu einer Entscheidung wird, die Ihnen abgenommen wird. Wo die Belastung strukturell ist, schauen wir zudem ehrlich darauf, was in Ihrer Hand liegt und was zur Organisation gehört — eine wichtige Unterscheidung, denn sich in einer nicht tragfähigen Konstellation noch mehr anzustrengen, ist selbst eine Quelle von Erschöpfung.",
      "Die Gespräche finden online per Video statt, auf Deutsch oder Englisch, und dauern 60 Minuten. Ich arbeite mit Klient:innen in der Schweiz, in Deutschland und international, sodass die Begleitung auch bei Reisen und dichten Terminplänen tragfähig bleibt. Viele beginnen in einer Phase, die sie als intensiv, aber machbar beschreiben — der sinnvollste Zeitpunkt, und der Moment, in dem Prävention diesen Namen noch verdient.",
      "Wenn Ihnen das vertraut vorkommt: Ein [kostenloses 15-minütiges Erstgespräch](/de/contact) ist ein einfacher erster Schritt — kurz, vertraulich und ohne Verpflichtung.",
    ],
    facts: [
      { label: "Dauer", value: "60 Minuten" },
      { label: "Format", value: "Online (Video)" },
      { label: "Sprachen", value: "Deutsch & Englisch" },
    ],
    crossLinks: [
      {
        label: "Beratung für Mitarbeitende und Führungskräfte",
        href: "/de/fuer-unternehmen/beratung-mitarbeitende",
      },
      {
        label: "Frühe Anzeichen von Burnout erkennen",
        href: "/de/blog/running-on-empty-early-signs-of-burnout",
      },
    ],
  },

  "wwm-somatic-experiencing": {
    metaTitle: "Somatic Experiencing® — Theresa Frische",
    metaDescription:
      "Somatic Experiencing® online auf Deutsch und Englisch: körperorientierte Arbeit mit Stress, Überforderung und belastenden Erfahrungen. Kostenloses Erstgespräch.",
    eyebrow: "Angebot",
    heading: "Somatic Experiencing®",
    lead: "Ein körperorientierter Ansatz zur Verarbeitung von Stress, Überforderung und belastenden Erfahrungen.",
    paras: [
      "Somatic Experiencing® ist ein körperorientierter Ansatz für die Arbeit mit Stress, Überforderung und belastenden Erfahrungen. Statt Erlebtes nur gedanklich zu bearbeiten, richten wir den Blick auf die Signale des Nervensystems — auf Anspannung, Schutzreaktionen und Impulse, die nie zu Ende gehen konnten. So entsteht Raum, um überwältigende Erfahrungen sanft zu verarbeiten, mehr innere Stabilität aufzubauen und wieder handlungsfähig zu werden.",
      "Viele Menschen kommen, die ihre eigene Geschichte längst gut verstehen — und sich wundern, dass dieses Verstehen wenig verändert hat. Sie können genau erklären, warum sie so reagieren, wie sie reagieren, und finden sich dennoch in einer bestimmten Besprechung angespannt wieder, von einem Tonfall überflutet oder abends nicht in der Lage, zur Ruhe zu kommen, obwohl der Tag objektiv gut war. Diese Lücke ist kein Mangel an Einsicht oder Willen. Manche Reaktionen sind weit unterhalb der Sprache organisiert und brauchen eine andere Art von Aufmerksamkeit als Analyse.",
      "Das Nervensystem prüft fortlaufend, ob der Moment sicher ist, und bereitet Sie entsprechend vor: Es mobilisiert für Anstrengung oder fährt Aktivität herunter, wenn Anstrengung aussichtslos erscheint. Beides sind kluge Reaktionen. Schwierig wird es, wenn eine Reaktion, die einmal notwendig war, danach eingeschaltet bleibt — sodass der Körper eine alltägliche Situation weiterhin als fordernd liest. Spürbar wird das als innere Unruhe, als Schwierigkeit, zur Ruhe zu kommen, als Engegefühl in Brust oder Kiefer, als Erschöpfung, an die Schlaf nicht heranreicht, oder als eigentümliche Distanz zum eigenen Leben.",
      "In der Sitzung ist das ruhiger, als viele erwarten. Wir arbeiten langsam und in kleinen Schritten, innerhalb dessen, was für Sie gut aushaltbar bleibt. Ich lade Sie ein, wahrzunehmen, wo sich im Körper etwas zeigt, während Sie sprechen, was in den Momenten passiert, in denen es nachlässt, und was Ihre Aufmerksamkeit tut, wenn sie sich einem schwierigen Rand nähert. Wir kehren immer wieder zu dem zurück, was Halt gibt, sodass Aktivierung in Dosierungen begegnet wird, die Ihr System auch abschließen kann. Sie behalten das Tempo in der Hand, und es besteht keine Notwendigkeit, Einzelheiten zu erzählen, die Sie nicht schildern möchten.",
      "Mit der Zeit verändert das etwas Praktisches. Sie bemerken Ihre eigenen Signale früher, während noch Raum zum Reagieren ist. Stress steigt an und kommt danach wirklich wieder herunter, statt sich über die Woche anzusammeln. Gefühle werden leichter zu spüren, und es kostet weniger Energie, sie auf Abstand zu halten. Viele Klient:innen beschreiben eine wachsende innere Stabilität, mehr Belastbarkeit unter Druck und eine neue, spürbare Präsenz im eigenen Körper und Alltag.",
      "Ich bin zertifizierte Somatic Experiencing®-Praktikerin, mit weiteren Fortbildungen in Ego-State-Arbeit, Hakomi und weiteren körperorientierten Methoden für die Arbeit mit Stress und Überforderung. Somatic Experiencing® ist dabei selten die ganze Arbeit: Es steht meist in einem breiteren integrativen und systemischen Rahmen, sodass das, was Ihr Körper hält, die erlernten Muster und Ihr Lebenskontext Teil desselben Gesprächs sind. Es lässt sich gut mit [psychologischer Beratung](/de/angebot/psychologische-beratung) und mit [Burnout-Prävention](/de/angebot/burnout-praevention) verbinden.",
      "Die Sitzungen finden online per Video statt, auf Deutsch oder Englisch, und dauern 60 Minuten. Diese Arbeit lässt sich gut online umsetzen: Sie sind in Ihrem eigenen Raum, was vielen hilft, schneller anzukommen als in einer fremden Umgebung. Wenn Sie herausfinden möchten, ob es zu Ihnen passt, beginnen Sie mit einem [kostenlosen 15-minütigen Erstgespräch](/de/contact) — ohne Verpflichtung.",
    ],
    facts: [
      { label: "Dauer", value: "60 Minuten" },
      { label: "Format", value: "Online (Video)" },
      { label: "Sprachen", value: "Deutsch & Englisch" },
    ],
    crossLinks: [
      { label: "Was ist Somatic Experiencing®?", href: "/de/blog/what-is-somatic-experiencing" },
      {
        label: "Ihr Nervensystem einfach erklärt",
        href: "/de/blog/nervous-system-plain-english-guide",
      },
    ],
  },
};
