export const siteConfig = {
  name: "YOUR NAME",
  role: "Video Editor & Creative VA",
  tagline: "I turn raw footage into content people want to watch.",
  description:
    "Video editor and creative virtual assistant helping creators and businesses produce engaging short-form, YouTube, podcast, and social media content.",
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
