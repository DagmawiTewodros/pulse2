import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";
import { PillLink } from "@/components/ui-brand/PillButton";
import { packages } from "@/data/packages";

export function PackagesTable() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[color:var(--surface)]">
      <div className="container-page px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            title="Pick a starting point. Scale when you're ready."
            description="Every package is priced per business. Pick the shape that fits, and we'll send you a tailored quote within 48 hours."
          />
        </Reveal>
        <div className="mt-12 sm:mt-16 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-[24px] p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-[color:var(--ink)] text-white border border-[color:var(--ink)] shadow-[0_20px_40px_-15px_rgba(20,20,60,0.3)] hover:shadow-[0_25px_50px_-15px_rgba(20,20,60,0.4)] ring-1 ring-white/10"
                    : "bg-white border border-border/60 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]"
                }`}
              >
                {p.highlight && (
                  <span
                    className="absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{ background: "var(--color-primary)", color: "white" }}
                  >
                    Most popular
                  </span>
                )}
                <h3
                  className={`text-2xl font-bold tracking-tight ${
                    p.highlight ? "text-white" : ""
                  }`}
                >
                  {p.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold tracking-tight ${p.highlight ? "text-white" : "text-[color:var(--ink)]"}`}>
                    {p.price.split('/')[0]}
                  </span>
                  <span className={`text-sm font-medium ${p.highlight ? "text-white/60" : "text-[color:var(--ink-soft)]"}`}>
                    /{p.price.split('/')[1]}
                  </span>
                </div>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    p.highlight ? "text-white/70" : "text-[color:var(--ink-soft)]"
                  }`}
                >
                  {p.tagline}
                </p>
                <div className={`mt-8 h-px w-full ${p.highlight ? 'bg-white/10' : 'bg-border/50'}`}></div>
                <ul className="mt-8 space-y-4 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={`mt-0.5 shrink-0 ${
                          p.highlight ? "text-white" : ""
                        }`}
                        style={p.highlight ? undefined : { color: "var(--color-primary)" }}
                      />
                      <span
                        className={p.highlight ? "text-white/90 font-medium" : "text-[color:var(--ink)] font-medium"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <PillLink
                    to="/contact"
                    variant={p.highlight ? "primary" : "ghost"}
                    className="w-full text-sm py-4 rounded-[16px]"
                  >
                    Request a Quote
                  </PillLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 text-center text-sm font-medium text-[color:var(--ink-soft)]">
          Custom pricing based on scope. Not sure what you need?{" "}
          <a href="/contact" className="text-[color:var(--ink)] underline underline-offset-4 hover:text-[color:var(--primary)] transition-colors">
            Let's talk it through.
          </a>
        </p>
      </div>
    </section>
  );
}
