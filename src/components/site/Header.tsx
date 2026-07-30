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
  // Desktop dropdowns: `hovered` follows the pointer, `pinned` survives a click or
  // keyboard activation. A group is open if either is set, so clicking never
  // fights the hover state (which would make the chevron look broken).
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  // Mobile menu accordion, tracked separately from the desktop dropdowns.
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const close = () => {
    setOpen(false);
    setMobileGroup(null);
    setPinned(null);
    setHovered(null);
  };
  const isOpenGroup = (href: string) => pinned === href || hovered === href;

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** A nav item is active when it is the current page or an ancestor of it. */
  const isActive = (item: NavItem) =>
    pathname === item.href ||
    (item.href !== home && pathname?.startsWith(`${item.href}/`)) ||
    (item.children ?? []).some((child) => pathname === child.href);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <Container size="wide">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Wordmark */}
          <Link href={home} className="group flex flex-col leading-none" aria-label={brandName}>
            <span className="font-serif text-xl text-ink sm:text-2xl">{brandName}</span>
            <span className="eyebrow mt-1 text-[0.62rem]">{brandTagline}</span>
          </Link>

          {/* Desktop nav, with dropdowns */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(item);
              if (!item.children?.length) {
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
              }
              const groupOpen = isOpenGroup(item.href);
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setHovered(item.href)}
                  onMouseLeave={() => {
                    setHovered(null);
                    setPinned(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setPinned(null);
                      setHovered(null);
                    }
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className={clsx(
                        "text-sm transition-colors hover:text-forest",
                        active ? "text-forest" : "text-ink-soft",
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={groupOpen}
                      aria-label={`${item.label} — ${menuOpen}`}
                      onClick={() => setPinned(pinned === item.href ? null : item.href)}
                      onFocus={() => setHovered(item.href)}
                      className="flex h-5 w-4 items-center justify-center text-ink-muted transition-colors hover:text-forest"
                    >
                      <Chevron open={groupOpen} />
                    </button>
                  </div>

                  {/* Dropdown panel */}
                  <div
                    hidden={!groupOpen}
                    className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
                  >
                    <ul className="rounded-2xl border border-line bg-cream p-2 shadow-lg shadow-pine/5">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => {
                              setPinned(null);
                              setHovered(null);
                            }}
                            className={clsx(
                              "block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-sand hover:text-forest",
                              pathname === child.href ? "text-forest" : "text-ink-soft",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle locale={locale} label={langToggleLabel} className="hidden sm:block" />
            {/* Wrapped rather than using `hidden md:inline-flex` on the button:
                the button's base class already sets `inline-flex`, and Tailwind
                resolves that conflict by CSS source order, not class order, so the
                utility could lose and the CTA would overlap the wordmark on mobile. */}
            <div className="hidden md:block">
              <ButtonLink href={bookCta.href} variant="primary">
                {bookCta.label}
              </ButtonLink>
            </div>

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

      {/* Mobile menu panel — parents expand as accordions */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-cream lg:hidden"
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

            {nav.map((item) => {
              if (!item.children?.length) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="rounded-lg px-2 py-3 text-base text-ink-soft transition-colors hover:bg-sand hover:text-forest"
                  >
                    {item.label}
                  </Link>
                );
              }
              const groupOpen = mobileGroup === item.href;
              return (
                <div key={item.href}>
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex-1 rounded-lg px-2 py-3 text-base text-ink-soft transition-colors hover:bg-sand hover:text-forest"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={groupOpen}
                      aria-label={`${item.label} — ${groupOpen ? menuClose : menuOpen}`}
                      onClick={() => setMobileGroup(groupOpen ? null : item.href)}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted"
                    >
                      <Chevron open={groupOpen} />
                    </button>
                  </div>
                  <ul hidden={!groupOpen} className="mb-1 ml-3 border-l border-line pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className="block rounded-lg px-2 py-2.5 text-sm text-ink-soft transition-colors hover:bg-sand hover:text-forest"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-5">
              <LanguageToggle locale={locale} label={langToggleLabel} />
              <ButtonLink href={bookCta.href} variant="primary" onClick={close}>
                {bookCta.label}
              </ButtonLink>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={clsx("transition-transform duration-200", open && "rotate-180")}
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
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
