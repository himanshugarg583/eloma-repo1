"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const ringScale = useRef(1);
  const targetScale = useRef(1);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) {
      return;
    }

    const interactiveSelector =
      "a, button, input, textarea, select, [role='button'], [data-cursor='hover']";

    const onMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = "0";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = "0";
      }
    };

    const onHover = (event: Event) => {
      const target = event.target as Element | null;
      if (!target) {
        return;
      }

      if (target.closest(interactiveSelector)) {
        targetScale.current = 1.7;
      }
    };

    const onUnhover = (event: Event) => {
      const target = event.target as Element | null;
      if (!target) {
        return;
      }

      if (target.closest(interactiveSelector)) {
        targetScale.current = 1;
      }
    };

    let rafId = 0;
    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;
      ringScale.current += (targetScale.current - ringScale.current) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${ringScale.current})`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onHover, { passive: true });
    document.addEventListener("mouseout", onUnhover, { passive: true });

    onEnter();
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("mouseout", onUnhover);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
