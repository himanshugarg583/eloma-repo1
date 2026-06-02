"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Anchor, Globe2, Network, RotateCw, ShieldCheck } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";
import CountUp from "@/components/animations/CountUp";

const GlobeScene = dynamic(() => import("@/components/GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-gold" />
    </div>
  )
});

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

export default function GlobalPresence() {
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
          {/* Interactive 3D globe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            // className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-forest via-forest-dark to-[#04140f] shadow-2xl bg-white"
            className="relative overflow-hidden rounded-2xl border border-white/10  bg-white"
          >
            {/* Ambient radial glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(72,201,138,0.18),transparent_60%)]" />

            <div className="relative aspect-[16/12] w-full sm:aspect-[16/11]">
              <GlobeScene />
            </div>

            {/* Drag-to-rotate hint */}
            <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-forest-dark/60 px-3 py-1.5 backdrop-blur">
              <RotateCw size={13} className="text-gold" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                Drag to rotate · Hover the pins
              </span>
            </div>

            {/* Live counter */}
            <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-forest-dark/60 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[11px] font-semibold text-white">
                8 global hubs
              </span>
            </div>
          </motion.div>

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
                >
                  <TiltCard maxTilt={5}>
                    <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 text-forest transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-white">
                        <item.icon size={20} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-forest">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Live stat strip */}
        {/* <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 text-center sm:gap-10">
          {[
            { to: 8, suffix: "", label: "Countries" },
            { to: 25, suffix: "+", label: "Cities" },
            { to: 400, suffix: "+", label: "Specialists" }
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-bold text-forest md:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500 md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
