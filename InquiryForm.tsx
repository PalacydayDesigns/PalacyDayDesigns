"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { BRAND, BUDGET_RANGES, PROJECT_TYPES, TIMELINES } from "@/lib/content";

type Preview = { id: string; name: string; url: string; size: number };

const MAX_FILES = 5;
const MAX_BYTES = 4 * 1024 * 1024;

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const piece = searchParams.get("piece");
  const typeHint = searchParams.get("type");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const defaultProjectType = useMemo(() => {
    if (typeHint === "portraits") return PROJECT_TYPES[0];
    if (typeHint === "decor") return PROJECT_TYPES[3];
    if (typeHint === "stationery") return PROJECT_TYPES[5];
    if (typeHint === "logos") return PROJECT_TYPES[7];
    return PROJECT_TYPES[0];
  }, [typeHint]);

  useEffect(() => {
    const urls = files.map((file) => ({
      id: `${file.name}-${file.size}-${file.lastModified}`,
      name: file.name,
      size: file.size,
      url: URL.createObjectURL(file),
    }));
    setPreviews(urls);
    return () => urls.forEach((preview) => URL.revokeObjectURL(preview.url));
  }, [files]);

  function addFiles(incoming: FileList | null) {
    if (!incoming) return;
    setError(null);
    const accepted: File[] = [];
    for (const file of Array.from(incoming)) {
      if (!file.type.startsWith("image/")) {
        setError("Reference uploads need to be image files (JPG, PNG, HEIC, WEBP).");
        continue;
      }
      if (file.size > MAX_BYTES) {
        setError(`"${file.name}" is larger than 4 MB — please resize and try again.`);
        continue;
      }
      accepted.push(file);
    }
    setFiles((current) => [...current, ...accepted].slice(0, MAX_FILES));
  }

  function removeFile(index: number) {
    setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const formData = new FormData(event.currentTarget);
    files.forEach((file) => formData.append("references", file));

    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: formData });
      const payload = (await response.json()) as {
        ok: boolean;
        reference?: string;
        error?: string;
      };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error ?? "Something went wrong sending your inquiry.");
      }

      setReference(payload.reference ?? null);
      setStatus("done");
      setFiles([]);
      if (inputRef.current) inputRef.current.value = "";
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong sending your inquiry.",
      );
    }
  }

  if (status === "done") {
    return (
      <div className="paper-card animate-fade-up rounded-3xl p-9 text-center sm:p-12">
        <p className="eyebrow">Inquiry received</p>
        <h3 className="mt-4 font-display text-3xl font-light text-navy">
          Thank you — your project is in the studio queue.
        </h3>
        <p className="serif-sub mx-auto mt-4 max-w-lg text-lg">
          {reference ? `Reference ${reference}` : "Reference pending"}
        </p>
        <p className="mx-auto mt-5 max-w-xl text-[0.97rem] leading-relaxed text-ink/70">
          I read every inquiry personally, usually within one business day. You&apos;ll get a
          reply with a few clarifying questions, a firm quote, and a realistic timeline — plus
          an honest answer if I think a different approach would serve the piece better.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${BRAND.email}`} className="btn-primary">
            Email the studio directly
          </a>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              setStatus("idle");
              setReference(null);
            }}
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="paper-card rounded-3xl p-6 sm:p-9">
      {piece ? (
        <div className="mb-7 rounded-2xl border border-plum/20 bg-mist/40 px-5 py-4">
          <p className="text-[0.65rem] tracking-[0.22em] text-plum uppercase">
            Inspired by a portfolio piece
          </p>
          <p className="mt-1.5 font-serif text-lg text-indigo-rich italic">{piece}</p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={150}
            className="field"
            placeholder="Patrick Stephens"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={190}
            className="field"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="projectType">
            What are we making?
          </label>
          <select
            id="projectType"
            name="projectType"
            className="field"
            defaultValue={defaultProjectType}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="subjects">
            Subjects / quantity
          </label>
          <input
            id="subjects"
            name="subjects"
            maxLength={190}
            className="field"
            placeholder="4 people + 1 dog, or 120 invitations"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="budget">
            Budget range
          </label>
          <select id="budget" name="budget" className="field" defaultValue={BUDGET_RANGES[0]}>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="timeline">
            Timeline
          </label>
          <select id="timeline" name="timeline" className="field" defaultValue={TIMELINES[0]}>
            {TIMELINES.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="field-label" htmlFor="message">
          Tell me about the piece
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          className="field resize-y"
          placeholder="Who is in it, what the moment means, where it will hang, and any dates I should know about."
        />
      </div>

      <input type="hidden" name="piece" value={piece ?? ""} />

      <div className="mt-7">
        <p className="field-label">Reference photos (optional, up to 5)</p>
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            addFiles(event.dataTransfer.files);
          }}
          className={`rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-colors ${
            dragging
              ? "border-plum bg-mist/50"
              : "border-sand bg-white/50 hover:border-plum/50"
          }`}
        >
          <p className="font-serif text-lg text-indigo-rich italic">
            Drag photos here, or browse your files
          </p>
          <p className="mt-2 text-xs tracking-[0.14em] text-ink/50 uppercase">
            JPG · PNG · WEBP · up to 4 MB each
          </p>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="btn-ghost mt-5"
          >
            Choose photos
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(event) => addFiles(event.target.files)}
          />
        </div>

        {previews.length > 0 ? (
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {previews.map((preview, previewIndex) => (
              <li
                key={preview.id}
                className="group relative overflow-hidden rounded-xl border border-sand bg-white/70"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview.url}
                  alt={preview.name}
                  className="aspect-square w-full object-cover"
                />
                <button
                  type="button"
                  aria-label={`Remove ${preview.name}`}
                  onClick={() => removeFile(previewIndex)}
                  className="absolute top-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-navy/70 text-cream opacity-0 transition group-hover:opacity-100"
                >
                  ×
                </button>
                <p className="truncate px-2 py-1.5 text-[0.65rem] text-ink/60">{preview.name}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {error ? (
        <p className="mt-5 rounded-xl border border-blush bg-blush/25 px-4 py-3 text-sm text-plum-deep">
          {error}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-ink/55">
          Your photos are used only for your commission. Prefer email? Write directly to{" "}
          <a href={`mailto:${BRAND.email}`} className="text-plum underline underline-offset-4">
            {BRAND.email}
          </a>
          .
        </p>
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
