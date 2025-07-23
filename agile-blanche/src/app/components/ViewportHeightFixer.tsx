// src/app/components/ViewportHeightFixer.tsx
'use client';

import { useEffect } from 'react';

export default function ViewportHeightFixer() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return null;
}
