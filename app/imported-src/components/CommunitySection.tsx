import React from "react";

const companies = [
  "MERCURY",
  "REMOTE",
  "MIRO",
  "DATABRICKS",
  "LINEAR",
  "CIRCUS",
  "NOTION",
  "STRIPE",
];

const title = "Trusted by the";

const subtitle =
  "Our growth hackers are experts in the identifying and capitalizing on the most";

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

            <span className="best">best.</span>
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