"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

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

const SLIDE_INTERVAL = 2800;

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: SLIDE_INTERVAL / 1000 + 1.2, ease: "linear" }
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
        <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/70 to-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
      </div>

      <div className="container-x relative flex min-h-[88vh] flex-col justify-center pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="max-w-3xl space-y-6 text-white">
          <p
            data-hero
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            <span className="inline-block h-px w-7 bg-gold" />
            Global Group Company
          </p>
          <h1
            data-hero
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Building global businesses with vision, scale and excellence
          </h1>
          <p
            data-hero
            className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            A multi-generational parent company orchestrating eight focused
            businesses across logistics, infrastructure, supply-chain technology,
            and global trade.
          </p>
          <div data-hero className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button size="lg" className="group">
              Explore Group
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 text-white backdrop-blur hover:border-white hover:bg-white hover:text-forest"
            >
              <Play size={16} />
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div data-hero className="mt-14 flex items-center gap-3">
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
                    : "w-6 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}
