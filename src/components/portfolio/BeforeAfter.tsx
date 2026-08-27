"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { BeforeAfter as BeforeAfterData } from "@/lib/types";

export function BeforeAfter({ data }: { data: BeforeAfterData }) {
  const [value, setValue] = useState(50);
  const id = useId();
  const rawImage = data.rawUrl || "/placeholders/before.svg";
  const finalImage = data.finalUrl || "/placeholders/after.svg";

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video w-full select-none overflow-hidden rounded-2xl border border-border bg-card">
        <Image
          src={finalImage}
          alt={data.finalLabel ?? "Final edit"}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={rawImage}
            alt={data.rawLabel ?? "Raw footage"}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
          style={{ left: `${value}%` }}
        />

        <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-border bg-bg/70 px-3 py-1 text-xs font-medium text-fg backdrop-blur-sm">
          {data.rawLabel ?? "RAW FOOTAGE"}
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-border bg-bg/70 px-3 py-1 text-xs font-medium text-fg backdrop-blur-sm">
          {data.finalLabel ?? "FINAL EDIT"}
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        Drag to compare raw footage and final edit
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--color-accent)]"
      />
    </div>
  );
}
