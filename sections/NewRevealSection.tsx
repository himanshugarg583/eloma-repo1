import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NewRevealSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);

  const textContent = "At Eloma Group, sustainability is not just a commitment; it is a core part of how we operate and grow / to minimize environmental impact & promote ethical practices across all our business verticals.";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Play the reveal once when the section scrolls into view (and reverse it
      // when scrolling back up). A scrubbed timeline was fragile here: combined
      // with Lenis smooth-scroll + ScrollTrigger.refresh() it kept snapping
      // straight to its end state, so the words appeared already-revealed and no
      // animation was ever visible. toggleActions gives a reliable enter/leave
      // play instead.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });

      // Highlight text words with blur and scale effect
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.rword');
        tl.to(words, {
          color: '#111',
          filter: 'blur(0px)',
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          ease: "power2.out",
          duration: 0.9
        }, 0);
      }

      // Parallax & rotation for the cards in the background
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        tl.to(cards, {
          rotation: (i) => (i - 3) * 8, // Fan out more
          x: (i) => (i - 3) * 20,
          y: (i) => Math.abs(i - 3) * 10,
          scale: 1.05,
          stagger: 0.05,
          ease: "sine.inOut",
          duration: 1.2
        }, 0);
      }

      // Parallax for bubbles
      if (bubblesRef.current) {
        const bubbles = bubblesRef.current.children;
        tl.to(bubbles[0], { y: -80, x: -30, scale: 1.1, duration: 1.2 }, 0);
        tl.to(bubbles[1], { y: -120, x: 40, scale: 1.15, duration: 1.2 }, 0);
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderWords = () => {
    return textContent.split(' ').map((word, i) => {
      const isUnique = word.toLowerCase().includes('unique');
      return (
        <span
          key={i}
          className={`rword inline-block mr-[12px] transition-all duration-300 ${isUnique ? 'text-[#3dbf9e]' : 'text-[#d1d1d1]'}`}
          style={{ opacity: 0.4, filter: 'blur(2px)', transform: 'scale(0.95)' }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div id="sustainability" className="mx-[14px] mb-[14px] bg-[#fafafa] rounded-[26px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]" ref={sectionRef}>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-[60px] md:py-[80px] relative overflow-hidden">

        {/* Abstract Background Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#3dbf9e] opacity-10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1a56ff] opacity-[0.07] rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>

        {/* Stacked Cards behind text */}
        <div ref={cardsRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[320px] z-[1]">
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#f44336] to-[#d32f2f] shadow-2xl transform -rotate-[15deg] scale-90 border-[4px] border-white/20 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#2196f3] to-[#0d47a1] shadow-2xl transform -rotate-[10deg] scale-95 border-[4px] border-white/20 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#ff9800] to-[#ef6c00] shadow-2xl transform -rotate-[5deg] scale-100 border-[4px] border-white/20 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#4caf50] to-[#2e7d32] shadow-2xl transform rotate-[0deg] scale-100 border-[4px] border-white/20 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#9c27b0] to-[#6a1b9a] shadow-2xl transform rotate-[5deg] scale-100 border-[4px] border-white/20 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#00bcd4] to-[#00838f] shadow-2xl transform rotate-[10deg] scale-95 border-[4px] border-white/20 backdrop-blur-md"></div>

          {/* Top Blue Card */}
          <div className="absolute inset-0 rounded-[20px] bg-[#1a56ff] shadow-[0_30px_60px_rgba(26,86,255,0.4)] transform rotate-[15deg] scale-90 z-10 flex flex-col items-center justify-center p-6 border-[4px] border-white/30 backdrop-blur-xl">
            <span className="text-white font-black text-2xl tracking-widest uppercase opacity-90">Eco</span>
            <span className="text-white font-black text-2xl tracking-widest uppercase opacity-90">Future</span>
          </div>
        </div>

        {/* Floating Bubbles */}
        <div ref={bubblesRef} className="absolute inset-0 pointer-events-none z-[10]">
          <div className="absolute px-5 py-3 rounded-[50px] text-[15px] font-bold text-white bg-[#111] shadow-[0_20px_40px_rgba(0,0,0,0.2)]" style={{ top: '30%', left: '15%' }}>
            @ethical
            <div className="absolute -bottom-[8px] left-[20px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#111]"></div>
          </div>
          <div className="absolute px-5 py-3 rounded-[50px] text-[15px] font-bold text-white bg-[#1a56ff] shadow-[0_20px_40px_rgba(26,86,255,0.3)]" style={{ top: '25%', right: '15%' }}>
            @sustainable
            <div className="absolute -bottom-[8px] left-[20px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#1a56ff]"></div>
          </div>
        </div>

        {/* Reveal Text */}
        <h2
          ref={textRef}
          className="text-[clamp(36px,5vw,72px)] font-bold tracking-[-2px] leading-[1.1] text-center max-w-[1100px] relative z-[2] px-[20px]"
          style={{ textShadow: '0 10px 30px rgba(255,255,255,0.8)' }}
        >
          {renderWords()}
        </h2>

        {/* Detailed Sustainability Content Card */}
        <div className="mt-[50px] max-w-[800px] bg-white/70 backdrop-blur-md rounded-[24px] p-8 md:p-10 border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative z-[2] text-center mx-[20px]">
          <span className="text-[11px] font-black tracking-[3px] uppercase text-[#3dbf9e] block mb-3">Committed to Sustainable Growth and Responsible Business</span>
          <p className="text-[14.5px] text-[#444] leading-[1.7] mb-4 font-semibold">
            At Eloma Group, sustainability is not just a commitment; it is a core part of how we operate and grow. Across all our business verticals, we strive to minimize environmental impact, promote ethical practices, and build solutions that contribute to a more responsible and resilient future.
          </p>
          <p className="text-[13px] text-[#666] leading-[1.65] font-medium">
            We integrate eco-conscious strategies within our transportation, digital, and operational processes, ensuring efficiency without compromising the environment. From reducing carbon footprints to adopting smarter technologies, our approach is focused on long-term value creation for businesses, communities, and the planet.
          </p>
        </div>

      </section>
    </div>
  );
};
