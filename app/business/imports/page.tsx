"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImportsPage() {
  return (
    <div id="imports-page" className="app-container">
      <style jsx global>{`
        #imports-page {
          --bg: #ebebeb;
          --card-bg: #f4f4f4;
          --text: #111111;
          --muted: #666666;
          --accent: #0f5f8f;
          --accent-2: #d6f03a;
          --border: rgba(17, 17, 17, 0.08);
        }

        #imports-page .section-card {
          margin: 0 14px 14px;
          background: var(--card-bg);
          border-radius: 26px;
          overflow: hidden;
          position: relative;
        }

        #imports-page .imports-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 20%, rgba(15, 95, 143, 0.18), transparent 28%),
            radial-gradient(circle at 80% 10%, rgba(214, 240, 58, 0.25), transparent 18%),
            linear-gradient(135deg, #f5f7fa 0%, #dfe8ee 100%);
        }

        #imports-page .imports-hero-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 60px 96px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        #imports-page .imports-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--accent);
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
        }

        #imports-page .imports-eyebrow::before {
          content: "";
          width: 11px;
          height: 11px;
          border-radius: 999px;
          background: var(--accent-2);
          box-shadow: 0 0 0 8px rgba(214, 240, 58, 0.18);
        }

        #imports-page .imports-title {
          font-size: clamp(48px, 6.4vw, 88px);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 700;
          color: var(--text);
          max-width: 10ch;
          margin: 0;
        }

        #imports-page .imports-title .accent {
          color: var(--accent);
        }

        #imports-page .imports-copy {
          margin-top: 28px;
          max-width: 640px;
          font-size: 18px;
          line-height: 1.7;
          color: var(--muted);
        }

        #imports-page .imports-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        #imports-page .imports-btn,
        #imports-page .imports-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        #imports-page .imports-btn {
          background: var(--text);
          color: white;
          box-shadow: 0 14px 34px rgba(17, 17, 17, 0.18);
        }

        #imports-page .imports-btn-secondary {
          background: white;
          color: var(--text);
          border: 1px solid var(--border);
        }

        #imports-page .imports-btn:hover,
        #imports-page .imports-btn-secondary:hover {
          transform: translateY(-1px);
        }

        #imports-page .imports-panel {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 24px 80px rgba(15, 47, 78, 0.12);
        }

        #imports-page .imports-panel-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        #imports-page .imports-stat,
        #imports-page .imports-card {
          border-radius: 20px;
          background: white;
          border: 1px solid var(--border);
          padding: 18px;
        }

        #imports-page .imports-stat .label,
        #imports-page .imports-card .label {
          display: block;
          color: var(--muted);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 10px;
          font-weight: 700;
        }

        #imports-page .imports-stat .value {
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.04em;
        }

        #imports-page .imports-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
          font-size: 14px;
        }

        #imports-page .imports-section {
          margin: 0 14px 14px;
          background: var(--card-bg);
          border-radius: 26px;
          overflow: hidden;
        }

        #imports-page .imports-section-inner {
          padding: 72px 60px;
          max-width: 1280px;
          margin: 0 auto;
        }

        #imports-page .imports-kicker {
          color: var(--accent);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.24em;
          font-weight: 700;
          margin-bottom: 14px;
        }

        #imports-page .imports-section-title {
          font-size: clamp(34px, 4.5vw, 58px);
          line-height: 1.04;
          letter-spacing: -0.05em;
          margin: 0;
          color: var(--text);
          max-width: 14ch;
        }

        #imports-page .imports-section-copy {
          margin-top: 18px;
          max-width: 760px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.75;
        }

        #imports-page .imports-grid {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        #imports-page .imports-tile {
          background: white;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 22px;
          min-height: 168px;
        }

        #imports-page .imports-tile h3 {
          margin: 0 0 10px;
          font-size: 18px;
          letter-spacing: -0.03em;
          color: var(--text);
        }

        #imports-page .imports-tile p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        #imports-page .imports-band {
          background: linear-gradient(90deg, #0f5f8f 0%, #174a73 100%);
          color: white;
          margin: 0 14px 14px;
          border-radius: 26px;
          overflow: hidden;
        }

        #imports-page .imports-band-inner {
          padding: 36px 60px;
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          align-items: center;
          justify-content: space-between;
        }

        #imports-page .imports-band strong {
          font-size: 24px;
          letter-spacing: -0.03em;
        }

        #imports-page .imports-band span {
          color: rgba(255, 255, 255, 0.78);
        }

        @media (max-width: 1024px) {
          #imports-page .imports-hero-inner,
          #imports-page .imports-section-inner,
          #imports-page .imports-band-inner {
            padding-left: 20px;
            padding-right: 20px;
          }

          #imports-page .imports-hero-inner {
            grid-template-columns: 1fr;
            gap: 28px;
            padding-top: 100px;
            padding-bottom: 72px;
          }

          #imports-page .imports-grid,
          #imports-page .imports-panel-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Navbar />

      <main>
        <section className="section-card imports-hero">
          <div className="imports-hero-inner">
            <div>
              <div className="imports-eyebrow">Business / Imports</div>
              <h1 className="imports-title">
                Global <span className="accent">imports</span> made reliable.
              </h1>
              <p className="imports-copy">
                We source, consolidate, and move products across borders with clear visibility, customs support,
                and delivery planning built for fast-moving import operations.
              </p>
              <div className="imports-actions">
                <a href="#import-services" className="imports-btn">Explore services</a>
                <a href="#import-network" className="imports-btn-secondary">View network</a>
              </div>
            </div>

            <div className="imports-panel">
              <div className="imports-panel-grid">
                <div className="imports-stat">
                  <span className="label">Origin markets</span>
                  <div className="value">18+</div>
                </div>
                <div className="imports-stat">
                  <span className="label">Destinations</span>
                  <div className="value">8 countries</div>
                </div>
                <div className="imports-card">
                  <span className="label">Core focus</span>
                  <p>Air, sea, and road import coordination for retail, wholesale, and enterprise supply chains.</p>
                </div>
                <div className="imports-card">
                  <span className="label">Compliance</span>
                  <p>Documentation, customs liaison, and landed-cost visibility before cargo leaves origin.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="import-services" className="imports-section">
          <div className="imports-section-inner">
            <div className="imports-kicker">What we handle</div>
            <h2 className="imports-section-title">End-to-end import support for growing businesses.</h2>
            <p className="imports-section-copy">
              From supplier pickup to port handling and final delivery, we coordinate the full journey so your team can
              focus on stock, sales, and operations instead of border complexity.
            </p>

            <div className="imports-grid">
              <article className="imports-tile">
                <h3>Supplier coordination</h3>
                <p>We align pickup timing, packaging checks, and pre-shipment documents with the origin supplier.</p>
              </article>
              <article className="imports-tile">
                <h3>Customs & compliance</h3>
                <p>We prepare the paperwork and keep your shipment aligned with import and inspection requirements.</p>
              </article>
              <article className="imports-tile">
                <h3>Last-mile delivery</h3>
                <p>We move cleared cargo to your warehouse, store, or project site with planned handover visibility.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="import-network" className="imports-band">
          <div className="imports-band-inner">
            <div>
              <strong>Imports across major trade lanes</strong>
              <div>
                <span>Asia, Middle East, Europe, and Australia-ready routing.</span>
              </div>
            </div>
            <div>
              <span>Need a lane review or landed-cost estimate? We can map it out before shipment.</span>
            </div>
          </div>
        </section>

        <section className="imports-section">
          <div className="imports-section-inner">
            <div className="imports-kicker">Why us</div>
            <h2 className="imports-section-title">Built for visibility, speed, and lower friction.</h2>
            <p className="imports-section-copy">
              Our import process is designed to reduce delays, improve forecasting, and keep every party aligned from
              origin to destination.
            </p>

            <div className="imports-grid">
              <article className="imports-tile">
                <h3>Single point of contact</h3>
                <p>One team manages the shipment instead of multiple disconnected vendors and brokers.</p>
              </article>
              <article className="imports-tile">
                <h3>Clear cost control</h3>
                <p>Land freight, duties, and handling are tracked so you can plan margin before the shipment moves.</p>
              </article>
              <article className="imports-tile">
                <h3>Operational updates</h3>
                <p>Status updates keep purchasing, warehouse, and finance teams synchronized at every stage.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
