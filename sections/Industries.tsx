"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  MonitorSmartphone,
  ShieldCheck,
  Headset,
  Plane
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

const verticals = [
  {
    name: "Transportation & Logistics",
    description:
      "Integrated transport and logistics solutions built for reliability and scale.",
    icon: Truck
  },
  {
    name: "Digital & Technology",
    description:
      "Technology-driven platforms that power smarter operations and insights.",
    icon: MonitorSmartphone
  },
  {
    name: "Security & Risk Management",
    description:
      "Virtual security and risk solutions designed for safety and trust.",
    icon: ShieldCheck
  },
  {
    name: "Customer Support & Call Center",
    description:
      "Customer support and call center services that strengthen relationships.",
    icon: Headset
  },
  {
    name: "Travel & Tourism",
    description:
      "Travel services focused on seamless experiences and trusted support.",
    icon: Plane
  }
];

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="section-padding section-alt relative overflow-hidden"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Connected expertise across five core verticals"
          description="We bring together transportation, digital, security, customer support, and travel — operating as one integrated ecosystem that delivers efficiency, growth, and long-term value."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((vertical, idx) => (
            <motion.div
              key={vertical.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-forest hover:shadow-card-hover md:p-8"
            >
              {/* Big translucent icon corner */}
              <vertical.icon
                className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-forest/[0.04] transition-all duration-700 group-hover:rotate-12 group-hover:text-forest/[0.07]"
                strokeWidth={1}
              />

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white shadow-md transition-all duration-500 group-hover:bg-gold group-hover:text-forest">
                  <vertical.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest">
                  {vertical.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {vertical.description}
                </p>
              </div>

              {/* Bottom border draw */}
              <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
