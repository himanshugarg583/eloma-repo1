"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from "lucide-react";

/* ── Eloma Insights data ─────────────────────────────────────────────── */
const POSTS = [
  {
    id: 1,
    date: "March 15, 2025",
    category: "Business Growth",
    title: "How Eloma Group Is Reshaping Cross-Border Trade in the Asia-Pacific Region",
    excerpt: "A deep dive into our logistics and trade strategy connecting Australia, India, and South-East Asia for sustainable long-term growth.",
    image: "/assset/home/R-J.png",
    featured: true,
  },
  {
    id: 2,
    date: "February 28, 2025",
    category: "Technology",
    title: "Digital Transformation at the Core of Eloma's Service Delivery",
    excerpt: "How we leverage cutting-edge technology to deliver faster, smarter customer solutions across all our business verticals.",
  },
  {
    id: 3,
    date: "January 10, 2025",
    category: "Sustainability",
    title: "Building a Sustainable Future: Eloma's ESG Commitments for 2025",
    excerpt: "Our pledge to responsible growth — environmental, social, and governance priorities shaping our business decisions this year.",
  },
  {
    id: 4,
    date: "December 5, 2024",
    category: "Careers",
    title: "Why Top Talent Chooses Eloma Group: Culture, Growth & Purpose",
    excerpt: "Inside our people-first culture and what makes Eloma a destination for professionals who want meaningful careers.",
  },
  {
    id: 5,
    date: "November 18, 2024",
    category: "Industry Insights",
    title: "The Future of Security Services: Trends Shaping the Industry in 2025",
    excerpt: "Key developments in security, risk management, and compliance that every forward-thinking business should prepare for.",
  },
  {
    id: 6,
    date: "October 2, 2024",
    category: "Global Expansion",
    title: "Eloma's Strategic Expansion Into the Middle East Market",
    excerpt: "Our roadmap for growth in UAE and beyond — partnerships, community impact, and the services we're bringing to the region.",
  },
];

const CAT_COLOR: Record<string, string> = {
  "Business Growth":   "#3CB98C",
  "Technology":        "#3b82f6",
  "Sustainability":    "#22c55e",
  "Careers":           "#f59e0b",
  "Industry Insights": "#8b5cf6",
  "Global Expansion":  "#ef4444",
};

const CAT_EMOJI: Record<string, string> = {
  "Business Growth":   "📈",
  "Technology":        "💡",
  "Sustainability":    "🌿",
  "Careers":           "🤝",
  "Industry Insights": "🔍",
  "Global Expansion":  "🌏",
};

const VISIBLE = 3;

