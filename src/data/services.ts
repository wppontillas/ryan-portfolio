import type { Service, WorkflowStep } from "@/lib/types";

export const services: Service[] = [
  {
    id: "speedramp",
    title: "Speedramp Editing",
    forWho: ["Action & sports clips", "Hype montages", "Transition-heavy reels"],
    includes: [
      "Dynamic speed ramps",
      "Time remapping",
      "Beat-synced cuts",
      "Punch-ins & whip pans",
      "Sound-designed transitions",
      "Color grading",
    ],
    description:
      "High-energy speed-ramped edits that hit on the beat, built to grab attention and keep it.",
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    forWho: ["Brand promos", "Titles & lower thirds", "Logo animations"],
    includes: [
      "Animated titles & lower thirds",
      "Kinetic typography",
      "Logo reveals",
      "Custom overlays & callouts",
      "Icon & graphic animation",
    ],
    description:
      "Custom motion design layered into edits to add polish, clarity, and brand identity.",
  },
  {
    id: "cinematic",
    title: "Cinematic Editing",
    forWho: ["Brand films", "YouTube long-form", "Documentary-style content"],
    includes: [
      "Color grading",
      "Sound design",
      "Story structuring",
      "B-roll integration",
      "Pacing & narrative flow",
    ],
    description:
      "Film-inspired edits with deliberate pacing, grading, and sound design that turn raw footage into a story.",
  },
  {
    id: "reels",
    title: "Reels & Short-Form",
    forWho: ["TikTok", "Instagram Reels", "YouTube Shorts"],
    includes: [
      "Clean cuts",
      "Animated captions",
      "Trending sound sync",
      "Hook-first pacing",
      "Zooms & pattern interrupts",
    ],
    description:
      "Fast-paced vertical edits built to hold attention from the first frame, ready to post across platforms.",
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
