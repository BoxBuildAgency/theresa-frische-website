import type { Locale } from "@/content/types";

/**
 * The home hero shows a shortened credential line; the About page shows the full
 * one. There is deliberately only one editable source — `about.credentials` —
 * so the two can never drift apart. This derives the short form from it.
 *
 *   About  M.Sc. Clinical Psychology · Somatic Experiencing® Practitioner · Systemic & Integrative Counsellor
 *   Hero   M.Sc. Psychology · Somatic Experiencing® Practitioner · Systemic Counsellor
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

/**
 * Hard ceiling for the hero line, in characters.
 *
 * Measured, not guessed. At 375px the credential line renders in a 327px box at
 * 12px with an 18px line height. The number of characters that still fit two
 * lines depends on the glyphs:
 *
 *   typical mixed case   110
 *   German compounds     109
 *   wide glyphs (W/M)     90
 *   ALL CAPS              87   ← worst case, and therefore the budget
 *
 * The current short form is 75 characters, so this never fires today. It exists
 * for the case the shortening rules do not recognise — if Theresa rewrites her
 * credentials, the hero must not fall back to a full string that wraps to three
 * or four lines, which is the problem the short form was created to solve.
 */
const MAX_HERO_CHARS = 87;

/** Separators she is likely to use between credentials. */
const DELIMITERS = [" · ", " — ", " – ", ", "];

function truncateAtDelimiter(text: string, max: number): string {
  // Prefer the last delimiter that still fits, so the line ends on a whole
  // credential rather than mid-word.
  const cut = DELIMITERS.map((d) => text.lastIndexOf(d, max)).reduce((a, b) => Math.max(a, b), -1);
  if (cut > 0) return text.slice(0, cut).trimEnd();
  // No delimiter to break on — fall back to a word boundary.
  const space = text.lastIndexOf(" ", max);
  return (space > 0 ? text.slice(0, space) : text.slice(0, max)).trimEnd();
}

export function shortCredentials(full: string, locale: Locale): string {
  const short = SHORTENINGS[locale].reduce((acc, [re, to]) => acc.replace(re, to), full);
  if (short.length <= MAX_HERO_CHARS) return short;
  return truncateAtDelimiter(short, MAX_HERO_CHARS);
}
