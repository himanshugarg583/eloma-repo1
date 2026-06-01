"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import storyImage from "@/assset/about us/first.webp";

const heroStats = [
  { label: "Projects delivered", value: 710 },
  { label: "Expert team", value: 400 },
  { label: "Global reach", value: 9 }
];

const timeline = [
  {
    date: "2016",
    title: "Founded with five builders",
    description: "A basement launch focused on enterprise-grade delivery."
  },
  {
    date: "2018",
    title: "Expanded to 4 regions",
    description: "Scaled delivery pods to support multi-region programs."
  },
  {
    date: "2020",
    title: "Global collaboration model",
    description: "Shipped resilient remote operations and governance."
  },
  {
    date: "2022",
    title: "400+ specialists",
    description: "Cross-functional teams supporting complex initiatives."
  },
  {
    date: "2024",
    title: "Enterprise trust leader",
    description: "Recognized for sustained client outcomes." 
  },
  {
    date: "2026",
    title: "Next-gen delivery model",
    description: "Scaled enterprise transformation through repeatable frameworks."
  }
];

const timelineImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
];

const values = [
  { icon: "\ud83e\udd1d", title: "Customer Success", desc: "We build outcomes that last." },
  { icon: "\ud83d\ude80", title: "Innovation & Learning", desc: "Always evolving, always improving." },
  { icon: "\ud83c\udf1f", title: "Integrity", desc: "Trusted partnerships through clarity." },
  { icon: "\ud83e\uddd0", title: "Craft", desc: "Precision in every delivery cycle." },
  { icon: "\ud83e\udd1c", title: "Team Spirit", desc: "One team, one shared cadence." },
  { icon: "\u26a1", title: "Speed", desc: "Momentum with accountability." },
  { icon: "\ud83d\udd0e", title: "Focus", desc: "Everything aligned to impact." },
  { icon: "\ud83d\udde3\ufe0f", title: "Communication", desc: "Transparent by default." }
];

const customerLogos = [
  "Asteron",
  "Nimbus",
  "Helix",
  "Echelon",
  "NovaEdge",
  "Axis",
  "Pulse",
  "Summit",
  "Vector",
  "Catalyst",
  "Harbor",
  "Northwind"
];

const galleryImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
];

const faqs = [
  {
    q: "How do we start a partnership?",
    a: "We begin with a discovery sprint to align on vision, scope, and success metrics."
  },
  {
    q: "Which industries do you serve?",
    a: "Logistics, infrastructure, digital services, and enterprise platforms."
  },
  {
    q: "What makes your delivery model unique?",
    a: "We combine advisory, execution, and governance in one accountable team."
  },
  {
    q: "How fast can we launch?",
    a: "Most programs begin within 2-4 weeks depending on scale and complexity."
  }
];

const valuesContainerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08
    }
  }
};

