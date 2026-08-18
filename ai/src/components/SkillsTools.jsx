import React from 'react';
import { Cpu, Zap, Code, Database } from 'lucide-react';
import { TECHNICAL_SKILLS, PERSONAL_INFO } from '../data/portfolioData';

export default function SkillsTools() {
  const categoryIcons = [Zap, Cpu, Code, Database];

  return (
    <section id="skills" className="section-spacing" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="wide-canvas">
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
            03 // TECHNICAL PROFICIENCIES & CORE COMPETENCIES
          </span>
          <h2 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
            Skills & Tools
          </h2>
        </div>

        {/* Core Competencies Bar */}
        <div style={{
          background: '#111111',
          color: '#F6F4EF',
          borderRadius: '24px',
          padding: '2.5rem',
          marginBottom: '3rem'
        }}>
          <span className="mono-meta" style={{ color: '#888888', fontWeight: 700, display: 'block', marginBottom: '1.25rem' }}>
            CORE AGENTIC COMPETENCIES
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {PERSONAL_INFO.coreCompetencies.map((comp) => (
              <span
                key={comp}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#F6F4EF',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px'
                }}
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {TECHNICAL_SKILLS.map((cat, idx) => {
            const IconComp = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={cat.category}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(17,17,17,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'var(--bg-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    color: '#111111',
                    border: '1px solid var(--border-light)'
                  }}>
                    <IconComp size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                    {cat.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: 'var(--bg-cream)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-dark)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
