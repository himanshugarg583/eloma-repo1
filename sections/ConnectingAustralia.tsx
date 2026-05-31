"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import SectionNumber from "@/components/animations/SectionNumber";
import AustraliaMap from "@/components/maps/AustraliaMap";
import UnderlineLink from "@/components/animations/UnderlineLink";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import CountUp from "@/components/animations/CountUp";
import { ensureScrollTrigger, ease } from "@/lib/animations/registerScroll";
import { prefersReducedMotion } from "@/lib/animations/reducedMotion";
import { ArrowRight } from "lucide-react";

const numbers = [
  { v: 8, suffix: "", label: "Cities" },
  { v: 5, suffix: "", label: "Verticals" },
  { v: 24, suffix: "/7", label: "Operations" }
];

export default function ConnectingAustralia() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    ensureScrollTrigger();
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const eyebrow = root.current!.querySelector("[data-au-eyebrow]");
      const title = root.current!.querySelectorAll("[data-au-line]");
      const numbersEls = root.current!.querySelectorAll("[data-au-number]");
      const cta = root.current!.querySelector("[data-au-cta]");

      if (reduced) {
        gsap.set([eyebrow, title, numbersEls, cta], { opacity: 1, y: 0 });
        return;
      }

      gsap.set(eyebrow, { opacity: 0, y: 14 });
      gsap.set(title, { opacity: 0, y: 30 });
      gsap.set(numbersEls, { opacity: 0, y: 18 });
      gsap.set(cta, { opacity: 0, y: 18 });

      const tl = gsap.timeline({
        defaults: { ease: ease.elegant },
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          once: true
        }
      });

      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.7 })
        .to(
          title,
          { opacity: 1, y: 0, duration: 1.0, stagger: 0.12 },
          "-=0.4"
        )
        .to(
          numbersEls,
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          "-=0.4"
        )
        .to(cta, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="connecting-australia"
      ref={root}
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Soft canvas glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/4 -z-10 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,165,87,0.10), transparent 60%)"
        }}
      />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left text */}
          <div>
            <div data-au-eyebrow>
              <SectionNumber number="08" label="Connecting Australia" />
            </div>

            <h2
              className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-forest md:text-4xl lg:text-[3.2rem]"
            >
              <span data-au-line className="block">
                Connecting
              </span>
              <span data-au-line className="block italic text-gold-dark">
                Australia.
              </span>
              <span data-au-line className="block">
                End to end.
              </span>
            </h2>

            <p
              data-au-line
              className="mt-6 max-w-md text-base leading-relaxed text-slate-600 md:text-lg"
            >
              From Perth to Sydney, Darwin to Hobart — Eloma operates one of
              the most connected business networks across the continent.
              Transport corridors, digital backbones, and customer operations
              that move with our clients.
            </p>

            {/* Numbers */}
            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
              {numbers.map((n) => (
                <div
                  key={n.label}
                  data-au-number
                  className="bg-white p-5"
                >
                  <p className="font-display text-3xl font-bold text-forest md:text-4xl">
                    <CountUp to={n.v} suffix={n.suffix} duration={2.4} />
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {n.label}
                  </p>
                </div>
              ))}
            </div>

            <div data-au-cta className="mt-10 flex flex-wrap items-center gap-6">
              <MagneticButton strength={12}>
                <Button size="lg" className="group">
                  Talk to an Eloma expert
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </MagneticButton>
              <UnderlineLink href="#contact">
                Partner with us
              </UnderlineLink>
            </div>
          </div>

          {/* Right — Australia map */}
          <div className="relative">
            <AustraliaMap />
            {/* Floating caption */}
            <div className="absolute -bottom-4 right-4 hidden rounded-full border border-slate-200 bg-white px-4 py-2 shadow-card-hover lg:flex">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-forest">
                8 cities · Continuous coverage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
