import React, { useState } from 'react';

export const VisionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Personal' | 'Business'>('Personal');

  const handleMouseEnterGridItem = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.transition = 'transform .25s ease';
  };

  const handleMouseLeaveGridItem = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div className="section-card">
      <section id="vision">
        <div className="vision-left">
          <div className="vision-icon-ring">🎧</div>
          <h2 className="vision-title reveal">
            Our vision<br />for <span className="muted">today.</span>
          </h2>
          <p className="reveal" style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '4px' }}>
            Empowering creative expression through technology and community.
          </p>
          <div className="tool-icons">
            <div className="tool-icon">✏️</div>
            <div className="tool-icon">🖊️</div>
            <div className="tool-icon">⭕</div>
            <div className="tool-icon">⚙️</div>
            <div className="tool-icon">📐</div>
            <div className="tool-icon">📚</div>
            <div className="tool-icon">🎯</div>
            <div className="tool-icon">✨</div>
          </div>
        </div>
        <div>
          <div className="vision-panel" id="visionPanel">
            <div className="panel-tabs">
              <div
                className={`panel-tab ${activeTab === 'Business' ? 'active' : ''}`}
                onClick={() => setActiveTab('Business')}
              >
                Business
              </div>
              <div
                className={`panel-tab ${activeTab === 'Personal' ? 'active' : ''}`}
                onClick={() => setActiveTab('Personal')}
              >
                Personal
              </div>
              <button className="create-btn">＋ Create</button>
            </div>
            <div className="art-grid">
              <div
                className="art-grid-item c5"
                onMouseEnter={handleMouseEnterGridItem}
                onMouseLeave={handleMouseLeaveGridItem}
              ></div>
              <div
                className="art-grid-item c2"
                onMouseEnter={handleMouseEnterGridItem}
                onMouseLeave={handleMouseLeaveGridItem}
              ></div>
              <div
                className="art-grid-item c10"
                onMouseEnter={handleMouseEnterGridItem}
                onMouseLeave={handleMouseLeaveGridItem}
              ></div>
              <div
                className="art-grid-item c7"
                onMouseEnter={handleMouseEnterGridItem}
                onMouseLeave={handleMouseLeaveGridItem}
              ></div>
              <div
                className="art-grid-item c9"
                onMouseEnter={handleMouseEnterGridItem}
                onMouseLeave={handleMouseLeaveGridItem}
              ></div>
              <div
                className="art-grid-item c4"
                onMouseEnter={handleMouseEnterGridItem}
                onMouseLeave={handleMouseLeaveGridItem}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
