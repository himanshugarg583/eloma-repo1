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

    // Expose lenis globally so Navbar logo can use lenis.scrollTo() for smooth scroll
    const win = window as unknown as { lenis?: Lenis };
    win.lenis = lenis;

    gsap.registerPlugin(ScrollTrigger);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    const refreshTimer = setTimeout(refresh, 300);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(update);
      lenis.destroy();
      // Clean up global reference
      win.lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
