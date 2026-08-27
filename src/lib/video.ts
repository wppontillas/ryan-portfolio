export type VideoKind = "youtube" | "vimeo" | "direct" | "none";

export interface ParsedVideo {
  kind: VideoKind;
  id?: string;
  embedUrl?: string;
  url?: string;
}

const YOUTUBE_RE =
  /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{6,})/;
const VIMEO_RE = /vimeo\.com\/(?:video\/)?(\d+)/;

/** Parses a YouTube/Vimeo/direct URL into a renderable embed descriptor. */
export function parseVideoUrl(url: string | undefined | null): ParsedVideo {
  if (!url) return { kind: "none" };

  const youtubeMatch = url.match(YOUTUBE_RE);
  if (youtubeMatch) {
    const id = youtubeMatch[1];
    return {
      kind: "youtube",
      id,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
    };
  }

  const vimeoMatch = url.match(VIMEO_RE);
  if (vimeoMatch) {
    const id = vimeoMatch[1];
    return {
      kind: "vimeo",
      id,
      embedUrl: `https://player.vimeo.com/video/${id}?autoplay=1`,
    };
  }

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return { kind: "direct", url };
  }

  return { kind: "none" };
}

/** Returns a thumbnail URL for known providers, or null if one can't be derived. */
export function getVideoThumbnail(url: string | undefined | null): string | null {
  const parsed = parseVideoUrl(url);
  if (parsed.kind === "youtube" && parsed.id) {
    return `https://i.ytimg.com/vi/${parsed.id}/hqdefault.jpg`;
  }
  return null;
}
