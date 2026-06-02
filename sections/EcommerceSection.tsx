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



  return (
    <div
      id="ecommerce-scroll-container"
      className="ecommerce-scroll-container"
      ref={sectionRef}
    >
      <div className="ecommerce-sticky-wrapper">
        <section id="ecommerce" className="w-full min-h-auto px-6 md:px-12 py-[60px] md:py-[80px] relative flex flex-col justify-center">
          {/* Left-aligned Scroll-Linked Copy */}
          <div className="max-w-[560px]">
            <div className="text-[11px] font-bold tracking-[3px] uppercase text-[#999] mb-[16px]" style={{ opacity: Math.max(0.3, scrollProgress * 1.5) }}>
              WHO WE ARE
            </div>
            <h2 className="text-[clamp(36px,5vw,60px)] font-bold tracking-[-2px] leading-[1.05] max-w-[560px] mb-[28px]" style={{ margin: 0, lineHeight: 1.15 }}>
              <span style={{ display: 'block' }}>
                A Diversified
              </span>
              <span
                style={{
                  display: 'block',
                  opacity: line2Progress,
                  transform: `translateY(${interpolate(15, 0, line2Progress)}px)`,
                  transition: 'none',
                }}
              >
                Business Group
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
                Driving Innovation
              </span>
              <span
                style={{
                  display: 'block',
                  opacity: line4Progress,
                  transform: `translateY(${interpolate(15, 0, line4Progress)}px)`,
                  transition: 'none',
                }}
              >
                Across Industries
              </span>
            </h2>

            <div
              style={{
                opacity: extraProgress,
                transform: `translateY(${interpolate(15, 0, extraProgress)}px)`,
                transition: 'none',
              }}
            >
              <p className="text-[14.5px] text-[#555] max-w-[460px] leading-[1.7] mt-[24px] mb-[16px] font-medium">
                Eloma Group is an entrepreneur-focused organization bringing together expertise in transportation, digital solutions, virtual security, travel and customer support services. We operate as a unified ecosystem of businesses, delivering integrated solutions that drive efficiency, growth, and long-term value.
              </p>
              <p className="text-[13px] text-[#888] max-w-[460px] leading-[1.6] mb-[24px] font-normal">
                With a strong focus on innovation, scalability, and sustainability, we empower businesses across sectors to adapt, evolve, and succeed in a rapidly changing world.
              </p>

              {/* Highlights Callout */}
              <div className="mb-[28px] p-4 prounded-[16px] bg-white border border-black/[0.04] text-[13px] font-bold text-[#333] leading-relaxed max-w-[500px] shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 justify-center sm:justify-start">
                  <span className="bg-[#1a56ff] text-white px-2 py-0.5 rounded-[6px] text-[11px] tracking-wide font-black">4+ VERTICALS</span>
                  <span className="text-black/15">|</span>
                  <span className="tracking-tight">Multiple Industries</span>
                  <span className="text-black/15">|</span>
                  <span className="text-[#3dbf9e] tracking-tight">One Vision for Sustainable Growth</span>
                </div>
              </div>

              {/* Industries We Serve */}
              <div className="mb-[32px]">
                <h4 className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#888] mb-[16px]">Industries We Serve</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-none p-0 max-w-[500px]">
                  {[
                    "Transportation & Logistics",
                    "Digital & Technology",
                    "Security & Risk Management",
                    "Customer Support & Call Center",
                    "Travel and Tourism"
                  ].map((industry, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-[13.5px] text-[#555] font-semibold hover:text-[#111] transition-colors duration-200">
                      <span className="w-5 h-5 rounded-full bg-[#3dbf9e]/15 flex items-center justify-center text-[#3dbf9e] flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </span>
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-[14px]">
                <a href="#reveal-section" className="bg-[#111] text-[#fff] border-none px-[28px] py-[14px] rounded-[50px] text-[14px] font-medium cursor-pointer transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] no-underline">Explore Verticals</a>
                <a href="#vision-new" className="bg-transparent text-[#111] border-none text-[14px] font-medium cursor-pointer transition-opacity duration-200 hover:opacity-50 ml-[12px] no-underline flex items-center">
                  Learn More →
                </a>
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
