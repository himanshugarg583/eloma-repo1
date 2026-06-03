'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { EASE_EXPO } from '@/lib/motion';
import RevealText from '@/components/ui/RevealText';

// 3D is heavy + browser-only → lazy load, no SSR.
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

export default function Hero({ ready }: { ready: boolean }) {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-br from-paper via-white to-paper mt-10">
      {/* soft brand mesh wash */}
      <div className="pointer-events-none absolute inset-0 bg-eloma-mesh opacity-40" />

      {/* Split layout: text left, globe right */}
      <div className="relative z-10 grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.3 }}
          className="relative z-20 flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16"
        >
          {/* Top Section - Eyebrow */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 0.3 }}
            className="eyebrow mb-6"
          >
            One Root · Many Branches
          </motion.p> */}

          {/* Main Heading */}
          <h1 className="font-sans font-light leading-[1.0] text-navy">
            <RevealText
              text="The Living"
              by="word"
              className="block text-5xl sm:text-6xl lg:text-7xl font-bold"
              delay={0.4}
            />
            <RevealText
              text="Enterprise"
              by="word"
              className="block text-5xl sm:text-6xl lg:text-7xl text-gold font-bold"
              delay={0.55}
            />
          </h1>

          {/* Secondary Heading - Below Main */}
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 0.7 }}
            className="-mt-16 font-serif text-2xl font-light leading-[1.1] text-emerald-600 md:text-3xl"
          >
            Built for Growth
          </motion.h2> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 1.1 }}
            className="mt-8 max-w-md text-balance text-base text-navy/70 lg:text-lg"
          >
            Eloma Group unites travel, technology, customer experience and logistics — independent businesses growing from one shared root.
          </motion.p>

          {/* CTA or decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 1.4 }}
            className="mt-12"
          >
            <button className="group relative inline-block px-8 py-3 text-sm font-medium uppercase tracking-wide text-navy">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 transition-transform duration-300 group-hover:scale-105" style={{ borderRadius: '2px' }} />
              <span className="relative block text-white">Explore</span>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: 3D Globe with text */}
        <div className="relative hidden flex-col items-center justify-center lg:flex">
          {/* Globe scene - no motion wrapper to prevent blur */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {ready && <HeroScene />}
          </div>

          {/* Text overlay on globe - bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 1.0 }}
            className="relative z-20 mt-auto mb-12 px-8 text-center pointer-events-auto"
          >
            <h2 className="font-sans text-4xl font-light leading-[1.2] text-navy md:text-5xl">
              <span className="block">Connected</span>
              <span className="block text-emerald-600">Globally</span>
            </h2>
            {/* <p className="mt-4 max-w-sm text-base text-white/90 drop-shadow-md font-medium">
              Our network spans continents, connecting businesses with shared values and vision.
            </p> */}
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 lg:bottom-12"
      >
        <span className="text-[10px] uppercase tracking-luxe text-navy/40">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-navy/15">
          <span className="absolute left-0 top-0 h-4 w-px bg-emerald-600 animate-scroll-cue" />
        </div>
      </motion.div>

      {/* corner meta — editorial detail */}
      <div className="absolute bottom-10 left-6 z-10 hidden text-xs text-navy/50 md:left-12 md:block">
        <p className="font-sans">Est. in Australia</p>
      </div>
      <div className="absolute bottom-10 right-6 z-10 hidden text-right text-xs text-navy/50 md:right-12 md:block">
        <p className="font-sans">04 Businesses · 1 Vision</p>
      </div>
    </section>
  );
}
