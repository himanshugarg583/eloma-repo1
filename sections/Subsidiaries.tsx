"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { subsidiaries } from "@/lib/data";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Subsidiaries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="subsidiaries" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Subsidiary companies"
          title="A curated portfolio of premium businesses"
          description="Explore the specialized companies operating under the Eloma Group umbrella."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subsidiaries.map((company) => (
            <div
              key={company.name}
              data-reveal
              className="glass-card flex h-full flex-col justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div>
                <div className="h-10 w-10 rounded-full border border-forest/10 bg-white" />
                <h3 className="mt-4 text-lg font-semibold text-forest">
                  {company.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-forest/50">
                  {company.industry}
                </p>
                <p className="mt-3 text-sm text-forest/70">
                  {company.description}
                </p>
              </div>
              <Button variant="outline" className="mt-6 w-fit">
                View Company
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
