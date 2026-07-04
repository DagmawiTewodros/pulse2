import { AlertTriangle, EyeOff, MessageSquareOff } from "lucide-react";
import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";

const items = [
  {
    icon: EyeOff,
    title: "An outdated website",
    body: "signals to a customer that your business might be too. They'll click away before they ever consider you.",
  },
  {
    icon: MessageSquareOff,
    title: "Inactive social accounts",
    body: "look worse than none at all — a ghost-town feed makes prospects wonder if you're still open.",
  },
  {
    icon: AlertTriangle,
    title: "Inconsistent content",
    body: "erodes trust over time. Mixed messages, dead links, and stale info quietly cost you deals.",
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Why This Matters"
            title="Trust is won or lost before you ever pick up the phone."
            description="Most people research you online before they reach out. If what they find doesn't match the quality of what you actually do, you're losing customers you never even knew about."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-[color:var(--surface-elevated)] p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--surface)]">
                  <item.icon size={20} className="text-[color:var(--ink)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[color:var(--ink-soft)] leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
