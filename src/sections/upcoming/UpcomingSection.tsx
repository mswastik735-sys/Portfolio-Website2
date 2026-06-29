import { useState } from 'react';
import { motion } from 'framer-motion';
import { Construction, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { upcomingProjects } from './upcoming.content';

export function UpcomingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCards, setActiveCards] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
    >
      {upcomingProjects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="double-bezel-outer group hover:shadow-glow spring-transition h-full flex cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => {
            if (project.documentUrl) {
              navigate(project.documentUrl);
            }
            setActiveCards(prev => ({
              ...prev,
              [index]: !prev[index]
            }));
          }}
          onTouchStart={() => {
            setActiveCards(prev => ({
              ...prev,
              [index]: true
            }));
          }}
        >
          <div className="double-bezel-inner flex flex-col justify-between w-full h-full !p-0 overflow-hidden">
            
            {/* Project Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.05]">
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full object-cover spring-transition ${
                  (hoveredIndex === index || activeCards[index])
                    ? 'scale-105 filter-none grayscale-0 contrast-100 brightness-100'
                    : 'grayscale contrast-[1.05] brightness-[0.85] group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100'
                }`}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center spring-transition z-10">
                <Eye className="text-cream" size={24} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg2 via-transparent to-transparent opacity-60 z-0" />
            </div>

            {/* Content Container */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-cream bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'In Progress' ? 'bg-amber-500 animate-pulse' :
                      project.status === 'Active' ? 'bg-green-500' : 'bg-zinc-500'
                    }`} />
                    <span className="text-[9px] font-semibold text-text-muted">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-white group-hover:text-cream spring-transition mb-2">
                  {project.title}
                </h4>
                
                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04] mt-4">
                {project.techTags.map((tag, idx) => (
                  <span key={idx} className="text-[8px] font-semibold text-text-muted bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      ))}

      {/* Suggested planned slot card */}
      <motion.div
        variants={itemVariants}
        className="double-bezel-outer group hover:shadow-glow spring-transition h-full flex"
      >
        <div className="double-bezel-inner flex flex-col items-center justify-center text-center p-8 w-full border border-dashed border-white/10 rounded-2xl min-h-[300px]">
          <Construction className="text-text-muted mb-4 animate-bounce" size={28} />
          <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">DASHED EXPANSION SLOT</h4>
          <p className="text-[11px] text-text-muted max-w-[200px] leading-relaxed">
            This workspace section is modular. You can add future projects easily under upcoming.content.ts.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default UpcomingSection;
