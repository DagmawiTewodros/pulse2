export type Package = {
  id: string;
  name: string;
  tagline: string;
  bestFor: string;
  features: string[];
  highlight?: boolean;
};

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Get the foundation right.",
    bestFor: "Small businesses that need a modern site and a light social presence.",
    features: [
      "Custom 5-page website",
      "Basic SEO setup",
      "8 social posts / month",
      "Monthly reporting",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Turn on the marketing engine.",
    bestFor: "Growing brands ready to invest in consistent content and social.",
    highlight: true,
    features: [
      "Everything in Starter",
      "Up to 10-page website",
      "16 social posts / month + stories",
      "2 blog articles / month",
      "Monthly newsletter",
      "Direct Slack / WhatsApp line",
    ],
  },
  {
    id: "full-service",
    name: "Full-Service",
    tagline: "Your outsourced marketing team.",
    bestFor: "Companies that want a true partner running the whole online presence.",
    features: [
      "Everything in Growth",
      "Advanced website features & funnels",
      "Daily social posting + community mgmt",
      "4 blog articles / month",
      "Short-form video production",
      "Quarterly strategy workshops",
    ],
  },
];
