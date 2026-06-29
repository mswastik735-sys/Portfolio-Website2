import { motion } from 'framer-motion';

export function Skills() {
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

  const skillsData = [
    {
      title: "HR & PEOPLE",
      percentage: 90,
      color: "stroke-amber-500",
      bullets: [
        "Recruitment & Selection",
        "Employee Engagement",
        "HR Operations",
        "Performance Management",
        "HR Analytics"
      ]
    },
    {
      title: "DATA & ANALYTICS",
      percentage: 85,
      color: "stroke-emerald-500",
      bullets: [
        "Data Cleaning",
        "Data Visualization",
        "Business Insights",
        "Excel Advanced",
        "PowerPoint"
      ]
    },
    {
      title: "TECHNICAL",
      percentage: 80,
      color: "stroke-rose-500",
      bullets: [
        "Python (Basic)",
        "SQL (Basic)",
        "MS Excel",
        "PowerPoint",
        "TCS Certified"
      ]
    },
    {
      title: "FISHERIES & AQUACULTURE",
      percentage: 90,
      color: "stroke-blue-500",
      bullets: [
        "Fish Health Management",
        "Aquaculture Systems",
        "Ornamental Fish Breeding",
        "Water Quality Monitoring",
        "Spirulina Cultivation"
      ]
    },
    {
      title: "SOFT SKILLS",
      percentage: 95,
      color: "stroke-cream",
      bullets: [
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Time Management",
        "Leadership"
      ]
    }
  ];

  // Circle length parameter for 100% stroke dasharray (r=36 -> C=2*pi*36 ≈ 226)
  const strokeDashOffset = (percentage: number) => {
    const circumference = 226;
    return circumference - (percentage / 100) * circumference;
  };

  return (
    <section 
      id="skills" 
      className="py-24 px-6 md:px-12 border-t border-white/[0.05] bg-neutral-bg1"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">
            03 MY SKILLS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Core Competencies
          </h2>
        </div>

        {/* Progress Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full"
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="double-bezel-outer group hover:shadow-glow spring-transition h-full flex flex-col"
            >
              <div className="double-bezel-inner flex flex-col justify-between items-center w-full h-full text-center">
                {/* SVG Progress Circle */}
                <div className="relative w-24 h-24 mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                    {/* Background Track */}
                    <circle 
                      cx="40" 
                      cy="40" 
                      r="36" 
                      className="stroke-white/[0.03] fill-transparent"
                      strokeWidth="6"
                    />
                    {/* Animated Fill Circle */}
                    <motion.circle 
                      cx="40" 
                      cy="40" 
                      r="36" 
                      className={`${skill.color} fill-transparent`}
                      strokeWidth="6"
                      strokeDasharray="226"
                      initial={{ strokeDashoffset: 226 }}
                      whileInView={{ strokeDashoffset: strokeDashOffset(skill.percentage) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-cream font-mono">
                    {skill.percentage}%
                  </div>
                </div>

                <div className="w-full">
                  <h3 className="text-xs font-bold tracking-widest text-white mb-4 border-b border-white/[0.05] pb-2 uppercase">
                    {skill.title}
                  </h3>
                  <ul className="text-left space-y-2 text-text-secondary text-[11px] font-sans">
                    {skill.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 hover:text-white spring-transition">
                        <span className="text-cream mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
export default Skills;
