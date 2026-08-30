"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BRAND, NAV_LINKS } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand/70 bg-cream/90 shadow-[0_10px_40px_-32px_rgba(21,27,59,0.8)] backdrop-blur-md"
          : "border-b border-transparent bg-cream/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BRAND.logo}
              alt={`${BRAND.name} logo`}
              className="logo-blend h-full w-full scale-[1.45] object-cover transition-transform duration-500 group-hover:scale-[1.55]"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-medium tracking-[0.16em] text-plum-deep uppercase sm:text-xl">
              Palacyday
            </span>
            <span className="mt-1 block font-serif text-[0.7rem] tracking-[0.42em] text-indigo-rich/75 uppercase sm:text-xs">
              Designs
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 font-display text-[0.78rem] tracking-[0.12em] uppercase transition-colors ${
                  active
                    ? "text-plum-deep"
                    : "text-ink/65 hover:text-plum"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-plum transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary !px-5 !py-2.5 text-[0.72rem]">
            Start a commission
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-plum/25 bg-white/60 text-plum-deep lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-sand/60 bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-sand/50 py-3 font-display text-sm tracking-[0.14em] uppercase text-ink/75 last:border-none"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4 w-full">
            Start a commission
          </Link>
          <a
            href={`mailto:${BRAND.email}`}
            className="mt-3 text-center font-serif text-sm tracking-[0.08em] text-plum"
          >
            {BRAND.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
