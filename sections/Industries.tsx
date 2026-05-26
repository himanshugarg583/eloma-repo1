"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Car,
  Shirt,
  Store,
  FlaskConical,
  HeartPulse,
  Factory,
  HardHat,
  Wheat,
  Building2,
  Plane,
  Ship
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/animations/Marquee";

const rowOne = [
  { name: "FMCG", icon: ShoppingBag },
  { name: "Automobile", icon: Car },
  { name: "Fashion & Lifestyle", icon: Shirt },
  { name: "Retail", icon: Store },
  { name: "Chemical", icon: FlaskConical },
  { name: "Pharma & Healthcare", icon: HeartPulse }
];

const rowTwo = [
  { name: "Manufacturing", icon: Factory },
  { name: "Construction", icon: HardHat },
  { name: "Agricultural", icon: Wheat },
  { name: "Real Estate", icon: Building2 },
  { name: "Aviation", icon: Plane },
  { name: "Maritime", icon: Ship }
];

function IndustryTag({
  name,
  Icon
}: {
  name: string;
  Icon: typeof ShoppingBag;
}) {
  return (
    <span className="mx-3 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-forest shadow-card transition-all hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/5 text-forest">
        <Icon size={14} strokeWidth={2} />
      </span>
      {name}
    </span>
  );
}

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="section-padding section-alt relative overflow-hidden"
    >
      {/* Decorative top fade */}
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Tailored capabilities for complex sectors"
          description="Specialized expertise aligned with the unique demands of every industry — from regulated pharma cold chains to high-velocity FMCG distribution."
          align="center"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 space-y-4"
      >
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
          <Marquee speed={50}>
            {rowOne.map((it, idx) => (
              <IndustryTag key={`${it.name}-${idx}`} name={it.name} Icon={it.icon} />
            ))}
          </Marquee>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
          <Marquee direction="right" speed={55}>
            {rowTwo.map((it, idx) => (
              <IndustryTag key={`${it.name}-${idx}`} name={it.name} Icon={it.icon} />
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
}
