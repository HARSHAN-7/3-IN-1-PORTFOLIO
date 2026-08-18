import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function FloatingNav({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className="devpixel-header-bar">
        <div className="wide-canvas" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          
          {/* Left DEV/PIXEL Logo */}
          <button 
            onClick={() => handleLinkClick('hero')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div className="devpixel-logo">
              HARSHAN<span>/AI</span>
            </div>
          </button>

          {/* Center Navigation Links in Exact Order */}
          <nav className="devpixel-nav-links">
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }} className="devpixel-nav-link">HOME</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} className="devpixel-nav-link">ABOUT</a>
            <a href="#intent" onClick={(e) => { e.preventDefault(); handleLinkClick('intent'); }} className="devpixel-nav-link">INTENT</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('skills'); }} className="devpixel-nav-link">TOOLS</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }} className="devpixel-nav-link">SERVICES</a>
            <a href="#work" onClick={(e) => { e.preventDefault(); handleLinkClick('work'); }} className="devpixel-nav-link">WORK</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleLinkClick('experience'); }} className="devpixel-nav-link">EXPERIENCE</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} className="devpixel-nav-link">CONTACT</a>
          </nav>

          {/* Right Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={() => handleLinkClick('contact')} 
              className="devpixel-btn-lime"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}
            >
              LET'S BUILD <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'none'
              }}
              className="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          top: '64px',
          background: '#050505',
          zIndex: 999,
          padding: '2.5rem 5vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }} className="menu-item-link">HOME</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} className="menu-item-link">ABOUT</a>
          <a href="#intent" onClick={(e) => { e.preventDefault(); handleLinkClick('intent'); }} className="menu-item-link">INTENT</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('skills'); }} className="menu-item-link">TOOLS</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }} className="menu-item-link">SERVICES</a>
          <a href="#work" onClick={(e) => { e.preventDefault(); handleLinkClick('work'); }} className="menu-item-link">WORK</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleLinkClick('experience'); }} className="menu-item-link">EXPERIENCE</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} className="menu-item-link">CONTACT</a>
        </div>
      )}

      <style>{`
        @media (max-width: 899px) {
          .mobile-hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
