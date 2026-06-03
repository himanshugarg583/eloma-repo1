'use client';

import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * A self-managing background video:
 *  - shows the poster instantly (crisp, no fade) so there's never a blank/flash
 *  - only loads + plays while on screen; pauses when scrolled away
 * This keeps several looping videos on one page from all decoding at once,
 * which is the main cause of scroll jank.
 */
export default function LazyVideo({ src, poster, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // load lazily on first reveal
          if (!video.src) video.src = src;
          video.play().catch(() => {
            /* autoplay can be blocked; poster remains visible */
          });
        } else {
          video.pause();
        }
      },
      { rootMargin: '150px' }
    );

    obs.observe(video);
    return () => obs.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      // `src` is set on first intersection (see effect) — not here.
    />
  );
}
