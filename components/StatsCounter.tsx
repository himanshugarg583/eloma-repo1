"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

import { useInView } from "@/hooks/useInView";

interface StatsCounterProps {
  value: number;
  label: string;
}

export default function StatsCounter({ value, label }: StatsCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const counter = { val: 0 };
    gsap.to(counter, {
      val: value,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(counter.val))
    });
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="min-w-[220px] rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
    >
      <div className="text-3xl font-semibold text-forest">{display}+</div>
      <div className="mt-2 text-sm text-forest/70">{label}</div>
    </div>
  );
}
