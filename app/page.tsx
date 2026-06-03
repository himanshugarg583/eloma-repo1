"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  motion,
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
  Play,
  Plane,
  ShieldCheck,
  Truck
} from "lucide-react";

import Navbar from "@/components/Navbar";
import HeroGlobe from "@/components/HeroGlobe";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import DotWorldMap from "@/components/maps/DotWorldMap";
import MagneticButton from "@/components/animations/MagneticButton";
import Marquee from "@/components/animations/Marquee";
import CountUp from "@/components/animations/CountUp";
import { cn } from "@/lib/utils";
import GlobalPresence from "@/sections/GlobalPresence";
import InsightsCarousel from "@/sections/InsightsCarousel";
import Investors from "@/sections/Investors";
import Contact from "@/sections/Contact";
import WhyChoose from "@/sections/WhyChoose";
import ExperienceEloma from "@/sections/ExperienceEloma";
import AboutGroup from "@/sections/AboutGroup";
import Services from "@/sections/Services";
import Subsidiaries from "@/sections/Subsidiaries";
import CaseStudies from "@/sections/CaseStudies";
import { RevealSection } from "@/components/RevealSection";
import { NewVisionSection } from "@/sections/NewVisionSection";
import { NewEcommerceSection } from "@/sections/NewEcommerceSection";
import { NewRevealSection } from "@/sections/NewRevealSection";
import { HeroSection } from "@/sections/HeroSection";
import { CommunitySection } from "@/sections/CommunitySection";
import { GlobalArtDeck } from "@/sections/GlobalArtDeck";
import { EcommerceSection } from "@/sections/EcommerceSection";
import Hero from '@/components/sections/Hero';
import BusinessUniverse from '@/sections/BusinessUniverse';
import WhyWeExist from '@/sections/WhyWeExist';
import FutureVision from '@/sections/FutureVision';


/* ============================================================== */
/* PAGE                                                            */
/* ============================================================== */

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Give the 3D scene time to initialize before triggering animations
    const timer = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-white">
      <Navbar />
      <main className="overflow-clip">
        {/* <Hero /> */}
        <Hero ready={ready} />
        <ExperienceEloma />
        <BusinessUniverse />
          <FutureVision />
          <Insights/>
          <WhyWeExist />
          <GlobalPresence />
          {/* <Investors /> */}
          <Contact />


          {/* <RevealSection/> */}
          {/* <NewVisionSection /> */}
          {/* <InsightsCarousel /> */}
          {/* <NewEcommerceSection /> */}
       
        <div id="home-animated" className="relative">
          {/* <HeroSection />
          <GlobalArtDeck />
          <EcommerceSection /> */}
        </div>
  
                {/* <WhyChoose /> */}
  

        {/* <AboutGroup /> */}

        {/* "Experience Eloma" — scroll-zoom text mask reveals the office videos */}

        {/* <Services /> */}
{/* <NewRevealSection/> */}
        {/* CommunitySection ("Global Presence & Hubs") — copied from pallet_rose.
            CSS scoped under #home-community in globals.css. */}
        {/* <div id="home-community"> */}
          {/* <CommunitySection /> */}
        {/* </div> */}
  {/* new */}
  
        {/* <BusinessVerticals /> */}
  {/* <CaseStudies /> */}
  


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
  { text: "Powering Businesses." },
  { text: "Connecting Industries." },
  { text: "Building the Future." }
];

const HERO_DELAY = 0.4;

// function Hero() {
//   const ref = useRef<HTMLDivElement | null>(null);

//   // Parallax + soft fade on scroll-out
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"]
//   });
//   const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
//   const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

//   return (
//     <section
//       ref={ref}
//       className="relative isolate flex min-h-screen flex-col overflow-hidden bg-white text-[#0b1e2e]"
//     >
//       {/* Layered atmospheric background ----------------------- */}
//       {/* Gradient base (disabled for plain white hero) */}
//       <div aria-hidden className="absolute inset-0 -z-30" style={{ background: "transparent" }} />
//       {/* Decorative orbs hidden for white background */}
//       <motion.div aria-hidden className="hidden" />
//       <motion.div aria-hidden className="hidden" />

//       {/* SVG noise grain disabled */}
//       <div aria-hidden className="hidden" />

