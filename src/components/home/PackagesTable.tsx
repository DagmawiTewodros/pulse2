import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";
import { PillLink } from "@/components/ui-brand/PillButton";
import { packages } from "@/data/packages";

export function PackagesTable() {
  return (
    <section className="py-12 sm:py-16 md:py-32">
      <div className="container-page px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            title="Pick a starting point. Scale when you're ready."
            description="Every package is priced per business. Pick the shape that fits, and we'll send you a tailored quote within 48 hours."
          />
        </Reveal>
        <div className="mt-8 sm:mt-12 md:mt-16 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div
                className={`relative h-full rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col ${
                  p.highlight
                    ? "bg-[color:var(--ink)] text-white border border-[color:var(--ink)]"
                    : "bg-[color:var(--surface-elevated)] border border-border"
                }`}
              >
                {p.highlight && (
                  <span
                    className="absolute -top-2.5 left-6 sm:left-8 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold"
                    style={{ background: "var(--color-primary)", color: "white" }}
                  >
                    Most popular
                  </span>
                )}
                <h3
                  className={`text-xl sm:text-2xl font-semibold tracking-tight ${
                    p.highlight ? "text-white" : ""
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-1.5 sm:mt-2 text-xs sm:text-sm ${
                    p.highlight ? "text-white/70" : "text-[color:var(--ink-soft)]"
                  }`}
                >
                  {p.tagline}
                </p>
                <p
                  className={`mt-4 sm:mt-6 text-xs sm:text-sm ${
                    p.highlight ? "text-white/80" : "text-[color:var(--ink)]"
                  }`}
                >
                  <span className="font-semibold">Best for:</span> {p.bestFor}
                </p>
                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          p.highlight ? "text-white" : ""
                        }`}
                        style={p.highlight ? undefined : { color: "var(--color-primary)" }}
                      />
                      <span
                        className={p.highlight ? "text-white/90" : "text-[color:var(--ink)]"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-8">
                  <PillLink
                    to="/contact"
                    variant={p.highlight ? "primary" : "ghost"}
                    className="w-full text-xs sm:text-sm"
                  >
                    Request a Quote
                  </PillLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-[color:var(--ink-soft)]">
          Custom pricing based on scope. Not sure what you need?{" "}
          <a href="/contact" className="text-[color:var(--ink)] underline underline-offset-4">
            Let's talk it through.
          </a>
        </p>
      </div>
    </section>
  );
}
