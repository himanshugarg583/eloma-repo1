"use client";

import { useRef } from "react";

import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/lib/data";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="industries" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Industries served"
          title="Tailored solutions for complex sectors"
          description="We align specialized capabilities with the needs of each industry we serve."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              data-reveal
              className="rounded-3xl border border-forest/10 bg-white/70 px-5 py-4 text-sm font-semibold text-forest/80 shadow-sm backdrop-blur"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
