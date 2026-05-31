"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue
} from "framer-motion";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

/**
 * Gallery photo layout — defines target scatter positions, sizes and
 * stacking. Both careers and about pages share this exact data.
 */
const GALLERY = [
  // 0 — Top-left small (office meeting)
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Cross-team review",
    tx: -36, ty: -22, rotate: -3, w: 18, hAspect: "16 / 11", z: 2
  },
  // 1 — Mid-left BIG (pool table — prominent card in the initial stack)
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "Team off-site",
    tx: -36, ty: 6, rotate: -2, w: 22, hAspect: "4 / 5", z: 5
  },
  // 2 — Bottom-centre-left (gaming console)
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    alt: "Workshop",
    tx: -12, ty: 28, rotate: 2, w: 18, hAspect: "16 / 11", z: 2
  },
  // 3 — Centre BIG (meeting room — central anchor of the scatter)
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    alt: "Leadership meeting",
    tx: 0, ty: 2, rotate: 1, w: 22, hAspect: "16 / 11", z: 4
  },
  // 4 — Bottom-centre (headphones)
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    alt: "Quiet focus",
    tx: 14, ty: 28, rotate: -1, w: 17, hAspect: "1 / 1", z: 3
  },
  // 5 — Top-right small (laptop collab) — mirrors photo 0
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    alt: "Office life",
    tx: 36, ty: -22, rotate: 2, w: 18, hAspect: "16 / 11", z: 2
  },
  // 6 — Right BIG (cricket) — mirrors photo 1
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    alt: "Team sports",
    tx: 36, ty: 6, rotate: 3, w: 22, hAspect: "4 / 3", z: 3
  }
];

/* ------------------------------------------------------------------ */
/* PUBLIC COMPONENT                                                    */
/* ------------------------------------------------------------------ */

/**
 * Gallery — two presentations driven off the same data:
 *
 *  • Mobile (< md):   static polaroid-style grid.
 *  • Desktop (md+):   pinned scroll-driven scatter — photos start stacked at
 *    centre and fan outward, revealing the title above as the user scrolls.
 *
 * Reused on /careers and /about. Title/description default to the
 * "Life at Eloma" copy but can be overridden by the parent if needed.
 */
export default function GallerySection({
  title = "Gallery",
  description = "Step behind the curtain and witness the behind-the-scenes of Life at Eloma."
}: {
  title?: string;
  description?: string;
}) {
  return (
    <>
      <GalleryMobile title={title} description={description} />
      <GalleryDesktop title={title} description={description} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* MOBILE — simple static polaroid grid                                */
/* ------------------------------------------------------------------ */

function GalleryMobile({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white py-16 md:hidden">
      <div className="container-x">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-forest">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3">
          {GALLERY.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={cn(
                "relative overflow-hidden rounded-xl border border-white bg-white p-1.5 shadow-card-hover",
                i === 1 || i === 3 || i === 6 ? "col-span-2" : ""
              )}
            >
              <div
                className="relative w-full overflow-hidden rounded-lg"
                style={{ aspectRatio: p.hAspect }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* DESKTOP — pinned scroll-driven scatter                              */
/* ------------------------------------------------------------------ */

function GalleryDesktop({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Title at TOP CENTRE — fades from 0 → 1 as the photo cards scatter
  // outward and reveal it.
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65],
    [0, 0.6, 1]
  );

  const cueOpacity = useTransform(scrollYProgress, [0, 0.05, 0.4], [1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative hidden bg-white md:block"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full">
          {/* Title at top centre (only opacity is animated so Tailwind's
              -translate-x-1/2 horizontal centring still works). */}
          <motion.div
            style={{ opacity: titleOpacity }}
            className="absolute left-1/2 top-[8%] -translate-x-1/2 px-6 text-center"
          >
            <h2 className="font-display text-4xl font-bold tracking-tight text-forest lg:text-5xl xl:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500 md:text-base">
              {description}
            </p>
          </motion.div>

          {/* Photos — centred on the viewport, fan outward from the stack */}
          {GALLERY.map((p, i) => (
            <GalleryPhoto
              key={i}
              photo={p}
              progress={scrollYProgress}
              index={i}
            />
          ))}

          {/* Soft scroll cue (fades out once user has scrolled in) */}
          <motion.div
            style={{ opacity: cueOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-400">
              Scroll to scatter
            </p>
            <span className="mx-auto mt-2 block h-6 w-px animate-bounce bg-gold-dark/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* GALLERY PHOTO — individual scatter card                             */
/* ------------------------------------------------------------------ */

function GalleryPhoto({
  photo,
  progress,
  index
}: {
  photo: (typeof GALLERY)[number];
  progress: MotionValue<number>;
  index: number;
}) {
  // Slight stagger so cards don't move in perfect unison.
  const start = 0.04 + index * 0.018;
  const end = 0.72;

  const x = useTransform(progress, [start, end], ["0vw", `${photo.tx}vw`]);
  const y = useTransform(progress, [start, end], ["0vh", `${photo.ty}vh`]);
  const scale = useTransform(progress, [0, 0.3, end], [0.92, 0.96, 1]);

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        // Static rotation creates the fanned-deck initial stack.
        rotate: photo.rotate,
        zIndex: photo.z,
        width: `${photo.w}vw`,
        minWidth: 240,
        maxWidth: 540,
        aspectRatio: photo.hAspect
      }}
      // Tailwind's `-translate-x-1/2 -translate-y-1/2` would be overridden
      // by Motion's `style.x/y` (both write to `transform`). Injecting the
      // -50%/-50% centring via `transformTemplate` keeps the photo's
      // CENTRE on the viewport centre when x/y are zero.
      transformTemplate={(_, gen) => `translate(-50%, -50%) ${gen}`}
      className="absolute left-1/2 top-1/2 will-change-transform"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white bg-white p-1 shadow-card-hover">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="40vw"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
