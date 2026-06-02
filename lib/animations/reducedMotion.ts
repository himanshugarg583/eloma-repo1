"use client";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Run an animation builder unless the user prefers reduced motion.
 * If reduced, runs the fallback (typically: set final states immediately).
 */
export function withMotion(
  fn: () => void | (() => void),
  fallback: () => void
): (() => void) | void {
  if (prefersReducedMotion()) {
    fallback();
    return;
  }
  const cleanup = fn();
  return typeof cleanup === "function" ? cleanup : undefined;
}
