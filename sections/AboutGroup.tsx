"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Globe2, Target } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

const pillars = [
  {
    icon: Target,
    title: "Entrepreneur-Focused",
    description:
      "Built by entrepreneurs to unite expertise across transportation, digital solutions, security, travel, and customer support."
  },
  {
    icon: Globe2,
    title: "Unified Ecosystem",
    description:
      "An integrated group delivering connected solutions that drive efficiency, growth, and long-term value."
  },
  {
    icon: Award,
    title: "Sustainable Growth",
    description:
      "Innovation, scalability, and sustainability guide how we help businesses adapt and succeed."
  }
];

export default function AboutGroup() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.04]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Decorative orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 -z-10 h-[420px] w-[420px] rounded-full bg-gold/8 blur-3xl"
      />

      <div className="container-x">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Sticky image column */}
          <div className="lg:sticky lg:top-2">
            <motion.div
              ref={imageRef}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="relative overflow-hidden rounded-2xl shadow-card"
            >
              <motion.div style={{ y: imageY, scale: imageScale }}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                  alt="Eloma Group corporate offices"
                  width={1400}
                  height={1000}
                  className="h-[520px] w-full object-cover"
                />
              </motion.div>
              {/* Subtle corner brand mark */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-forest backdrop-blur">
                  Eloma Group · Est. Global
                </div>
                <div className="rounded-full bg-forest/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gold backdrop-blur">
                  Since Inception
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-[-28]">
            <SectionHeading
              eyebrow="Who We Are"
              title="A diversified business group driving innovation across industries"
              description="Eloma Group is an entrepreneur-focused organization bringing together expertise in transportation, digital solutions, virtual security, travel and customer support services. We operate as a unified ecosystem of businesses, delivering integrated solutions that drive efficiency, growth, and long-term value."
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-xl text-base leading-relaxed text-slate-600"
            >
              With a strong focus on innovation, scalability, and sustainability,
              we empower businesses across sectors to adapt, evolve, and succeed
              in a rapidly changing world.
            </motion.p>

            <div className="space-y-[-6]">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group flex gap-4 rounded-xl border border-transparent p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-slate-50"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-forest/5 text-forest transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-white">
                    <pillar.icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-5 py-4 text-sm text-slate-600"
            >
              <span className="font-semibold text-forest">4+</span> Business
              Verticals <span className="mx-2 text-slate-300">|</span>
              <span className="font-semibold text-forest"> Multiple</span> Industries
              <span className="mx-2 text-slate-300">|</span>
              <span className="font-semibold text-forest"> One</span> Unified Vision
              for Sustainable Growth
            </motion.div>

            <Link
              href="#industries"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold-dark"
            >
              <span className="relative">
                Learn more about the group
                <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-forest transition-transform duration-500 group-hover:scale-x-0 group-hover:bg-gold-dark" />
              </span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
