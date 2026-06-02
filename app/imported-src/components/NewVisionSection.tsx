import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NewVisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Main scroll stagger for left content (Smoother, less aggressive)
      if (leftContentRef.current) {
        gsap.fromTo(leftContentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            }
          }
        );
      }

      // Stagger for Grid Items (Removed 3D scale/rotation to prevent layout jumps)
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
            }
          }
        );
      }

      // Smooth organic floating for icons (Starts smoothly)
      if (iconsRef.current) {
        const icons = iconsRef.current.children;
        Array.from(icons).forEach((icon, i) => {
          gsap.to(icon, {
            y: `random(-10, 10)`,
            x: `random(-10, 10)`,
            rotation: `random(-5, 5)`,
            duration: `random(3, 4)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.15,
          });
        });
      }

    }, sectionRef); // Scoped to sectionRef for safer rendering

    return () => ctx.revert();
  }, []);

  // Smooth custom cursor for the grid area
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const handleMouseEnterGrid = () => {
    gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
  };
  const handleMouseLeaveGrid = () => {
    gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
  };

  return (
    <div className="mx-[14px] mb-[14px] bg-[#fafafa] rounded-[32px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]" ref={sectionRef}>

      {/* Custom Cursor for Grid (Only visible when hovering grid items) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[80px] h-[80px] bg-white/30 backdrop-blur-md rounded-full pointer-events-none z-50 flex items-center justify-center scale-0 opacity-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference border border-white/50"
      >
        <span className="text-white text-xs font-bold tracking-widest">VIEW</span>
      </div>

      <section id="vision-new" className="min-h-screen px-[40px] md:px-[80px] lg:px-[120px] py-[120px] flex flex-col lg:flex-row items-center justify-center gap-[40px] xl:gap-[100px] max-w-[1600px] mx-auto">

        {/* Left Side: Content */}
        <div ref={leftContentRef} className="flex-1 w-full max-w-[500px]">

          <div className="w-[56px] h-[56px] rounded-full border-[1.5px] border-[#eaeaea] flex items-center justify-center bg-white shadow-sm mb-[32px] overflow-hidden group cursor-pointer">
            <svg className="transform transition-transform duration-500 group-hover:scale-110" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>

          <h2 className="text-[48px] lg:text-[64px] font-extrabold tracking-[-2.5px] leading-[1.05] text-[#111] mb-[24px]">
            Our vision<br />for any art<br className="hidden lg:block" /> technology.
          </h2>

          <p className="text-[17px] text-[#555] leading-[1.6] mb-[40px] max-w-[420px] font-medium">
            Every piece of art tells a story. Echoes of Expression allows artists to showcase their personal journeys through their work.
          </p>

          <button className="bg-transparent border border-[#d0d0d0] text-[#111] px-[32px] py-[12px] rounded-[50px] text-[15px] font-semibold cursor-pointer hover:bg-[#111] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
            Read more
          </button>

          {/* Floating Tool Icons Cluster (Matching Screenshot perfectly) */}
          <div ref={iconsRef} className="mt-[60px] relative w-[320px] h-[220px]">

            {/* Pen Nib (Top) */}
            <div className="absolute top-[0px] left-[100px] w-[64px] h-[64px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[3] group">
              <svg className="group-hover:text-[#3dbf9e] transition-colors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
            </div>

            {/* Pen Tool (Left) */}
            <div className="absolute top-[70px] left-[10px] w-[64px] h-[64px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[2] group">
              <svg className="group-hover:text-[#1a56ff] transition-colors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            </div>

            {/* Venn Diagram / Color (Middle) */}
            <div className="absolute top-[80px] left-[85px] w-[64px] h-[64px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[4] group">
              <svg className="group-hover:text-[#ff9800] transition-colors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"></circle><circle cx="14" cy="14" r="7"></circle></svg>
            </div>

            {/* Command / Flower (Middle Right) */}
            <div className="absolute top-[100px] left-[170px] w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[2] group">
              <svg className="group-hover:text-[#e64a19] transition-colors transform group-hover:rotate-180 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            </div>

            {/* Geometry / Shapes (Right) */}
            <div className="absolute top-[85px] left-[245px] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[1] group">
              <svg className="group-hover:text-[#9c27b0] transition-colors" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1"></rect><circle cx="17" cy="7" r="4"></circle><path d="M12 21l-5-9h10z"></path></svg>
            </div>

            {/* Pencil (Bottom Left) */}
            <div className="absolute top-[150px] left-[35px] w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[1] group">
              <svg className="group-hover:text-[#4caf50] transition-colors" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </div>

            {/* Layers (Bottom Middle) */}
            <div className="absolute top-[165px] left-[110px] w-[56px] h-[56px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[3] group">
              <svg className="group-hover:text-[#1a56ff] transition-colors" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>

            {/* Magic Wand (Bottom Right) */}
            <div className="absolute top-[155px] left-[200px] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] z-[2] group">
              <svg className="group-hover:text-[#ffc107] transition-colors" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="6.5"></line></svg>
            </div>

          </div>
        </div>

        {/* Right Side: Tabbed Interface (3-Column Grid) */}
        <div className="w-full lg:w-[700px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden">

          {/* Header Row (Business & Create) */}
          <div className="flex justify-between items-center px-[32px] pt-[32px] pb-[16px] bg-white">
            <h3 className="text-[24px] font-medium text-[#111] tracking-tight">Business</h3>
            <button className="bg-[#f5f5f5] text-[#111] px-[16px] py-[8px] rounded-[50px] text-[13px] font-bold flex items-center gap-1.5 hover:bg-[#eaeaea] transition-colors shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Create
            </button>
          </div>

          {/* Active Tab (Personal) with Folder Shape */}
          <div className="relative w-full h-[60px]">
            {/* The SVG curve approach for the folder tab */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#111] rounded-t-[20px] z-10" style={{ clipPath: 'polygon(0 0, 85% 0, 95% 100%, 0% 100%)' }}></div>
            <div className="relative z-20 flex items-center h-full px-[32px]">
              <h3 className="text-[20px] font-medium text-white tracking-wide">Personal</h3>
            </div>
            {/* Background block to connect grid and hide gaps */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#fff] z-0"></div>
          </div>

          {/* 3x2 Grid */}
          <div
            className="p-[20px] bg-white"
            onMouseEnter={handleMouseEnterGrid}
            onMouseLeave={handleMouseLeaveGrid}
          >
            <div ref={gridRef} className="grid grid-cols-3 gap-[16px]" style={{ perspective: '1000px' }}>

              {/* Top Row */}
              {/* Item 1: Orange 3D Character */}
              <div className="aspect-[4/5] rounded-[16px] bg-[#d32f2f] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff7043] to-[#d84315] opacity-90 transition-transform duration-500 group-hover:scale-105"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="text-right font-black uppercase text-xl opacity-20 tracking-tighter mix-blend-overlay">Staff</div>
                  <div className="text-white font-bold uppercase tracking-[1px] text-[9px] bg-black/40 backdrop-blur-md px-2 py-1 rounded-full w-fit">No or Once More</div>
                </div>
              </div>

              {/* Item 2: Person in Field */}
              <div className="aspect-[4/5] rounded-[16px] bg-[#4caf50] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#66bb6a] to-[#2e7d32] transition-transform duration-500 group-hover:scale-105"></div>
                <div className="absolute inset-0 p-4 flex items-center justify-center">
                  <div className="text-white font-black text-[14px] tracking-[2px] uppercase text-center drop-shadow-md">A Knit By<br />Le Fleur*</div>
                </div>
              </div>

              {/* Item 3: The Green Knight */}
              <div className="aspect-[4/5] rounded-[16px] bg-[#ffb300] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ffca28] to-[#ff8f00] transition-transform duration-500 group-hover:scale-105"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="text-[#111] font-black text-[22px] uppercase tracking-tighter leading-none mb-1">The<br />Green<br />Knight</div>
                </div>
              </div>

              {/* Bottom Row */}
              {/* Item 4: ALL GOOD THINGS */}
              <div className="aspect-[4/5] rounded-[16px] bg-[#ebebeb] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"></div>
                <div className="absolute inset-0 flex flex-col p-4">
                  <div className="text-[20px] font-black uppercase text-black leading-none tracking-tighter z-10">All Good<br />Things</div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[#c2185b] rounded-full mix-blend-multiply opacity-70 blur-[12px] group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-[9px] font-bold text-black tracking-widest uppercase">To An...</div>
                </div>
              </div>

              {/* Item 5: Glimmer */}
              <div className="aspect-[4/5] rounded-[16px] bg-[#ff5722] relative overflow-hidden group cursor-pointer border-[4px] border-[#111] flex flex-col justify-between p-3">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff7043] to-[#e64a19] transition-transform duration-500 group-hover:scale-105 z-0"></div>
                <div className="text-[#111] font-black text-[28px] uppercase tracking-tighter leading-none mt-1 z-10">Glimmer</div>
                <div className="text-white font-bold tracking-[1px] text-[10px] z-10">Mi. 10.4</div>
              </div>

              {/* Item 6: Fluffy Worm */}
              <div className="aspect-[4/5] rounded-[16px] bg-[#1a56ff] relative overflow-hidden group cursor-pointer border border-[#f0f0f0] flex flex-col items-center justify-center p-3">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a56ff] to-[#42a5f5] transition-transform duration-500 group-hover:scale-105 z-0"></div>
                <div className="relative z-10 w-[40px] h-[40px] border-[2px] border-white/40 rounded-full mb-3 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                  <div className="w-[16px] h-[16px] bg-white rounded-full"></div>
                </div>
                <span className="relative z-10 text-white font-black text-[14px] tracking-widest uppercase block leading-tight">Fluffy</span>
                <span className="relative z-10 text-white font-black text-[14px] tracking-widest uppercase block leading-tight opacity-70">Worm</span>
              </div>

            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
