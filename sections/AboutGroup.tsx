"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Globe2, Target, Award } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Elevate global trade with precision, trust, and premium execution across every customer touchpoint."
  },
  {
    icon: Globe2,
    title: "Our Vision",
    description:
      "Build the most admired integrated logistics and infrastructure group connecting the world's leading brands."
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Stewardship, integrity, and long-term thinking — the foundation of every business decision we make."
  }
];

export default function AboutGroup() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="relative">
            <div className="overflow-hidden rounded-xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                alt="Eloma Group corporate offices"
                width={1400}
                height={1000}
                className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-8">
            <SectionHeading
              eyebrow="About the Group"
              title="A multi-generational group shaping global trade"
              description="Since our inception, we have built a resilient global platform connecting businesses across continents — uniting strategy, innovation, and operational precision into a single standard of excellence."
            />

            <div data-reveal className="space-y-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-forest/5 text-forest">
                    <pillar.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div data-reveal>
              <Link
                href="#subsidiaries"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold-dark"
              >
                Learn more about the group
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
