import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function AppShell({ children, activeSection, setActiveSection }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showInstagramModal, setShowInstagramModal] = useState(false);

  const sections = [
    { id: 'hero', num: '01', label: 'HERO' },
    { id: 'about', num: '02', label: 'ABOUT ME' },
    { id: 'skills', num: '03', label: 'MY SKILLS' },
    { id: 'experience', num: '04', label: 'EXPERIENCE' },
    { id: 'projects', num: '05', label: 'FEATURED PROJECTS' },
    { id: 'education', num: '06', label: 'EDUCATION & CERTIFICATIONS' },
    { id: 'gallery', num: '07', label: 'GALLERY' },
    { id: 'contact', num: '09', label: "LET'S CONNECT" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-bg1 text-text-primary flex relative">
      {/* Film grain layer overlay */}
      <div className="film-grain" />

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="xl:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Left Sidebar (Desktop & Mobile Drawer) */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 bg-neutral-bg2 border-r border-white/[0.05] flex-col justify-between overflow-y-auto select-none z-50 transition-all duration-300 flex
          ${mobileMenuOpen ? 'translate-x-0 w-[280px] p-6 shadow-2xl' : '-translate-x-full xl:translate-x-0'}
          ${isSidebarCollapsed ? 'xl:w-[80px] xl:p-4 xl:items-center' : 'xl:w-[320px] xl:p-8'}
        `}
      >
        <div className="w-full">
          {/* Logo & Toggle */}
          <div className={`flex items-center mb-10 ${isSidebarCollapsed ? 'xl:justify-center xl:flex-col gap-4' : 'justify-between'}`}>
            <div className={`inline-flex items-center justify-center border border-white/20 transition-all ${isSidebarCollapsed ? 'xl:w-10 xl:h-10' : 'w-12 h-12'}`}>
              <span className={`${isSidebarCollapsed ? 'xl:text-lg' : 'text-xl'} font-bold font-serif text-white tracking-tighter`}>
                SM<span className="bg-gradient-to-br from-[#ECA47A] via-[#D78B55] to-[#A85025] bg-clip-text text-transparent">.</span>
              </span>
            </div>
            
            {/* Desktop Collapse Toggle */}
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="hidden xl:block text-text-muted hover:text-white transition-colors p-1 rounded-full hover:bg-white/[0.05]"
            >
              {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            
            {/* Mobile Close Button */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="xl:hidden text-text-muted hover:text-white transition-colors p-1 rounded-full hover:bg-white/[0.05]"
            >
              <X size={24} />
            </button>
          </div>

          {/* Overview Navigation */}
          <nav className="flex flex-col gap-6">
            {(!isSidebarCollapsed || mobileMenuOpen) && (
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted whitespace-nowrap">
                PORTFOLIO OVERVIEW
              </span>
            )}
            <ul className={`flex flex-col gap-3 ${isSidebarCollapsed ? 'xl:items-center' : ''}`}>
              {sections.map((sec) => (
                <li key={sec.id} className={isSidebarCollapsed ? 'xl:w-full xl:flex xl:justify-center' : 'w-full'}>
                  <button
                    onClick={() => handleNavClick(sec.id)}
                    className={`flex items-center text-left group transition-all duration-300 ${
                      isSidebarCollapsed ? 'xl:justify-center gap-3 w-full' : 'gap-3 w-full'
                    } ${
                      activeSection === sec.id ? 'text-[#D78B55]' : 'text-text-secondary hover:text-white'
                    }`}
                    title={isSidebarCollapsed ? sec.label : undefined}
                  >
                    <span className={`text-[10px] font-mono tracking-wider font-bold px-1.5 py-0.5 rounded border transition-all ${
                      activeSection === sec.id 
                        ? 'bg-[#D78B55] text-neutral-bg1 border-[#D78B55]' 
                        : 'bg-white/[0.02] border-white/[0.05] text-text-muted group-hover:border-white/20 group-hover:text-text-secondary'
                    }`}>
                      {sec.num}
                    </span>
                    {(!isSidebarCollapsed || mobileMenuOpen) && (
                      <span className="text-xs font-bold tracking-widest whitespace-nowrap">{sec.label}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Profile Card & Actions */}
        <div className={`flex flex-col pt-8 border-t border-white/[0.05] w-full ${isSidebarCollapsed ? 'xl:gap-6 xl:items-center' : 'gap-6'} ${mobileMenuOpen ? 'gap-6 items-start' : ''}`}>
          {(!isSidebarCollapsed || mobileMenuOpen) ? (
            <>
              <div className="flex gap-4 items-center">
                <img 
                  src="/assets/portfolio/about-portrait.jpg" 
                  alt="Swastik Mondal" 
                  className="w-14 h-14 rounded-full object-cover border border-white/20 shadow-glow shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="text-[28px] leading-none font-normal text-cream mb-1.5 mt-1 whitespace-nowrap" style={{ fontFamily: "'Great Vibes', cursive" }}>Swastik Mondal</h4>
                  <p className="text-[10px] text-text-muted whitespace-nowrap">MBA (HR) • B.F.Sc</p>
                </div>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed italic hidden md:block">
                "Striving to Learn. Building to Impact. Creating for Purpose."
              </p>
              <div className="flex flex-col gap-2 w-full">
                <a 
                  href="/assets/portfolio/source/cv.pdf" 
                  download="Swastik_Mondal_CV.pdf"
                  className="flex items-center justify-center gap-2 bg-cream text-neutral-bg1 text-xs font-bold py-2.5 rounded-lg hover:bg-cream-hover active:scale-[0.98] spring-transition w-full"
                >
                  <Download size={14} className="text-[#D78B55]" /> DOWNLOAD CV
                </a>
                <a 
                  href="https://github.com/mswastik735-sys" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 text-xs font-bold py-2.5 rounded-lg active:scale-[0.98] spring-transition w-full"
                >
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  VIEW ON GITHUB
                </a>
              </div>
            </>
          ) : (
            <a 
              href="/assets/portfolio/source/cv.pdf" 
              download="Swastik_Mondal_CV.pdf"
              className="hidden xl:flex shrink-0 items-center justify-center w-10 h-10 bg-cream text-neutral-bg1 rounded-lg hover:bg-cream-hover active:scale-[0.98] spring-transition"
              title="Download CV"
            >
              <Download size={16} className="text-[#D78B55]" />
            </a>
          )}

          {/* Social Links */}
          <div className={`flex items-center text-text-muted w-full ${isSidebarCollapsed && !mobileMenuOpen ? 'xl:flex-col xl:gap-5 pt-2' : 'justify-around border-t border-white/[0.04] pt-4 mt-2'}`}>
            <a href="https://www.linkedin.com/in/swastik-mondal-997877351/" target="_blank" rel="noreferrer" className="hover:text-cream transition-colors p-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/mswastik735-sys" target="_blank" rel="noreferrer" className="hover:text-cream transition-colors p-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <button onClick={() => setShowInstagramModal(true)} className="hover:text-cream transition-colors p-2">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </button>
            <a href="mailto:mswastik735@gmail.com" className="hover:text-cream transition-colors p-2">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </aside>

      {/* Center Scrolling Pane / Content Container */}
      <div className={`flex-1 flex flex-col relative w-full overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'xl:ml-[80px]' : 'xl:ml-[320px]'}`}>
        
        {/* Floating Top Header (Navbar) */}
        <header className="sticky top-0 left-0 right-0 glass backdrop-blur-md z-40 border-b border-white/[0.05] h-16 flex items-center justify-between px-4 md:px-12 select-none">
          {/* Mobile Profile / Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden inline-flex items-center gap-2 hover:bg-white/[0.05] p-1.5 rounded-full transition-colors"
            title="Open Menu"
          >
            <img 
              src="/assets/portfolio/about-portrait.jpg" 
              alt="Swastik Mondal" 
              className="w-8 h-8 rounded-full object-cover border border-white/20"
            />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-cream leading-none" style={{ fontFamily: "'Great Vibes', cursive" }}>Swastik</span>
              <span className="text-[9px] tracking-wider text-text-muted">MENU</span>
            </div>
          </button>
          
          <div className="hidden xl:flex items-center gap-6">
            <span className="text-[26px] text-cream" style={{ fontFamily: "'Great Vibes', cursive" }}>Swastik Mondal</span>
          </div>

          {/* Floating Actions / Menu trigger */}
          <div className="flex items-center gap-4">
            <a 
              href="/assets/portfolio/source/cv.pdf" 
              download="Swastik_Mondal_CV.pdf"
              className="hidden md:flex items-center gap-1.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-xs px-3 py-1.5 rounded-full text-cream font-semibold transition-all duration-300"
            >
              <Download size={12} className="text-[#D78B55]" /> Download CV
            </a>

            {/* Mobile hamburger menu (Top Header) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-text-primary hover:text-cream transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>

        {/* Page children contents */}
        <main className="w-full flex-1">
          {children}
        </main>
      </div>

      {/* Floating Action Button (FAB) for Mobile - Directly connects to left side panel */}
      <AnimatePresence>
        {!mobileMenuOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#D78B55] text-neutral-bg1 rounded-full shadow-[0_4_20px_rgba(215,139,85,0.4)] flex items-center justify-center z-[45] hover:scale-105 active:scale-95 transition-all border border-[#ECA47A]/30"
          >
            <Menu size={26} />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Instagram Coming Soon Modal */}
      <AnimatePresence>
        {showInstagramModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowInstagramModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-neutral-bg1 border border-white/[0.1] rounded-2xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowInstagramModal(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-24 h-24 mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-2xl rotate-6 opacity-80 blur animate-pulse" />
                <div className="relative w-full h-full bg-neutral-bg2 border border-white/20 rounded-2xl flex items-center justify-center overflow-hidden p-2">
                  <img src="/assets/instagram_sticker.png" alt="Coming Soon Sticker" className="w-full h-full object-contain drop-shadow-md" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Instagram Coming Soon!</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Oops! Looks like the aesthetic reels are still brewing in the creative lab. Check back soon for the visual drops!
              </p>
              
              <button 
                onClick={() => setShowInstagramModal(false)}
                className="mt-8 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold tracking-widest text-cream transition-colors"
              >
                GOT IT
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
export default AppShell;
