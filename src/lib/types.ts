export type Category =
  | "short-form"
  | "youtube"
  | "podcast"
  | "commercial"
  | "social"
  | "creative";

export interface CategoryMeta {
  value: Category;
  label: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { value: "short-form", label: "Short Form" },
  { value: "youtube", label: "YouTube" },
  { value: "podcast", label: "Podcast" },
  { value: "commercial", label: "Commercial" },
  { value: "social", label: "Social Media" },
  { value: "creative", label: "Creative Editing" },
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

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}
