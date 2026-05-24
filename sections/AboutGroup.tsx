"use client";

import { useRef } from "react";

import SectionHeading from "@/components/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function AboutGroup() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Group introduction"
          title="A multi-generational group shaping global logistics and infrastructure"
          description="We orchestrate a portfolio of companies that deliver premium logistics, infrastructure, and technology services with a single standard: excellence."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-forest/70">
            <p data-reveal>
              Since our inception, we have built a resilient global platform
              connecting businesses across continents. Our group unites strategy,
              innovation, and operational precision to keep complex supply
              networks flowing seamlessly.
            </p>
            <p data-reveal>
              Our mission is to create trusted, premium experiences across every
              customer touchpoint, while our vision is to build the most admired
              integrated logistics and infrastructure group in the region.
            </p>
            <div data-reveal className="grid gap-4 md:grid-cols-2">
              <div className="glass-card rounded-3xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                  Mission
                </p>
                <p className="mt-3 text-sm text-forest/80">
                  Elevate global trade with precision, trust, and premium
                  execution.
                </p>
              </div>
              <div className="glass-card rounded-3xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                  Vision
                </p>
                <p className="mt-3 text-sm text-forest/80">
                  Build a future-ready network for the world&apos;s leading brands.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div data-reveal className="glass-panel rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-forest/60">
                Founder message
              </p>
              <p className="mt-4 text-sm text-forest/80">
                We believe premium logistics is the silent force behind enduring
                global businesses. Our commitment is to build infrastructure and
                services worthy of that responsibility.
              </p>
            </div>
            <div data-reveal className="overflow-hidden rounded-3xl">
              <div className="h-56 w-full bg-gradient-to-br from-forest/10 via-gold/10 to-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
