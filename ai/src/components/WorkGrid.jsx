import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { WORK_PROJECTS } from '../data/portfolioData';

export default function WorkGrid({ onOpenProject }) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(WORK_PROJECTS[0]);

  return (
    <section id="work" className="section-spacing" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
      <div className="wide-canvas">
        
        {/* ==========================================================================
           1. FEATURED WORK STRIP (DEV/PIXEL STYLE)
           ========================================================================== */}
        <div style={{ marginBottom: '5rem' }}>
          
          {/* Header Bar */}
          <div style={{
            background: '#050505',
            color: '#FFFFFF',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            marginBottom: '1.5rem',
            borderRadius: 'var(--radius-sm)'
          }}>
            <span className="mono-meta" style={{ color: '#FFFFFF', fontWeight: 800 }}>
              FEATURED WORK
            </span>
            <a href="#casestudies" className="mono-meta" style={{ color: 'var(--lime-accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              SEE ALL PROJECTS <ArrowUpRight size={14} />
            </a>
          </div>

          {/* 4 Colored Project Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            
            {/* Card 1: Electric Blue */}
            <div
              onClick={() => onOpenProject(WORK_PROJECTS[0])}
              style={{
                background: 'var(--blue-primary)',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '1.75rem 1.5rem',
                minHeight: '210px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.25s ease'
              }}
              className="devpixel-work-card"
            >
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 0.95, marginBottom: '0.5rem' }}>
                  {WORK_PROJECTS[0].title}
                </h3>
                <span className="mono-meta" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.68rem' }}>
                  {WORK_PROJECTS[0].category}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.85rem' }}>
                <span className="mono-meta" style={{ color: '#FFFFFF', fontSize: '0.7rem' }}>
                  {WORK_PROJECTS[0].impact}
                </span>
                <div className="icon-box-centered" style={{ width: '24px', height: '24px' }}>
                  <ArrowUpRight size={16} style={{ color: '#FFFFFF' }} />
                </div>
              </div>
            </div>

            {/* Card 2: Crisp White / Black */}
            <div
              onClick={() => onOpenProject(WORK_PROJECTS[1])}
              style={{
                background: '#F4F4F6',
                border: '1px solid var(--border-light)',
                color: '#050505',
                borderRadius: '12px',
                padding: '1.75rem 1.5rem',
                minHeight: '210px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.25s ease'
              }}
              className="devpixel-work-card"
            >
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#050505', lineHeight: 0.95, marginBottom: '0.5rem' }}>
                  {WORK_PROJECTS[1].title}
                </h3>
                <span className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>
                  {WORK_PROJECTS[1].category}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
                <span className="mono-meta" style={{ color: '#050505', fontSize: '0.7rem' }}>
                  {WORK_PROJECTS[1].impact}
                </span>
                <div className="icon-box-centered" style={{ width: '24px', height: '24px' }}>
                  <ArrowUpRight size={16} style={{ color: '#050505' }} />
                </div>
              </div>
            </div>

            {/* Card 3: Solid Black */}
            <div
              onClick={() => onOpenProject(WORK_PROJECTS[2])}
              style={{
                background: '#050505',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '1.75rem 1.5rem',
                minHeight: '210px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.25s ease'
              }}
              className="devpixel-work-card"
            >
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 0.95, marginBottom: '0.5rem' }}>
                  {WORK_PROJECTS[2].title}
                </h3>
                <span className="mono-meta" style={{ color: '#888888', fontSize: '0.68rem' }}>
                  {WORK_PROJECTS[2].category}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '0.85rem' }}>
                <span className="mono-meta" style={{ color: 'var(--lime-accent)', fontSize: '0.7rem' }}>
                  {WORK_PROJECTS[2].impact}
                </span>
                <div className="icon-box-centered" style={{ width: '24px', height: '24px' }}>
                  <ArrowUpRight size={16} style={{ color: '#FFFFFF' }} />
                </div>
              </div>
            </div>

            {/* Card 4: Neon Lime Accent */}
            <div
              onClick={() => onOpenProject(WORK_PROJECTS[3])}
              style={{
                background: 'var(--lime-accent)',
                color: '#050505',
                borderRadius: '12px',
                padding: '1.75rem 1.5rem',
                minHeight: '210px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.25s ease'
              }}
              className="devpixel-work-card"
            >
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#050505', lineHeight: 0.95, marginBottom: '0.5rem' }}>
                  {WORK_PROJECTS[3].title}
                </h3>
                <span className="mono-meta" style={{ color: '#050505', fontSize: '0.68rem', fontWeight: 800 }}>
                  {WORK_PROJECTS[3].category}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(5,5,5,0.2)', paddingTop: '0.85rem' }}>
                <span className="mono-meta" style={{ color: '#050505', fontWeight: 900, fontSize: '0.8rem' }}>
                  ↑ {WORK_PROJECTS[3].impact}
                </span>
                <div className="icon-box-centered" style={{ width: '24px', height: '24px' }}>
                  <ArrowUpRight size={16} style={{ color: '#050505' }} />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ==========================================================================
           2. CASE STUDIES SPLIT SHOWCASE (DEV/PIXEL STYLE)
           ========================================================================== */}
        <div id="casestudies">
          
          <div style={{ marginBottom: '2rem' }}>
            <span className="mono-meta" style={{ color: 'var(--blue-primary)', fontWeight: 800, display: 'block', marginBottom: '0.4rem' }}>
              INTERACTIVE CASE STUDIES
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 900 }}>
              Deep Dive Projects
            </h2>
          </div>

          {/* 2-Column Split Showcase */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }} className="casestudies-split-grid">

            {/* Left Column: Numbered Selector List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {WORK_PROJECTS.map((proj, idx) => {
                const isSelected = selectedCaseStudy.id === proj.id;
                return (
                  <div
                    key={proj.id}
                    onClick={() => setSelectedCaseStudy(proj)}
                    style={{
                      background: isSelected ? '#050505' : '#F4F4F6',
                      color: isSelected ? '#FFFFFF' : '#050505',
                      padding: '1.25rem 1.5rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      transition: 'all 0.25s ease',
                      border: isSelected ? '1px solid #050505' : '1px solid var(--border-light)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                      <span className="mono-meta" style={{ color: isSelected ? 'var(--lime-accent)' : 'var(--text-muted)', fontSize: '1rem', fontWeight: 900 }}>
                        0{idx + 1}
                      </span>
                      <div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, textTransform: 'uppercase' }}>
                          {proj.title}
                        </div>
                        <div className="mono-meta" style={{ color: isSelected ? '#AAAAAA' : 'var(--text-muted)', fontSize: '0.68rem', marginTop: '0.15rem' }}>
                          {proj.category}
                        </div>
                      </div>
                    </div>

                    <div className="icon-box-centered" style={{ width: '28px', height: '28px' }}>
                      <ArrowUpRight size={18} style={{ color: isSelected ? 'var(--lime-accent)' : '#050505' }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Massive Electric Blue Feature Display Card */}
            <div style={{
              background: 'var(--blue-primary)',
              color: '#FFFFFF',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              boxShadow: '0 16px 40px rgba(0, 71, 255, 0.2)',
              position: 'relative'
            }}>
              <div>
                <span className="mono-meta" style={{ color: 'var(--lime-accent)', fontWeight: 800, fontSize: '0.75rem', display: 'block', marginBottom: '0.85rem' }}>
                  FEATURED CASE STUDY
                </span>

                <h3 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 0.95, marginBottom: '1rem' }}>
                  {selectedCaseStudy.title}
                </h3>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.55, marginBottom: '2rem', maxWidth: '540px' }}>
                  {selectedCaseStudy.summary}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                  {selectedCaseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Metric Box */}
                <div style={{
                  background: 'rgba(5,5,5,0.3)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '1rem 1.25rem',
                  borderRadius: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '2rem'
                }}>
                  <div className="icon-box-centered" style={{ width: '28px', height: '28px', color: 'var(--lime-accent)' }}>
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--lime-accent)', lineHeight: 1 }}>
                      {selectedCaseStudy.impact}
                    </div>
                    <div className="mono-meta" style={{ color: '#FFFFFF', fontSize: '0.68rem', marginTop: '0.2rem' }}>
                      VERIFIED RESUME IMPACT
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onOpenProject(selectedCaseStudy)}
                  className="devpixel-btn-lime"
                  style={{ width: 'fit-content' }}
                >
                  READ FULL CASE STUDY <ArrowUpRight size={16} />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        .devpixel-work-card:hover {
          transform: translateY(-4px);
        }
        @media (min-width: 900px) {
          .casestudies-split-grid {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
      `}</style>
    </section>
  );
}
