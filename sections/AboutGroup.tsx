"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Globe2,
  TrendingUp,
  Layers,
  Zap,
  Play,
  X,
  MapPin,
  Users,
  Building2,
} from "lucide-react";

/* ─── Brand tokens ────────────────────────────────────────── */
const GREEN  = "#3CB98C";
const NAVY   = "#08213C";
const NAVY_D = "#051829";

/* ─── Pillar data ─────────────────────────────────────────── */
const pillars = [
  {
    num: "01",
    icon: Sparkles,
    title: "Entrepreneur-First DNA",
    short: "Built by builders, for builders",
    description:
      "Born from entrepreneurial vision, we unite expertise across transportation, digital, security, travel & support.",
    accent: GREEN,
  },
  {
    num: "02",
    icon: Layers,
    title: "Unified Ecosystem",
    short: "One group. Infinite synergy",
    description:
      "Integrated solutions delivered through interconnected verticals — driving efficiency, growth & long-term value.",
    accent: "#60a5fa",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Sustainable Scale",
    short: "Growth that lasts",
    description:
      "Innovation, scalability and sustainability — the three principles guiding every business we touch.",
    accent: GREEN,
  },
];

const industries = [
  "Transportation",
  "Digital Solutions",
  "Virtual Security",
  "Travel & Hospitality",
  "Customer Support",
  "Logistics",
  "Technology",
  "Operations",
];

/* ─── Animated Counter ────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (1800 / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      setCount(Math.floor(start));
      if (start >= to) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Magnetic Button Wrapper ─────────────────────────────── */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  return (
    <motion.div ref={ref} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x: sx, y: sy }} className="inline-block">
      {children}
    </motion.div>
  );
}

