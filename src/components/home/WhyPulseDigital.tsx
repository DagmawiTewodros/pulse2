import { Focus, MessageSquare, Layers, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";

const reasons = [
  {
    icon: Focus,
    title: "Dedicated focus",
    body: "Small roster of clients. We know your business, not just your brief.",
  },
  {
    icon: MessageSquare,
    title: "Direct communication",
    body: "You talk to the people actually doing the work. No account-manager layer.",
  },
  {
    icon: Layers,
    title: "Flexible packages",
    body: "Start with what you need. Scale up or down as your business shifts.",
  },
  {
    icon: TrendingUp,
    title: "Consistency without overhead",
    body: "All the output of a marketing team — without hiring, managing, or training one.",
  },
];

export function WhyPulseDigital() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Why Pulse Digital"
            title="A partner, not a vendor."
            description="We work best with businesses that want a long-term relationship — the kind where we can actually move the needle."
          />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--surface)]">
                <r.icon size={20} style={{ color: "var(--color-primary)" }} />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-[color:var(--ink-soft)] leading-relaxed">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
