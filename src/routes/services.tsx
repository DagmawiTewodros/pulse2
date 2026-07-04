import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { AlternatingFeatures } from "@/components/home/AlternatingFeatures";
import { CtaBand } from "@/components/layout/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pulse Digital" },
      {
        name: "description",
        content:
          "Website building, social media management, and content marketing — end-to-end services from a small, focused team.",
      },
      { property: "og:title", content: "Services — Pulse Digital" },
      {
        property: "og:description",
        content:
          "Website building, social media management, and content marketing done right.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to look great online."
        description="Three services, designed to work together. Pick one, pick all — we shape the engagement to fit your business."
      />
      <AlternatingFeatures />
      <CtaBand />
    </>
  );
}
