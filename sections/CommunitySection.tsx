import React from "react";

const companies = [
  "AUSTRALIA",
  "INDIA",
  "UNITED STATES",
  "CANADA",
  "CHINA",
  "UNITED KINGDOM",
  "UAE",
  "SINGAPORE",
];

const title = "Global Presence & ";

const subtitle =
  "Operating across major global markets to deliver integrated, high-value business services, driving efficiency, cross-border progress, and scalable growth.";

export const CommunitySection: React.FC = () => {
  return (
    <div className="section-card">
      <section id="community">
        <div className="trusted-content">
          <h2 className="trusted-title">
            {title.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}

            <span className="best">Hubs.</span>
          </h2>

          <p className="trusted-subtitle">
            {subtitle.split(" ").map((word, index) => (
              <span
                key={index}
                className="word"
                style={{
                  animationDelay: `${0.8 + index * 0.06}s`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>

        <div className="logo-marquee">
          <div className="logo-track">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="company-logo">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};