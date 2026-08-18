import React, { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import About from './components/About';
import Intro from './components/Intro';
import SkillsTools from './components/SkillsTools';
import Services from './components/Services';
import WorkGrid from './components/WorkGrid';
import Experience from './components/Experience';
import DevPixelContact from './components/DevPixelContact';
import ProjectModal from './components/ProjectModal';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    handleNavigate('contact');
  };

  return (
    <SmoothScroll>
      <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-light)' }}>
        
        {/* Three.js WebGL Interactive 3D Canvas Background Scene */}
        <ThreeBackground />

        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* DEV/PIXEL Top Header Bar */}
        <FloatingNav onNavigate={handleNavigate} />

        {/* Main Portfolio Sections — INSTANT LOADING (NO PRELOADER) */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          
          {/* 1. Hero Section */}
          <Hero onNavigate={handleNavigate} />

          {/* 2. Biography */}
          <ScrollReveal animation="fade-up">
            <About onNavigate={handleNavigate} />
          </ScrollReveal>

          {/* 3. Statement of Intent & Core Principle */}
          <ScrollReveal animation="fade-up">
            <Intro />
          </ScrollReveal>

          {/* 4. Tools Section */}
          <ScrollReveal animation="fade-up">
            <SkillsTools />
          </ScrollReveal>

          {/* 5. Service Section */}
          <ScrollReveal animation="fade-up">
            <Services onSelectService={handleSelectService} />
          </ScrollReveal>

          {/* Featured Case Studies & Work */}
          <ScrollReveal animation="scale">
            <WorkGrid onOpenProject={(project) => setActiveProject(project)} />
          </ScrollReveal>

          {/* 6. Experience Section */}
          <ScrollReveal animation="fade-up">
            <Experience />
          </ScrollReveal>

          {/* 7. CTAs & Contact Form */}
          <DevPixelContact selectedService={selectedService} />

        </main>

        {/* Interactive Case Study Modal */}
        {activeProject && (
          <ProjectModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}

      </div>
    </SmoothScroll>
  );
}
