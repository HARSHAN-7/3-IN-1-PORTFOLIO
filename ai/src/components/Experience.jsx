import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-spacing" style={{ background: '#050505', color: '#FFFFFF', borderBottom: '1px solid var(--border-dark)' }}>
      <div className="wide-canvas">
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="mono-meta" style={{ color: 'var(--lime-accent)', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
            WORK HISTORY & EDUCATION
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#FFFFFF' }}>
            Experience
          </h2>
        </div>

        {/* DEV/PIXEL Timeline Layout + 2+ Years Neon Callout Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'stretch'
        }} className="experience-devpixel-grid">

          {/* Left Column: Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
            
            {/* Timeline Item 1 */}
            <div style={{ borderLeft: '3px solid var(--lime-accent)', paddingLeft: '1.75rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-8px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                background: 'var(--lime-accent)'
              }} />
              <div className="mono-meta" style={{ color: 'var(--lime-accent)', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                Jul 2024 – Present
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                AI Automation & Agentic Workflow Developer
              </h3>
              <div className="mono-meta" style={{ color: '#AAAAAA', fontSize: '0.75rem', marginBottom: '0.85rem' }}>
                Independent / Freelance Projects — Remote
              </div>
              <p style={{ color: '#CCCCCC', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Designed and shipped 5 production-style autonomous AI agent pipelines (resume screening, social content publishing, maritime threat detection, RAG Q&A, video summarization) using n8n, LangChain, and OpenAI API with 90%+ time savings.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div style={{ borderLeft: '3px solid var(--lime-accent)', paddingLeft: '1.75rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-8px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                background: 'var(--lime-accent)'
              }} />
              <div className="mono-meta" style={{ color: 'var(--lime-accent)', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                Jul 2024 – Dec 2024
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                Data Analytics & Machine Learning Intern
              </h3>
              <div className="mono-meta" style={{ color: '#AAAAAA', fontSize: '0.75rem', marginBottom: '0.85rem' }}>
                YBI Foundation — Remote
              </div>
              <p style={{ color: '#CCCCCC', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Automated Python ETL pipelines cutting null values by ~20%. Achieved 92% classification accuracy on a healthcare prediction model via 5-fold cross-validation.
              </p>
            </div>

            {/* Timeline Item 3: Education */}
            <div style={{ borderLeft: '3px solid rgba(255,255,255,0.3)', paddingLeft: '1.75rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-8px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                background: '#FFFFFF'
              }} />
              <div className="mono-meta" style={{ color: '#AAAAAA', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                2023 – 2027
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                B.E., Mechanical Engineering
              </h3>
              <div className="mono-meta" style={{ color: '#AAAAAA', fontSize: '0.75rem', marginBottom: '0.85rem' }}>
                SNS College of Engineering, Coimbatore • CGPA: 8.45 / 10.0
              </div>
              <p style={{ color: '#CCCCCC', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Independent study: Statistics for Data Science, Probability, Linear Algebra, AI Agent Development. Research paper submitted to IEEE Xplore (Nov 2024).
              </p>
            </div>

          </div>

          {/* Right Column: DEV/PIXEL Neon Lime Callout Block */}
          <div style={{
            background: 'var(--lime-accent)',
            color: '#050505',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justify: 'center',
            alignItems: 'flex-start',
            boxShadow: '0 20px 50px rgba(204, 255, 0, 0.25)',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
          }}>
            <div style={{ fontSize: 'clamp(4.5rem, 8vw, 7.5rem)', fontWeight: 900, lineHeight: 0.85, marginBottom: '1rem', color: '#050505' }}>
              2+
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#050505', lineHeight: 1.1, marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Years of Experience Continuously Learning & Automating
            </h3>
            <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#050505', lineHeight: 1.5 }}>
              Shipped 5 production-style agentic pipelines, authored IEEE research, and participated in National AI/ML Hackathons.
            </p>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .experience-devpixel-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
