import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { LogoStrip } from "@/components/home/LogoStrip";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyThisMatters } from "@/components/home/WhyThisMatters";
import { ServiceProcessFlow } from "@/components/home/ServiceProcessFlow";
import { AlternatingFeatures } from "@/components/home/AlternatingFeatures";
import { PackagesTable } from "@/components/home/PackagesTable";
import { WhyPulseDigital } from "@/components/home/WhyPulseDigital";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CtaBand } from "@/components/layout/CtaBand";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <StatsSection />
      <WhyThisMatters />
      <ServicesOverview />
      <AlternatingFeatures />
      <ProcessSteps />
      <PackagesTable />
      <WhyPulseDigital />
      <TestimonialCarousel />
      <CtaBand />
    </>
  );
}
