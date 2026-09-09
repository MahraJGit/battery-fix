import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const descColor = tone === "light" ? "text-white/70" : "text-muted";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
          <span className="h-px w-8 bg-brand" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-[32px] font-extrabold leading-[1.15] tracking-tight md:text-[44px] ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-xl text-[15px] leading-7 md:text-base ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
