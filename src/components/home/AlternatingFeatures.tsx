import { Check } from "lucide-react";
import { Reveal } from "@/components/ui-brand/Reveal";
import { services } from "@/data/services";

export function AlternatingFeatures() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[color:var(--background)]">
      <div className="container-page px-4 sm:px-6 space-y-16 md:space-y-24">
        {services.map((s, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={s.id}
              id={s.id}
              className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center scroll-mt-24"
            >
              <Reveal className={reversed ? "md:order-2" : ""}>
                <div className="max-w-[650px]">
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
                    {s.title}
                  </h2>
                  <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed">
                    {s.description}
                  </p>
                  <ul className="mt-6 sm:mt-8 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-[color:var(--primary)]"
                        />
                        <span className="text-sm sm:text-base text-[color:var(--ink)] leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1} className={reversed ? "md:order-1" : ""}>
                <MockupFor id={s.id} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MockupFor({ id }: { id: string }) {
  if (id === "website-building") return <BrowserMockup />;
  if (id === "social-media") return <PhoneMockup />;
  return <ArticleMockup />;
}

function BrowserMockup() {
  return (
    <div className="rounded-[20px] border border-border/50 bg-white shadow-[0_20px_50px_-20px_rgba(20,20,60,0.15)] overflow-hidden scale-90 sm:scale-95 md:scale-100 origin-top">
      <div className="flex items-center gap-2 border-b border-border/50 px-3 sm:px-4 py-2 sm:py-3">
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-400" />
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-amber-400" />
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-2 sm:ml-4 flex-1 rounded-md bg-[color:var(--surface)] px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-[color:var(--ink-soft)]">
          yourbrand.com
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="h-2 w-20 sm:h-3 sm:w-24 rounded bg-[color:var(--surface)]" />
        <div className="mt-3 sm:mt-4 h-6 sm:h-8 w-3/4 rounded bg-[color:var(--ink)]/90" />
        <div className="mt-2 sm:mt-3 h-6 sm:h-8 w-1/2 rounded bg-[color:var(--ink)]/90" />
        <div className="mt-4 sm:mt-6 h-2 w-full sm:h-3 rounded bg-[color:var(--surface)]" />
        <div className="mt-1 sm:mt-2 h-2 w-5/6 sm:h-3 rounded bg-[color:var(--surface)]" />
        <div className="mt-4 sm:mt-6 inline-block h-7 sm:h-9 w-24 sm:w-32 rounded-full" style={{ background: "var(--color-primary)" }} />
        <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-[color:var(--surface)]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-[200px] sm:w-[240px] md:w-[280px] rounded-[32px] sm:rounded-[40px] border-[6px] sm:border-[8px] border-[color:var(--ink)] bg-white shadow-[0_20px_50px_-20px_rgba(20,20,60,0.15)] overflow-hidden">
        <div className="bg-[color:var(--ink)] h-4 sm:h-6" />
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
          {[
            { u: "@pulsedigital", t: "Post scheduled", h: "aspect-square" },
            { u: "@yourbrand", t: "New reel", h: "aspect-[4/5]" },
          ].map((p, i) => (
            <div key={i} className="rounded-xl border border-border/50 overflow-hidden">
              <div className="flex items-center gap-2 p-2 sm:p-3">
                <div className="h-5 w-5 sm:h-7 sm:w-7 rounded-full" style={{ background: "var(--color-primary)" }} />
                <span className="text-[10px] sm:text-xs font-semibold">{p.u}</span>
              </div>
              <div className={`${p.h} bg-gradient-to-br from-[color:var(--surface)] to-[color:var(--accent)]`} />
              <div className="p-2 sm:p-3">
                <div className="h-1.5 sm:h-2 w-3/4 rounded bg-[color:var(--surface)]" />
                <div className="mt-1.5 sm:mt-2 h-1.5 sm:h-2 w-1/2 rounded bg-[color:var(--surface)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleMockup() {
  return (
    <div className="rounded-[20px] border border-border/50 bg-white shadow-[0_20px_50px_-20px_rgba(20,20,60,0.15)] p-6 sm:p-8 md:p-10">
      <span className="eyebrow text-[10px] sm:text-xs">Newsletter · Issue 12</span>
      <h3 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold tracking-tight leading-tight">
        Five ways to make your homepage do the selling for you
      </h3>
      <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
        <div className="h-2 sm:h-2.5 rounded bg-[color:var(--surface)]" />
        <div className="h-2 sm:h-2.5 w-11/12 rounded bg-[color:var(--surface)]" />
        <div className="h-2 sm:h-2.5 w-4/5 rounded bg-[color:var(--surface)]" />
      </div>
      <div className="mt-4 sm:mt-6 aspect-[16/9] rounded-lg bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--surface)]"></div>
      <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
        <div className="h-2 sm:h-2.5 rounded bg-[color:var(--surface)]" />
        <div className="h-2 sm:h-2.5 w-5/6 rounded bg-[color:var(--surface)]" />
      </div>
      <div className="mt-4 sm:mt-6 inline-block h-7 sm:h-8 w-24 sm:w-28 rounded-full" style={{ background: "var(--color-primary)" }}></div>
    </div>
  );
}
