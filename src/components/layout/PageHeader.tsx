import type { ReactNode } from "react";
import { Reveal } from "@/components/ui-brand/Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-border bg-[color:var(--surface)]">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-[color:var(--ink-soft)] max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
