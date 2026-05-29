"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const [distance, setDistance] = useState(0);

  // Measure track and container widths to compute exact translation distance (px)
  useEffect(() => {
    function measure() {
      const trackEl = trackRef.current;
      const containerEl = containerRef.current;
      if (!trackEl || !containerEl) return setDistance(0);
      const trackW = trackEl.scrollWidth;
      const containerW = containerEl.clientWidth;
      const newDistance = Math.max(0, trackW - containerW);
      setDistance(newDistance);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [caseStudies.length]);

  // map vertical scroll progress to pixel translation so the last card remains visible
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="section-alt relative bg-[#ffffff]"
      style={{ height: "260vh", backgroundColor: "#ffffff" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-10 flex h-screen flex-col justify-center overflow-visible py-12 mt-20">
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
        <div className="mt-10 hidden lg:flex container-x items-start overflow-hidden relative" ref={containerRef}>
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 w-max"
            role="list"
          >
            {caseStudies.map((study, idx) => (
              <Link
                key={study.title}
                href="#"
                className="group relative flex min-w-[360px] md:w-[420px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:border-forest hover:shadow-card-hover"
              >
              <div className="relative h-[160px] md:h-[180px] lg:h-[200px] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="80vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {study.category}
                </span>
                <span className="absolute right-5 top-5 inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  0{idx + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 min-h-[160px]">
                <h3 className="font-display text-lg md:text-xl font-semibold text-forest transition-colors group-hover:text-gold-dark">
                  {study.title}
                </h3>
                <p className="mt-3 max-w-lg flex-1 text-sm leading-relaxed text-slate-600">
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
        </div>

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

        {/* Desktop progress indicator removed per request */}
      </div>
    </section>
  );
}
