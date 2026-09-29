// ============================================================
// YouTube URL helpers — normalize any YouTube URL into an
// embed-safe URL for use inside <iframe src="...">
// ============================================================

/**
 * Extract the 11-character YouTube video ID from any URL form:
 *   - https://www.youtube.com/watch?v=VIDEO_ID
 *   - https://youtu.be/VIDEO_ID
 *   - https://www.youtube.com/embed/VIDEO_ID
 *   - https://www.youtube.com/shorts/VIDEO_ID
 *   - https://www.youtube.com/live/VIDEO_ID
 *   - VIDEO_ID (bare id)
 *
 * Returns null if the input can't be parsed.
 */
export function extractYouTubeId(input?: string | null): string | null {
  if (!input) return null;
  const url = input.trim();
  if (!url) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtube\.com\/live\/)([A-Za-z0-9_-]{11})/,
    /^([A-Za-z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

/**
 * Normalize any YouTube URL into an embeddable URL.
 * Returns null if the input isn't a recognizable YouTube URL.
 *
 * @param input    The raw URL from the CMS (any form).
 * @param options  Optional iframe query params.
 */
export function toYouTubeEmbedUrl(
  input?: string | null,
  options: {
    autoplay?: boolean;
    mute?: boolean;
    loop?: boolean;
    controls?: boolean;
    modestBranding?: boolean;
    rel?: boolean;
    playsInline?: boolean;
  } = {}
): string | null {
  const id = extractYouTubeId(input);
  if (!id) return null;

  const params = new URLSearchParams();

  // Reasonable defaults for an embed
  params.set("autoplay", options.autoplay ? "1" : "0");
  if (options.mute) params.set("mute", "1");
  if (options.loop) {
    params.set("loop", "1");
    // YouTube requires `playlist` to equal the video id for looping
    params.set("playlist", id);
  }
  if (options.controls === false) params.set("controls", "0");
  if (options.modestBranding !== false) params.set("modestbranding", "1");
  if (options.rel === false) params.set("rel", "0");
  if (options.playsInline !== false) params.set("playsinline", "1");

  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}