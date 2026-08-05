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
    <section className="py-12 sm:py-16 md:py-20 bg-[color:var(--surface)]">
      <div className="container-page px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why This Matters"
            title="Trust is won or lost before you ever pick up the phone."
            description="Most people research you online before they reach out. If what they find doesn't match the quality of what you actually do, you're losing customers you never even knew about."
          />
        </Reveal>
        <div className="mt-12 sm:mt-16 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-[20px] bg-white border border-border/60 p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-elevated)] border border-border/50">
                  <item.icon size={22} className="text-[color:var(--primary)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[color:var(--ink-soft)] leading-relaxed text-sm sm:text-base">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
