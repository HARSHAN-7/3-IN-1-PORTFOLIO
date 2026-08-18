import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100000,
      background: 'rgba(17, 17, 17, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '2rem 1rem',
      overflowY: 'auto'
    }}>
      
      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '920px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
        border: '1px solid var(--border-light)'
      }}>
        
        {/* Sticky Close Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          borderBottom: '1px solid var(--border-light)',
          zIndex: 10
        }}>
          <span className="mono-meta" style={{ color: 'var(--text-dark)', fontWeight: 700 }}>
            CASE STUDY // {project.category.toUpperCase()}
          </span>

          <button 
            onClick={onClose}
            style={{
              background: '#111111',
              color: '#F5F2EE',
              border: 'none',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '2.5rem 2rem' }}>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="mono-meta" style={{ color: 'var(--text-muted)' }}>YEAR: {project.year}</span>
            <span className="mono-meta" style={{ color: 'var(--text-dark)', background: 'var(--bg-cream)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
              IMPACT: {project.metrics}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            {project.title}
          </h2>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '2rem' }}>
            {project.summary}
          </p>

          {/* Full Banner Image */}
          <div style={{
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '2.5rem',
            border: '1px solid var(--border-light)'
          }}>
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="cta-btn-black"
              style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              Visit Production Platform <ExternalLink size={16} />
            </a>

            <button className="cta-btn-white" onClick={onClose}>
              Close Preview
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
