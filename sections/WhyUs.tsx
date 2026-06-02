"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import { stats } from "@/lib/data";

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!sectionRef.current || !track) {
          return;
        }

        const totalScroll = track.scrollWidth - track.clientWidth;

        if (totalScroll <= 0) {
          return;
        }

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            pinReparent: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
      });

      return () => {
        mm.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeading
          eyebrow="Why us"
          title="Luxury-grade performance across global networks"
          description="A horizontal story of scale, precision, and premium client outcomes."
        />
      </div>
      <div className="mt-12 overflow-x-auto overflow-y-hidden lg:overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 px-6 pb-10"
          style={{ width: "max-content" }}
        >
          {stats.map((stat) => (
            <StatsCounter
              key={stat.label}
              value={parseInt(String(stat.value), 10) || 0}
              label={stat.label}
            />
          ))}
          <div className="min-w-[280px] rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
              Innovation
            </p>
            <p className="mt-3 text-sm text-forest/80">
              Dedicated innovation labs power AI-led visibility, orchestration,
              and predictive logistics.
            </p>
          </div>
          <div className="min-w-[280px] rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
              Client trust
            </p>
            <p className="mt-3 text-sm text-forest/80">
              24/7 executive response and premium operational governance for
              mission-critical flows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
