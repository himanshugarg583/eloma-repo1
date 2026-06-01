"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useMemo, useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoMark from "@/assset/logo/eloma_logo-removebg-preview.png";
import blogImage from "@/assset/blog/blog.png";
import callCenterImage from "@/assset/blog/call center.png";
import itImage from "@/assset/blog/IT.png";
import supplyChainImage from "@/assset/blog/supply chain.png";
import travelImage from "@/assset/blog/travel.png";

type ReleaseCard = {
  title: string;
  meta: string;
  source: string;
  href: string;
  image?: StaticImageData;
  logoOnly?: boolean;
};

const releases: ReleaseCard[] = [
  {
    title: "Eloma Group unveils next phase of integrated logistics expansion",
    meta: "RIL Communication | 30 Apr, 2026",
    source: "Press Release",
    href: "#",
    image: travelImage
  },
  {
    title: "Leadership update on digital operations and customer support",
    meta: "RIL Communication | 24 Apr, 2026",
    source: "Press Release",
    href: "#",
    logoOnly: true
  },
  {
    title: "Operational statement on regional service performance",
    meta: "RIL Communication | 21 Apr, 2026",
    source: "Press Release",
    href: "#",
    logoOnly: true
  },
  {
    title: "Time to bring our next-generation service platform to market",
    meta: "RIL Communication | 23 Apr, 2026",
    source: "Feature Story",
    href: "#",
    image: callCenterImage
  },
  {
    title: "Eloma Group signs long-term strategic supply partnership",
    meta: "RIL Communication | 16 Mar, 2026",
    source: "Media Statement",
    href: "#",
    logoOnly: true
  },
  {
    title: "Media statement on business growth and portfolio alignment",
    meta: "RIL Communication | 10 Mar, 2026",
    source: "Media Statement",
    href: "#",
    logoOnly: true
  }
];

const resources = [
  {
    title: "Media Kit",
    description: "Brand assets, logos, and corporate reference material.",
    image: blogImage,
    href: "#"
  },
  {
    title: "Videos",
    description: "Event footage, leadership messages, and business highlights.",
    image: itImage,
    href: "#"
  },
  {
    title: "Publications & Brochures",
    description: "Reports, brochures, and downloadable company overviews.",
    image: supplyChainImage,
    href: "#"
  }
  ,
  {
    title: "Annual Reports",
    description: "Consolidated annual and sustainability reports.",
    image: callCenterImage,
    href: "#"
  },
  {
    title: "Brand Guidelines",
    description: "Logo usage, colours, and brand assets.",
    image: blogImage,
    href: "#"
  },
  {
    title: "Investor Kit",
    description: "Investor presentations and financial summaries.",
    image: travelImage,
    href: "#"
  }
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" }
];

const publications = [
  {
    id: 1,
    title: "RIL - At a Glance",
    href: "#",
    image: blogImage
  },
  {
    id: 2,
    title: "Reliance Retail – At a Glance",
    href: "#",
    image: travelImage
  },
  {
    id: 3,
    title: "Jio Platforms Limited – At a Glance",
    href: "#",
    image: itImage
  },
  {
    id: 4,
    title: "Reliance Foundation – At a Glance",
    href: "#",
    image: callCenterImage
  }
];

const videos = [
  {
    id: 1,
    title: "Realising Aspirations – Reliance Corporate Overview 2025",
    href: "#",
    thumb: blogImage
  },
  {
    id: 2,
    title: "RIL Corporate Video: An Overview",
    href: "#",
    thumb: travelImage
  },
  {
    id: 3,
    title: "The Reliance Journey: From Modest Beginnings",
    href: "#",
    thumb: itImage
  },
  {
    id: 4,
    title: "Creating Exponential Value for India",
    href: "#",
    thumb: supplyChainImage
  }
];

