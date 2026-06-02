"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface SectionNumberProps {
  number: string;
  label: string;
  total?: string;
  className?: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
}

export default function SectionNumber({
  number,
  label,
  total = "08",
  className,
  variant = "light",
  align = "left"
}: SectionNumberProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const isDark = variant === "dark";

  return (
    <div
      ref={ref}
      className={cn(
        "mb-6 flex items-center gap-4",
        align === "center" && "justify-center",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "font-display text-xs font-semibold tabular-nums",
          isDark ? "text-gold" : "text-gold-dark"
        )}
      >
        {number}
        <span className={isDark ? "text-white/30" : "text-forest/30"}>
          {" "}
          / {total}
        </span>
      </motion.span>

      <motion.span
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : undefined}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "left" }}
        className={cn("block h-px w-10", isDark ? "bg-gold/60" : "bg-gold-dark")}
      />

      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.32em]",
          isDark ? "text-white/75" : "text-forest"
        )}
      >
        {label}
      </motion.span>
    </div>
  );
}
