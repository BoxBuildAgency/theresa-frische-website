import type { SiteContent } from "./types";
import { loadContent } from "./load";

// English content, loaded from the Keystatic-managed JSON in `content/en/`.
// Edit it in the admin at /keystatic — not here.
export const en: SiteContent = loadContent("en");
