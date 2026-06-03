"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Anchor, Globe2, Network, ShieldCheck } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";

const CobeGlobe = dynamic(() => import("@/components/CobeGlobe"), {
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
    <>
      {/* Full width background */}
      {/* <div className="w-screen relative -ml-[50vw] left-[50%] bg-gradient-to-br from-[#0a2342] via-[#1a3a52] to-[#0d1f35]"> */}
      <div className="w-screen relative -ml-[50vw] left-[50%] bg-white">

        <section id="global" className="section-padding relative overflow-hidden">
          <div className="container-x relative">
            <SectionHeading
              eyebrow="Global Presence"
              title="A growing presence across key global regions"
              description="We operate across multiple countries, connecting businesses and communities through trusted, scalable solutions."
              align="center"
              variant="light"
            />

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">

              {/* Globe — dark blue card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-6"
              >
                <CobeGlobe />
              </motion.div>

              {/* Capabilities — light theme */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3CB98C]">
                  Global Capabilities
                </p>
                <div className="space-y-3">
                  {capabilities.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <TiltCard maxTilt={5}>
                        <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[#3CB98C]/40 hover:shadow-[0_12px_32px_rgba(61,185,140,0.12)]">
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#08213C] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#3CB98C] group-hover:text-white">
                            <item.icon size={20} strokeWidth={1.8} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#08213C]">{item.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-slate-500">
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

          </div>
        </section>
      </div>
    </>
  );
}
