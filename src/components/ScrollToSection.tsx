import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    requestAnimationFrame(() => {
      const element = document.getElementById(location.state.scrollTo);
      if (!element) return;

      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState({}, document.title);
    });
  }, [location.state]);

  return null;
};

export default ScrollToSection;