//       {/* Right-side interactive globe (visible on lg screens) */}
//       <div className="absolute right-12 3xl:right-28 4xl:right-52 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
//         <div className="relative h-[440px] w-[440px] lg:h-[560px] lg:w-[560px] 3xl:h-[700px] 3xl:w-[700px] 4xl:h-[820px] 4xl:w-[820px] cursor-grab active:cursor-grabbing pointer-events-auto translate-x-6 lg:translate-x-12 3xl:translate-x-0 4xl:-translate-x-12">
//           <HeroGlobe />
//         </div>
//       </div>

//       <motion.div
//         style={{ y: contentY, opacity: fade }}
//         className="container-x relative flex flex-1 flex-col justify-center pb-28 pt-32 md:pt-40"
//       >
//         {/* Eyebrow ------------------------------------------------ */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: HERO_DELAY, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-10 inline-flex items-center gap-3"
//         >
//           <span className="relative flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
//             <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//           </span>
//           <span className="text-[10px] 3xl:text-[11px] 4xl:text-[12.5px] font-semibold uppercase tracking-[0.36em] text-emerald-600">
//             Eloma Group · Established Across 8 Countries
//           </span>
//         </motion.div>

//         {/* Headline — character split, mask reveal -------------- */}
//         <h1 className="max-w-5xl font-display text-[1.8rem] font-bold leading-[1.06] tracking-tight md:text-[3rem] lg:text-[3.2rem] xl:text-[4.2rem] 3xl:text-[4.8rem] 4xl:text-[5.6rem]">
//           {HERO_LINES.map((line, lineIdx) => (
//             <span key={lineIdx} className="block overflow-hidden pb-3 md:pb-4">
//               <motion.span
//                 initial={{ y: "110%" }}
//                 animate={{ y: "0%" }}
//                 transition={{
//                   delay: HERO_DELAY + 0.2 + lineIdx * 0.15,
//                   duration: 1.05,
//                   ease: [0.22, 1, 0.36, 1]
//                 }}
//                 className={cn(
//                   "block",
//                   line.italic && "italic text-gold/95"
//                 )}
//               >
//                 {line.text}
//               </motion.span>
//             </span>
//           ))}
//         </h1>

//         {/* Subtitle ------------------------------------------ */}
//         <motion.p
//           initial={{ opacity: 0, y: 14 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: HERO_DELAY + 0.95, duration: 0.8 }}
//           className="mt-9 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg 3xl:text-xl 4xl:text-2xl 3xl:max-w-2xl"
//         >
//           A dynamic business group uniting logistics, digital innovation,
//           security, travel and customer solutions - driven by purpose,
//           performance, and sustainability.
//         </motion.p>

//         {/* CTAs ----------------------------------------------- */}
//         <motion.div
//           initial={{ opacity: 0, y: 14 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: HERO_DELAY + 1.15, duration: 0.8 }}
//           className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
//         >
//           <MagneticButton strength={12}>
//             <Link
//               href="#manifesto"
//               className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 text-sm font-semibold text-[#0b1e2e] transition-colors hover:bg-emerald-600"
//             >
//               Discover the Group
//               <ArrowRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>
//           </MagneticButton>
//           <MagneticButton strength={10}>
//             <button
//               type="button"
//               className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-[#0b1e2e]/20 bg-[#0b1e2e]/5 px-6 text-sm font-semibold text-[#0b1e2e] backdrop-blur transition-colors hover:border-[#0b1e2e] hover:bg-[#0b1e2e] hover:text-white"
//             >
//               <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-[#0b1e2e]">
//                 <Play size={11} className="ml-0.5" />
//               </span>
//               Watch our story
//             </button>
//           </MagneticButton>
//         </motion.div>

//         {/* Bottom meta row --------------------------- */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: HERO_DELAY + 1.4, duration: 0.8 }}
//           className="absolute bottom-12 left-0 right-0"
//         >

//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

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
      {/* <Marquee speed={48}>
        {COUNTRIES.map((country, idx) => (
          <span
            key={`${country}-${idx}`}
            className="mx-8 inline-flex items-center gap-8 whitespace-nowrap"
          >
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-[#0b1e2e] md:text-3xl">
              {country}
            </span>
            <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
        ))}
      </Marquee> */}
    </section>
  );
}

