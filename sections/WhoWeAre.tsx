"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Truck,
  Cpu,
  ShieldCheck,
  Headphones,
  Plane
} from "lucide-react";

import SectionNumber from "@/components/animations/SectionNumber";
import UnderlineLink from "@/components/animations/UnderlineLink";
import { ensureScrollTrigger, ease } from "@/lib/animations/registerScroll";
import { prefersReducedMotion } from "@/lib/animations/reducedMotion";

const verticals = [
  {
    key: "transport",
    name: "Transportation\n& Logistics",
    icon: Truck,
    angle: -90
  },
  { key: "tech", name: "Digital\n& Technology", icon: Cpu, angle: -18 },
  {
    key: "security",
    name: "Security & Risk\nManagement",
    icon: ShieldCheck,
    angle: 54
  },
  {
    key: "support",
    name: "Customer\nSupport",
    icon: Headphones,
    angle: 126
  },
  { key: "travel", name: "Travel\n& Tourism", icon: Plane, angle: 198 }
];

const DIAGRAM_SIZE = 540;
const CENTER = DIAGRAM_SIZE / 2;
const RADIUS = 210;

function polarToCart(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(a), y: CENTER + r * Math.sin(a) };
}

export default function WhoWeAre() {
  const root = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current || !svgRef.current || !pinRef.current) return;
    const ST = ensureScrollTrigger();
    if (!ST) return;
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const eyebrow = root.current!.querySelector("[data-who-eyebrow]");
      const text = root.current!.querySelectorAll("[data-who-line]");
      const centerNode = svgRef.current!.querySelector("[data-center]");
      const lines = svgRef.current!.querySelectorAll("[data-line]");
      const nodes = svgRef.current!.querySelectorAll("[data-vertical]");
      const interLinks = svgRef.current!.querySelectorAll("[data-inter]");
      const stepLabels = root.current!.querySelectorAll("[data-step]");

      if (reduced) {
        gsap.set([eyebrow, text], { opacity: 1, y: 0 });
        gsap.set(centerNode, { scale: 1, opacity: 1 });
        gsap.set(lines, { strokeDashoffset: 0 });
        gsap.set(nodes, { opacity: 1, scale: 1 });
        gsap.set(interLinks, { opacity: 0.35, strokeDashoffset: 0 });
        gsap.set(stepLabels, { opacity: 0.4 });
        return;
      }

      // Initial states
      gsap.set(eyebrow, { opacity: 0, y: 14 });
      gsap.set(text, { opacity: 0, y: 20 });
      gsap.set(centerNode, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center"
      });
      gsap.set(nodes, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center"
      });
      gsap.set(stepLabels, { opacity: 0.15, x: -10 });

      lines.forEach((l) => {
        const len = (l as SVGPathElement).getTotalLength();
        (l as SVGPathElement).style.strokeDasharray = `${len}`;
        (l as SVGPathElement).style.strokeDashoffset = `${len}`;
      });
      interLinks.forEach((l) => {
        const len = (l as SVGPathElement).getTotalLength();
        (l as SVGPathElement).style.strokeDasharray = `${len}`;
        (l as SVGPathElement).style.strokeDashoffset = `${len}`;
        (l as SVGElement).style.opacity = "0";
      });

      // Intro text reveal (eyebrow + copy) on a normal enter trigger
      gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          once: true
        }
      })
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.7, ease: ease.elegant })
        .to(
          text,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: ease.elegant
          },
          "-=0.4"
        );

      // Pinned, scrubbed scroll-driven ecosystem reveal
      const masterTl = gsap.timeline({
        defaults: { ease: ease.elegant },
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1
        }
      });

      masterTl.to(centerNode, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.5)"
      });

      // Progressive reveal of each vertical: line draws → node pops → step label brightens
      verticals.forEach((v, i) => {
        const line = lines[i];
        const node = nodes[i];
        const label = stepLabels[i];
        if (line)
          masterTl.to(
            line,
            { strokeDashoffset: 0, duration: 0.7 },
            ">-0.05"
          );
        if (node)
          masterTl.to(
            node,
            {
              scale: 1,
              opacity: 1,
              duration: 0.55,
              ease: "back.out(1.8)"
            },
            ">-0.25"
          );
        if (label)
          masterTl.to(
            label,
            { opacity: 1, x: 0, duration: 0.4 },
            "<"
          );
      });

      // Inter-vertical pentagon links draw at the end (unified ecosystem moment)
      masterTl.to(
        interLinks,
        {
          strokeDashoffset: 0,
          opacity: 0.3,
          duration: 0.8,
          stagger: 0.04
        },
        ">-0.2"
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="who-we-are" ref={root} className="relative bg-white">
      {/* Pinned viewport */}
      <div
        ref={pinRef}
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="container-x py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            {/* Left column — text */}
            <div>
              <div data-who-eyebrow>
                <SectionNumber number="02" label="Who We Are" />
              </div>

              <h2
                data-who-line
                className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-forest md:text-4xl lg:text-[2.8rem]"
              >
                One unified ecosystem.
                <span className="block italic text-gold-dark">
                  Five focused verticals.
                </span>
              </h2>

              <p
                data-who-line
                className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg"
              >
                Eloma Group is a diversified business ecosystem operating across
                transportation & logistics, digital & technology, security & risk
                management, customer support, and travel & tourism — connecting
                eight countries under one disciplined standard of execution.
              </p>

              {/* Vertical step legend — brightens as user scrolls through the reveal */}
              <ol className="mt-10 space-y-3 text-sm">
                {verticals.map((v, i) => (
                  <li
                    key={v.key}
                    data-step
                    className="flex items-center gap-3 text-forest will-change-transform"
                  >
                    <span className="font-display text-xs tabular-nums text-gold-dark">
                      0{i + 1}
                    </span>
                    <span className="h-px w-6 bg-forest/20" />
                    <span className="font-medium">
                      {v.name.replace("\n", " ")}
                    </span>
                  </li>
                ))}
              </ol>

              <div data-who-line className="mt-10">
                <UnderlineLink href="#global">
                  Discover our global footprint
                </UnderlineLink>
              </div>
            </div>

            {/* Right diagram */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <svg
                ref={svgRef}
                viewBox={`0 0 ${DIAGRAM_SIZE} ${DIAGRAM_SIZE}`}
                className="h-full w-full"
                role="img"
                aria-label="Eloma Group business verticals ecosystem"
              >
                {/* Inter-vertical pentagon links */}
                <g
                  fill="none"
                  stroke="#0c2f2a"
                  strokeWidth={1}
                  strokeDasharray="3 4"
                >
                  {verticals.map((v, i) => {
                    const next = verticals[(i + 1) % verticals.length];
                    const a = polarToCart(v.angle, RADIUS);
                    const b = polarToCart(next.angle, RADIUS);
                    return (
                      <path
                        key={`inter-${v.key}`}
                        d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
                        data-inter
                      />
                    );
                  })}
                </g>

                {/* Center → vertical spokes */}
                <g fill="none" stroke="#0c2f2a" strokeWidth={1.4}>
                  {verticals.map((v) => {
                    const p = polarToCart(v.angle, RADIUS);
                    return (
                      <path
                        key={`line-${v.key}`}
                        d={`M ${CENTER} ${CENTER} L ${p.x} ${p.y}`}
                        data-line
                      />
                    );
                  })}
                </g>

                {/* Center node */}
                <g data-center>
                  <circle cx={CENTER} cy={CENTER} r={66} fill="#0c2f2a" />
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={66}
                    fill="none"
                    stroke="#c9a557"
                    strokeWidth={1}
                    opacity={0.6}
                    strokeDasharray="3 4"
                  />
                  <text
                    x={CENTER}
                    y={CENTER - 4}
                    fill="#ffffff"
                    fontSize={16}
                    fontWeight={700}
                    textAnchor="middle"
                    letterSpacing={1.4}
                  >
                    ELOMA
                  </text>
                  <text
                    x={CENTER}
                    y={CENTER + 16}
                    fill="#c9a557"
                    fontSize={10}
                    fontWeight={600}
                    textAnchor="middle"
                    letterSpacing={2.4}
                  >
                    GROUP
                  </text>
                </g>

                {/* Vertical nodes */}
                {verticals.map((v) => {
                  const p = polarToCart(v.angle, RADIUS);
                  return (
                    <g key={v.key} data-vertical>
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={50}
                        fill="#ffffff"
                        stroke="#0c2f2a"
                        strokeWidth={1.2}
                      />
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={50}
                        fill="none"
                        stroke="#c9a557"
                        strokeWidth={0.8}
                        strokeDasharray="2 3"
                        opacity={0.5}
                      />
                      <foreignObject
                        x={p.x - 46}
                        y={p.y - 44}
                        width={92}
                        height={88}
                      >
                        <div
                          className="flex h-full w-full flex-col items-center justify-center gap-1 text-center"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <v.icon
                            size={20}
                            color="#0c2f2a"
                            strokeWidth={1.7}
                          />
                          <span
                            className="text-[9px] font-semibold leading-[1.15] text-forest"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {v.name}
                          </span>
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}
              </svg>

              <p className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-forest/60">
                Connected · Coordinated · Consistent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
