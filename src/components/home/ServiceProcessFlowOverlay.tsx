import { useLayoutEffect, useState, type RefObject } from "react";
import { motion } from "framer-motion";

type Point = { x: number; y: number };

export function ConnectorOverlay({
  sectionRef,
  channelChipsRefs,
  heading1Ref,
  hubRef,
  featurePillsRefs,
  toolsHeadingRef,
  ctaButtonRef,
  shippedCardsRefs,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  channelChipsRefs: RefObject<Array<HTMLDivElement | null>>;
  heading1Ref: RefObject<HTMLHeadingElement | null>;
  hubRef: RefObject<HTMLDivElement | null>;
  featurePillsRefs: RefObject<Array<HTMLDivElement | null>>;
  toolsHeadingRef: RefObject<HTMLHeadingElement | null>;
  ctaButtonRef: RefObject<HTMLAnchorElement | null>;
  shippedCardsRefs: RefObject<Array<HTMLDivElement | null>>;
}) {
  const [svgLayout, setSvgLayout] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<Array<{ id: string; d: string }>>([]);

  useLayoutEffect(() => {
    const updateLines = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const sectionRect = sectionEl.getBoundingClientRect();
      setSvgLayout({ width: sectionRect.width, height: sectionRect.height });

      const getCenter = (el: HTMLElement | null): Point | null => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - sectionRect.left,
          y: rect.top + rect.height / 2 - sectionRect.top,
        };
      };

      const newPaths: Array<{ id: string; d: string }> = [];

      // Helper to draw a smooth vertical S-curve between two points with optional lateral spread
      const createBezier = (start: Point, end: Point, verticalTension: number = 0.5, startTension: number = 0) => {
        const dy = end.y - start.y;
        const dx = end.x - start.x;
        const c1x = start.x + dx * startTension;
        const c1y = start.y + Math.abs(dy) * verticalTension;
        const c2x = end.x - dx * startTension;
        const c2y = end.y - Math.abs(dy) * verticalTension;
        return `M ${start.x} ${start.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${end.x} ${end.y}`;
      };

      // 1. Channel icons -> Heading
      const heading1Center = getCenter(heading1Ref.current);
      if (heading1Center) {
        channelChipsRefs.current.forEach((chip, index) => {
          const chipCenter = getCenter(chip);
          if (chipCenter) {
            newPaths.push({
              id: `chip-${index}`,
              d: createBezier(chipCenter, heading1Center, 0.4, 0.15),
            });
          }
        });
      }

      // 2. Heading -> Center Hub
      const hubCenter = getCenter(hubRef.current);
      if (heading1Center && hubCenter) {
        newPaths.push({
          id: 'heading-to-hub',
          d: createBezier(heading1Center, hubCenter, 0.5, 0),
        });
      }

      // 3 & 4. Center Hub -> Feature Pills (Chains) -> Tools Heading
      const toolsHeadingCenter = getCenter(toolsHeadingRef.current);
      if (hubCenter) {
        const leftChain = [0, 2, 4];
        const rightChain = [1, 3, 5];
        
        const drawChain = (chain: number[], prefix: string) => {
          let prevPoint = hubCenter;
          chain.forEach((pillIndex) => {
            const pillCenter = getCenter(featurePillsRefs.current[pillIndex]);
            if (pillCenter) {
              newPaths.push({
                id: `${prefix}-to-pill-${pillIndex}`,
                d: createBezier(prevPoint, pillCenter, 0.4, 0.2),
              });
              prevPoint = pillCenter;
            }
          });
          // Connect the last pill to toolsHeading
          if (toolsHeadingCenter) {
             newPaths.push({
               id: `${prefix}-end-to-tools`,
               d: createBezier(prevPoint, toolsHeadingCenter, 0.4, 0.2),
             });
          }
        };

        drawChain(leftChain, 'left');
        drawChain(rightChain, 'right');
      }

      // 5. CTA Button -> Shipped Cards
      const ctaCenter = getCenter(ctaButtonRef.current);
      if (ctaCenter) {
        shippedCardsRefs.current.forEach((card, index) => {
          const cardCenter = getCenter(card);
          if (cardCenter) {
            newPaths.push({
              id: `cta-to-card-${index}`,
              d: createBezier(ctaCenter, cardCenter, 0.5, 0.3),
            });
          }
        });
      }

      setPaths(newPaths);
    };

    updateLines();

    const timer = window.setTimeout(updateLines, 1200);
    const resizeObserver = new ResizeObserver(updateLines);
    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }
    
    // Also observe the document body to catch any late layout shifts
    resizeObserver.observe(document.body);
    
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines, { passive: true });
    window.addEventListener("orientationchange", updateLines);

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
      window.removeEventListener("orientationchange", updateLines);
    };
  }, [
    sectionRef,
    channelChipsRefs,
    heading1Ref,
    hubRef,
    featurePillsRefs,
    toolsHeadingRef,
    ctaButtonRef,
    shippedCardsRefs,
  ]);

  return (
    <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
      <svg
        className="w-full h-full pointer-events-none"
        viewBox={`0 0 ${svgLayout.width} ${svgLayout.height}`}
        style={{ width: svgLayout.width, height: svgLayout.height }}
        fill="none"
      >
        <defs>
          <linearGradient id="connectorGradient" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.65 0.28 330)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 275)" stopOpacity="0.20" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((path, i) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#connectorGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1 * i, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
