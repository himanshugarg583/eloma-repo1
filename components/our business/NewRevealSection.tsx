import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NewRevealSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);

  const textContent = "Whether you're an artist looking to sell your work / or buyer seeking unique pieces connects you to world of creativity & commerce.";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

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
          className={`rword inline-block mr-[16px] lg:mr-[20px] transition-all duration-300 ${isUnique ? 'text-[#00ff88]' : 'text-white'}`}
          style={{ opacity: 0.4, filter: 'blur(2px)', transform: 'scale(0.95)' }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div className="mx-[14px] mb-[14px] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e293b] rounded-[32px] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.3)]" ref={sectionRef}>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-[40px] lg:px-[60px] relative overflow-hidden">

        {/* Abstract Background Glows - Cinematic Dark Blue */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-[#3dbf9e] opacity-8 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] bg-[#1a56ff] opacity-12 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

        {/* Stacked Cards behind text */}
        <div ref={cardsRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] lg:w-[380px] lg:h-[500px] z-[1]">
          <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] bg-gradient-to-br from-[#f44336] to-[#d32f2f] shadow-2xl lg:shadow-[0_30px_80px_rgba(244,67,54,0.4)] transform -rotate-[15deg] scale-90 border-[5px] lg:border-[6px] border-white/30 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] bg-gradient-to-br from-[#2196f3] to-[#0d47a1] shadow-2xl lg:shadow-[0_30px_80px_rgba(33,150,243,0.3)] transform -rotate-[10deg] scale-95 border-[5px] lg:border-[6px] border-white/30 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] bg-gradient-to-br from-[#ff9800] to-[#ef6c00] shadow-2xl lg:shadow-[0_30px_80px_rgba(255,152,0,0.3)] transform -rotate-[5deg] scale-100 border-[5px] lg:border-[6px] border-white/30 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] bg-gradient-to-br from-[#4caf50] to-[#2e7d32] shadow-2xl lg:shadow-[0_30px_80px_rgba(76,175,80,0.3)] transform rotate-[0deg] scale-100 border-[5px] lg:border-[6px] border-white/30 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] bg-gradient-to-br from-[#9c27b0] to-[#6a1b9a] shadow-2xl lg:shadow-[0_30px_80px_rgba(156,39,176,0.3)] transform rotate-[5deg] scale-100 border-[5px] lg:border-[6px] border-white/30 backdrop-blur-md"></div>
          <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] bg-gradient-to-br from-[#00bcd4] to-[#00838f] shadow-2xl lg:shadow-[0_30px_80px_rgba(0,188,212,0.3)] transform rotate-[10deg] scale-95 border-[5px] lg:border-[6px] border-white/30 backdrop-blur-md"></div>

          {/* Top Blue Card */}
          <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] bg-gradient-to-br from-[#1a56ff] via-[#0f3fcf] to-[#0a2fbf] shadow-2xl lg:shadow-[0_40px_100px_rgba(26,86,255,0.6)] transform rotate-[15deg] scale-90 z-10 flex flex-col items-center justify-center p-8 lg:p-10 border-[5px] lg:border-[6px] border-white/40 backdrop-blur-xl">
            <span className="text-white font-black text-2xl lg:text-3xl tracking-widest uppercase opacity-95">Fluffy</span>
            <span className="text-white font-black text-2xl lg:text-3xl tracking-widest uppercase opacity-95">Worm</span>
          </div>
        </div>

        {/* Floating Bubbles */}
        <div ref={bubblesRef} className="absolute inset-0 pointer-events-none z-[10]">
          <div className="absolute px-5 py-3 rounded-[50px] text-[15px] font-bold text-white bg-[#111] shadow-[0_20px_40px_rgba(0,0,0,0.2)]" style={{ top: '30%', left: '15%' }}>
            @alician
            <div className="absolute -bottom-[8px] left-[20px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#111]"></div>
          </div>
          <div className="absolute px-5 py-3 rounded-[50px] text-[15px] font-bold text-white bg-[#1a56ff] shadow-[0_20px_40px_rgba(26,86,255,0.3)]" style={{ top: '25%', right: '15%' }}>
            @andrea
            <div className="absolute -bottom-[8px] left-[20px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#1a56ff]"></div>
          </div>
        </div>

        {/* Reveal Text */}
        <h2
          ref={textRef}
          className="text-[clamp(42px,6vw,96px)] lg:text-[clamp(48px,7vw,108px)] font-bold tracking-[-2px] leading-[1.1] text-center max-w-[1200px] relative z-[2] px-[20px] text-white"
          style={{ textShadow: '0 15px 40px rgba(0,0,0,0.5)' }}
        >
          {renderWords()}
        </h2>

        {/* Circular Icons Row */}
        <div className="flex items-center gap-6 lg:gap-8 mt-[100px] lg:mt-[140px] relative z-[2]">
          <div className="group w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] rounded-full border-[2px] border-cyan-400/50 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-cyan-900/20 shadow-[0_15px_40px_rgba(34,211,238,0.2)] hover:border-cyan-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-2 cursor-pointer backdrop-blur-md">
            <svg className="text-cyan-300 group-hover:text-cyan-100 transition-colors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
          </div>
          <div className="group w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] rounded-full border-[2px] border-blue-400/50 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-cyan-900/20 shadow-[0_15px_40px_rgba(59,130,246,0.2)] hover:border-blue-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-2 cursor-pointer backdrop-blur-md">
            <svg className="text-blue-300 group-hover:text-blue-100 transition-colors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          </div>
          <div className="group w-[72px] h-[72px] lg:w-[88px] lg:h-[88px] rounded-full border-[2px] border-purple-400/50 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-cyan-900/20 shadow-[0_15px_40px_rgba(168,85,247,0.2)] hover:border-purple-300 hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-2 cursor-pointer backdrop-blur-md">
            <svg className="text-purple-300 group-hover:text-purple-100 transition-colors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
        </div>

      </section>
    </div>
  );
};
