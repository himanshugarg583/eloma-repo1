"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type MotionValue
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  FileText,
  MapPin,
  Play,
  Search,
  Star
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/sections/GallerySection";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const HERO_VERBS = [
  {
    word: "Innovate",
    color: "#c9a557", // gold
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
  },
  {
    word: "Build",
    color: "#0c2f2a", // forest
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
  },
  {
    word: "Connect",
    color: "#a8862f", // gold-dark
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
  },
  {
    word: "Grow",
    color: "#1a4a43", // forest-light
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
  }
];

type JobCategory =
  | "All"
  | "Engineering"
  | "Operations"
  | "Sales"
  | "Marketing"
  | "Human Resources"
  | "Strategy"
  | "Finance";

const CATEGORIES: JobCategory[] = [
  "All",
  "Engineering",
  "Operations",
  "Sales",
  "Marketing",
  "Human Resources",
  "Strategy",
  "Finance"
];

const JOBS: Array<{
  title: string;
  category: Exclude<JobCategory, "All">;
  type: string;
  location: string;
  experience: string;
  accent: "forest" | "gold" | "blue" | "amber";
}> = [
  {
    title: "Senior Solutions Architect",
    category: "Engineering",
    type: "Full-Time",
    location: "Sydney, AU",
    experience: "5+ Years",
    accent: "gold"
  },
  {
    title: "Logistics Operations Lead",
    category: "Operations",
    type: "Full-Time",
    location: "Melbourne, AU",
    experience: "3-5 Years",
    accent: "forest"
  },
  {
    title: "Senior Backend Engineer",
    category: "Engineering",
    type: "Full-Time",
    location: "Singapore",
    experience: "4+ Years",
    accent: "blue"
  },
  {
    title: "Enterprise Sales Director",
    category: "Sales",
    type: "Full-Time",
    location: "Dubai, UAE",
    experience: "8+ Years",
    accent: "amber"
  },
  {
    title: "Cloud Infrastructure Engineer",
    category: "Engineering",
    type: "Full-Time",
    location: "Remote/Sydney",
    experience: "3-5 Years",
    accent: "blue"
  },
  {
    title: "Brand Marketing Manager",
    category: "Marketing",
    type: "Full-Time",
    location: "London, UK",
    experience: "4-6 Years",
    accent: "gold"
  },
  {
    title: "Security Operations Lead",
    category: "Operations",
    type: "Full-Time",
    location: "Toronto, CA",
    experience: "5-7 Years",
    accent: "forest"
  },
  {
    title: "Customer Support Manager",
    category: "Operations",
    type: "Full-Time",
    location: "Mumbai, IN",
    experience: "3-5 Years",
    accent: "amber"
  },
  {
    title: "Strategy & Planning Analyst",
    category: "Strategy",
    type: "Full-Time",
    location: "New York, US",
    experience: "2-4 Years",
    accent: "gold"
  },
  {
    title: "People & Culture Partner",
    category: "Human Resources",
    type: "Full-Time",
    location: "Sydney, AU",
    experience: "4+ Years",
    accent: "forest"
  },
  {
    title: "Financial Planning Analyst",
    category: "Finance",
    type: "Full-Time",
    location: "Singapore",
    experience: "2-4 Years",
    accent: "blue"
  },
  {
    title: "Performance Marketing Lead",
    category: "Marketing",
    type: "Full-Time",
    location: "Remote/Global",
    experience: "5+ Years",
    accent: "amber"
  }
];

const accentMap: Record<string, string> = {
  forest: "#0c2f2a",
  gold: "#c9a557",
  blue: "#3b82c4",
  amber: "#e8a44c"
};

const STORIES = [
  {
    name: "Aanya Sharma",
    role: "Senior Solutions Architect",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    quote:
      "Eloma opened a world of opportunities. I came in as a junior engineer and grew into a role where I now mentor teams across three countries."
  },
  {
    name: "James Walker",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
    quote:
      "It all started in a small regional office. We had a shared vision and the freedom to chase it. A decade later we're operating across eight countries."
  },
  {
    name: "Priya Nair",
    role: "Customer Experience Lead",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
    quote:
      "Eloma supported not just my professional growth but my personal development — the kind of investment in people that's rare in this industry."
  }
];

