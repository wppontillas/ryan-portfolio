"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioFilters, type FilterValue } from "./PortfolioFilters";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterValue>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [projects, active],
  );

  return (
    <div className="flex flex-col gap-10">
      <PortfolioFilters active={active} onChange={setActive} />

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <PortfolioCard project={project} className="h-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-fg-secondary">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
