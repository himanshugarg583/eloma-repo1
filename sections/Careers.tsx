"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";

const roles = [
  {
    title: "Regional Operations Director",
    department: "Operations",
    location: "Sydney, Australia",
    type: "Full-time"
  },
  {
    title: "Logistics Innovation Lead",
    department: "Technology",
    location: "Singapore",
    type: "Full-time"
  },
  {
    title: "Fleet Excellence Manager",
    department: "Fleet & Mobility",
    location: "Melbourne, Australia",
    type: "Full-time"
  },
  {
    title: "Global Partnerships Manager",
    department: "Strategy",
    location: "New York, USA",
    type: "Full-time"
  }
];

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="career"
      ref={sectionRef}
      className="section-padding section-alt relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold/8 blur-3xl"
      />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="space-y-8 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Careers"
              title="Join a group that moves the world"
              description="We are building an elite team across operations, innovation, and client experience — united by a single standard of excellence."
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
                  A culture of stewardship and excellence
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Current Openings
            </motion.p>
            {roles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link
                  href="#"
                  className="group relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover sm:flex-row sm:items-center md:p-6"
                >
                  {/* slide-in accent */}
                  <span className="pointer-events-none absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-gold/10 to-transparent transition-all duration-500 group-hover:w-1/2" />
                  <div className="relative flex-1 space-y-2">
                    <h3 className="font-display text-lg font-semibold text-forest transition-colors group-hover:text-gold-dark">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={12} />
                        {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} />
                        {role.location}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-semibold text-slate-700">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <div className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                    <span className="relative overflow-hidden">
                      <motion.span
                        className="block"
                        initial={{ y: 0 }}
                        whileHover={{ y: -2 }}
                      >
                        Apply now
                      </motion.span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="pt-4">
              <MagneticButton strength={10}>
                <Button variant="outline" size="sm">
                  View All Openings
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
