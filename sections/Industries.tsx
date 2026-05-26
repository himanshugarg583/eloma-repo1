"use client";

import { useRef } from "react";
import {
  Truck,
  Cpu,
  ShieldCheck,
  Headset,
  Plane
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const industries = [
  { name: "Transportation & Logistics", icon: Truck },
  { name: "Digital & Technology", icon: Cpu },
  { name: "Security & Risk Management", icon: ShieldCheck },
  { name: "Customer Support & Call Center", icon: Headset },
  { name: "Travel and Tourism", icon: Plane }
];

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="section-padding section-alt"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Focused expertise across essential sectors"
          description="We bring connected solutions to the industries that keep people, businesses, and communities moving."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              data-reveal
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                <industry.icon size={20} strokeWidth={1.8} />
              </div>
              <span className="text-sm font-semibold text-forest sm:text-base">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
