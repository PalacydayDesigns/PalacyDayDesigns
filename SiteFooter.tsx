import Link from "next/link";

import { BRAND, GALLERY_CATEGORIES, SHOP_CATEGORIES } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-sand/70 bg-gradient-to-b from-transparent to-mist/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND.logo}
                alt={`${BRAND.name} logo`}
                className="logo-blend h-14 w-14 scale-[1.45] rounded-full object-cover"
              />
              <div>
                <p className="font-display text-lg font-medium tracking-[0.16em] text-plum-deep uppercase">
                  Palacyday
                </p>
                <p className="font-serif text-[0.7rem] tracking-[0.42em] text-indigo-rich/75 uppercase">
                  Designs
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/70">
              {BRAND.tagline} Custom creations built through a hybrid digital workflow —
              generative concepting, hand digital painting, and precise vector craft.
            </p>
            <p className="mt-6 eyebrow">Commissions & questions</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-2 inline-block font-serif text-xl tracking-[0.04em] text-indigo-rich underline decoration-plum/40 underline-offset-8 transition hover:text-plum"
            >
              {BRAND.email}
            </a>
            <p className="mt-3 text-xs tracking-[0.14em] text-ink/50 uppercase">
              {BRAND.hours}
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
              <li>
                <Link href="/portfolio" className="transition hover:text-plum">
                  Portfolio & Gallery
                </Link>
              </li>
              <li>
                <Link href="/shop" className="transition hover:text-plum">
                  Shop & Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="transition hover:text-plum">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-plum">
                  About the Artist
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-plum">
                  Custom Inquiry
                </Link>
              </li>
              <li>
                <Link href="/studio" className="transition hover:text-plum">
                  Studio Inbox
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Galleries</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
              {GALLERY_CATEGORIES.map((category) => (
                <li key={category.key}>
                  <Link
                    href={`/portfolio?filter=${category.key}`}
                    className="transition hover:text-plum"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Shop categories</p>
            <ul className="mt-4 space-y-3.5 text-sm text-ink/70">
              {SHOP_CATEGORIES.map((category) => (
                <li key={category.key}>
                  <Link href={`/shop#${category.key}`} className="transition hover:text-plum">
                    <span className="block">{category.label}</span>
                    <span className="mt-0.5 block font-serif text-xs tracking-[0.08em] text-brass">
                      {category.priceBand}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wash-divider mt-14" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs tracking-[0.14em] text-ink/50 uppercase sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name} · {BRAND.subtitle}
          </p>
          <p>{BRAND.studio}</p>
        </div>
      </div>
    </footer>
  );
}
