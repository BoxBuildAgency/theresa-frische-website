import type { Locale } from "@/content/types";

/**
 * The home hero shows a shortened credential line; the About page shows the full
 * one. There is deliberately only one editable source — `about.credentials` —
 * so the two can never drift apart. This derives the short form from it.
 *
 *   About  M.Sc. Clinical Psychology · Somatic Experiencing® Practitioner · Systemic & Integrative Counsellor
 *   Hero   M.Sc. Psychology · Somatic Experiencing® Practitioner · Systemic Counsellor
 *
 * Only the two known long forms are shortened. Anything else is passed through
 * untouched, so if Theresa rewrites her credentials the hero shows her wording
 * in full rather than a mangled version of it — longer than intended, but never
 * wrong. Both locales are handled because the German compounds differ.
 */
const SHORTENINGS: Record<Locale, [RegExp, string][]> = {
  en: [
    [/\bM\.Sc\.\s+Clinical\s+Psychology\b/, "M.Sc. Psychology"],
    [/\bSystemic\s+&\s+Integrative\s+Counsellor\b/, "Systemic Counsellor"],
  ],
  de: [
    [/\bM\.Sc\.\s+Klinische\s+Psychologie\b/, "M.Sc. Psychologie"],
    [/\bSystemische\s+&\s+Integrative\s+Beraterin\b/, "Systemische Beraterin"],
  ],
};

export function shortCredentials(full: string, locale: Locale): string {
  return SHORTENINGS[locale].reduce((acc, [re, to]) => acc.replace(re, to), full);
}
