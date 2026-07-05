import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";
import { processSteps } from "@/data/processSteps";

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--surface)] overflow-hidden">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="Four steps. No mystery."
            description="Every engagement follows the same simple rhythm. You always know what's happening next."
          />
        </Reveal>

        {/* Connected horizontal flow */}
        <div className="relative mt-20">
          {/* Desktop: connecting line behind cards */}
          <svg
            className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block pointer-events-none"
            height="60"
            width="100%"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="processLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 40 30 Q 250 0, 500 30 T 960 30"
              stroke="url(#processLine)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>

          <div className="relative grid gap-6 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="group relative h-full rounded-2xl border border-border bg-white p-6 shadow-[0_10px_40px_-20px_rgba(20,20,60,0.15)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(20,20,60,0.25)]">
                  {/* Step badge */}
                  <div
                    className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full text-xs font-mono font-semibold text-white shadow-[0_8px_20px_-8px_oklch(0.42_0.22_275/0.6)]"
                    style={{ background: "var(--color-primary)" }}
                  >
                    {step.number}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow connector between cards (desktop) */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:flex h-6 w-6 items-center justify-center rounded-full border border-border bg-white text-[color:var(--ink-soft)] z-10">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5h6M5 2l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
