"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/SectionHeading";
import SectionNumber from "@/components/animations/SectionNumber";
import DotWorldMap, {
  countries,
  CountryKey
} from "@/components/maps/DotWorldMap";
import CountUp from "@/components/animations/CountUp";

const ORDER: CountryKey[] = ["AU", "IN", "US", "CA", "UK", "CN", "SG", "AE"];

const stats = [
  { value: 8, suffix: "", label: "Countries" },
  { value: 25, suffix: "+", label: "Cities" },
  { value: 5, suffix: "", label: "Business verticals" },
  { value: 12, suffix: "+", label: "Industries served" }
];

export default function GlobalFootprint() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [origin, setOrigin] = useState<CountryKey>("AU");

  return (
    <section
      id="global"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <SectionNumber number="04" label="Global Footprint" />
            <SectionHeading
              title="A network built for global enterprise"
              description="Eight countries, four continents — Eloma Group operates as one connected organisation, delivering coordinated services to clients wherever they trade."
            />
          </div>

          {/* Country switcher */}
          <div className="flex flex-wrap items-center gap-1.5 lg:justify-end">
            {ORDER.map((k) => (
              <button
                key={k}
                onClick={() => setOrigin(k)}
                className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                  origin === k
                    ? "border-forest bg-forest text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-forest"
                }`}
              >
                {countries[k].name}
              </button>
            ))}
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10"
        >
          <div className="relative aspect-[1000/480] w-full">
            <DotWorldMap
              key={origin}
              origin={origin}
              variant="light"
              useScrollTrigger
              startDelay={0}
            />
          </div>

          {/* Caption */}
          <div className="mt-6 flex flex-col gap-2 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.24em] text-forest/60">
              Showing connections from{" "}
              <span className="font-semibold text-forest">
                {countries[origin].name}
              </span>
            </p>
            <p className="text-xs text-slate-500">
              Click a country above to redraw the network from that hub.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative bg-white p-7 transition-colors hover:bg-slate-50"
            >
              <p className="font-display text-4xl font-bold text-forest md:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} duration={2.2} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-600">
                {s.label}
              </p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
