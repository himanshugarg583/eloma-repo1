"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";

const HeroGlobe = dynamic(() => import("@/components/HeroGlobe"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />
});

const GlobeScene = dynamic(() => import("@/components/GlobeScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />
});

const INTRO_DELAY = 2.2;

const titleLines = [
  ["Powering", "Businesses."],
  ["Connecting", "Industries."],
  ["Building", "the", "Future."]
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const globeY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-[100vh] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950"
    >
      {/* Animated glowing orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] top-1/4 -z-10 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.25),transparent_62%)] animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.15),transparent_60%)] animate-pulse"
        style={{ animationDuration: "8s", animationDelay: "1s" }}
      />

      <div className="container-x relative grid min-h-[100vh] items-center gap-6 pb-16 pt-28 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* LEFT — content */}
        <motion.div style={{ y: contentY, opacity }} className="relative">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: INTRO_DELAY, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300 md:text-base">
              Eloma Group · Est. Global Operations
            </span>
          </motion.div>

          {/* Title — line-by-line word reveal */}
          <h1 className="max-w-4xl font-display text-[3.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6.5rem]">
            {titleLines.map((line, lineIdx) => (
              <span key={lineIdx} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: INTRO_DELAY + 0.1 + lineIdx * 0.18,
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="block"
                >
                  {line.map((word, wIdx) => (
                    <span
                      key={`${word}-${wIdx}`}
                      className={
                        wIdx === line.length - 1 && lineIdx === titleLines.length - 1
                          ? "italic text-gold-dark"
                          : ""
                      }
                    >
                      {word}
                      {wIdx < line.length - 1 ? " " : ""}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: INTRO_DELAY + 0.8, duration: 0.8 }}
            className="mt-10 max-w-2xl text-xl leading-relaxed text-blue-100 md:text-2xl lg:text-3xl"
          >
            A dynamic business group uniting logistics, digital innovation,
            security, travel, and customer solutions — driven by purpose,
            performance, and sustainability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: INTRO_DELAY + 1, duration: 0.7 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton strength={12}>
              <Button size="lg" className="group">
                Explore the Group
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </MagneticButton>
            <MagneticButton strength={10}>
              <Button
                variant="outline"
                size="lg"
                className="border-forest/30 bg-forest/5 text-forest hover:border-forest hover:bg-forest hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-forest">
                  <Play size={12} className="ml-0.5" />
                </span>
                Meet Our Businesses
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Bottom row: tagline + scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: INTRO_DELAY + 1.3, duration: 0.8 }}
            className="mt-14 flex flex-col gap-6 border-t border-forest/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-cyan-400/80" />
              <p className="text-sm uppercase tracking-[0.28em] text-blue-200 md:text-base">
                One group · A connected world
              </p>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <p className="text-sm uppercase tracking-[0.28em] text-blue-200 md:text-base">
                Scroll to explore
              </p>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-3 w-px bg-gold"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — interactive 3D globe with orbiting destinations */}
        <motion.div
          style={{ y: globeY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[450px] w-full sm:h-[600px] lg:h-[750px]"
          whileHover={{ scale: 1.05 }}
        >
          {/* Glow behind the globe */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(201,165,87,0.14),transparent_60%)]"
          />
          <GlobeScene />
        </motion.div>
      </div>
    </section>
  );
}
