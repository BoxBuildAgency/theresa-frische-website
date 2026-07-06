import Link from "next/link";
import type { ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Render inline markdown-style links [label](/href) as React nodes. */
export function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    if (/^https?:\/\//.test(href)) {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>,
      );
    } else {
      parts.push(
        <Link key={key++} href={href}>
          {label}
        </Link>,
      );
    }
    last = LINK_RE.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

/** Strip markdown links to plain text — for JSON-LD, meta, and other non-HTML uses. */
export function stripInlineLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}
