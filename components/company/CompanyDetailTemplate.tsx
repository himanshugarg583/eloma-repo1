"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, MapPin, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { CompanyProfile } from "@/lib/company-data";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const sectionStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

function useAnimatedCounts(values: CompanyProfile["stats"]) {
  const [counts, setCounts] = useState(values.map(() => 0));

  useEffect(() => {
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
  }, [values]);

  return counts;
}

export default function CompanyDetailTemplate({ company }: { company: CompanyProfile }) {
  const counts = useAnimatedCounts(company.stats);

  return (
    <div className="company-detail-page min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main className="pt-20 sm:pt-24">
        <section className="company-hero-section container-x py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial="hidden" animate="show" variants={fadeIn}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Company Detail</p>
              <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
                {company.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#333] sm:text-xl">
                {company.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#4a4a4a] sm:text-[17px]">
                {company.description}
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
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 z-10 rounded-2xl bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#08213C] text-sm font-bold text-white">
                    {company.logoText}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f5b61]">
                      {company.industry}
                    </p>
                    <p className="text-sm text-[#555]">{company.headquarters}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#edf0f2] bg-white shadow-[0_18px_50px_rgba(8,33,60,0.08)]">
                <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
                  <Image
                    src={company.heroImage}
                    alt={company.heroImageAlt}
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

        <section className="border-y border-[#eef1f4] bg-white">
          <motion.div
            className="container-x py-12 sm:py-14 lg:py-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeIn} className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">About Company</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">
                  Overview, story, mission and vision
                </h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#4b4b4b] sm:text-base">
                  {company.overview}
                </p>
                <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#4b4b4b] sm:text-base">
                  {company.story}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-[#edf0f2] bg-white p-5 shadow-sm transition-all duration-300">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f5b61]">Mission</p>
                    <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">{company.mission}</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-[#edf0f2] bg-white p-5 shadow-sm transition-all duration-300">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f5b61]">Vision</p>
                    <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">{company.vision}</p>
                  </motion.div>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                <div className="overflow-hidden rounded-[28px] border border-[#edf0f2] bg-white shadow-sm">
                  <div className="relative h-[260px] sm:h-[360px] lg:h-[420px]">
                    <Image
                      src={company.aboutImage}
                      alt={`${company.name} overview`}
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className="container-x py-12 sm:py-14 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeIn} className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Overview & Media</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Overview & Video</h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#4b4b4b] sm:text-base">{company.overview}</p>
                <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#4b4b4b] sm:text-base">{company.story}</p>
              </div>

              <motion.div variants={fadeIn} className="relative">
                {company.videoUrl ? (
                  <div className="relative w-full overflow-hidden rounded-2xl border border-[#edf0f2] bg-black" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      src={company.videoUrl}
                      title={`${company.name} video`}
                      className="absolute left-0 top-0 h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-2xl border border-[#edf0f2] bg-white shadow-sm">
                    <div className="relative h-[260px] sm:h-[360px] lg:h-[420px]">
                      <Image
                        src={company.aboutImage}
                        alt={`${company.name} overview`}
                        fill
                        sizes="(min-width: 1024px) 35vw, 100vw"
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      />
                    </div>
                  </div>
                )}

                {company.website ? (
                  <div className="mt-6 flex justify-center">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#08213C] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
                    >
                      Visit Website
                      <ArrowRight size={16} />
                    </a>
                  </div>
                ) : null}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className="container-x py-12 sm:py-14 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeIn} className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Company Details</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Key information at a glance</h2>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {company.details.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-[#edf0f2] bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f5b61]">{detail.label}</p>
                  <p className="mt-3 text-[15px] font-medium leading-7 text-[#111111]">{detail.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="border-y border-[#eef1f4] bg-white">
          <motion.div
            className="container-x py-12 sm:py-14 lg:py-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeIn} className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">What We Do</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Business activities and services</h2>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {company.activities.map((activity) => (
                <motion.article
                  key={activity.title}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f7f7] text-xl">
                    {activity.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#111111]">{activity.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">{activity.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container-x py-12 sm:py-14 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeIn} className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Company Strength</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Growth and achievements</h2>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {company.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-end gap-1">
                    <p className="text-4xl font-semibold tracking-tight text-[#08213C] sm:text-5xl">
                      {counts[index]}
                    </p>
                    {stat.suffix ? <span className="pb-1 text-lg font-semibold text-[#0f5b61]">{stat.suffix}</span> : null}
                  </div>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-[#5a6a7f]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="border-y border-[#eef1f4] bg-white">
          <motion.div
            className="container-x py-12 sm:py-14 lg:py-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeIn} className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Gallery</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Company showcase</h2>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {company.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  variants={fadeIn}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-2xl border border-[#edf0f2] bg-white shadow-sm"
                >
                  <div className="relative h-52 sm:h-60">
                    <Image
                      src={image}
                      alt={`${company.name} gallery ${index + 1}`}
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

        <section className="container-x py-12 sm:py-14 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeIn} className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Values</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">What drives the company</h2>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {company.values.map((value) => (
                <motion.article
                  key={value.title}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-[#edf0f2] bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#08213C] text-white">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#111111]">{value.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">{value.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="border-t border-[#eef1f4] bg-white">
          <div className="container-x py-12 sm:py-14 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="rounded-[28px] border border-[#edf0f2] bg-[#fcfcfd] p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Final CTA</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-[#111111] sm:text-4xl">Partner With Us</h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#4b4b4b] sm:text-lg">
                    Let’s build long-term value together.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#cfd6e0] px-5 py-3 text-sm font-semibold text-[#111111] transition-transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/partners"
                    className="inline-flex items-center justify-center rounded-full bg-[#08213C] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    Become a Partner
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
