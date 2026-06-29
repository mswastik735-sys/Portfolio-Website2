import { motion } from 'framer-motion';
import { Award, GraduationCap, Waves } from 'lucide-react';
import { educationTimeline, aquacultureExperience, academicCertifications } from './mba.content';

export function MbaSection() {
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
    hidden: { opacity: 0, y: 20 },
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
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full"
    >
      {/* Education Timeline */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <h3 className="text-xl font-semibold text-cream flex items-center gap-2 mb-2">
          <GraduationCap className="text-cream" size={24} /> Academic Journey
        </h3>
        
        <div className="relative pl-6 border-l border-white/[0.08] flex flex-col gap-8">
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-neutral-bg1 border-2 border-cream group-hover:bg-cream transition-colors duration-300" />
              
              <div className="text-xs font-semibold text-text-muted mb-1 bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded w-max">
                {edu.year}
              </div>
              <h4 className="text-base font-semibold text-text-primary group-hover:text-cream transition-colors duration-300">
                {edu.title}
              </h4>
              <p className="text-sm text-text-secondary">
                {edu.institution}
              </p>
              {edu.details && (
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aquaculture Volunteer & Certifications */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        {/* Aquaculture Vol Exp */}
        <motion.div variants={itemVariants} className="double-bezel-outer group hover:shadow-glow spring-transition">
          <div className="double-bezel-inner">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-900/40 flex items-center justify-center text-cream">
                <Waves size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-cream">{aquacultureExperience.title}</h4>
                <p className="text-xs text-text-secondary">{aquacultureExperience.role}</p>
              </div>
            </div>
            <div className="text-[10px] text-text-muted mb-3">{aquacultureExperience.period}</div>
            <ul className="space-y-2 list-disc pl-4 text-xs text-text-secondary">
              {aquacultureExperience.description.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Certifications List */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-cream flex items-center gap-2">
            <Award className="text-cream" size={20} /> Focus Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {academicCertifications.map((cert, index) => (
              <span
                key={index}
                className="text-xs text-text-secondary bg-white/[0.03] border border-white/[0.06] hover:border-cream/30 hover:bg-white/[0.06] px-3 py-1.5 rounded-full transition-all duration-300"
              >
                {cert.title}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default MbaSection;
