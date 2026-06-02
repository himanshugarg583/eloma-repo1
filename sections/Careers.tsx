"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Scale,
  GraduationCap,
  Users,
  HeartHandshake
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";

const values = [
  {
    icon: Scale,
    title: "Fair chances for everyone",
    description: "Equal opportunity and respect at the heart of how we work."
  },
  {
    icon: GraduationCap,
    title: "Learning by doing",
    description: "Try new things, learn new skills, and become better every day."
  },
  {
    icon: Users,
    title: "Growing together as a team",
    description: "We support each other and build something meaningful together."
  },
  {
    icon: HeartHandshake,
    title: "A healthy work-life balance",
    description: "Real opportunities to grow — not just in work, but in life too."
  }
];

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="career"
      ref={sectionRef}
      className="section-padding section-alt relative overflow-hidden bg-[#ffffff]"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold/8 blur-3xl"
      />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="space-y-8 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Life at Eloma"
              title="You don't just work — you build your future"
              description="At Eloma, work is not just about a job. It is about learning, growing, and building something meaningful. We are a team of people who support each other, built on simple ideas — respect, trust, and growth."
            />
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
                alt="Life at Eloma Group"
                width={1400}
                height={900}
                className="h-[280px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105 md:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Life at Eloma
                </p>
                <p className="mt-1 font-display text-lg font-semibold">
                  A culture of respect, trust, and growth
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Why Work at Eloma?
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Eloma Group is a growing company based in Australia, India, US,
                Canada, China, UK, UAE and Singapore. We give people real
                opportunities to grow — not just in work, but in life too. Here,
                your work matters, your ideas are heard, and your efforts are
                valued.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover md:p-6"
                >
                  <span className="pointer-events-none absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-gold/10 to-transparent transition-all duration-500 group-hover:w-1/2" />
                  <div className="relative">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest/5 text-forest transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-white">
                      <value.icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-forest">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <MagneticButton strength={10}>
                <Button size="sm">
                  Join Our Team
                  <ArrowUpRight size={16} />
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
