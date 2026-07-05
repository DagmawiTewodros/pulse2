import { Globe, MessageCircle, PenLine, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Three services. One coherent presence."
            description="We handle the online side of your business end-to-end — or plug into whichever piece you need most."
          />
        </Reveal>

        {/* Converging flow diagram */}
        <div className="relative mt-20 mx-auto max-w-3xl">
          {/* Top row: service chips */}
          <div className="relative z-10 flex items-start justify-between gap-4 px-2 md:px-12">
            {services.map((s, i) => {
              const Icon = icons[s.id as keyof typeof icons];
              return (
                <Reveal key={s.id} delay={i * 0.1}>
                  <Link
                    to="/services"
                    hash={s.id}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(20,20,60,0.2)] transition-transform group-hover:-translate-y-1">
                      <Icon size={22} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <p className="mt-3 text-xs font-medium text-[color:var(--ink-soft)] group-hover:text-[color:var(--ink)] transition-colors max-w-[7rem]">
                      {s.eyebrow}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Connecting SVG lines */}
          <svg
            className="absolute left-0 right-0 top-14 mx-auto h-40 w-full pointer-events-none"
            viewBox="0 0 600 160"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="serviceLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0" />
                <stop offset="100%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {[80, 300, 520].map((x, i) => (
              <motion.path
                key={x}
                d={`M ${x} 0 C ${x} 80, 300 80, 300 160`}
                stroke="url(#serviceLine)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* Central hub */}
          <div className="relative z-10 mt-40 flex justify-center">
            <Reveal delay={0.6}>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-20 w-20 items-center justify-center rounded-3xl shadow-[0_20px_60px_-15px_oklch(0.42_0.22_275/0.5)]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.52 0.22 275), oklch(0.38 0.22 275))",
                }}
              >
                <Zap size={32} className="text-white" fill="currentColor" />
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={0.8}>
            <p className="mt-6 text-center text-sm text-[color:var(--ink-soft)] max-w-md mx-auto leading-relaxed">
              One team running the full picture — websites, social, and content aligned to the same
              voice.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
