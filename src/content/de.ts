import type { SiteContent } from "./types";
import { loadContent } from "./load";

// Deutscher Inhalt, geladen aus den Keystatic-Dateien in `content/de/`.
// Bearbeitung im Admin unter /keystatic — nicht hier.
export const de: SiteContent = loadContent("de");
