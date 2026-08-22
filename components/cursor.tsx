'use client'
import React, { useEffect, useRef, useState } from 'react';

const InvertedCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.matchMedia('(min-width: 641px)').matches);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      document.body.style.cursor = '';
      return;
    }
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        const cursorRadius = 7;
        const x = Math.min(Math.max(e.clientX, cursorRadius), window.innerWidth - cursorRadius);
        const y = Math.min(Math.max(e.clientY, cursorRadius), window.innerHeight - cursorRadius);
        cursorRef.current.style.setProperty('--x', `${x}px`);
        cursorRef.current.style.setProperty('--y', `${y}px`);
      }
    };
    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', moveCursor);
    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      id="invertedcursor"
      style={{
        position: 'fixed',
        width: '14px',
        height: '14px',
        background: '#fff',
        borderRadius: '50%',
        top: 'var(--y, 0)',
        left: 'var(--x, 0)',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        transition: 'transform 80ms ease-out',
      }}
    />
  );
};

export default InvertedCursor;