function ReleaseCardItem({ release, index }: { release: ReleaseCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        href={release.href}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#d9e5e1] bg-white shadow-[0_12px_40px_rgba(8,33,60,0.06)] transition-all duration-300 hover:border-[#0f5b61]/35 hover:shadow-[0_18px_50px_rgba(8,33,60,0.1)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#f6fbfa] via-white to-[#edf4f8]">
          {release.logoOnly ? (
            <div className="flex h-full items-center justify-center p-8">
              <div className="rounded-[22px] bg-white/85 px-6 py-8 shadow-[0_10px_30px_rgba(8,33,60,0.06)] ring-1 ring-[#dce7e4] transition-transform duration-500 group-hover:scale-[1.02]">
                <Image src={logoMark} alt="Eloma Group logo" className="h-18 w-auto sm:h-20" priority={false} />
              </div>
            </div>
          ) : (
            <Image
              src={release.image!}
              alt={release.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-center transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#08213C]/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0f5b61]">{release.source}</p>
          <h3 className="mt-3 text-[18px] font-semibold leading-snug text-[#08213C] transition-colors duration-300 group-hover:text-[#0f5b61]">
            {release.title}
          </h3>
          <p className="mt-4 text-sm text-[#5b6878]">{release.meta}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#08213C] transition-colors duration-300 group-hover:text-[#0f5b61]">
            <span>Read more</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function ResourceTile({ item, index }: { item: (typeof resources)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={item.href}
        className="group flex h-full flex-col overflow-hidden rounded-[22px] bg-white text-[#08213C] shadow-[0_12px_30px_rgba(8,33,60,0.14)] transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#d9ebe5]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08213C]/25 via-transparent to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-[20px] font-semibold text-[#08213C] transition-colors group-hover:text-[#0f5b61]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#55657a]">{item.description}</p>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cde2db] px-4 py-2 text-sm font-semibold text-[#08213C] transition-colors group-hover:border-[#0f5b61] group-hover:bg-[#0f5b61] group-hover:text-white">
              view all
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function NewsroomPage() {
  const [activeTab, setActiveTab] = useState<"press" | "videos" | "publications">("press");
  const [pubSearch, setPubSearch] = useState("");
  const resourceCarouselRef = useRef<HTMLDivElement | null>(null);
  const [resourcePaused, setResourcePaused] = useState(false);
  const [resourceIndex, setResourceIndex] = useState(0);
  const resourceInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (resourcePaused) return;
    const id = setInterval(() => {
      setResourceIndex((s) => (s + 1) % resources.length);
    }, 3500);
    return () => clearInterval(id);
  }, [resourcePaused]);

  // Reliable scroll helper for resource carousel
  function scrollResource(delta: number) {
    console.log('scrollResource called', { delta });
    setResourceIndex((cur) => {
      let next = cur + delta;
      if (next < 0) next = 0;
      if (next >= resources.length) next = resources.length - 1;
      console.log('resourceIndex', { cur, next });
      return next;
    });
  }

  // scroll selected child into view when index changes
  useEffect(() => {
    const container = resourceCarouselRef.current ?? (document.getElementById("resource-carousel") as HTMLDivElement | null);
    const inner = resourceInnerRef.current;
    if (!container || !inner) {
      console.log('carousel container/inner not found');
      return;
    }
    const children = Array.from(inner.children) as HTMLElement[];
    const clamped = Math.max(0, Math.min(resourceIndex, children.length - 1));
    const child = children[clamped];
    if (!child) return;

    const childLeft = child.offsetLeft;
    const childWidth = child.clientWidth;
    const containerWidth = container.clientWidth;
    // compute desired center position (may be outside maxTranslate)
    const desired = childLeft - (containerWidth - childWidth) / 2;
    console.log('scroll to (desired)', { resourceIndex, childLeft, childWidth, containerWidth, desired, innerScrollWidth: inner.scrollWidth });
    inner.style.transform = `translateX(${-desired}px)`;
  }, [resourceIndex]);

  const filteredPublications = useMemo(() => {
    if (!pubSearch.trim()) return publications;
    return publications.filter((p) => p.title.toLowerCase().includes(pubSearch.toLowerCase()));
  }, [pubSearch]);

  return (
    <div className="min-h-screen bg-white text-[#08213C]">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-[#e4ece8] bg-[linear-gradient(180deg,#f8fbfa_0%,#ffffff_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,91,97,0.12),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(8,33,60,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(60,185,140,0.14),_transparent_28%)]" />
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-[#0f5b61]/10 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-16 bottom-4 h-56 w-56 rounded-full bg-[#08213C]/8 blur-3xl"
          />

          <div className="container-x relative py-5 text-sm text-[#5b6878]">
            <div className="flex items-center gap-2">
              <Link href="/" className="transition-colors hover:text-[#0f5b61]">
                Home
              </Link>
              <span className="text-[#a6b5af]">/</span>
              <span className="text-[#08213C]">News & Media</span>
            </div>
          </div>

          <div className="container-x relative pb-12 pt-4 md:pb-16 md:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center rounded-full border border-[#cfe2db] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0f5b61] shadow-sm">
                Newsroom
              </span>
              <h1 className="mt-6 font-display text-4xl leading-[1.02] tracking-tight text-[#08213C] md:text-6xl lg:text-[4.8rem]">
                Press Releases
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#55657a] md:text-lg">
                The latest company announcements, media statements, and corporate updates from across the group.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container-x py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {releases.map((release, index) => (
                <ReleaseCardItem key={`${release.title}-${index}`} release={release} index={index} />
              ))}
            </div>
          </motion.div>

          <div className="mt-10 flex justify-center md:mt-12">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-[#cddcd7] bg-white px-5 py-3 text-sm font-semibold text-[#08213C] shadow-sm transition-all duration-300 hover:border-[#0f5b61] hover:bg-[#0f5b61] hover:text-white"
            >
              view more
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Publications & Videos Tabs */}
        <section className="container-x py-12 md:py-16">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab("press")}
                  className={`rounded-md px-4 py-2 text-sm font-semibold ${activeTab === "press" ? "bg-[#f3f8f6] text-[#0f5b61]" : "text-[#55657a] hover:text-[#0f5b61]"}`}
                >
                  Press Releases
                </button>
                <button
                  onClick={() => setActiveTab("publications")}
                  className={`rounded-md px-4 py-2 text-sm font-semibold ${activeTab === "publications" ? "bg-[#f3f8f6] text-[#0f5b61]" : "text-[#55657a] hover:text-[#0f5b61]"}`}
                >
                  Publications & Brochures
                </button>
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`rounded-md px-4 py-2 text-sm font-semibold ${activeTab === "videos" ? "bg-[#f3f8f6] text-[#0f5b61]" : "text-[#55657a] hover:text-[#0f5b61]"}`}
                >
                  Videos
                </button>
              </div>
              <div>
                {activeTab === "publications" && (
                  <div className="flex items-center gap-3">
                    <input
                      type="search"
                      placeholder="Search"
                      value={pubSearch}
                      onChange={(e) => setPubSearch(e.target.value)}
                      className="rounded border border-[#e2e8e5] px-3 py-2 text-sm outline-none"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              {activeTab === "publications" && (
                <div>
                  <p className="text-sm text-[#66757a]">Displaying {filteredPublications.length} items</p>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPublications.map((p) => (
                      <article key={p.id} className="group overflow-hidden rounded-lg border bg-white shadow-sm">
                        <Link href={p.href} className="block">
                          <div className="relative h-44 w-full overflow-hidden bg-[#f3f7f5]">
                            <Image src={p.image} alt={p.title} fill className="object-cover" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-[#08213C]">{p.title}</h4>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "videos" && (
                <div>
                  <p className="text-sm text-[#66757a]">1 - {videos.length} of {videos.length}</p>
                  <div className="mt-4 grid gap-6 md:grid-cols-2">
                    {videos.map((v) => (
                      <article key={v.id} className="group flex gap-4 overflow-hidden rounded-lg border bg-white p-4 shadow-sm">
                        <div className="relative h-36 w-56 flex-shrink-0 overflow-hidden rounded">
                          <Image src={v.thumb} alt={v.title} fill className="object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#08213C]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M5 3v18l15-9L5 3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-[#08213C]">{v.title}</h4>
                            <p className="mt-2 text-sm text-[#55657a]">Share: <span className="inline-flex items-center gap-2">{/* icons */}</span></p>
                          </div>
                          <div className="mt-4">
                            <button className="rounded-md bg-[#0f5b61] px-4 py-2 text-sm font-semibold text-white">View Transcript</button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "press" && (
                <div>
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {releases.map((release, index) => (
                      <ReleaseCardItem key={`${release.title}-${index}`} release={release} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#08213C] py-14 text-white md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(60,185,140,0.22),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(15,91,97,0.35),_transparent_36%)]" />
          <div className="container-x relative grid gap-8 lg:grid-cols-[1fr_2.1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5ed0a9] before:h-px before:w-8 before:bg-[#5ed0a9] before:content-['']">
                Resource Centre
              </span>
              <h2 className="mt-5 max-w-sm font-display text-4xl leading-tight tracking-tight md:text-[3.6rem]">
                Media assets and corporate materials in one place.
              </h2>
            </motion.div>

            <div className="hidden">
              {/** static grid hidden in favor of carousel */}
            </div>

            {/* Carousel for resources (visible on all screens) */}
            <div className="mt-6">
              <div className="relative">

                <div
                  id="resource-carousel"
                  ref={resourceCarouselRef}
                  onMouseEnter={() => setResourcePaused(true)}
                  onMouseLeave={() => setResourcePaused(false)}
                  onFocus={() => setResourcePaused(true)}
                  onBlur={() => setResourcePaused(false)}
                  onTouchStart={() => setResourcePaused(true)}
                  onTouchEnd={() => setResourcePaused(false)}
                  className="-mx-4 overflow-hidden px-4 py-2"
                >
                  <div ref={resourceInnerRef} className="flex gap-6 transition-transform duration-500">
                    {resources.map((item, index) => (
                      <div key={`res-${index}`} className="w-[300px] flex-shrink-0">
                        <ResourceTile item={item} index={index} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-3">
                <button type="button" aria-label="Previous resource" onClick={() => scrollResource(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e3df] bg-white text-[#08213C] shadow-sm hover:bg-[#f3f7f5]"
                >
                  <ChevronLeft size={18} />
                </button>

                <button type="button" aria-label="Next resource" onClick={() => scrollResource(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e3df] bg-white text-[#08213C] shadow-sm hover:bg-[#f3f7f5]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e7eeeb] bg-white py-12 md:py-14">
          <div className="container-x grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f5b61]">Subscribe to our news alerts</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-[#08213C] md:text-4xl">
                Be first to receive new releases and media statements.
              </h2>
              <form className="mt-6 flex max-w-xl overflow-hidden rounded-full border border-[#d7e3df] bg-[#f6faf8] shadow-[0_10px_30px_rgba(8,33,60,0.05)]">
                <label className="sr-only" htmlFor="newsroom-email">
                  Email address
                </label>
                <input
                  id="newsroom-email"
                  type="email"
                  placeholder="Email Id"
                  className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm text-[#08213C] outline-none placeholder:text-[#8997a5]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0f5b61] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#08213C]"
                >
                  <Mail size={16} />
                  Subscribe
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 lg:justify-end"
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d0a14b] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#0f5b61]"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
