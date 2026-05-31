"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Globe,
  HeartHandshake,
  Leaf,
  Recycle,
  Sprout,
  Sun
} from "lucide-react";

import SectionNumber from "@/components/animations/SectionNumber";
import { ensureScrollTrigger, ease } from "@/lib/animations/registerScroll";
import { prefersReducedMotion } from "@/lib/animations/reducedMotion";

const milestones = [
  {
    key: "foundation",
    chapter: "Foundation",
    title: "Built on long-term thinking",
    description:
      "Eloma Group was founded with sustainability as a core operating principle — not an after-thought programme. Every business decision balances near-term performance with multi-decade impact.",
    icon: Sprout
  },
  {
    key: "operations",
    chapter: "Operations",
    title: "Cleaner fleets, smarter routes",
    description:
      "Across our transport business, route optimisation, fleet renewal, and modal-shift initiatives meaningfully reduce avoidable emissions on every corridor we serve.",
    icon: Recycle
  },
  {
    key: "technology",
    chapter: "Technology",
    title: "Energy-aware digital systems",
    description:
      "Our digital products are built with workload-aware infrastructure choices and efficient code. We treat the energy cost of compute as a first-class engineering concern.",
    icon: Sun
  },
  {
    key: "community",
    chapter: "Community",
    title: "Local investment in every market",
    description:
      "We invest in the communities we operate in — local hiring, multi-year training programmes, and supplier partnerships in every one of our eight countries.",
    icon: HeartHandshake
  },
  {
    key: "future",
    chapter: "Future",
    title: "A 2030 climate roadmap",
    description:
      "Group-wide carbon reduction targets, transparent annual reporting, and supplier engagement programmes built into our strategy and disclosed at the executive level.",
    icon: Globe
  }
];

export default function Sustainability() {
  const root = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const chaptersRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!root.current || !stickyRef.current || !chaptersRef.current) return;
    const ST = ensureScrollTrigger();
    if (!ST) return;
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const chapters = chaptersRef.current!.querySelectorAll(
        "[data-chapter]"
      ) as NodeListOf<HTMLElement>;
      const progressFill = stickyRef.current!.querySelector(
        "[data-progress-fill]"
      ) as HTMLElement | null;

      if (reduced) {
        gsap.set(chapters, { opacity: 1, y: 0 });
        if (progressFill) gsap.set(progressFill, { scaleY: 1 });
        return;
      }

      // Each chapter enter trigger updates active state + fades in
      chapters.forEach((ch, idx) => {
        gsap.fromTo(
          ch,
          { opacity: 0.25, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: ease.elegant,
            scrollTrigger: {
              trigger: ch,
              start: "top 65%",
              end: "bottom 65%",
              onEnter: () => setActive(idx),
              onEnterBack: () => setActive(idx),
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Progress line tied to the whole chapters track
      if (progressFill) {
        gsap.fromTo(
          progressFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: chaptersRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 0.6
            }
          }
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const activeMilestone = milestones[active];

  return (
    <section
      id="sustainability"
      ref={root}
      className="relative overflow-hidden bg-white"
    >
      {/* Top heading */}
      <div className="container-x pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionNumber number="05" label="Sustainability" align="center" />
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-forest md:text-4xl lg:text-5xl">
            Built for the long term
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Sustainability isn&apos;t a side initiative at Eloma — it&apos;s a
            guiding principle behind every business decision we make across
            eight countries.
          </p>
        </div>
      </div>

      {/* Sticky scrollytelling */}
      <div className="container-x mt-16 md:mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT — sticky visual */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              ref={stickyRef}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12"
            >
              {/* Subtle pattern */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #0c2f2a 1px, transparent 0)",
                  backgroundSize: "22px 22px"
                }}
              />

              {/* Chapter number + progress line */}
              <div className="relative flex items-start gap-5">
                <div className="relative">
                  <div className="h-64 w-px bg-slate-200">
                    <div
                      data-progress-fill
                      className="h-full w-full origin-top bg-gradient-to-b from-gold via-forest to-forest"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
                    Chapter {active + 1} of {milestones.length}
                  </p>
                  <p
                    key={activeMilestone.key}
                    className="mt-2 font-display text-7xl font-bold tabular-nums leading-none text-forest md:text-8xl"
                  >
                    0{active + 1}
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold text-forest md:text-2xl">
                    {activeMilestone.chapter}
                  </p>
                </div>
              </div>

              {/* Active icon */}
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between md:bottom-12 md:left-12 md:right-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-700">
                  <activeMilestone.icon
                    size={26}
                    className="text-forest"
                    strokeWidth={1.6}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="block h-px w-10 bg-gold-dark/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-forest/60">
                    Eloma · ESG
                  </span>
                </div>
              </div>

              {/* Mini timeline chips */}
              <div className="absolute left-8 right-8 top-8 hidden items-center gap-1.5 md:flex md:left-12 md:right-12">
                {milestones.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      i <= active
                        ? "bg-gold"
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — chapters */}
          <div ref={chaptersRef} className="space-y-20 md:space-y-32">
            {milestones.map((m, i) => (
              <article
                key={m.key}
                data-chapter
                className="relative min-h-[60vh]"
              >
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
                  0{i + 1} — {m.chapter}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-[1.15] tracking-tight text-forest md:text-3xl lg:text-4xl">
                  {m.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
                  {m.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Soft footer */}
      <div className="container-x pb-20 pt-16 md:pb-28">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3">
          <Leaf size={16} className="text-forest" />
          <p className="text-xs font-medium text-forest">
            Aligned with the UN Sustainable Development Goals
          </p>
        </div>
      </div>
    </section>
  );
}
