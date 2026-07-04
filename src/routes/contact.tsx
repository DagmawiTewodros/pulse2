import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui-brand/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pulse Digital" },
      {
        name: "description",
        content:
          "Get in touch with Pulse Digital. Free 30-minute consultations, direct communication, and real answers.",
      },
      { property: "og:title", content: "Contact — Pulse Digital" },
      {
        property: "og:description",
        content: "Book a free consultation. You talk to the people actually doing the work.",
      },
    ],
  }),
  component: ContactPage,
});

const perks = [
  {
    icon: MessageSquare,
    title: "Direct communication",
    body: "You talk to the people actually doing the work — not an account manager relaying messages.",
  },
  {
    icon: Zap,
    title: "Fast responses",
    body: "We reply to every inquiry within one business day. Usually within a few hours.",
  },
  {
    icon: Mail,
    title: "No hard sell",
    body: "The first call is a real consultation, not a pitch. You'll leave with something useful either way.",
  },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your business."
        description="Book a free 30-minute call. We'll walk your site and socials with you and give you a plain-language read on what's working and what isn't."
      />
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.1fr] items-start">
          <Reveal>
            <div className="space-y-8">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--surface)]">
                    <p.icon size={20} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-[color:var(--ink-soft)] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-6">
                <p className="text-sm text-[color:var(--ink-soft)]">Prefer email?</p>
                <a
                  href="mailto:hello@pulsedigital.co"
                  className="mt-1 block text-lg font-semibold text-[color:var(--ink)]"
                >
                  hello@pulsedigital.co
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
