"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import type { GalleryPiece } from "@/lib/content";

type Props = {
  slides: GalleryPiece[];
};

export default function HeroCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => {
      setIndex((current) => {
        const total = slides.length;
        return (next + total) % total;
      });
    },
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length < 2) return;
    timer.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, slides.length]);

  if (slides.length === 0) return null;

  const active = slides[index];

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="relative z-10">
          <p className="eyebrow animate-fade-up">Custom Creations · Est. in a home studio</p>
          <h1 className="animate-fade-up mt-5 font-display text-4xl leading-[1.05] font-light text-navy sm:text-5xl lg:text-[3.9rem]">
            Bespoke mixed-media art for the
            <span className="text-plum"> people and places</span> you love.
          </h1>
          <p className="serif-sub animate-fade-up mt-6 text-lg tracking-[0.08em] sm:text-xl">
            Watercolor portraits · Specialty decor · Stationery · Logos
          </p>
          <p className="animate-fade-up mt-6 max-w-xl text-[0.98rem] leading-relaxed text-ink/75">
            Palacyday Designs is a hybrid studio: generative imaging roughs in the light,
            then everything that matters — faces, edges, letterforms, curves — is painted
            and drawn by hand. The software takes direction. The artist makes the calls.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Request a custom piece
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View the gallery
            </Link>
          </div>

          <dl className="animate-fade-up mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-sand/80 pt-7">
            {[
              { value: "12+ yrs", label: "Designing digitally" },
              { value: "2 rounds", label: "Revisions included" },
              { value: "300 dpi+", label: "Print-ready files" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-xl font-medium text-plum-deep sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[0.7rem] leading-snug tracking-[0.14em] text-ink/55 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-mist/70 via-transparent to-blush/40 blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/60 shadow-[var(--shadow-lift)] sm:aspect-[5/6]">
            {slides.map((slide, slideIndex) => (
              <div
                key={slide.slug}
                className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                  slideIndex === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={slideIndex !== index}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className={`h-full w-full object-cover ${
                    slideIndex === index ? "animate-drift" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              </div>
            ))}

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p
                key={`${active.slug}-eyebrow`}
                className="animate-soft-in font-serif text-[0.7rem] tracking-[0.34em] text-blush uppercase"
              >
                {active.heroEyebrow ?? active.medium}
              </p>
              <h2
                key={`${active.slug}-headline`}
                className="animate-soft-in mt-2 font-display text-2xl leading-tight font-light text-cream sm:text-[1.75rem]"
              >
                {active.heroHeadline ?? active.title}
              </h2>
              <p className="mt-2 text-sm text-cream/75">
                {active.title} — {active.priceNote ?? "Custom commission"}
              </p>

              <div className="mt-5 flex items-center gap-2.5">
                {slides.map((slide, slideIndex) => (
                  <button
                    key={slide.slug}
                    type="button"
                    aria-label={`Show ${slide.title}`}
                    onClick={() => go(slideIndex)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      slideIndex === index
                        ? "w-10 bg-cream"
                        : "w-4 bg-cream/40 hover:bg-cream/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(index - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/40 bg-navy/25 text-cream backdrop-blur-sm transition hover:bg-navy/50"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(index + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/40 bg-navy/25 text-cream backdrop-blur-sm transition hover:bg-navy/50"
              >
                ›
              </button>
            </div>
          </div>

          <div className="paper-card absolute -bottom-8 -left-4 hidden max-w-[15rem] rounded-2xl p-4 sm:block lg:-left-10">
            <p className="eyebrow text-[0.62rem]">Medium notes</p>
            <p className="mt-2 font-serif text-[0.95rem] leading-snug text-indigo-rich italic">
              {active.medium}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
