import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/portfolio", "/services", "/about", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    }),
  );

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/portfolio/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
