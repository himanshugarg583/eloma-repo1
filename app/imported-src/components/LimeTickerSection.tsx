import React from 'react';

export const LimeTickerSection: React.FC = () => {
  return (
    <div className="section-card" style={{ background: 'var(--lime)', overflow: 'hidden' }}>
      <div id="lime-ticker">
        <div className="lt-track">
          <div className="lt-item">
            <div className="lt-thumb c5"></div>
            <div>
              <div>ride</div>
              <div className="lt-sub">2025 POSTER</div>
            </div>
          </div>
          <span>✦ Inspired by people</span>
          <div className="lt-item">
            <div className="lt-thumb c4"></div>
            <div>New Art Form</div>
          </div>
          <span>✦ Platforms unite</span>
          <div className="lt-item">
            <div className="lt-thumb c9"></div>
            <div>Bold Visions</div>
          </div>
          <span>✦ Creators rise</span>

          {/* duplicate for infinite scroll effect */}
          <div className="lt-item">
            <div className="lt-thumb c5"></div>
            <div>
              <div>ride</div>
              <div className="lt-sub">2025 POSTER</div>
            </div>
          </div>
          <span>✦ Inspired by people</span>
          <div className="lt-item">
            <div className="lt-thumb c4"></div>
            <div>New Art Form</div>
          </div>
          <span>✦ Platforms unite</span>
          <div className="lt-item">
            <div className="lt-thumb c9"></div>
            <div>Bold Visions</div>
          </div>
          <span>✦ Creators rise</span>
        </div>
        <div className="lt-icons">
          <div className="lt-icon">💎</div>
          <div className="lt-icon">🔷</div>
          <div className="lt-icon">🧩</div>
          <div className="lt-icon">⚙️</div>
          <div className="lt-icon">🔗</div>
          <div className="lt-icon">🎯</div>
          <div className="lt-icon">✨</div>
          <div className="lt-icon">🔺</div>
          <div className="lt-icon">📐</div>
        </div>
      </div>
    </div>
  );
};
