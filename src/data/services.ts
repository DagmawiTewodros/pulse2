export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "website-building",
    eyebrow: "Website Building",
    title: "A site that earns trust in the first five seconds",
    tagline: "Custom-built websites that actually convert.",
    description:
      "We design and build fast, modern websites tailored to how your customers actually decide. No bloated templates. No guesswork.",
    bullets: [
      "Custom design & development",
      "Full redesigns of outdated sites",
      "Technical SEO setup from day one",
      "Ongoing maintenance & performance care",
    ],
  },
  {
    id: "social-media",
    eyebrow: "Social Media Management",
    title: "Show up consistently — without hiring a team",
    tagline: "Content calendars, posting, and community, handled.",
    description:
      "We run your social presence end-to-end so your brand looks alive, thoughtful, and always on — on the platforms that matter for you.",
    bullets: [
      "Monthly content calendar planning",
      "Posting & account management",
      "Community management & replies",
      "Platform-specific strategy",
    ],
  },
  {
    id: "content-marketing",
    eyebrow: "Content Marketing",
    title: "Content that actually pulls people in",
    tagline: "Blogs, newsletters, and video that build authority.",
    description:
      "We produce the writing and short-form content your business needs to stay top of mind — and to give search engines something to love.",
    bullets: [
      "Blog articles written for your audience",
      "Email newsletters that get opened",
      "Short-form video for social",
      "Case studies & customer testimonials",
    ],
  },
];
