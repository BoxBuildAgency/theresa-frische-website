import type { BlogPost } from "../types";
import { existingDe } from "./set-existing";
import { setADe } from "./set-a";
import { setBDe } from "./set-b";
import { setCDe } from "./set-c";
import { setDDe } from "./set-d";
import { setEDe } from "./set-e";
import { setFDe } from "./set-f";

// All German blog posts. Display order (newest-first) is applied in content/index.ts.
export const blogPostsDe: BlogPost[] = [
  ...existingDe,
  ...setADe,
  ...setBDe,
  ...setCDe,
  ...setDDe,
  ...setEDe,
  ...setFDe,
];
