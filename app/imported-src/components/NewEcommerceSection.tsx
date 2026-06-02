import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NewEcommerceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.ec-card-anim');

      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1.5, // Even smoother scrubbing
      });

      // Animate cards staggering in with 3D effects
      gsap.from(cards, {
        y: 400,
        z: -200,
        rotationX: 45,
        opacity: 0,
        stagger: {
          each: 0.1,
          ease: "power2.inOut"
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1.5,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mx-[14px] mb-[14px] bg-[#fff] rounded-[32px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]" ref={sectionRef}>

      {/* Background gradients for ultra premium feel */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fafafa] via-white to-[#f0f0f0] pointer-events-none"></div>

      <section className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>

        <div ref={containerRef} className="relative w-full h-[700px] max-w-[1200px] mx-auto transform-style-3d">

          {/* Card 1 */}
          <div className="ec-card-anim absolute left-0 top-[20px] w-[240px] h-[320px] rounded-[24px] bg-gradient-to-br from-[#ebebeb] to-[#f5f5f5] shadow-[0_20px_40px_rgba(0,0,0,0.08)] transform -rotate-[3deg] overflow-hidden flex flex-col justify-end p-5 z-[1] transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer">
            <div className="text-[40px] font-black uppercase text-black leading-[0.9] absolute top-5 left-5 tracking-tighter">All Good<br />Things</div>
            <div className="w-[150px] h-[150px] bg-[#c0392b] rounded-full absolute bottom-10 -right-6 mix-blend-multiply opacity-80 blur-[25px]"></div>
            <div className="text-sm font-bold text-black relative z-10 opacity-70 tracking-widest">TO AN END</div>
          </div>

          {/* Card 2 (Text Card) - Glassmorphism */}
          <div className="ec-card-anim absolute left-[190px] top-[70px] w-[260px] h-[300px] rounded-[24px] bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] transform rotate-[2deg] p-7 flex flex-col justify-between z-[2] transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer">
            <div>
              <h3 className="text-[24px] font-extrabold leading-[1.1] text-[#111] max-w-[160px] tracking-tight">Where Art Meets Market</h3>
              <div className="text-[11px] text-[#777] mt-3 font-bold tracking-widest uppercase flex items-center gap-2 bg-[#f0f0f0] w-fit px-3 py-1.5 rounded-full">
                <span className="w-[6px] h-[6px] bg-[#3dbf9e] rounded-full animate-pulse"></span> APY: 4.60%
              </div>
            </div>
            <div className="absolute top-6 right-6 w-[36px] h-[36px] bg-[#111] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><line x1="9" y1="21" x2="21" y2="3"></line></svg>
            </div>
            <p className="text-[14px] text-[#555] leading-relaxed font-medium">
              Allowing artists to showcase their work and buyers to find unique, inspiring pieces.
            </p>
          </div>

          {/* Card 3 */}
          <div className="ec-card-anim absolute left-[410px] top-[140px] w-[240px] h-[300px] rounded-[24px] bg-gradient-to-br from-[#d7ccc8] to-[#a1887f] shadow-[0_20px_40px_rgba(161,136,127,0.3)] transform rotate-[4deg] z-[3] p-5 flex flex-col justify-between transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer overflow-hidden border-[4px] border-white/20">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/20 rounded-full blur-[40px] -mr-[50px] -mt-[50px]"></div>
            <div className="text-right font-black uppercase text-4xl opacity-20 tracking-tighter mix-blend-overlay">Staff</div>
            <div className="text-black font-bold uppercase tracking-widest text-[11px] bg-white/30 backdrop-blur-md px-3 py-2 rounded-lg w-fit">No or Once More</div>
          </div>

          {/* Card 4 */}
          <div className="ec-card-anim absolute left-[600px] top-[220px] w-[240px] h-[300px] rounded-[24px] bg-gradient-to-br from-[#4caf50] to-[#2e7d32] shadow-[0_20px_40px_rgba(76,175,80,0.3)] transform -rotate-[2deg] z-[4] p-5 flex items-end justify-center transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50"></div>
            <div className="text-white font-bold text-[11px] tracking-[4px] uppercase mb-5 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10">A Knit by Le Fleur</div>
          </div>

          {/* Card 5 */}
          <div className="ec-card-anim absolute left-[790px] top-[280px] w-[240px] h-[300px] rounded-[24px] bg-gradient-to-br from-[#ffc107] to-[#ff9800] shadow-[0_20px_40px_rgba(255,152,0,0.3)] transform rotate-[3deg] z-[5] p-6 flex flex-col justify-end transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer">
            <div className="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] bg-white/30 rounded-full blur-[30px]"></div>
            <div className="text-center font-black uppercase text-[#111] text-[36px] leading-[0.9] tracking-tighter mb-4 z-10 mix-blend-overlay">The<br />Green<br />Knight</div>

            {/* Bubble pointing at this card */}
            <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 px-5 py-2 rounded-[50px] text-[15px] font-bold text-white bg-[#111] shadow-[0_15px_30px_rgba(0,0,0,0.2)] whitespace-nowrap z-20">
              @Johnson
              <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#111]"></div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="ec-card-anim absolute left-[970px] top-[400px] w-[240px] h-[300px] rounded-[24px] bg-gradient-to-b from-[#ff5722] to-[#e64a19] shadow-[0_20px_40px_rgba(255,87,34,0.3)] transform -rotate-[4deg] z-[6] p-6 flex flex-col justify-between border-[8px] border-[#111] transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer">
            <div className="text-[#111] font-black text-[46px] uppercase tracking-tighter leading-none">Glimmer</div>
            <div className="text-white font-bold tracking-widest text-[13px] bg-black/10 w-fit px-3 py-1 rounded-md">Mi. 10.4</div>
          </div>

          {/* Card 7 */}
          <div className="ec-card-anim absolute left-[1160px] top-[490px] w-[240px] h-[300px] rounded-[24px] bg-gradient-to-tr from-[#1a56ff] to-[#3b82f6] shadow-[0_20px_40px_rgba(26,86,255,0.3)] transform rotate-[5deg] z-[7] p-6 flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer border border-white/20">
            <div className="w-[80px] h-[80px] border-[4px] border-white/30 rounded-full mb-6 flex items-center justify-center">
              <div className="w-[40px] h-[40px] bg-white rounded-full animate-pulse"></div>
            </div>
            <span className="text-white font-black text-[22px] tracking-widest uppercase block">Fluffy</span>
            <span className="text-white font-black text-[22px] tracking-widest uppercase block text-white/70">Worm</span>
          </div>

        </div>
      </section>
    </div>
  );
};
