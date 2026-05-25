"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Anchor, Globe2, MapPin, Network, ShieldCheck } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

const markers = [
  { name: "Sydney", country: "Australia", left: "82%", top: "78%" },
  { name: "Singapore", country: "Singapore", left: "73%", top: "58%" },
  { name: "Tokyo", country: "Japan", left: "85%", top: "38%" },
  { name: "Beijing", country: "China", left: "77%", top: "36%" },
  { name: "New York", country: "USA", left: "26%", top: "38%" },
  { name: "Toronto", country: "Canada", left: "24%", top: "32%" }
];

const capabilities = [
  {
    icon: Globe2,
    title: "Asia-Pacific Hub",
    description: "Operations across Sydney, Singapore, Tokyo, and Beijing serving regional trade flows."
  },
  {
    icon: Anchor,
    title: "Strategic Port Access",
    description: "Direct partnerships with major container terminals across the Pacific corridor."
  },
  {
    icon: Network,
    title: "Multi-Modal Network",
    description: "Air, ocean, road, and rail integration with a single operational standard."
  },
  {
    icon: ShieldCheck,
    title: "24/7 Operations",
    description: "Round-the-clock executive response across every regional hub we operate."
  }
];

export default function GlobalPresence() {
  return (
    <section id="global" className="section-padding bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Global Presence"
          title="A network spanning the world's most vital corridors"
          description="Strategic hubs across Asia-Pacific, North America, and beyond — connecting trade and powering enterprise growth."
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          {/* Map */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
                alt="Global network"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover opacity-25"
              />
              {/* SVG connector lines */}
              <svg
                viewBox="0 0 800 500"
                className="absolute inset-0 h-full w-full text-forest/30"
                preserveAspectRatio="none"
              >
                <path
                  d="M200 175 C 350 100, 500 100, 615 195"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M615 195 C 600 260, 600 280, 600 295"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M615 195 C 660 220, 680 240, 685 195"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M600 295 C 660 360, 700 380, 660 395"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
              {markers.map((marker, idx) => (
                <motion.div
                  key={marker.name}
                  className="absolute"
                  style={{ left: marker.left, top: marker.top }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-gold/40" />
                    <div className="relative flex items-center gap-1.5 rounded-full bg-forest px-2.5 py-1 shadow-md">
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
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-forest hover:shadow-card-hover"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <item.icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
