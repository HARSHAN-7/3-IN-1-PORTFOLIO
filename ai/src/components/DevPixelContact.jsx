import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function DevPixelContact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: selectedService ? `Interested in ${selectedService}. ` : ''
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "14e5efc0-b40e-4396-acb2-bc5c2f6fae44",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New AI Portfolio Message from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrorMessage(result.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contact" style={{ background: '#050505', color: '#FFFFFF' }}>
      
      {/* 1. LET'S BUILD CALLOUT BANNER */}
      <section className="section-spacing" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="wide-canvas">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }} className="contact-devpixel-grid">

            {/* Left Electric Blue Card */}
            <div style={{
              background: 'var(--blue-primary)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              boxShadow: '0 16px 40px rgba(0, 71, 255, 0.25)'
            }}>
              <div>
                <span className="mono-meta" style={{ color: 'var(--lime-accent)', fontWeight: 900, fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>
                  START A PROJECT
                </span>
                
                <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 0.92, marginBottom: '2rem' }}>
                  LET'S BUILD SOMETHING GREAT TOGETHER.
                </h2>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--lime-accent)', display: 'inline-block' }} />
                <span className="mono-meta" style={{ color: 'var(--lime-accent)', fontWeight: 900, fontSize: '0.8rem' }}>
                  ↗ AVAILABLE FOR FULL-TIME & FREELANCE
                </span>
              </div>
            </div>

            {/* Right Contact Info & Web3Forms Live Form Card */}
            <div style={{
              background: '#F4F4F6',
              color: '#050505',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="icon-box-centered" style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#050505', color: '#FFFFFF' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>EMAIL DIRECT</div>
                    <a href={`mailto:${PERSONAL_INFO.contactEmail}`} style={{ fontSize: '1.05rem', fontWeight: 800, color: '#050505', textDecoration: 'none' }}>
                      {PERSONAL_INFO.contactEmail}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="icon-box-centered" style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#050505', color: '#FFFFFF' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>PHONE / WHATSAPP</div>
                    <a href={`tel:${PERSONAL_INFO.contactPhone}`} style={{ fontSize: '1.05rem', fontWeight: 800, color: '#050505', textDecoration: 'none' }}>
                      {PERSONAL_INFO.contactPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="icon-box-centered" style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#050505', color: '#FFFFFF' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="mono-meta" style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>LOCATION</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#050505' }}>
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Web3Forms Live Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="14e5efc0-b40e-4396-acb2-bc5c2f6fae44" 
                />

                <input 
                  type="text" 
                  name="name"
                  placeholder="YOUR NAME"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    padding: '0.8rem 0.95rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 700
                  }}
                />

                <input 
                  type="email" 
                  name="email"
                  placeholder="YOUR EMAIL"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    padding: '0.8rem 0.95rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 700
                  }}
                />

                <textarea 
                  name="message"
                  placeholder="PROJECT DETAILS / MESSAGE"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    padding: '0.8rem 0.95rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    resize: 'none'
                  }}
                />

                {/* Status Messages */}
                {submitted && (
                  <div style={{ background: '#10B981', color: '#FFFFFF', padding: '0.65rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} /> MESSAGE SENT SUCCESSFULLY! HARSHAN WILL REPLY SHORTLY.
                  </div>
                )}

                {errorMessage && (
                  <div style={{ background: '#EF4444', color: '#FFFFFF', padding: '0.65rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={16} /> {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={sending}
                  className="devpixel-btn-black" 
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'SENDING...' : submitted ? 'MESSAGE SENT!' : 'SEND INQUIRY'} <Send size={15} />
                </button>
              </form>

            </div>

          </div>

        </div>
      </section>

      {/* 2. DEV/PIXEL BLACK FOOTER */}
      <footer style={{ padding: '2rem 0', background: '#050505' }}>
        <div className="wide-canvas" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          
          <div className="devpixel-logo">
            HARSHAN<span>/AI</span>
          </div>

          <div className="mono-meta" style={{ color: '#888888', fontSize: '0.72rem' }}>
            © 2026 HARSHAN RASU. ALL RIGHTS RESERVED.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="mono-meta" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              GITHUB
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="mono-meta" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              LINKEDIN
            </a>
            <a href={PERSONAL_INFO.website} target="_blank" rel="noreferrer" className="mono-meta" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              WEBSITE
            </a>
          </div>

        </div>
      </footer>

      <style>{`
        @media (min-width: 900px) {
          .contact-devpixel-grid {
            grid-template-columns: 1.3fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
