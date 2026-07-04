import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui-brand/SectionHeading";
import { Reveal } from "@/components/ui-brand/Reveal";

const testimonials = [
  {
    quote:
      "We hired Pulse to redo our site and take over our social. Six months in, we're getting inbound leads from people who cite the blog. That never happened before.",
    author: "Maya R.",
    role: "Founder, Northwind Studio",
  },
  {
    quote:
      "I've worked with three agencies. Pulse is the only one where I actually talk to the person doing the work. Everything ships faster and looks better.",
    author: "Diego P.",
    role: "Head of Growth, Alpine Co.",
  },
  {
    quote:
      "They treat our brand like it's theirs. Our feed finally looks like it belongs to a real company — not a spreadsheet of stock photos.",
    author: "Lena K.",
    role: "Owner, Kestrel & Co.",
  },
];

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) =>
    setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-[color:var(--surface)]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What partners say."
            align="center"
          />
        </Reveal>
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-border bg-white p-10 md:p-14 shadow-[0_20px_60px_-30px_rgba(20,20,60,0.2)]">
            <Quote
              size={32}
              className="absolute top-6 left-6"
              style={{ color: "var(--color-primary)" }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xl md:text-2xl leading-relaxed text-[color:var(--ink)]">
                  {t.quote}
                </p>
                <p className="mt-6 font-semibold">{t.author}</p>
                <p className="text-sm text-[color:var(--ink-soft)]">{t.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => go(-1)}
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-[color:var(--ink)] transition-colors bg-white"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-6 bg-[color:var(--ink)]" : "w-1.5 bg-[color:var(--border)]"
                  }`}
                  aria-label={`Go to ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-[color:var(--ink)] transition-colors bg-white"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
