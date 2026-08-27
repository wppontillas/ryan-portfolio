import type { Service, WorkflowStep } from "@/lib/types";

export const services: Service[] = [
  {
    id: "short-form",
    title: "Short-Form Video Editing",
    forWho: ["TikTok", "Instagram Reels", "YouTube Shorts", "Facebook Reels"],
    includes: [
      "Clean cuts",
      "Animated captions",
      "B-roll",
      "Music",
      "Sound effects",
      "Zooms",
      "Basic motion graphics",
      "Color correction",
    ],
    description:
      "Fast-paced vertical edits built to hold attention from the first frame, ready to post across platforms.",
  },
  {
    id: "youtube",
    title: "YouTube Video Editing",
    forWho: ["Talking-head videos", "Vlogs", "Tutorials", "Long-form content"],
    includes: [
      "Long-form editing",
      "Jump cuts",
      "B-roll",
      "Motion graphics",
      "Lower thirds",
      "Music",
      "Audio enhancement",
      "Color correction",
      "Intro/outro",
    ],
    description:
      "Full-length YouTube edits that keep pacing tight and viewers watching, from raw footage to a polished upload.",
  },
  {
    id: "podcast",
    title: "Podcast Content Editing",
    forWho: ["Video podcasts", "Interview shows", "Solo shows"],
    includes: [
      "Full podcast editing",
      "Social media clips",
      "Captioned highlights",
      "Speaker framing",
      "Audio cleanup",
    ],
    description:
      "End-to-end podcast editing plus a set of shareable highlight clips cut for social, so one recording becomes a full content set.",
  },
  {
    id: "creative-va",
    title: "Creative VA Support",
    forWho: ["Creators who want one person to own the whole workflow"],
    includes: [
      "Organizing raw footage",
      "Google Drive organization",
      "File management",
      "Content uploads",
      "Scheduling videos",
      "Thumbnail preparation",
      "Content repurposing",
      "Basic Canva graphics",
      "YouTube uploads",
      "Social media support",
    ],
    description:
      "More than editing — support for the operational side of a content workflow, so nothing sits waiting between filming and publishing.",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Send Footage",
    description: "Client shares raw footage and project instructions.",
  },
  {
    step: "02",
    title: "Editing",
    description: "I organize and edit the content.",
  },
  {
    step: "03",
    title: "Review",
    description: "Client reviews the draft and provides feedback.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final videos are exported and delivered.",
  },
];
