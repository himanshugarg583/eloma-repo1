"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    artistName: '@logistics',
    subtitle: 'TRANSPORTATION & LOGISTICS',
    heading: 'Reliable supply chain\nand freight services.',
    videoLabel: 'We Are Eloma',
    videoSub: 'Our story, our mission',
    videoUrl: '/videos/eloma-experience.mp4',
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    artistName: '@digital',
    subtitle: 'DIGITAL & TECHNOLOGY',
    heading: 'Enterprise digital innovation\nand cloud systems.',
    videoLabel: 'Built for the Future',
    videoSub: 'Technology at our core',
    videoUrl: '/videos/eloma-office-1.mp4',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    artistName: '@security',
    subtitle: 'SECURITY & RISK MANAGEMENT',
    heading: 'Robust virtual security\nand threat monitoring.',
    videoLabel: 'Securing What Matters',
    videoSub: 'Protection across all verticals',
    videoUrl: '/videos/eloma-office-1.mp4',
  },
  {
    image: 'https://images.unsplash.com/photo-1521791136364-7286475269a9?auto=format&fit=crop&w=1200&q=80',
    artistName: '@support',
    subtitle: 'CUSTOMER SUPPORT & CALL CENTER',
    heading: 'Omnichannel communication\nand customer solutions.',
    videoLabel: 'People First',
    videoSub: 'Our support culture',
    videoUrl: '/videos/eloma-office-2.mp4',
  },
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    artistName: '@travel',
    subtitle: 'TRAVEL AND TOURISM',
    heading: 'Global travel administration\nand leisure support.',
    videoLabel: 'See the World with Us',
    videoSub: 'Global travel solutions',
    videoUrl: '/videos/eloma-office-2.mp4',
  },
];

