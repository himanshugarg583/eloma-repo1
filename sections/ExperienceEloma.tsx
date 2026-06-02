"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Office clips (copied into /public/videos). Two stacked <video> elements
   cross-fade between them so there is no src-swap blank/flash. */
const CLIP_A = "/videos/eloma-office-1.mp4";
const CLIP_B = "/videos/eloma-office-2.mp4";

const ANIM_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

/**
 * "Experience Eloma" — cyntexa-style scroll moment.
 *
 * A full-white SVG overlay has the word "Eloma" knocked out (SVG mask), so the
 * office video shows only THROUGH the letters. On scroll the pinned overlay
 * scales up AND fades out, resolving to a clean full-screen video that cycles
 * through both office clips; a final white layer fades in so the section
 * "closes" into the next one. Desktop + motion only — otherwise a plain video
 * with a heading is shown (and reduced-motion does not autoplay).
 */
export default function ExperienceEloma() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<SVGSVGElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const vaRef = useRef<HTMLVideoElement>(null);
  const vbRef = useRef<HTMLVideoElement>(null);

  // Which clip is on top (0 = A, 1 = B). Drives the cross-fade.
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  // Drives both rendering and animation off the SAME condition (width + motion),
  // so there is no inconsistency between CSS gating and the GSAP gate.
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(ANIM_QUERY);
    const update = () => setAnimated(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* Cross-fade playback + play/pause tied to viewport (no eager download,
     no decode work while off-screen, respects reduced-motion). */
  useEffect(() => {
    const a = vaRef.current;
    const b = vbRef.current;
    const sec = sectionRef.current;
    if (!a || !b || !sec) return;
    a.muted = true;
    b.muted = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onEndA = () => setActive(1);
    const onEndB = () => setActive(0);
    if (!reduce) {
      a.addEventListener("ended", onEndA);
      b.addEventListener("ended", onEndB);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduce) return;
        if (entry.isIntersecting) {
          // start buffering only once we're near the section
          a.preload = "auto";
          b.preload = "auto";
          (activeRef.current === 0 ? a : b).play().catch(() => {});
        } else {
          a.pause();
          b.pause();
        }
      },
      { threshold: 0, rootMargin: "300px 0px" }
    );
    io.observe(sec);

    return () => {
      a.removeEventListener("ended", onEndA);
      b.removeEventListener("ended", onEndB);
      io.disconnect();
    };
  }, []);

  // Play the newly-active clip from its start, pause the other.
  useEffect(() => {
    activeRef.current = active;
    const a = vaRef.current;
    const b = vbRef.current;
    if (!a || !b) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cur = active === 0 ? a : b;
    const other = active === 0 ? b : a;
    other.pause();
    try {
      cur.currentTime = 0;
    } catch {
      /* ignore */
    }
    cur.play().catch(() => {});
  }, [active]);

  /* Scroll choreography — only when animated (md+ & motion). */
  useEffect(() => {
    if (!animated) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
          pinType: "transform", // works inside <main className="overflow-clip">
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // 1) grow the knocked-out word
      tl.to(maskRef.current, { scale: 24, ease: "power2.inOut", duration: 1 }, 0);
      tl.to(labelRef.current, { autoAlpha: 0, y: -40, duration: 0.4 }, 0);
      // 2) fade the overlay away → guaranteed clean full-screen video
      tl.to(maskRef.current, { autoAlpha: 0, duration: 0.3 }, 0.9);
      // 3) short full-screen-video beat (the clips autoplay) ≈ 1.2 → 1.9
      // 4) close to white so the next section appears seamlessly
      tl.to(fadeRef.current, { autoAlpha: 1, duration: 0.5 }, 1.9);
    }, sectionRef);
    return () => ctx.revert();
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      id="experience-eloma"
      className="relative h-[72vh] w-full overflow-hidden bg-forest md:h-screen"
    >
      {/* Accessible heading on every path (the visible word lives in the decorative SVG). */}
      <h2 className="sr-only">Experience Eloma</h2>

      {/* Two cross-fading office clips */}
      <video
        ref={vaRef}
        src={CLIP_A}
        muted
        playsInline
        preload="none"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          active === 0 ? "opacity-100" : "opacity-0"
        }`}
      />
      <video
        ref={vbRef}
        src={CLIP_B}
        muted
        playsInline
        preload="none"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          active === 1 ? "opacity-100" : "opacity-0"
        }`}
      />

      {animated ? (
        <>
          {/* White overlay with "Eloma" knocked out; scaled + faded on scroll */}
          <svg
            ref={maskRef}
            className="absolute inset-0 h-full w-full"
            style={{ transformOrigin: "center center" }}
            aria-hidden
          >
            <defs>
              <mask id="eloma-experience-mask">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="black"
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    fontWeight: 900,
                    fontSize: "19vw",
                    letterSpacing: "-0.04em"
                  }}
                >
                  Eloma
                </text>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="#ffffff"
              mask="url(#eloma-experience-mask)"
            />
          </svg>

          {/* "Experience" kicker above the word */}
          <div
            ref={labelRef}
            className="pointer-events-none absolute inset-x-0 top-[24%] z-20 text-center"
          >
            <p className="font-display text-2xl font-medium tracking-tight text-forest lg:text-4xl">
              Experience
            </p>
          </div>

          {/* Closing fade to white */}
          <div
            ref={fadeRef}
            className="pointer-events-none absolute inset-0 z-30 bg-white opacity-0"
            aria-hidden
          />
        </>
      ) : (
        /* Mobile / reduced-motion: plain video with a clearly-legible heading */
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-black/50 via-black/35 to-black/70 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85 drop-shadow">
            Experience
          </p>
          <p className="mt-2 font-display text-5xl font-black tracking-tight text-white drop-shadow-lg">
            Eloma
          </p>
        </div>
      )}
    </section>
  );
}
