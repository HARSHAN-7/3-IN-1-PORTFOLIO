import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import { HARSHAN_CLEAN_NOBG } from '../assets/aiImages';

export default function Hero({ onNavigate }) {
  return (
    <section 
      id="hero" 
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        paddingTop: '64px',
        paddingBottom: '0',
        background: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* MAIN HERO CONTENT AREA */}
      <div className="wide-canvas" style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%', padding: '2rem 1.5rem' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          alignItems: 'center',
          width: '100%'
        }} className="hero-devpixel-grid">

          {/* Left Column: Ultra-Bold Headline & CTAs */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Top Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.2rem', color: '#050505' }}>
                ✕
              </div>
              <span className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.14em' }}>
                AUTONOMOUS INTELLIGENCE FOR A BIGGER TOMORROW
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(3rem, 6.8vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-0.045em',
              marginBottom: '1.5rem',
              color: '#050505',
              textTransform: 'uppercase'
            }}>
              WE BUILD<br />
              <span style={{ color: 'var(--blue-primary)' }}>AI AGENTS</span><br />
              THAT WORK.
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: '#050505',
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: '0.35rem'
            }}>
              Design. Build. Deploy. Scale.
            </p>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              color: 'var(--text-muted)',
              maxWidth: '460px',
              lineHeight: 1.5,
              fontWeight: 500,
              marginBottom: '2rem'
            }}>
              Autonomous AI agents for real-world impact.
            </p>

            {/* Buttons matching DEV/PIXEL reference */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate('contact')} className="devpixel-btn-lime">
                START YOUR PROJECT <ArrowUpRight size={16} />
              </button>

              <div className="devpixel-btn-black" style={{ cursor: 'default' }}>
                AVAILABLE FOR BUSINESSES
              </div>
            </div>

          </div>

          {/* Right Column: Electric Blue Backdrop + Neon Lime X Brush + Harshan's Clean Cutout Suit Photo */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%', minHeight: '420px' }}>
            
            {/* Massive Electric Blue Geometric Polygon Angle */}
            <div style={{
              position: 'absolute',
              top: '-15%',
              right: '-5%',
              width: '100%',
              height: '130%',
              background: 'var(--blue-primary)',
              clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
              zIndex: 0
            }} />

            {/* Neon Lime Brush / 'X' Mark Layered Behind Photo */}
            <div style={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              fontSize: 'clamp(10rem, 22vw, 20rem)',
              fontWeight: 900,
              color: 'var(--lime-accent)',
              zIndex: 1,
              lineHeight: 0.75,
              userSelect: 'none',
              pointerEvents: 'none'
            }}>
              ✕
            </div>

            {/* Harshan's Clean Cutout Suit Photo (Transparent PNG) */}
            <div 
              style={{
                position: 'relative',
                zIndex: 2,
                maxHeight: 'calc(100vh - 160px)',
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              <img 
                src={HARSHAN_CLEAN_NOBG} 
                alt="Harshan Rasu"
                style={{
                  height: 'auto',
                  maxHeight: 'calc(100vh - 160px)',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(5,5,5,0.3))'
                }}
              />
            </div>

            {/* Right Side Micro-Badges */}
            <div style={{
              position: 'absolute',
              top: '5%',
              right: '2%',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '1.25rem',
              color: '#050505'
            }} className="hero-right-accents">
              
              <div className="mono-meta" style={{ textAlign: 'right', fontSize: '0.65rem', lineHeight: 1.3, color: '#050505', fontWeight: 800 }}>
                MORE<br />AGENTS<br />BRIGHTER<br />POSSIBILITIES
              </div>

              <div style={{ color: '#050505', letterSpacing: '3px', fontWeight: 900, fontSize: '0.8rem' }}>
                //////
              </div>

              <div className="icon-box-centered" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 6px 16px rgba(0,0,0,0.15)', color: '#050505' }}>
                <Globe size={18} />
              </div>

            </div>

            {/* Bottom Right Black Box */}
            <div style={{
              position: 'absolute',
              bottom: '5%',
              right: '0',
              zIndex: 3,
              background: '#050505',
              color: '#FFFFFF',
              padding: '1rem 1.25rem',
              borderRadius: '8px 0 0 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
            }} className="hero-bottom-right-card">
              <div className="mono-meta" style={{ fontSize: '0.65rem', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.3 }}>
                BUILDING THE AGENT<br />POWERED ECONOMY
              </div>
              <div className="icon-box-centered" style={{ width: '28px', height: '28px', background: 'var(--lime-accent)', color: '#050505', borderRadius: '4px' }}>
                <ArrowUpRight size={16} />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM TICKER STRIP */}
      <div style={{
        background: '#F4F4F6',
        borderTop: '1px solid var(--border-light)',
        padding: '0.85rem 0',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="wide-canvas" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <span className="mono-meta" style={{ color: '#050505', fontWeight: 800, fontSize: '0.78rem' }}>
            STRATEGY <span style={{ color: 'var(--blue-primary)', margin: '0 0.5rem' }}>✕</span> AGENTS <span style={{ color: 'var(--blue-primary)', margin: '0 0.5rem' }}>✕</span> AUTOMATION <span style={{ color: 'var(--blue-primary)', margin: '0 0.5rem' }}>✕</span> GROWTH
          </span>
          <span className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
            ©2026 HARSHAN RASU // AGENTIC AI ARCHITECT
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-devpixel-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .hero-right-accents, .hero-bottom-right-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
