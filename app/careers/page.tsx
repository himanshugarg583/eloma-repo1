"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Play,
  Plus,
  Quote,
  Scale,
  Sparkles,
  Star,
  Target,
  Users
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const rotatingWords = ["Build", "Grow", "Lead", "Create"];

const heroImages = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80"
];

const perks = [
  {
    icon: Scale,
    title: "Fair chances for everyone",
    desc: "Equal opportunity and respect at the heart of how we work."
  },
  {
    icon: GraduationCap,
    title: "Learning by doing",
    desc: "Try new things, learn new skills, and become better every day."
  },
  {
    icon: Users,
    title: "Grow together as a team",
    desc: "We support each other and build something meaningful together."
  },
  {
    icon: HeartHandshake,
    title: "Healthy work-life balance",
    desc: "Real opportunities to grow — not just in work, but in life too."
  },
  {
    icon: Globe2,
    title: "Global exposure",
    desc: "Work across eight countries and a connected ecosystem of businesses."
  },
  {
    icon: Target,
    title: "Real ownership & impact",
    desc: "Own meaningful work from day one and see your ideas ship."
  },
  {
    icon: Award,
    title: "Recognition & rewards",
    desc: "Your work matters, your ideas are heard, your efforts are valued."
  },
  {
    icon: Sparkles,
    title: "A culture you'll love",
    desc: "Built on simple ideas — respect, trust, and growth."
  }
];

const categories = [
  "View All",
  "Logistics",
  "Digital & Technology",
  "Security & Risk",
  "Customer Support",
  "Travel & Tourism"
];

const jobs = [
  {
    title: "Fleet Operations Lead",
    category: "Logistics",
    location: "Sydney, Australia",
    type: "Full-time",
    exp: "5+ yrs",
    desc: "Lead premium fleet operations and real-time route intelligence across long-haul corridors."
  },
  {
    title: "Supply Chain Analyst",
    category: "Logistics",
    location: "Mumbai, India",
    type: "Full-time",
    exp: "2+ yrs",
    desc: "Optimize end-to-end supply chain flows with data-driven insights."
  },
  {
    title: "Warehouse Operations Manager",
    category: "Logistics",
    location: "Melbourne, Australia",
    type: "Full-time",
    exp: "4+ yrs",
    desc: "Run multi-location warehousing with precision inventory governance."
  },
  {
    title: "Full-Stack Engineer",
    category: "Digital & Technology",
    location: "Bengaluru, India",
    type: "Full-time",
    exp: "3+ yrs",
    desc: "Build platforms that power smarter operations across the group."
  },
  {
    title: "Cloud Solutions Architect",
    category: "Digital & Technology",
    location: "Singapore",
    type: "Full-time",
    exp: "6+ yrs",
    desc: "Design scalable, secure cloud infrastructure for global teams."
  },
  {
    title: "Product Designer",
    category: "Digital & Technology",
    location: "London, UK",
    type: "Full-time",
    exp: "3+ yrs",
    desc: "Craft intuitive digital experiences for our products and clients."
  },
  {
    title: "Virtual Security Specialist",
    category: "Security & Risk",
    location: "Dubai, UAE",
    type: "Full-time",
    exp: "4+ yrs",
    desc: "Protect operations with proactive virtual security and risk solutions."
  },
  {
    title: "Risk & Compliance Analyst",
    category: "Security & Risk",
    location: "Toronto, Canada",
    type: "Full-time",
    exp: "3+ yrs",
    desc: "Strengthen governance, compliance, and resilience across the group."
  },
  {
    title: "Customer Support Lead",
    category: "Customer Support",
    location: "Delhi, India",
    type: "Full-time",
    exp: "4+ yrs",
    desc: "Lead call-center teams that strengthen client relationships."
  },
  {
    title: "Customer Experience Associate",
    category: "Customer Support",
    location: "Beijing, China",
    type: "Full-time",
    exp: "1+ yrs",
    desc: "Deliver responsive, caring support across every channel."
  },
  {
    title: "Travel Operations Coordinator",
    category: "Travel & Tourism",
    location: "Dubai, UAE",
    type: "Full-time",
    exp: "2+ yrs",
    desc: "Coordinate seamless travel experiences and trusted support."
  },
  {
    title: "Tourism Partnerships Manager",
    category: "Travel & Tourism",
    location: "Singapore",
    type: "Full-time",
    exp: "5+ yrs",
    desc: "Build partnerships that create memorable travel journeys."
  }
];