/* Gallery photo layout — mirrors the reference scatter.
 *
 * The title sits at the TOP of the viewport. Photos start stacked at the
 * vertical centre (already fanned at their target rotation, like a deck
 * of polaroids) and translate outward to surround the title. The negative
 * vertical offsets put the top row just below the title; positive offsets
 * push the bottom row toward the lower edge.
 *
 *  - tx/ty (vw/vh): translation from centre at end of scroll
 *  - rotate: target rotation (also used as the *initial* rotation for the
 *            fanned-stack look)
 *  - w (vw): final width on tablet+ (clamped to min 240px / max 540px)
 *  - hAspect: aspect-ratio
 *  - z: stacking order in the initial stack
 */
// (Gallery photo layout moved to components/sections/GallerySection.tsx
// so both /careers and /about can share the same animated section.)

const REVIEWS = [
  {
    name: "Sakshi Gupta",
    date: "2025-09-14",
    stars: 5,
    text: "Eloma is more than a job — it's a place where you grow professionally and personally. The culture genuinely values its people."
  },
  {
    name: "Sushil Jangid",
    date: "2025-08-22",
    stars: 5,
    text: "Being part of Eloma is something I'm proud of. The company provides a clear career path and the training process is exceptional."
  },
  {
    name: "Abhinav Tyagi",
    date: "2025-07-30",
    stars: 5,
    text: "Endless opportunities for career growth in a workplace that respects boundaries. Real work-life balance and a culture you want to belong to."
  },
  {
    name: "Megan O'Connor",
    date: "2025-07-05",
    stars: 5,
    text: "The leadership invests in people across every market. Hybrid policies, mentorship, and a clear vision for where we're headed."
  }
];

/* ------------------------------------------------------------------ */
/* HERO — Kinetic verb cycle                                           */
/* ------------------------------------------------------------------ */

const HERO_INTERVAL = 2600;

