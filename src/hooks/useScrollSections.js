import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollSections = (sectionIds) => {
  const elements = useRef({});
  const [activeSection, setActiveSection] = useState(sectionIds[0]);


  const registerRef = useCallback(
    (id) => (el) => {
      elements.current[id] = el;
    },
    [],
  );

  const scrollToSection = useCallback((id) => {
    elements.current[id]?.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.dataset.sectionId);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    Object.entries(elements.current).forEach(([id, el]) => {
      if (el) {
        el.dataset.sectionId = id;
        observer.observe(el);
      }
    });


    return () => observer.disconnect();
  }, []);

  return { activeSection, registerRef, scrollToSection };
};
