"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import { subsidiaries } from "@/lib/data";

export default function Subsidiaries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // On desktop the inner track is wider than the viewport; translate it horizontally as the user scrolls vertically.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section
      id="subsidiaries"
      ref={sectionRef}
      className="section-alt relative"
      style={{ height: "360vh" }}
    >
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-32 -z-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 -z-0 h-[380px] w-[380px] rounded-full bg-forest/10 blur-3xl"
      />

      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Businesses"
              title="A curated portfolio of premium businesses"
              description="Eight focused operating companies under the Eloma Group umbrella — each leading in its sector with the same standard of excellence."
            />
            <MagneticButton strength={10} className="hidden md:inline-flex">
              <Button variant="outline" size="sm">
                View All Companies
                <ArrowUpRight size={16} />
              </Button>
            </MagneticButton>
          </div>
        </div>

        {/* Desktop horizontal scroller */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-10 hidden gap-6 px-8 lg:flex"
        >
          {subsidiaries.map((company, idx) => (
            <Link
              key={company.name}
              href="#"
              className="group relative flex w-[min(440px,78vw)] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:border-forest hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="440px"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {company.industry}
                </span>
                <span className="absolute right-5 top-5 inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  Business 0{idx + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-semibold text-forest transition-colors group-hover:text-gold-dark">
                  {company.name}
                </h3>
                <p className="mt-3 max-w-lg flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                  {company.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  <span className="relative">
                    Visit company
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-forest transition-all duration-500 group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
              <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </Link>
          ))}
        </motion.div>

        {/* Mobile/tablet stacked */}
        <div className="container-x mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
          {subsidiaries.map((company, idx) => (
            <Link
              key={company.name}
              href="#"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-forest hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {company.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-forest">
                  {company.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {company.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  <span>Visit company</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop progress indicator */}
        <div className="container-x mt-10 hidden lg:block">
          <div className="relative h-px w-full bg-slate-200">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-y-0 left-0 origin-left bg-forest"
            />
          </div>
          <p className="mt-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>Scroll to explore our businesses</span>
            <span className="font-semibold text-forest">08 Companies</span>
          </p>
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
