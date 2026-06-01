import React, { useState, useCallback, useRef, useEffect } from 'react';

const SLIDES = [
  {
    image: '/images/slide1.png',
    artistName: '@reatha',
    subtitle: 'CLASS BY REATHA C. PHELAN',
    heading: 'Gateway to\nartist people.',
  },
  {
    image: '/images/slide2.png',
    artistName: '@marcus',
    subtitle: 'STUDIO WITH MARCUS VALE',
    heading: 'Explore the\ncreative mind.',
  },
  {
    image: '/images/slide3.png',
    artistName: '@elena',
    subtitle: 'CRAFTED BY ELENA MOORE',
    heading: 'Sculpting\nnew visions.',
  },
  {
    image: '/images/slide4.png',
    artistName: '@sophie',
    subtitle: 'LENS OF SOPHIE CHEN',
    heading: 'Capturing\nraw beauty.',
  },
];

export const RevealSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  // Entry animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedIn) {
            setHasAnimatedIn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimatedIn]);

  const goToSlide = useCallback(
    (dir: 'next' | 'prev') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);

      setTimeout(() => {
        setCurrentSlide((prev) => {
          if (dir === 'next') return (prev + 1) % SLIDES.length;
          return (prev - 1 + SLIDES.length) % SLIDES.length;
        });
        setTimeout(() => setIsAnimating(false), 600);
      }, 50);
    },
    [isAnimating]
  );

  const slide = SLIDES[currentSlide];

  return (
    <div className="section-card reveal-section-wrapper" ref={sectionRef}>
      <section
        id="reveal-section"
        className={`reveal-section ${hasAnimatedIn ? 'animated-in' : ''}`}
        style={{
          position: 'relative',
          padding: '60px 48px 80px',
          minHeight: '85vh',
          overflow: 'hidden',
        }}
      >
        {/* Subtitle */}
        <p
          className={`carousel-subtitle ${isAnimating ? 'carousel-fade-out' : 'carousel-fade-in'}`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#999',
            marginBottom: '12px',
          }}
        >
          {slide.subtitle}
        </p>

        {/* Heading + @mention row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px',
          }}
        >
          <h2
            className={`carousel-heading ${isAnimating ? 'carousel-slide-out' : 'carousel-slide-in'}`}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#1a1a1a',
              whiteSpace: 'pre-line',
              margin: 0,
            }}
          >
            {slide.heading}
          </h2>

          <div
            className={`carousel-mention ${isAnimating ? 'carousel-pop-out' : 'carousel-pop-in'}`}
            style={{
              background: '#2d2d2d',
              color: '#fff',
              padding: '8px 18px',
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              marginTop: '12px',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            }}
          >
            {slide.artistName}
          </div>
        </div>

        {/* Image Carousel */}
        <div
          ref={slideContainerRef}
          className="carousel-container"
          style={{
            position: 'relative',
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '16 / 9',
            background: '#f0f0f0',
          }}
        >
          {/* Current Image */}
          <div
            className={`carousel-image-wrapper ${isAnimating
              ? direction === 'next'
                ? 'carousel-img-exit-left'
                : 'carousel-img-exit-right'
              : 'carousel-img-enter'
              }`}
            style={{
              position: 'absolute',
              inset: 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.artistName}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Decorative Squares */}
          <div
            className="decorative-squares"
            style={{
              position: 'absolute',
              top: '28px',
              left: '28px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 5,
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            />
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#1a1a1a',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            />
          </div>

          {/* Dot Indicators */}
          <div
            className="dot-indicators"
            style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              display: 'flex',
              gap: '6px',
              zIndex: 5,
            }}
          >
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === currentSlide ? 'active' : ''}`}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i === currentSlide ? '#fff' : 'rgba(255,255,255,0.5)',
                  transition: 'background 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div
            style={{
              position: 'absolute',
              bottom: '28px',
              right: '28px',
              display: 'flex',
              gap: '8px',
              zIndex: 5,
            }}
          >
            <button
              onClick={() => goToSlide('prev')}
              className="carousel-arrow-btn"
              aria-label="Previous slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#1a1a1a',
                fontWeight: 700,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              ‹
            </button>
            <button
              onClick={() => goToSlide('next')}
              className="carousel-arrow-btn"
              aria-label="Next slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#1a1a1a',
                fontWeight: 700,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <style>{`
        /* Entry Animation - Only this is added */
        .reveal-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal-section.animated-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};