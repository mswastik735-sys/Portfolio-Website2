import { motion } from 'framer-motion';
import { Award, GraduationCap, FileText } from 'lucide-react';
import { educationTimeline, academicCertifications } from '../../sections/mba/mba.content';

export function Education() {
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
    <section 
      id="education" 
      className="py-24 px-6 md:px-12 border-t border-white/[0.05] bg-neutral-bg1"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">
            06 EDUCATION & CERTIFICATIONS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Academic Background
          </h2>
        </div>

        {/* Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Education Details List */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <h3 className="text-lg font-semibold text-cream flex items-center gap-2 border-b border-white/[0.05] pb-2">
              <GraduationCap className="text-cream" size={22} /> Degrees & Institutions
            </h3>
            
            <div className="flex flex-col gap-6">
              {educationTimeline.map((edu, index) => (
                <div 
                  key={index}
                  className="p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <span className="text-[10px] font-mono font-bold text-cream bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications and Trainings List */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <h3 className="text-lg font-semibold text-cream flex items-center gap-2 border-b border-white/[0.05] pb-2">
              <Award className="text-cream" size={22} /> Certifications & Trainings
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {academicCertifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="text-xs text-text-secondary bg-white/[0.02] border border-white/[0.06] hover:border-cream/30 px-3.5 py-2 rounded-lg transition-all duration-300 hover:bg-white/[0.05]"
                  >
                    {cert.title}
                  </span>
                ))}
              </div>

              {/* Certificate preview cards */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="p-4 bg-white/[0.01] border border-white/[0.04] rounded-xl flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-neutral-bg3 flex items-center justify-center border border-white/[0.06] text-text-muted shrink-0">
                    <FileText size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-text-secondary truncate">Data Analytics Job Simulation</h4>
                    <p className="text-[10px] text-text-muted mt-0.5">Deloitte</p>
                  </div>
                  <a href="/assets/portfolio/certificates/deloitte-certificate.pdf" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-cream hover:underline uppercase shrink-0 px-2 py-1 bg-white/[0.03] rounded-md hover:bg-white/[0.08] transition-colors border border-white/5">
                    View PDF
                  </a>
                </div>

                <div className="p-4 bg-white/[0.01] border border-white/[0.04] rounded-xl flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-neutral-bg3 flex items-center justify-center border border-white/[0.06] text-text-muted shrink-0">
                    <FileText size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-text-secondary truncate">Generative AI Mastermind</h4>
                    <p className="text-[10px] text-text-muted mt-0.5">Outskill</p>
                  </div>
                  <a href="/assets/portfolio/certificates/outskill-certificate.pdf" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-cream hover:underline uppercase shrink-0 px-2 py-1 bg-white/[0.03] rounded-md hover:bg-white/[0.08] transition-colors border border-white/5">
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
export default Education;
