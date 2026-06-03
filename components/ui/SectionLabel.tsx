'use client';

import { motion } from 'framer-motion';
import { EASE_EXPO, VIEWPORT } from '@/lib/motion';

/** Editorial eyebrow: "01 — Ecosystem" with an animated rule. */
export default function SectionLabel({
  index,
  children,
  light = false,
}: {
  index: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE_EXPO }}
      className="flex items-center gap-4"
    >
      <span className={`font-sans text-sm ${light ? 'text-navy/40' : 'text-emerald-600/80'}`}>
        {index}
      </span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE_EXPO, delay: 0.1 }}
        className={`h-px w-10 origin-left ${light ? 'bg-navy/30' : 'bg-emerald-600/50'}`}
      />
      <span className={`eyebrow ${light ? '!text-navy/60' : ''}`}>{children}</span>
    </motion.div>
  );
}
