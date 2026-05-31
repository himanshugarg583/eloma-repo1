"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

import { ensureScrollTrigger, ease } from "@/lib/animations/registerScroll";
import { prefersReducedMotion } from "@/lib/animations/reducedMotion";
import { cn } from "@/lib/utils";

export type CountryKey =
  | "AU"
  | "IN"
  | "US"
  | "CA"
  | "UK"
  | "CN"
  | "SG"
  | "AE";

export const countries: Record<
  CountryKey,
  { name: string; city: string; lat: number; lng: number }
> = {
  AU: { name: "Australia", city: "Sydney", lat: -33.86, lng: 151.21 },
  IN: { name: "India", city: "Mumbai", lat: 19.07, lng: 72.87 },
  US: { name: "USA", city: "New York", lat: 40.71, lng: -74.0 },
  CA: { name: "Canada", city: "Toronto", lat: 43.65, lng: -79.38 },
  UK: { name: "United Kingdom", city: "London", lat: 51.5, lng: -0.13 },
  CN: { name: "China", city: "Beijing", lat: 39.9, lng: 116.4 },
  SG: { name: "Singapore", city: "Singapore", lat: 1.35, lng: 103.82 },
  AE: { name: "UAE", city: "Dubai", lat: 25.2, lng: 55.27 }
};

const VB_W = 1000;
const VB_H = 480;

function project(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng + 180) / 360) * VB_W;
  const lat0 = -60;
  const lat1 = 80;
  const y = ((lat1 - lat) / (lat1 - lat0)) * VB_H;
  return { x, y };
}

function isLand(lng: number, lat: number): boolean {
  if (lng > -125 && lng < -55 && lat > 25 && lat < 60) return true;
  if (lng > -125 && lng < -55 && lat >= 60 && lat < 72) return true;
  if (lng > -110 && lng < -78 && lat > 12 && lat < 25) return true;
  if (lng > -50 && lng < -22 && lat > 60 && lat < 80) return true;
  if (lng > -82 && lng < -34 && lat > -55 && lat < 12) return true;
  if (lng > -10 && lng < 30 && lat > 36 && lat < 70) return true;
  if (lng > 5 && lng < 32 && lat > 55 && lat < 71) return true;
  if (lng > -10 && lng < 2 && lat > 50 && lat < 60) return true;
  if (lng > -17 && lng < 32 && lat > 18 && lat < 36) return true;
  if (lng > -17 && lng < 42 && lat > -18 && lat < 18) return true;
  if (lng > 12 && lng < 38 && lat > -35 && lat < -18) return true;
  if (lng > 43 && lng < 51 && lat > -25 && lat < -12) return true;
  if (lng > 32 && lng < 60 && lat > 12 && lat < 40) return true;
  if (lng > 30 && lng < 180 && lat > 50 && lat < 72) return true;
  if (lng > 45 && lng < 90 && lat > 35 && lat < 55) return true;
  if (lng > 75 && lng < 135 && lat > 22 && lat < 50) return true;
  if (lng > 67 && lng < 92 && lat > 7 && lat < 35) return true;
  if (lng > 92 && lng < 142 && lat > -10 && lat < 25) return true;
  if (lng > 128 && lng < 146 && lat > 30 && lat < 46) return true;
  if (lng > 95 && lng < 145 && lat > -11 && lat < 6) return true;
  if (lng > 113 && lng < 154 && lat > -39 && lat < -11) return true;
  if (lng > 165 && lng < 179 && lat > -47 && lat < -34) return true;
  return false;
}

function generateDots() {
  const dots: Array<{ x: number; y: number; phase: number }> = [];
  const cols = 110;
  const rows = 54;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const lng = -180 + (c / cols) * 360;
      const lat = 80 - (r / rows) * 140;
      if (!isLand(lng, lat)) continue;
      const { x, y } = project(lat, lng);
      // Deterministic phase from position so breathing varies across the map
      const phase = ((c * 13 + r * 7) % 100) / 100;
      dots.push({ x, y, phase });
    }
  }
  return dots;
}

