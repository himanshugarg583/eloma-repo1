"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BusinessProfile } from "@/lib/business-data";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

function useAnimatedCounts(values: BusinessProfile["stats"], active: boolean) {
  const [counts, setCounts] = useState(values.map(() => 0));

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(values.map((item) => Math.round(item.value * eased)));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [values, active]);

  return counts;
}

export default function BusinessDetailTemplate({ business }: { business: BusinessProfile }) {
  const [statsActive, setStatsActive] = useState(false);
  const counts = useAnimatedCounts(business.stats, statsActive);

  return (
    <div className="business-detail-page min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main className="pt-20 sm:pt-24">
        <section className="business-hero-section container-x py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="show" variants={fadeIn} className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Business Detail</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
                {business.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#333] sm:text-xl">
                {business.tagline}
              </p>
              <p className="mt-4 text-[15px] leading-8 text-[#4a4a4a] sm:text-base">
                {business.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#08213C] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d7dde6] px-5 py-3 text-sm font-semibold text-[#111111] transition-transform hover:scale-105 hover:border-[#08213C]"
                >
                  Become a Partner
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[28px] border border-[#edf0f2] bg-white shadow-[0_18px_50px_rgba(8,33,60,0.08)]">
                <div className="relative h-[320px] sm:h-[420px] lg:h-[540px]">
                  <Image
                    src={business.heroImage}
                    alt={business.heroImageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-[#eef1f4] bg-[#fafbfc]">
          <motion.div
            className="container-x py-12 sm:py-14 lg:py-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">About Business</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">
                  {business.aboutTitle}
                </h2>
                <p className="mt-5 text-[15px] leading-8 text-[#4b4b4b] sm:text-base">
                  {business.aboutDescription}
                </p>
              </div>

              {business.aboutImage ? (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                  <div className="overflow-hidden rounded-[28px] border border-[#edf0f2] bg-white shadow-sm">
                    <div className="relative h-[260px] sm:h-[340px] lg:h-[420px]">
                      <Image
                        src={business.aboutImage}
                        alt={`${business.name} about`}
                        fill
                        sizes="(min-width: 1024px) 35vw, 100vw"
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          </motion.div>
        </section>

        <section className="container-x py-12 sm:py-14 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Services</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">What we do</h2>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {business.services.map((service) => (
                <motion.article
                  key={service.title}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f7f7] text-xl">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#111111]">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="border-y border-[#eef1f4] bg-[#fafbfc]">
          <motion.div
            className="container-x py-12 sm:py-14 lg:py-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Why Choose Us</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Key strengths</h2>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {business.whyChooseUs.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#111111]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container-x py-12 sm:py-14 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Process</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">How we work</h2>
            </motion.div>

            <div className="mt-8 grid gap-4 lg:grid-cols-5">
              {business.process.map((step, index) => (
                <motion.article
                  key={step.step}
                  variants={fadeIn}
                  className="relative rounded-2xl border border-[#edf0f2] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08213C] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-[#111111]">{step.step}</h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          className="border-y border-[#eef1f4] bg-white"
          ref={(node) => {
            if (!node) return;
            const observer = new IntersectionObserver(([entry]) => {
              if (entry.isIntersecting) {
                setStatsActive(true);
                observer.disconnect();
              }
            }, { threshold: 0.25 });
            observer.observe(node);
          }}
        >
          <div className="container-x py-12 sm:py-14 lg:py-16">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
              <motion.div variants={fadeIn}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Stats</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Performance at a glance</h2>
              </motion.div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {business.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeIn}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl border border-[#edf0f2] bg-[#fafbfc] p-6 shadow-sm"
                  >
                    <div className="flex items-end gap-1">
                      <p className="text-4xl font-semibold tracking-tight text-[#08213C] sm:text-5xl">{counts[index]}</p>
                      {stat.suffix ? <span className="pb-1 text-lg font-semibold text-[#0f5b61]">{stat.suffix}</span> : null}
                    </div>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-[#5a6a7f]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container-x py-12 sm:py-14 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Gallery</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Project showcase</h2>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {business.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  variants={fadeIn}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-2xl border border-[#edf0f2] bg-white shadow-sm"
                >
                  <div className="relative h-52 sm:h-60">
                    <Image
                      src={image}
                      alt={`${business.name} project ${index + 1}`}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="border-t border-[#eef1f4] bg-[#fafbfc]">
          <div className="container-x py-12 sm:py-14 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="rounded-[28px] border border-[#edf0f2] bg-white p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">CTA</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Let&apos;s Work Together</h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#4b4b4b] sm:text-lg">
                    Contact our team to learn more about our services.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#08213C] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
