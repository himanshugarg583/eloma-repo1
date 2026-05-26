"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [featured, ...rest] = blogPosts;

  return (
    <section
      id="blogs"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="News & Insights"
            title="Latest thinking from our group"
            description="Ideas, innovation, and strategy from leaders across the Eloma Group ecosystem."
          />
          <MagneticButton strength={10} className="hidden md:inline-flex">
            <Button variant="outline" size="sm">
              View Newsroom
              <ArrowUpRight size={16} />
            </Button>
          </MagneticButton>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="#"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:border-forest hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar size={12} />
                  {featured.date}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-forest transition-colors group-hover:text-gold-dark md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                  {featured.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  <span className="relative">
                    Read article
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-forest transition-all duration-500 group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary stack */}
          <div className="flex flex-col gap-6">
            {rest.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + idx * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link
                  href="#"
                  className="group grid flex-1 grid-cols-[180px_1fr] gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:border-forest hover:shadow-card-hover sm:grid-cols-[220px_1fr]"
                >
                  <div className="relative aspect-square h-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="220px"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col py-5 pr-5">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-semibold uppercase tracking-wider text-gold-dark">
                        {post.category}
                      </span>
                      <span className="text-slate-300">|</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar size={11} />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-forest transition-colors group-hover:text-gold-dark">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {post.description}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-forest">
                      <span>Read more</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" size="sm">
            View Newsroom
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
