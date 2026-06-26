"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, NavItem, CtaLink } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "./LanguageToggle";
import { clsx } from "@/lib/clsx";

export interface HeaderProps {
  locale: Locale;
  home: string;
  brandName: string;
  brandTagline: string;
  nav: NavItem[];
  bookCta: CtaLink;
  menuOpen: string;
  menuClose: string;
  langToggleLabel: string;
}

export function Header(props: HeaderProps) {
  const { locale, home, brandName, brandTagline, nav, bookCta, menuOpen, menuClose, langToggleLabel } =
    props;
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <Container size="wide">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Wordmark */}
          <Link href={home} className="group flex flex-col leading-none" aria-label={brandName}>
            <span className="font-serif text-xl text-ink sm:text-2xl">{brandName}</span>
            <span className="eyebrow mt-1 text-[0.62rem]">{brandTagline}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "text-sm transition-colors hover:text-forest",
                    active ? "text-forest" : "text-ink-soft",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle locale={locale} label={langToggleLabel} className="hidden sm:block" />
            <ButtonLink href={bookCta.href} variant="primary" className="hidden md:inline-flex">
              {bookCta.label}
            </ButtonLink>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? menuClose : menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-forest lg:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-cream lg:hidden"
      >
        <Container>
          <nav className="flex flex-col gap-1 py-6" aria-label="Mobile">
            <Link
              href={home}
              onClick={close}
              className="rounded-lg px-2 py-3 text-base text-ink-soft transition-colors hover:bg-sand hover:text-forest"
            >
              {locale === "de" ? "Startseite" : "Home"}
            </Link>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-2 py-3 text-base text-ink-soft transition-colors hover:bg-sand hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-5">
              <LanguageToggle locale={locale} label={langToggleLabel} />
              <ButtonLink href={bookCta.href} variant="primary">
                {bookCta.label}
              </ButtonLink>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <line
        x1="3"
        y1={open ? "11" : "7"}
        x2="19"
        y2={open ? "11" : "7"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ transform: open ? "rotate(45deg)" : "none", transformOrigin: "center" }}
      />
      <line
        x1="3"
        y1={open ? "11" : "15"}
        x2="19"
        y2={open ? "11" : "15"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ transform: open ? "rotate(-45deg)" : "none", transformOrigin: "center" }}
      />
    </svg>
  );
}
