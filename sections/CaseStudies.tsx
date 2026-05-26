"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="section-padding section-alt"
    >
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Leadership"
            title="Driven by visionary leadership"
            description="Our growth is guided by strong leadership, clear vision, and a commitment to creating lasting impact."
          />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Leadership Stories
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href="#"
              data-reveal
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {study.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-forest transition-colors group-hover:text-gold-dark">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {study.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  <span>Read more</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" size="sm">
            Leadership Stories
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