/* ── Video Modal — rendered via portal directly into document.body ── */
function VideoModal({ url, onClose }: { url: string; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '90vw', maxWidth: '1100px', position: 'relative' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '-40px', right: 0,
            display: 'flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none',
            cursor: 'pointer', fontSize: '14px', fontWeight: 500,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
        >
          <X size={17} /> Close
        </button>

        {/* 16:9 video player */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <video
            src={url}
            controls
            autoPlay
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}
          />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

/* ── Main Section ────────────────────────────────────────────────── */
export const RevealSection: React.FC = () => {
  const sectionRef       = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const textBlocks = gsap.utils.toArray<HTMLElement>(".slide-content-block");
    const imageBlocks = gsap.utils.toArray<HTMLElement>(".slide-image-block");
    const dots = gsap.utils.toArray<HTMLElement>(".carousel-dot");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Kill old trigger if exists
      ScrollTrigger.getById("revealScrollTrigger")?.kill();

      // Initial states
      textBlocks.forEach((el, i) => {
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          yPercent: i === 0 ? 0 : 40,
          pointerEvents: i === 0 ? "auto" : "none",
          willChange: "transform, opacity",
        });
      });

      imageBlocks.forEach((el, i) => {
        gsap.set(el, {
          yPercent: i === 0 ? 0 : 100,
          zIndex: SLIDES.length - i,
          willChange: "transform",
        });
      });

      dots.forEach((dot, i) => {
        gsap.set(dot, {
          background:
            i === 0 ? "#ffffff" : "rgba(255,255,255,0.4)",
          scale: i === 0 ? 1.25 : 1,
        });
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
        scrollTrigger: {
          id: "revealScrollTrigger",
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${SLIDES.length * 120}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < SLIDES.length - 1; i++) {
        const next = i + 1;

        tl.addLabel(`slide-${i}`);

        // Current text out
        tl.to(
          textBlocks[i],
          {
            opacity: 0,
            yPercent: -60,
            duration: 1,
            pointerEvents: "none",
          },
          `slide-${i}`
        );

        // Next text in
        tl.to(
          textBlocks[next],
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            pointerEvents: "auto",
          },
          `slide-${i}`
        );

        // Current image out
        tl.to(
          imageBlocks[i],
          {
            yPercent: -100,
            duration: 1,
          },
          `slide-${i}`
        );

        // Next image in
        tl.to(
          imageBlocks[next],
          {
            yPercent: 0,
            duration: 1,
          },
          `slide-${i}`
        );

        // Dots
        tl.to(
          dots[i],
          {
            scale: 1,
            background: "rgba(255,255,255,0.4)",
            duration: 0.4,
          },
          `slide-${i}`
        );

        tl.to(
          dots[next],
          {
            scale: 1.25,
            background: "#ffffff",
            duration: 0.4,
          },
          `slide-${i}`
        );
      }

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set(textBlocks, {
        opacity: 1,
        yPercent: 0,
        clearProps: "all",
      });

      gsap.set(imageBlocks, {
        yPercent: 0,
        clearProps: "all",
      });
    });
  }, sectionRef);

  return () => {
    ScrollTrigger.getById("revealScrollTrigger")?.kill();
    ctx.revert();
  };
}, []);

  const handleDotClick = (index: number) => {
    const trigger = ScrollTrigger.getById('revealScrollTrigger');
    if (trigger) {
      const scrollPos = trigger.start + (index / (SLIDES.length - 1)) * (trigger.end - trigger.start);
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    }
  };

  return (
    <>
      {videoUrl && <VideoModal url={videoUrl} onClose={() => setVideoUrl(null)} />}

      <div className="section-card reveal-section-wrapper" ref={sectionRef} style={{ background: '#f8f8f8' }}>
        <section
          id="reveal-section"
          className="w-full relative px-6 md:px-12 py-[80px] md:py-[100px] flex flex-col justify-center min-h-auto lg:min-h-screen"
          style={{ overflow: 'hidden' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full max-w-[1400px] mx-auto">

            {/* Left: Text slides */}
            <div className="lg:col-span-5 flex flex-col justify-center relative min-h-auto lg:min-h-[360px] gap-12 lg:gap-0">
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className="slide-content-block relative lg:absolute lg:inset-0 flex flex-col justify-center opacity-100 lg:opacity-0 pointer-events-auto lg:pointer-events-none"
                >
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(30px,3.8vw,44px)', fontWeight: 700, lineHeight: 1.15, color: '#1a1a1a', whiteSpace: 'pre-line', margin: 0, flex: 1 }}>
                      {slide.heading}
                    </h2>
                    <div style={{ background: '#2d2d2d', color: '#fff', padding: '8px 18px', borderRadius: '24px', fontSize: '13px', fontWeight: 600, fontFamily: "'Inter',sans-serif", whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(0,0,0,0.12)', marginTop: '4px' }}>
                      {slide.artistName}
                    </div>
                  </div>

                  {/* Mobile image with play overlay */}
                  <div className="block lg:hidden w-full rounded-[20px] overflow-hidden shadow-lg aspect-[16/10] bg-[#f0f0f0] mb-4 relative group">
                    <img src={slide.image} alt={slide.artistName} loading="lazy" className="w-full h-full object-cover object-center" />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center">
                      <p className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>
                        {slide.videoLabel}
                      </p>
                      <p className="text-white/60 text-xs mb-4">{slide.videoSub}</p>
                      <button
                        onClick={() => setVideoUrl(slide.videoUrl)}
                        className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/50 bg-white/15 backdrop-blur hover:bg-white/25 transition-all"
                      >
                        <Play size={22} fill="white" className="text-white ml-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image carousel (desktop only) */}
            <div className="hidden lg:block lg:col-span-7 relative w-full">
              <div
                ref={slideContainerRef}
                className="carousel-container w-full relative rounded-[24px] overflow-hidden aspect-[16/10] bg-[#f0f0f0] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                {SLIDES.map((slide, i) => (
                  <div key={i} className="slide-image-block absolute inset-0 overflow-hidden"
                  style={{
  zIndex: SLIDES.length - i,
  backfaceVisibility: "hidden",
  transform: "translateZ(0)"
}}
                  >
                    <img
                      src={slide.image}
                      alt={slide.artistName}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      style={{
  isolation: "isolate"
}}
                    />

                    {/* ── Video overlay on each slide ── */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                    {/* Text + play button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Headline */}
                      <p
                        className="text-white font-black text-center leading-tight mb-1 px-8"
                        style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(1.6rem,3.5vw,2.8rem)' }}
                      >
                        {slide.videoLabel}
                      </p>
                      <p className="text-white/55 text-sm mb-6 tracking-wide">{slide.videoSub}</p>

                      {/* Play button */}
                      <button
                        onClick={() => setVideoUrl(slide.videoUrl)}
                        className="group relative flex items-center justify-center"
                        aria-label={`Play: ${slide.videoLabel}`}
                      >
                        {/* Pulsing ring */}
                        <span
                          className="absolute inline-flex h-24 w-24 rounded-full animate-ping opacity-20"
                          style={{ background: '#3CB98C' }}
                        />
                        {/* Button */}
                        <span
                          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white"
                          style={{ background: 'rgba(60,185,140,0.85)' }}
                        >
                          <Play size={26} fill="white" className="text-white ml-0.5" />
                        </span>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Decorative squares */}
                <div className="absolute top-[28px] left-[28px] flex flex-col z-10 gap-2">
                  <div className="w-[42px] h-[42px] rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]" />
                  <div className="w-[42px] h-[42px] rounded-[12px] bg-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.15)]" />
                </div>

                {/* Dot indicators */}
                <div className="absolute top-[28px] right-[28px] flex gap-[8px] z-10">
                  {SLIDES.map((_, i) => (
                    <div
                      key={i}
                      className="carousel-dot"
                      onClick={() => handleDotClick(i)}
                      style={{ width: '8px', height: '8px', borderRadius: '50%', transition: 'all 0.3s ease', cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};
