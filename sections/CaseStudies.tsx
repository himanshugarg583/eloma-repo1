"use client";

import { useRef } from "react";

import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="case-studies" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="Proof of premium execution"
          description="A showcase of complex transformations delivered by Eloma Group companies."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              data-reveal
              className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="h-36 rounded-2xl bg-gradient-to-br from-forest/10 via-gold/10 to-white" />
              <h3 className="mt-4 text-lg font-semibold text-forest">
                {study.title}
              </h3>
              <p className="mt-2 text-sm text-forest/70">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
