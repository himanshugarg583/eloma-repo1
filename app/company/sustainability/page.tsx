"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "@/components/animations/CountUp";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Navbar />
      <main className="container-x py-20">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Sustainability</p>
          <h1 className="mt-4 font-display text-4xl font-bold">Sustainability Initiatives</h1>
          <p className="mt-4 text-base text-slate-600">Our commitment to environment, community and long-term responsible growth.</p>
        </motion.header>

        <section className="mt-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } }
            }}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="space-y-6">
              {[
                {
                  title: "Carbon Reduction Program",
                  body: "Energy audits, efficient lighting retrofits and fleet optimisation across operations."
                },
                {
                  title: "Community Training",
                  body: "Local skills and employment programs run in partnership with regional NGOs."
                },
                {
                  title: "Waste & Recycling",
                  body: "Reduced office waste by implementing circular procurement and vendor take-back schemes."
                }
              ].map((a) => (
                <motion.article
                  key={a.title}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-transform duration-300"
                >
                  <h3 className="font-semibold text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{a.body}</p>
                </motion.article>
              ))}
            </div>

            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} className="rounded-2xl overflow-hidden border border-[#edf0f2] bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Impact Timeline</h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-600">
                <li><strong>2022:</strong> Baseline greenhouse assessment completed.</li>
                <li><strong>2023:</strong> Pilot solar installation at regional HQ.</li>
                <li><strong>2024:</strong> 30% reduction in single-use plastics.</li>
                <li><strong>2025:</strong> Supplier sustainability scorecard introduced.</li>
              </ul>

              <motion.div whileInView={{ scale: [0.98, 1] }} transition={{ duration: 0.8 }} className="mt-6">
                <Image src="/assset/logo/world%20map.avif" alt="sustainability" width={640} height={320} className="rounded-md object-cover" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className="mt-12">
          <div className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Get involved</h3>
            <p className="mt-2 text-sm text-slate-600">If you’re an NGO, supplier or an employee with an idea — we’d love to hear from you.</p>
            <div className="mt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#08213C] px-4 py-2 text-sm font-semibold text-white">Contact our sustainability team</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
