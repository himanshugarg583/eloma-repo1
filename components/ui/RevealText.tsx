'use client';

import { motion } from 'framer-motion';
import { EASE_EXPO, VIEWPORT } from '@/lib/motion';
import type { ElementType } from 'react';

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Reveal by 'word' (default) or 'line' (whole string in one mask). */
  by?: 'word' | 'line';
  delay?: number;
  stagger?: number;
};

/**
 * Masked text reveal. Each unit sits inside an overflow-hidden wrapper and
 * slides up from below — the signature "luxury" headline entrance.
 */
export default function RevealText({
  text,
  as: Tag = 'span',
  className = '',
  by = 'word',
  delay = 0,
  stagger = 0.06,
}: Props) {
  const units = by === 'word' ? text.split(' ') : [text];

  return (
    <Tag className={className}>
      {units.map((unit, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '115%' }}
            whileInView={{ y: '0%' }}
            viewport={VIEWPORT}
            transition={{ duration: 1, ease: EASE_EXPO, delay: delay + i * stagger }}
          >
            {unit}
            {by === 'word' && i < units.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
