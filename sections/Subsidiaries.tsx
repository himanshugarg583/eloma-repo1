"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { subsidiaries } from "@/lib/data";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Subsidiaries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="subsidiaries"
      ref={sectionRef}
      className="section-padding section-alt"
    >
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Businesses"
            title="A curated portfolio of premium businesses"
            description="Eight focused operating companies under the Eloma Group umbrella — each leading in its sector with the same standard of excellence."
          />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            View All Companies
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subsidiaries.map((company, idx) => (
            <Link
              key={company.name}
              href="#"
              data-reveal
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={idx < 4 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/0 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest backdrop-blur">
                  0{idx + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  {company.industry}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-forest transition-colors group-hover:text-gold-dark">
                  {company.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {company.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-forest">
                  <span>Learn more</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" size="sm">
            View All Companies
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
