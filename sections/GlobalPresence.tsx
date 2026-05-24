"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";

const markers = [
  { name: "Australia", left: "22%", top: "66%" },
  { name: "China", left: "66%", top: "38%" },
  { name: "Singapore", left: "58%", top: "54%" },
  { name: "Japan", left: "74%", top: "36%" },
  { name: "USA", left: "16%", top: "34%" },
  { name: "Canada", left: "18%", top: "26%" }
];

export default function GlobalPresence() {
  return (
    <section id="global" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Global presence"
          title="A network spanning the world&apos;s most vital corridors"
          description="Strategic hubs connect Asia-Pacific, North America, and beyond."
          align="center"
        />
        <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-white/80 p-8 shadow-lg">
          <div className="pointer-events-none absolute inset-0 subtle-grid opacity-40" />
          <svg
            viewBox="0 0 800 400"
            className="relative z-10 h-full w-full text-forest/20"
          >
            <path
              d="M80 210 C140 150 220 140 280 170 C340 200 420 200 480 160 C540 120 640 120 720 170"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M120 260 C200 220 260 210 320 230 C380 250 420 280 460 300 C520 330 620 330 700 300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M120 130 C180 110 260 110 320 130 C380 150 420 180 480 190 C540 200 620 190 700 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          {markers.map((marker) => (
            <motion.div
              key={marker.name}
              className="absolute z-20"
              style={{ left: marker.left, top: marker.top }}
              initial={{ scale: 0.8, opacity: 0.6 }}
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gold shadow-glow" />
                <span className="text-xs font-semibold text-forest">
                  {marker.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