/* ============================================================== */
/* 3. WHO WE ARE — Overview + industries                            */
/* ============================================================== */

const INDUSTRIES = [
  "Transportation and Logistics",
  "Digital and Technology",
  "Security and Risk Management",
  "Customer Support and Call Center",
  "Travel and Tourism"
];

function Manifesto() {
  return (
    <section id="who-we-are" className="bg-white py-20 md:py-28">
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
            Who We Are
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
            A Diversified Business Group Driving Innovation Across Industries
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              Eloma Group is an entrepreneur-focused organization bringing
              together expertise in transportation, digital solutions, virtual
              security, travel and customer support services. We operate as a
              unified ecosystem of businesses, delivering integrated solutions
              that drive efficiency, growth, and long-term value.
            </p>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-forest/70">
            4+ Business Verticals | Multiple Industries | One Unified Vision for
            Sustainable Growth
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-dark">
              Industries We Serve
            </p>
            <ul className="mt-6 space-y-3 text-sm text-forest md:text-base">
              {INDUSTRIES.map((industry) => (
                <li key={industry} className="flex items-center gap-3">
                  <span className="block h-1.5 w-1.5 rounded-full bg-gold-dark" />
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="font-display text-xl font-semibold text-forest md:text-2xl">
              With a strong focus on innovation, scalability, and sustainability
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              We empower businesses across sectors to adapt, evolve, and succeed
              in a rapidly changing world.
            </p>
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
    name: "Transportation and Logistics",
    tagline:
      "Integrated transport and last-mile logistics built for global enterprises.",
    bullets: [
      "Multi-modal freight",
      "Last-mile networks",
      "Warehousing and 3PL",
      "Customs and compliance"
    ],
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "02",
    name: "Digital and Technology",
    tagline:
      "Digital platforms, data engineering, and product innovation that scale.",
    bullets: [
      "Cloud platforms",
      "AI and data",
      "Enterprise apps",
      "Digital transformation"
    ],
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "03",
    name: "Security and Risk Management",
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
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "04",
    name: "Customer Support and Call Center",
    tagline:
      "Multilingual contact center and customer experience programs at scale.",
    bullets: [
      "Omnichannel CX",
      "Inbound and outbound",
      "CSAT analytics",
      "Workforce ops"
    ],
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
  },
  {
    no: "05",
    name: "Travel and Tourism",
    tagline:
      "Enterprise travel, corporate hospitality, and tourism programs across regions.",
    bullets: [
      "Corporate travel",
      "Group hospitality",
      "Visa and concierge",
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
              Industries We Serve
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
              4+ Business Verticals.{" "}
              <span className="italic text-gold-dark">One unified vision.</span>
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

            <h3 className="mt-6 font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-forest md:text-4xl lg:text-[2.6rem]">
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
          className="mt-4 overflow-visible rounded-3xl border border-slate-200 bg-slate-50 pt-12 pb-6 md:pt-16 md:pb-10 px-0"
        >
          <div className="px-6 md:px-10">
            <div className="relative aspect-[1000/480] w-full -mt-4">
              <DotWorldMap origin="AU" useScrollTrigger variant="light" showLabels={true} className="relative top-4 md:top-6" />
            </div>
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
    <section className="relative bg-[#03172a] py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
        }}
      />
      {/* <div className="container-x relative">
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
      </div> */}
    </section>
  );
}

/* ============================================================== */
/* 7. SUSTAINABILITY & RESPONSIBILITY                               */
/* ============================================================== */

function Approach() {
  return (
    <section id="sustainability" className="bg-white py-20 md:py-28">
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
            Sustainability and Responsibility
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
            Committed to Sustainable Growth and Responsible Business
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            At Eloma Group, sustainability is not just a commitment; it is a
            core part of how we operate and grow. Across all our business
            verticals, we strive to minimize environmental impact, promote
            ethical practices, and build solutions that contribute to a more
            responsible and resilient future.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
            <h3 className="font-display text-2xl font-semibold text-forest">
              Sustainable Growth in Action
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              We integrate eco-conscious strategies within our transportation,
              digital, and operational processes, ensuring efficiency without
              compromising the environment. From reducing carbon footprints to
              adopting smarter technologies, our approach is focused on
              long-term value creation for businesses, communities, and the
              planet.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-dark">
              Be a Part of Our Sustainable Journey
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-forest">
              Together, We Can Build a Better Future
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              At Eloma Group, we believe that meaningful change happens when
              businesses come together with a shared purpose. By partnering with
              us, you become part of a forward-thinking ecosystem that values
              eco-conscious practices, ethical business standards, and
              future-ready solutions.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Together, we can reduce environmental impact, drive smarter
              operations, and build businesses that are not only successful
              today but sustainable for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================== */
/* 8. LEADERSHIP + LIFE AT ELOMA                                    */
/* ============================================================== */

const WHY_WORK = [
  "Fair chances for everyone",
  "Learning by doing",
  "Growing together as a team",
  "A healthy work-life balance"
];

function Insights() {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="container-x space-y-16">
        <div className="grid gap-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
              <span className="block h-px w-10 bg-gold-dark" />
              Driven by Visionary Leadership
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-forest md:text-5xl lg:text-6xl">
              Building businesses that create lasting impact
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              At Eloma Group, our growth is guided by strong leadership, clear
              vision, and a commitment to building businesses that create lasting
              impact. Our leaders bring together industry expertise, innovation,
              and a forward-thinking mindset to shape a multi-business ecosystem
              built for the future.
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">Beyond business growth, we focus on creating a foundation for lasting success. By investing in people, embracing innovation, and maintaining strong governance, we strive to build organizations that are resilient, adaptable, and prepared for the opportunities of tomorrow. This commitment allows us to create value not only for our stakeholders but also for the communities in which we operate.</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileHover="hover"
            variants={{
              initial: { y: 0 },
              hover: { y: -6 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover"
          >
            <div className="relative aspect-[10/7]">
              <Image
                src="/assset/home/R-J.png"
                alt="Leadership team discussion"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm italic leading-relaxed text-slate-600">
                &quot;Eloma Group was built with a vision to go beyond a single
                business - to create an ecosystem where innovation, efficiency,
                and sustainability come together to drive real impact across
                industries.&quot;
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-forest/70">
                R J, Founder, Eloma Group
              </p>
            </div>
            {/* Animated border trace */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none rounded-3xl" fill="none">
              <motion.rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                stroke="#2a8a6b"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  initial: { pathLength: 0, opacity: 0 },
                  hover: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      pathLength: { type: "spring", duration: 1.2, bounce: 0 },
                      opacity: { duration: 0.2 }
                    }
                  }
                }}
              />
            </svg>
          </motion.div>
        </div>

        

        {/* <motion.div
          initial="initial"
          whileHover="hover"
          variants={{
            initial: { y: 0 },
            hover: { y: -6 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 transition-all duration-300 hover:shadow-card-hover"
        > */}
          {/* <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Our Motto
          </p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-forest md:text-3xl">
            Connecting Australia
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
            <p>
              At Eloma, our motto is simple - Connecting Australia. For us,
              this is more than just words. It means bringing people,
              businesses, ideas, and opportunities closer together across the
              country.
            </p>
            <p>
              We help businesses work better together, make services reach
              people faster, and ensure communication stays clear and easy.
              Whether it is through transport, digital solutions, or other
              services, our focus is always on making things simple and
              connected.
            </p>
            <p>
              At Eloma, we are building strong links across Australia -
              connecting cities, industries, and ideas every day. Because when
              Australia is connected, everyone moves forward together.
            </p>
          </div> */}
          {/* Animated border trace */}
          {/* <svg className="absolute inset-0 h-full w-full pointer-events-none rounded-3xl" fill="none">
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="23"
              stroke="#2a8a6b"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                initial: { pathLength: 0, opacity: 0 },
                hover: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { type: "spring", duration: 1.2, bounce: 0 },
                    opacity: { duration: 0.2 }
                  }
                }
              }}
            />
          </svg> */}
        {/* </motion.div> */}
     
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
          className="relative isolate overflow-hidden rounded-[40px] bg-gradient-to-tr from-[#021327] via-[#06313a] to-[#05252f] px-8 py-20 text-white md:px-16 md:py-28"
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
