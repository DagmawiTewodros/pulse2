import { Check } from "lucide-react";
import { Reveal } from "@/components/ui-brand/Reveal";
import { services } from "@/data/services";

export function AlternatingFeatures() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page space-y-24 md:space-y-32">
        {services.map((s, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={s.id}
              id={s.id}
              className="grid gap-12 md:grid-cols-2 md:gap-16 items-center scroll-mt-24"
            >
              <Reveal className={reversed ? "md:order-2" : ""}>
                <span className="eyebrow">{s.eyebrow}</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-5 text-lg text-[color:var(--ink-soft)] leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--color-primary)" }}
                      />
                      <span className="text-[color:var(--ink)]">{b}</span>
                    </li>
                  ))}
                </ul>
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
    <div className="rounded-2xl border border-border bg-white shadow-[0_30px_80px_-40px_rgba(20,20,60,0.3)] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-4 flex-1 rounded-md bg-[color:var(--surface)] px-3 py-1 text-xs text-[color:var(--ink-soft)]">
          yourbrand.com
        </div>
      </div>
      <div className="p-8">
        <div className="h-3 w-24 rounded bg-[color:var(--surface)]" />
        <div className="mt-4 h-8 w-3/4 rounded bg-[color:var(--ink)]/90" />
        <div className="mt-3 h-8 w-1/2 rounded bg-[color:var(--ink)]/90" />
        <div className="mt-6 h-3 w-full rounded bg-[color:var(--surface)]" />
        <div className="mt-2 h-3 w-5/6 rounded bg-[color:var(--surface)]" />
        <div className="mt-6 inline-block h-9 w-32 rounded-full" style={{ background: "var(--color-primary)" }} />
        <div className="mt-8 grid grid-cols-3 gap-3">
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
      <div className="w-[280px] rounded-[2.5rem] border-8 border-[color:var(--ink)] bg-white shadow-[0_30px_80px_-40px_rgba(20,20,60,0.4)] overflow-hidden">
        <div className="bg-[color:var(--ink)] h-6" />
        <div className="p-4 space-y-3">
          {[
            { u: "@pulsedigital", t: "Post scheduled", h: "aspect-square" },
            { u: "@yourbrand", t: "New reel", h: "aspect-[4/5]" },
          ].map((p, i) => (
            <div key={i} className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 p-3">
                <div className="h-7 w-7 rounded-full" style={{ background: "var(--color-primary)" }} />
                <span className="text-xs font-semibold">{p.u}</span>
              </div>
              <div className={`${p.h} bg-gradient-to-br from-[color:var(--surface)] to-[color:var(--accent)]`} />
              <div className="p-3">
                <div className="h-2 w-3/4 rounded bg-[color:var(--surface)]" />
                <div className="mt-2 h-2 w-1/2 rounded bg-[color:var(--surface)]" />
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
    <div className="rounded-2xl border border-border bg-white shadow-[0_30px_80px_-40px_rgba(20,20,60,0.3)] p-8">
      <span className="eyebrow">Newsletter · Issue 12</span>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight leading-tight">
        Five ways to make your homepage do the selling for you
      </h3>
      <div className="mt-6 space-y-2">
        <div className="h-2.5 rounded bg-[color:var(--surface)]" />
        <div className="h-2.5 w-11/12 rounded bg-[color:var(--surface)]" />
        <div className="h-2.5 w-4/5 rounded bg-[color:var(--surface)]" />
      </div>
      <div className="mt-6 aspect-[16/9] rounded-lg bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--surface)]" />
      <div className="mt-6 space-y-2">
        <div className="h-2.5 rounded bg-[color:var(--surface)]" />
        <div className="h-2.5 w-5/6 rounded bg-[color:var(--surface)]" />
      </div>
      <div className="mt-6 inline-block h-8 w-28 rounded-full" style={{ background: "var(--color-primary)" }} />
    </div>
  );
}
