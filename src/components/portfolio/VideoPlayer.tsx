"use client";

import { useState } from "react";
import Image from "next/image";
import { parseVideoUrl } from "@/lib/video";

export function VideoPlayer({
  videoUrl,
  thumbnail,
  title,
  aspect = "aspect-video",
}: {
  videoUrl: string;
  thumbnail: string;
  title: string;
  aspect?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const parsed = parseVideoUrl(videoUrl);
  const canPlay = parsed.kind !== "none";

  if (playing && canPlay) {
    if (parsed.kind === "direct") {
      return (
        <div className={`relative w-full overflow-hidden rounded-2xl bg-black ${aspect}`}>
          <video
            src={parsed.url}
            controls
            autoPlay
            className="h-full w-full"
            aria-label={title}
          />
        </div>
      );
    }
    return (
      <div className={`relative w-full overflow-hidden rounded-2xl bg-black ${aspect}`}>
        <iframe
          src={parsed.embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => canPlay && setPlaying(true)}
      disabled={!canPlay}
      aria-label={canPlay ? `Play video: ${title}` : `${title} (video coming soon)`}
      className={`group relative w-full overflow-hidden rounded-2xl border border-border bg-card ${aspect} ${
        canPlay ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <Image
        src={thumbnail}
        alt=""
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      {canPlay ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-fg shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
              <path d="M1 1.5v19l18-9.5-18-9.5z" fill="currentColor" />
            </svg>
          </span>
        </span>
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-fg-secondary">
          Video coming soon
        </span>
      )}
    </button>
  );
}
