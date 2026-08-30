"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { GALLERY_CATEGORIES, type CategoryKey, type GalleryPiece } from "@/lib/content";

type Filter = CategoryKey | "all";

type Props = {
  pieces: GalleryPiece[];
  initialFilter?: Filter;
};

const ratioClass: Record<GalleryPiece["orientation"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export default function GalleryExplorer({ pieces, initialFilter = "all" }: Props) {
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? pieces : pieces.filter((piece) => piece.category === filter)),
    [filter, pieces],
  );

  const activeIndex = filtered.findIndex((piece) => piece.slug === activeSlug);
  const active = activeIndex >= 0 ? filtered[activeIndex] : null;

  const step = useCallback(
    (direction: number) => {
      if (activeIndex < 0 || filtered.length === 0) return;
      const next = (activeIndex + direction + filtered.length) % filtered.length;
      setActiveSlug(filtered[next].slug);
    },
    [activeIndex, filtered],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSlug(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  const tabs: { key: Filter; label: string; short: string }[] = [
    { key: "all", label: "All Work", short: "All" },
    ...GALLERY_CATEGORIES.map((category) => ({
      key: category.key as Filter,
      label: category.label,
      short: category.short,
    })),
  ];

  const activeCategory = GALLERY_CATEGORIES.find((category) => category.key === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {tabs.map((tab) => {
          const isActive = tab.key === filter;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`rounded-full border px-4 py-2.5 font-display text-[0.72rem] tracking-[0.16em] uppercase transition-all duration-300 ${
                isActive
                  ? "border-transparent bg-gradient-to-r from-plum-deep to-indigo-rich text-cream shadow-[0_14px_30px_-18px_rgba(58,37,104,0.9)]"
                  : "border-plum/20 bg-white/50 text-ink/65 hover:border-plum/45 hover:text-plum"
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.short}</span>
            </button>
          );
        })}
      </div>

      <p className="serif-sub mt-5 max-w-2xl text-[0.98rem] leading-relaxed">
        {activeCategory
          ? activeCategory.description
          : "Every piece below began as a conversation and a folder of reference photos. Tap any image for medium notes and the room or event it was made for."}
      </p>

      <p className="mt-3 text-[0.7rem] tracking-[0.2em] text-ink/45 uppercase">
        Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
      </p>

      <div className="masonry mt-9">
        {filtered.map((piece, pieceIndex) => (
          <button
            key={piece.slug}
            type="button"
            onClick={() => setActiveSlug(piece.slug)}
            style={{ animationDelay: `${Math.min(pieceIndex, 8) * 45}ms` }}
            className="group animate-fade-up block w-full overflow-hidden rounded-2xl border border-white/70 bg-white/60 text-left shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <div className={`relative w-full overflow-hidden ${ratioClass[piece.orientation]}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={piece.imageUrl}
                alt={piece.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-3 font-serif text-xs tracking-[0.28em] text-cream uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View piece
              </span>
            </div>
            <div className="px-5 py-4">
              <p className="font-display text-base leading-snug text-navy">{piece.title}</p>
              <p className="mt-1.5 font-serif text-[0.82rem] tracking-[0.06em] text-plum italic">
                {piece.medium}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-navy/80 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActiveSlug(null)}
        >
          <div
            className="animate-fade-up relative my-auto w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/50 bg-cream shadow-[0_50px_120px_-40px_rgba(0,0,0,0.75)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActiveSlug(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-navy/40 text-lg text-cream backdrop-blur-sm transition hover:bg-navy/70"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              <div className="relative bg-navy/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.imageUrl}
                  alt={active.title}
                  className="h-full max-h-[70vh] w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous piece"
                    onClick={() => step(-1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 bg-navy/40 text-cream backdrop-blur-sm transition hover:bg-navy/70"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next piece"
                    onClick={() => step(1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 bg-navy/40 text-cream backdrop-blur-sm transition hover:bg-navy/70"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="eyebrow text-[0.62rem]">
                    {GALLERY_CATEGORIES.find((category) => category.key === active.category)?.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-tight font-light text-navy sm:text-3xl">
                    {active.title}
                  </h3>
                  <div className="wash-divider my-5" />
                  <p className="text-[0.95rem] leading-relaxed text-ink/75">{active.caption}</p>

                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-[0.65rem] tracking-[0.22em] text-ink/45 uppercase">
                        Medium notes
                      </dt>
                      <dd className="mt-1 font-serif text-[1.02rem] tracking-[0.03em] text-indigo-rich italic">
                        {active.medium}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] tracking-[0.22em] text-ink/45 uppercase">
                        Intended setting
                      </dt>
                      <dd className="mt-1 text-[0.95rem] text-ink/75">{active.setting}</dd>
                    </div>
                    {active.priceNote ? (
                      <div>
                        <dt className="text-[0.65rem] tracking-[0.22em] text-ink/45 uppercase">
                          Similar pieces
                        </dt>
                        <dd className="mt-1 font-display text-lg text-brass">
                          {active.priceNote}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/contact?piece=${encodeURIComponent(active.title)}&type=${active.category}`}
                    className="btn-primary"
                  >
                    Request a similar custom piece
                  </Link>
                  <Link href="/shop" className="btn-ghost">
                    See pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
