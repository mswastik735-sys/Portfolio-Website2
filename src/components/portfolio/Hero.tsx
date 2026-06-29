import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';

export function Hero() {
  const [exploreState, setExploreState] = useState<'idle' | 'playing' | 'flashing'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (exploreState === 'playing' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.warn("Video play failed:", err);
      });
    }
  }, [exploreState]);

  const triggerFlashAndScroll = () => {
    setExploreState('flashing');
    
    // Smoothly scroll to the about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset back to idle state after the scroll has started (mid-flash)
    setTimeout(() => {
      setExploreState('idle');
    }, 800);
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (exploreState !== 'idle') return;
    setExploreState('playing');
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && exploreState === 'playing') {
      // 5.7s captures him walking forward, standing still looking at the camera, then turning
      if (videoRef.current.currentTime >= 5.7) {
        triggerFlashAndScroll();
      }
    }
  };

  const handleVideoEnd = () => {
    if (exploreState === 'playing') {
      triggerFlashAndScroll();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100dvh-4rem)] flex flex-col justify-center px-6 md:px-12 py-12 relative overflow-hidden"
    >
      {/* Background Image - Idle / Default state (Right side column format on desktop) */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-[48%] z-0 select-none pointer-events-none">
        <img 
          src="/assets/portfolio/about-portrait.jpg" 
          alt="Swastik Mondal Backdrop" 
          className="w-full h-full object-cover object-[center_20%] filter contrast-[1.1] brightness-[0.75] absolute inset-0 transition-opacity duration-700 ease-out"
        />
        {/* Blending Gradients */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-bg1 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-bg1 to-transparent z-10" />
      </div>

      {/* Cinematic Walking Video Background Overlay (Right side column format on desktop) */}
      <AnimatePresence>
        {exploreState === 'playing' && (
          <motion.video
            ref={videoRef}
            src="/assets/portfolio/video-background.mp4"
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 right-0 h-full w-full lg:w-[48%] object-cover object-[center_20%] z-10 filter contrast-[1.1] brightness-[0.85]"
          />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-7xl mx-auto z-20">
        {/* Left Intro Text Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col gap-6 select-none"
        >
          <motion.span 
            variants={itemVariants} 
            className={`text-xs uppercase font-bold tracking-[0.3em] text-cream transition-opacity duration-500 ${
              exploreState === 'playing' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Hi, I'm
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white font-serif pb-1"
          >
            SWASTIK <span className="bg-gradient-to-br from-[#ECA47A] via-[#D78B55] to-[#A85025] bg-clip-text text-transparent block mt-1">MONDAL</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className={`flex flex-wrap gap-2 text-xs md:text-sm font-bold text-text-secondary tracking-wider transition-opacity duration-500 ${
              exploreState === 'playing' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span>MBA (HR)</span>
            <span>•</span>
            <span>Data Analytics</span>
            <span>•</span>
            <span>AI Builder</span>
            <span>•</span>
            <span>B.F.Sc</span>
            <span>•</span>
            <span>Photographer</span>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className={`text-sm md:text-base text-text-secondary max-w-xl leading-relaxed font-sans transition-opacity duration-500 ${
              exploreState === 'playing' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            A result-driven professional blending Human Resource Management (HR - Major) and Fisheries expertise (B.F.Sc) to solve real-world problems and create meaningful impact.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className={`flex flex-wrap gap-4 mt-4 transition-opacity duration-500 ${
              exploreState === 'playing' ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <button 
              onClick={handleExploreClick}
              className="group flex items-center gap-4 bg-gradient-to-r from-[#D78B55] to-[#A85025] text-white hover:brightness-110 shadow-glow text-xs font-bold px-6 py-3 rounded-full spring-transition"
            >
              Explore My Work
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 spring-transition">
                <ArrowUpRight size={14} className="text-white" />
              </span>
            </button>
            
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-4 border border-white/10 hover:border-cream/30 hover:bg-white/[0.02] text-xs font-bold px-6 py-3 rounded-full spring-transition text-white"
            >
              Contact Me
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 spring-transition">
                <Send size={12} className="text-white" />
              </span>
            </a>
          </motion.div>

          {/* Scroll Down */}
          <motion.div 
            variants={itemVariants}
            className={`hidden md:flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold text-text-muted mt-12 cursor-pointer select-none transition-opacity duration-500 ${
              exploreState === 'playing' ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1.5 bg-cream rounded-full"
              />
            </div>
            <span>SCROLL DOWN</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Warm Shining Flash Screen Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-[#fafaf8] transition-opacity duration-500 pointer-events-none ${
          exploreState === 'flashing' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </section>
  );
}

export default Hero;
