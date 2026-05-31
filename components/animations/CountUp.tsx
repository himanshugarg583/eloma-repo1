"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { ensureScrollTrigger } from "@/lib/animations/registerScroll";
import { prefersReducedMotion } from "@/lib/animations/reducedMotion";

interface CountUpProps {
  to: number;
  duration?: number;
  /** Suffix to render after the number, e.g. "+". */
  suffix?: string;
  /** Decimals to show. */
  decimals?: number;
  className?: string;
  /** Optional prefix. */
  prefix?: string;
}

export default function CountUp({
  to,
  duration = 2.4,
  suffix = "",
  decimals = 0,
  prefix = "",
  className
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }
    ensureScrollTrigger();
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration,
      ease: "power3.out",
      onUpdate: () => setValue(obj.v),
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true
      }
    });
    return () => {
      tween.kill();
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
