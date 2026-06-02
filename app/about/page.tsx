"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  Briefcase,
  Globe2,
  Heart,
  Lightbulb,
  Plus,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/sections/GallerySection";
import { cn } from "@/lib/utils";

/* ----------------------------- DATA ---------------------------- */

const timeline = [
  {
    date: "2013-The Idea Began",
    body: "As businesses started growing, it became clear that many of them were facing common problems - lack of support, slow systems, and limited opportunities to scale. While working closely with different organizations, we saw how difficult it was for businesses to grow smoothly. These early experiences planted the idea of building something that could truly support businesses in a better and simpler way."
  },
  {
    date: "2014- Learning from Global Environments",
    body: "Working in fast-moving global environments gave a deeper understanding of how successful businesses operate. It showed the importance of strong systems, smart decisions, and the right support at the right time. At the same time, it also highlighted the gaps - where businesses struggle due to lack of proper guidance, tools, and reliable partners."
  },
  {
    date: "2016-Understanding Business Systems",
    body: "As industries evolved, it became clear that growth is not just about one service — it is about how everything connects. From operations to technology, every part of a business needs to work together. This phase helped build a strong understanding of how different business functions connect and why simple, integrated solutions are important for long-term success."
  },
  {
    date: "2018-Real Market Experience",
    body: "Working closely within the Australian market gave a real picture of everyday business challenges. Many businesses were facing issues like inconsistent services, lack of transparency, and limited growth support. These real-world experiences made one thing very clear - businesses needed a partner who understands their challenges and provides simple, reliable solutions"
  },
  {
    date: "2020-2025-The Entrepreneurial Vision",
    body: "This vision became reality with the launch of Eloma Group. It marked the beginning of building a multi-business ecosystem focused on innovation, growth, and real solutions. Eloma Group was created to support businesses across different industries, helping them grow with the right services, systems, and partnership"
  },
  {
    date: "2026-Growth with Purpose",
    body: "Growth at Eloma Group is not just about expansion. It is about building responsibly and creating a positive impact. With a focus on ethical practices, inclusive values, and long-term sustainability, ELoma continues to grow as a company that supports people, businesses, and communities."
  }
];

const timelineImages = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
];

const values = [
  { icon: Heart,        title: "Simple Solutions" },
  { icon: Lightbulb,    title: "Honest Thinking" },
  { icon: Sparkles,     title: "Reliable Delivery" },
  { icon: ShieldCheck,  title: "Do The Right Thing" },
  { icon: Users,        title: "Respect For People" },
  { icon: Zap,          title: "Hard Work" },
  { icon: Rocket,       title: "Grow Together" },
  { icon: Globe2,       title: "Support Each Other" },
  { icon: Award,        title: "Trust And Long-Term Relationships" }
];

const stats = [
  { value: "710+", label: "Happy Clients" },
  { value: "400+", label: "Specialists" },
  { value: "900+", label: "Projects Delivered" }
];

const faqs = [
  {
    q: "What does Eloma Group focus on?",
    a: "Eloma Group focuses on building simple, clear, and practical business solutions that help organisations grow with confidence."
  },
  {
    q: "Why was Eloma Group created?",
    a: "It was created from years of experience seeing businesses struggle with support, systems, and growth, and from the belief that things could be done better."
  },
  {
    q: "What is the company vision?",
    a: "The vision is to build a trusted group that connects different industries across Australia and gives businesses everything they need in one place."
  },
  {
    q: "What values guide the team?",
    a: "Simple thinking, honesty, reliability, respect, hard work, and a commitment to growing together with trust and long-term relationships."
  },
  {
    q: "What does growth mean at Eloma?",
    a: "Growth is about building responsibly, supporting people and communities, and creating positive impact through ethical and inclusive work."
  }
];

/* --------------------------- PAGE ------------------------------ */

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <OurHistory />
        <OurValues />
        {/* <StatsCTA /> */}
        <NextGenCTA />
        {/* <GallerySection
          title="Inside Eloma"
          description="Behind-the-scenes moments from across our eight offices — culture, craft, and the people who power it."
        /> */}
        <AboutFAQ />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------- HERO --------------------------------- */

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest/50 to-forest/90" />
      </div>
      <div className="container-x relative flex min-h-[60vh] flex-col items-center justify-center pb-12 text-center md:min-h-[68vh] md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          One Team. Multiple Expertise. Shared Vision.
        </motion.h1>
      </div>
    </section>
  );
}

/* ---------------------- OUR STORY ------------------------------- */

function OurStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
            Hi, We&apos;re Eloma Group.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              We are a diversified business group built on experience,
              innovation, and a shared vision for growth. Our team brings
              together professionals from multiple industries, working across
              transportation, digital solutions, security, and customer support
              to deliver impactful results.
            </p>
            <p>
              With a deep understanding of business operations and evolving
              market needs, we focus on creating solutions that are efficient,
              scalable, and future-ready. At Eloma Group, we do not just
              support businesses - we build systems and services that help them
              grow, adapt, and succeed in a dynamic world.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px]"
          style={{
            background:
              "linear-gradient(180deg, #f7b27a 0%, #ec6e7a 50%, #efa9c0 100%)"
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
            alt="Mountain peak at sunset"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover mix-blend-luminosity"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------- MISSION / VISION --------------------------- */

function MissionVision() {
  const cards = [
    {
      title: "Mission",
      accent: "bg-gold",
      body: [
        "Our mission at Eloma Group is to make business feel simple, clear, and possible for everyone.",
        "We aim to remove confusion, reduce stress, and give businesses the right support to grow with confidence. We focus on real solutions, real people, and real results - so every business, big or small, can move forward without feeling stuck or alone."
      ]
    },
    {
      title: "Vision",
      accent: "bg-forest",
      body: [
        "Our vision is to build a strong and trusted business group that connects different industries across Australia.",
        "We want to create a space where businesses can find everything they need to grow, all in one place. We aim to keep growing with new ideas, better systems, and meaningful impact."
      ]
    }
  ];

  return (
    <section className="bg-white pb-16 pt-4 md:pb-24">
      <div className="container-x grid gap-10 md:grid-cols-2 md:gap-12">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.85,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative pl-6"
          >
            <span
              className={cn(
                "absolute left-0 top-2 block h-[88%] w-1 rounded-full",
                card.accent
              )}
              aria-hidden
            />
            <h3 className="font-display text-3xl font-bold tracking-tight text-forest md:text-4xl">
              {card.title}
            </h3>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
              {card.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ----------------------- OUR HISTORY ---------------------------- */

// Y-coordinates (in SVG viewBox units, 0–1080) where the wave's centre
// line crosses each of the six date markers. These are the "year anchors"
// the dot lands on as it travels down the curve.
const TIMELINE_GUIDE_YS = [20, 232, 444, 656, 868, 1080] as const;

// SVG viewBox total height — used to convert guide ys into top-% positions
// for the date labels.
const TIMELINE_VB_H = 1080;

function OurHistory() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(0);
  const [dotPoint, setDotPoint] = useState({ x: 110, y: 20 });
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const pathOffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);

  useEffect(() => {
    if (!pathRef.current) return;
    setPathLength(pathRef.current.getTotalLength());
    const p = pathRef.current.getPointAtLength(0);
    setDotPoint({ x: p.x, y: p.y });
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!pathRef.current) return;
    const total = pathRef.current.getTotalLength();
    const p = pathRef.current.getPointAtLength(value * total);
    setDotPoint({ x: p.x, y: p.y });

    // Card swap synced to the dot crossing each year marker.
    //
    // Old code: `if (p.y >= guideYs[i] - 80) next = i;` — switched 80 px
    //           BEFORE the dot reached the marker, which made the right-hand
    //           image change ahead of the date the user was reading.
    // New: card swaps exactly when the dot's y crosses the marker,
    //      so "reaching the year" and "image changes" happen in lockstep.
    let next = 0;
    for (let i = 0; i < TIMELINE_GUIDE_YS.length; i += 1) {
      if (p.y >= TIMELINE_GUIDE_YS[i]) next = i;
    }
    setActiveIdx(Math.min(next, timeline.length - 1));
  });

  const wavePath =
    "M 110 20" +
    " C 190 80, 190 160, 110 232" +
    " C 30 304, 30 384, 110 444" +
    " C 190 504, 190 596, 110 656" +
    " C 30 716, 30 808, 110 868" +
    " C 190 928, 190 1020, 110 1080";

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
          Our Journey
        </h2>

        {/*
          The outer section is intentionally tall so the user has enough
          scroll travel to send the dot all the way along the wave. Both
          columns inside are sticky on `lg+`, which keeps the timeline
          graphic + card frozen in place while the user scrolls — exactly
          like the reference video. On mobile the layout falls back to a
          natural stacked flow so the page doesn't get pinned awkwardly.
        */}
        <div
          ref={sectionRef}
          className="relative mt-10 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12"
          style={{ minHeight: "260vh" }}
        >
          {/* Timeline graphic — sticky on desktop */}
          <div className="lg:sticky lg:top-[14vh] lg:self-start">
            <div className="relative mx-auto h-[78vh] w-full max-w-[420px] min-h-[560px]">
              {/* Date guide labels + horizontal lines */}
              <div className="pointer-events-none absolute inset-0">
                {timeline.map((item, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <div
                      key={item.date}
                      className="absolute left-0 right-0 flex items-center gap-4"
                      style={{
                        top: `${((TIMELINE_GUIDE_YS[i] / TIMELINE_VB_H) * 100).toFixed(2)}%`,
                        transform: "translateY(-50%)"
                      }}
                    >
                      <span
                        className={cn(
                          "min-w-[90px] text-right text-xs uppercase tracking-[0.1em] transition-colors duration-300",
                          isActive
                            ? "font-semibold text-forest"
                            : "text-slate-400"
                        )}
                      >
                        {item.date}
                      </span>
                      <span
                        className={cn(
                          "h-px flex-1 transition-colors duration-300",
                          isActive ? "bg-forest/40" : "bg-slate-200"
                        )}
                      />
                    </div>
                  );
                })}
              </div>

              {/* SVG path + travelling dot */}
              <svg
                viewBox={`0 0 220 ${TIMELINE_VB_H}`}
                className="absolute inset-0 mx-auto h-full w-full max-w-[280px]"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <path
                  d={wavePath}
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth={2.2}
                />
                <motion.path
                  ref={pathRef}
                  d={wavePath}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth={2.2}
                  style={{
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathOffset
                  }}
                />
                <motion.circle
                  cx={dotPoint.x}
                  cy={dotPoint.y}
                  r={26}
                  fill="rgba(148,163,184,0.22)"
                />
                <motion.circle
                  cx={dotPoint.x}
                  cy={dotPoint.y}
                  r={14}
                  fill="#94a3b8"
                />
              </svg>
            </div>
          </div>

          {/* Right-hand card panel — also sticky on desktop, swaps as the
              dot crosses each year marker (no anticipation offset). */}
          <div className="mt-8 lg:sticky lg:top-[14vh] lg:mt-0 lg:self-start">
            <motion.article
              key={timeline[activeIdx].date}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <Image
                  src={timelineImages[activeIdx % timelineImages.length]}
                  alt={timeline[activeIdx].date}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  {timeline[activeIdx].date}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {timeline[activeIdx].body}
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ OUR VALUES ---------------------------- */

function OurValues() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
            Values That Guide Us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            At Eloma Group, we believe in keeping things simple, honest, and
            reliable. We respect people, value hard work, and always focus on
            doing the right thing. We believe in growing together, supporting
            each other, and building long-term relationships based on trust.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: (i % 3) * 0.06 + Math.floor(i / 3) * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-7 text-center transition-all duration-500 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover md:p-8"
            >
              {/* Plus button (top-right) */}
              <button
                aria-label={`Learn more about ${v.title}`}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-dark transition-all duration-300 hover:bg-forest hover:text-white"
              >
                <Plus size={16} strokeWidth={2.4} />
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-all duration-500 group-hover:bg-forest group-hover:text-white">
                <v.icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-display text-sm font-semibold leading-tight text-forest md:text-base">
                {v.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- STATS / CTA -------------------------- */

function StatsCTA() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count ?? 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.v)}+`;
          },
          scrollTrigger: { trigger: el, start: "top 85%", once: true }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 md:py-20">
      <div className="container-x">
        <div className="grid items-center gap-10 rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-card-hover md:grid-cols-[1fr_1fr] md:p-12">
          {/* Stats card */}
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-5 text-center">
                <p
                  data-count={parseInt(s.value, 10)}
                  className="font-display text-3xl font-bold text-forest md:text-4xl"
                >
                  0
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500 md:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA copy */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              We believe strong teams are built beyond the workplace. Through
              regular gatherings and shared experiences, we create space for
              connection, collaboration, and a positive work culture.
            </p>
            <Link
              href="#"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-forest px-6 text-sm font-semibold text-white transition-colors hover:bg-forest-dark"
            >
              Become an Elomian
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- NEXT-GEN BUSINESS CTA -------------------- */

function NextGenCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          {/* Circular gradient photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto h-[260px] w-[260px] overflow-hidden rounded-full md:h-[300px] md:w-[300px]"
            style={{
              background:
                "linear-gradient(180deg, #f7b27a 0%, #ec6e7a 50%, #efa9c0 100%)"
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
              alt="Eloma team"
              fill
              sizes="300px"
              className="object-cover mix-blend-luminosity"
            />
          </motion.div>

          {/* Text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10"
          >
            <h2 className="font-display text-3xl font-bold leading-tight text-slate-700 md:text-4xl lg:text-5xl">
              Build a meaningful career across{" "}
              <span className="text-gold-dark">diverse industries</span>.
            </h2>
            <Link
              href="#contact"
              className="inline-flex h-12 flex-shrink-0 items-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-white transition-colors hover:bg-forest-dark"
            >
              Become an Elomian
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- ABOUT FAQ ---------------------------- */

function AboutFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold tracking-tight text-forest md:text-5xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-forest md:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4 text-sm font-semibold text-slate-800 md:text-base">
                    <Plus
                      size={18}
                      strokeWidth={2.2}
                      className={cn(
                        "text-gold-dark transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                    {faq.q}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-10 pr-2 text-sm leading-relaxed text-slate-600 md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            <span className="relative">
              Learn More
              <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-forest transition-transform duration-500 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-gold-dark transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
