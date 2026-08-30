import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Portfolio pieces displayed in the gallery + hero carousel.
 */
export const portfolioItems = pgTable(
  "portfolio_items",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 120 }).notNull().unique(),
    title: varchar("title", { length: 160 }).notNull(),
    category: varchar("category", { length: 60 }).notNull(),
    medium: varchar("medium", { length: 200 }).notNull(),
    setting: varchar("setting", { length: 200 }).notNull(),
    caption: text("caption").notNull(),
    imageUrl: text("image_url").notNull(),
    orientation: varchar("orientation", { length: 20 }).notNull().default("portrait"),
    featured: boolean("featured").notNull().default(false),
    heroEyebrow: varchar("hero_eyebrow", { length: 100 }),
    heroHeadline: varchar("hero_headline", { length: 200 }),
    priceNote: varchar("price_note", { length: 120 }),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("portfolio_items_category_idx").on(table.category)],
);

/**
 * Shop + service offerings with estimated pricing bands.
 */
export const shopOfferings = pgTable(
  "shop_offerings",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 120 }).notNull().unique(),
    name: varchar("name", { length: 180 }).notNull(),
    category: varchar("category", { length: 60 }).notNull(),
    format: varchar("format", { length: 80 }).notNull(),
    blurb: text("blurb").notNull(),
    includes: text("includes").notNull(),
    priceLow: integer("price_low").notNull(),
    priceHigh: integer("price_high").notNull(),
    priceSuffix: varchar("price_suffix", { length: 12 }).notNull().default(""),
    turnaround: varchar("turnaround", { length: 80 }).notNull(),
    imageUrl: text("image_url").notNull(),
    badge: varchar("badge", { length: 60 }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => [index("shop_offerings_category_idx").on(table.category)],
);

/**
 * Custom commission inquiries submitted from the contact form.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  projectType: varchar("project_type", { length: 80 }).notNull(),
  budget: varchar("budget", { length: 80 }).notNull().default("Not sure yet"),
  timeline: varchar("timeline", { length: 80 }).notNull().default("Flexible"),
  subjects: varchar("subjects", { length: 200 }).notNull().default(""),
  message: text("message").notNull(),
  referenceCount: integer("reference_count").notNull().default(0),
  status: varchar("status", { length: 40 }).notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/**
 * Reference photos uploaded alongside an inquiry. Stored as base64 so the
 * preview environment stays self-contained (served back via /api/uploads/:id).
 */
export const inquiryUploads = pgTable(
  "inquiry_uploads",
  {
    id: serial("id").primaryKey(),
    inquiryId: integer("inquiry_id")
      .notNull()
      .references(() => inquiries.id, { onDelete: "cascade" }),
    filename: varchar("filename", { length: 260 }).notNull(),
    mimeType: varchar("mime_type", { length: 120 }).notNull(),
    sizeBytes: integer("size_bytes").notNull(),
    dataBase64: text("data_base64").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("inquiry_uploads_inquiry_idx").on(table.inquiryId)],
);

export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type ShopOffering = typeof shopOfferings.$inferSelect;
export type Inquiry = typeof inquiries.$inferSelect;
export type InquiryUpload = typeof inquiryUploads.$inferSelect;
