"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Handshake, LineChart } from "lucide-react";

import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Investors() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="investors"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-3xl bg-forest-gradient p-8 md:p-14"
        >
          {/* Parallax bg image */}
          <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
            <Image
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2000&q=80"
              alt="Investor partnership"
              fill
              sizes="100vw"
              className="object-cover opacity-15"
            />
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/95 to-forest/70" />

          {/* Decorative animated orbs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
              >
                <span className="inline-block h-px w-7 bg-gold" />
                Investors & Partners
              </motion.p>

              <h2
                className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl"
                aria-label="A premium platform for long-term growth"
              >
                {"A premium platform for long-term growth".split(" ").map((w, i) => (
                  <span
                    key={`${w}-${i}`}
                    className="relative mr-2 inline-block overflow-hidden align-baseline"
                    aria-hidden
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ y: "115%" }}
                      whileInView={{ y: "0%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.85,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.3 + i * 0.05
                      }}
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/80"
              >
                Access the latest investor updates, partnership opportunities,
                and strategic initiatives across the Eloma Group of companies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <MagneticButton strength={12}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-gold text-forest hover:bg-gold-soft"
                  >
                    Investor Relations
                    <ArrowRight size={18} />
                  </Button>
                </MagneticButton>
                <MagneticButton strength={10}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white hover:text-forest"
                  >
                    Partner with Us
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: LineChart,
                  title: "Investor Relations",
                  description:
                    "Annual reports, financial updates, and governance disclosures."
                },
                {
                  icon: Handshake,
                  title: "Strategic Partnerships",
                  description:
                    "Co-investment, joint ventures, and supplier partnership programs."
                }
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 + idx * 0.15 }}
                  className="group flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold transition-all duration-500 group-hover:rotate-6">
                    <card.icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{card.title}</p>
                    <p className="mt-1 text-sm text-white/70">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
