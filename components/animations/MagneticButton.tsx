"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { forwardRef, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  onClick?: () => void;
}

const MagneticButton = forwardRef<HTMLDivElement, MagneticButtonProps>(
  ({ children, className, strength = 18, onClick }, _ref) => {
    const wrapRef = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      x.set(dx * strength);
      y.set(dy * strength);
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={wrapRef}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onClick={onClick}
        style={{ x: sx, y: sy }}
        className={cn("inline-flex", className)}
      >
        {children}
      </motion.div>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
