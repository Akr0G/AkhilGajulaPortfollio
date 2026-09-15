'use client';

import { useEffect, useRef } from 'react';

export function MotionEnhancements() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (prefersReducedMotion.matches) return;

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

    const element = cursor.current;
    let frame: number | undefined;
    let position = { x: -100, y: -100 };
    const updateCursor = () => {
      if (!element) return;
      element.style.transform = `translate3d(${position.x - 17}px, ${position.y - 17}px, 0)`;
      frame = undefined;
    };
    const moveCursor = (event: PointerEvent) => {
      position = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(updateCursor);
      const interactive = (event.target as Element | null)?.closest('a, button, input, select, textarea, summary');
      element?.classList.toggle('cursor-active', Boolean(interactive));
    };

    if (finePointer.matches && element) {
      document.body.classList.add('has-custom-cursor');
      window.addEventListener('pointermove', moveCursor, { passive: true });
    }

    return () => {
      observer.disconnect();
      revealTargets.forEach((target) => {
        delete target.dataset.reveal;
        target.style.removeProperty('--reveal-delay');
        target.classList.remove('is-visible');
      });
      document.documentElement.classList.remove('motion-ready');
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', moveCursor);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true"><span /></div>;
}
