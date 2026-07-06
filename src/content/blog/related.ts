// Internal-linking architecture for the blog.
//
// RELATED drives the "Continue reading" block on each post: a hand-picked set of
// 3 same-cluster posts (never random, never self, same locale — the locale is
// applied at render time by looking the slugs up in the active locale's posts).
//
// PAGE_POSTS drives the "Further reading" sections on the service / pillar pages,
// pointing each page at its most relevant posts (per the cluster map).

/** slug -> exactly 3 thematically related slugs (same cluster). */
export const RELATED: Record<string, string[]> = {
  // Burnout & Overwhelm
  "functioning-well-vs-feeling-well": [
    "running-on-empty-early-signs-of-burnout",
    "switching-off-always-on-job",
    "reconnecting-with-yourself",
  ],
  "running-on-empty-early-signs-of-burnout": [
    "functioning-well-vs-feeling-well",
    "switching-off-always-on-job",
    "reconnecting-with-yourself",
  ],
  "switching-off-always-on-job": [
    "functioning-well-vs-feeling-well",
    "running-on-empty-early-signs-of-burnout",
    "burnout-in-leadership",
  ],
  "reconnecting-with-yourself": [
    "functioning-well-vs-feeling-well",
    "why-big-life-changes-feel-harder",
    "running-on-empty-early-signs-of-burnout",
  ],
  "supporting-a-partner-through-burnout": [
    "growing-apart-growing-together",
    "running-on-empty-early-signs-of-burnout",
    "functioning-well-vs-feeling-well",
  ],

  // Expat / International / Cross-cultural
  "built-a-life-abroad-not-at-home": [
    "english-speaking-counsellor-abroad",
    "relocation-stress-adjusting-new-country",
    "belonging-third-culture-adults",
  ],
  "english-speaking-counsellor-abroad": [
    "built-a-life-abroad-not-at-home",
    "how-online-counselling-works",
    "relocation-stress-adjusting-new-country",
  ],
  "relocation-stress-adjusting-new-country": [
    "built-a-life-abroad-not-at-home",
    "belonging-third-culture-adults",
    "why-big-life-changes-feel-harder",
  ],
  "belonging-third-culture-adults": [
    "built-a-life-abroad-not-at-home",
    "love-across-cultures",
    "reconnecting-with-yourself",
  ],
  "love-across-cultures": [
    "growing-apart-growing-together",
    "belonging-third-culture-adults",
    "built-a-life-abroad-not-at-home",
  ],

  // Couples / Relationships
  "growing-apart-growing-together": [
    "supporting-a-partner-through-burnout",
    "love-across-cultures",
    "reconnecting-with-yourself",
  ],

  // Somatic / Nervous System / Mindfulness
  "what-is-somatic-experiencing": [
    "nervous-system-plain-english-guide",
    "mindfulness-is-not-clearing-your-mind",
    "functioning-well-vs-feeling-well",
  ],
  "nervous-system-plain-english-guide": [
    "what-is-somatic-experiencing",
    "mindfulness-is-not-clearing-your-mind",
    "functioning-well-vs-feeling-well",
  ],
  "mindfulness-is-not-clearing-your-mind": [
    "what-is-somatic-experiencing",
    "nervous-system-plain-english-guide",
    "running-on-empty-early-signs-of-burnout",
  ],

  // Transitions / Identity
  "why-big-life-changes-feel-harder": [
    "reconnecting-with-yourself",
    "belonging-third-culture-adults",
    "relocation-stress-adjusting-new-country",
  ],

  // Organisations / Workplace
  "burnout-in-leadership": [
    "workplace-wellbeing-that-works",
    "switching-off-always-on-job",
    "resilience-is-not-toughing-it-out",
  ],
  "workplace-wellbeing-that-works": [
    "burnout-in-leadership",
    "resilience-is-not-toughing-it-out",
    "switching-off-always-on-job",
  ],
  "resilience-is-not-toughing-it-out": [
    "why-big-life-changes-feel-harder",
    "workplace-wellbeing-that-works",
    "running-on-empty-early-signs-of-burnout",
  ],

  // Positioning (cross-cutting)
  "counselling-vs-therapy-vs-coaching": [
    "how-online-counselling-works",
    "english-speaking-counsellor-abroad",
    "functioning-well-vs-feeling-well",
  ],
  "how-online-counselling-works": [
    "counselling-vs-therapy-vs-coaching",
    "english-speaking-counsellor-abroad",
    "built-a-life-abroad-not-at-home",
  ],
};

/** Fallback related set for any slug not in RELATED (keeps the block non-empty). */
export const RELATED_FALLBACK = [
  "counselling-vs-therapy-vs-coaching",
  "how-online-counselling-works",
  "functioning-well-vs-feeling-well",
];

/** Service / pillar page key -> the posts it should link out to (most relevant first). */
export const PAGE_POSTS: Record<string, string[]> = {
  "work-together": [
    "functioning-well-vs-feeling-well",
    "why-big-life-changes-feel-harder",
    "growing-apart-growing-together",
    "how-online-counselling-works",
  ],
  organisations: [
    "workplace-wellbeing-that-works",
    "burnout-in-leadership",
    "resilience-is-not-toughing-it-out",
    "switching-off-always-on-job",
  ],
  about: [
    "counselling-vs-therapy-vs-coaching",
    "what-is-somatic-experiencing",
    "belonging-third-culture-adults",
  ],
  "weekly-wellbeing": [
    "mindfulness-is-not-clearing-your-mind",
    "what-is-somatic-experiencing",
    "nervous-system-plain-english-guide",
  ],
};
