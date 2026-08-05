const integrations = [
  "Figma", "Shopify", "Webflow", "Stripe", "Next.js",
  "Instagram", "TikTok", "Mailchimp", "Klaviyo", "WordPress",
];

export function LogoStrip() {
  return (
    <section className="bg-[color:var(--surface)] py-12 sm:py-16 overflow-hidden">
      <p className="text-center text-xs sm:text-sm font-medium tracking-wide text-[color:var(--ink-soft)] mb-8 sm:mb-12">
        Plugs directly into the tools you already use
      </p>
      <div className="relative flex max-w-7xl mx-auto px-4 mask-edges">
        <div className="flex gap-12 sm:gap-16 md:gap-24 animate-[scroll_40s_linear_infinite] whitespace-nowrap px-6">
          {[...integrations, ...integrations, ...integrations].map((name, i) => (
            <span
              key={i}
              className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[color:var(--ink-soft)]/40 hover:text-[color:var(--ink)] transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 3)); }
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
