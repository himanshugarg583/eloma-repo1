"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", number: "01", label: "Hero" },
  { id: "who-we-are", number: "02", label: "Who We Are" },
  { id: "industries", number: "03", label: "Industries" },
  { id: "global", number: "04", label: "Global Footprint" },
  { id: "sustainability", number: "05", label: "Sustainability" },
  { id: "leadership", number: "06", label: "Leadership" },
  { id: "life", number: "07", label: "Life at Eloma" },
  { id: "connecting-australia", number: "08", label: "Connecting AU" }
];

export default function SectionIndex() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Build observers on existing section ids
    const found: { idx: number; el: HTMLElement }[] = [];
    sections.forEach((s, idx) => {
      const el = document.getElementById(s.id);
      if (el) found.push({ idx, el });
    });
    if (!found.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Use intersection ratio to pick the section dominating the viewport center
        let best = { idx: active, ratio: 0 };
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > best.ratio) {
            const f = found.find((x) => x.el === (e.target as HTMLElement));
            if (f) best = { idx: f.idx, ratio: e.intersectionRatio };
          }
        });
        if (best.ratio > 0) setActive(best.idx);
      },
      {
        // Focus on the central band of the viewport so the active item feels accurate
        rootMargin: "-40% 0% -40% 0%",
        threshold: [0.05, 0.2, 0.4]
      }
    );

    found.forEach((f) => obs.observe(f.el));

    // Show after a small delay (let PageIntro finish)
    const t = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      obs.disconnect();
      window.clearTimeout(t);
    };
    // We intentionally observe only on mount; `active` is a fallback hint
    // inside the observer callback and re-running the effect would re-create observers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      aria-label="Section progress"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="relative flex flex-col gap-3 pl-3">
        {/* Vertical track */}
        <span
          aria-hidden
          className="absolute left-0 top-1.5 block w-px bg-forest/15"
          style={{ height: `calc(100% - 0.75rem)` }}
        />
        {sections.map((s, idx) => {
          const isActive = idx === active;
          return (
            <li key={s.id} className="group relative flex items-center gap-3">
              <a
                href={`#${s.id}`}
                aria-label={`Go to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                className="relative flex items-center"
              >
                {/* Marker dot */}
                <span
                  aria-hidden
                  className={`absolute -left-3 block h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                    isActive
                      ? "h-2.5 w-2.5 -left-[14px] bg-gold ring-4 ring-gold/15"
                      : "bg-forest/30 group-hover:bg-forest"
                  }`}
                />
                <span
                  className={`font-display text-[10px] tabular-nums tracking-wider transition-colors ${
                    isActive
                      ? "text-forest font-semibold"
                      : "text-forest/40 group-hover:text-forest/70"
                  }`}
                >
                  {s.number}
                </span>
                {/* Hover label */}
                <span
                  className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-forest px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    isActive ? "" : ""
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
