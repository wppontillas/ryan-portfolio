import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-medium leading-tight text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-fg-secondary sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
