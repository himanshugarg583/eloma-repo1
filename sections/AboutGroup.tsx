"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Target, Globe2, Award } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

/* ─── Pillar data ─────────────────────────────────────────── */
const pillars = [
  {
    icon: Target,
    title: "Entrepreneur-Focused",
    description:
      "Built by entrepreneurs to unite expertise across transportation, digital solutions, security, travel, and customer support.",
    accent: "#00c896",
  },
  {
    icon: Globe2,
    title: "Unified Ecosystem",
    description:
      "An integrated group delivering connected solutions that drive efficiency, growth, and long-term value.",
    accent: "#3b82f6",
  },
  {
    icon: Award,
    title: "Sustainable Growth",
    description:
      "Innovation, scalability, and sustainability guide how we help businesses adapt and succeed.",
    accent: "#00c896",
  },
];

/* ─── Animated Counter ────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      setCount(start);
      if (start >= to) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function AboutGroup() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#08213C] py-16 md:py-24"
      // className="relative overflow-hidden bg-[#ffffff] py-24 lg:py-32"
      style={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
    >
      {/* ── Animated background mesh ── */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        {/* large green orb */}
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#00c896]/10 blur-[120px]" />
        {/* blue orb */}
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#1d4ed8]/15 blur-[100px]" />
        {/* bottom accent */}
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#00c896]/8 blur-[80px]" />
      </motion.div>

      {/* ── Diagonal divider top ── */}
      <div
        className="absolute left-0 right-0 top-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      {/* ── Grid lines overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#00c896]" />
          <span
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#00c896]"
            style={{ fontFamily: "monospace" }}
          >
            Who We Are
          </span>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

          {/* LEFT — sticky image block */}
          <div className="lg:sticky lg:top-8">
            {/* Image with layered frame */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Outer decorative border */}
              <div className="absolute -inset-3 rounded-3xl border border-[#00c896]/20" />
              {/* Second decorative border */}
              <div className="absolute -inset-6 rounded-3xl border border-[#1d4ed8]/10" />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.div style={{ y: imageY }}>
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                    alt="Eloma Group corporate offices"
                    width={1400}
                    height={1000}
                    className="h-[500px] 3xl:h-[600px] 4xl:h-[680px] w-full object-cover"
                  />
                </motion.div>

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/80 via-[#050e1a]/20 to-transparent" />

                {/* Corner badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="rounded-full border border-[#00c896]/30 bg-[#050e1a]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#00c896] backdrop-blur-md">
                    Eloma Group · Est. Global
                  </div>
                  <div className="rounded-full bg-[#00c896]/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#00c896] backdrop-blur-md border border-[#00c896]/30">
                    Since Inception
                  </div>
                </div>

                {/* Floating scan line animation */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00c896]/60 to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { value: 4, suffix: "+", label: "Verticals" },
                { value: 10, suffix: "+", label: "Industries" },
                { value: 1, suffix: "", label: "Vision" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#00c896]/30 hover:bg-white/[0.06]"
                >
                  <div className="text-2xl font-black text-white">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/40">
                    {stat.label}
                  </div>
                  {/* hover glow */}
                  <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle at 50% 100%, #00c89615, transparent 70%)" }} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — content */}
          <div className="space-y-10">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-4xl font-black leading-[1.1] text-white lg:text-5xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                A diversified business group{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#00c896] to-[#3b82f6] bg-clip-text text-transparent">
                    driving innovation
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#00c896] to-[#3b82f6]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    style={{ transformOrigin: "left", width: "100%" }}
                  />
                </span>{" "}
                across industries
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/55">
                Eloma Group is an entrepreneur-focused organization bringing
                together expertise in transportation, digital solutions, virtual
                security, travel and customer support services. We operate as a
                unified ecosystem of businesses, delivering integrated solutions
                that drive efficiency, growth, and long-term value.
              </p>
            </motion.div>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#00c896]/25 hover:bg-white/[0.06]"
                >
                  {/* Left accent bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ background: pillar.accent }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.13 + 0.2 }}
                  />

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: `${pillar.accent}18`,
                        border: `1px solid ${pillar.accent}30`,
                      }}
                    >
                      <pillar.icon
                        size={18}
                        strokeWidth={1.8}
                        style={{ color: pillar.accent }}
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{pillar.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 0% 50%, ${pillar.accent}10, transparent 60%)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom tagline card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#0a1628] to-[#050e1a] p-5"
            >
              {/* Background accent */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00c896]/8 blur-3xl" />

              <p className="relative text-sm text-white/50">
                <span className="font-black text-white text-lg">4+</span>{" "}
                <span className="text-white/40">Business Verticals</span>
                <span className="mx-3 text-[#00c896]/30">·</span>
                <span className="font-black text-white text-lg">Multiple</span>{" "}
                <span className="text-white/40">Industries</span>
                <span className="mx-3 text-[#00c896]/30">·</span>
                <span className="font-black text-white text-lg">One</span>{" "}
                <span className="text-white/40">Unified Vision</span>
              </p>
            </motion.div>

            {/* CTA link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <Link
                href="#industries"
                className="group inline-flex items-center gap-3 text-sm font-bold text-[#00c896] transition-all duration-300 hover:gap-4 hover:text-white"
              >
                <span className="relative">
                  Learn more about the group
                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-[#00c896] transition-all duration-500 group-hover:bg-white" />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00c896]/40 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bottom diagonal divider ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-[#050e1a]"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
