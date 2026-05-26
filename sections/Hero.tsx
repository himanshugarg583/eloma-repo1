"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import Marquee from "@/components/animations/Marquee";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=80",
    alt: "Container ship at global port"
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80",
    alt: "Long-haul truck on highway"
  },
  {
    src: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=2400&q=80",
    alt: "Port crane lifting container"
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern warehouse interior"
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80",
    alt: "Corporate skyline at dawn"
  }
];

const SLIDE_INTERVAL = 3200;
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
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-[100vh] overflow-hidden bg-forest"
    >
      {/* Parallax slideshow background */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: imgY }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.18, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1, filter: "blur(6px)" }}
            transition={{
              opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
              scale: {
                duration: SLIDE_INTERVAL / 1000 + 1.4,
                ease: "linear"
              },
              filter: { duration: 1.2 }
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[activeSlide].src}
              alt={heroSlides[activeSlide].alt}
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
        {/* Decorative orb */}
        <motion.div
          aria-hidden
          className="absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="container-x relative flex min-h-[100vh] flex-col justify-end pb-24 pt-32 md:pb-32 md:pt-40"
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
        <h1 className="max-w-5xl font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
          {titleLines.map((line, lineIdx) => (
            <span key={lineIdx} className="block overflow-hidden pb-1">
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
          className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
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
              className="border-white/30 bg-white/5 text-white backdrop-blur hover:border-white hover:bg-white hover:text-forest"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-forest">
                <Play size={12} className="ml-0.5" />
              </span>
              Meet Our Businesses
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Bottom row: slide indicators + counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: INTRO_DELAY + 1.3, duration: 0.8 }}
          className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Show slide ${idx + 1}`}
                className="group flex h-2 items-center"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ${
                    idx === activeSlide
                      ? "w-12 bg-gold"
                      : "w-6 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 font-display text-xs text-white/60">
              {String(activeSlide + 1).padStart(2, "0")}
              <span className="mx-1">/</span>
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="h-px w-12 bg-white/30" />
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
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

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-white/10 bg-forest-dark/60 py-4 backdrop-blur">
        <Marquee speed={45}>
          {marqueeItems.map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="mx-8 flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-white/70"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-gold" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
