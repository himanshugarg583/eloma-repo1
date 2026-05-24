"use client";

import { useRef } from "react";

import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/data";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(sectionRef);

  return (
    <section id="blogs" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeading
          eyebrow="Insights"
          title="Latest thinking from our group"
          description="Ideas, innovation, and strategy from the Eloma leadership ecosystem."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              data-reveal
              className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="h-32 rounded-2xl bg-gradient-to-br from-forest/10 via-gold/10 to-white" />
              <h3 className="mt-4 text-lg font-semibold text-forest">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-forest/70">
                {post.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
