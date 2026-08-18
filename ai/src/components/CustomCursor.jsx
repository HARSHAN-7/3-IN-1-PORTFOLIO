import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState(''); // '' | 'view' | 'pointer'

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('[data-cursor], a, button, input, textarea');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        if (cursorType === 'view') {
          setCursorState('view');
        } else {
          setCursorState('pointer');
        }
      } else {
        setCursorState('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      <div 
        className={`cursor-dot ${cursorState === 'view' ? 'cursor-hover-view' : ''} ${cursorState === 'pointer' ? 'cursor-hover-pointer' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`
        }}
      />
      <div 
        className="cursor-badge"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: cursorState === 'view' ? 1 : 0
        }}
      >
        VIEW ↗
      </div>
    </>
  );
}