function curvePath(
  a: { x: number; y: number },
  b: { x: number; y: number }
) {
  const mx = (a.x + b.x) / 2;
  const dy = Math.min(Math.abs(b.x - a.x) * 0.18, 60);
  const my = (a.y + b.y) / 2 - dy;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

interface DotWorldMapProps {
  origin?: CountryKey;
  destinations?: CountryKey[];
  play?: boolean;
  useScrollTrigger?: boolean;
  showLabels?: boolean;
  className?: string;
  variant?: "light" | "ink";
  startDelay?: number;
}

export default function DotWorldMap({
  origin = "AU",
  destinations,
  play = true,
  useScrollTrigger = false,
  showLabels = true,
  className,
  variant = "light",
  startDelay = 0
}: DotWorldMapProps) {
  const rootRef = useRef<SVGSVGElement | null>(null);

  const dots = useMemo(() => generateDots(), []);

  const targets = useMemo<CountryKey[]>(() => {
    if (destinations && destinations.length) return destinations;
    return (Object.keys(countries) as CountryKey[]).filter((k) => k !== origin);
  }, [destinations, origin]);

  const points = useMemo(() => {
    const out: Record<CountryKey, { x: number; y: number }> = {} as Record<
      CountryKey,
      { x: number; y: number }
    >;
    (Object.keys(countries) as CountryKey[]).forEach((k) => {
      const { lat, lng } = countries[k];
      out[k] = project(lat, lng);
    });
    return out;
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    if (!play) return;

    const reduced = prefersReducedMotion();
    ensureScrollTrigger();

    const ctx = gsap.context(() => {
      const dotsEls = rootRef.current!.querySelectorAll(
        "[data-dot]"
      ) as NodeListOf<SVGCircleElement>;
      const arcEls = rootRef.current!.querySelectorAll(
        "[data-arc]"
      ) as NodeListOf<SVGPathElement>;
      const pinEls = rootRef.current!.querySelectorAll(
        "[data-pin]"
      ) as NodeListOf<SVGGElement>;
      const particles = rootRef.current!.querySelectorAll(
        "[data-particle]"
      ) as NodeListOf<SVGCircleElement>;

      if (reduced) {
        gsap.set(dotsEls, { opacity: 0.55 });
        gsap.set(arcEls, { strokeDashoffset: 0, opacity: 0.9 });
        gsap.set(pinEls, { opacity: 1, scale: 1 });
        gsap.set(particles, { opacity: 0 });
        return;
      }

      arcEls.forEach((arc) => {
        const len = arc.getTotalLength();
        arc.style.strokeDasharray = `${len}`;
        arc.style.strokeDashoffset = `${len}`;
      });

      gsap.set(dotsEls, {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center"
      });
      gsap.set(pinEls, { opacity: 0, y: -10 });
      gsap.set(particles, { opacity: 0 });

      const tl = gsap.timeline({
        delay: startDelay,
        scrollTrigger: useScrollTrigger
          ? {
              trigger: rootRef.current,
              start: "top 80%",
              once: true
            }
          : undefined
      });

      const originPt = points[origin];
      const dotsWithDistance = Array.from(dotsEls).map((el) => {
        const cx = parseFloat(el.getAttribute("cx") || "0");
        const cy = parseFloat(el.getAttribute("cy") || "0");
        const dx = cx - originPt.x;
        const dy = cy - originPt.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        return { el, d };
      });
      dotsWithDistance.sort((a, b) => a.d - b.d);

      tl.to(
        dotsWithDistance.map((d) => d.el),
        {
          opacity: 0.55,
          scale: 1,
          duration: 0.9,
          ease: ease.elegant,
          stagger: { each: 0.0028, from: "start" }
        },
        0
      );

      // Origin pin pops first
      const originPin = rootRef.current!.querySelector(
        `[data-pin="${origin}"]`
      ) as SVGGElement | null;
      if (originPin) {
        tl.to(
          originPin,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(2)"
          },
          1.0
        );
      }

      // Track particle data for each arc
      const arcData: Array<{ arc: SVGPathElement; length: number; particle: SVGCircleElement | null }> = [];

      targets.forEach((dest, idx) => {
        const arc = rootRef.current!.querySelector(
          `[data-arc="${origin}-${dest}"]`
        ) as SVGPathElement | null;
        const pin = rootRef.current!.querySelector(
          `[data-pin="${dest}"]`
        ) as SVGGElement | null;
        const particle = rootRef.current!.querySelector(
          `[data-particle="${origin}-${dest}"]`
        ) as SVGCircleElement | null;
        const t = 1.4 + idx * 0.35;
        if (arc) {
          tl.to(
            arc,
            { strokeDashoffset: 0, duration: 1.0, ease: ease.elegant },
            t
          );
          arcData.push({ arc, length: arc.getTotalLength(), particle });
        }
        if (pin) {
          tl.to(
            pin,
            { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.9)" },
            t + 0.6
          );
        }
      });

      // After timeline completes: continuous particle flow along arcs + breathing dots
      const totalArcsEnd = 1.4 + targets.length * 0.35 + 1.0;

      gsap.delayedCall(totalArcsEnd, () => {
        // Particle flow
        arcData.forEach((d, i) => {
          if (!d.particle) return;
          gsap.set(d.particle, { opacity: 0 });
          const obj = { t: 0 };
          gsap.to(obj, {
            t: 1,
            duration: 3.4,
            ease: "power1.inOut",
            repeat: -1,
            delay: i * 0.4,
            onUpdate: () => {
              const pt = d.arc.getPointAtLength(obj.t * d.length);
              d.particle!.setAttribute("cx", `${pt.x}`);
              d.particle!.setAttribute("cy", `${pt.y}`);
              // Fade in at start, fade out near end
              const op = obj.t < 0.1 ? obj.t * 10 : obj.t > 0.9 ? (1 - obj.t) * 10 : 1;
              d.particle!.setAttribute("opacity", `${op}`);
            }
          });
        });

        // Gentle breathing on dots — very subtle, varied by phase
        gsap.to(dotsEls, {
          opacity: (i) => {
            const baseOpacity = 0.45;
            return baseOpacity + ((i % 7) / 7) * 0.15;
          },
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: { each: 0.012, from: "random" }
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [play, useScrollTrigger, origin, targets, points, startDelay]);

  const dotColor =
    variant === "ink" ? "rgba(12,47,42,0.55)" : "rgba(12,47,42,0.20)";
  const arcColor =
    variant === "ink" ? "rgba(201,165,87,0.85)" : "rgba(12,47,42,0.55)";
  const particleColor =
    variant === "ink" ? "#c9a557" : "#c9a557";

  return (
    <svg
      ref={rootRef}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Eloma Group global presence map"
    >
      <g>
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={1.4}
            fill={dotColor}
            data-dot
          />
        ))}
      </g>

      <g fill="none" stroke={arcColor} strokeWidth={1.1} strokeLinecap="round">
        {targets.map((dest) => (
          <path
            key={dest}
            d={curvePath(points[origin], points[dest])}
            data-arc={`${origin}-${dest}`}
          />
        ))}
      </g>

      {/* Flowing particles (one per arc) */}
      <g>
        {targets.map((dest) => (
          <circle
            key={`p-${dest}`}
            r={2.8}
            cx={points[origin].x}
            cy={points[origin].y}
            fill={particleColor}
            opacity={0}
            data-particle={`${origin}-${dest}`}
          />
        ))}
      </g>

      <g>
        {(Object.keys(countries) as CountryKey[]).map((k) => {
          const p = points[k];
          const isOrigin = k === origin;
          return (
            <g key={k} data-pin={k} transform={`translate(${p.x} ${p.y})`}>
              <circle
                r={isOrigin ? 10 : 7}
                fill={isOrigin ? "rgba(201,165,87,0.25)" : "rgba(12,47,42,0.18)"}
              />
              <circle
                r={isOrigin ? 6 : 4}
                fill={isOrigin ? "#c9a557" : "#0c2f2a"}
                opacity={0.95}
              />
              <circle r={isOrigin ? 2.5 : 1.8} fill="#ffffff" />
              {showLabels ? (
                <text
                  x={isOrigin ? 14 : 9}
                  y={4}
                  fontSize={11}
                  fontWeight={600}
                  fill={variant === "ink" ? "#ffffff" : "#0c2f2a"}
                  letterSpacing={0.5}
                >
                  {countries[k].city}
                </text>
              ) : null}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
