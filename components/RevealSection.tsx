import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    artistName: '@logistics',
    subtitle: 'TRANSPORTATION & LOGISTICS',
    heading: 'Reliable supply chain\nand freight services.',
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    artistName: '@digital',
    subtitle: 'DIGITAL & TECHNOLOGY',
    heading: 'Enterprise digital innovation\nand cloud systems.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    artistName: '@security',
    subtitle: 'SECURITY & RISK MANAGEMENT',
    heading: 'Robust virtual security\nand threat monitoring.',
  },
  {
    image: 'https://images.unsplash.com/photo-1521791136364-7286475269a9?auto=format&fit=crop&w=1200&q=80',
    artistName: '@support',
    subtitle: 'CUSTOMER SUPPORT & CALL CENTER',
    heading: 'Omnichannel communication\nand customer solutions.',
  },
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    artistName: '@travel',
    subtitle: 'TRAVEL AND TOURISM',
    heading: 'Global travel administration\nand leisure support.',
  },
];

export const RevealSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textBlocks = gsap.utils.toArray<HTMLElement>(".slide-content-block");
      const imageBlocks = gsap.utils.toArray<HTMLElement>(".slide-image-block");
      const dots = gsap.utils.toArray<HTMLElement>(".carousel-dot");

      const mm = gsap.matchMedia();

      // Desktop animations (min-width: 1024px)
      mm.add("(min-width: 1024px)", () => {
        // Initial state:
        // Slide 0 is fully active
        gsap.set(textBlocks[0], { opacity: 1, yPercent: 0, pointerEvents: 'auto' });
        gsap.set(imageBlocks[0], { yPercent: 0 });
        gsap.set(dots[0], { background: '#fff', scale: 1.25 });

        // Slide 1 to 4 are positioned below (off-screen vertically) or hidden
        for (let i = 1; i < SLIDES.length; i++) {
          gsap.set(textBlocks[i], { opacity: 0, yPercent: 40, pointerEvents: 'none' });
          gsap.set(imageBlocks[i], { yPercent: 100 }); // Slides sit completely below Slide 0
          gsap.set(dots[i], { background: 'rgba(255, 255, 255, 0.4)', scale: 1 });
        }

        // Create main timeline linked to vertical scroll pinning
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "revealScrollTrigger",
            trigger: sectionRef.current,
            start: "top top",
            end: "+=350%", // 350% for tight, polished progression
            pin: true,
            scrub: 1, // Smooth scrolling
            invalidateOnRefresh: true,
          }
        });

        // Add vertical scrolling transitions between slides
        for (let i = 0; i < SLIDES.length - 1; i++) {
          const nextIdx = i + 1;
          const timeLabel = `slide_${i}`;

          // TEXT TRANSITION: Slide i scrolls up and fades out; Slide nextIdx scrolls up from below and fades in
          tl.to(textBlocks[i], {
            opacity: 0,
            yPercent: -40,
            pointerEvents: 'none',
            duration: 1,
            ease: "power1.inOut"
          }, timeLabel);

          tl.to(textBlocks[nextIdx], {
            opacity: 1,
            yPercent: 0,
            pointerEvents: 'auto',
            duration: 1,
            ease: "power1.inOut"
          }, timeLabel);

          // IMAGE TRANSITION: Vertical slide parallax
          // Slide i slides up slightly (parallax exit)
          tl.to(imageBlocks[i], {
            yPercent: -30,
            duration: 1,
            ease: "power1.inOut"
          }, timeLabel);

          // Slide nextIdx slides up from 100% to 0% (card overlap)
          tl.to(imageBlocks[nextIdx], {
            yPercent: 0,
            duration: 1,
            ease: "power1.inOut"
          }, timeLabel);

          // DOTS TRANSITION
          tl.to(dots[i], {
            background: 'rgba(255,255,255,0.4)',
            scale: 1,
            duration: 0.5
          }, timeLabel);

          tl.to(dots[nextIdx], {
            background: '#fff',
            scale: 1.25,
            duration: 0.5
          }, timeLabel);
        }
      });

      // Mobile / Tablet defaults (max-width: 1023px)
      mm.add("(max-width: 1023px)", () => {
        // Reset properties to standard responsive layouts
        gsap.set(textBlocks, { opacity: 1, yPercent: 0, pointerEvents: 'auto', position: 'relative' });
        gsap.set(imageBlocks, { yPercent: 0, position: 'relative' });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleDotClick = (index: number) => {
    const trigger = ScrollTrigger.getById("revealScrollTrigger");
    if (trigger) {
      // Calculate scroll coordinate of target slide
      const scrollPos = trigger.start + (index / (SLIDES.length - 1)) * (trigger.end - trigger.start);
      window.scrollTo({
        top: scrollPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="section-card reveal-section-wrapper" ref={sectionRef} style={{ background: '#f8f8f8' }}>
      <section
        id="reveal-section"
        className="w-full relative px-6 md:px-12 py-[80px] md:py-[100px] flex flex-col justify-center min-h-auto lg:min-h-screen"
        style={{ overflow: 'hidden' }}
      >
        {/* Responsive layout: Text Left, Stacked Carousel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full max-w-[1400px] mx-auto">
          
          {/* Left Column: Stacked Text Slides on Desktop, Sequential list on mobile */}
          <div className="lg:col-span-5 flex flex-col justify-center relative min-h-auto lg:min-h-[360px] gap-12 lg:gap-0">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className="slide-content-block relative lg:absolute lg:inset-0 flex flex-col justify-center opacity-100 lg:opacity-0 pointer-events-auto lg:pointer-events-none"
              >
                {/* Subtitle */}
                <p
                  className="carousel-subtitle"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#999',
                    marginBottom: '16px',
                  }}
                >
                  {slide.subtitle}
                </p>

                {/* Heading + @mention bubble */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <h2
                    className="carousel-heading"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 'clamp(30px, 3.8vw, 44px)',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      color: '#1a1a1a',
                      whiteSpace: 'pre-line',
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {slide.heading}
                  </h2>

                  <div
                    className="carousel-mention w-fit self-start sm:self-auto"
                    style={{
                      background: '#2d2d2d',
                      color: '#fff',
                      padding: '8px 18px',
                      borderRadius: '24px',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                      marginTop: '4px',
                    }}
                  >
                    {slide.artistName}
                  </div>
                </div>

                {/* Inline Image - Visible ONLY on mobile/tablet */}
                <div className="block lg:hidden w-full rounded-[20px] overflow-hidden shadow-lg aspect-[16/10] bg-[#f0f0f0] mb-4">
                  <img
                    src={slide.image}
                    alt={slide.artistName}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Stacked Image Carousel - Visible ONLY on Desktop */}
          <div className="hidden lg:block lg:col-span-7 relative w-full flex flex-col items-center">
            <div
              ref={slideContainerRef}
              className="carousel-container w-full relative rounded-[24px] overflow-hidden aspect-[16/10] bg-[#f0f0f0] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className="slide-image-block absolute inset-0 overflow-hidden"
                >
                  <img
                    src={slide.image}
                    alt={slide.artistName}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}

              {/* Decorative Squares (Matching Premium Style) */}
              <div className="absolute top-[28px] left-[28px] flex flex-col z-10 gap-2">
                <div className="w-[42px] h-[42px] rounded-[12px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]" />
                <div className="w-[42px] h-[42px] rounded-[12px] bg-[#1a1a1a] shadow-[0_4px_12px_rgba(0,0,0,0.15)]" />
              </div>

              {/* Clickable Dot Indicators */}
              <div className="absolute top-[28px] right-[28px] flex gap-[8px] z-10">
                {SLIDES.map((_, i) => (
                  <div
                    key={i}
                    className="carousel-dot"
                    onClick={() => handleDotClick(i)}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};