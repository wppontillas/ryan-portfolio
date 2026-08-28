export const siteConfig = {
  name: "RYN",
  role: "Video Editor · Speedramp, Motion Graphics & Cinematic Edits",
  tagline: "I turn raw footage into cinematic, scroll-stopping content.",
  description:
    "I help creators and brands turn raw footage into cinematic edits — speed ramps, motion graphics, and scroll-stopping reels.",
  url: "https://your-domain.com",
  email: "ryangallego2121@gmail.com",
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
