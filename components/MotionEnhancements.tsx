'use client';

import { useEffect } from 'react';

export function MotionEnhancements() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.documentElement.classList.add('motion-ready');
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('.statement, main > .section, main > .contact, main > footer, .case-study article'));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    revealTargets.forEach((target, index) => {
      target.dataset.reveal = '';
      target.style.setProperty('--reveal-delay', `${Math.min(index * 35, 180)}ms`);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      revealTargets.forEach((target) => {
        delete target.dataset.reveal;
        target.style.removeProperty('--reveal-delay');
        target.classList.remove('is-visible');
      });
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
