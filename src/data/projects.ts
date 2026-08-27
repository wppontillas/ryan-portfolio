import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "talking-head-youtube-edit",
    title: "YOUR PROJECT TITLE",
    category: "youtube",
    clientType: "Content Creator",
    thumbnail: "/placeholders/project-01.svg",
    videoUrl: "",
    goal: "Turn raw footage into a fast-paced, engaging YouTube video.",
    description:
      "A talking-head YouTube edit focused on pacing and retention — dead air removed, mistakes cut, and the result tightened into a fast, watchable video.",
    services: [
      "Removed pauses and mistakes",
      "Added B-roll",
      "Added animated text",
      "Audio enhancement",
      "Color correction",
      "Background music",
      "Sound effects",
    ],
    tools: ["Adobe Premiere Pro", "After Effects"],
    featured: true,
    year: 2026,
  },
  {
    id: "2",
    slug: "short-form-reel-series",
    title: "YOUR PROJECT TITLE",
    category: "short-form",
    clientType: "Personal Brand",
    thumbnail: "/placeholders/project-02.svg",
    videoUrl: "",
    goal: "Repurpose long-form content into scroll-stopping vertical clips.",
    description:
      "A batch of short-form clips cut from long-form source, built for retention with pattern interrupts, captions, and sound design.",
    services: [
      "Clean cuts",
      "Animated captions",
      "Zooms",
      "Music",
      "Sound effects",
    ],
    tools: ["CapCut", "Adobe Premiere Pro"],
    featured: true,
    year: 2026,
  },
  {
    id: "3",
    slug: "podcast-highlight-clips",
    title: "YOUR PROJECT TITLE",
    category: "podcast",
    clientType: "Podcast Host",
    thumbnail: "/placeholders/project-03.svg",
    videoUrl: "",
    goal: "Turn a two-hour conversation into a full episode plus shareable highlight clips.",
    description:
      "Full podcast episode cleanup paired with a set of captioned, speaker-framed highlight clips for social distribution.",
    services: [
      "Full podcast editing",
      "Social media clips",
      "Captioned highlights",
      "Speaker framing",
      "Audio cleanup",
    ],
    tools: ["Adobe Premiere Pro", "Adobe Audition"],
    featured: true,
    year: 2025,
  },
  {
    id: "4",
    slug: "product-commercial-cut",
    title: "YOUR PROJECT TITLE",
    category: "commercial",
    clientType: "Small Business",
    thumbnail: "/placeholders/project-04.svg",
    videoUrl: "",
    goal: "Deliver a polished 30-second promotional cut for paid ads.",
    description:
      "A tightly paced commercial edit built for a short attention span, with motion graphics and a clear call to action.",
    services: [
      "Jump cuts",
      "Motion graphics",
      "Color correction",
      "Music licensing guidance",
    ],
    tools: ["Adobe Premiere Pro", "After Effects"],
    featured: true,
    year: 2025,
  },
  {
    id: "5",
    slug: "social-media-content-batch",
    title: "YOUR PROJECT TITLE",
    category: "social",
    clientType: "Online Coach",
    thumbnail: "/placeholders/project-05.svg",
    videoUrl: "",
    goal: "Produce a week's worth of on-brand social content from one filming day.",
    description:
      "A batch of Instagram and TikTok-ready edits produced from a single shoot day, styled consistently for one brand identity.",
    services: ["Clean cuts", "Animated captions", "Basic motion graphics", "Music"],
    tools: ["CapCut", "Canva"],
    featured: true,
    year: 2025,
  },
  {
    id: "6",
    slug: "creative-brand-story-edit",
    title: "YOUR PROJECT TITLE",
    category: "creative",
    clientType: "Creative Agency",
    thumbnail: "/placeholders/project-06.svg",
    videoUrl: "",
    goal: "Craft an emotive brand story from mixed-quality raw footage.",
    description:
      "A narrative brand piece built from mixed-source footage, leaning on color grading and sound design to unify the story.",
    services: ["Color grading", "Sound design", "Motion graphics", "Story structuring"],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    featured: false,
    year: 2025,
    beforeAfter: {
      rawUrl: "",
      finalUrl: "",
      rawLabel: "RAW FOOTAGE",
      finalLabel: "FINAL EDIT",
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsWithBeforeAfter(): Project[] {
  return projects.filter((p) => p.beforeAfter);
}
