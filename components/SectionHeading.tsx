"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  variant?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  variant = "light"
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const words = title.split(/(\s+)/);

  return (
    <div
      ref={ref}
      className={cn(
        "space-y-5",
        align === "center" ? "mx-auto max-w-3xl text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
            variant === "dark" ? "text-gold" : "text-forest",
            align === "center" && "justify-center"
          )}
        >
          <span
            className={cn(
              "inline-block h-px",
              variant === "dark" ? "bg-gold" : "bg-gold"
            )}
            style={{ width: 28 }}
          />
          {eyebrow}
        </motion.p>
      ) : null}

      <h2
        className={cn(
          "font-display font-bold leading-[1.05] tracking-tight",
          "text-3xl md:text-4xl lg:text-5xl",
          variant === "dark" ? "text-white" : "text-forest"
        )}
        aria-label={title}
      >
        {words.map((word, idx) => {
          if (/^\s+$/.test(word)) return <span key={`s-${idx}`}>{word}</span>;
          return (
            <span
              key={`${word}-${idx}`}
              className="relative inline-block overflow-hidden align-baseline"
              aria-hidden
            >
              <motion.span
                className="inline-block"
                initial={{ y: "115%" }}
                animate={inView ? { y: "0%" } : undefined}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + idx * 0.045
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "text-base leading-relaxed md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            variant === "dark" ? "text-white/75" : "text-slate-600"
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
