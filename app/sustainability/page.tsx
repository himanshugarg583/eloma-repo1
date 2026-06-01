"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="container-x relative z-20 py-20 lg:py-36"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-forest)]">SUSTAINABILITY</p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Building a Sustainable Future</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#333]">
                At [Company Name], sustainability is embedded into the way we operate, innovate and grow. We are committed to creating long-term positive impact through responsible business practices, environmental awareness and meaningful community engagement.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="/sustainability#commitment" className="inline-flex items-center gap-3 rounded-full bg-[var(--accent-forest)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative h-56 w-full rounded-2xl overflow-hidden shadow-lg lg:h-80"
            >
              <motion.div
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80)' }}
                className="absolute inset-0 bg-cover bg-center"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 10, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </header>

      <main className="pb-20">
        {/* OUR COMMITMENT */}
        <section id="commitment" className="container-x py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div variants={fadeUp} className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-green)]">Our Commitment to Sustainability</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Our Commitment to Sustainability</h2>
              <p className="mt-6 text-lg leading-8 text-[#444]">
                Our approach to sustainability focuses on creating lasting value through responsible operations, ethical business practices and continuous improvement. We aim to grow with purpose while contributing positively to people, communities and the environment.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 lg:mt-12 grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <p className="text-base text-[#333]">
                  We integrate sustainability across planning, procurement and operations, ensuring measurable outcomes and continuous improvement. Our teams are empowered to make better choices for the planet and for people.
                </p>
                <ul className="mt-6 grid gap-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent-green)]" />
                    <span className="text-[#444]">Embedded governance and measurable KPIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent-green)]" />
                    <span className="text-[#444]">Cross-functional ownership and training</span>
                  </li>
                </ul>
              </div>

              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-2xl border border-[#edf0f2] bg-black shadow-sm">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/ysz5S6PUM-U"
                      title="Sustainability commitment video"
                      className="absolute left-0 top-0 h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* THREE PILLARS */}
        <section className="bg-white border-t border-[#eef1f4]">
          <div className="container-x py-20">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.div variants={fadeUp} className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-green)]">Three Pillars</p>
                <h2 className="mt-4 font-display text-3xl font-semibold">Three Pillars of Sustainability</h2>
                <p className="mt-6 text-lg leading-8 text-[#444]">Our sustainability strategy is built on three core pillars that guide decision-making across the business.</p>
              </motion.div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <motion.article variants={card} whileHover={{ y: -8 }} className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-transform">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-green)] text-white text-xl transition-transform hover:scale-110">🌿</div>
                  <h3 className="mt-4 text-xl font-semibold">Environmental Responsibility</h3>
                  <p className="mt-3 text-[#555]">Reducing environmental impact through efficient operations, resource management and sustainable practices.</p>
                </motion.article>

                <motion.article variants={card} whileHover={{ y: -8 }} className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-transform">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-green)] text-white text-xl transition-transform hover:scale-110">🤝</div>
                  <h3 className="mt-4 text-xl font-semibold">People & Communities</h3>
                  <p className="mt-3 text-[#555]">Supporting employees, partners and communities through inclusion, wellbeing and long-term social impact initiatives.</p>
                </motion.article>

                <motion.article variants={card} whileHover={{ y: -8 }} className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-transform">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-green)] text-white text-xl transition-transform hover:scale-110">🔍</div>
                  <h3 className="mt-4 text-xl font-semibold">Responsible Governance</h3>
                  <p className="mt-3 text-[#555]">Maintaining transparency, accountability and ethical business practices across everything we do.</p>
                </motion.article>
              </div>
            </motion.div>
          </div>
        </section>

        {/* KEY FOCUS AREAS */}
        <section className="container-x py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-green)]">Key Focus Areas</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Key Focus Areas</h2>
            </motion.div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Sustainable Operations","Efficient operations that reduce emissions and waste."],
                ["Resource Efficiency","Optimising use of energy, water and materials."],
                ["Responsible Procurement","Sourcing with purpose and supplier responsibility."],
                ["Community Engagement","Partnerships and programs that support local communities."],
                ["Employee Wellbeing","Health, safety and development for our people."],
                ["Innovation & Growth","Investment in long-term sustainable products and services."]
              ].map(([title, desc]) => (
                <motion.div key={title} variants={card} whileHover={{ y: -6 }} className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-transform flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-green)] text-white text-xl transition-transform hover:scale-110">⚡</div>
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="text-[#555]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* COMMUNITY IMPACT */}
        <section className="bg-white border-t border-[#eef1f4]">
          <div className="container-x py-20">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.div variants={fadeUp} className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-green)]">Community Impact</p>
                <h2 className="mt-4 font-display text-3xl font-semibold">Supporting Communities Beyond Business</h2>
                <p className="mt-6 text-lg leading-8 text-[#444]">We believe sustainability goes beyond operations. Through partnerships, social initiatives and community engagement, we work to create positive and meaningful impact beyond the workplace.</p>
              </motion.div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <motion.div variants={card} className="overflow-hidden rounded-2xl border border-[#edf0f2] bg-black shadow-sm">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/ysz5S6PUM-U"
                      title="Community impact video"
                      className="absolute left-0 top-0 h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>

                <motion.div variants={card} className="rounded-2xl p-6">
                  <p className="text-[#444]">Through targeted programs and collaborative partnerships we support education, health and local infrastructure projects that create measurable benefits for communities.</p>
                  <ul className="mt-6 grid gap-3">
                    <li className="flex items-start gap-3"><div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent-green)]"/> <span>Local education and training programs</span></li>
                    <li className="flex items-start gap-3"><div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent-green)]"/> <span>Health and wellbeing partnerships</span></li>
                    <li className="flex items-start gap-3"><div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent-green)]"/> <span>Small grants for community infrastructure</span></li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FUTURE GOALS */}
        <section className="container-x py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div variants={fadeUp} className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-green)]">Looking Ahead</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Looking Ahead</h2>
              <p className="mt-6 text-lg leading-8 text-[#444]">Our sustainability journey continues to evolve. We remain focused on building smarter systems, stronger partnerships and responsible practices that support long-term growth and future generations.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-[#eef1f4] bg-white">
          <div className="container-x py-20">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-[#fcfcfd] p-8 lg:p-12 shadow-md text-center">
              <h3 className="font-display text-3xl font-semibold">Building a Better Future Together</h3>
              <p className="mt-4 max-w-2xl mx-auto text-[#444]">We continue to move forward with responsibility, innovation and purpose at the center of everything we do.</p>

              <div className="mt-8 flex justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-[var(--accent-forest)] px-6 py-3 text-sm font-semibold text-[#111] transition-transform hover:scale-105">Contact Us</Link>
                <Link href="/sustainability#commitment" className="inline-flex items-center gap-3 rounded-full bg-[var(--accent-green)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">Learn More</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
