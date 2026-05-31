"use client";

/**
 * The Eloma brand film — bare, full-bleed <video> (no frame/chrome) so it can
 * be dropped into a full-screen hero. Autoplay · muted · loop · playsInline,
 * with a poster so the frame is never empty while it buffers.
 *
 * Asset: public/eloma-hero.mp4 (720p, ~0.9 MB, faststart). Re-export from the
 * Remotion source under /remotion with `npm run video:render`, then transcode.
 */

export default function ElomaHeroFilm({
  className = "",
}: {
  className?: string;
}) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/eloma-hero-poster.jpg"
    >
      <source src="/eloma-hero.mp4" type="video/mp4" />
    </video>
  );
}
