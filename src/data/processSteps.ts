export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dig into your business, audience, and current online presence. No cookie-cutter audits — we surface the specific gaps costing you trust and traffic.",
  },
  {
    number: "02",
    title: "Build & Plan",
    description:
      "We design your site, map out your content calendar, and lock in the tone of voice. You approve everything before it goes live.",
  },
  {
    number: "03",
    title: "Launch & Manage",
    description:
      "Site goes live. Social starts posting. Content ships on schedule. You focus on your business — we handle the online side.",
  },
  {
    number: "04",
    title: "Check In & Refine",
    description:
      "Monthly reviews with the people actually doing the work. We tune the strategy based on what's driving real results.",
  },
];
