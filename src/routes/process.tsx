import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Reveal } from "@/components/ui-brand/Reveal";
import { processSteps } from "@/data/processSteps";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Pulse Digital" },
      {
        name: "description",
        content:
          "How we work with clients — Discovery, Build & Plan, Launch & Manage, and Check In & Refine.",
      },
      { property: "og:title", content: "Our Process — Pulse Digital" },
      {
        property: "og:description",
        content: "Four simple steps. No mystery, no black box.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Process"
        title="A simple rhythm you can count on."
        description="We keep the process boring on purpose. You always know what's happening this week, next week, and next month."
      />
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container-page max-w-4xl space-y-12 sm:space-y-16">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="grid gap-6 sm:gap-8 md:grid-cols-[auto_1fr] items-start border-b border-border pb-12 sm:pb-16 last:border-0 last:pb-0">
                <p
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight font-mono shrink-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.number}
                </p>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                    {step.title}
                  </h2>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
