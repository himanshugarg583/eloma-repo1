"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Scale,
  Cpu,
  Wind,
  Handshake,
  Sprout,
  ArrowUpRight
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Eco-Conscious Operations",
    description:
      "Reducing environmental impact across our transportation, digital, and operational processes.",
    icon: Leaf,
    span: "lg:col-span-2",
    accent: "from-forest/8 to-transparent"
  },
  {
    title: "Ethical Practices",
    description:
      "Responsible governance, transparency, and ethical standards across every business vertical.",
    icon: Scale,
    span: "",
    accent: "from-gold/10 to-transparent"
  },
  {
    title: "Smarter Technologies",
    description:
      "Adopting smarter technologies that drive efficiency without compromising the environment.",
    icon: Cpu,
    span: "",
    accent: "from-forest/8 to-transparent"
  },
  {
    title: "Lower Carbon Footprint",
    description:
      "Strategic improvements focused on measurable reductions and long-term value creation.",
    icon: Wind,
    span: "",
    accent: "from-gold/10 to-transparent"
  },
  {
    title: "Responsible Partnerships",
    description:
      "Collaboration that supports sustainable impact for businesses, communities, and the planet.",
    icon: Handshake,
    span: "",
    accent: "from-forest/8 to-transparent"
  },
  {
    title: "A Resilient Future",
    description:
      "Building solutions that contribute to a more responsible and resilient future for all.",
    icon: Sprout,
    span: "lg:col-span-2",
    accent: "from-gold/10 to-transparent"
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Sustainability & Responsibility"
          title="Committed to sustainable growth and responsible business"
          description="At Eloma Group, sustainability is not just a commitment; it is a core part of how we operate and grow. Across all our business verticals, we strive to minimize environmental impact, promote ethical practices, and build a more responsible and resilient future."
          align="center"
        />

        <div className="mt-5 grid gap-4 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`group relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-forest hover:shadow-card-hover md:p-8 ${service.span}`}
            >
              {/* Animated gradient on hover */}
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              {/* Big translucent icon corner */}
              <service.icon
                className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 text-forest/[0.04] transition-all duration-700 group-hover:rotate-12 group-hover:text-forest/[0.07]"
                strokeWidth={1}
              />

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white shadow-md transition-all duration-500 group-hover:bg-gold group-hover:text-forest">
                  <service.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-forest">
                  <span className="relative overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: 0 }}
                      whileHover={{ y: -2 }}
                    >
                      Learn more
                    </motion.span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
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
