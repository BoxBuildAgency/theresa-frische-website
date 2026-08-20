"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { SiteContent } from "@/content/types";

/**
 * Sticky discovery-call bar, mobile only (Aug 2026 §2.4).
 *
 * Three rules shape this:
 *
 *  - It appears only after the hero has scrolled out, so the top of the page
 *    stays calm and the bar does not duplicate the CTA already sitting there.
 *  - It hides again over the footer and over the crisis resources block. Someone
 *    reading emergency numbers should not have a booking prompt across the
 *    bottom of the screen, and it must not cover the footer links.
 *  - It is dismissible, and stays dismissed for the rest of the visit.
 *
 * Visibility is driven by IntersectionObserver rather than scroll maths, so it
 * costs nothing per frame and stays correct when sections resize.
 */
export function StickyMobileCta({ cta }: { cta: SiteContent["cta"]["primary"] }) {
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // One rAF-throttled handler drives both flags, on scroll and on resize.
    //
    // This deliberately avoids IntersectionObserver. Geometry read from
    // getBoundingClientRect is trivial to reason about and to test, and the
    // observer added a second async source of truth for no benefit at this size.
    const BAR_ZONE = 140; // px of viewport the bar occupies, plus a margin

    let frame = 0;
    const measure = () => {
      frame = 0;
      const vh = window.innerHeight;
      setPastHero(window.scrollY > vh * 0.9);

      // Hide while anything we must not cover is inside the bar's strip at the
      // bottom of the screen: the footer, and the crisis resources block.
      const guards = document.querySelectorAll("footer, [data-sticky-cta-blocker]");
      let hit = false;
      for (const g of guards) {
        const r = g.getBoundingClientRect();
        if (r.bottom > vh - BAR_ZONE && r.top < vh) {
          hit = true;
          break;
        }
      }
      setBlocked(hit);
    };
    const onEvent = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onEvent, { passive: true });
    window.addEventListener("resize", onEvent);
    return () => {
      window.removeEventListener("scroll", onEvent);
      window.removeEventListener("resize", onEvent);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const show = pastHero && !blocked && !dismissed;

  return (
    <div
      ref={ref}
      aria-hidden={!show}
      data-past-hero={String(pastHero)}
      data-blocked={String(blocked)}
      data-dismissed={String(dismissed)}
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      } transition-all duration-300 ease-out`}
    >
      <div className="flex items-center gap-3 border-t border-line-strong bg-cream/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
        <Link
          href={cta.href}
          className="flex-1 rounded-full bg-forest px-5 py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-forest-dark"
          tabIndex={show ? undefined : -1}
        >
          {cta.label}
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          tabIndex={show ? undefined : -1}
          className="shrink-0 rounded-full border border-line-strong px-3 py-3 text-ink-soft transition-colors hover:text-ink"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
