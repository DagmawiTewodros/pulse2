import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
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
  const hubRef = useRef<HTMLDivElement>(null);
  const workflowCapsuleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const toolsContentRef = useRef<HTMLDivElement>(null);
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
      className="relative overflow-hidden py-24 md:py-32"
      style={{ ["--mx" as string]: "0.5", ["--my" as string]: "0.5" }}
    >
      {/* Reactive background blobs */}
      <ReactiveBlobs />

      <div className="container-page relative">
        {/* ACT 1 — channels converge */}
        <ChannelsConverge hubRef={hubRef} />

        {/* ACT 2 — hub */}
        <div className="mt-8 relative z-10">
          <HubAct hubRef={hubRef} />
        </div>

        <FanOutLines hubRef={hubRef} capsuleRefs={workflowCapsuleRefs} />
        <CapsulesToToolsLines capsuleRefs={workflowCapsuleRefs} toolsContentRef={toolsContentRef} />

        {/* ACT 3 — workflow capsules over blobs */}
        <div className="mt-8 relative z-10">
          <WorkflowAct capsuleRefs={workflowCapsuleRefs} />
        </div>

        {/* ACT 4 — tool bracket */}
        <div className="mt-16">
          <ToolBracketAct toolsContentRef={toolsContentRef} />
        </div>

        {/* Connects the tools headline down into the shipped-cards fan below */}
        <ToolsToShippedLines toolsContentRef={toolsContentRef} cardRefs={shippedCardRefs} />

        {/* ACT 5 — shipped cards fan */}
        <div className="mt-8">
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

