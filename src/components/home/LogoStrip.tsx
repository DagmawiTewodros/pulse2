const logos = [
  "Northwind", "Alpine Co.", "Meridian", "Foundry", "Kestrel",
  "Beacon Labs", "Highland", "Cadence", "Orbit", "Halcyon",
];

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-[color:var(--surface)] py-6 sm:py-8 md:py-10 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.14em] text-[color:var(--ink-soft)] mb-4 sm:mb-6">
        Trusted by growing teams
      </p>
      <div className="relative">
        <div className="flex gap-8 sm:gap-12 md:gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight text-[color:var(--ink-soft)]/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