/* ════════════════════════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════════════════════ */
export default function InsightsCarousel() {
  const [start, setStart] = useState(0);
  const [dir, setDir]     = useState(1);
  const total = POSTS.length;

  const canPrev = start > 0;
  const canNext = start < total - VISIBLE;

  const prev = () => { if (!canPrev) return; setDir(-1); setStart((s) => s - 1); };
  const next = () => { if (!canNext) return; setDir(1);  setStart((s) => s + 1); };

  const visible = POSTS.slice(start, start + VISIBLE);

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-x">

        {/* ── Header ── */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#3CB98C] mb-4"
          >
            <span className="block h-px w-8 bg-[#3CB98C]" />
            Latest from Eloma
          </motion.p>

          <div className="flex items-end justify-between gap-6 flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-3xl font-bold leading-tight tracking-tight text-[#08213C] md:text-4xl lg:text-5xl max-w-xl"
            >
              Dive Deep Into the Eloma World Here
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block text-sm text-slate-500 max-w-xs text-right leading-relaxed"
            >
              Read the latest news and get deeper insights into our businesses, people, and purpose.
            </motion.p>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div className="relative flex items-center gap-3 md:gap-5">

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border bg-white shadow-sm transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed hover:shadow-md"
            style={{ borderColor: canPrev ? "#08213C" : "#e2e8f0", color: canPrev ? "#08213C" : "#94a3b8" }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Track */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: dir * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -60 }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {post.featured && post.image
                      ? <FeaturedCard post={post} />
                      : <RegularCard post={post} />
                    }
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={!canNext}
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border bg-white shadow-sm transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed hover:shadow-md"
            style={{ borderColor: canNext ? "#08213C" : "#e2e8f0", color: canNext ? "#08213C" : "#94a3b8" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > start ? 1 : -1); setStart(i); }}
              className="rounded-full transition-all duration-300"
              style={{ width: i === start ? 22 : 8, height: 8, background: i === start ? "#08213C" : "#cbd5e1" }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   FEATURED CARD  (dark bg + full image — like Cyntexa's first card)
   Hover: image brightens + overlay slides up revealing excerpt + CTA
═══════════════════════════════════════════════════════════════════════ */
function FeaturedCard({ post }: { post: typeof POSTS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: hovered ? -8 : 0, boxShadow: hovered ? "0 28px 56px rgba(8,33,60,0.28)" : "0 4px 20px rgba(8,33,60,0.14)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl cursor-pointer h-[420px] flex flex-col justify-end"
      style={{ background: "#08213C" }}
    >
      {/* Background image — zooms on hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
        animate={{ scale: hovered ? 1.06 : 1, opacity: hovered ? 0.55 : 0.38 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Persistent gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08213C] via-[#08213C]/60 to-transparent" />

      {/* Top: date + category (always visible) */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="flex items-center gap-2 text-white/60 text-[11px] font-medium">
          <Calendar size={11} />
          {post.date}
        </div>
        <span
          className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
          style={{ background: `${CAT_COLOR[post.category]}30`, color: CAT_COLOR[post.category], border: `1px solid ${CAT_COLOR[post.category]}50` }}
        >
          {post.category}
        </span>
      </div>

      {/* Bottom content area */}
      <div className="relative z-10 p-6">
        {/* Title — slides up on hover */}
        <motion.h3
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white font-bold text-lg leading-snug line-clamp-2"
        >
          {post.title}
        </motion.h3>

        {/* Excerpt + CTA — slides in from below on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <p className="mt-2 text-white/65 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-[#3CB98C] text-white text-[12px] font-semibold px-4 py-2 rounded-full">
                Read More <ArrowUpRight size={13} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Default "Read more" text — hides on hover */}
        <AnimatePresence>
          {!hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-3 flex items-center gap-1.5 text-[#3CB98C] text-sm font-semibold"
            >
              Read More <ChevronRight size={14} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(60,185,140,0.6)" }}
      />
    </motion.article>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   REGULAR CARD  (white bg)
   Hover: card lifts, dark overlay slides up from bottom with excerpt + CTA
═══════════════════════════════════════════════════════════════════════ */
function RegularCard({ post }: { post: typeof POSTS[0] }) {
  const [hovered, setHovered] = useState(false);
  const catColor = CAT_COLOR[post.category] ?? "#3CB98C";

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ y: hovered ? -8 : 0, boxShadow: hovered ? "0 24px 48px rgba(8,33,60,0.14)" : "0 2px 12px rgba(0,0,0,0.06)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white cursor-pointer h-[420px] flex flex-col"
    >
      {/* ── Image / illustration area ── */}
      <div
        className="relative flex-shrink-0 h-48 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${catColor}10 0%, ${catColor}20 100%)` }}
      >
        {/* Decorative blobs */}
        <motion.div
          className="absolute bottom-0 right-0 w-36 h-36 rounded-full"
          style={{ background: catColor, opacity: 0.12, transform: "translate(30%,30%)" }}
          animate={{ scale: hovered ? 1.2 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-24 h-24 rounded-full"
          style={{ background: catColor, opacity: 0.08, transform: "translate(-30%,-30%)" }}
          animate={{ scale: hovered ? 1.15 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Center emoji icon */}
        <motion.div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow"
          style={{ background: `${catColor}20`, border: `1.5px solid ${catColor}40` }}
          animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 6 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {CAT_EMOJI[post.category] ?? "📰"}
        </motion.div>

        {/* Dark overlay slides up on hover — covers image area */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center px-5"
          style={{ background: "#08213C" }}
          initial={{ y: "100%" }}
          animate={{ y: hovered ? "0%" : "100%" }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-white/80 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.28, delay: 0.1 }}
          >
            {post.excerpt}
          </motion.p>
          <motion.div
            className="mt-4 inline-flex items-center gap-2 self-start bg-[#3CB98C] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.25, delay: 0.18 }}
          >
            Read More <ArrowUpRight size={12} />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Text content ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium mb-2.5">
          <Calendar size={11} />
          {post.date}
        </div>

        {/* Category badge */}
        <span
          className="inline-block self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3"
          style={{ background: `${catColor}15`, color: catColor }}
        >
          {post.category}
        </span>

        {/* Title */}
        <motion.h3
          className="text-[#08213C] font-bold text-base leading-snug flex-1"
          animate={{ color: hovered ? "#3CB98C" : "#08213C" }}
          transition={{ duration: 0.25 }}
        >
          {post.title}
        </motion.h3>

        {/* Bottom CTA row */}
        <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between">
          <motion.span
            className="flex items-center gap-1.5 text-sm font-semibold"
            animate={{ color: hovered ? "#3CB98C" : "#08213C", x: hovered ? 4 : 0 }}
            transition={{ duration: 0.22 }}
          >
            Read More
            <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.22 }}>
              <ArrowUpRight size={14} />
            </motion.span>
          </motion.span>

          {/* Animated pill on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: catColor }}
              >
                <ArrowUpRight size={13} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Border highlight on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ boxShadow: `inset 0 0 0 1.5px ${catColor}80` }}
      />
    </motion.article>
  );
}
