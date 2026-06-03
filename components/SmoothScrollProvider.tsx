"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true
    });

    // Expose the instance so other components (e.g. the navbar logo) can drive
    // smooth scrolling through Lenis instead of fighting it with native scroll.
    (window as typeof window & { lenis?: Lenis }).lenis = lenis;

    gsap.registerPlugin(ScrollTrigger);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Pinned ScrollTriggers measure their pin-spacer heights on creation.
    // If that happens before Lenis is wired up and before images/fonts settle,
    // the spacers get the wrong height and the page shows large blank gaps
    // (the "blank screen after the animation" bug). Recompute once everything
    // has loaded, and again on full window load, so pin positions are correct.
    const refresh = () => ScrollTrigger.refresh();
    const refreshTimer = setTimeout(refresh, 300);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(update);
      lenis.destroy();
      delete (window as typeof window & { lenis?: Lenis }).lenis;
    };
  }, []);

  return <>{children}</>;
}
