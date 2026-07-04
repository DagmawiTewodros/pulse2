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
    <section className="py-24 md:py-32 bg-[color:var(--surface)]">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white border border-border p-8 flex flex-col">
                <p
                  className="text-6xl md:text-7xl font-semibold tracking-tight"
                  style={{ color: "var(--color-primary)" }}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[color:var(--ink-soft)]">
                  {s.label}
                </p>
                <p className="mt-6 text-[color:var(--ink)] leading-relaxed flex-1">{s.quote}</p>
                <p className="mt-4 text-sm text-[color:var(--ink-soft)]">— {s.author}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
