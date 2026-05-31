import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const TOP_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1488161628813-04466f872524?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=400&q=80"
];

const BOTTOM_IMAGES = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
];

export const NewCommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topTrackRef = useRef<HTMLDivElement>(null);
  const bottomTrackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Entrance animation for heading
      gsap.fromTo(headingRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Endless Marquee for Top Images (Moving Left)
      if (topTrackRef.current) {
        gsap.to(topTrackRef.current, {
          xPercent: -50, // Move by 50% of the duplicated track width
          ease: "none",
          duration: 40,
          repeat: -1,
        });
      }

      // Endless Marquee for Bottom Images (Moving Right)
      if (bottomTrackRef.current) {
        gsap.fromTo(bottomTrackRef.current, 
          { xPercent: -50 },
          {
            xPercent: 0,
            ease: "none",
            duration: 45,
            repeat: -1,
          }
        );
      }

      // Wave Animation for all images
      if (sectionRef.current) {
        const images = sectionRef.current.querySelectorAll('.wave-image');
        gsap.fromTo(images,
          { y: -20 },
          {
            y: 20,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: {
              each: 0.15,
              from: "start"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="mx-[14px] mb-[14px] bg-[#fdfdfd] rounded-[32px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center min-h-[90vh] py-[100px]"
    >
      
      {/* Top Floating Images Track */}
      <div className="absolute top-[80px] w-full overflow-hidden flex whitespace-nowrap">
        <div ref={topTrackRef} className="flex gap-[40px] px-[20px] items-center w-max">
          {/* Double the images for seamless looping */}
          {[...TOP_IMAGES, ...TOP_IMAGES].map((src, i) => (
            <div 
              key={`top-${i}`} 
              className="wave-image w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-[32px] overflow-hidden flex-shrink-0 shadow-lg cursor-pointer"
            >
              <img src={src} alt="Community Avatar" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[40px]" ref={headingRef}>
        
        {/* Small Icon above text */}
        <div className="w-[48px] h-[48px] rounded-full border border-[#eaeaea] bg-white flex items-center justify-center shadow-sm mb-[24px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>

        <h2 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold tracking-[-2px] leading-[1.05] text-[#111] mb-[24px] max-w-[800px]">
          You will find yourself<br />among us
        </h2>
        
        <p className="text-[16px] md:text-[20px] text-[#555] font-medium max-w-[420px] leading-[1.5]">
          Dive into a dynamic community where artists and buyers seamlessly merge.
        </p>

      </div>

      {/* Bottom Floating Images Track */}
      <div className="absolute bottom-[80px] w-full overflow-hidden flex whitespace-nowrap">
        <div ref={bottomTrackRef} className="flex gap-[40px] px-[20px] items-center w-max">
          {[...BOTTOM_IMAGES, ...BOTTOM_IMAGES].map((src, i) => (
            <div 
              key={`bottom-${i}`} 
              className="wave-image w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-[32px] overflow-hidden flex-shrink-0 shadow-lg cursor-pointer"
            >
              <img src={src} alt="Community Avatar" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
