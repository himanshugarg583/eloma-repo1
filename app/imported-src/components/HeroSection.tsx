import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="mx-[14px] mb-[14px] bg-[#ebebeb] rounded-[26px] overflow-hidden relative" style={{ marginTop: '78px' }}>
      <style>{`
        @keyframes wordUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bubblePop {
          from { opacity: 0; transform: scale(0.5) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="hero"
        className="min-h-screen flex flex-col items-center text-center px-[40px] relative bg-[#ebebeb]"
        style={{ paddingTop: '50px', paddingBottom: '60px' }}
      >
        {/* @coplin bubble */}
        <div
          className="absolute z-[60] px-4 py-2 rounded-[50px] text-[14px] font-bold text-white bg-[#4a90e2] shadow-[0_8px_24px_rgba(0,0,0,0.15)] opacity-0 "
          style={{ top: '44%', left: '7%', animation: 'bubblePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.1s forwards' }}
        >
          @coplin
          <div className="absolute -bottom-[7px] left-[16px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#4a90e2]"></div>
        </div>

        {/* @andrea bubble */}
        <div
          className="absolute z-[60] px-4 py-2 rounded-[50px] text-[14px] font-bold text-white bg-[#3dbf9e] shadow-[0_8px_24px_rgba(0,0,0,0.15)] opacity-0"
          style={{ top: '38%', right: '7%', animation: 'bubblePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.3s forwards' }}
        >
          @andrea
          <div className="absolute -bottom-[7px] left-[16px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#3dbf9e]"></div>
        </div>

        {/* Heading — high z-index so it always shows above cards */}
        <h1
          className="text-[clamp(40px,5.5vw,76px)] font-bold tracking-[-2px] leading-[1.1] text-[#111] relative"
          style={{ zIndex: 300, marginBottom: '0px' }}
        >
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .05s forwards' }}>A</span>{' '}
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .12s forwards' }}>place</span>{' '}
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .19s forwards' }}>to</span>{' '}
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .26s forwards' }}>display</span>{' '}
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .33s forwards' }}>your</span>
          <br />
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .45s forwards' }}>masterpiece.</span>
        </h1>

        {/* Spacer where GlobalArtDeck floats */}
        <div className="w-full h-[340px]" id="hero-art-fan" />

        {/* Paragraph */}
        <p
          className="text-[15px] text-[#353434] max-w-[420px] leading-[1.7] relative opacity-0"
          style={{ zIndex: 300, marginTop: '12px', marginBottom: '32px', animation: 'fadeUp .6s ease 1s forwards' }}
        >
          Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center gap-[20px] relative opacity-0"
          style={{ zIndex: 300, animation: 'fadeUp .6s ease 1.15s forwards' }}
        >
          <button className="bg-[#111] text-white px-[36px] py-[16px] rounded-[50px] text-[15px] font-semibold cursor-pointer border-none transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            Join for $9.99/m
          </button>
          <button className="bg-transparent p-5  text-[#111] border-none text-[15px] font-medium cursor-pointer hover:opacity-50 transition-opacity duration-200">
            Read more →
          </button>
        </div>
      </section>
    </div>
  );
};
