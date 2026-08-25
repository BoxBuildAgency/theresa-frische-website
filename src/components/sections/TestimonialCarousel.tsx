"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale, Quote } from "@/content/types";
import { QuoteBlock } from "@/components/ui/Pieces";
import { clsx } from "@/lib/clsx";

/** How long each testimonial holds before the next one slides in. */
const ROTATE_MS = 7000;

// Only `locale` crosses the server/client boundary, so these can stay as
// functions. Matches how the rest of the site handles the handful of strings
// that are chrome rather than content (see the "Learn more" labels).
const LABELS = {
  en: {
    region: "Testimonials",
    previous: "Previous testimonial",
    next: "Next testimonial",
    slide: (i: number, n: number) => `Testimonial ${i} of ${n}`,
  },
  de: {
    region: "Stimmen von Klient:innen",
    previous: "Vorherige Stimme",
    next: "Nächste Stimme",
    slide: (i: number, n: number) => `Stimme ${i} von ${n}`,
  },
} as const;

/**
 * Testimonials on a fixed-height band.
 *
 * The point of the carousel, in Theresa's words, is that she can keep adding
 * testimonials without the section getting longer. So the height is deliberately
 * not a function of which slide is showing: every testimonial is laid out side
 * by side in one flex row, and a flex row is as tall as its tallest item. The
 * band is therefore sized by the longest testimonial from the first paint and
 * never moves again, whether there are two of them or twenty.
 *
 * Every testimonial stays mounted and in the accessibility tree at all times.
 * Nothing is `hidden`, `aria-hidden`, or unmounted; the track is moved with a
 * transform behind `overflow-hidden`. A crawler and a screen reader both get all
 * of them in full, which is the reason for doing it this way rather than
 * rendering only the active slide.
 */
export function TestimonialCarousel({ items, locale }: { items: Quote[]; locale: Locale }) {
  const t = LABELS[locale];
  const count = items.length;
  const [index, setIndex] = useState(0);
  // Auto-rotation stops while a pointer is over the band or while focus is
  // anywhere inside it, so it cannot move the text out from under someone who
  // is reading it or tabbing through the controls.
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Hover is bound natively rather than through React's onMouseEnter. React
  // synthesises enter/leave from mouseover/mouseout at the root, which is
  // correct in a browser but is not reliably reproducible from a test or the
  // console, so the pause could not be proven. Native mouseenter/mouseleave
  // fire on the element itself and can be asserted on directly. Focus stays on
  // React's onFocus/onBlur, which map to focusin/focusout and do bubble.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const on = () => setPaused(true);
    const off = () => setPaused(false);
    el.addEventListener("mouseenter", on);
    el.addEventListener("mouseleave", off);
    return () => {
      el.removeEventListener("mouseenter", on);
      el.removeEventListener("mouseleave", off);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );

  useEffect(() => {
    // Reduced motion disables rotation outright rather than merely slowing it.
    // The arrows keep working, so nothing becomes unreachable.
    if (count < 2 || paused || reducedMotion) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [count, paused, reducedMotion]);

  // A single testimonial is not a carousel: no track, no controls, no timer.
  if (count === 0) return null;

  return (
    <div
      ref={rootRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={t.region}
      /* Not debug leftovers: these make the two states that are otherwise
         invisible - paused, and whether reduced motion switched rotation off -
         observable from the outside, which is the only way to assert on them
         in a test or from the console. */
      data-paused={paused ? "true" : "false"}
      data-autorotate={count > 1 && !reducedMotion ? "on" : "off"}
      // React's onFocus/onBlur map to focusin/focusout, so these fire for any
      // descendant, not just this element.
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className={clsx(
            "flex items-start",
            !reducedMotion && "transition-transform duration-700 ease-out",
          )}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((quote, i) => (
            <div
              key={quote.attribution}
              role="group"
              aria-roledescription="slide"
              aria-label={t.slide(i + 1, count)}
              className="w-full shrink-0"
            >
              <QuoteBlock quote={quote} tone="forest" className="!text-xl" />
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-10 flex items-center gap-3">
          <Arrow label={t.previous} onClick={() => go(-1)} direction="prev" />
          <Arrow label={t.next} onClick={() => go(1)} direction="next" />
          {/* Live only while the band is paused, which is exactly when someone
              is hovering or tabbing through it and therefore driving the change
              themselves. Left live during auto-rotation it would interrupt a
              screen reader every seven seconds, somewhere else on the page. */}
          <p
            aria-live={paused ? "polite" : "off"}
            aria-atomic="true"
            className="ml-2 text-sm tabular-nums text-cream/70"
          >
            {index + 1} / {count}
          </p>
        </div>
      )}
    </div>
  );
}

function Arrow({
  label,
  onClick,
  direction,
}: {
  label: string;
  onClick: () => void;
  direction: "prev" | "next";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      /* bg-pine/70 sits on top of the band's own scrim, so the arrow is drawn
         against a known colour (95.5% pine) rather than against whatever part
         of the photograph happens to be behind it. The glyph measures 11.67:1
         that way, worst case across the whole image.

         The border was cream/40 and measured 2.75:1 against the band, under the
         3:1 WCAG asks for the visible boundary of a control. cream/60 takes it
         to 4.17:1. The glyph was never the problem; the edge of the button
         was. */
      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/60 bg-pine/70 text-cream transition-colors hover:bg-pine/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d={direction === "prev" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
