"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ensureScrollTrigger, ease } from "@/lib/animations/registerScroll";
import { prefersReducedMotion } from "@/lib/animations/reducedMotion";
import { cn } from "@/lib/utils";

/**
 * Simplified Australia coastal outline path (manually traced from public-domain reference).
 * Coordinate system: viewBox 0 0 900 720, roughly matching Australia's bounding box.
 */
const AUS_OUTLINE =
  "M 218 290 L 188 318 L 184 360 L 162 388 L 158 430 L 172 472 L 196 504 L 232 534 L 282 558 L 320 568 L 360 564 L 412 568 L 470 562 L 532 552 L 590 538 L 642 522 L 680 502 L 712 472 L 736 432 L 750 388 L 762 352 L 758 316 L 744 282 L 720 252 L 686 226 L 644 208 L 600 198 L 550 192 L 502 194 L 460 200 L 412 208 L 370 218 L 332 232 L 296 250 L 264 268 L 234 280 Z";

const TASMANIA =
  "M 462 624 C 484 612 514 614 528 632 C 538 654 528 686 506 692 C 482 694 458 678 454 658 C 450 642 452 632 462 624 Z";

const CITIES = [
  { id: "Sydney", name: "Sydney", x: 700, y: 528, hub: true },
  { id: "Melbourne", name: "Melbourne", x: 588, y: 580, hub: true },
  { id: "Brisbane", name: "Brisbane", x: 730, y: 420, hub: true },
  { id: "Perth", name: "Perth", x: 220, y: 480, hub: true },
  { id: "Adelaide", name: "Adelaide", x: 500, y: 530, hub: false },
  { id: "Darwin", name: "Darwin", x: 432, y: 248, hub: false },
  { id: "Canberra", name: "Canberra", x: 668, y: 558, hub: false },
  { id: "Hobart", name: "Hobart", x: 504, y: 668, hub: false }
] as const;

// Transport routes (curved paths between hub cities)
const ROUTES: Array<{ from: string; to: string; control?: { dx: number; dy: number } }> = [
  { from: "Perth", to: "Adelaide", control: { dx: 0, dy: 80 } },
  { from: "Adelaide", to: "Melbourne" },
  { from: "Melbourne", to: "Sydney", control: { dx: 30, dy: -40 } },
  { from: "Sydney", to: "Brisbane", control: { dx: 60, dy: -30 } },
  { from: "Brisbane", to: "Darwin", control: { dx: -120, dy: -50 } },
  { from: "Sydney", to: "Canberra" },
  { from: "Melbourne", to: "Hobart" },
  { from: "Perth", to: "Darwin", control: { dx: 80, dy: -60 } }
];

function cityById(id: string) {
  return CITIES.find((c) => c.id === id)!;
}

