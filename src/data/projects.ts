import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "talking-head-youtube-edit",
    title: "SPEED RAMPING",
    category: "speedramp",
    clientType: "Content Creator",
    thumbnail: "/thumbnails/speedramp-car-edit-08v2.jpg",
    videoUrl: "/videos/speedramp/car-edit-08.mp4",
    goal: "Turn raw footage into a fast-paced, engaging YouTube video.",
    description:
      "A dynamic speed-ramping edit that blends fast and slow-motion transitions to emphasize movement, create dramatic impact, and keep every sequence visually engaging.",
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
    title: "CAR CONTENT REEL SERIES",
    category: "reels",
    clientType: "Automotive Content Creator",
    thumbnail: "/thumbnails/car-content-reel-series.jpg",
    videoUrl: "/videos/cars/canada-3.mp4",
    videoOrientation: "portrait",
    goal: "Repurpose long-form content into scroll-stopping vertical clips.",
    description:
      "A high-energy series of reels crafted with fast-paced cuts, dynamic transitions, speed ramps, cinematic B-roll, and sound design to keep viewers engaged from start to finish.",
    services: [
      "Clean cuts",
      "Animated captions",
      "Zooms",
      "Music",
      "Sound effects",
    ],
    tools: ["CapCut", "After Effects"],
    featured: true,
    year: 2026,
    clips: [
      {
        title: "Canada 3",
        videoUrl: "/videos/cars/canada-3.mp4",
        thumbnail: "/thumbnails/cars-canada-3.jpg",
      },
      {
        title: "Car Edit 03",
        videoUrl: "/videos/cars/car-edit-03.mp4",
        thumbnail: "/thumbnails/cars-car-edit-03.jpg",
      },
      {
        title: "Car Edit 04",
        videoUrl: "/videos/cars/car-edit-04.mp4",
        thumbnail: "/thumbnails/cars-car-edit-04.jpg",
      },
      {
        title: "Luffy",
        videoUrl: "/videos/cars/luffy.mp4",
        thumbnail: "/thumbnails/cars-luffy.jpg",
      },
    ],
  },
  {
    id: "3",
    slug: "podcast-highlight-clips",
    title: "HOLOGRAM EFFECTS",
    category: "hologram-effects",
    clientType: "Podcast Host",
    thumbnail: "/thumbnails/hologram-effects-car-edit-10-v2.jpg",
    videoUrl: "/videos/hologram-effects/car-edit-10.mp4",
    goal: "Turn a two-hour conversation into a full episode plus shareable highlight clips.",
    description:
      "A futuristic visual effects edit featuring holographic overlays, motion tracking, glowing interfaces, and seamless compositing to create an immersive sci-fi experience.",
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
    title: "MOTION GRAPHICS",
    category: "motion-graphics",
    clientType: "Small Business",
    thumbnail: "/thumbnails/product-commercial-cut.jpg",
    videoUrl: "/videos/motion-graphics/altrad-final.mp4",
    goal: "Deliver a polished 30-second promotional cut for paid ads.",
    description:
      "A visually engaging motion graphics edit featuring animated text, smooth transitions, dynamic shapes, and polished visual elements designed to make information more compelling and memorable.",
    services: [
      "Jump cuts",
      "Motion graphics",
      "Color correction",
      "Music licensing guidance",
    ],
    tools: ["Adobe Premiere Pro", "After Effects"],
    featured: true,
    year: 2025,
    clips: [
      {
        title: "Altrad Final",
        videoUrl: "/videos/motion-graphics/altrad-final.mp4",
        thumbnail: "/thumbnails/product-commercial-cut.jpg",
      },
      {
        title: "Motion Graphics Reel",
        videoUrl: "/videos/motion-graphics/mogrt-01.mp4",
        thumbnail: "/thumbnails/mogrt-01.jpg",
      },
    ],
  },
  {
    id: "5",
    slug: "social-media-content-batch",
    title: "SOCIAL MEDIA CONTENT BATCH",
    category: "reels",
    clientType: "Online Coach",
    thumbnail: "/thumbnails/social-media-gramo.jpg",
    videoUrl: "/videos/social-media/gramo.mp4",
    videoOrientation: "portrait",
    goal: "Produce a week's worth of on-brand social content from one filming day.",
    description:
      "A batch of short-form social media edits crafted for Instagram, TikTok, and Reels, featuring fast-paced cuts, smooth transitions, engaging visuals, and a consistent style built for stronger audience retention.",
    services: ["Clean cuts", "Animated captions", "Basic motion graphics", "Music"],
    tools: ["CapCut", "Canva"],
    featured: true,
    year: 2025,
    clips: [
      {
        title: "Gramo",
        videoUrl: "/videos/social-media/gramo.mp4",
        thumbnail: "/thumbnails/social-media-gramo.jpg",
      },
      {
        title: "Free Bird",
        videoUrl: "/videos/social-media/free-bird.mp4",
        thumbnail: "/thumbnails/social-media-free-bird.jpg",
      },
      {
        title: "What Is Bro Doing",
        videoUrl: "/videos/social-media/what-is-bro-doing.mp4",
        thumbnail: "/thumbnails/social-media-what-is-bro-doing.jpg",
      },
      {
        title: "Yala Click",
        videoUrl: "/videos/social-media/yala-click.mp4",
        thumbnail: "/thumbnails/social-media-yala-click.jpg",
      },
      {
        title: "Car Edit 06",
        videoUrl: "/videos/social-media/car-edit-06.mp4",
        thumbnail: "/thumbnails/social-media-car-edit-06.jpg",
      },
    ],
  },
  {
    id: "6",
    slug: "creative-brand-story-edit",
    title: "SPEEDRAMP BRAND STORY",
    category: "speedramp",
    clientType: "Creative Agency",
    thumbnail: "/placeholders/project-06.svg",
    videoUrl: "",
    goal: "Craft an emotive brand story from mixed-quality raw footage.",
    description:
      "A narrative brand piece built from mixed-source footage, leaning on color grading and sound design to unify the story.",
    services: ["Color grading", "Sound design", "Motion graphics", "Story structuring"],
    tools: ["Adobe Premiere Pro", "After Effects"],
    featured: false,
    year: 2025,
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
