import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="mx-[14px] mb-[14px] bg-[#ebebeb] rounded-[26px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]" style={{ marginTop: '78px' }}>
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
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
      `}</style>

      <section
        id="hero"
        className="min-h-screen flex flex-col items-center text-center px-6 md:px-12 relative bg-[#ebebeb] pt-[80px] md:pt-[100px] pb-[60px] md:pb-[80px]"
      >
        {/* Subtle grid mesh background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>

        {/* Abstract Glowing Blurred Orbs for ultra-premium design */}
        <div
          className="absolute top-[-10%] right-[10%] w-[450px] h-[450px] bg-[#3dbf9e] opacity-[0.11] rounded-full blur-[100px] mix-blend-multiply pointer-events-none z-10"
          style={{ animation: 'floatSlow 9s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-[#1a56ff] opacity-[0.09] rounded-full blur-[120px] mix-blend-multiply pointer-events-none z-10"
          style={{ animation: 'floatSlow 11s ease-in-out infinite 1.5s' }}
        ></div>

        {/* @innovation bubble */}
        <div
          className="absolute z-[60] px-5 py-2.5 rounded-[50px] text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(26,86,255,0.25)] opacity-0 border border-white/20"
          style={{
            top: '44%',
            left: '7%',
            background: 'linear-gradient(135deg, rgba(26,86,255,0.9), rgba(13,71,161,0.95))',
            backdropFilter: 'blur(8px)',
            animation: 'bubblePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.1s forwards'
          }}
        >
          @innovation
          <div className="absolute -bottom-[7px] left-[20px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#0d47a1]"></div>
        </div>

        {/* @sustainability bubble */}
        <div
          className="absolute z-[60] px-5 py-2.5 rounded-[50px] text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(61,191,158,0.25)] opacity-0 border border-white/20"
          style={{
            top: '38%',
            right: '7%',
            background: 'linear-gradient(135deg, rgba(61,191,158,0.9), rgba(46,125,50,0.95))',
            backdropFilter: 'blur(8px)',
            animation: 'bubblePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.3s forwards'
          }}
        >
          @sustainability
          <div className="absolute -bottom-[7px] left-[20px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#2e7d32]"></div>
        </div>

        {/* Heading — high z-index so it always shows above cards */}
        <h1
          className="text-[clamp(32px,5.5vw,70px)] font-black tracking-[-2.5px] leading-[1.05] text-[#111] relative z-30"
          style={{ zIndex: 300, marginBottom: '0px' }}
        >
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .05s forwards' }}>Powering</span>{' '}
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .12s forwards', background: 'linear-gradient(90deg, #1a56ff, #3dbf9e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Businesses.</span>{' '}
          <br className="sm:hidden" />
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .19s forwards' }}>Connecting</span>{' '}
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .26s forwards', background: 'linear-gradient(90deg, #3dbf9e, #1a56ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Industries.</span>
          <br />
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .38s forwards' }}>Building</span>{' '}
          <span className="inline-block opacity-0" style={{ animation: 'wordUp .5s ease .45s forwards' }}>the</span>{' '}
          <span className="inline-block opacity-0 text-[#111]" style={{ animation: 'wordUp .5s ease .52s forwards' }}>Future.</span>
        </h1>

        {/* Spacer where GlobalArtDeck floats */}
        <div className="w-full h-[440px]" id="hero-art-fan" />

        {/* Paragraph */}
        <p
          className="text-[15px] sm:text-[17px] text-[#444] max-w-[580px] leading-[1.75] relative opacity-0 font-medium z-30"
          style={{ zIndex: 300, marginTop: '20px', marginBottom: '36px', animation: 'fadeUp .6s ease 1s forwards' }}
        >
          A dynamic business group uniting logistics, digital innovation, security, travel and customer solutions - driven by purpose, performance, and sustainability.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center gap-[20px] relative opacity-0 z-30"
          style={{ zIndex: 300, animation: 'fadeUp .6s ease 1.15s forwards' }}
        >
          <a
            href="#pricing"
            className="group bg-[#111] text-white px-[38px] py-[18px] rounded-[50px] text-[15px] font-bold cursor-pointer border-none transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:bg-[#222] no-underline flex items-center gap-1 z-30"
          >
            Partner With Us
          </a>
          <a
            href="#ecommerce"
            className="group bg-transparent px-[24px] py-[18px] text-[#111] border-none text-[15px] font-bold cursor-pointer hover:opacity-60 transition-opacity duration-300 no-underline flex items-center gap-1.5 z-30"
          >
            Discover More <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};
