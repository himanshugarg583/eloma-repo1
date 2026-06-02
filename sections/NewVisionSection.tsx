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
    <div className="mx-[14px] mb-[14px] bg-[#fafafa] rounded-[26px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]" ref={sectionRef}>

      {/* Custom Cursor for Grid (Only visible when hovering grid items) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[80px] h-[80px] bg-white/30 backdrop-blur-md rounded-full pointer-events-none z-50 flex items-center justify-center scale-0 opacity-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference border border-white/50"
      >
        <span className="text-white text-xs font-bold tracking-widest">VIEW</span>
      </div>

      <section id="vision-new" className="min-h-0 px-6 md:px-12 py-[48px] md:py-[72px] 3xl:py-[96px] 4xl:py-[120px] flex flex-col lg:flex-row items-center justify-center gap-[40px] xl:gap-[100px] 3xl:gap-[120px] 4xl:gap-[170px] max-w-[1600px] 3xl:max-w-[1880px] 4xl:max-w-[2240px] mx-auto">

        {/* Left Side: Content */}
        <div ref={leftContentRef} className="flex-1 w-full max-w-[500px] 3xl:max-w-[600px] 4xl:max-w-[720px]">

          <div className="w-[56px] h-[56px] rounded-full border-[1.5px] border-[#eaeaea] flex items-center justify-center bg-white shadow-sm mb-[32px] overflow-hidden group cursor-pointer">
            <svg className="transform transition-transform duration-500 group-hover:scale-110" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>

          <h2 className="text-[44px] lg:text-[56px] 3xl:text-[66px] 4xl:text-[80px] font-extrabold tracking-[-2.5px] leading-[1.05] text-[#111] mb-[24px] 3xl:mb-[32px]">
            4+ Business<br />Verticals.<br className="hidden lg:block" /> One unified vision.
          </h2>

          <p className="text-[16px] 3xl:text-[19px] 4xl:text-[22px] text-[#555] leading-[1.65] mb-[40px] 3xl:mb-[48px] max-w-[420px] 3xl:max-w-[520px] 4xl:max-w-[640px] font-medium">
            Eloma Group unites expertise across transportation, digital solutions, virtual security, travel and customer support. We operate as one connected ecosystem of businesses, delivering integrated solutions that drive efficiency, growth, and long-term value across every market we serve.
          </p>

          <a href="/businesses" className="bg-transparent border border-[#d0d0d0] text-[#111] px-[32px] py-[12px] 3xl:px-[40px] 3xl:py-[15px] 4xl:px-[48px] 4xl:py-[17px] rounded-[50px] text-[15px] 3xl:text-[17px] 4xl:text-[19px] font-semibold cursor-pointer hover:bg-[#111] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 no-underline inline-block">
            All Businesses
          </a>

          {/* Floating Tool Icons Cluster (Matching Screenshot perfectly) */}
          <div ref={iconsRef} className="mt-[60px] 3xl:mt-[80px] relative w-[320px] h-[220px] origin-top-left 3xl:scale-110 4xl:scale-125">

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
        <div className="w-full lg:w-[700px] 3xl:w-[840px] 4xl:w-[1000px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden">

          {/* Header Row (Business & Create) */}
          <div className="flex justify-between items-center px-[32px] pt-[32px] pb-[16px] bg-white">
            <h3 className="text-[20px] 3xl:text-[24px] 4xl:text-[28px] font-bold text-[#111] tracking-tight">Industries We Serve</h3>
            <button className="bg-[#f5f5f5] text-[#111] px-[16px] py-[8px] rounded-[50px] text-[13px] font-bold flex items-center gap-1.5 hover:bg-[#eaeaea] transition-colors shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              All Businesses
            </button>
          </div>

          {/* Active Tab (Founder's Vision) with Folder Shape */}
          <div className="relative w-full h-[60px]">
            {/* The SVG curve approach for the folder tab */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#111] rounded-t-[20px] z-10" style={{ clipPath: 'polygon(0 0, 85% 0, 95% 100%, 0% 100%)' }}></div>
            <div className="relative z-20 flex items-center h-full px-[32px]">
              <h3 className="text-[18px] 3xl:text-[22px] font-semibold text-white tracking-wide">Business Verticals</h3>
            </div>
            {/* Background block to connect grid and hide gaps */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#fff] z-0"></div>
          </div>

          <div
            className="p-[20px] bg-white"
            onMouseEnter={handleMouseEnterGrid}
            onMouseLeave={handleMouseLeaveGrid}
          >
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] 3xl:gap-[22px]" style={{ perspective: '1000px' }}>

              {/* Vertical 01: Transportation and Logistics (featured) */}
              <div className="col-span-1 sm:col-span-2 rounded-[16px] bg-[#111] text-white p-6 md:p-8 flex flex-col justify-between border border-neutral-800 shadow-[0_15px_30px_rgba(0,0,0,0.15)] transform transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold tracking-widest text-[#3dbf9e]">01</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Vertical 01 / 05</span>
                </div>
                <div className="mt-6 text-[20px] md:text-[24px] 3xl:text-[30px] 4xl:text-[36px] font-bold leading-tight text-white">
                  Transportation and Logistics
                </div>
                <div className="mt-3 text-[14px] md:text-[15px] 3xl:text-[18px] 4xl:text-[20px] leading-relaxed text-neutral-300 max-w-[420px] 3xl:max-w-[560px]">
                  Integrated transport and last-mile logistics built for global enterprises - multi-modal freight, warehousing, 3PL, and customs compliance.
                </div>
              </div>

              {/* Vertical 02: Digital and Technology */}
              <div
                className="aspect-[4/5] rounded-[16px] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]"
                style={{ background: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80') no-repeat center/cover" }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="text-right font-black uppercase text-xl 3xl:text-3xl 4xl:text-4xl opacity-40 tracking-tighter text-white">02</div>
                  <div className="text-white font-bold uppercase tracking-[1px] text-[10px] 3xl:text-[12px] 4xl:text-[13px] bg-black/45 backdrop-blur-md px-2 py-1 3xl:px-3 3xl:py-1.5 rounded-full w-fit">Digital & Tech</div>
                </div>
              </div>

              {/* Vertical 03: Security and Risk Management */}
              <div
                className="aspect-[4/5] rounded-[16px] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]"
                style={{ background: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80') no-repeat center/cover" }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="text-right font-black uppercase text-xl 3xl:text-3xl 4xl:text-4xl opacity-40 tracking-tighter text-white">03</div>
                  <div className="text-white font-bold uppercase tracking-[1px] text-[10px] 3xl:text-[12px] 4xl:text-[13px] bg-black/45 backdrop-blur-md px-2 py-1 3xl:px-3 3xl:py-1.5 rounded-full w-fit">Security & Risk</div>
                </div>
              </div>

              {/* Vertical 04: Customer Support and Call Center */}
              <div
                className="aspect-[4/5] rounded-[16px] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]"
                style={{ background: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80') no-repeat center/cover" }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="text-right font-black uppercase text-xl 3xl:text-3xl 4xl:text-4xl opacity-40 tracking-tighter text-white">04</div>
                  <div className="text-white font-bold uppercase tracking-[1px] text-[10px] 3xl:text-[12px] 4xl:text-[13px] bg-black/45 backdrop-blur-md px-2 py-1 3xl:px-3 3xl:py-1.5 rounded-full w-fit">Customer Support</div>
                </div>
              </div>

              {/* Vertical 05: Travel and Tourism */}
              <div
                className="aspect-[4/5] rounded-[16px] relative overflow-hidden group cursor-pointer border border-[#f0f0f0]"
                style={{ background: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80') no-repeat center/cover" }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="text-right font-black uppercase text-xl 3xl:text-3xl 4xl:text-4xl opacity-40 tracking-tighter text-white">05</div>
                  <div className="text-white font-bold uppercase tracking-[1px] text-[10px] 3xl:text-[12px] 4xl:text-[13px] bg-black/45 backdrop-blur-md px-2 py-1 3xl:px-3 3xl:py-1.5 rounded-full w-fit">Travel & Tourism</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
