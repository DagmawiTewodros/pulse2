import { Reveal } from "@/components/ui-brand/Reveal";

const stats = [
  {
    value: "3x",
    label: "Faster launch",
    quote:
      "\"They shipped our new site in three weeks. Our old agency quoted three months.\"",
    author: "Maya R., Founder",
  },
  {
    value: "40%",
    label: "More engagement",
    quote:
      "\"Consistent posting finally made our socials feel alive. Comments and DMs are up dramatically.\"",
    author: "Diego P., Head of Growth",
  },
  {
    value: "1",
    label: "Partner, not a queue",
    quote: "\"I text one person and things happen. That alone is worth it.\"",
    author: "Lena K., Owner",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[color:var(--background)]">
      <div className="container-page px-4 sm:px-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.1}>
              <div className="h-full rounded-[20px] bg-white border border-border/60 p-8 flex flex-col shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1">
                <p
                  className="text-5xl sm:text-6xl font-semibold tracking-tight"
                  style={{ color: "var(--color-ink)" }}
                >
                  {s.value}
                </p>
                <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[color:var(--primary)]">
                  {s.label}
                </p>
                <p className="mt-6 text-sm sm:text-base text-[color:var(--ink-soft)] leading-relaxed flex-1 italic">
                  {s.quote}
                </p>
                <p className="mt-4 text-xs sm:text-sm font-medium text-[color:var(--ink)]">
                  — {s.author}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
