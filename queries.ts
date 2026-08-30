import { asc, sql } from "drizzle-orm";

import { db } from "@/db";
import { portfolioItems, shopOfferings } from "@/db/schema";
import {
  OFFERINGS_SEED,
  PORTFOLIO_SEED,
  type CategoryKey,
  type GalleryPiece,
  type Offering,
} from "@/lib/content";

let seedPromise: Promise<void> | null = null;

async function seedTables() {
  const [portfolioCount] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(portfolioItems);

  if (!portfolioCount || portfolioCount.count === 0) {
    await db.insert(portfolioItems).values(
      PORTFOLIO_SEED.map((piece) => ({
        slug: piece.slug,
        title: piece.title,
        category: piece.category,
        medium: piece.medium,
        setting: piece.setting,
        caption: piece.caption,
        imageUrl: piece.imageUrl,
        orientation: piece.orientation,
        featured: piece.featured,
        heroEyebrow: piece.heroEyebrow,
        heroHeadline: piece.heroHeadline,
        priceNote: piece.priceNote,
        sortOrder: piece.sortOrder,
      })),
    );
  }

  const [offeringCount] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(shopOfferings);

  if (!offeringCount || offeringCount.count === 0) {
    await db.insert(shopOfferings).values(
      OFFERINGS_SEED.map((offering) => ({
        slug: offering.slug,
        name: offering.name,
        category: offering.category,
        format: offering.format,
        blurb: offering.blurb,
        includes: offering.includes,
        priceLow: offering.priceLow,
        priceHigh: offering.priceHigh,
        priceSuffix: offering.priceSuffix,
        turnaround: offering.turnaround,
        imageUrl: offering.imageUrl,
        badge: offering.badge,
        sortOrder: offering.sortOrder,
      })),
    );
  }
}

export async function ensureSeeded() {
  if (!seedPromise) {
    seedPromise = seedTables().catch((error) => {
      seedPromise = null;
      throw error;
    });
  }
  return seedPromise;
}

export async function getGalleryPieces(): Promise<GalleryPiece[]> {
  try {
    await ensureSeeded();
    const rows = await db
      .select()
      .from(portfolioItems)
      .orderBy(asc(portfolioItems.sortOrder));

    if (rows.length === 0) return PORTFOLIO_SEED;

    return rows.map((row) => ({
      slug: row.slug,
      title: row.title,
      category: row.category as CategoryKey,
      medium: row.medium,
      setting: row.setting,
      caption: row.caption,
      imageUrl: row.imageUrl,
      orientation: row.orientation as GalleryPiece["orientation"],
      featured: row.featured,
      heroEyebrow: row.heroEyebrow,
      heroHeadline: row.heroHeadline,
      priceNote: row.priceNote,
      sortOrder: row.sortOrder,
    }));
  } catch {
    return PORTFOLIO_SEED;
  }
}

export async function getOfferings(): Promise<Offering[]> {
  try {
    await ensureSeeded();
    const rows = await db
      .select()
      .from(shopOfferings)
      .orderBy(asc(shopOfferings.sortOrder));

    if (rows.length === 0) return OFFERINGS_SEED;

    return rows.map((row) => ({
      slug: row.slug,
      name: row.name,
      category: row.category as Offering["category"],
      format: row.format,
      blurb: row.blurb,
      includes: row.includes,
      priceLow: row.priceLow,
      priceHigh: row.priceHigh,
      priceSuffix: row.priceSuffix,
      turnaround: row.turnaround,
      imageUrl: row.imageUrl,
      badge: row.badge,
      sortOrder: row.sortOrder,
    }));
  } catch {
    return OFFERINGS_SEED;
  }
}
