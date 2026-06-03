'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight viewport observer. Returns a ref + boolean that flips true while
 * the element is on screen. Used to pause heavy work (Three.js render loops,
 * video playback) when a section scrolls out of view.
 */
export function useInViewport<T extends HTMLElement = HTMLDivElement>(
  rootMargin = '200px'
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
