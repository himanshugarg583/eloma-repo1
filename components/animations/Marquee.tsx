"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  direction = "left",
  speed = 40,
  className,
  pauseOnHover = false
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 items-center",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
