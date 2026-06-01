import { useEffect } from 'react';

export const useIntersectionObserver = () => {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.12 });

    const selectors = ['.reveal', '.reveal-stagger', '.pr-card', '.mp-item', '.vision-panel'];
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => io.observe(el));
    });

    // EC Cards observer
    const ecObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    const ecCards = document.getElementById('ecCards');
    if (ecCards) ecObs.observe(ecCards);

    // Vision panel observer
    const vpObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    const visionPanel = document.getElementById('visionPanel');
    if (visionPanel) vpObs.observe(visionPanel);

    return () => {
      io.disconnect();
      ecObs.disconnect();
      vpObs.disconnect();
    };
  }, []);
};
