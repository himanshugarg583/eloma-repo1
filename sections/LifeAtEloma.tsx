"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Users
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import SectionNumber from "@/components/animations/SectionNumber";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";

type Card = {
  title: string;
  description: string;
  icon: typeof Sparkles;
  image: string;
  tag: string;
};

const cards: Card[] = [
  {
    title: "Growth without ceilings",
    description:
      "Real opportunities to take on larger scope, lead new initiatives, and shape the next decade of the group.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    tag: "Growth"
  },
  {
    title: "Learning by doing",
    description:
      "On-the-job mentorship, structured training, and access to senior leadership across all our verticals.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1400&q=80",
    tag: "Learning"
  },
  {
    title: "Teamwork that travels",
    description:
      "Cross-border project teams, shared culture, and clear ownership at every level of the organisation.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    tag: "Teamwork"
  },
  {
    title: "Work-life balance, taken seriously",
    description:
      "A culture that respects time outside of work — because long-term performance depends on it.",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80",
    tag: "Balance"
  }
];

export default function LifeAtEloma() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section
      id="life"
      ref={sectionRef}
      className="section-alt relative"
      style={{ height: "280vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionNumber number="07" label="Life at Eloma" />
              <SectionHeading
                title="You don't just work — you build your future"
                description="At Eloma, work is about learning, growing, and building something that lasts. We are a team built on respect, trust, and growth."
              />
            </div>
            <MagneticButton strength={10} className="hidden md:inline-flex">
              <Button variant="outline" size="sm">
                See open roles
                <ArrowUpRight size={16} />
              </Button>
            </MagneticButton>
          </div>
        </div>

        {/* Desktop horizontal */}
        <motion.div style={{ x }} className="mt-10 hidden gap-6 px-8 lg:flex">
          {cards.map((card, idx) => (
            <article
              key={card.title}
              className="group relative flex w-[min(640px,80vw)] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:border-forest hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="80vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {card.tag}
                </span>
                <span className="absolute right-5 top-5 inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  0{idx + 1} / 0{cards.length}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <card.icon size={20} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-forest">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-lg flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                  {card.description}
                </p>
              </div>
              <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </motion.div>

        {/* Mobile/tablet stacked */}
        <div className="container-x mt-10 grid gap-6 md:grid-cols-2 lg:hidden">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-forest hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  {card.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-forest">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop progress */}
        <div className="container-x mt-10 hidden lg:block">
          <div className="relative h-px w-full bg-slate-200">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-y-0 left-0 origin-left bg-forest"
            />
          </div>
          <p className="mt-2 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-500">
            <span>Scroll to explore our culture</span>
            <span className="font-semibold text-forest">
              Built on respect, trust & growth
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
