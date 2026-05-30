"use client";

import React, { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import blogImage from "@/assset/blog/blog.png";
import comingSoonImage from "@/assset/blog/coming-soon.webp";
import { blogCategories, blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>(blogCategories[0]);
  const [page, setPage] = useState<number>(1);
  const pageSize = 6;

  const filtered = useMemo(() => {
    if (activeCategory === "All Blogs") return blogPosts;
    return blogPosts.filter((b) => b.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const visible = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  function goToPage(n: number) {
    setPage(Math.min(Math.max(1, n), totalPages));
    window.scrollTo({ top: 180, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#eef4f8] text-[#23344a]">
      <Navbar />

      <main className="mt-24 pb-[60px] pt-10">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
            <section>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {visible.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              <div className="mt-10 flex justify-center border-t border-[#d9e3ec] pt-6">
                <nav aria-label="Blog pagination" className="flex items-center gap-2 text-[15px] text-[#5a6a7f]">
                  <button
                    onClick={() => goToPage(safePage - 1)}
                    className="px-3 py-1.5 transition-colors duration-300 hover:text-[#0f5b61] disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={safePage <= 1}
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }).map((_, i) => {
                    const n = i + 1;
                    const isActive = n === safePage;
                    return (
                      <button
                        key={n}
                        onClick={() => goToPage(n)}
                        className={`px-3 py-1.5 transition-colors duration-200 ${
                          isActive ? "bg-[#173a63] text-white shadow-sm shadow-[#173a63]/20" : "hover:text-[#0f5b61]"
                        }`}
                      >
                        {n}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => goToPage(safePage + 1)}
                    className="px-3 py-1.5 transition-colors duration-300 hover:text-[#0f5b61] disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={safePage >= totalPages}
                  >
                    Next
                  </button>
                </nav>
              </div>
            </section>

            <BlogSidebar
              topBanner={blogImage}
              bottomBanner={comingSoonImage}
              categories={blogCategories}
              activeCategory={activeCategory}
              onSelectCategory={(c) => {
                setActiveCategory(c);
                setPage(1);
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}