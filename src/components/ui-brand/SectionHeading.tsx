import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
