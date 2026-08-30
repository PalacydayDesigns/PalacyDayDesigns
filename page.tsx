import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";

import SectionHeading from "@/components/SectionHeading";
import { db } from "@/db";
import { inquiries, inquiryUploads } from "@/db/schema";
import { BRAND } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Studio Inbox",
  description: "Commission inquiries submitted through the Palacyday Designs website.",
};

type InquiryRow = typeof inquiries.$inferSelect;
type UploadRow = { id: number; inquiryId: number; filename: string };

async function loadInbox(): Promise<{
  rows: InquiryRow[];
  uploads: UploadRow[];
  ok: boolean;
}> {
  try {
    const rows = await db
      .select()
      .from(inquiries)
      .orderBy(desc(inquiries.createdAt))
      .limit(25);

    if (rows.length === 0) return { rows, uploads: [], ok: true };

    const uploads = await Promise.all(
      rows.map((row) =>
        db
          .select({
            id: inquiryUploads.id,
            inquiryId: inquiryUploads.inquiryId,
            filename: inquiryUploads.filename,
          })
          .from(inquiryUploads)
          .where(eq(inquiryUploads.inquiryId, row.id)),
      ),
    );

    return { rows, uploads: uploads.flat(), ok: true };
  } catch {
    return { rows: [], uploads: [], ok: false };
  }
}

export default async function StudioPage() {
  const { rows, uploads, ok } = await loadInbox();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Studio Inbox"
        title="Commission inquiries, newest first"
        subtitle="Every inquiry submitted through the site lands here with its reference photos attached."
      />

      <div className="mt-8 flex flex-wrap items-center gap-4 text-[0.7rem] tracking-[0.18em] text-ink/50 uppercase">
        <span>{rows.length} recent inquiries</span>
        <span className="h-1 w-1 rounded-full bg-brass" />
        <a href={`mailto:${BRAND.email}`} className="text-plum">
          {BRAND.email}
        </a>
      </div>

      {!ok ? (
        <p className="mt-10 rounded-2xl border border-blush bg-blush/20 px-6 py-5 text-sm text-plum-deep">
          The inquiries table isn&apos;t available yet. Run <code>npx drizzle-kit push</code> to
          create it, then submit an inquiry from the contact page.
        </p>
      ) : null}

      {ok && rows.length === 0 ? (
        <div className="paper-card mt-10 rounded-3xl px-8 py-14 text-center">
          <p className="font-serif text-xl text-indigo-rich italic">The inbox is empty.</p>
          <p className="mx-auto mt-3 max-w-md text-[0.95rem] text-ink/65">
            Submit a test commission from the contact page and it will appear here instantly,
            reference photos and all.
          </p>
          <Link href="/contact" className="btn-primary mt-7">
            Open the inquiry form
          </Link>
        </div>
      ) : null}

      <div className="mt-10 space-y-5">
        {rows.map((row) => {
          const attachments = uploads.filter((upload) => upload.inquiryId === row.id);
          return (
            <article
              key={row.id}
              className="paper-card rounded-3xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-[0.68rem] tracking-[0.28em] text-brass uppercase">
                    PD-{String(row.id).padStart(5, "0")} ·{" "}
                    {new Date(row.createdAt).toLocaleString()}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-navy">{row.name}</h3>
                  <a
                    href={`mailto:${row.email}`}
                    className="text-sm text-plum underline underline-offset-4"
                  >
                    {row.email}
                  </a>
                </div>
                <span className="rounded-full border border-plum/25 bg-mist/40 px-4 py-1.5 font-display text-[0.68rem] tracking-[0.16em] text-plum-deep uppercase">
                  {row.status}
                </span>
              </div>

              <dl className="mt-5 grid gap-4 border-y border-sand/80 py-4 sm:grid-cols-4">
                {[
                  ["Project", row.projectType],
                  ["Budget", row.budget],
                  ["Timeline", row.timeline],
                  ["Subjects", row.subjects || "—"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.62rem] tracking-[0.2em] text-ink/45 uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[0.9rem] text-ink/75">{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-[0.94rem] leading-relaxed whitespace-pre-line text-ink/75">
                {row.message}
              </p>

              {attachments.length > 0 ? (
                <div className="mt-5">
                  <p className="text-[0.62rem] tracking-[0.2em] text-ink/45 uppercase">
                    {attachments.length} reference{attachments.length === 1 ? "" : "s"}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {attachments.map((attachment) => (
                      <li
                        key={attachment.id}
                        className="overflow-hidden rounded-xl border border-sand bg-white/70"
                      >
                        <a href={`/api/uploads/${attachment.id}`} target="_blank" rel="noreferrer">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/api/uploads/${attachment.id}`}
                            alt={attachment.filename}
                            className="h-24 w-24 object-cover"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
