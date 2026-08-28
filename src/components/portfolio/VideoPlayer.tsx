"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { parseVideoUrl } from "@/lib/video";

const PLAY_EVENT = "video-player:play";

export function VideoPlayer({
  videoUrl,
  thumbnail,
  title,
  aspect = "aspect-video",
  eager = false,
}: {
  videoUrl: string;
  thumbnail: string;
  title: string;
  aspect?: string;
  eager?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const id = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const parsed = parseVideoUrl(videoUrl);
  const canPlay = parsed.kind !== "none";

  useEffect(() => {
    const video = videoRef.current;
    if (!eager || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const announcePlaying = () => {
      window.dispatchEvent(new CustomEvent<string>(PLAY_EVENT, { detail: id }));
    };
    const pauseIfOther = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) {
        video.pause();
      }
    };

    video.addEventListener("play", announcePlaying);
    window.addEventListener(PLAY_EVENT, pauseIfOther);
    return () => {
      video.removeEventListener("play", announcePlaying);
      window.removeEventListener(PLAY_EVENT, pauseIfOther);
    };
  }, [id, eager, playing]);

  if (eager && canPlay && parsed.kind === "direct") {
    return (
      <div className={`relative w-full overflow-hidden rounded-2xl bg-black ${aspect}`}>
        <video
          ref={videoRef}
          src={parsed.url}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          className="h-full w-full"
          aria-label={title}
        />
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-20 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 text-fg backdrop-blur-sm transition-colors hover:bg-bg"
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
              <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
              <path
                d="M15.5 8.5a5 5 0 0 1 0 7M18 6a9 9 0 0 1 0 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    );
  }

  if (playing && canPlay) {
    if (parsed.kind === "direct") {
      return (
        <div className={`relative w-full overflow-hidden rounded-2xl bg-black ${aspect}`}>
          <video
            ref={videoRef}
            src={parsed.url}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
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
