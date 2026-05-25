"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section
      id="blogs"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="News & Insights"
            title="Latest thinking from our group"
            description="Ideas, innovation, and strategy from leaders across the Eloma Group ecosystem."
          />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            View Newsroom
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href="#"
              data-reveal
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-gold-dark">
                    {post.category}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-forest transition-colors group-hover:text-gold-dark">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  <span>Read article</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          ))}
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