function CareersHero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((p) => (p + 1) % HERO_VERBS.length);
    }, HERO_INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const current = HERO_VERBS[idx];

  return (
    <section className="relative isolate bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left — Kinetic title */}
          <div className="relative">
            <p className="mb-6 inline-flex items-center gap-3">
              <span className="block h-px w-10 bg-gold-dark" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-dark">
                Careers at Eloma
              </span>
            </p>

            {/* Kinetic verb */}
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
              <span className="block overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.word}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.76, 0, 0.24, 1]
                    }}
                    style={{ color: current.color }}
                    className="block"
                  >
                    {current.word}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block text-forest">for people</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 max-w-md text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Eloma is not just a place where you come and work — it&apos;s a
              place where you belong. Build your career across eight countries
              with people who share your values.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#jobs"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-white transition-all hover:bg-forest-dark"
              >
                Explore Open Roles
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#culture"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-forest"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-white">
                  <Play size={12} className="ml-0.5" />
                </span>
                See our culture
              </a>
            </motion.div>
          </div>

          {/* Right — Photo orb */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Outer thin ring (the path the dot travels along) */}
            <div className="pointer-events-none absolute inset-0 rounded-full border border-slate-200" />

            {/*
              Swinging yellow dot — the wrapper rotates back and forth
              between two angles, with the dot pinned to the top of the
              wrapper. This makes the dot trace an arc along the upper
              portion of the ring (right ↔ left ↔ right).
            */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ transformOrigin: "50% 50%" }}
              animate={{ rotate: [-55, 55, -55] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                className="absolute left-1/2 top-0 block h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_8px_24px_rgba(201,165,87,0.35)]"
                style={{ backgroundColor: current.color }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Cross-fading photo */}
            <div className="absolute inset-[6%] overflow-hidden rounded-full bg-slate-100 shadow-card-hover">
              <AnimatePresence>
                <motion.div
                  key={current.image}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.word}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Verb-color dot bottom-left */}
            <span
              className="absolute bottom-[8%] left-[6%] block h-5 w-5 rounded-full transition-colors duration-500"
              style={{ backgroundColor: current.color, opacity: 0.4 }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WE ARE ELOMA intro                                                  */
/* ------------------------------------------------------------------ */

function CareersIntro() {
  return (
    <section id="culture" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Video tile */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-card-hover">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                alt="Inside Eloma Group"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <button
                    aria-label="Play introduction video"
                    className="group inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-105"
                  >
                    <Play
                      size={26}
                      className="ml-1 text-forest"
                      strokeWidth={2}
                      fill="#0c2f2a"
                    />
                  </button>
                  <p className="mt-6 font-display text-3xl font-semibold text-white drop-shadow-lg md:text-4xl">
                    We Are <span className="text-gold">Eloma.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              Eloma is not just a place where you come and work — it&apos;s a
              place to belong. We are a team of like-minded individuals who
              share the same values yet are each uniquely shaped by our own
              backgrounds and ways of working.
            </p>
            <p>
              A culture of forward motion, where our people continuously evolve
              and reach toward a better self. We stand united through every
              challenge, becoming each other&apos;s strength through every high
              and every low.
            </p>
            <p>
              Eloma is a creative space that fosters a culture of freedom,
              growth, and making an impact that matters. Our people pour their
              hearts into everything they do.
            </p>
            <p className="font-display text-xl font-semibold text-forest md:text-2xl">
              We are innovators. We are champions. We are incredible.
            </p>
            <p className="font-display text-xl font-semibold text-gold-dark md:text-2xl">
              We are Eloma!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* JOB OPPORTUNITIES                                                   */
/* ------------------------------------------------------------------ */

function CareersJobs() {
  const [active, setActive] = useState<JobCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = JOBS.slice();
    if (active !== "All") list = list.filter((j) => j.category === active);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q)
      );
    }
    return list;
  }, [active, query]);

  return (
    <section id="jobs" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-forest md:text-4xl lg:text-5xl">
              Job Opportunities
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Uncover the perfect role that aligns with your unique abilities,
              and grab countless opportunities to take your career to new
              heights.
            </p>
          </div>
          {/* Search */}
          <div className="relative w-full lg:max-w-md lg:justify-self-end">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Job Search"
              className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-5 text-sm text-forest placeholder:text-slate-400 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/10"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-10 overflow-x-auto border-b border-slate-200">
          <div className="flex min-w-max items-center gap-8 pb-1">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={cn(
                    "relative whitespace-nowrap pb-3 text-sm transition-colors",
                    isActive
                      ? "font-semibold text-forest"
                      : "text-slate-500 hover:text-forest"
                  )}
                >
                  {cat === "All" ? "View All" : cat}
                  {isActive ? (
                    <motion.span
                      layoutId="job-tab-underline"
                      className="absolute -bottom-px left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-gold to-gold-dark"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 28
                      }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Job cards */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((job, i) => (
              <motion.div
                key={`${job.title}-${job.location}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.5,
                  delay: (i % 6) * 0.04,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-sm text-slate-500">
            No roles match your search right now — try a different category.
          </p>
        ) : null}
      </div>
    </section>
  );
}

function JobCard({ job }: { job: (typeof JOBS)[number] }) {
  return (
    <Link
      href="#"
      className="group relative flex h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
    >
      {/* Left vertical accent bar */}
      <span
        className="block w-1.5 flex-shrink-0 rounded-l-2xl"
        style={{ backgroundColor: accentMap[job.accent] }}
        aria-hidden
      />

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="text-center font-display text-lg font-semibold text-forest md:text-xl">
          {job.title}
        </h3>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-xs">
          <Pill icon={Briefcase} label={job.type} />
          <Pill icon={MapPin} label={job.location} />
          <Pill icon={FileText} label={job.experience} />
        </div>

        {/* Hover footer */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
          <span className="font-semibold uppercase tracking-wider text-slate-400">
            {job.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            View Role
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Pill({
  icon: Icon,
  label
}: {
  icon: typeof Briefcase;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-slate-500">
      <Icon size={13} className="flex-shrink-0 text-slate-400" />
      <span className="truncate text-[12px]">{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* HIRING 2025 GRADUATES                                               */
/* ------------------------------------------------------------------ */

const GRAD_ORBS = [
  { x: 8, y: 64, size: 110, src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80", gradient: "from-pink-300 via-orange-300 to-amber-200" },
  { x: 32, y: 18, size: 92, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { x: 60, y: 38, size: 100, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { x: 84, y: 14, size: 80, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" }
];

function CareersGraduates() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Left content */}
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-dark">
              <span className="block h-px w-8 bg-gold-dark" />
              Begin Your Journey
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-forest md:text-4xl lg:text-5xl">
              Hiring{" "}
              <span className="italic text-gold-dark">2026 Graduates</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              Join an early-career programme designed to grow leaders across our
              eight markets. Real responsibility from week one, direct mentorship
              from senior leaders.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-white transition-all hover:bg-forest-dark"
            >
              Begin Your Journey
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — Connected orbs */}
          <div className="relative h-[300px] md:h-[360px]">
            {/* Connecting curve */}
            <svg
              viewBox="0 0 600 360"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 60 240 C 180 80, 320 260, 540 100"
                fill="none"
                stroke="#0c2f2a"
                strokeOpacity="0.18"
                strokeWidth="1.4"
                strokeDasharray="4 5"
              />
            </svg>

            {GRAD_ORBS.map((orb, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={cn(
                  "absolute overflow-hidden rounded-full shadow-card-hover",
                  orb.gradient && "bg-gradient-to-br p-1.5",
                  orb.gradient
                )}
                style={{
                  left: `${orb.x}%`,
                  top: `${orb.y}%`,
                  width: orb.size,
                  height: orb.size
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={orb.src}
                    alt="Graduate"
                    fill
                    sizes={`${orb.size}px`}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* THE UNTOLD STORIES                                                  */
/* ------------------------------------------------------------------ */

function CareersStories() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <h2 className="font-display text-3xl font-bold tracking-tight text-forest md:text-4xl lg:text-5xl">
          The Untold Stories
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Journey through the lives of our people — rich with untold stories,
          hurdles overcome, and victories achieved.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STORIES.map((story, i) => (
            <motion.article
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
              <div
                className="relative -mt-6 mx-3 rounded-2xl p-6 text-white shadow-card-hover"
                style={{
                  background:
                    "linear-gradient(135deg, #0c2f2a 0%, #1a4a43 80%, #0c2f2a 100%)"
                }}
              >
                <p className="text-sm leading-relaxed">
                  {story.quote}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-sm font-semibold">
                      {story.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-gold">
                      {story.role}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="group/cta flex items-center gap-2 text-sm font-medium"
                  >
                    Read Story
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/60 text-gold transition-all group-hover/cta:translate-x-0.5 group-hover/cta:bg-gold group-hover/cta:text-forest">
                      <ArrowRight size={12} />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* GALLERY — shared component (also used on /about)                    */
/* ------------------------------------------------------------------ */

/**
 * Thin wrapper that delegates to the reusable `GallerySection` in
 * `components/sections/GallerySection.tsx`. Title/description default
 * to the "Life at Eloma" copy used here. The about page imports the
 * shared component directly with its own copy override.
 */
function CareersGallery() {
  return <GallerySection />;
}

/* ------------------------------------------------------------------ */
/* EXPERIENCE ELOMA — Image-textured letters                           */
/* ------------------------------------------------------------------ */

/**
 * Experience — video-filled "eloma." that reveals as the user scrolls
 * into the section. The video plays inside the letters via CSS mask:
 * the SVG text shape is the mask, the looping video is the fill.
 *
 * Two-stage reveal:
 *  1) A horizontal clip-path wipe uncovers the letters left → right
 *  2) Letters subtly scale-up (1.02 → 1) as the wipe lands
 */
function CareersExperience() {
  // Inline SVG mask of the word "eloma." — used as a CSS mask-image so
  // the underlying <video> fills only the letter shapes.
  // Note: must be URL-encoded so it works in a data: URL.
  const maskSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 320' preserveAspectRatio='xMidYMid meet'>
      <text x='600' y='240' text-anchor='middle'
        font-family='Georgia, "Playfair Display", serif'
        font-weight='900' font-size='300' letter-spacing='-10' fill='black'>
        eloma.
      </text>
    </svg>`;
  const maskUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(maskSvg)}")`;
  const maskStyle: React.CSSProperties = {
    maskImage: maskUrl,
    WebkitMaskImage: maskUrl,
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center"
  };

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-6xl text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-medium uppercase tracking-[0.32em] text-slate-500 md:text-base"
          >
            Experience
          </motion.p>

          {/* Wipe wrapper — uncovers the video-filled letters left → right */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative mx-auto mt-4 w-full"
            style={{ aspectRatio: "1200 / 320" }}
          >
            {/* Subtle scale-in for premium feel */}
            <motion.div
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
            >
              {/* Looping background video, masked into the "eloma." text shape */}
              <video
                src="/videos/eloma-experience.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
                style={maskStyle}
              />
              {/* Faint forest text behind the video, in case the mask
                  is unsupported — also keeps the word readable for SEO */}
              <span
                aria-hidden
                className="absolute inset-0 -z-10 flex items-center justify-center font-display text-[18vw] font-black leading-none tracking-tighter text-forest/[0.04] md:text-[15vw]"
                style={{ letterSpacing: "-0.04em" }}
              >
                eloma.
              </span>
            </motion.div>

            {/* Visually-hidden text for accessibility */}
            <span className="sr-only">Experience eloma.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* HOW OUR PEOPLE FEEL                                                 */
/* ------------------------------------------------------------------ */

function CareersReviews() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-forest md:text-4xl lg:text-5xl">
            How Our People Feel About Us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            Don&apos;t just take our word for it. Hear directly from the people
            who build Eloma every day.
          </p>
        </div>

        {/* Logos / score row */}
        <div className="mt-12 grid items-center gap-6 md:grid-cols-3">
          <RatingBlock
            brand="Google"
            score="4.6"
            reviews="500+ reviews"
            colorClass="text-[#4285F4]"
          />
          <RatingBlock
            brand="Glassdoor"
            score="4.1"
            reviews="180+ reviews"
            colorClass="text-[#0caa41]"
          />
          <RatingBlock
            brand="AmbitionBox"
            score="4.9"
            reviews="Rated by employees"
            colorClass="text-forest"
          />
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-base font-semibold uppercase text-white">
                    {r.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-forest">
                      {r.name}
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar size={11} />
                      {r.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                &ldquo;{r.text}&rdquo;
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RatingBlock({
  brand,
  score,
  reviews,
  colorClass
}: {
  brand: string;
  score: string;
  reviews: string;
  colorClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-card">
      <p
        className={cn(
          "font-display text-2xl font-bold tracking-tight md:text-3xl",
          colorClass
        )}
      >
        {brand}
      </p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="font-display text-3xl font-bold text-forest">
          {score}
        </span>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              size={14}
              className={cn(
                "fill-gold text-gold",
                idx >= Math.floor(parseFloat(score)) && "fill-slate-200 text-slate-200"
              )}
            />
          ))}
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">{reviews}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* LET'S BUILD WITH ELOMA — gradient banner                             */
/* ------------------------------------------------------------------ */

function CareersBanner() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div
          ref={wrapRef}
          className="relative isolate overflow-hidden rounded-3xl py-20 text-center md:py-28"
          style={{
            background:
              "linear-gradient(115deg, #f7c873 0%, #f5a85f 30%, #f08a73 65%, #ef7a98 100%)"
          }}
        >
          {/* Subtle pattern overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
              backgroundSize: "22px 22px"
            }}
          />

          {/* Decorative orbs */}
          <motion.span
            aria-hidden
            className="absolute -left-12 top-10 block h-32 w-32 rounded-full bg-white/15 blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="absolute -right-12 bottom-10 block h-40 w-40 rounded-full bg-white/15 blur-2xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative px-4 font-display text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-md md:text-5xl lg:text-6xl"
          >
            Let&apos;s Build With Eloma!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 flex justify-center"
          >
            <Link
              href="#jobs"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-forest transition-all hover:bg-forest hover:text-white"
            >
              Explore Open Roles
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function CareersPage() {
  return (
    <div className="relative bg-white">
      <Navbar />
      <main>
        <CareersHero />
        <CareersIntro />
        <CareersJobs />
        <CareersGraduates />
        {/* <CareersStories /> */}
        <CareersGallery />
        <CareersExperience />
        {/* <CareersReviews /> */}
        <CareersBanner />
      </main>
      <Footer />
    </div>
  );
}
