"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";

type Reason = {
  label: string;
  desc: string;
  img: string;
};

const REASONS: Reason[] = [
  {
    label: "Vendor-agnostic",
    desc: "Solutions built around your goals, never locked to a single vendor.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Collaborative",
    desc: "We operate as a true extension of your team across every engagement.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Ethical practices",
    desc: "Transparent, responsible business at every single step.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Scalable",
    desc: "Infrastructure and teams that grow with your demand.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Long-term",
    desc: "Partnerships measured in decades, not transactions.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Continuous",
    desc: "24/7 operations and support across every market we serve.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Cost-effective",
    desc: "Maximum value and efficiency for every dollar invested.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Data-driven",
    desc: "Decisions powered by analytics and real-time insight.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Eloma"
          title="Why Choose Eloma: Your Growth Partner?"
          description="A highly skilled team and a proven track record — we connect logistics, digital innovation, security, travel and customer solutions to unleash the full potential of your business."
        />

        {/* Desktop: hover-expand image accordion (pure CSS in globals.css) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="wc-accordion mt-14 hidden lg:flex"
        >
          {REASONS.map((r) => (
            <article
              key={r.label}
              className="wc-card relative overflow-hidden rounded-2xl shadow-card"
            >
              <Image
                src={r.img}
                alt={r.label}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="wc-tint absolute inset-0" aria-hidden />
              <p className="wc-desc absolute bottom-14 left-5 right-5 text-sm leading-relaxed text-white/90">
                {r.desc}
              </p>
              <span className="wc-label absolute bottom-5 left-5 text-base">
                {r.label}
              </span>
            </article>
          ))}
        </motion.div>

        {/* Mobile / tablet: no hover → readable 2-col grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden"
        >
          {REASONS.map((r) => (
            <article
              key={r.label}
              className="relative h-[260px] overflow-hidden rounded-2xl shadow-card"
            >
              <Image
                src={r.img}
                alt={r.label}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,33,60,0.25), rgba(42,138,107,0.7))"
                }}
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-semibold text-white">
                  {r.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/85">
                  {r.desc}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
