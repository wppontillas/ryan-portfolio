export const siteConfig = {
  name: "WILFRED",
  role: "Video Editor & Creative VA",
  tagline: "I turn raw footage into content people want to watch.",
  description:
    "I help creators turn raw footage into engaging short-form content quickly, using Premiere Pro and AI-assisted workflows.",
  url: "https://your-domain.com",
  email: "hello@your-domain.com",
  location: "Available worldwide · Remote",
  nav: [
    { label: "Work", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaPrimary: { label: "View My Work", href: "/portfolio" },
  ctaSecondary: { label: "Let's Work Together", href: "/contact" },
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Upwork", href: "" },
    { label: "OnlineJobs.ph", href: "" },
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
