'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DIVISIONS } from '@/lib/data';
import LazyVideo from '@/components/ui/LazyVideo';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 3 — "Business Universe".
 *
 * Desktop: a CSS `position: sticky` horizontal scroll. The outer wrapper is
 * tall (one viewport-height of runway per panel); an inner sticky stage stays
 * pinned to the top while the user scrolls, and the flex track is translated
 * left in proportion to scroll progress. We use ScrollTrigger only to *read*
 * progress — NOT to pin — which avoids the pin-spacer bugs (blank gap /
 * duplicated last panel) that the previous GSAP-pin version suffered from.
 *
 * Mobile / reduced-motion: a plain vertical stack of cards.
 */
export default function BusinessUniverse() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const rootEl = root.current!;
      const trackEl = track.current!;

      // Make the vertical runway exactly match the horizontal travel distance,
      // so 1px of vertical scroll == 1px of horizontal slide. The runway height
      // is (track width) so the page scrolls one extra "track minus viewport".
      const setHeight = () => {
        rootEl.style.height = `${trackEl.scrollWidth}px`;
      };
      setHeight();

      const distance = () => trackEl.scrollWidth - window.innerWidth;

      const st = ScrollTrigger.create({
        trigger: rootEl,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
        onRefresh: setHeight,
        onUpdate: (self) => {
          gsap.set(trackEl, { x: -distance() * self.progress });
          if (progress.current) gsap.set(progress.current, { scaleX: self.progress });
        },
      });

      return () => {
        st.kill();
        rootEl.style.height = '';
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="businesses" ref={root} className="relative bg-paper">
      {/* Sticky stage: on desktop it sticks to the top and holds the viewport;
          on mobile it's a normal block that simply stacks the panels. */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        {/* Heading rail */}
        <div className="container-luxe px-6 pt-28 md:px-12 lg:absolute lg:left-12 lg:top-12 lg:z-30 lg:pt-0">
          <div className="flex items-center gap-4">
            <span className="font-sans text-sm text-emerald-600/80">03</span>
            <span className="h-50px w-10 bg-emerald-600/50" />
            <span className="eyebrow text-3xl font-bold-900 h-28">The Business Universe</span>
          </div>
        </div>

        <ScrollHint />

        {/* Horizontal track */}
        <div
          ref={track}
          className="flex flex-col gap-24 px-6 py-16 lg:h-screen lg:w-max lg:flex-row lg:flex-nowrap lg:items-stretch lg:gap-0 lg:px-0 lg:py-0"
        >
          {/* Intro panel */}
          <div className="bu-panel flex shrink-0 items-center lg:h-screen lg:w-screen lg:px-[10vw]">
            <div className="bu-content max-w-xl">
              <h2 className="font-sans text-5xl font-light leading-[1] text-navy md:text-7xl lg:text-8xl">
                Four worlds.
                <br />
                <span className="italic text-grad">One universe.</span>
              </h2>
              <p className="mt-8 max-w-md text-navy/60">
                Each Eloma business is a universe of its own — distinct, ambitious, and
                best-in-class. Scroll sideways through the constellation.
              </p>
              <div className="mt-8 hidden items-center gap-3 text-sm text-emerald-600/80 lg:flex">
                <span>Scroll to travel</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>

          {/* Division chapters */}
          {DIVISIONS.map((d) => (
            <article
              key={d.id}
              className="bu-panel group relative flex shrink-0 items-end overflow-hidden rounded-3xl lg:h-screen lg:w-screen lg:rounded-none"
            >
              {/* media */}
              <div className="bu-media absolute inset-0 -z-0">
                <LazyVideo className="h-full w-full object-cover" src={d.video} poster={d.poster} />
                {/* white scrims so navy text stays legible over footage */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent" />
              </div>

              {/* content */}
              <div className="bu-content relative z-10 max-w-2xl p-8 md:p-16 lg:p-[8vw]">
                <span className="font-sans text-sm font-medium" style={{ color: d.accent }}>
                  {d.index} / {String(DIVISIONS.length).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-sans text-4xl font-light leading-[1] text-navy md:text-7xl">
                  {d.name.replace('Eloma ', '')}
                </h3>
                <p className="mt-2 text-lg italic text-emerald-700">{d.tagline}</p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/70 md:text-base">
                  {d.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {d.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="rounded-full border border-navy/15 bg-white/70 px-3 py-1 text-xs text-navy/75 backdrop-blur-md"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-baseline gap-3">
                  <span className="font-sans text-4xl text-navy">{d.metric.value}</span>
                  {/* <span className="text-xs uppercase tracking-wider text-navy/55">
                    {d.metric.label}
                  </span> */}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* progress rail (desktop) */}
        <div className="absolute bottom-8 left-1/2 z-30 hidden h-px w-64 -translate-x-1/2 overflow-hidden bg-navy/15 lg:block">
          <span
            ref={progress}
            className="block h-full origin-left scale-x-0 bg-gradient-to-r from-emerald-600 to-emerald-500"
          />
        </div>
      </div>
    </section>
  );
}

function ScrollHint() {
  return (
    <div className="pointer-events-none absolute right-12 top-12 z-30 hidden items-center gap-2 text-xs text-navy/45 lg:flex">
      <span className="font-sans">↓ scrolls →</span>
    </div>
  );
}
