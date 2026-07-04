import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";
import { processSteps } from "@/data/processSteps";

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--surface)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="Four steps. No mystery."
            description="Every engagement follows the same simple rhythm. You always know what's happening next."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-8">
                <p
                  className="text-sm font-mono font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
