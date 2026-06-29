import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { officialExperiences } from './official.content';

export function OfficialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-6">
        {officialExperiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="double-bezel-outer group hover:shadow-glow spring-transition"
          >
            <div className="double-bezel-inner">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${exp.logoBg} flex items-center justify-center text-white shrink-0`}>
                    <Briefcase size={22} className="text-cream" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-cream spring-transition">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-text-muted bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05] h-fit md:self-start self-end">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-3 list-disc pl-4 text-sm text-text-secondary">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed hover:text-text-primary spring-transition">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
export default OfficialSection;
