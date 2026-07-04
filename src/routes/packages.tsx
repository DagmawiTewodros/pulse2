import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { PackagesTable } from "@/components/home/PackagesTable";
import { CtaBand } from "@/components/layout/CtaBand";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages — Pulse Digital" },
      {
        name: "description",
        content:
          "Starter, Growth, and Full-Service packages tailored per business. See what's included and request a custom quote.",
      },
      { property: "og:title", content: "Packages — Pulse Digital" },
      {
        property: "og:description",
        content:
          "Flexible marketing packages priced per business. Request a tailored quote.",
      },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Packages"
        title="Pricing shaped to your business."
        description="Every business is different, so every quote is different. Here's the shape of what we offer — request a quote and we'll tailor it to you."
      />
      <PackagesTable />
      <CtaBand />
    </>
  );
}
