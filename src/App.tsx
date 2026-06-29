import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import Education from './components/portfolio/Education';
import Gallery from './components/portfolio/Gallery';
import Contact from './components/portfolio/Contact';
import SpirulinaProject from './components/portfolio/projects/SpirulinaProject';
import HomeAquaProject from './components/portfolio/projects/HomeAquaProject';
import HermesProject from './components/portfolio/projects/HermesProject';
import FlowerhornProject from './components/portfolio/projects/FlowerhornProject';
import InfluencerStudioProject from './components/portfolio/projects/InfluencerStudioProject';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'gallery', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <AppShell activeSection={activeSection} setActiveSection={setActiveSection}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Gallery />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-neutral-bg2 border-t border-white/[0.05] text-center text-[10px] text-text-muted select-none">
        <p>© 2026 Swastik Mondal. All Rights Reserved. Made with ❤️ and Code.</p>
      </footer>
    </AppShell>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/spirulina" element={<SpirulinaProject />} />
      <Route path="/project/home-aqua" element={<HomeAquaProject />} />
      <Route path="/project/hermes" element={<HermesProject />} />
      <Route path="/project/flowerhorn" element={<FlowerhornProject />} />
      <Route path="/project/influencer-studio" element={<InfluencerStudioProject />} />
    </Routes>
  );
}
