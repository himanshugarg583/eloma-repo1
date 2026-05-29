"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import Marquee from "@/components/animations/Marquee";

const INTRO_DELAY = 2.2;

const titleLines = [
  ["Powering", "Businesses."],
  ["Connecting", "Industries."],
  ["Building", "the", "Future."]
];

const marqueeItems = [
  "Logistics",
  "Digital Solutions",
  "Virtual Security",
  "Travel Services",
  "Customer Support",
  "Supply Chain",
  "Infrastructure",
  "Global Trade"
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-[100vh] overflow-hidden bg-white"
    >
      {/* Parallax video background — glowing global network */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY }}>
        <motion.video
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1.04 }}
          transition={{ opacity: { duration: 1.6, ease: [0.22, 1, 0.36, 1] }, scale: { duration: 6, ease: "easeOut" } }}
          className="absolute inset-0 h-full w-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-globe-poster.jpg"
          aria-hidden
        >
          <source src="/videos/hero-globe.webm" type="video/webm" />
        </motion.video>
        {/* Overlays removed so intro background stays white */}
        <div className="absolute inset-0 z-10 bg-transparent" />
        <div className="absolute inset-0 z-10 bg-transparent" />
        {/* Decorative orb hidden for a clean white intro */}
        <motion.div aria-hidden className="hidden" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="container-x relative z-20 flex min-h-[100vh] flex-col justify-end pb-24 pt-32 md:pb-32 md:pt-40"
      >
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
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Eloma Group · Est. Global Operations
          </span>
        </motion.div>

        {/* Title — line-by-line word reveal */}
        <h1 className="max-w-5xl font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-forest sm:text-5xl md:text-6xl lg:text-[3.2rem] xl:text-[4rem]">
          {titleLines.map((line, lineIdx) => (
            <span key={lineIdx} className="block overflow-hidden pb-5">
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
                        ? "italic text-gold/90"
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
          className="mt-8 max-w-xl text-base leading-relaxed text-forest/80 md:text-lg"
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
              className="border-forest/30 bg-forest/5 text-forest backdrop-blur hover:border-forest hover:bg-forest/10 hover:text-white"
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
          className="mt-16 flex flex-col gap-6 border-t border-forest/15 pt-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gold/60" />
            <p className="text-xs uppercase tracking-[0.28em] text-forest/60">
              One group · A connected world
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="h-px w-12 bg-forest/30" />
            <p className="text-xs uppercase tracking-[0.28em] text-forest/60">
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


    </section>
  );
}
