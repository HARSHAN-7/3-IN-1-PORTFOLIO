import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Intro() {
  const containerRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  const introText = PERSONAL_INFO.introStatement || PERSONAL_INFO.summary || "Agentic AI Developer specializing in autonomous, LLM-powered automation built with n8n, Make, Zapier, and the OpenAI API.";
  const words = introText.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollRatio(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="intent"
      ref={containerRef}
      className="section-spacing" 
      style={{ 
        borderBottom: '1px solid var(--border-light)', 
        background: '#FFFFFF'
      }}
    >
      <div className="wide-canvas" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
        
        <span className="mono-meta" style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', display: 'block' }}>
          STATEMENT OF INTENT & CORE PRINCIPLES
        </span>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.4rem, 2.7vw, 2.2rem)',
          fontWeight: 700,
          lineHeight: 1.45,
          letterSpacing: '-0.025em',
          color: 'var(--text-dark)',
          margin: 0
        }}>
          {words.map((word, index) => {
            const wordThreshold = (index + 1) / words.length;
            const isHighlighted = scrollRatio >= wordThreshold - 0.05;
            
            return (
              <span 
                key={index} 
                style={{
                  display: 'inline-block',
                  marginRight: '0.28em',
                  color: isHighlighted ? '#050505' : '#b0b0b0',
                  opacity: isHighlighted ? 1 : 0.45,
                  transition: 'color 0.2s ease, opacity 0.2s ease'
                }}
              >
                {word}
              </span>
            );
          })}
        </p>

      </div>
    </section>
  );
}
