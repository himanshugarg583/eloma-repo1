"use client";

import { useRef } from "react";
import {
  Package,
  Ship,
  Truck,
  Warehouse,
  Zap,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  {
    title: "Interstate Road Transport",
    description:
      "Premium fleet operations and real-time route intelligence across long-haul corridors.",
    icon: Truck
  },
  {
    title: "Multi-Location Warehousing",
    description:
      "Climate-ready storage with precision inventory governance and rapid fulfillment.",
    icon: Warehouse
  },
  {
    title: "Container Movement",
    description:
      "Port to customer delivery with high-security handling and seamless cross-dock.",
    icon: Ship
  },
  {
    title: "Contract Logistics",
    description:
      "Long-term integrated logistics solutions designed for complex supply chains.",
    icon: ShieldCheck
  },
  {
    title: "Same and Next Day Delivery",
    description:
      "Time-critical distribution with premium SLAs across metropolitan networks.",
    icon: Zap
  },
  {
    title: "Metro Distribution",
    description:
      "High-frequency metropolitan delivery built for speed, safety, and reliability.",
    icon: Package
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Precision services across the supply chain"
          description="From port to customer, the group delivers a complete spectrum of logistics services — engineered with uncompromising focus on reliability."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              data-reveal
              className="group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-slate-50"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest/5 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white">
                <service.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-semibold text-forest">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Explore service</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
