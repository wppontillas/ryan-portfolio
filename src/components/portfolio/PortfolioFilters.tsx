"use client";

import { CATEGORIES, type Category } from "@/lib/types";

const ALL = "all" as const;
export type FilterValue = Category | typeof ALL;

const filters: { value: FilterValue; label: string }[] = [
  { value: ALL, label: "All" },
  ...CATEGORIES.map((c) => ({ value: c.value, label: c.label })),
];

export function PortfolioFilters({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter portfolio by category"
    >
      {filters.map((f) => {
        const isActive = f.value === active;
        return (
          <button
            key={f.value}
            type="button"
            onClick={() => onChange(f.value)}
            aria-pressed={isActive}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-fg-secondary hover:border-accent/50 hover:text-fg"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
