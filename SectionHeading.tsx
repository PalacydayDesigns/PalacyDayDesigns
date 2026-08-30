import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-[1.12] font-light text-navy sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="serif-sub mt-4 text-lg leading-relaxed tracking-[0.03em] sm:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
