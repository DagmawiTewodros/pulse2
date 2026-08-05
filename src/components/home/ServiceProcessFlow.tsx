import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ConnectorOverlay } from "./ServiceProcessFlowOverlay";
import {
  Globe,
  Instagram,
  Linkedin,
  PenLine,
  Mail,
  Search,
  Sparkles,
  Wand2,
  Database,
  GitBranch,
  Zap,
  Figma,
  Palette,
  FileText,
  Youtube,
  ShoppingBag,
} from "lucide-react";

/**
 * Lorikeet-style narrative flow.
 * Acts:
 *  1. Channel chips converge → "One coherent presence"
 *  2. Lines fan into glowing hub → "Built to launch. Smart enough to grow."
 *  3. Reactive gradient blobs with floating workflow capsules
 *  4. Bracketed enclosure of tool logos around a headline
 *  5. Lines fan down from the tools headline into overlapping "shipped" cards
 * Background gradient blobs follow the cursor.
 */
export function ServiceProcessFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const channelChipsRefs = useRef<Array<HTMLDivElement | null>>([]);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const workflowCapsuleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const toolsContentRef = useRef<HTMLDivElement>(null);
  const toolsHeadingRef = useRef<HTMLHeadingElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);
  const shippedCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", String(mx));
    el.style.setProperty("--my", String(my));
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden py-16 sm:py-24 md:py-32"
      style={{ ["--mx" as string]: "0.5", ["--my" as string]: "0.5" }}
    >
      {/* Reactive background blobs */}
      <ReactiveBlobs />

      <ConnectorOverlay
        sectionRef={sectionRef}
        channelChipsRefs={channelChipsRefs}
        heading1Ref={heading1Ref}
        hubRef={hubRef}
        featurePillsRefs={workflowCapsuleRefs}
        toolsHeadingRef={toolsHeadingRef}
        ctaButtonRef={ctaButtonRef}
        shippedCardsRefs={shippedCardRefs}
      />

      <div className="container-page relative z-10">
        {/* ACT 1 — channels converge */}
        <ChannelsConverge chipsRefs={channelChipsRefs} headingRef={heading1Ref} />

        {/* ACT 2 — hub */}
        <div className="mt-8 relative z-10">
          <HubAct hubRef={hubRef} />
        </div>


        {/* ACT 3 — workflow capsules over blobs */}
        <div className="mt-8 relative z-10">
          <WorkflowAct capsuleRefs={workflowCapsuleRefs} />
        </div>

        {/* ACT 4 — tool bracket */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <ToolBracketAct toolsContentRef={toolsContentRef} toolsHeadingRef={toolsHeadingRef} ctaButtonRef={ctaButtonRef} />
        </div>


        {/* ACT 5 — shipped cards fan */}
        <div className="mt-6 sm:mt-8">
          <ShippedAct cardRefs={shippedCardRefs} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reactive background blobs ---------------- */

function ReactiveBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute h-[42rem] w-[42rem] rounded-full opacity-40 blur-3xl transition-transform duration-500 ease-out"
        style={{
          left: "10%",
          top: "20%",
          background:
            "radial-gradient(circle, oklch(0.75 0.19 60 / 0.55), transparent 60%)",
          transform:
            "translate(calc((var(--mx) - 0.5) * 120px), calc((var(--my) - 0.5) * 120px))",
        }}
      />
      <div
        className="absolute h-[38rem] w-[38rem] rounded-full opacity-40 blur-3xl transition-transform duration-500 ease-out"
        style={{
          right: "10%",
          top: "45%",
          background:
            "radial-gradient(circle, oklch(0.65 0.28 330 / 0.55), transparent 60%)",
          transform:
            "translate(calc((var(--mx) - 0.5) * -140px), calc((var(--my) - 0.5) * 100px))",
        }}
      />
      <div
        className="absolute h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl transition-transform duration-500 ease-out"
        style={{
          left: "35%",
          bottom: "5%",
          background:
            "radial-gradient(circle, oklch(0.55 0.24 275 / 0.55), transparent 60%)",
          transform:
            "translate(calc((var(--mx) - 0.5) * 80px), calc((var(--my) - 0.5) * -120px))",
        }}
      />
    </div>
  );
}

/* ---------------- ACT 1 — Channels converge ---------------- */

const channels = [
  { icon: Globe, label: "Website" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: PenLine, label: "Blog" },
  { icon: Mail, label: "Email" },
  { icon: Search, label: "SEO" },
];

