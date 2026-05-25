"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Button } from "@/components/ui/button";
import ThreeHero from "@/components/ThreeHero";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo(
          "[data-hero]",
          { y: 30, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: 0.12
          }
        )
        .fromTo(
          ".hero-orb",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
      <div className="grid min-h-[78vh] w-full max-w-none items-center gap-8 px-5 pb-12 pt-24 sm:min-h-[84vh] sm:gap-10 sm:px-6 sm:pb-16 sm:pt-28 lg:min-h-[92vh] lg:grid-cols-2 2xl:gap-16 2xl:min-h-[88vh] 2xl:px-20">
        <div className="space-y-8">
          <p
            data-hero
            className="text-xs uppercase tracking-[0.38em] text-forest/60"
          >
            Global Group Company
          </p>
          <h1 data-hero className="heading-display text-forest">
            Building Global Businesses with Vision, Scale and Excellence
          </h1>
          <p data-hero className="max-w-xl text-base text-forest/70">
            A legacy of infrastructure, logistics, and innovation united to
            deliver premium experiences across industries and continents.
          </p>
          <div data-hero className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Explore Group
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Companies
            </Button>
          </div>
        </div>
        <div className="hero-orb mx-auto h-[280px] w-full max-w-[420px] sm:h-[360px] lg:h-[520px] lg:max-w-none">
          <ThreeHero />
        </div>
      </div>
    </section>
  );
}
