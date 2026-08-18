import React from 'react';
import { GraduationCap, Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="section-spacing" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="wide-canvas">
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
            05 // ACADEMIC CREDENTIALS & INDUSTRY CERTIFICATIONS
          </span>
          <h2 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
            Education & Credentials
          </h2>
        </div>

        {/* 2-Column Structured Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="edu-executive-grid">

          {/* Left Column: B.E. Degree & IEEE Research */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Education Degree Box */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: '20px',
              padding: '2.25rem 2rem',
              boxShadow: '0 10px 30px rgba(17,17,17,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--bg-cream)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#111111',
                  border: '1px solid var(--border-light)'
                }}>
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="mono-meta" style={{ color: 'var(--text-muted)' }}>BACHELOR OF ENGINEERING</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                    {PERSONAL_INFO.education.degree}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
                {PERSONAL_INFO.education.institution}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1rem' }}>
                <span className="mono-meta" style={{ color: 'var(--text-muted)' }}>
                  DURATION: {PERSONAL_INFO.education.years}
                </span>
                <span className="mono-meta" style={{ color: 'var(--text-dark)', background: 'var(--bg-cream)', padding: '0.25rem 0.65rem', borderRadius: '4px', fontWeight: 800 }}>
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
              </div>
            </div>

            {/* IEEE Research Publication Box */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(17,17,17,0.04)'
            }}>
              <div className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileCheck size={16} /> IEEE XPLORE RESEARCH PUBLICATION
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.35, marginBottom: '0.5rem' }}>
                "{PERSONAL_INFO.researchPaper.title}"
              </h4>

              <div className="mono-meta" style={{ color: 'var(--text-muted)' }}>
                {PERSONAL_INFO.researchPaper.publisher} • {PERSONAL_INFO.researchPaper.date}
              </div>
            </div>

          </div>

          {/* Right Column: Industry Certifications List */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: '20px',
            padding: '2.25rem 2rem',
            boxShadow: '0 10px 30px rgba(17,17,17,0.04)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--bg-cream)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                color: '#111111',
                border: '1px solid var(--border-light)'
              }}>
                <Award size={22} />
              </div>
              <div>
                <div className="mono-meta" style={{ color: 'var(--text-muted)' }}>VERIFIED CERTIFICATIONS</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                  Cloud & AI Certifications
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PERSONAL_INFO.certifications.map((c) => (
                <div 
                  key={c.title}
                  style={{
                    padding: '1.1rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '12px',
                    background: 'var(--bg-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#111111' }} />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-dark)' }}>
                        {c.title}
                      </div>
                      <div className="mono-meta" style={{ fontSize: '0.7rem' }}>
                        ISSUER: {c.issuer}
                      </div>
                    </div>
                  </div>

                  <span className="mono-meta" style={{ background: '#FFFFFF', padding: '0.25rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>
                    {c.year}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .edu-executive-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
