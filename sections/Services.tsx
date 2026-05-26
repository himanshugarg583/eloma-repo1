"use client";

import { useLayoutEffect, useRef } from "react";
import {
  Leaf,
  ShieldCheck,
  Cpu,
  Recycle,
  Handshake,
  Globe2,
  ArrowUpRight
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeading from "@/components/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  {
    title: "Eco-Conscious Operations",
    description:
      "We reduce environmental impact across transportation, digital, and operational processes.",
    icon: Leaf
  },
  {
    title: "Ethical Practices",
    description:
      "Responsible governance, transparency, and people-first standards guide our growth.",
    icon: ShieldCheck
  },
  {
    title: "Smarter Technologies",
    description:
      "Digital innovation helps us optimize routes, resources, and service reliability.",
    icon: Cpu
  },
  {
    title: "Lower Carbon Footprint",
    description:
      "From fleet efficiency to process design, we prioritize measurable reductions.",
    icon: Recycle
  },
  {
    title: "Responsible Partnerships",
    description:
      "We collaborate with businesses that share our commitment to sustainable impact.",
    icon: Handshake
  },
  {
    title: "Resilient Future",
    description:
      "Long-term value creation for businesses, communities, and the planet.",
    icon: Globe2
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  useLayoutEffect(() => {
    if (!sectionRef.current || !headingRef.current || !gridRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll("[data-service-card]") ?? [];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 70%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(
        headingRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      )
        .fromTo(
          gridRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.35"
        )
        .fromTo(
          cards,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: 0.08 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="Sustainability & Responsibility"
            title="Committed to sustainable growth and responsible business"
            description="Sustainability is a core part of how we operate and grow. We build solutions that are efficient, ethical, and resilient for the long term."
            align="center"
          />
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <div
              key={service.title}
              data-reveal
              data-service-card
              className="group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-slate-50"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest/5 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white">
                <service.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-semibold text-forest">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Learn more</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
