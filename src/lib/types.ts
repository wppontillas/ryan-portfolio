export type Category = "speedramp" | "motion-graphics" | "cinematic" | "reels";

export interface CategoryMeta {
  value: Category;
  label: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { value: "speedramp", label: "Speedramp" },
  { value: "motion-graphics", label: "Motion Graphics" },
  { value: "cinematic", label: "Cinematic" },
  { value: "reels", label: "Reels" },
];

export interface BeforeAfter {
  rawUrl: string;
  finalUrl: string;
  rawLabel?: string;
  finalLabel?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  clientType: string;
  thumbnail: string;
  videoUrl: string;
  videoOrientation?: "landscape" | "portrait";
  description: string;
  goal?: string;
  services: string[];
  tools: string[];
  featured: boolean;
  year: number;
  beforeAfter?: BeforeAfter;
}

export interface Service {
  id: string;
  title: string;
  forWho: string[];
  includes: string[];
  description: string;
}

export interface Tool {
  name: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}