const testimonials = [
  {
    name: "Priya S.",
    role: "Supply Chain Analyst · Mumbai",
    quote: "Eloma gave me room to grow faster than I imagined — and the support to get there.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "James W.",
    role: "Cloud Architect · Singapore",
    quote: "The teams genuinely support each other here. Ideas turn into real things, fast.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Aisha R.",
    role: "Product Designer · London",
    quote: "I get to own real projects from day one. That trust means everything.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Daniel K.",
    role: "Risk Analyst · Toronto",
    quote: "Leadership listens, and the work has real impact across the group.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mei L.",
    role: "CX Associate · Beijing",
    quote: "A culture of respect, trust, and learning — every single day.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Omar F.",
    role: "Travel Operations · Dubai",
    quote: "The global exposure here completely changed my career trajectory.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
];

const videoStories = [
  {
    name: "A day at the Mumbai hub",
    role: "Supply Chain",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Building with the Cloud team",
    role: "Digital & Technology",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "On the road with Logistics",
    role: "Transportation",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Inside Customer Care",
    role: "Customer Support",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
  }
];

const reviews = [
  {
    rating: 5,
    quote:
      "Supportive leadership and genuine room to grow. The best team I've been part of.",
    name: "Operations Specialist",
    meta: "4 years at Eloma"
  },
  {
    rating: 5,
    quote:
      "Great work-life balance and people who actually care. My ideas are heard here.",
    name: "Software Engineer",
    meta: "2 years at Eloma"
  },
  {
    rating: 4,
    quote:
      "Lots of learning, real ownership from day one, and a clear path to grow.",
    name: "Customer Experience Lead",
    meta: "3 years at Eloma"
  },
  {
    rating: 5,
    quote:
      "Global exposure and a culture built on respect and trust. Proud to be here.",
    name: "Risk Analyst",
    meta: "5 years at Eloma"
  }
];

const steps = [
  { n: "01", title: "Apply", desc: "Send your application for a role that fits you." },
  { n: "02", title: "Screening", desc: "A quick chat to understand your goals and story." },
  { n: "03", title: "Interview", desc: "Meet the team and explore the role together." },
  { n: "04", title: "Offer", desc: "We move fast on the right fit." },
  { n: "05", title: "Onboard", desc: "Welcome aboard — start building your future." }
];

const faqs = [
  {
    q: "Where is Eloma Group located?",
    a: "We operate across Australia, India, US, Canada, China, UK, UAE, and Singapore — with teams connected as one ecosystem."
  },
  {
    q: "Do you offer remote or hybrid roles?",
    a: "Many roles offer hybrid flexibility depending on the team and location. Each listing notes its working model."
  },
  {
    q: "I don't see a role that fits — can I still apply?",
    a: "Absolutely. Send us your resume and we'll reach out when something matching your strengths opens up."
  },
  {
    q: "What does the hiring process look like?",
    a: "Apply, a short screening chat, interviews with the team, then an offer and a warm onboarding."
  },
  {
    q: "Do you support learning and growth?",
    a: "Yes — we believe in learning by doing and growing together, with real opportunities to take ownership."
  },
  {
    q: "What is the culture like at Eloma?",
    a: "Respect, trust, fair chances for everyone, and a healthy work-life balance — built around people."
  }
];

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("View All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const storyTrackRef = useRef<HTMLDivElement | null>(null);

  const scrollStories = (dir: number) => {
    const el = storyTrackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-story-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const filteredJobs =
    activeCategory === "View All"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  useEffect(() => {
    const wordId = window.setInterval(() => {
      setWordIdx((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    const imgId = window.setInterval(() => {
      setImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 2800);
    return () => {
      window.clearInterval(wordId);
      window.clearInterval(imgId);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
      gsap.fromTo(
        item,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 88%" }
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
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 85%" }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>("[data-count]").forEach((item) => {
      const target = Number(item.dataset.count ?? 0);
      const counter = { value: 0 };
      ScrollTrigger.create({
        trigger: item,
        start: "top 90%",
        onEnter: () => {
          gsap.to(counter, {
            value: target,
            duration: 1.8,
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

  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        {/* ===== HERO ===== */}
        <section className="relative isolate overflow-hidden bg-white">
          <div className="container-x relative grid min-h-[88vh] items-center gap-12 py-24 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]"
              >
                <span className="relative block h-[1.05em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIdx]}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="block text-gold"
                    >
                      {rotatingWords[wordIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="block text-slate-400">your future</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 max-w-md text-base leading-relaxed text-slate-600 md:text-lg"
              >
                At Eloma, work isn&apos;t just a job — it&apos;s a chance to learn,
                grow, and build your future across logistics, digital, security,
                travel, and customer solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <Link
                  href="#openings"
                  className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  View Open Roles
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#why"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white"
                >
                  Why Eloma
                </Link>
              </motion.div>
            </div>

            {/* Right: circular portrait with ring + orbiting accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]"
            >
              {/* thin outer ring */}
              <div aria-hidden className="absolute inset-0 rounded-full border border-slate-200" />
              {/* slowly orbiting gold accent dot */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <span className="absolute left-1/2 top-0 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
              </motion.div>

              {/* portrait (gentle crossfade carousel) */}
              <div className="relative h-[82%] w-[82%] overflow-hidden rounded-full shadow-xl">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[imgIdx]}
                      alt="Life at Eloma"
                      fill
                      sizes="500px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CULTURE INTRO ===== */}
        <section className="bg-white py-24">
          <div className="container-x max-w-3xl text-center" data-reveal>
            <p className="eyebrow justify-center text-forest">We are Eloma</p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-forest md:text-4xl">
              A culture built on respect, trust, and growth
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              We are a team of people who support each other. Here, your work
              matters, your ideas are heard, and your efforts are valued. Every
              day is a chance to try new things, learn new skills, and become
              better — together. At Eloma, you don&apos;t just work. You build
              your future.
            </p>
          </div>
        </section>

        {/* ===== WHY ELOMA / PERKS ===== */}
        <section id="why" className="section-alt py-24">
          <div className="container-x">
            <SectionHeading
              eyebrow="Why Work at Eloma"
              title="More than a workplace — a place to belong"
              description="We invest in people first. These are the things that make life at Eloma genuinely different."
              align="center"
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-forest hover:shadow-card-hover"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/5 text-forest transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-white">
                    <perk.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-forest">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OPEN POSITIONS ===== */}
        <section id="openings" className="bg-white py-24">
          <div className="container-x">
            <SectionHeading
              eyebrow="Open Positions"
              title="Find your role across the group"
              description="Explore opportunities across our five business verticals and eight countries."
              align="center"
            />

            {/* Filter tabs */}
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    activeCategory === cat
                      ? "border-forest bg-forest text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-forest hover:text-forest"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Job grid */}
            <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job.title}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="job-card group"
                  >
                    <span className="job-accent" />
                    <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                      {job.category}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-forest transition-colors group-hover:text-gold-dark">
                      {job.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {job.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={13} />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} />
                        {job.exp}
                      </span>
                    </div>
                    <Link
                      href="#"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-gold-dark"
                    >
                      Apply now
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ===== SPOTLIGHT BANNER ===== */}
        <section className="bg-white pb-4 pt-2">
          <div className="container-x">
            <div
              className="relative isolate flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-forest px-8 py-10 md:flex-row md:items-center md:justify-between md:px-12"
              data-reveal
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
              />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  <Sparkles size={14} />
                  We&apos;re hiring
                </p>
                <h3 className="mt-3 max-w-xl font-display text-2xl font-bold text-white md:text-3xl">
                  Our Digital &amp; Technology team is growing fast
                </h3>
                <p className="mt-2 max-w-lg text-sm text-white/70">
                  Engineers, designers, and cloud specialists — help build the
                  platforms that power a connected world.
                </p>
              </div>
              <Link
                href="#openings"
                className="group relative inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-forest transition-transform hover:scale-[1.03]"
              >
                See tech roles
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== HUMANS OF ELOMA (carousel with arrows) ===== */}
        <section className="section-alt py-24">
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Humans of Eloma"
                title="Stories from our people"
                description="Real voices from across the group — on growth, ownership, and the culture they call home."
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => scrollStories(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => scrollStories(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="container-x mt-12">
            <div
              ref={storyTrackRef}
              className="story-track flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
            >
              {testimonials.map((t, idx) => (
                <article
                  key={`${t.name}-${idx}`}
                  data-story-card
                  className="flex w-[300px] flex-none snap-start flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:w-[360px]"
                >
                  <Quote className="text-gold" size={26} />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-forest">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== THE UNTOLD STORIES (video grid) ===== */}
        <section className="bg-white py-24">
          <div className="container-x">
            <SectionHeading
              eyebrow="The Untold Stories"
              title="Life at Eloma, in their own words"
              description="Short stories from teammates across our verticals — the moments behind the work."
              align="center"
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
              {videoStories.map((story) => (
                <button
                  key={story.name}
                  type="button"
                  className="video-card group text-left"
                >
                  <div className="video-thumb">
                    <Image
                      src={story.img}
                      alt={story.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="video-img"
                    />
                    <span className="video-overlay" />
                    <span className="video-play">
                      <Play size={20} className="ml-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <p className="mt-4 font-display text-base font-semibold text-forest">
                    {story.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gold-dark">
                    {story.role}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GALLERY ===== */}
        <section className="bg-white py-24">
          <div className="container-x">
            <SectionHeading
              eyebrow="Life at Eloma"
              title="Behind the scenes"
              description="A glimpse into the everyday moments that make our teams tick."
              align="center"
            />
            <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4" data-stagger>
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className={cn(
                    "career-gallery-item",
                    index === 0 && "md:col-span-2 md:row-span-2",
                    index === 3 && "md:col-span-2"
                  )}
                >
                  <Image
                    src={src}
                    alt="Life at Eloma"
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="career-gallery-img"
                  />
                  <span className="career-gallery-overlay">
                    <Plus size={26} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== REVIEWS / RATINGS ===== */}
        <section className="bg-forest py-24 text-white">
          <div className="container-x">
            <SectionHeading
              variant="dark"
              eyebrow="How Our People Feel"
              title="Rated by the people who matter most"
              description="We're proud of the culture we've built — here's what our teams say about working at Eloma."
              align="center"
            />

            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
              <span className="font-display text-4xl font-bold text-gold">4.8</span>
              <div className="text-left">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-1 text-xs text-white/60">
                  Average rating across our teams in 8 countries
                </p>
              </div>
            </div>

            <div
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              data-stagger
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors duration-500 hover:border-gold/40"
                >
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < review.rating ? "currentColor" : "none"}
                        className={i < review.rating ? "" : "text-white/25"}
                        strokeWidth={i < review.rating ? 0 : 1.5}
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-white/55">{review.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HIRING PROCESS ===== */}
        <section className="section-alt py-24">
          <div className="container-x">
            <SectionHeading
              eyebrow="How Hiring Works"
              title="A simple, human process"
              description="No endless rounds. Just a clear path from hello to welcome aboard."
              align="center"
            />
            <div className="relative mt-16">
              <div className="career-step-line" aria-hidden />
              <div className="grid gap-8 md:grid-cols-5" data-stagger>
                {steps.map((step) => (
                  <div key={step.n} className="relative text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-white font-display text-sm font-bold text-forest shadow-sm">
                      {step.n}
                    </div>
                    <h3 className="mt-5 font-display text-base font-semibold text-forest">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bg-white py-24">
          <div className="container-x max-w-3xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Good to know before you apply"
              align="center"
            />
            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left transition-colors hover:border-forest/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-base font-semibold text-forest">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest transition-transform duration-300",
                        openFaq === index && "rotate-45 bg-forest text-white"
                      )}
                    >
                      <Plus size={15} />
                    </span>
                  </div>
                  <div
                    className={cn(
                      "career-faq-answer text-sm leading-relaxed text-slate-600",
                      openFaq === index && "career-faq-answer-open"
                    )}
                  >
                    {faq.a}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section className="bg-white py-20">
          <div className="container-x">
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-slate-50 px-8 py-12 text-center md:px-14" data-reveal>
              <div>
                <p className="eyebrow justify-center text-forest">Stay in the loop</p>
                <h3 className="mt-4 font-display text-2xl font-bold text-forest md:text-3xl">
                  Get new roles in your inbox
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
                  Be the first to hear about openings across our five verticals
                  and eight countries.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="h-12 w-full rounded-full border border-slate-300 bg-white pl-11 pr-4 text-sm text-forest outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-forest/15"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-white pb-24">
          <div className="container-x">
            <div
              className="relative isolate overflow-hidden rounded-3xl bg-forest-gradient px-8 py-16 text-center md:px-14"
              data-reveal
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
              />
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Don&apos;t see the right role?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
                We&apos;re always looking for great people. Send us your resume
                and we&apos;ll reach out when something matches your strengths.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-forest transition-transform hover:scale-[1.03]"
              >
                Send Your Resume
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx global>{`
        .story-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .story-track::-webkit-scrollbar {
          display: none;
        }

        .video-card {
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .video-thumb {
          position: relative;
          height: 240px;
          overflow: hidden;
          border-radius: 18px;
          background: #08213c;
        }

        .video-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8, 33, 60, 0) 40%,
            rgba(8, 33, 60, 0.55) 100%
          );
          transition: background 0.4s ease;
        }

        .video-play {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          height: 56px;
          width: 56px;
          translate: -50% -50%;
          place-items: center;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          color: #08213c;
          box-shadow: 0 10px 30px rgba(8, 33, 60, 0.25);
          transition: transform 0.4s ease, background 0.4s ease;
        }

        .video-card:hover .video-img {
          transform: scale(1.07);
        }

        .video-card:hover .video-overlay {
          background: linear-gradient(
            180deg,
            rgba(8, 33, 60, 0.1) 0%,
            rgba(8, 33, 60, 0.6) 100%
          );
        }

        .video-card:hover .video-play {
          transform: translate(-50%, -50%) scale(1.12);
          background: #3cb98c;
          color: #ffffff;
        }

        .careers-hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at 50% 40%, #000 0%, transparent 75%);
          -webkit-mask-image: radial-gradient(
            circle at 50% 40%,
            #000 0%,
            transparent 75%
          );
        }

        .job-card {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          background: #fff;
          padding: 24px;
          transition: transform 0.4s ease, box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .job-card:hover {
          transform: translateY(-4px);
          border-color: #0c2f2a;
          box-shadow: 0 18px 40px rgba(12, 47, 42, 0.1);
        }

        .job-accent {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: linear-gradient(180deg, #c9a557, rgba(201, 165, 87, 0));
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.45s ease;
        }

        .job-card:hover .job-accent {
          transform: scaleY(1);
        }

        .career-gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background: #0c2f2a;
        }

        .career-gallery-img {
          object-fit: cover;
          transition: transform 0.6s ease, filter 0.6s ease;
        }

        .career-gallery-overlay {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #fff;
          background: rgba(12, 47, 42, 0.45);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .career-gallery-item:hover .career-gallery-img {
          transform: scale(1.08);
        }

        .career-gallery-item:hover .career-gallery-overlay {
          opacity: 1;
        }

        .career-step-line {
          position: absolute;
          top: 28px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            #c9a557 0,
            #c9a557 6px,
            transparent 6px,
            transparent 14px
          );
          opacity: 0.5;
          display: none;
        }

        @media (min-width: 768px) {
          .career-step-line {
            display: block;
          }
        }

        .career-faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, margin-top 0.4s ease;
        }

        .career-faq-answer-open {
          max-height: 200px;
          margin-top: 12px;
        }
      `}</style>
    </div>
  );
}
