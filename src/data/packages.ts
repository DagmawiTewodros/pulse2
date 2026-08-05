export type Package = {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
};

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$2,500/mo",
    tagline: "Get the foundation right.",
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
    price: "$4,000/mo",
    tagline: "Turn on the marketing engine.",
    highlight: true,
    features: [
      "Everything in Starter",
      "Up to 10-page website",
      "16 social posts / month",
      "2 blog articles / month",
      "Monthly newsletter",
      "Direct Slack channel",
    ],
  },
  {
    id: "full-service",
    name: "Full-Service",
    price: "$6,500/mo",
    tagline: "Your outsourced marketing team.",
    features: [
      "Everything in Growth",
      "Advanced website features",
      "Daily social posting",
      "4 blog articles / month",
      "Short-form video production",
      "Strategy workshops",
    ],
  },
];
