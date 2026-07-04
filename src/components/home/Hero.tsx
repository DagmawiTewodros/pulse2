import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Sparkles } from "lucide-react";
import { PillLink } from "@/components/ui-brand/PillButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, oklch(0.42 0.22 275 / 0.15), transparent 70%)",
        }}
      />
      <div className="container-page pt-24 pb-32 md:pt-32 md:pb-40 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-[color:var(--surface-elevated)] px-4 py-1.5 text-xs font-medium text-[color:var(--ink-soft)]"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--color-primary)" }}
          />
          Marketing partner for growing businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 mx-auto max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Close the gap between what you offer and how it looks online.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 mx-auto max-w-2xl text-lg md:text-xl text-[color:var(--ink-soft)] leading-relaxed"
        >
          Most customers look you up online before ever reaching out. We make sure what they find
          builds trust — websites, social, and content, run by people who care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3 flex-wrap"
        >
          <PillLink to="/contact">Get a Free Consultation</PillLink>
          <PillLink to="/packages" variant="ghost">
            See Our Packages
          </PillLink>
        </motion.div>

        {/* Floating cards */}
        <div className="relative mt-20 h-72 md:h-96 max-w-5xl mx-auto">
          <FloatingCard
            className="left-0 md:left-8 top-4"
            delay={0.5}
            icon={<CheckCircle2 size={16} className="text-emerald-500" />}
            title="Website live"
            subtitle="pulsedigital.co · Deployed"
          />
          <FloatingCard
            className="left-1/2 -translate-x-1/2 top-24 md:top-16"
            delay={0.7}
            icon={<Sparkles size={16} style={{ color: "var(--color-primary)" }} />}
            title="Post scheduled"
            subtitle="Instagram · Tue 9:00 AM"
            highlight
          />
          <FloatingCard
            className="right-0 md:right-8 top-44 md:top-40"
            delay={0.9}
            icon={<Rocket size={16} className="text-orange-500" />}
            title="Blog published"
            subtitle="5 min read · SEO ready"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className = "",
  delay = 0,
  icon,
  title,
  subtitle,
  highlight,
}: {
  className?: string;
  delay?: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
        className={`flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_60px_-20px_rgba(20,20,60,0.25)] border border-border ${
          highlight ? "ring-1 ring-[color:var(--primary)]/20" : ""
        }`}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--surface)]">
          {icon}
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-[color:var(--ink)]">{title}</p>
          <p className="text-xs text-[color:var(--ink-soft)]">{subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
