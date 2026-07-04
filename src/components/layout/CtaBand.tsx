import { PillLink } from "@/components/ui-brand/PillButton";
import { Reveal } from "@/components/ui-brand/Reveal";

export function CtaBand() {
  return (
    <section className="bg-[color:var(--ink)] text-white">
      <div className="container-page py-24 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto text-white">
            Ready to look as good online as you are in person?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Book a free 30-minute consultation. We'll walk your site and socials with you and show
            you exactly where trust is leaking.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <PillLink to="/contact" variant="primary">
              Get a Free Consultation
            </PillLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
