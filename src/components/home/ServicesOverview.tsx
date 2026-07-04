import { ArrowUpRight, Globe, MessageCircle, PenLine } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";
import { services } from "@/data/services";

const icons = {
  "website-building": Globe,
  "social-media": MessageCircle,
  "content-marketing": PenLine,
} as const;

export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Three services. One coherent presence."
            description="We handle the online side of your business end-to-end — or plug into whichever piece you need most."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.id as keyof typeof icons];
            return (
              <Reveal key={s.id} delay={i * 0.08}>
                <Link
                  to="/services"
                  hash={s.id}
                  className="group block h-full rounded-2xl border border-border bg-[color:var(--surface-elevated)] p-8 hover:border-[color:var(--ink)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--surface)]">
                      <Icon size={20} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-[color:var(--ink-soft)] group-hover:text-[color:var(--ink)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                  <p className="mt-6 eyebrow">{s.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{s.tagline}</h3>
                  <p className="mt-3 text-[color:var(--ink-soft)] leading-relaxed">
                    {s.description}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
