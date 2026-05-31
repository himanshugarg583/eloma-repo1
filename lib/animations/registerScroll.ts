"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureScrollTrigger() {
  if (typeof window === "undefined") return null;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return ScrollTrigger;
}

/**
 * Default easing curves for the corporate motion language.
 * - "premium" — long, confident, expo
 * - "elegant" — smooth, balanced
 * - "soft" — short, gentle for micro
 */
export const ease = {
  premium: "expo.out",
  elegant: "power3.out",
  soft: "power2.out",
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number]
} as const;
