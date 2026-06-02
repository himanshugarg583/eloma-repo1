"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

import { HeroSection } from "@/components/our business/HeroSection";
import { GlobalArtDeck } from "@/components/our business/GlobalArtDeck";
import { EcommerceSection } from "@/components/our business/EcommerceSection";
import { RevealSection } from "@/components/our business/RevealSection";
import { CommunitySection } from "@/components/our business/CommunitySection";
import { NewRevealSection } from "@/components/our business/NewRevealSection";
import { NewEcommerceSection } from "@/components/our business/NewEcommerceSection";
import { NewVisionSection } from "@/components/our business/NewVisionSection";
import { NewCommunitySection } from "@/components/our business/NewCommunitySection";
import { PricingSection } from "@/components/our business/PricingSection";

export default function OurBusinessPage() {
  useIntersectionObserver();

  return (
    <div id="our-business-page" className="app-container">
      <style jsx global>{`
        #our-business-page {
          --bg: #ebebeb;
          --card-bg: #f4f4f4;
          --white: #ffffff;
          --text: #111111;
          --muted: #999999;
          --teal: #4ecdc4;
          --orange: #c0392b;
          --lime: #d6f03a;
          --blue: #4a90e2;
          --green-bubble: #3dbf9e;
          --dark-bubble: #111111;
        }

        #our-business-page .section-card {
          margin: 0 14px 14px;
          background: var(--card-bg);
          border-radius: 26px;
          overflow: hidden;
          position: relative;
        }

        #our-business-page #reveal-section {
          padding: 120px 60px;
          position: relative;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #our-business-page .reveal-text {
          font-size: clamp(28px, 4vw, 56px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.25;
          text-align: center;
          max-width: 1000px;
          position: relative;
          z-index: 2;
        }

        #our-business-page .deck-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 3;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        #our-business-page .deck-card {
          position: absolute;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s;
        }

        #our-business-page .deck-card:nth-child(1) {
          width: 130px;
          height: 160px;
          top: -80px;
          left: -180px;
          transform: rotate(-10deg) scale(0.8);
          opacity: 0.6;
        }

        #our-business-page .deck-card:nth-child(2) {
          width: 150px;
          height: 180px;
          top: -90px;
          left: -80px;
          transform: rotate(-4deg) scale(0.9);
          opacity: 0.8;
        }

        #our-business-page .deck-card:nth-child(3) {
          width: 160px;
          height: 200px;
          top: -100px;
          left: 0;
          transform: rotate(1deg);
          opacity: 1;
          z-index: 4;
        }

        #our-business-page .deck-card:nth-child(4) {
          width: 140px;
          height: 170px;
          top: -85px;
          left: 100px;
          transform: rotate(6deg) scale(0.9);
          opacity: 0.8;
        }

        #our-business-page .deck-card:nth-child(5) {
          width: 120px;
          height: 150px;
          top: -75px;
          left: 180px;
          transform: rotate(12deg) scale(0.8);
          opacity: 0.6;
        }

        #our-business-page .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        #our-business-page .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        #our-business-page .trusted-content {
          padding: 0 60px;
          margin-bottom: 80px;
        }

        #our-business-page .trusted-title {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          font-size: clamp(40px, 4vw, 58px);
          font-weight: 700;
          letter-spacing: -2px;
          line-height: 1;
          margin-bottom: 18px;
        }

        #our-business-page .trusted-subtitle {
          max-width: 650px;
          font-size: 18px;
          line-height: 1.6;
          color: var(--muted);
        }

        #our-business-page .logo-marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        #our-business-page .logo-track {
          display: flex;
          align-items: center;
          gap: 90px;
          width: max-content;
          animation: ourBusinessMarquee 25s linear infinite;
        }

        #our-business-page .company-logo {
          flex-shrink: 0;
          font-size: 34px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #c2c2c2;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        #our-business-page .company-logo:hover {
          color: #111;
          transform: translateY(-2px);
        }

        #our-business-page #vision {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 80px 60px;
          align-items: start;
        }

        #our-business-page .vision-left {
          padding-right: 50px;
        }

        #our-business-page .vision-title {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 10px;
        }

        #our-business-page .vision-panel {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.07);
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        #our-business-page .vision-panel.in-view {
          opacity: 1;
          transform: translateX(0);
        }

        #our-business-page .panel-tabs {
          display: flex;
          align-items: center;
          padding: 0 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        #our-business-page .panel-tab {
          padding: 16px 18px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          color: var(--muted);
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: color 0.2s;
        }

        #our-business-page .art-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding: 16px;
        }

        #our-business-page .art-grid-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          aspect-ratio: 1;
          transition: transform 0.3s;
          cursor: pointer;
        }

        #our-business-page .art-grid-item:hover {
          transform: scale(1.04);
        }

        #our-business-page .global-art-deck {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none;
          z-index: 50;
        }

        #our-business-page .global-card {
          position: absolute;
          left: 50%;
          top: 60%;
          width: 220px;
          height: 280px;
          border-radius: 28px;
          transform-style: preserve-3d;
          will-change: transform;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08), 0 40px 80px rgba(0, 0, 0, 0.08);
        }

        #our-business-page .global-card.c1 { background: linear-gradient(135deg, #f44336, #d32f2f); }
        #our-business-page .global-card.c2 { background: linear-gradient(135deg, #2196f3, #0d47a1); }
        #our-business-page .global-card.c3 { background: linear-gradient(135deg, #ff9800, #ef6c00); }
        #our-business-page .global-card.c4 { background: linear-gradient(135deg, #9c27b0, #512da8); }
        #our-business-page .global-card.c5 { background: linear-gradient(135deg, #4caf50, #1b5e20); }
        #our-business-page .global-card.c6 { background: linear-gradient(135deg, #00bcd4, #006064); }
        #our-business-page .global-card.c7 { background: linear-gradient(135deg, #ffc107, #ff6f00); }

        #our-business-page .pr-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 30px;
        }

        #our-business-page .pr-title .muted {
          color: #bbb;
        }

        #our-business-page .pr-toggle {
          display: flex;
          align-items: center;
          gap: 0;
          background: #e0e0e0;
          border-radius: 50px;
          padding: 4px;
          width: fit-content;
          margin-bottom: 44px;
        }

        #our-business-page .pr-tab {
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: transparent;
          font-family: inherit;
          color: #666;
          transition: all 0.2s;
        }

        #our-business-page .pr-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        #our-business-page .pr-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          border: 1.5px solid transparent;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s;
        }

        #our-business-page .pr-card.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        #our-business-page .pr-name {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 14px;
        }

        #our-business-page .pr-price {
          font-size: 52px;
          font-weight: 700;
          letter-spacing: -2px;
        }

        #our-business-page .pr-period {
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 24px;
        }

        #our-business-page .pr-features {
          list-style: none;
          margin-bottom: 28px;
        }

        #our-business-page .pr-features li {
          font-size: 14px;
          padding: 9px 0;
          border-bottom: 1px solid #f0f0f0;
          color: #555;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        #our-business-page .pr-features li::before {
          content: '✓';
          color: var(--teal);
          font-weight: 700;
          font-size: 12px;
        }

        #our-business-page .pr-btn {
          width: 100%;
          padding: 14px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          border: 1.5px solid #111;
          background: transparent;
          color: #111;
          transition: background 0.2s, color 0.2s;
        }

        #our-business-page #lime-ticker {
          background: var(--lime);
          padding: 10px 0 24px;
          overflow: hidden;
        }

        #our-business-page .lt-track {
          display: flex;
          gap: 18px;
          animation: ourBusinessScrollLeft 18s linear infinite;
          white-space: nowrap;
          padding: 18px 0;
        }

        #our-business-page .lt-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 26px;
          font-weight: 700;
          flex-shrink: 0;
        }

        @keyframes ourBusinessMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes ourBusinessScrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 1024px) {
          #our-business-page #reveal-section {
            padding: 32px 20px 24px;
            gap: 18px;
          }

          #our-business-page .trusted-content,
          #our-business-page #vision {
            padding-left: 20px;
            padding-right: 20px;
          }

          #our-business-page #vision {
            grid-template-columns: 1fr;
          }

          #our-business-page .pr-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <Navbar />
      <main>
        <HeroSection />
        <GlobalArtDeck />

        <EcommerceSection />
        <RevealSection />
        <CommunitySection />

        <NewRevealSection />
        <NewEcommerceSection />
        <NewVisionSection />
        <NewCommunitySection />

        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