function routePath(from: string, to: string, control?: { dx: number; dy: number }) {
  const a = cityById(from);
  const b = cityById(to);
  const mx = (a.x + b.x) / 2 + (control?.dx ?? 0);
  const my = (a.y + b.y) / 2 + (control?.dy ?? -30);
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

interface AustraliaMapProps {
  className?: string;
  /** Run the GSAP timeline via ScrollTrigger. */
  scrollTrigger?: boolean;
  /** Show the outward-radiating digital connection beams from Sydney. */
  showDigitalBeams?: boolean;
}

export default function AustraliaMap({
  className,
  scrollTrigger = true,
  showDigitalBeams = true
}: AustraliaMapProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const reduced = prefersReducedMotion();
    ensureScrollTrigger();

    const ctx = gsap.context(() => {
      const outline = ref.current!.querySelector(
        "[data-outline]"
      ) as SVGPathElement | null;
      const tasmania = ref.current!.querySelector(
        "[data-tasmania]"
      ) as SVGPathElement | null;
      const routes = ref.current!.querySelectorAll(
        "[data-route]"
      ) as NodeListOf<SVGPathElement>;
      const cities = ref.current!.querySelectorAll(
        "[data-city]"
      ) as NodeListOf<SVGGElement>;
      const beams = ref.current!.querySelectorAll(
        "[data-beam]"
      ) as NodeListOf<SVGLineElement>;

      if (reduced) {
        gsap.set([outline, tasmania], { strokeDashoffset: 0, fillOpacity: 1 });
        gsap.set(routes, { strokeDashoffset: 0, opacity: 0.85 });
        gsap.set(cities, { opacity: 1, scale: 1 });
        gsap.set(beams, { opacity: 0.6, strokeDashoffset: 0 });
        return;
      }

      // Outline draw-on
      if (outline) {
        const len = outline.getTotalLength();
        outline.style.strokeDasharray = `${len}`;
        outline.style.strokeDashoffset = `${len}`;
        outline.style.fillOpacity = "0";
      }
      if (tasmania) {
        const len = tasmania.getTotalLength();
        tasmania.style.strokeDasharray = `${len}`;
        tasmania.style.strokeDashoffset = `${len}`;
        tasmania.style.fillOpacity = "0";
      }
      routes.forEach((r) => {
        const len = r.getTotalLength();
        r.style.strokeDasharray = `${len}`;
        r.style.strokeDashoffset = `${len}`;
      });
      beams.forEach((b) => {
        b.style.strokeDasharray = "8 6";
        b.style.opacity = "0";
      });
      gsap.set(cities, { opacity: 0, transformOrigin: "center", scale: 0.4 });

      const tl = gsap.timeline({
        defaults: { ease: ease.elegant },
        scrollTrigger: scrollTrigger
          ? {
              trigger: ref.current,
              start: "top 75%",
              once: true
            }
          : undefined
      });

      tl.to(outline, { strokeDashoffset: 0, duration: 3.4, ease: ease.premium })
        .to(outline, { fillOpacity: 1, duration: 0.8 }, "-=0.6")
        .to(tasmania, { strokeDashoffset: 0, duration: 1.2 }, "-=2.4")
        .to(tasmania, { fillOpacity: 1, duration: 0.6 }, "-=0.4")
        .to(
          cities,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(2)",
            stagger: 0.12
          },
          "-=1.2"
        )
        .to(
          routes,
          {
            strokeDashoffset: 0,
            duration: 1.4,
            stagger: 0.18,
            ease: ease.elegant
          },
          "-=1.0"
        );

      if (beams.length) {
        tl.to(
          beams,
          {
            opacity: 0.5,
            duration: 0.8,
            stagger: 0.06
          },
          "-=0.5"
        );
        // Continuous loop on beams
        gsap.to(beams, {
          strokeDashoffset: -28,
          duration: 1.6,
          ease: "none",
          repeat: -1
        });
      }

      // Continuous pulse on hub cities
      const hubs = ref.current!.querySelectorAll(
        "[data-hub-pulse]"
      ) as NodeListOf<SVGCircleElement>;
      hubs.forEach((el, i) => {
        gsap.fromTo(
          el,
          { attr: { r: 6 }, opacity: 0.6 },
          {
            attr: { r: 16 },
            opacity: 0,
            duration: 2,
            repeat: -1,
            delay: i * 0.4,
            ease: "power2.out"
          }
        );
      });

      // Flowing particles along transport routes (after routes draw)
      const routeParticles = ref.current!.querySelectorAll(
        "[data-route-particle]"
      ) as NodeListOf<SVGCircleElement>;
      gsap.delayedCall(4.2, () => {
        routeParticles.forEach((particle, i) => {
          const routeIdx = parseInt(particle.dataset.routeIdx || "0", 10);
          const route = routes[routeIdx];
          if (!route) return;
          const length = route.getTotalLength();
          const obj = { t: 0 };
          gsap.to(obj, {
            t: 1,
            duration: 4.2,
            ease: "power1.inOut",
            repeat: -1,
            delay: i * 0.3,
            onUpdate: () => {
              const pt = route.getPointAtLength(obj.t * length);
              particle.setAttribute("cx", `${pt.x}`);
              particle.setAttribute("cy", `${pt.y}`);
              const op =
                obj.t < 0.1
                  ? obj.t * 10
                  : obj.t > 0.9
                  ? (1 - obj.t) * 10
                  : 1;
              particle.setAttribute("opacity", `${op}`);
            }
          });
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [scrollTrigger]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 900 720"
      preserveAspectRatio="xMidYMid meet"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Eloma Group Australia network"
    >
      <defs>
        <radialGradient id="ausFill" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(12,47,42,0.06)" />
          <stop offset="100%" stopColor="rgba(12,47,42,0.02)" />
        </radialGradient>
      </defs>

      {/* Mainland */}
      <path
        d={AUS_OUTLINE}
        fill="url(#ausFill)"
        stroke="#0c2f2a"
        strokeWidth={1.6}
        strokeLinejoin="round"
        data-outline
      />

      {/* Tasmania */}
      <path
        d={TASMANIA}
        fill="url(#ausFill)"
        stroke="#0c2f2a"
        strokeWidth={1.4}
        strokeLinejoin="round"
        data-tasmania
      />

      {/* Digital connection beams emanating from Sydney */}
      {showDigitalBeams ? (
        <g
          stroke="#c9a557"
          strokeWidth={0.8}
          strokeLinecap="round"
          opacity={0.7}
        >
          {[
            { x: 860, y: 220 },
            { x: 870, y: 360 },
            { x: 870, y: 520 },
            { x: 820, y: 640 },
            { x: 700, y: 696 }
          ].map((p, i) => (
            <line
              key={i}
              x1={700}
              y1={528}
              x2={p.x}
              y2={p.y}
              data-beam
            />
          ))}
        </g>
      ) : null}

      {/* Transport routes */}
      <g
        fill="none"
        stroke="#c9a557"
        strokeWidth={1.6}
        strokeLinecap="round"
      >
        {ROUTES.map((r, i) => (
          <path
            key={i}
            d={routePath(r.from, r.to, r.control)}
            data-route
          />
        ))}
      </g>

      {/* Flowing particles on transport routes */}
      <g>
        {ROUTES.map((_, i) => (
          <circle
            key={`rp-${i}`}
            r={3.2}
            cx={0}
            cy={0}
            fill="#c9a557"
            opacity={0}
            data-route-particle
            data-route-idx={i}
          />
        ))}
      </g>

      {/* Cities */}
      <g>
        {CITIES.map((c) => (
          <g key={c.id} data-city transform={`translate(${c.x} ${c.y})`}>
            {c.hub ? (
              <circle
                r={6}
                fill="rgba(201,165,87,0.35)"
                data-hub-pulse
              />
            ) : null}
            <circle r={c.hub ? 5 : 3} fill="#0c2f2a" />
            <circle r={c.hub ? 2.2 : 1.4} fill="#c9a557" />
            <text
              x={10}
              y={4}
              fontSize={c.hub ? 13 : 11}
              fontWeight={c.hub ? 700 : 500}
              fill="#0c2f2a"
              letterSpacing={0.4}
            >
              {c.name}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
