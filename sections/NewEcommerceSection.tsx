import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NewEcommerceSection: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!triggerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.ec-card-anim');
      if (!cards.length) return;

      // Each card ships with `transition: transform 500ms` (for the hover lift).
      // While GSAP scrubs the transform, that CSS easing stacks on top of the
      // scrub smoothing + Lenis lerp, so the cards never crisply settle — they
      // keep looking 3D-tilted / half-arrived. Neutralise it while GSAP owns the
      // transform (hover transform is overridden by GSAP's inline transform
      // anyway once the section has revealed, so nothing visible is lost).
      cards.forEach((el) => { el.style.transition = "none"; });

      // ── 3D card fan reveal (matches the pallet_rose reference) ──
      // The cards rise + rotate into their fanned layout one-by-one when the
      // section scrolls into view, and reverse when scrolling back up.
      //
      // NOTE: this section is deliberately NOT pinned — pinning inserted a
      // ~1.5x-viewport pin-spacer that showed up as a large blank gap after the
      // preceding "Global Presence & Hubs" section.
      //
      // A scrubbed timeline was fragile here: with Lenis smooth-scroll +
      // ScrollTrigger.refresh() it kept snapping to its end state, so the cards
      // appeared already-fanned and no animation was visible. toggleActions
      // gives a reliable enter/leave play instead.
      gsap.from(cards, {
        y: 400,
        z: -200,
        rotationX: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: {
          each: 0.12,
          from: "start",
        },
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        }
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Full width background */}
      <div className="w-screen relative -ml-[50vw] left-[50%] bg-gradient-to-br from-[#0f1e3d] via-[#1a2850] to-[#0d1628]" ref={triggerRef}>
        {/* Cinematic dark blue gradient background with lighting effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/60 via-[#0f1e3d] to-[#081021] pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1a56ff]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#3dbf9e]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mx-[14px] mb-[14px] rounded-[26px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" ref={sectionRef}>
          <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 md:px-12 py-[80px] md:py-[100px] 3xl:py-[120px] 4xl:py-[140px]" style={{ perspective: '1200px' }}>
        
        {/* Split Grid Layout: Text Left, Staggered Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full max-w-[1400px] mx-auto">
          
          {/* Left Column: Client Detailed Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left relative z-20">
            <div className="w-[48px] h-[48px] 3xl:w-[60px] 3xl:h-[60px] rounded-full border border-black/5 bg-white flex items-center justify-center shadow-sm mb-6 3xl:mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a56ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>

            <h2 className="text-[34px] sm:text-[44px] 3xl:text-[64px] 4xl:text-[78px] 5xl:text-[96px] 6xl:text-[110px] font-black tracking-[-2px] leading-[1.1] text-white mb-6">
              Be a Part of Our<br />
              <span className="text-[#3dbf9e]">Sustainable Journey</span>
            </h2>

            <h3 className="text-[13px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[18px] 6xl:text-[20px] font-black tracking-[3px] uppercase text-[#5ba3ff] mb-4">Together, We Can Build a Better Future</h3>

            <p className="text-[14px] 3xl:text-[19px] 4xl:text-[22px] 5xl:text-[26px] 6xl:text-[30px] text-white/90 leading-[1.75] mb-5 font-semibold">
              At Eloma Group, we believe that meaningful change happens when businesses come together with a shared purpose. Our commitment to sustainability goes beyond operations - it’s about creating long-term impact through collaboration, innovation, and responsible growth.
            </p>

            {/* Glowing Glass Callout Panel */}
            <div className="p-6 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#3dbf9e]/20 rounded-full blur-[25px] pointer-events-none"></div>
              <p className="text-[12.5px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[18px] 6xl:text-[20px] text-white/80 leading-[1.65] font-medium relative z-10">
                By partnering with us, you become part of a forward-thinking ecosystem that values eco-conscious practices, ethical business standards, and future-ready solutions. Together, we can reduce environmental impact, drive smarter operations, and build businesses that are not only successful today but sustainable for tomorrow.
              </p>
            </div>
          </div>

          {/* Right Column: Stacked 3D Card Fan */}
          <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[480px] lg:h-[580px] 3xl:h-[760px] 4xl:h-[900px] 5xl:h-[1050px] 6xl:h-[1200px] flex items-center justify-center transform-style-3d overflow-hidden lg:overflow-visible">
            <div ref={containerRef} className="relative w-[580px] h-[520px] transform-style-3d scale-[0.6] sm:scale-[0.85] lg:scale-100 3xl:scale-[1.3] 4xl:scale-[1.48] 5xl:scale-[1.7] 6xl:scale-[1.95] origin-center">

              {/* Card 1 */}
              <div
                className="ec-card-anim absolute left-[0px] top-[20px] w-[200px] h-[270px] 5xl:w-[240px] 5xl:h-[320px] 6xl:w-[280px] 6xl:h-[375px] rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform -rotate-[3deg] overflow-hidden flex flex-col justify-end p-5 z-[1] transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer border border-white/20"
                style={{ background: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=300&q=80') no-repeat center/cover" }}
              >
                <div className="text-[28px] 5xl:text-[32px] 6xl:text-[36px] font-black uppercase text-black leading-[0.9] absolute top-5 left-5 tracking-tighter">Sustainable<br />Future</div>
                <div className="w-[120px] h-[120px] bg-[#3dbf9e] rounded-full absolute bottom-10 -right-6 mix-blend-multiply opacity-80 blur-[25px]"></div>
                <div className="text-[11px] font-bold text-black relative z-10 opacity-70 tracking-widest">TOGETHER</div>
              </div>

              {/* Card 2 (Text Card) - Glassmorphism */}
              <div className="ec-card-anim absolute left-[60px] top-[50px] w-[210px] h-[260px] 5xl:w-[252px] 5xl:h-[308px] 6xl:w-[294px] 6xl:h-[360px] rounded-[24px] bg-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2)] transform rotate-[2deg] p-6 flex flex-col justify-between z-[2] transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer">
                <div>
                  <h3 className="text-[17px] 5xl:text-[19px] 6xl:text-[21px] font-extrabold leading-[1.1] text-white tracking-tight">Eco-Conscious Ecosystem</h3>
                  <div className="text-[9px] 5xl:text-[10px] 6xl:text-[11px] text-white/60 mt-2.5 font-bold tracking-widest uppercase flex items-center gap-1.5 bg-white/10 w-fit px-2.5 py-1 rounded-full">
                    <span className="w-[5px] h-[5px] bg-[#3dbf9e] rounded-full animate-pulse"></span> ESTD: 2026
                  </div>
                </div>
                <div className="absolute top-5 right-5 w-[30px] h-[30px] 5xl:w-[36px] 5xl:h-[36px] 6xl:w-[42px] 6xl:h-[42px] bg-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><line x1="9" y1="21" x2="21" y2="3"></line></svg>
                </div>
                <p className="text-[12px] 5xl:text-[14px] 6xl:text-[16px] text-white/70 leading-relaxed font-medium">
                  Partner with us to create a forward-thinking ecosystem valuing future-ready solutions.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="ec-card-anim absolute left-[120px] top-[90px] w-[200px] h-[270px] 5xl:w-[240px] 5xl:h-[320px] 6xl:w-[280px] 6xl:h-[375px] rounded-[24px] shadow-[0_20px_40px_rgba(161,136,127,0.3)] transform rotate-[4deg] z-[3] p-5 flex flex-col justify-between transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer overflow-hidden border-[4px] border-white/20"
                style={{ background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80') no-repeat center/cover" }}
              >
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-white/20 rounded-full blur-[30px] -mr-[40px] -mt-[40px]"></div>
                <div className="text-right font-black uppercase text-2xl opacity-30 tracking-tighter text-white">Ethics</div>
                <div className="text-white font-bold uppercase tracking-widest text-[10px] bg-white/25 backdrop-blur-md px-2.5 py-1.5 rounded-lg w-fit">Ethical Growth</div>
              </div>

              {/* Card 4 */}
              <div
                className="ec-card-anim absolute left-[180px] top-[130px] w-[200px] h-[270px] 5xl:w-[240px] 5xl:h-[320px] 6xl:w-[280px] 6xl:h-[375px] rounded-[24px] shadow-[0_20px_40px_rgba(76,175,80,0.3)] transform -rotate-[2deg] z-[4] p-5 flex flex-col justify-end transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer overflow-hidden"
                style={{ background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80') no-repeat center/cover" }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50"></div>
                <div className="text-white font-bold text-[10px] 5xl:text-[12px] 6xl:text-[14px] tracking-[3px] uppercase mb-2 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-10 w-fit text-center mx-auto">Smarter Operations</div>
              </div>

              {/* Card 5 */}
              <div
                className="ec-card-anim absolute left-[240px] top-[170px] w-[200px] h-[270px] 5xl:w-[240px] 5xl:h-[320px] 6xl:w-[280px] 6xl:h-[375px] rounded-[24px] shadow-[0_20px_40px_rgba(255,152,0,0.3)] transform rotate-[3deg] z-[5] p-5 flex flex-col justify-end transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer"
                style={{ background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80') no-repeat center/cover" }}
              >
                <div className="absolute top-[-50px] left-[-50px] w-[120px] h-[120px] bg-white/30 rounded-full blur-[25px]"></div>
                <div className="text-center font-black uppercase text-white text-[24px] 5xl:text-[28px] 6xl:text-[32px] leading-[0.9] tracking-tighter mb-4 z-10">Shared<br />Purpose<br />Growth</div>

                {/* Bubble pointing at this card */}
                <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-[50px] text-[12px] 5xl:text-[14px] 6xl:text-[16px] font-bold text-white bg-[#111]/80 shadow-[0_15px_30px_rgba(0,0,0,0.3)] whitespace-nowrap z-20">
                  @eloma.care
                  <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#111]"></div>
                </div>
              </div>

              {/* Card 6 */}
              <div
                className="ec-card-anim absolute left-[300px] top-[210px] w-[200px] h-[270px] 5xl:w-[240px] 5xl:h-[320px] 6xl:w-[280px] 6xl:h-[375px] rounded-[24px] shadow-[0_20px_40px_rgba(255,87,34,0.3)] transform -rotate-[4deg] z-[6] p-5 flex flex-col justify-between border-[6px] border-white/30 transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer"
                style={{ background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80') no-repeat center/cover" }}
              >
                <div className="text-white font-black text-[32px] 5xl:text-[38px] 6xl:text-[44px] uppercase tracking-tighter leading-none">Eco<br />Tech</div>
                <div className="text-white font-bold tracking-widest text-[11px] 5xl:text-[13px] 6xl:text-[15px] bg-black/35 w-fit px-2.5 py-1 rounded-md">Value</div>
              </div>

              {/* Card 7 */}
              <div
                className="ec-card-anim absolute left-[360px] top-[250px] w-[200px] h-[270px] 5xl:w-[240px] 5xl:h-[320px] 6xl:w-[280px] 6xl:h-[375px] rounded-[24px] shadow-[0_20px_40px_rgba(26,86,255,0.3)] transform rotate-[5deg] z-[7] p-5 flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-0 cursor-pointer border border-white/20"
                style={{ background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=300&q=80') no-repeat center/cover" }}
              >
                <div className="w-[60px] h-[60px] 5xl:w-[72px] 5xl:h-[72px] 6xl:w-[84px] 6xl:h-[84px] border-[3px] border-white/30 rounded-full mb-4 flex items-center justify-center">
                  <div className="w-[30px] h-[30px] 5xl:w-[36px] 5xl:h-[36px] 6xl:w-[42px] 6xl:h-[42px] bg-white rounded-full animate-pulse"></div>
                </div>
                <span className="text-white font-black text-[16px] 5xl:text-[18px] 6xl:text-[20px] tracking-widest uppercase block">Active</span>
                <span className="text-white font-black text-[16px] 5xl:text-[18px] 6xl:text-[20px] tracking-widest uppercase block text-white/70">Action</span>
              </div>

            </div>
          </div>

        </div>
      </section>
        </div>
      </div>
    </>
  );
};
