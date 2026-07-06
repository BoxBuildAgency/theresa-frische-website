import type { BlogPost } from "../types";
import { existingEn } from "./set-existing";
import { setAEn } from "./set-a";
import { setBEn } from "./set-b";
import { setCEn } from "./set-c";
import { setDEn } from "./set-d";
import { setEEn } from "./set-e";

// All English blog posts. Display order (newest-first) is applied in content/index.ts.
export const blogPostsEn: BlogPost[] = [
  ...existingEn,
  ...setAEn,
  ...setBEn,
  ...setCEn,
  ...setDEn,
  ...setEEn,
];
