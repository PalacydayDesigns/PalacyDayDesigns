import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-5 font-display text-4xl leading-tight font-light text-navy sm:text-5xl">
        This canvas is still blank.
      </h1>
      <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-ink/70">
        The page you were looking for isn&apos;t here — but the gallery, the shop, and the
        commission form all are.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to the studio
        </Link>
        <Link href="/portfolio" className="btn-ghost">
          Browse the gallery
        </Link>
      </div>
    </section>
  );
}
