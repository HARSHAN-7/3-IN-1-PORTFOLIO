import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="section-spacing" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="wide-canvas">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
              03 // CAPABILITIES & OFFERINGS
            </span>
            <h2 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
              Services
            </h2>
          </div>

          <span className="mono-meta" style={{ color: 'var(--text-muted)' }}>
            [ HOVER TO EXPLORE ]
          </span>
        </div>

        {/* Minimal Horizontal Service Rows */}
        <div style={{ borderTop: '1px solid var(--border-light)' }}>
          {SERVICES.map((item, idx) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectService(item.title)}
                style={{
                  padding: '2.5rem 1.5rem',
                  borderBottom: '1px solid var(--border-light)',
                  background: isHovered ? '#FFFFFF' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, padding-left 0.25s ease',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                  borderRadius: isHovered ? '16px' : '0px'
                }}
                className="service-horizontal-row"
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '2rem',
                  alignItems: 'center'
                }}>
                  <span className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 700 }}>
                    0{idx + 1}
                  </span>

                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: 'var(--text-dark)',
                      marginBottom: '0.4rem',
                      transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                      transition: 'transform 0.25s ease'
                    }}>
                      {item.title}
                    </h3>
                    <div className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      {item.subtitle}
                    </div>
                  </div>

                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: isHovered ? '#111111' : 'transparent',
                    color: isHovered ? '#F6F4EF' : '#111111',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    transition: 'all 0.25s ease'
                  }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  maxWidth: '750px',
                  gridColumn: '1 / -1',
                  paddingLeft: '3.5rem'
                }}>
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
