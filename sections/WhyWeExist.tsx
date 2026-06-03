'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE } from '@/lib/data';
import { EASE_EXPO, VIEWPORT } from '@/lib/motion';
import SectionLabel from '@/components/ui/SectionLabel';
import dynamic from 'next/dynamic';

const VisionObject = dynamic(() => import('@/components/three/VisionObject'), { ssr: false });
/**
 * Section 6 — "Why We Exist". A cinematic vertical timeline that grows like a
 * tree: a central line draws as you scroll (tied to scroll progress), and each
 * stage — Root, Branches, Canopy, Horizon — reveals in turn. The mountain
 * image parallaxes behind for depth and emotion.
 */
export default function WhyWeExist() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Map the timeline's own scroll travel: starts filling when its top reaches
    // ~85% down the viewport, completes when its bottom passes ~40%. Works on
    // both short laptop and tall 32" viewports (the previous 0.7/0.6 offsets
    // could collapse to no range on very tall screens).
    offset: ['start 85%', 'end 40%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const bgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bgP } = useScroll({
    target: bgRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(bgP, [0, 1], ['-12%', '12%']);

  return (
    <section ref={bgRef} className="relative overflow-hidden bg-paper">
      {/* VisionObject background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[80vh] w-[80vh] opacity-30">
            <VisionObject />
          </div>
        </div>
      </div>

      {/* parallax mountain backdrop — faint, grayscale, fading up into white */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 opacity-[0.10]">
        <Image
          src="/eloma/img/mountain.webp"
          alt=""
          width={1600}
          height={900}
          className="mx-auto w-full max-w-6xl object-contain [filter:grayscale(1)] [mask-image:linear-gradient(to_top,black,transparent)]"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-eloma-mesh" />

      <div className="container-luxe relative z-10 px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
        {/* <div className="mx-1 max-w-3xl text-center"> */}
          <div className="flex justify-center">
            <SectionLabel index="05">Why We Exist</SectionLabel>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 0.1 }}
            className="mt-8 font-serif text-4xl font-light leading-[1.05] text-navy md:text-5xl"
          >
            Committed to Sustainable Growth and{' '}
            <span className="italic text-grad">Responsible Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 0.2 }}
            className="mt-6 text-base leading-relaxed text-navy/60 md:text-lg"
          >
            At Eloma Group, sustainability is not just a commitment; it is a core part
            of how we operate and grow. Across all our business verticals, we strive to
            minimize environmental impact, promote ethical practices, and build solutions
            that contribute to a more responsible and resilient future.
          </motion.p>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 0.3 }}
            className="mt-4 text-base leading-relaxed text-navy/60 md:text-lg"
          > */}
            {/* We integrate eco-conscious strategies within our transportation, digital, and
            operational processes, ensuring efficiency without compromising the environment.
            From reducing carbon footprints to adopting smarter technologies, our approach is
            focused on long-term value creation for businesses, communities, and the planet. */}
          {/* </motion.p> */}
        </div>

        {/* timeline */}
        <div ref={ref} className="relative mx-auto mt-12 max-w-3xl">
          {/* track */}
          <div className="absolute left-4 top-0 h-full w-px bg-navy/10 md:left-1/2 md:-translate-x-1/2" />
          {/* growing fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-emerald-500 to-emerald-700 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16 md:space-y-20">
            {TIMELINE.map((item, i) => (
              <Stage key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage({
  item,
  index,
}: {
  item: (typeof TIMELINE)[number];
  index: number;
}) {
  const isRight = index % 2 === 1;
  return (
    <div className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-2 md:gap-12">
      {/* node — sits on the line (left rail on mobile, center on desktop) */}
      <div className="absolute left-4 top-1.5 z-10 -translate-x-1/2 md:left-1/2">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
          className="block h-4 w-4 rounded-full bg-emerald-600 shadow-glow-sm ring-4 ring-paper"
        />
      </div>

      {/* content — alternates sides on desktop via explicit column placement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE_EXPO }}
        className={`col-start-2 md:col-span-1 ${
          isRight ? 'md:col-start-2 md:pl-6' : 'md:col-start-1 md:pr-6 md:text-right'
        }`}
      >
        <span className="eyebrow">{item.year}</span>
        <h3 className="mt-3 font-serif text-2xl font-light text-navy md:text-4xl">{item.title}</h3>
        <p
          className={`mt-3 max-w-md text-sm leading-relaxed text-navy/60 md:text-base ${
            isRight ? '' : 'md:ml-auto'
          }`}
        >
          {item.body}
        </p>
      </motion.div>
    </div>
  );
}
