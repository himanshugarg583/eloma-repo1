"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  split?: "words" | "chars" | "lines";
  once?: boolean;
}

export default function RevealText({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  stagger = 0.06,
  split = "words",
  once = true
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  const tokens =
    split === "chars"
      ? children.split("")
      : split === "lines"
      ? children.split("\n")
      : children.split(/(\s+)/);

  const Component = motion[Tag] as typeof motion.div;

  return (
    <Component ref={ref} className={cn("inline-block", className)} aria-label={children}>
      {tokens.map((token, idx) => {
        if (/^\s+$/.test(token)) {
          return <span key={`s-${idx}`}>{token}</span>;
        }
        return (
          <span
            key={`${token}-${idx}`}
            className="relative inline-block overflow-hidden align-baseline"
            aria-hidden
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : undefined}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + idx * stagger
              }}
            >
              {token}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
