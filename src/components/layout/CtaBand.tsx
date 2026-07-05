import { PillLink } from "@/components/ui-brand/PillButton";
import { Reveal } from "@/components/ui-brand/Reveal";

export function CtaBand() {
  return (
    <section className="bg-[color:var(--ink)] text-white">
      <div className="container-page py-12 sm:py-16 md:py-24 text-center px-4 sm:px-6">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl mx-auto text-white leading-tight sm:leading-normal">
            Ready to look as good online as you are in person?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute consultation. We'll walk your site and socials with you and show
            you exactly where trust is leaking.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <PillLink to="/contact" variant="primary" className="text-sm sm:text-base">
              Get a Free Consultation
            </PillLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
