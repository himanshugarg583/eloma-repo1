"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Anchor, Globe2, MapPin, Network, ShieldCheck } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

const markers = [
  { name: "Sydney", country: "Australia", left: "82%", top: "78%" },
  { name: "Mumbai", country: "India", left: "68%", top: "58%" },
  { name: "Singapore", country: "Singapore", left: "73%", top: "62%" },
  { name: "Beijing", country: "China", left: "77%", top: "36%" },
  { name: "London", country: "UK", left: "46%", top: "30%" },
  { name: "Dubai", country: "UAE", left: "60%", top: "52%" },
  { name: "New York", country: "USA", left: "26%", top: "38%" },
  { name: "Toronto", country: "Canada", left: "24%", top: "32%" }
];

const capabilities = [
  {
    icon: Globe2,
    title: "Global Footprint",
    description:
      "Presence across Australia, India, USA, Canada, China, UK, UAE, and Singapore."
  },
  {
    icon: Anchor,
    title: "Connected Industries",
    description:
      "A unified ecosystem serving logistics, technology, security, travel, and customer support."
  },
  {
    icon: Network,
    title: "Collaborative Network",
    description:
      "Partnership-driven operations that bring businesses closer together."
  },
  {
    icon: ShieldCheck,
    title: "Responsible Growth",
    description: "Focused on sustainable, ethical, and future-ready business practices."
  }
];

const arcPaths = [
  "M200 175 C 350 100, 500 100, 615 195",
  "M615 195 C 600 260, 600 280, 600 295",
  "M615 195 C 660 220, 680 240, 685 195",
  "M600 295 C 660 360, 700 380, 660 395",
  "M200 175 C 280 200, 360 220, 480 260",
  "M480 260 C 540 280, 580 280, 615 195"
];

export default function GlobalPresence() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-15% 0px" });

  return (
    <section id="global" className="section-padding relative overflow-hidden bg-white">
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Global Presence"
          title="A growing presence across key global regions"
          description="We operate across multiple countries, connecting businesses and communities through trusted, scalable solutions."
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          {/* Map */}
          <div
            ref={mapRef}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
                alt="Global network"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover opacity-25"
              />

              {/* Animated arc paths */}
              <svg
                viewBox="0 0 800 500"
                className="absolute inset-0 h-full w-full text-forest/50"
                preserveAspectRatio="none"
              >
                {arcPaths.map((d, idx) => (
                  <motion.path
                    key={idx}
                    d={d}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={mapInView ? { pathLength: 1, opacity: 1 } : undefined}
                    transition={{
                      pathLength: { duration: 2, ease: [0.22, 1, 0.36, 1], delay: idx * 0.2 },
                      opacity: { duration: 0.5, delay: idx * 0.2 }
                    }}
                  />
                ))}
              </svg>

              {/* Markers */}
              {markers.map((marker, idx) => (
                <motion.div
                  key={marker.name}
                  className="absolute"
                  style={{ left: marker.left, top: marker.top }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={mapInView ? { scale: 1, opacity: 1 } : undefined}
                  transition={{
                    delay: 0.5 + idx * 0.12,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div className="group relative -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-gold/40" />
                    <div className="relative flex items-center gap-1.5 rounded-full bg-forest px-2.5 py-1 shadow-md transition-transform group-hover:scale-110">
                      <MapPin size={10} className="text-gold" />
                      <span className="text-[10px] font-semibold text-white">
                        {marker.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
              Global Capabilities
            </p>
            <div className="space-y-3">
              {capabilities.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 text-forest transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-white">
                    <item.icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
