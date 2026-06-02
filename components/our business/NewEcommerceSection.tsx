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
    <div className="mx-[14px] mb-[14px] bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 rounded-[32px] overflow-hidden relative shadow-[0_25px_50px_rgba(0,0,0,0.5)]" ref={sectionRef}>

      {/* Animated background gradients with glowing effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-indigo-900/60 to-slate-900/80 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>

      <section className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>

        <div ref={containerRef} className="relative w-full h-[900px] max-w-[1400px] mx-auto transform-style-3d">

          {/* Card 1 */}
          <div className="ec-card-anim absolute left-0 top-[20px] w-[320px] h-[420px] rounded-[32px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] transform -rotate-[3deg] overflow-hidden flex flex-col justify-end p-8 z-[1] transition-transform duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-0 cursor-pointer border border-blue-400/20">
            <div className="text-[56px] font-black uppercase text-white leading-[0.9] absolute top-8 left-8 tracking-tighter drop-shadow-lg">All Good<br />Things</div>
            <div className="w-[200px] h-[200px] bg-red-500 rounded-full absolute bottom-10 -right-6 mix-blend-screen opacity-60 blur-[40px]"></div>
            <div className="text-base font-bold text-white/90 relative z-10 tracking-widest drop-shadow-lg">TO AN END</div>
          </div>

          {/* Card 2 (Text Card) - Glassmorphism */}
          <div className="ec-card-anim absolute left-[270px] top-[100px] w-[340px] h-[400px] rounded-[32px] bg-white/10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2)] transform rotate-[2deg] p-10 flex flex-col justify-between z-[2] transition-transform duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-0 cursor-pointer border border-white/20">
            <div>
              <h3 className="text-[32px] font-extrabold leading-[1.1] text-white max-w-full tracking-tight drop-shadow-lg">Where Art Meets Market</h3>
              <div className="text-[13px] text-cyan-200 mt-4 font-bold tracking-widest uppercase flex items-center gap-2 bg-cyan-500/20 w-fit px-4 py-2 rounded-full border border-cyan-400/30 backdrop-blur">
                <span className="w-[8px] h-[8px] bg-cyan-400 rounded-full animate-pulse"></span> APY: 4.60%
              </div>
            </div>
            <div className="absolute top-8 right-8 w-[48px] h-[48px] bg-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform hover:bg-white/30 border border-white/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><line x1="9" y1="21" x2="21" y2="3"></line></svg>
            </div>
            <p className="text-[16px] text-white/80 leading-relaxed font-medium drop-shadow">
              Allowing artists to showcase their work and buyers to find unique, inspiring pieces.
            </p>
          </div>

          {/* Card 3 */}
          <div className="ec-card-anim absolute left-[530px] top-[200px] w-[320px] h-[400px] rounded-[32px] bg-gradient-to-br from-purple-600/30 to-pink-600/30 shadow-[0_25px_60px_rgba(168,85,247,0.2)] transform rotate-[4deg] z-[3] p-8 flex flex-col justify-between transition-transform duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-0 cursor-pointer overflow-hidden border border-purple-400/40 backdrop-blur-lg">
            <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-purple-400/20 rounded-full blur-[60px] -mr-[70px] -mt-[70px]"></div>
            <div className="text-right font-black uppercase text-6xl opacity-30 tracking-tighter mix-blend-overlay text-white">Staff</div>
            <div className="text-white font-bold uppercase tracking-widest text-[13px] bg-purple-500/30 backdrop-blur-md px-4 py-3 rounded-lg w-fit border border-purple-300/50">No or Once More</div>
          </div>

          {/* Card 4 */}
          <div className="ec-card-anim absolute left-[790px] top-[300px] w-[320px] h-[400px] rounded-[32px] bg-gradient-to-br from-emerald-500/30 to-teal-600/30 shadow-[0_25px_60px_rgba(16,185,129,0.2)] transform -rotate-[2deg] z-[4] p-8 flex items-end justify-center transition-transform duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-0 cursor-pointer overflow-hidden border border-emerald-400/40 backdrop-blur-lg">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30"></div>
            <div className="text-white font-bold text-[14px] tracking-[5px] uppercase mb-8 bg-black/30 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 z-10 drop-shadow-lg">A Knit by Le Fleur</div>
          </div>

          {/* Card 5 */}
          <div className="ec-card-anim absolute left-[1050px] top-[380px] w-[320px] h-[400px] rounded-[32px] bg-gradient-to-br from-amber-500/30 to-orange-600/30 shadow-[0_25px_60px_rgba(217,119,6,0.2)] transform rotate-[3deg] z-[5] p-8 flex flex-col justify-end transition-transform duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-0 cursor-pointer border border-amber-400/40 backdrop-blur-lg">
            <div className="absolute top-[-70px] left-[-70px] w-[220px] h-[220px] bg-white/30 rounded-full blur-[50px]"></div>
            <div className="text-center font-black uppercase text-white text-[48px] leading-[0.9] tracking-tighter mb-6 z-10 mix-blend-overlay drop-shadow-lg">The<br />Green<br />Knight</div>

            {/* Bubble pointing at this card */}
            <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 px-6 py-3 rounded-[50px] text-[17px] font-bold text-white bg-slate-950/80 shadow-[0_20px_40px_rgba(0,0,0,0.4)] whitespace-nowrap z-20 border border-white/20 backdrop-blur">
              @Johnson
              <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-slate-950/80"></div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="ec-card-anim absolute left-[1310px] top-[500px] w-[320px] h-[400px] rounded-[32px] bg-gradient-to-b from-red-600/30 to-orange-700/30 shadow-[0_25px_60px_rgba(220,38,38,0.2)] transform -rotate-[4deg] z-[6] p-8 flex flex-col justify-between border-[10px] border-white/20 transition-transform duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-0 cursor-pointer backdrop-blur-lg">
            <div className="text-white font-black text-[56px] uppercase tracking-tighter leading-none drop-shadow-lg">Glimmer</div>
            <div className="text-white font-bold tracking-widest text-[15px] bg-white/20 w-fit px-4 py-2 rounded-lg border border-white/30 backdrop-blur">Mi. 10.4</div>
          </div>

          {/* Card 7 */}
          <div className="ec-card-anim absolute left-[1570px] top-[600px] w-[320px] h-[400px] rounded-[32px] bg-gradient-to-tr from-blue-600/30 to-cyan-500/30 shadow-[0_25px_60px_rgba(59,130,246,0.2)] transform rotate-[5deg] z-[7] p-8 flex flex-col items-center justify-center transition-transform duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-0 cursor-pointer border border-blue-400/40 backdrop-blur-lg">
            <div className="w-[120px] h-[120px] border-[5px] border-white/40 rounded-full mb-8 flex items-center justify-center animate-pulse">
              <div className="w-[60px] h-[60px] bg-white rounded-full animate-pulse drop-shadow-lg"></div>
            </div>
            <span className="text-white font-black text-[32px] tracking-widest uppercase block drop-shadow-lg">Fluffy</span>
            <span className="text-white/80 font-black text-[32px] tracking-widest uppercase block drop-shadow-lg">Worm</span>
          </div>

        </div>
      </section>
    </div>
  );
};
