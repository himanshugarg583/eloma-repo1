"use client";

import { useRef } from "react";
import { Package, Ship, Truck, Warehouse, Zap, ShieldCheck } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  {
    title: "Interstate Road Transport",
    description: "Luxury-grade fleet operations and real-time route intelligence.",
    icon: Truck
  },
  {
    title: "Multi-Location Warehousing",
    description: "Climate-ready storage with precision inventory governance.",
    icon: Warehouse
  },
  {
    title: "Container Movement",
    description: "Port to customer delivery with high-security handling.",
    icon: Ship
  },
  {
    title: "Contract Logistics",
    description: "Long-term integrated logistics for complex supply chains.",
    icon: ShieldCheck
  },
  {
    title: "Same and Next Day Delivery",
    description: "Time-critical distribution with premium SLAs.",
    icon: Zap
  },
  {
    title: "Metro Distribution",
    description: "High-frequency metropolitan delivery networks.",
    icon: Package
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Services"
          title="Precision logistics with premium execution"
          description="From port to customer, we deliver with an uncompromising focus on reliability and elegance."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              data-reveal
              className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <service.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-lg font-semibold text-forest">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-forest/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
