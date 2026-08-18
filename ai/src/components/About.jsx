import React from 'react';
import { Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HARSHAN_CLEAN_NOBG, HARSHAN_SUIT_NOBG } from '../assets/aiImages';

export default function About({ onNavigate }) {
  return (
    <section id="about" className="section-spacing" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="wide-canvas">
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
            01 // BIOGRAPHY & EXECUTIVE PROFILE
          </span>
          <h2 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
            Biography
          </h2>
        </div>

        {/* 2-Column Minimal Profile Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'start'
        }} className="about-executive-grid">

          {/* Left Column: Target Photo Container & Verified Certs */}
          <div>
            <div 
              id="about-portrait-target"
              style={{
                width: '100%',
                aspectRatio: '4 / 5',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(17,17,17,0.08)',
                border: '1.5px solid var(--border-light)',
                marginBottom: '2rem',
                background: '#FFFFFF',
                position: 'relative'
              }}
            >
              <img 
                src={HARSHAN_CLEAN_NOBG} 
                alt="Harshan Rasu"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(104%)'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = HARSHAN_SUIT_NOBG;
                }}
              />

              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(246, 244, 239, 0.95)',
                border: '1px solid var(--border-light)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-pill)',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(8px)'
              }}>
                <span className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '0.7rem' }}>
                  HARSHAN RASU // BIOGRAPHY
                </span>
              </div>
            </div>

            {/* Verified Certifications Box */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', padding: '1.5rem', borderRadius: '16px' }}>
              <span className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
                VERIFIED CREDENTIALS
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {PERSONAL_INFO.certifications.map((c) => (
                  <div key={c.title} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: '#111111' }} />
                    <span>{c.title} ({c.year})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Academic Highlight */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              letterSpacing: '-0.03em',
              color: 'var(--text-dark)'
            }}>
              {PERSONAL_INFO.bio.headline}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
              {PERSONAL_INFO.bio.description}
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
              {PERSONAL_INFO.bio.supporting}
            </p>

            {/* IEEE Research Paper Box */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border-light)', padding: '1.5rem', borderRadius: '16px' }}>
              <div className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileCheck size={16} /> RESEARCH PUBLICATION // IEEE XPLORE
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.35 }}>
                "{PERSONAL_INFO.researchPaper.title}"
              </div>
              <div className="mono-meta" style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                {PERSONAL_INFO.researchPaper.publisher} • {PERSONAL_INFO.researchPaper.date}
              </div>
            </div>

            {/* Stats Row with Updated CGPA 8.77 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>8.77 / 10</div>
                <div className="mono-meta">B.E. Mechanical CGPA</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>90%+</div>
                <div className="mono-meta">Automation Efficiency Gain</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-executive-grid {
            grid-template-columns: 1fr 1.5fr !important;
          }
        }
      `}</style>
    </section>
  );
}