const valueItemVariants = {
  hidden: (offset: number) => ({ opacity: 0, y: 60, scale: 0.92, x: offset }),
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pathLength, setPathLength] = useState(0);
  const [dotPoint, setDotPoint] = useState({ x: 0, y: 0 });
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isMdUp, setIsMdUp] = useState(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 100%", "end 0%"]
  });
  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesRef,
    offset: ["start 90%", "end 60%"]
  });
  const pathOffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);
  const valuesScale = useTransform(valuesProgress, [0, 1], [1.08, 1]);
  const valuesY = useTransform(valuesProgress, [0, 1], [40, 0]);
  const valuesOpacity = useTransform(valuesProgress, [0, 0.4, 1], [0.4, 0.8, 1]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
      gsap.fromTo(
        item,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%"
          }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((item) => {
      gsap.fromTo(
        item.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%"
          }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>("[data-count]").forEach((item) => {
      const target = Number(item.dataset.count ?? 0);
      const counter = { value: 0 };
      ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        onEnter: () => {
          gsap.to(counter, {
            value: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              item.textContent = Math.floor(counter.value).toString();
            }
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMdUp(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!pathRef.current) {
      return;
    }
    const total = pathRef.current.getTotalLength();
    setPathLength(total);
    const startPoint = pathRef.current.getPointAtLength(0);
    setDotPoint({ x: startPoint.x, y: startPoint.y });
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!pathRef.current) {
      return;
    }
    const total = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(value * total);
    setDotPoint({ x: point.x, y: point.y });
    const guideYs = [20, 236, 452, 668, 884, 1080];
    let nextIndex = 0;
    for (let i = 0; i < guideYs.length; i += 1) {
      if (point.y >= guideYs[i]) {
        nextIndex = i;
      }
    }
    setActiveTimeline(Math.min(nextIndex, timeline.length - 1));
  });

  const heroBackground = useMemo(
    () =>
      "linear-gradient(180deg, rgba(6, 10, 20, 0.68), rgba(6, 10, 20, 0.92)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80')",
    []
  );

  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <section
          className="relative overflow-hidden"
          style={{ backgroundImage: heroBackground, backgroundSize: "cover" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
          <div className="container-x hero-bleed relative flex min-h-[70vh] flex-col items-center justify-center py-28 text-center text-white">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              Being true to our values in everything we do
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-3xl font-semibold md:text-5xl"
            >
              Enterprise teams built for trust and scale.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-wrap justify-center gap-4"
            >
              <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900">
                Explore our story
              </button>
              <button className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white/80">
                Talk to us
              </button>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24">
          <span className="story-pulse" />
          <div className="container-x relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal className="space-y-6">
              <p className="eyebrow text-slate-500">Our story</p>
              <h2 className="heading-lg text-slate-900">
                A heritage of building resilient enterprises.
              </h2>
              <p className="body-lg text-slate-600">
                We started in a single basement office, determined to challenge traditional delivery.
                That focus helped us grow to 400+ specialists aligned around enterprise outcomes.
              </p>
              <p className="body-base text-slate-500">
                Today we help leaders modernize operations, launch global programs, and build lasting
                partnerships rooted in accountability.
              </p>
            </div>
            <div className="relative" data-reveal>
              <div className="story-image overflow-hidden rounded-[32px]">
                <Image
                  src={storyImage}
                  alt="Our story"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-x grid gap-12 md:grid-cols-2" data-stagger>
            <div className="mission-card">
              <span className="mission-line" />
              <div>
                <p className="mission-title">Our Mission</p>
                <p className="mission-text">
                  Our mission is to leverage technology, people, and process rigor so clients stay ahead
                  of change and operate with measurable excellence.
                </p>
                <p className="mission-text">
                  We architect delivery ecosystems that optimize operations while empowering teams to
                  serve customers better and sustain long-term growth.
                </p>
              </div>
            </div>
            <div className="mission-card">
              <span className="mission-line" />
              <div>
                <p className="mission-title">Our Vision</p>
                <p className="mission-text">
                  Our vision is to become a global leader in transformation by challenging conventional
                  thinking and shaping the future of enterprise operations.
                </p>
                <p className="mission-text">
                  We aim to build lasting partnerships grounded in trust, innovation, and exceptional
                  experiences for every stakeholder.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section bg-white py-20">
          <div className="container-x" ref={timelineRef}>
            <h3 className="text-xl font-semibold text-slate-900">Our History</h3>
            <div className="timeline-grid mt-10">
              <div className="timeline-graphic">
                <div className="timeline-guides">
                  {timeline.map((item) => (
                    <div key={item.date} className="timeline-guide">
                      <span className="timeline-guide-label">{item.date}</span>
                      <span className="timeline-guide-line" />
                    </div>
                  ))}
                </div>
                <svg
                  viewBox="0 0 220 1080"
                  className="timeline-svg"
                  aria-hidden="true"
                >
                  <path
                    className="timeline-path-base"
                    d="M110 20 C 20 180, 200 300, 110 460 C 20 620, 200 740, 110 900 C 20 1040, 200 1120, 110 1080"
                    fill="none"
                  />
                  <motion.path
                    ref={pathRef}
                    className="timeline-path-active"
                    d="M110 20 C 20 180, 200 300, 110 460 C 20 620, 200 740, 110 900 C 20 1040, 200 1120, 110 1080"
                    fill="none"
                    style={{ strokeDasharray: pathLength, strokeDashoffset: pathOffset }}
                  />
                  <motion.circle
                    className="timeline-dot"
                    r="10"
                    cx={dotPoint.x}
                    cy={dotPoint.y}
                  />
                </svg>
              </div>
              <div className="timeline-panel">
                <article key={timeline[activeTimeline].date} className="timeline-card-item">
                  <div className="timeline-card-image">
                    <Image
                      src={timelineImages[activeTimeline % timelineImages.length]}
                      alt={timeline[activeTimeline].title}
                      width={1200}
                      height={900}
                      className="timeline-card-img"
                    />
                  </div>
                  <div className="timeline-card-content">
                    <p className="timeline-card-date">{timeline[activeTimeline].date}</p>
                    <h4 className="timeline-card-title">{timeline[activeTimeline].title}</h4>
                    <p className="timeline-card-desc">{timeline[activeTimeline].description}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-x" ref={valuesRef}>
            <h3 className="text-xl font-semibold text-slate-900">Our Values</h3>
            <p className="mt-3 text-sm text-slate-500">
              The principles that guide every program, partnership, and milestone.
            </p>
            <motion.div
              className="mt-10 grid gap-5 md:grid-cols-4"
              style={{ scale: valuesScale, y: valuesY, opacity: valuesOpacity }}
              variants={valuesContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {values.map((value, index) => {
                const offset = isMdUp
                  ? [120, 60, -60, -120][index % 4]
                  : [80, -80][index % 2];
                return (
                  <motion.div
                    key={value.title}
                    className="value-card"
                    variants={valueItemVariants}
                    custom={offset}
                  >
                    <span className="value-index">{index + 1}</span>
                    <div className="text-xl">{value.icon}</div>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{value.title}</p>
                    <p className="mt-2 text-xs text-slate-500">{value.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f7f8fb] py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]" data-stagger>
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Community & Work</h3>
              <p className="mt-3 text-sm text-slate-500">
                We invest in people-first delivery, sharing knowledge and creating measurable impact.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-slate-50 p-4 text-center">
                    <p data-count={stat.value} className="text-2xl font-semibold text-slate-900">
                      0
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
                alt="Community"
                width={1200}
                height={900}
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-x">
            <h3 className="text-xl font-semibold text-slate-900">Our Valued Customers</h3>
            <p className="mt-3 text-sm text-slate-500">
              Trusted by teams who build complex programs and critical infrastructure.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-4" data-stagger>
              {customerLogos.map((logo) => (
                <div key={logo} className="logo-card">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#151b2f] via-[#1b1d38] to-[#1b2b44] py-20 text-white">
          <div className="container-x text-center" data-reveal>
            <h3 className="text-2xl font-semibold">Become a next-gen business with us</h3>
            <p className="mt-3 text-sm text-white/70">
              Build resilient delivery with a team that values clarity, craft, and impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="cta-glow mt-6 rounded-full bg-white px-8 py-2 text-sm font-semibold text-slate-900"
            >
              Let’s talk
            </motion.button>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-x">
            <h3 className="text-xl font-semibold text-slate-900">Gallery</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-3" data-stagger>
              {galleryImages.map((src, index) => (
                <div key={src} className={cn("gallery-item", index === 0 && "md:col-span-2")}
                >
                  <Image src={src} alt="Gallery" width={1200} height={900} className="gallery-img" />
                  <div className="gallery-overlay">+</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-x max-w-3xl">
            <h3 className="text-xl font-semibold text-slate-900">Frequently Asked Questions</h3>
            <div className="mt-6 space-y-4">
              {faqs.map((faq, index) => (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="faq-item"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">{faq.q}</span>
                    <span className={cn("faq-icon", openFaq === index && "rotate-45")}>+</span>
                  </div>
                  <div
                    className={cn(
                      "faq-answer",
                      openFaq === index && "faq-answer-open"
                    )}
                  >
                    {faq.a}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white" data-reveal>
          <Footer />
        </section>
      </main>

      <style jsx global>{`
        .story-pulse {
          position: absolute;
          width: 320px;
          height: 320px;
          top: 12%;
          right: 8%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.65), rgba(249, 115, 22, 0));
          animation: pulseZoom 7s ease-in-out infinite;
          opacity: 0.9;
        }

        .timeline-grid {
          display: grid;
          gap: 40px;
          align-items: start;
          min-height: 1400px;
        }

        @media (min-width: 1024px) {
          .timeline-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 56px;
          }
        }

        .timeline-graphic {
          display: flex;
          justify-content: center;
          position: relative;
          align-self: stretch;
        }

        .timeline-guides {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          display: grid;
          grid-template-rows: repeat(6, 1fr);
          pointer-events: none;
        }

        .timeline-guide {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .timeline-guide-label {
          font-size: 12px;
          color: #94a3b8;
          min-width: 64px;
          text-align: right;
          letter-spacing: 0.1em;
        }

        .timeline-guide-line {
          height: 2px;
          flex: 1;
          background: #e2e8f0;
        }

        .timeline-svg {
          width: 100%;
          max-width: 280px;
          height: 1080px;
        }

        .timeline-path-base {
          stroke: #e2e8f0;
          stroke-width: 2;
        }

        .timeline-path-active {
          stroke: #f97316;
          stroke-width: 2;
          filter: drop-shadow(0 0 6px rgba(249, 115, 22, 0.25));
        }

        .timeline-dot {
          fill: #f97316;
          filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.35));
        }

        .timeline-cards {
          display: grid;
          gap: 24px;
        }

        .timeline-panel {
          position: sticky;
          top: 70vh;
          transform: translateY(-70%);
          align-self: center;
        }

        .timeline-card-item {
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          background: #fff;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }

        .timeline-card-image {
          height: 200px;
          overflow: hidden;
        }

        .timeline-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .timeline-card-content {
          padding: 20px 24px 26px;
        }

        .timeline-card-date {
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 600;
        }

        .timeline-card-title {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
        }

        .timeline-card-desc {
          margin-top: 10px;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
        }

        .value-card {
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          background: #fff;
          padding: 20px;
          position: relative;
          transition: transform 0.2s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
        }

        .value-index {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #94a3b8;
        }

        .logo-card {
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          padding: 12px 16px;
          text-align: center;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #64748b;
          background: #f8fafc;
        }

        .cta-glow {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          animation: glowPulse 2.2s ease-in-out infinite;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background: #0f172a;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #fff;
          font-size: 28px;
          background: rgba(0, 0, 0, 0.35);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
          filter: brightness(1.05);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .faq-item {
          width: 100%;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
          padding: 16px 0;
          background: transparent;
        }

        .faq-icon {
          transition: transform 0.3s ease;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          font-size: 13px;
          color: #64748b;
          transition: max-height 0.4s ease;
        }

        .faq-answer-open {
          max-height: 120px;
          margin-top: 10px;
        }

        .mission-card {
          position: relative;
          display: grid;
          grid-template-columns: 4px 1fr;
          gap: 18px;
          padding: 8px 0 8px 18px;
        }

        .mission-line {
          width: 2px;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(249, 115, 22, 0.9), rgba(249, 115, 22, 0.2));
        }

        .mission-title {
          font-size: 26px;
          font-weight: 600;
          color: #0f172a;
        }

        .mission-text {
          margin-top: 16px;
          font-size: 15px;
          line-height: 1.7;
          color: #64748b;
        }

        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.35);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }

        @keyframes pulseZoom {
          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
}
