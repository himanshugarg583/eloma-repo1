import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GlobalArtDeck } from './components/GlobalArtDeck';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

// Standard imports instead of lazy loading so the IntersectionObserver finds them on mount
import { EcommerceSection } from './components/EcommerceSection';
import { RevealSection } from './components/RevealSection';
import { CommunitySection } from './components/CommunitySection';
import { NewRevealSection } from './components/NewRevealSection';
import { NewEcommerceSection } from './components/NewEcommerceSection';
import { NewVisionSection } from './components/NewVisionSection';
import { NewCommunitySection } from './components/NewCommunitySection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useIntersectionObserver();

  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <GlobalArtDeck />
      
      <EcommerceSection />
      <RevealSection />
      <CommunitySection />

      {/* Inserted New Sections BEFORE VisionSection */}
      <NewRevealSection />
      <NewEcommerceSection />
      <NewVisionSection />
      <NewCommunitySection />

      <PricingSection />
      <Footer />
    </div>
  );
};

export default App;
