import React, { useState } from 'react';

export const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="section-card">
      <section id="pricing">
        <h2 className="pr-title reveal">
          Simple, transparent<br />
          <span className="muted">pricing.</span>
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }} className="reveal">
          <div className="pr-toggle">
            <button
              className={`pr-tab ${billingPeriod === 'monthly' ? 'active' : ''}`}
              id="tabMonthly"
              onClick={() => setBillingPeriod('monthly')}
              style={{
                background: billingPeriod === 'monthly' ? 'white' : 'transparent',
              }}
            >
              Regular monthly payment
            </button>
            <button
              className={`pr-tab ${billingPeriod === 'annual' ? 'active' : ''}`}
              id="tabAnnual"
              onClick={() => setBillingPeriod('annual')}
              style={
                billingPeriod === 'annual'
                  ? {
                    background: 'white',
                    color: '#111',
                    boxShadow: '0 2px 8px rgba(0,0,0,.1)',
                  }
                  : {
                    background: '#ff6b35',
                    color: 'white',
                    borderRadius: '50px',
                  }
              }
            >
              Annual
            </button>
          </div>
          <span style={{ fontSize: '12px', color: '#ff6b35', fontWeight: 500 }}>Plus %56 off for 1 year</span>
        </div>

        <div className="pr-cards" id="prCards">
          <div className="pr-card">
            <div className="pr-name">Starter</div>
            <div className="pr-price">$0</div>
            <div className="pr-period">per month</div>
            <ul className="pr-features">
              <li>5 artworks display</li>
              <li>Basic analytics</li>
              <li>Community access</li>
              <li>Standard support</li>
            </ul>
            <button className="pr-btn">Get Started Free</button>
          </div>
          <div className="pr-card popular">
            <div className="pr-name">Pro Artist</div>
            <div className="pr-price">$9.99</div>
            <div className="pr-period">per month</div>
            <ul className="pr-features">
              <li>Unlimited artworks</li>
              <li>Advanced analytics</li>
              <li>Marketplace access</li>
              <li>Priority support</li>
              <li>Custom storefront</li>
            </ul>
            <button className="pr-btn">Join for $9.99/m</button>
          </div>
          <div className="pr-card">
            <div className="pr-name">Business</div>
            <div className="pr-price">$29</div>
            <div className="pr-period">per month</div>
            <ul className="pr-features">
              <li>Everything in Pro</li>
              <li>Team collaboration</li>
              <li>API access</li>
              <li>Dedicated manager</li>
              <li>White-label options</li>
            </ul>
            <button className="pr-btn">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};
