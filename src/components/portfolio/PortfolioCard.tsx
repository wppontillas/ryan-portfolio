import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { CATEGORIES } from "@/lib/types";

function categoryLabel(category: Project["category"]) {
  return CATEGORIES.find((c) => c.value === category)?.label ?? category;
}

export function PortfolioCard({
  project,
  className = "",
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent/50 ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-fg">
            <svg width="16" height="18" viewBox="0 0 20 22" fill="none" aria-hidden="true">
              <path d="M1 1.5v19l18-9.5-18-9.5z" fill="currentColor" />
            </svg>
          </span>
        </span>
        <span className="absolute left-4 top-4 rounded-full border border-border bg-bg/70 px-3 py-1 text-xs font-medium text-fg backdrop-blur-sm">
          {categoryLabel(project.category)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-medium text-fg">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm text-fg-secondary">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
