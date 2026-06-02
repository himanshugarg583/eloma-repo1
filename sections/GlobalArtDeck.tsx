import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardClasses = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"];

export function GlobalArtDeck() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray<HTMLElement>(".global-card");

      // Initial state: fanned deck positioned near the top (matching screenshot placement)
      gsap.set(cardElements[0], { x: -500, y: -780, rotation: -28, scale: 1 });
      gsap.set(cardElements[1], { x: -230, y: -750, rotation: -20, scale: 1 });
      gsap.set(cardElements[2], { x: -140, y: -720, rotation: -12, scale: 1 });
      gsap.set(cardElements[3], { x: -50, y: -790, rotation: -4, scale: 1 });
      gsap.set(cardElements[4], { x: 40, y: -760, rotation: 4, scale: 1 });
      gsap.set(cardElements[5], { x: 130, y: -730, rotation: 12, scale: 1 });
      gsap.set(cardElements[6], { x: 220, y: -700, rotation: 20, scale: 1 });

      // PIN the deck from the top of the hero until the end of the Ecommerce section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        endTrigger: "#ecommerce-scroll-container",
        end: "top+=13% top",
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

      // Main scroll-linked animation: fan → exact layout
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          endTrigger: "#ecommerce-scroll-container",
          end: "top top",
          scrub: 1.5,
        },
      });

      const bubbles = gsap.utils.toArray<HTMLElement>(".mention-bubble-art");

      // Hide bubbles initially
      gsap.set(bubbles, { x: -110, y: -140, opacity: 0, scale: 0.8 });

      /* ── fan → EXACT SCREENSHOT LAYOUT ── */
      tl.to(cardElements[0], { x: -260, y: 100, rotation: 0, scale: 1 }, 0);
      tl.to(cardElements[1], { x: -150, y: 130, rotation: 0, scale: 1 }, 0);
      tl.to(cardElements[2], { x: -40, y: 160, rotation: 0, scale: 1 }, 0);
      tl.to(cardElements[3], { x: 70, y: 190, rotation: 0, scale: 1 }, 0);
      tl.to(cardElements[4], { x: 180, y: 220, rotation: 0, scale: 1 }, 0);
      tl.to(cardElements[5], { x: 290, y: 250, rotation: 0, scale: 1 }, 0);
      tl.to(cardElements[6], { x: 400, y: 280, rotation: 0, scale: 1 }, 0);

      // Bubbles appear aligned with the screenshot
      tl.to(bubbles[0], { x: -260 + 100, y: 100 - 35, opacity: 1, scale: 1 }, 0);
      tl.to(bubbles[1], { x: 70 + 80, y: 190 - 35, opacity: 1, scale: 1 }, 0);

      // Fade out when scrolling past the Ecommerce section
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: "#ecommerce-scroll-container",
          start: "bottom -235%",
          end: "top -180%",
          scrub: true,
        },
        opacity: 0,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="global-art-deck absolute top-[38%] left-[50%] w-0 h-0 z-[50] pointer-events-none" ref={containerRef}>
      {/* EXACT SCREENSHOT BUBBLES */}
      <div className="mention-bubble-art absolute z-[60] bg-[#c0392b] text-white py-[6px] px-[12px] rounded-[24px] text-[13px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.15)]">@efficiency</div>
      <div className="mention-bubble-art absolute z-[60] bg-[#111] text-white py-[6px] px-[12px] rounded-[24px] text-[13px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.15)]">@growth</div>

      {cardClasses.map((c, index) => (
        <div key={index} className={`global-card absolute w-[220px] h-[280px] rounded-[16px] bg-cover bg-center shadow-[0_10px_40px_rgba(0,0,0,0.25)] origin-center border-[1px] border-[rgba(255,255,255,0.1)] ${c}`} />
      ))}
    </div>
  );
}