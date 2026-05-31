"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Headphones,
  MapPin,
  Play,
  Plane,
  ShieldCheck,
  Truck
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import DotWorldMap from "@/components/maps/DotWorldMap";
import MagneticButton from "@/components/animations/MagneticButton";
import Marquee from "@/components/animations/Marquee";
import CountUp from "@/components/animations/CountUp";
import { cn } from "@/lib/utils";

/* ============================================================== */
/* PAGE                                                            */
/* ============================================================== */

export default function Home() {
  return (
    <div className="relative bg-white">
      <Navbar />
      <main className="overflow-clip">
        <Hero />
        <CountriesMarquee />
        <Manifesto />
        <BusinessVerticals />
        <WorldFootprint />
        <TrustNumbers />
        <Approach />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

/* ============================================================== */
/* 1. HERO — Cinematic forest canvas with kinetic typography       */
/* ============================================================== */

const HERO_LINES: Array<{ text: string; italic?: boolean }> = [
  { text: "One group." },
  { text: "Five verticals." },
  { text: "Eight nations.", italic: true }
];

const HERO_DELAY = 0.4;

function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Parallax + soft fade on scroll-out
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-forest-dark text-white"
    >
      {/* Layered atmospheric background ----------------------- */}
      {/* Gradient base */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 30%, rgba(26,74,67,1) 0%, rgba(12,47,42,1) 60%, rgba(6,32,28,1) 100%)"
        }}
      />
      {/* Slow-floating gold orb */}
      <motion.div
        aria-hidden
        className="absolute -right-40 -top-20 -z-20 h-[640px] w-[640px] rounded-full bg-gold/15 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -left-32 top-1/2 -z-20 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-forest-light/40 blur-3xl"
        animate={{ scale: [1.06, 1, 1.06], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG noise grain */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
        }}
      />

      {/* Subtle dot-world map background — adds geography without overwhelming */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[18%] -z-10 hidden h-[68%] w-[68%] opacity-[0.18] lg:block"
      >
        <DotWorldMap origin="AU" play={false} showLabels={false} variant="ink" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-x relative flex flex-1 flex-col justify-center pb-28 pt-32 md:pt-40"
      >
        {/* Eyebrow ------------------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_DELAY, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.36em] text-gold">
            Eloma Group · Established Across 8 Countries
          </span>
        </motion.div>

        {/* Headline — character split, mask reveal -------------- */}
        <h1 className="max-w-5xl font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight md:text-[3.4rem] lg:text-[5rem] xl:text-[6.2rem]">
          {HERO_LINES.map((line, lineIdx) => (
            <span key={lineIdx} className="block overflow-hidden pb-1.5">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: HERO_DELAY + 0.2 + lineIdx * 0.15,
                  duration: 1.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={cn(
                  "block",
                  line.italic && "italic text-gold/95"
                )}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle ------------------------------------------ */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_DELAY + 0.95, duration: 0.8 }}
          className="mt-9 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          A diversified business group connecting logistics, technology,
          security, customer support, and travel — across eight countries with
          one unified standard of trust and execution.
        </motion.p>

        {/* CTAs ----------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_DELAY + 1.15, duration: 0.8 }}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <MagneticButton strength={12}>
            <Link
              href="#manifesto"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-forest-dark transition-colors hover:bg-gold-soft"
            >
              Discover the Group
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </MagneticButton>
          <MagneticButton strength={10}>
            <button
              type="button"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-forest"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-forest">
                <Play size={11} className="ml-0.5" />
              </span>
              Watch our story
            </button>
          </MagneticButton>
        </motion.div>

        {/* Bottom meta row --------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_DELAY + 1.4, duration: 0.8 }}
          className="absolute bottom-12 left-0 right-0"
        >
          <div className="container-x flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
            <div className="grid grid-cols-3 gap-x-10 gap-y-2 sm:gap-x-14">
              <div>
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  08
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                  Countries
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  05
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                  Verticals
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  400<span className="text-gold">+</span>
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                  Specialists
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/60">
                Scroll
              </span>
              <span className="relative flex h-7 w-3 items-start justify-center rounded-full border border-white/30 p-0.5">
                <span className="block h-1.5 w-px animate-bounce bg-gold" />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ============================================================== */
/* 2. COUNTRIES MARQUEE — Constant motion, ties hero to manifesto  */
/* ============================================================== */

const COUNTRIES = [
  "Australia",
  "India",
  "United States",
  "Canada",
  "United Kingdom",
  "China",
  "Singapore",
  "United Arab Emirates"
];

function CountriesMarquee() {
  return (
    <section className="relative border-y border-slate-200 bg-white py-5">
      <Marquee speed={48}>
        {COUNTRIES.map((country, idx) => (
          <span
            key={`${country}-${idx}`}
            className="mx-8 inline-flex items-center gap-8 whitespace-nowrap"
          >
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-forest md:text-3xl">
              {country}
            </span>
            <span className="block h-1.5 w-1.5 rounded-full bg-gold-dark" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* ============================================================== */
/* 3. MANIFESTO — Sticky scrollytelling with morphing statements   */
/* ============================================================== */

const MANIFESTO_STATEMENTS = [
  {
    eyebrow: "Operators",
    plain: "We don't just operate businesses.",
    bold: "We architect ecosystems."
  },
  {
    eyebrow: "Builders",
    plain: "We don't just enter markets.",
    bold: "We build relationships that endure."
  },
  {
    eyebrow: "Partners",
    plain: "We don't just deliver services.",
    bold: "We deliver outcomes that matter."
  },
  {
    eyebrow: "Stewards",
    plain: "We don't just chase growth.",
    bold: "We earn trust over decades."
  }
];

function Manifesto() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      Math.floor(v * MANIFESTO_STATEMENTS.length),
      MANIFESTO_STATEMENTS.length - 1
    );
    if (idx !== active) setActive(Math.max(0, idx));
  });

  const current = MANIFESTO_STATEMENTS[active];

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative bg-white"
      style={{ height: "360vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl"
        />
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            {/* Step number + eyebrow */}
            <div className="flex items-center gap-4">
              <span className="font-display text-xs font-semibold tabular-nums text-gold-dark">
                0{active + 1}{" "}
                <span className="text-forest/30">
                  / 0{MANIFESTO_STATEMENTS.length}
                </span>
              </span>
              <span className="block h-px w-12 bg-gold-dark" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.eyebrow}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[11px] font-semibold uppercase tracking-[0.32em] text-forest"
                >
                  {current.eyebrow}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Morphing statement */}
            <div className="mt-10 min-h-[12rem] md:min-h-[16rem] lg:min-h-[20rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-3xl font-bold leading-[1.06] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  <p className="text-slate-400">{current.plain}</p>
                  <p className="mt-4 text-forest">
                    {current.bold.split(" ").map((word, i, arr) => (
                      <span
                        key={`${word}-${i}`}
                        className={
                          i === arr.length - 1 ||
                          i === arr.length - 2 ||
                          (arr.length <= 4 && i === arr.length - 1)
                            ? "italic text-gold-dark"
                            : ""
                        }
                      >
                        {word}
                        {i < arr.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="mt-16 flex items-center gap-3">
              {MANIFESTO_STATEMENTS.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "block h-[3px] rounded-full transition-all duration-500",
                    i === active
                      ? "w-12 bg-gold"
                      : i < active
                      ? "w-6 bg-forest/30"
                      : "w-6 bg-slate-200"
                  )}
                />
              ))}
              <span className="ml-3 text-[10px] uppercase tracking-[0.32em] text-slate-400">
                Keep scrolling
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/* 4. BUSINESS VERTICALS — Sticky-stacked cards                    */
/* ============================================================== */

const VERTICALS = [
  {
    no: "01",
    name: "Transportation & Logistics",
    tagline:
      "Integrated transport and last-mile logistics built for global enterprises.",
    bullets: [
      "Multi-modal freight",
      "Warehousing & 3PL",
      "Last-mile networks",
      "Customs & compliance"
    ],
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "02",
    name: "Digital & Technology",
    tagline:
      "Cloud-native platforms, data engineering, and digital products that scale.",
    bullets: [
      "Cloud platforms",
      "AI & data",
      "Enterprise apps",
      "Digital transformation"
    ],
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "03",
    name: "Security & Risk Management",
    tagline:
      "Virtual security operations and risk frameworks for regulated industries.",
    bullets: [
      "24/7 monitoring",
      "Compliance",
      "Threat intelligence",
      "Incident response"
    ],
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "04",
    name: "Customer Support & Call Centre",
    tagline:
      "Multi-lingual contact centre and customer-experience programs at scale.",
    bullets: [
      "Omnichannel CX",
      "Inbound & outbound",
      "CSAT analytics",
      "Workforce ops"
    ],
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "05",
    name: "Travel & Tourism",
    tagline:
      "Enterprise travel, corporate hospitality, and tourism programs across regions.",
    bullets: [
      "Corporate travel",
      "Group hospitality",
      "Visa & concierge",
      "Travel-tech platforms"
    ],
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80"
  }
];

function BusinessVerticals() {
  return (
    <section className="relative bg-slate-50">
      <div className="container-x pt-20 md:pt-28">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
              <span className="block h-px w-10 bg-gold-dark" />
              Our Businesses
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
              Five focused verticals.{" "}
              <span className="italic text-gold-dark">One unified group.</span>
            </h2>
          </motion.div>
          <Link
            href="/businesses"
            className="group hidden items-center gap-2 text-sm font-semibold text-forest lg:inline-flex"
          >
            All Businesses
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Sticky stack — each card pins, next slides on top ----- */}
      <div className="mt-16">
        {VERTICALS.map((v, i) => (
          <VerticalCard key={v.no} vertical={v} index={i} total={VERTICALS.length} />
        ))}
      </div>
    </section>
  );
}

function VerticalCard({
  vertical,
  index,
  total
}: {
  vertical: (typeof VERTICALS)[number];
  index: number;
  total: number;
}) {
  // Stick at slightly different offsets so when one card pins, the next
  // slides up and rests on top — gives the classic "stacked card" feel.
  const topPx = 60 + index * 18;
  // Slight scale-down for cards underneath
  const scale = 1 - (total - 1 - index) * 0.012;

  return (
    <div
      className="sticky px-4 md:px-8"
      style={{ top: `${topPx}px` }}
    >
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ scale }}
        className="mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card-hover lg:grid-cols-[1fr_1.1fr]"
      >
        {/* Content */}
        <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-display text-xl font-bold tabular-nums text-gold-dark md:text-2xl">
                {vertical.no}
              </span>
              <span className="block h-px w-12 bg-gold-dark" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-forest/60">
                Vertical 0{index + 1} / 0{total}
              </span>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-white">
                <vertical.icon size={22} strokeWidth={1.7} />
              </div>
            </div>

            <h3 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-forest md:text-4xl lg:text-[2.6rem]">
              {vertical.name}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
              {vertical.tagline}
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {vertical.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-sm font-medium text-forest"
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold-dark" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest"
            >
              <span className="relative">
                Explore the business
                <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-forest transition-transform duration-500 group-hover:scale-x-0" />
                <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-gold-dark transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-[480px]">
          <Image
            src={vertical.image}
            alt={vertical.name}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest/30 via-transparent to-transparent" />
        </div>
      </motion.article>
    </div>
  );
}

/* ============================================================== */
/* 5. WORLD FOOTPRINT — Animated dot map                            */
/* ============================================================== */

function WorldFootprint() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
              <span className="block h-px w-10 bg-gold-dark" />
              Global Footprint
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
              A network built for{" "}
              <span className="italic text-gold-dark">global enterprise.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Eight countries, four continents — one connected operating model
              delivering coordinated services to clients across every market we
              serve.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10"
        >
          <div className="relative aspect-[1000/480] w-full">
            <DotWorldMap origin="AU" useScrollTrigger variant="light" />
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.24em] text-forest/60">
              Connections shown:{" "}
              <span className="font-semibold text-forest">
                AU → 7 markets · 25+ cities
              </span>
            </p>
            <p className="text-xs text-slate-500">
              Particles travel along live trade & operations corridors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================== */
/* 6. TRUST NUMBERS — Big editorial counters                        */
/* ============================================================== */

const TRUST_STATS = [
  { value: 8, suffix: "", label: "Countries we operate in" },
  { value: 5, suffix: "", label: "Focused business verticals" },
  { value: 400, suffix: "+", label: "Specialists across markets" },
  { value: 25, suffix: "+", label: "Cities with operations" }
];

function TrustNumbers() {
  return (
    <section className="relative bg-forest-dark py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
        }}
      />
      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
              <span className="block h-px w-10 bg-gold" />
              By the Numbers
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              A platform measured{" "}
              <span className="italic text-gold">in trust, not transactions.</span>
            </h2>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="border-l border-gold/30 pl-6"
            >
              <p className="font-display text-5xl font-bold leading-none text-white md:text-6xl lg:text-7xl">
                <CountUp to={s.value} suffix={s.suffix} duration={2.4} />
              </p>
              <p className="mt-5 max-w-[200px] text-sm leading-relaxed text-white/65 md:text-base">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/* 7. APPROACH — Pillars                                            */
/* ============================================================== */

const PILLARS = [
  {
    title: "Long-term thinking",
    desc: "We build businesses that compound across decades — never optimising for the next quarter at the expense of the next ten years."
  },
  {
    title: "Unified standard",
    desc: "One operating culture, one quality bar, eight markets — so clients experience one Eloma whether they're in Sydney or Singapore."
  },
  {
    title: "Operator's mindset",
    desc: "We run the businesses ourselves. Capital is a tool — disciplined execution is the engine that delivers durable outcomes."
  },
  {
    title: "Trust capital",
    desc: "Earned over years, never assumed. Our relationships outlast cycles because we keep our word in good times and difficult ones."
  }
];

function Approach() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
            <span className="block h-px w-10 bg-gold-dark" />
            How We Operate
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
            Four principles. <span className="italic text-gold-dark">Every day.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative bg-white p-8 transition-colors duration-500 hover:bg-slate-50 md:p-12"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-xs font-bold tabular-nums text-gold-dark">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-forest md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {p.desc}
                  </p>
                </div>
              </div>
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/* 8. INSIGHTS — Featured + cards                                   */
/* ============================================================== */

const INSIGHTS = [
  {
    tag: "Industry Insight",
    title: "Why the next decade of trade will be built on operational integration, not just digital platforms.",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80",
    featured: true
  },
  {
    tag: "Leadership",
    title:
      "What we learned operating one company across eight cultures — a leadership memo.",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    tag: "Technology",
    title:
      "How AI-led visibility is changing supply chains from reactive to predictive systems.",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
  }
];

function Insights() {
  const [featured, ...rest] = INSIGHTS;
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
              <span className="block h-px w-10 bg-gold-dark" />
              Insights
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
              Thinking from{" "}
              <span className="italic text-gold-dark">across the group.</span>
            </h2>
          </motion.div>
          <Link
            href="/insights"
            className="group hidden items-center gap-2 text-sm font-semibold text-forest lg:inline-flex"
          >
            All Insights
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="#"
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-500 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  Featured · {featured.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  {featured.date}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-forest transition-colors group-hover:text-gold-dark md:text-2xl">
                  {featured.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  <span>Read insight</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Stacked side */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 0.85,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link
                  href="#"
                  className="group flex h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:shadow-card-hover"
                >
                  <div className="relative aspect-square w-[40%] flex-shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="220px"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                      {post.tag}
                    </p>
                    <h3 className="mt-2 line-clamp-3 font-display text-base font-semibold leading-snug text-forest transition-colors group-hover:text-gold-dark md:text-lg">
                      {post.title}
                    </h3>
                    <p className="mt-auto pt-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                      {post.date}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/* 9. FINAL CTA — Build with us                                     */
/* ============================================================== */

function FinalCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[40px] bg-forest-dark px-8 py-20 text-white md:px-16 md:py-28"
        >
          {/* Animated gold orbs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl"
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-32 h-[380px] w-[380px] rounded-full bg-forest-light/40 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Noise */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
            }}
          />

          <div className="relative max-w-3xl">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
              <span className="block h-px w-10 bg-gold" />
              Build with Eloma
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[4.4rem]">
              Ready to build something{" "}
              <span className="italic text-gold">that lasts?</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              From integrated logistics to global digital programs — partner
              with one group that thinks in decades, executes daily, and shows
              up across eight markets.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MagneticButton strength={14}>
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-forest-dark transition-colors hover:bg-gold-soft"
                >
                  Let&apos;s talk
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </MagneticButton>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
              >
                <span className="relative">
                  Learn about the group
                  <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/40 transition-transform duration-500 group-hover:scale-x-0" />
                  <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