/* ─── Word-by-word reveal ─────────────────────────────────── */
function RevealWords({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─── Video Modal ─────────────────────────────────────────── */
function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              <X size={18} /> Close
            </button>

            {/* 16:9 video container */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="We Are Eloma"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function AboutGroup() {
  const sectionRef       = useRef<HTMLElement | null>(null);
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [videoOpen, setVideoOpen]       = useState(false);
  const [mousePos, setMousePos]         = useState({ x: 50, y: 50 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />

      <section
        id="about"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden py-0"
        style={{ background: NAVY, fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif" }}
      >

        {/* ══════════════════════════════════════════════════════
            1. CINEMATIC VIDEO HERO BLOCK
            ══════════════════════════════════════════════════ */}
        <div
          className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
          style={{ background: `radial-gradient(ellipse at 50% 30%, #0d2d52 0%, ${NAVY} 55%, #030e1c 100%)` }}
        >
          {/* Spotlight glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(60,185,140,0.18), transparent 70%)` }}
          />

          {/* Horizontal scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px opacity-30"
            style={{ background: `linear-gradient(to right, transparent, ${GREEN}, transparent)` }}
            animate={{ top: ["-5%", "105%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />

          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          {/* Rotating gradient orb */}
          <motion.div style={{ rotate: bgRotate }} className="pointer-events-none absolute -right-72 -top-72 h-[900px] w-[900px] opacity-20">
            <div className="absolute inset-0 rounded-full blur-[130px]" style={{ background: `conic-gradient(${GREEN}, #60a5fa, transparent, ${GREEN})` }} />
          </motion.div>

          {/* Live status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: GREEN }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: GREEN }} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/50" style={{ fontFamily: "monospace" }}>
              About · Eloma Group
            </span>
          </motion.div>

          {/* "WE ARE ELOMA" headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative z-10 mb-6 font-black uppercase leading-none tracking-tight text-white"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {"WE ARE ELOMA".split(" ").map((word, wi) => (
              <span key={wi} className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: wi * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  style={wi === 2 ? { color: GREEN } : {}}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mb-12 max-w-md text-base text-white/50 md:text-lg"
          >
            A global ecosystem built for lasting impact
          </motion.p>

          {/* Play button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onClick={() => setVideoOpen(true)}
            className="group relative flex items-center justify-center"
            aria-label="Play video"
          >
            {/* Pulsing outer ring */}
            <span className="absolute inline-flex h-28 w-28 animate-ping rounded-full opacity-20" style={{ background: GREEN }} />
            <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full opacity-15 [animation-delay:0.4s]" style={{ background: GREEN }} />

            {/* Button circle */}
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.22 }}
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/25 shadow-2xl backdrop-blur"
              style={{ background: `linear-gradient(135deg, ${GREEN}, #2a8a6b)` }}
            >
              <Play size={28} fill="white" className="text-white ml-1" />
            </motion.span>
          </motion.button>

          {/* Bottom stat row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8 md:gap-16"
          >
            {[["8+", "Countries"], ["400+", "Specialists"], ["10+", "Industries"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{num}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40" style={{ fontFamily: "monospace" }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════
            2. ABOUT INTRO
            ══════════════════════════════════════════════════ */}
        <div
          className="relative overflow-hidden py-20 md:py-28"
          style={{ background: NAVY }}
        >
          {/* Spotlight */}
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(60,185,140,0.14), transparent 70%)` }} />

          {/* Mouse-follow glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-50 transition-all duration-700"
            style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(60,185,140,0.1) 0%, transparent 50%)` }}
          />

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
            {/* Top strip */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: GREEN }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: GREEN }} />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50" style={{ fontFamily: "monospace" }}>
                  About / Eloma Group · Active
                </span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-2 text-[11px] text-white/30" style={{ fontFamily: "monospace" }}>
                <span>4 VERTICALS</span>
                <span className="h-3 w-px bg-white/20" />
                <span>10+ INDUSTRIES</span>
                <span className="h-3 w-px bg-white/20" />
                <span>1 VISION</span>
              </motion.div>
            </div>

            {/* Headline */}
            <div className="mb-20">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-6 flex items-center gap-4">
                <span className="h-px w-12" style={{ background: `linear-gradient(to right, ${GREEN}, transparent)` }} />
                <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: GREEN }}>Who We Are</span>
              </motion.div>

              <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[84px]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                <div className="block"><RevealWords text="A diversified" /></div>
                <div className="block"><span className="italic text-white/35"><RevealWords text="business group" delay={0.2} /></span></div>
                <div className="block">
                  <RevealWords text="engineered for" delay={0.4} />
                  <span className="relative ml-2 inline-block">
                    <motion.span
                      initial={{ y: "110%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10 inline-block bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(90deg, ${GREEN}, #60a5fa, ${GREEN})`, backgroundSize: "200% 100%", animation: "shimmer 4s linear infinite" }}
                    >
                      scale.
                    </motion.span>
                  </span>
                </div>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 max-w-xl text-base leading-relaxed text-white/55 lg:text-lg"
              >
                Eloma Group is an entrepreneur-focused organization bringing together expertise across transportation, digital, security, travel and customer support — operating as a unified ecosystem.
              </motion.p>
            </div>

            {/* ══ BENTO GRID ══ */}
            <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-6 lg:gap-5" style={{ gridTemplateRows: "280px 280px" }}>

              {/* Card A — Hero image (2×2 col, 2 row) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl md:col-span-4"
              >
                <motion.div style={{ scale: imgScale }} className="h-full w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                    alt="Eloma Group global operations"
                    width={1600} height={1200}
                    className="h-full min-h-[560px] w-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${NAVY_D} 0%, ${NAVY}/60 40%, transparent 100%)` }} />

                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px opacity-50"
                  style={{ background: `linear-gradient(to right, transparent, ${GREEN}, transparent)` }}
                  animate={{ top: ["-5%", "105%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />

                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: GREEN }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60" style={{ fontFamily: "monospace" }}>Eloma · Global HQ</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: GREEN, fontFamily: "monospace" }}>Established · Multi-Vertical</p>
                      <h3 className="max-w-md text-2xl font-black leading-tight text-white lg:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Where five industries meet one unified vision.
                      </h3>
                    </div>
                    <div className="hidden flex-shrink-0 sm:block">
                      <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
                        <div className="flex items-center gap-2">
                          <Globe2 size={14} style={{ color: GREEN }} />
                          <span className="text-[11px] font-bold uppercase tracking-widest text-white">Global</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: `inset 0 0 0 1px rgba(60,185,140,0.3)` }} />
              </motion.div>

              {/* Card B — Years stat */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="group relative col-span-1 overflow-hidden rounded-3xl p-6 backdrop-blur-sm md:col-span-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <Zap size={20} strokeWidth={1.8} style={{ color: GREEN }} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30" style={{ fontFamily: "monospace" }}>YEARS / OPS</span>
                  </div>
                  <div>
                    <div className="text-6xl font-black leading-none text-white lg:text-7xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <Counter to={15} suffix="+" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">Years of combined leadership building businesses that scale.</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: `${GREEN}/20` }} />
              </motion.div>

              {/* Card C — Team image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="group relative col-span-1 overflow-hidden rounded-3xl md:col-span-2"
              >
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                  alt="Eloma team"
                  width={900} height={600}
                  className="h-full min-h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${NAVY_D}/90, transparent 60%)` }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: GREEN, fontFamily: "monospace" }}>Team / Culture</span>
                  <p className="mt-1 text-base font-bold text-white">People who build together.</p>
                </div>
              </motion.div>
            </div>

            {/* ══ EXTRA STATS ROW ══ */}
            <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { icon: MapPin,    num: 8,   suffix: "+",  label: "Countries",   sub: "Global footprint" },
                { icon: Users,     num: 400, suffix: "+",  label: "Specialists", sub: "Expert team" },
                { icon: Building2, num: 25,  suffix: "+",  label: "Cities",      sub: "Urban presence" },
                { icon: Globe2,    num: 10,  suffix: "+",  label: "Industries",  sub: "Verticals served" },
              ].map(({ icon: Icon, num, suffix, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-400 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 0 0 0 transparent",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px rgba(60,185,140,0.12)`; (e.currentTarget as HTMLElement).style.borderColor = `${GREEN}40`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ""; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <Icon size={18} strokeWidth={1.8} className="mb-3" style={{ color: GREEN }} />
                  <div className="text-4xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <Counter to={num} suffix={suffix} />
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/80">{label}</div>
                  <div className="text-[11px] text-white/35">{sub}</div>
                  <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: `${GREEN}/15` }} />
                </motion.div>
              ))}
            </div>

            {/* ══ PILLARS ══ */}
            <div className="mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8 flex items-end justify-between">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40" style={{ fontFamily: "monospace" }}>03 / Principles</p>
                  <h3 className="text-3xl font-black text-white lg:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>What drives us forward.</h3>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-transparent md:mx-8 md:block" />
                <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-white/25 md:inline" style={{ fontFamily: "monospace" }}>Hover to explore</span>
              </motion.div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setActivePillar(idx)}
                    onMouseLeave={() => setActivePillar(null)}
                    className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm transition-all duration-500"
                    style={{
                      minHeight: "280px",
                      background: activePillar === idx ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.025)",
                      border: activePillar === idx ? `1px solid ${pillar.accent}40` : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-5xl font-black leading-none transition-colors duration-500" style={{ color: activePillar === idx ? pillar.accent : "rgba(255,255,255,0.07)", fontFamily: "'Playfair Display', serif" }}>
                        {pillar.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: `${pillar.accent}15`, border: `1px solid ${pillar.accent}30` }}>
                        <pillar.icon size={16} strokeWidth={1.8} style={{ color: pillar.accent }} />
                      </div>
                    </div>

                    <div className="mt-12">
                      <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/35">{pillar.short}</p>
                      <motion.div
                        initial={false}
                        animate={{ height: activePillar === idx ? "auto" : 0, opacity: activePillar === idx ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-relaxed text-white/55">{pillar.description}</p>
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: pillar.accent }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activePillar === idx ? 1 : 0 }}
                      transition={{ duration: 0.45 }}
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 100%, ${pillar.accent}10, transparent 60%)` }} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ══ INDUSTRIES MARQUEE ══ */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-12 overflow-hidden py-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex animate-marquee whitespace-nowrap gap-12">
                {[...industries, ...industries, ...industries].map((item, i) => (
                  <div key={i} className="flex flex-shrink-0 items-center gap-12">
                    <span className="text-2xl font-black uppercase tracking-tight text-white/30 lg:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>{item}</span>
                    <Sparkles size={16} className="flex-shrink-0 opacity-40" style={{ color: GREEN }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ══ CTA ══ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
            >
              <div className="max-w-lg">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: GREEN, fontFamily: "monospace" }}>The Eloma Manifesto</p>
                <p className="text-xl font-medium leading-snug text-white lg:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We don&apos;t just run businesses —{" "}
                  <span className="italic text-white/45">we build ecosystems where industries thrive together.</span>
                </p>
              </div>

              <Magnetic>
                <Link
                  href="#industries"
                  className="group inline-flex items-center gap-4 rounded-full px-6 py-4 transition-all duration-300"
                  style={{ border: `1px solid ${GREEN}40`, background: `${GREEN}08` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${GREEN}15`; (e.currentTarget as HTMLElement).style.borderColor = GREEN; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `${GREEN}08`; (e.currentTarget as HTMLElement).style.borderColor = `${GREEN}40`; }}
                >
                  <span className="text-sm font-bold text-white">Explore our verticals</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45" style={{ background: GREEN, color: NAVY_D }}>
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* ═══ Keyframes ═══ */}
        <style jsx>{`
          @keyframes shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
          .animate-marquee { animation: marquee 30s linear infinite; }
        `}</style>
      </section>
    </>
  );
}