function ChannelsConverge({ hubRef }: { hubRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="relative">
      <div className="relative z-10 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-2 place-items-center">
        {channels.map((c, i) => (
          <motion.div
            key={c.label}
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

      {/* Converging lines — now measured all the way to the real hub position */}
      <ConvergeLines count={6} hubRef={hubRef} />

      <div className="relative z-10 mt-6 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
          Your channels. One coherent presence.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[color:var(--ink-soft)] leading-relaxed">
          We meet your customers wherever they look you up, then keep every touchpoint aligned to
          the same voice.
        </p>
      </div>
    </div>
  );
}

function ConvergeLines({
  count,
  hubRef,
}: {
  count: number;
  hubRef: React.RefObject<HTMLDivElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLayout, setSvgLayout] = useState({ width: 1200, height: 300 });
  const [linePaths, setLinePaths] = useState<Array<{ id: number; d: string }>>([]);

  useLayoutEffect(() => {
    const updateLines = () => {
      const containerEl = containerRef.current;
      const hubEl = hubRef.current;
      if (!containerEl || !hubEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const hubRect = hubEl.getBoundingClientRect();

      const width = Math.max(containerRect.width, 640);

      // Real hub position, measured in the SAME coordinate space as the chips below.
      const hubX = hubRect.left + hubRect.width / 2 - containerRect.left;
      const hubY = hubRect.top - containerRect.top; // top-center of the hub box
      const targetY = Math.max(120, hubY);

      setSvgLayout({ width, height: targetY });

      const parent = containerEl.parentElement;
      const grid = parent?.children[0] as HTMLElement | undefined;
      const chipElements = Array.from(grid?.children ?? []).slice(0, count);

      const nextPaths = chipElements.map((chip, index) => {
        const rect = chip.getBoundingClientRect();
        const startX = rect.left + rect.width / 2 - containerRect.left;
        const startY = rect.bottom - containerRect.top + 0.5;
        const curveOffset = Math.max(24, (targetY - startY) * 0.4);
        const d = `M ${startX} ${startY} C ${startX} ${startY + curveOffset}, ${hubX} ${targetY - curveOffset}, ${hubX} ${targetY}`;
        return { id: index, d };
      });

      setLinePaths(nextPaths);
    };

    updateLines();

    // Re-measure after entrance animations (chips + hub) have settled.
    const timer = window.setTimeout(updateLines, 900);
    const resizeObserver = new ResizeObserver(updateLines);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines, { passive: true });

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
    };
  }, [count, hubRef]);

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="pointer-events-none absolute left-0 top-0 w-full"
        style={{ height: svgLayout.height }}
        viewBox={`0 0 ${svgLayout.width} ${svgLayout.height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="conv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.65 0.28 330)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {linePaths.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            stroke="url(#conv)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 + line.id * 0.06, ease: "easeInOut" }}
          />
        ))}
      </svg>
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
const LEFT_CHAIN = [0, 2, 4];
const RIGHT_CHAIN = [1, 3, 5];

type Point = { x: number; y: number };

function buildChainPath(points: Point[]): string {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const offset = Math.max(20, Math.abs(curr.y - prev.y) * 0.4);
    const c1x = prev.x;
    const c1y = prev.y + offset;
    const c2x = curr.x;
    const c2y = curr.y - offset;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

function FanOutLines({
  hubRef,
  capsuleRefs,
}: {
  hubRef: RefObject<HTMLDivElement | null>;
  capsuleRefs: RefObject<Array<HTMLDivElement | null>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLayout, setSvgLayout] = useState({ width: 1200, height: 900 });
  const [linePaths, setLinePaths] = useState<Array<{ id: number; d: string }>>([]);

  useLayoutEffect(() => {
    const updateLines = () => {
      const containerEl = containerRef.current;
      const hubEl = hubRef.current;
      if (!containerEl || !hubEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const hubRect = hubEl.getBoundingClientRect();
      const width = Math.max(containerRect.width, 640);
      const height = Math.max(containerRect.height, 760);
      setSvgLayout({ width, height });

      const hubPoint: Point = {
        x: hubRect.left + hubRect.width / 2 - containerRect.left,
        y: hubRect.bottom - containerRect.top + 0.5,
      };

      const getCapsulePoint = (index: number): Point | null => {
        const ref = capsuleRefs.current[index];
        if (!ref) return null;
        const rect = ref.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top - containerRect.top + 0.5,
        };
      };

      const chains = [LEFT_CHAIN, RIGHT_CHAIN];

      const nextLines = chains
        .map((chain, chainIndex) => {
          const chainPoints = chain
            .map(getCapsulePoint)
            .filter((p): p is Point => Boolean(p));
          if (chainPoints.length === 0) return null;
          const d = buildChainPath([hubPoint, ...chainPoints]);
          return { id: chainIndex, d };
        })
        .filter((line): line is { id: number; d: string } => Boolean(line));

      setLinePaths(nextLines);
    };

    updateLines();

    const timer = window.setTimeout(updateLines, 900);
    const resizeObserver = new ResizeObserver(updateLines);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines, { passive: true });

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
    };
  }, [capsuleRefs, hubRef]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${svgLayout.width} ${svgLayout.height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="fanOut" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.28 330)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {linePaths.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            stroke="url(#fanOut)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.2 + line.id * 0.1, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

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

function CapsulesToToolsLines({
  capsuleRefs,
  toolsContentRef,
}: {
  capsuleRefs: RefObject<Array<HTMLDivElement | null>>;
  toolsContentRef: RefObject<HTMLDivElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLayout, setSvgLayout] = useState({ width: 1000, height: 400 });
  const [linePaths, setLinePaths] = useState<Array<{ id: number; d: string }>>([]);

  useLayoutEffect(() => {
    const updateLines = () => {
      const containerEl = containerRef.current;
      const targetEl = toolsContentRef.current;
      if (!containerEl || !targetEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const width = Math.max(containerRect.width, 480);
      const height = Math.max(containerRect.height, 320);
      setSvgLayout({ width, height });

      const targetX = targetRect.left + targetRect.width / 2 - containerRect.left;
      const targetY = targetRect.top - containerRect.top + 0.5;

      // Only the bottom-most box of each chain (Weekly check-in, Blog: draft → live)
      // continues down to the tools convergence point — the same line that started
      // at the hub simply keeps going, rather than every capsule getting its own line here.
      const chainEndIndices = [LEFT_CHAIN[LEFT_CHAIN.length - 1], RIGHT_CHAIN[RIGHT_CHAIN.length - 1]];

      const nextLines = chainEndIndices
        .map((index) => {
          const ref = capsuleRefs.current[index];
          if (!ref) return null;

          const rect = ref.getBoundingClientRect();
          const startX = rect.left + rect.width / 2 - containerRect.left;
          const startY = rect.bottom - containerRect.top + 0.5;
          const control1X = startX + (targetX - startX) * 0.2;
          const control1Y = startY + Math.min(80, (targetY - startY) * 0.24);
          const control2X = startX + (targetX - startX) * 0.7;
          const control2Y = startY + (targetY - startY) * 0.66;
          const d = `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${targetX} ${targetY}`;

          return { id: index, d };
        })
        .filter((line): line is { id: number; d: string } => Boolean(line));

      setLinePaths(nextLines);
    };

    updateLines();

    const timer = window.setTimeout(updateLines, 900);
    const resizeObserver = new ResizeObserver(updateLines);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines, { passive: true });

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
    };
  }, [capsuleRefs, toolsContentRef]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${svgLayout.width} ${svgLayout.height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="capsulesToTools" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.28 330)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.42 0.22 275)" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {linePaths.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            stroke="url(#capsulesToTools)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15 + line.id * 0.06, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function ToolBracketAct({
  toolsContentRef,
}: {
  toolsContentRef: RefObject<HTMLDivElement | null>;
}) {
  const bracketContainerRef = useRef<HTMLDivElement>(null);
  const [svgLayout, setSvgLayout] = useState({ width: 1000, height: 400 });
  const [bracketPaths, setBracketPaths] = useState<Array<{ id: number; d: string }>>([]);

  useLayoutEffect(() => {
    const updateBracket = () => {
      const containerEl = bracketContainerRef.current;
      const targetEl = toolsContentRef.current;
      if (!containerEl || !targetEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const width = Math.max(containerRect.width, 480);
      const height = Math.max(containerRect.height, 320);
      setSvgLayout({ width, height });

      // Converge on the exact same point ToolsToShippedLines starts from
      // (bottom-center of toolsContentRef) so the bracket keeps its full
      // sweep down past the headline/paragraph/button, then hands off to the
      // shipped-card lines at one exact shared pixel — no gap, no overshoot
      // past the container (the old fixed y=420 in a 400-tall viewBox did
      // both: it was disconnected from the real layout AND drew outside its
      // own viewBox).
      const midX = width / 2;
      const targetY = targetRect.bottom - containerRect.top;
      const topY = -20;
      const shoulderY = targetY * 0.35;
      const sideY1 = targetY * 0.55;
      const sideY2 = targetY * 0.75;

      const nextPaths = [0, 1, 2, 3].map((i) => {
        const inset = i * 30;
        const leftX = 60 + inset;
        const rightX = width - 60 - inset;
        const d = `
          M ${midX} ${topY + i * 6}
          C ${midX} ${shoulderY}, ${leftX} ${shoulderY}, ${leftX} ${sideY1}
          L ${leftX} ${sideY2}
          C ${leftX} ${(sideY2 + targetY) / 2}, ${midX} ${(sideY2 + targetY) / 2}, ${midX} ${targetY - i * 3}
          M ${midX} ${topY + i * 6}
          C ${midX} ${shoulderY}, ${rightX} ${shoulderY}, ${rightX} ${sideY1}
          L ${rightX} ${sideY2}
          C ${rightX} ${(sideY2 + targetY) / 2}, ${midX} ${(sideY2 + targetY) / 2}, ${midX} ${targetY - i * 3}
        `;
        return { id: i, d };
      });

      setBracketPaths(nextPaths);
    };

    updateBracket();

    const timer = window.setTimeout(updateBracket, 900);
    const resizeObserver = new ResizeObserver(updateBracket);
    if (bracketContainerRef.current) {
      resizeObserver.observe(bracketContainerRef.current);
    }
    window.addEventListener("resize", updateBracket);
    window.addEventListener("scroll", updateBracket, { passive: true });

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateBracket);
      window.removeEventListener("scroll", updateBracket);
    };
  }, [toolsContentRef]);

  return (
    <div ref={bracketContainerRef} className="relative mx-auto max-w-5xl">
      {/* Bracket SVG — converges exactly on toolsContentRef's top-center */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${svgLayout.width} ${svgLayout.height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="bracket" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.28 330)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 275)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {bracketPaths.map((path, i) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#bracket)"
            strokeWidth="1"
            strokeOpacity={0.7 - i * 0.15}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, delay: 0.1 + i * 0.1, ease: "easeInOut" }}
          />
        ))}
      </svg>

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
          <h2 className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            We plug into the tools you already use.
          </h2>
          <p className="mt-4 max-w-lg text-[color:var(--ink-soft)] leading-relaxed">
            From Figma to Instagram to your CMS — Pulse works inside your stack, not around it.
          </p>
          <Link
            to="/services"
            className="btn-pill btn-primary mt-8"
          >
            See all services
          </Link>
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
function ToolsToShippedLines({
  toolsContentRef,
  cardRefs,
}: {
  toolsContentRef: RefObject<HTMLDivElement | null>;
  cardRefs: RefObject<Array<HTMLDivElement | null>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLayout, setSvgLayout] = useState({ width: 1000, height: 500 });
  const [linePaths, setLinePaths] = useState<Array<{ id: number; d: string }>>([]);

  useLayoutEffect(() => {
    const updateLines = () => {
      const containerEl = containerRef.current;
      const sourceEl = toolsContentRef.current;
      if (!containerEl || !sourceEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const sourceRect = sourceEl.getBoundingClientRect();
      const width = Math.max(containerRect.width, 480);
      const height = Math.max(containerRect.height, 400);
      setSvgLayout({ width, height });

      // Same exact point ToolBracketAct converges into (bottom-center of
      // toolsContentRef). The bracket sweeps down past the headline and ends
      // here; these lines pick up from that identical pixel and fan out to
      // the shipped cards — one continuous, gap-free flow instead of a
      // separate, misaligned convergence point.
      const sourceX = sourceRect.left + sourceRect.width / 2 - containerRect.left;
      const sourceY = sourceRect.bottom - containerRect.top - 0.5;

      const nextLines = cardRefs.current
        .map((ref, index) => {
          if (!ref) return null;
          const rect = ref.getBoundingClientRect();
          const targetX = rect.left + rect.width / 2 - containerRect.left;
          const targetY = rect.top - containerRect.top + 0.5;

          const dx = targetX - sourceX;

          // The center card sits both horizontally centered AND highest, so
          // its natural path is a short, nearly-straight vertical segment
          // that overlaps the shared knot where every line starts — making
          // it invisible even though it's being drawn. Give every line a
          // deliberate lateral bow (alternating sides, strongest when the
          // natural horizontal spread is small) so each one visibly peels
          // away from the convergence point before curving back to its own
          // target, instead of stacking on top of its neighbors.
          const side = index % 2 === 0 ? 1 : -1;
          const bow = Math.max(0, 50 - Math.abs(dx) * 0.4) * side;

          const control1X = sourceX + dx * 0.3 + bow;
          const control1Y = sourceY + Math.max(40, (targetY - sourceY) * 0.3);
          const control2X = sourceX + dx * 0.75 + bow * 0.35;
          const control2Y = sourceY + (targetY - sourceY) * 0.7;

          const d = `M ${sourceX} ${sourceY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${targetX} ${targetY}`;
          return { id: index, d };
        })
        .filter((line): line is { id: number; d: string } => Boolean(line));

      setLinePaths(nextLines);
    };

    updateLines();

    const timer = window.setTimeout(updateLines, 900);
    const resizeObserver = new ResizeObserver(updateLines);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines, { passive: true });

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
    };
  }, [cardRefs, toolsContentRef]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${svgLayout.width} ${svgLayout.height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="toolsToShipped" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.24 275)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.65 0.28 330)" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {linePaths.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            stroke="url(#toolsToShipped)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15 + line.id * 0.08, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

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
      <div className="mt-4 h-14 w-14 rounded-full bg-gradient-to-br from-[color:var(--surface)] to-[color:var(--accent)] border border-border mx-auto" />
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