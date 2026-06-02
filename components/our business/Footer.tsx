import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="ft-top">
        <div className="ft-brand">
          <a href="#" className="logo">
            <svg viewBox="0 0 30 30" fill="none" style={{ width: '26px', height: '26px' }}>
              <path d="M7 5L19 5L25 15L19 25L7 25L1 15Z" stroke="#4ecdc4" strokeWidth="2.2" fill="none" />
              <path d="M11 10L19 15L11 20" stroke="#4ecdc4" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            </svg>
            Pallet Ross
          </a>
          <p>A place where artists display their masterpieces and buyers discover works that resonate with them.</p>
        </div>
        <div className="ft-links">
          <div className="ft-col">
            <h4>Product</h4>
            <a href="#">Get Started</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">E-Commerce</a>
          </div>
          <div className="ft-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="ft-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
      <div className="ft-bottom">
        <span>© 2025 Pallet Ross. All rights reserved.</span>
        <span>Made for artists, by artists.</span>
      </div>
    </footer>
  );
};
