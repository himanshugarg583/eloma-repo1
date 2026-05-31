"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

import SectionNumber from "@/components/animations/SectionNumber";
import { ensureScrollTrigger, ease } from "@/lib/animations/registerScroll";
import { prefersReducedMotion } from "@/lib/animations/reducedMotion";

const QUOTE_LINES = [
  "We didn't set out to build companies.",
  "We set out to build a group that",
  "would still matter in a hundred years."
];

const SECOND_PARAGRAPH = [
  "Our discipline is long-term thinking.",
  "Our advantage is one unified culture",
  "operating across continents."
];

export default function Leadership() {
  const root = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start end", "end start"]
  });
  // Large background word slides horizontally as user scrolls past
  const bgX = useTransform(scrollYProgress, [0, 1], ["6%", "-14%"]);

  useEffect(() => {
    if (!root.current) return;
    ensureScrollTrigger();
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const lineInners = root.current!.querySelectorAll(
        "[data-quote-inner]"
      ) as NodeListOf<HTMLElement>;
      const portrait = root.current!.querySelector(
        "[data-portrait]"
      ) as HTMLElement | null;
      const portraitMask = root.current!.querySelector(
        "[data-portrait-mask]"
      ) as HTMLElement | null;
      const meta = root.current!.querySelector(
        "[data-leader-meta]"
      ) as HTMLElement | null;
      const quoteMark = root.current!.querySelector(
        "[data-quote-mark]"
      ) as HTMLElement | null;

      if (reduced) {
        gsap.set([quoteMark, meta], { opacity: 1, y: 0 });
        gsap.set(lineInners, { yPercent: 0 });
        if (portraitMask) gsap.set(portraitMask, { scaleX: 0 });
        if (portrait) gsap.set(portrait, { scale: 1, opacity: 1 });
        return;
      }

      gsap.set(quoteMark, { opacity: 0, scale: 0.7 });
      gsap.set(lineInners, { yPercent: 110 });
      gsap.set(meta, { opacity: 0, y: 14 });
      if (portrait) gsap.set(portrait, { scale: 1.08, opacity: 0.6 });
      if (portraitMask)
        gsap.set(portraitMask, {
          scaleX: 1,
          transformOrigin: "right center"
        });

      const tl = gsap.timeline({
        defaults: { ease: ease.elegant },
        scrollTrigger: {
          trigger: root.current,
          start: "top 65%",
          once: true
        }
      });

      tl.to(
        quoteMark,
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2)" }
      )
        .to(
          lineInners,
          {
            yPercent: 0,
            duration: 1.0,
            ease: ease.premium,
            stagger: 0.12
          },
          "-=0.3"
        );

      if (portraitMask) {
        tl.to(
          portraitMask,
          {
            scaleX: 0,
            duration: 1.4,
            ease: [0.76, 0, 0.24, 1] as unknown as gsap.EaseFunction
          },
          "-=1.2"
        );
      }
      if (portrait) {
        tl.to(
          portrait,
          { scale: 1, opacity: 1, duration: 1.6, ease: ease.premium },
          "<"
        );
      }
      tl.to(meta, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leadership"
      ref={root}
      className="section-padding relative isolate overflow-hidden bg-white"
    >
      {/* Giant background typography — moves horizontally on scroll */}
      <motion.div
        aria-hidden
        style={{ x: bgX }}
        className="pointer-events-none absolute left-0 right-0 top-1/2 -z-10 -translate-y-1/2 whitespace-nowrap select-none"
      >
        <span className="font-display text-[18vw] font-bold uppercase tracking-tighter text-forest/[0.04] md:text-[16vw]">
          Eloma Group · Eloma Group ·
        </span>
      </motion.div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Quote */}
          <div className="relative">
            <SectionNumber number="06" label="Chairman's Message" />

            <Quote
              data-quote-mark
              size={56}
              className="-ml-1 mb-2 text-gold/60"
              strokeWidth={1.2}
            />

            <blockquote className="font-display text-2xl font-medium leading-[1.18] tracking-tight text-forest md:text-3xl lg:text-[2.4rem]">
              {QUOTE_LINES.map((line, i) => (
                <span
                  key={`a-${i}`}
                  className="relative block overflow-hidden pb-1"
                >
                  <span data-quote-inner className="block">
                    {line}
                  </span>
                </span>
              ))}

              <span className="my-4 block h-6" />

              {SECOND_PARAGRAPH.map((line, i) => (
                <span
                  key={`b-${i}`}
                  className="relative block overflow-hidden pb-1 text-slate-700"
                >
                  <span data-quote-inner className="block">
                    {line}
                  </span>
                </span>
              ))}
            </blockquote>

            <div data-leader-meta className="mt-10 flex items-center gap-5">
              <span className="block h-px w-12 bg-forest" />
              <div>
                <p className="font-display text-base font-semibold text-forest">
                  The Founder
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Chairman, Eloma Group
                </p>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-slate-100 lg:ml-auto">
              <div data-portrait className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                  alt="Eloma Group Chairman"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
              </div>
              <div
                data-portrait-mask
                aria-hidden
                className="absolute inset-0 bg-white"
              />
            </div>

            <div className="absolute -bottom-4 left-6 hidden rounded-full border border-slate-200 bg-white px-4 py-2 shadow-card-hover lg:flex">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-forest">
                Leading Eloma since founding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
