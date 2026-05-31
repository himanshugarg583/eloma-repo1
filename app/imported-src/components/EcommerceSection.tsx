import React, { useState, useEffect, useRef } from 'react';

export const EcommerceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Calculate progress while the element's scroll track is active
      const scrolled = -rect.top;
      const maxScroll = elementHeight - viewHeight;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial trigger

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to interpolate values smoothly
  const interpolate = (startValue: number, endValue: number, progress: number) => {
    return startValue + (endValue - startValue) * progress;
  };

  // 1. General progress for fanning out cards (from 0.15 to 0.75 scroll progress)
  const fanProgress = Math.min(1, Math.max(0, (scrollProgress - 0.15) / 0.6));

  // Cards container vertical descent offset (starts shifted up by -180px, sliding straight down from the top)
  const containerTranslateYOffset = interpolate(-180, 0, Math.min(1, scrollProgress / 0.45));

  // Individual card positions (stacked at left: 200px, top: 60px, rot: 0deg, width: 140px, height: 190px when stacked)
  // Card 1: c4 (Red face) -> fanned: left: -60, top: 20, rot: -5, width: 220, height: 280
  const card1Left = interpolate(300, -100, fanProgress);
  const card1Top = interpolate(0, 0, fanProgress);
  const card1Rot = interpolate(0, 0, fanProgress);
  const card1Width = interpolate(140, 220, fanProgress);
  const card1Height = interpolate(190, 280, fanProgress);

  // Card 2: c2 (Colorful New) -> fanned: left: 90, top: 60, rot: -2, width: 240, height: 300
  const card2Left = interpolate(340, 40, fanProgress);
  const card2Top = interpolate(60, 100, fanProgress);
  const card2Rot = interpolate(0, 0, fanProgress);
  const card2Width = interpolate(140, 240, fanProgress);
  const card2Height = interpolate(190, 300, fanProgress);

  // Card 3: c1 (Tesla newspaper) -> fanned: left: 240, top: 100, rot: 1, width: 260, height: 310
  const card3Left = interpolate(340, 240, fanProgress);
  const card3Top = interpolate(60, 220, fanProgress);
  const card3Rot = interpolate(0, 0, fanProgress);
  const card3Width = interpolate(140, 260, fanProgress);
  const card3Height = interpolate(190, 310, fanProgress);

  // Card 4: c7 (Van Gogh) -> fanned: left: 390, top: 140, rot: 4, width: 200, height: 240
  const card4Left = interpolate(340, 390, fanProgress);
  const card4Top = interpolate(60, 380, fanProgress);
  const card4Rot = interpolate(0, 0, fanProgress);
  const card4Width = interpolate(140, 200, fanProgress);
  const card4Height = interpolate(190, 240, fanProgress);

  // Card 5: c10 (Yellow box) -> fanned: left: 540, top: 180, rot: 8, width: 190, height: 230
  const card5Left = interpolate(340, 540, fanProgress);
  const card5Top = interpolate(60, 480, fanProgress);
  const card5Rot = interpolate(0, 0, fanProgress);
  const card5Width = interpolate(140, 190, fanProgress);
  const card5Height = interpolate(190, 230, fanProgress);

  // 2. Staggered text line animations
  // Line 1: always visible
  // Line 2: "Sell," reveals (from 0.2 to 0.45)
  const line2Progress = Math.min(1, Math.max(0, (scrollProgress - 0.2) / 0.25));
  // Line 3: "& acquire arts to" reveals (from 0.35 to 0.6)
  const line3Progress = Math.min(1, Math.max(0, (scrollProgress - 0.35) / 0.25));
  // Line 4: "our marketplace." reveals (from 0.5 to 0.75)
  const line4Progress = Math.min(1, Math.max(0, (scrollProgress - 0.5) / 0.25));

  // Paragraph & CTA reveal (from 0.6 to 0.85)
  const extraProgress = Math.min(1, Math.max(0, (scrollProgress - 0.6) / 0.25));

  // Mention bubbles scale-up reveal (from 0.65 to 0.9)
  const bubbleScale = Math.min(1, Math.max(0, (scrollProgress - 0.65) / 0.2));

  return (
    <div
      id="ecommerce-scroll-container"
      ref={sectionRef}
      style={{ height: '170vh', position: 'relative', background: 'transparent', padding: '35px' }}
    >
      <div
        className="ecommerce-sticky-wrapper"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <section id="ecommerce" className="w-full min-h-auto px-[60px] py-[80px] relative flex flex-col justify-center">
          {/* Left-aligned Scroll-Linked Copy */}
          <div className="max-w-[560px]">
            <div className="text-[11px] font-bold tracking-[3px] uppercase text-[#999] mb-[16px]" style={{ opacity: Math.max(0.3, scrollProgress * 1.5) }}>
              E-COMMERCE
            </div>
            <h2 className="text-[clamp(36px,5vw,68px)] font-bold tracking-[-2px] leading-[1.05] max-w-[560px] mb-[28px]" style={{ margin: 0, lineHeight: 1.15 }}>
              <span style={{ display: 'block' }}>
                Showcase,
              </span>
              <span
                style={{
                  display: 'block',
                  opacity: line2Progress,
                  transform: `translateY(${interpolate(15, 0, line2Progress)}px)`,
                  transition: 'none',
                }}
              >
                Sell,
              </span>
              <span
                className="text-[#c0392b]"
                style={{
                  display: 'block',
                  opacity: line3Progress,
                  transform: `translateY(${interpolate(15, 0, line3Progress)}px)`,
                  transition: 'none',
                }}
              >
                &amp; acquire arts to
              </span>
              <span
                style={{
                  display: 'block',
                  opacity: line4Progress,
                  transform: `translateY(${interpolate(15, 0, line4Progress)}px)`,
                  transition: 'none',
                }}
              >
                our marketplace.
              </span>
            </h2>

            <div
              style={{
                opacity: extraProgress,
                transform: `translateY(${interpolate(15, 0, extraProgress)}px)`,
                transition: 'none',
              }}
            >
              <p className="text-[14px] text-[#999] max-w-[300px] leading-[1.7] mt-[24px] mb-[32px]">
                Dynamic community where artists and buyers seamlessly merge. ArtFusion brings together creators and enthusiasts to share creativity.
              </p>
              <div className="flex gap-[14px]">
                <button className="bg-[#111] text-[#fff] border-none px-[28px] py-[14px] rounded-[50px] text-[14px] font-medium cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]">Join for $9.99/m</button>
                <button className="bg-transparent text-[#111] border-none text-[14px] font-medium cursor-pointer transition-opacity duration-200 hover:opacity-50 ml-[12px]">
                  Read more →
                </button>
              </div>
            </div>
          </div>

          {/* Right-aligned Scroll-Linked Sliding & Fanning Art Deck */}
          {/* code */}
        </section>
      </div>
    </div>
  );
};
