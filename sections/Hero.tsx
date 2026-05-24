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
      className="relative overflow-hidden bg-hero-radial"
    >
      <div className="pointer-events-none absolute inset-0 subtle-grid opacity-40" />
      <div className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-6 pb-16 pt-28 lg:grid-cols-2">
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
          <div data-hero className="flex flex-wrap gap-4">
            <Button size="lg">Explore Group</Button>
            <Button variant="outline" size="lg">
              View Companies
            </Button>
          </div>
        </div>
        <div className="hero-orb h-[420px] w-full lg:h-[520px]">
          <ThreeHero />
        </div>
      </div>
    </section>
  );
}