function ChannelsConverge({ chipsRefs, headingRef }: { chipsRefs: React.RefObject<Array<HTMLDivElement | null>>; headingRef: React.RefObject<HTMLHeadingElement | null> }) {
  return (
    <div className="relative">
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 md:gap-2 place-items-center">
        {channels.map((c, i) => (
          <motion.div
            key={c.label}
            ref={(el: HTMLDivElement | null) => {
              if (chipsRefs.current) chipsRefs.current[i] = el;
            }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`flex flex-col items-center ${i % 2 === 0 ? "" : "md:-translate-y-6"}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(20,20,60,0.25)]">
              <c.icon size={22} style={{ color: "var(--color-primary)" }} />
            </div>
            <p className="mt-2 text-xs font-semibold text-[color:var(--ink)]">{c.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mt-12 text-center">
        <h2 ref={headingRef} className="mx-auto max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] inline-block px-4 py-2 bg-[color:var(--background)] relative z-20">
          Your channels. One coherent presence.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[color:var(--ink-soft)] leading-relaxed relative z-20">
          We meet your customers wherever they look you up, then keep every touchpoint aligned to
          the same voice.
        </p>
      </div>
    </div>
  );
}

/* ---------------- ACT 2 — Hub ---------------- */

function HubAct({ hubRef }: { hubRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div className="relative flex flex-col items-center pt-24">
      {/* Glowing hub — hubRef attached to this exact box so ConvergeLines can find its real position */}
      <motion.div
        ref={hubRef}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          className="absolute inset-0 -m-8 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.28 330 / 0.7), oklch(0.75 0.19 60 / 0.4) 40%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-white shadow-[0_20px_60px_-15px_rgba(20,20,60,0.4)]"
        >
          <Zap
            size={40}
            fill="var(--color-primary)"
            style={{ color: "var(--color-primary)" }}
          />
        </motion.div>
      </motion.div>

      <div className="text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
          Built to launch. Smart enough to grow.
        </h2>
        <p className="mt-4 text-[color:var(--ink-soft)] leading-relaxed">
          Pulse isn't a one-and-done agency. We ship the first version fast, then keep tuning based
          on what's actually driving results.
        </p>
      </div>
    </div>
  );
}

/* ---------------- ACT 3 — Workflow capsules ---------------- */

/**
 * workflowChips index reference (used below to build the two "chains"):
 *  0 Discovery audit        (top-left)
 *  1 Brand voice            (top-right)
 *  2 Content calendar       (mid-left)
 *  3 publishToInstagram     (mid-right)
 *  4 Weekly check-in        (bottom-left)
 *  5 Blog: draft → live     (bottom-right)
 *
 * Visually, 0 → 2 → 4 sit on the same left-hand line, and 1 → 3 → 5 sit on
 * the same right-hand line. Instead of drawing three separate hub-rooted
 * curves per side (which only *looked* continuous because they overlapped),
 * we now draw a single continuous path per side that threads hub → box → box → box.
 */
const workflowChips = [
  { icon: Search, label: "Discovery audit", pos: "top-4 left-4 md:left-16" },
  { icon: Wand2, label: "Brand voice", pos: "top-2 right-6 md:right-24" },
  { icon: GitBranch, label: "Content calendar", pos: "top-24 left-1/4" },
  {
    icon: Database,
    label: "publishToInstagram",
    pos: "top-28 right-4 md:right-16",
    mono: true,
  },
  { icon: Sparkles, label: "Weekly check-in", pos: "bottom-4 left-8 md:left-24" },
  { icon: FileText, label: "Blog: draft → live", pos: "bottom-6 right-12 md:right-32" },
];

function WorkflowAct({ capsuleRefs }: { capsuleRefs: RefObject<Array<HTMLDivElement | null>> }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative h-[26rem] md:h-[28rem] rounded-3xl">
        {workflowChips.map((chip, i) => (
          <motion.div
            key={chip.label}
            ref={(el: HTMLDivElement | null) => {
              capsuleRefs.current[i] = el;
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`absolute ${chip.pos}`}
          >
            <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_15px_40px_-15px_rgba(20,20,60,0.3)] border border-border">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-md"
                style={{ background: "oklch(0.95 0.05 275)" }}
              >
                <chip.icon size={13} style={{ color: "var(--color-primary)" }} />
              </span>
              <span
                className={`text-sm font-semibold text-[color:var(--ink)] ${chip.mono ? "font-mono text-xs" : ""}`}
              >
                {chip.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ACT 4 — Tool bracket ---------------- */

const toolIcons = [
  { icon: Figma, side: "left", top: "top-8", offset: "left-0" },
  { icon: PenLine, side: "left", top: "top-24", offset: "left-16" },
  { icon: Palette, side: "left", top: "top-40", offset: "left-4" },
  { icon: Instagram, side: "right", top: "top-6", offset: "right-2" },
  { icon: Youtube, side: "right", top: "top-24", offset: "right-16" },
  { icon: ShoppingBag, side: "right", top: "top-40", offset: "right-0" },
];

function ToolBracketAct({
  toolsContentRef,
  toolsHeadingRef,
  ctaButtonRef,
}: {
  toolsContentRef: RefObject<HTMLDivElement | null>;
  toolsHeadingRef: RefObject<HTMLHeadingElement | null>;
  ctaButtonRef: RefObject<HTMLAnchorElement | null>;
}) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="relative h-[24rem] md:h-[26rem]">
        {toolIcons.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
            className={`absolute ${t.top} ${t.offset}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(20,20,60,0.25)]">
              <t.icon size={20} style={{ color: "var(--color-primary)" }} />
            </div>
          </motion.div>
        ))}

        <div
          ref={toolsContentRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
        >
          <h2 ref={toolsHeadingRef} className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] inline-block px-4 py-2 bg-[color:var(--background)] relative z-20">
            We plug into the tools you already use.
          </h2>
          <p className="mt-4 max-w-lg text-[color:var(--ink-soft)] leading-relaxed relative z-20">
            From Figma to Instagram to your CMS — Pulse works inside your stack, not around it.
          </p>
          <div className="mt-8 relative z-20" ref={ctaButtonRef as any}>
            <Link
              to="/services"
              className="btn-pill btn-primary"
            >
              See all services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Tools → Shipped connector lines ---------------- */

/**
 * Fans out from the bottom of the "We plug into the tools you already use"
 * block (toolsContentRef) down into each of the five shipped cards below.
 * This is the connection that was previously missing: Act 4's bracket lines
 * fanned in from above but nothing carried the flow onward into Act 5.
 */
/* ---------------- ACT 5 — Shipped cards fan ---------------- */

const shippedCards: {
  label: string;
  quote: string;
  meta: string;
  tint: string;
}[] = [
  {
    label: "Website live",
    quote: "The redesign felt like ours from day one.",
    meta: "Northside Dental · 2 Jul 2026",
    tint: "oklch(0.85 0.13 60)",
  },
  {
    label: "Post published",
    quote: "3.2k reach on a Tuesday morning.",
    meta: "Rowe & Co · 24 Jun 2026",
    tint: "oklch(0.82 0.14 330)",
  },
  {
    label: "Blog shipped",
    quote: "First page for 'small-batch roasters near me'.",
    meta: "Fern Coffee · 18 Jun 2026",
    tint: "oklch(0.82 0.13 275)",
  },
  {
    label: "Newsletter sent",
    quote: "34% open, 8% click. Best month yet.",
    meta: "Studio Vaal · 10 Jun 2026",
    tint: "oklch(0.85 0.12 200)",
  },
  {
    label: "Campaign wrapped",
    quote: "127 leads in three weeks.",
    meta: "Halden Fitness · 1 Jun 2026",
    tint: "oklch(0.85 0.14 30)",
  },
];

function ShippedAct({ cardRefs }: { cardRefs: RefObject<Array<HTMLDivElement | null>> }) {
  return (
    <div className="relative mx-auto max-w-6xl pt-16">
      <div className="relative mt-56 flex justify-center gap-[-2rem] px-4">
        <div className="flex items-end -space-x-8 md:-space-x-12">
          {shippedCards.map((card, i) => {
            const isCenter = i === 2;
            return (
              <ShippedCard
                key={card.label}
                card={card}
                index={i}
                isCenter={isCenter}
                cardRef={(el) => {
                  cardRefs.current[i] = el;
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative mt-16 text-center">
        <h2 className="mx-auto max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
          Real work, shipped weekly.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[color:var(--ink-soft)] leading-relaxed">
          Every engagement moves. You'll always know what went live, and what's coming next.
        </p>
      </div>
    </div>
  );
}

function ShippedCard({
  card,
  index,
  isCenter,
  cardRef,
}: {
  card: (typeof shippedCards)[number];
  index: number;
  isCenter: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const rotate = (index - 2) * 4;
  const y = Math.abs(index - 2) * 16;
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ transform: `rotate(${rotate}deg)`, zIndex: isCenter ? 20 : 10 - Math.abs(index - 2) }}
      className={`relative w-52 md:w-60 rounded-2xl border border-border bg-white p-4 shadow-[0_25px_60px_-20px_rgba(20,20,60,0.3)] ${
        isCenter ? "scale-110" : "opacity-90"
      }`}
    >
      <div
        className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-70"
        style={{ background: `radial-gradient(circle, ${card.tint}, transparent 70%)` }}
      />
      <div className="flex items-center gap-2">
        <span
          className="flex h-5 w-5 items-center justify-center rounded"
          style={{ background: "oklch(0.95 0.05 275)" }}
        >
          <Sparkles size={11} style={{ color: "var(--color-primary)" }} />
        </span>
        <span className="text-xs font-semibold text-[color:var(--ink)]">{card.label}</span>
      </div>
      <div className="mt-4 h-14 w-14 rounded-full bg-white border border-border mx-auto" />
      <p className="mt-3 text-sm font-medium text-[color:var(--ink)] leading-snug text-center">
        "{card.quote}"
      </p>
      <p className="mt-2 text-[10px] font-medium text-[color:var(--ink-soft)] text-center">
        {card.meta}
      </p>
    </motion.div>
  );
}

/* helper to keep unused ReactNode import out of TS complaints */
export type _Keep = ReactNode;