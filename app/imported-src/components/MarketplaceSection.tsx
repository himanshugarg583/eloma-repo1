import React from 'react';

export const MarketplaceSection: React.FC = () => {
  return (
    <div className="section-card">
      <section id="marketplace">
        <div className="mp-label reveal">
          <span>GET MORE </span>
          <span className="closer">CLOSER</span>
        </div>
        <h2 className="mp-title reveal">Marketplace</h2>
        <div className="mp-grid">
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${0 * 0.07}s` }}>
            <div className="fill c1"></div>
          </div>
          <div
            className="mp-item tall"
            style={{
              gridColumn: 2,
              gridRow: '1/3',
              minHeight: '360px',
              position: 'relative',
              transitionDelay: `${1 * 0.07}s`,
            }}
          >
            <div className="fill" style={{ background: 'linear-gradient(170deg,#e8825e,#8b2500)' }}></div>
            <span className="mp-like">♥ Like</span>
            <div className="mp-featured-tag">@artist</div>
            <div className="mp-artist-info" style={{ bottom: '52px' }}>
              <div className="name">Trisha Woodward</div>
              <div className="from">from ArtRoss</div>
            </div>
          </div>
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${2 * 0.07}s` }}>
            <div className="fill c2"></div>
          </div>
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${3 * 0.07}s` }}>
            <div className="fill c6"></div>
          </div>
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${4 * 0.07}s` }}>
            <div className="fill c10"></div>
          </div>
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${5 * 0.07}s` }}>
            <div className="fill c7"></div>
          </div>
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${6 * 0.07}s` }}>
            <div className="fill c9"></div>
          </div>
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${7 * 0.07}s` }}>
            <div className="fill c4"></div>
          </div>
          <div className="mp-item" style={{ aspectRatio: 0.75, transitionDelay: `${8 * 0.07}s` }}>
            <div className="fill c3"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
