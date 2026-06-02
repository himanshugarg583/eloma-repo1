"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

export type BlogCardData = {
  id: number;
  slug: string;
  title: string;
  image: StaticImageData;
  author: string;
  category?: string;
  date: string;
  excerpt: string;
};

type BlogCardProps = {
  post: BlogCardData;
};

export default function BlogCard({ post }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 w-full overflow-hidden sm:h-48 bg-white">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-500 ease-out transform-gpu group-hover:scale-105"
        />
      </div>

      <div className="flex h-full flex-col px-4 py-4 sm:px-5 sm:py-5">
        <h2 className="text-[22px] font-semibold leading-tight text-[#173a63] sm:text-[23px]">
          {post.title}
        </h2>

        <div className="mt-3 space-y-1 text-[14px] text-[#55657a]">
          <p>Posted by - {post.author}</p>
          <p>{post.date}</p>
        </div>

        <p className="mt-4 line-clamp-3 text-[15px] leading-6 text-[#5f6674]">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0f5b61]/25 ${
            isHovered
              ? "border-[#173a63] bg-[#173a63] text-white shadow-md shadow-[#173a63]/20"
              : "border-[#d7e7e2] bg-[#eff8f6] text-[#173a63]"
          }`}
        >
          <span>Continue reading</span>
          <span
            className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : "translate-x-0"
            }`}
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}