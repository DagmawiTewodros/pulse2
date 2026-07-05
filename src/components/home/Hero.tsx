import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Rocket, Sparkles } from "lucide-react";
import { PillLink } from "@/components/ui-brand/PillButton";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, oklch(0.42 0.22 275 / 0.15), transparent 70%)",
        }}
      />
      <div className="container-page pt-12 pb-20 sm:pt-16 md:pt-32 md:pb-40 text-center relative px-4 sm:px-6">
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
          className="mt-6 sm:mt-8 mx-auto max-w-4xl text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] sm:leading-[1.05]"
        >
          Close the gap between what you offer and how it looks online.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 sm:mt-6 mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-[color:var(--ink-soft)] leading-relaxed"
        >
          Most customers look you up online before ever reaching out. We make sure what they find
          builds trust — websites, social, and content, run by people who care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <PillLink to="/contact">Get a Free Consultation</PillLink>
          <PillLink to="/packages" variant="ghost">
            See Our Packages
          </PillLink>
        </motion.div>

        {/* Floating cards — scroll-driven parallax (Lorikeet-style) */}
        <div className="relative mt-8 sm:mt-12 md:mt-20 h-48 sm:h-56 md:h-72 lg:h-96 max-w-5xl mx-auto px-2 sm:px-0">
          <ParallaxCard
            progress={scrollYProgress}
            xRange={[0, -60]}
            yRange={[0, -30]}
            rotateRange={[-2, -8]}
            className="left-2 sm:left-0 md:left-8 top-2 sm:top-4"
            icon={<CheckCircle2 size={16} className="text-emerald-500" />}
            title="Website live"
            subtitle="pulsedigital.co · Deployed"
            delay={0.5}
          />
          <ParallaxCard
            progress={scrollYProgress}
            xRange={[0, 0]}
            yRange={[0, -80]}
            rotateRange={[0, 0]}
            scaleRange={[1, 0.9]}
            className="left-1/2 -translate-x-1/2 top-16 sm:top-20 md:top-16"
            icon={<Sparkles size={16} style={{ color: "var(--color-primary)" }} />}
            title="Post scheduled"
            subtitle="Instagram · Tue 9:00 AM"
            highlight
            delay={0.7}
          />
          <ParallaxCard
            progress={scrollYProgress}
            xRange={[0, 60]}
            yRange={[0, -20]}
            rotateRange={[2, 8]}
            className="right-2 sm:right-0 md:right-8 top-32 sm:top-40 md:top-40"
            icon={<Rocket size={16} className="text-orange-500" />}
            title="Blog published"
            subtitle="5 min read · SEO ready"
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
}

function ParallaxCard({
  progress,
  xRange,
  yRange,
  rotateRange,
  scaleRange = [1, 1],
  className = "",
  delay = 0,
  icon,
  title,
  subtitle,
  highlight,
}: {
  progress: MotionValue<number>;
  xRange: [number, number];
  yRange: [number, number];
  rotateRange: [number, number];
  scaleRange?: [number, number];
  className?: string;
  delay?: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  highlight?: boolean;
}) {
  const x = useTransform(progress, [0, 1], xRange);
  const y = useTransform(progress, [0, 1], yRange);
  const rotate = useTransform(progress, [0, 1], rotateRange);
  const scale = useTransform(progress, [0, 1], scaleRange);
  const opacity = useTransform(progress, [0, 0.6, 1], [1, 0.8, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
    >
      <motion.div
        style={{ x, y, rotate, scale, opacity }}
        className={`flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-[0_20px_60px_-20px_rgba(20,20,60,0.25)] border border-border ${
          highlight ? "ring-1 ring-[color:var(--primary)]/20" : ""
        }`}
      >
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-[color:var(--surface)]">
          {icon}
        </div>
        <div className="text-left">
          <p className="text-xs sm:text-sm font-semibold text-[color:var(--ink)]">{title}</p>
          <p className="text-[10px] sm:text-xs text-[color:var(--ink-soft)]">{subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
