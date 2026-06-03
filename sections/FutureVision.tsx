'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE_EXPO, VIEWPORT } from '@/lib/motion';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealText from '@/components/ui/RevealText';
import LazyVideo from '@/components/ui/LazyVideo';

const VisionObject = dynamic(() => import('@/components/three/VisionObject'), { ssr: false });

const COMPANIES = [
  {
    k: 'EG Digital Australia',
    v: 'Digital platforms, cloud and product engineering powering the group and its clients.',
  },
  {
    k: 'EG Foundations',
    v: 'The shared services backbone — governance, finance and people across every business.',
  },
  {
    k: 'EG Imports',
    v: 'Global sourcing and trade, connecting markets with reliable supply and distribution.',
  },
  {
    k: 'EG Transport',
    v: 'Integrated transport and last-mile logistics built for scale and dependability.',
  },
  {
    k: 'EG Travels',
    v: 'Corporate and leisure travel, crafting seamless journeys across the world.',
  },
];

/**
 * Section 7 — Future Vision. The showpiece. A morphing 3D core floats over a
 * dark, glowing field with a slow video wash; dynamic gradient blobs drift and
 * the headline reveals line by line. The most "expensive"-feeling moment.
 */
export default function FutureVision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section id="vision" ref={ref} className="relative overflow-hidden bg-paper">
      {/* video wash — kept very faint and washed into white */}
      <LazyVideo
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        src="/eloma/video/future.mp4"
        poster="/eloma/divisions/it.png"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />

      {/* drifting gradient blobs */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute left-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-emerald/10 blur-[120px]"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute right-[5%] top-[40%] h-[34vw] w-[34vw] rounded-full bg-navy-600/10 blur-[120px]"
      />

      {/* 3D core */}
      <div className="absolute inset-0 z-0">
        <VisionObject />
      </div>

      {/* content */}
      <div className="container-luxe relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="max-w-3xl">
          <SectionLabel index="07">Our Companies</SectionLabel>
          <h2 className="mt-8 font-serif text-5xl font-light leading-[0.98] text-navy md:text-8xl">
            <span className="block">
              One <span className="text-gold">group,</span>
            </span>
            <span className="block">
              five <span className="text-gold">companies,</span>
            </span>
            <RevealText text="one vision." by="word" className="block italic text-grad" delay={0.16} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-navy/60"
          >
            Independent businesses growing from one shared root — each best-in-class
            in its field, united by a single standard of excellence.
          </motion.p>
        </div>

        {/* companies */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-5">
          {COMPANIES.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, ease: EASE_EXPO, delay: i * 0.12 }}
              className="group relative bg-white/80 p-8 backdrop-blur-md transition-colors hover:bg-white"
            >
              <span className="font-serif text-sm text-emerald-600/80">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-2xl text-navy">{p.k}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{p.v}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-emerald-600 to-emerald-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
