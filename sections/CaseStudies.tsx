"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // On desktop the inner track is wider than the viewport; translate it horizontally as the user scrolls vertically.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="section-alt relative"
      style={{ height: "260vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Leadership"
              title="Driven by visionary leadership"
              description="Our growth is guided by strong leadership, clear vision, and a commitment to building businesses that create lasting impact. Our leaders bring together industry expertise, innovation, and a forward-thinking mindset to shape a multi-business ecosystem built for the future."
            />
            <MagneticButton strength={10} className="hidden md:inline-flex">
              <Button variant="outline" size="sm">
                Meet Our Leadership
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
          {caseStudies.map((study, idx) => (
            <Link
              key={study.title}
              href="#"
              className="group relative flex w-[min(640px,80vw)] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:border-forest hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="80vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {study.category}
                </span>
                <span className="absolute right-5 top-5 inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  0{idx + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-2xl font-semibold text-forest transition-colors group-hover:text-gold-dark">
                  {study.title}
                </h3>
                <p className="mt-3 max-w-lg flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                  {study.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  <span className="relative">
                    Read more
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
        <div className="container-x mt-10 grid gap-6 md:grid-cols-2 lg:hidden">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href="#"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-forest hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {study.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-forest">
                  {study.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {study.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  <span>Read more</span>
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
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
