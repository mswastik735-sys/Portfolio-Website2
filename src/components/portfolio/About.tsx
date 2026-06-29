import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import MbaSection from '../../sections/mba/MbaSection';

export function About() {
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

  const contactInfo = [
    { icon: <MapPin size={16} />, label: "Location", value: "Kolkata, West Bengal, India" },
    { icon: <Mail size={16} />, label: "Email", value: "mswastik735@gmail.com" },
    { icon: <Phone size={16} />, label: "Phone", value: "+91 9330141833" },
    { icon: <Calendar size={16} />, label: "Availability", value: "Open to Opportunities" },
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-6 md:px-12 border-t border-white/[0.05] bg-neutral-bg1"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">
            02 ABOUT ME
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Personal Narrative
          </h2>
        </div>

        {/* Bento grid layout for About details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Bio Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Contact metadata pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/[0.01] border border-white/[0.04] rounded-xl hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="text-cream bg-white/[0.04] p-2 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block uppercase font-bold tracking-wider">{info.label}</span>
                    <span className="text-xs font-semibold text-text-secondary">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Paragraph Bio */}
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              I hold a Bachelor of Fisheries Science (B.F.Sc.) and am currently pursuing an MBA with specialization in Human Resource Management (HR - Major) and Systems & Operations (Minor) at West Bengal State University. Experienced in corporate roles (data entry, analytics, HR assistant) as well as fisheries and aquaculture projects. I combine people management, data-driven decision making, and aquaculture expertise to adapt in both corporate and research-driven environments.
            </p>

            <button className="group flex items-center gap-2 text-xs font-bold text-cream hover:text-white mt-2 transition-colors duration-300">
              View Full Profile <ArrowRight size={14} className="group-hover:translate-x-1 spring-transition" />
            </button>
          </motion.div>

          {/* Right illustration / graphic bento panel */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative w-full aspect-[3/4] rounded-2xl overflow-hidden double-bezel-outer bg-white/[0.01]"
          >
            <img 
              src="/assets/portfolio/about-portrait.jpg" 
              alt="Swastik Mondal" 
              className="w-full h-full object-cover object-[center_20%] filter grayscale contrast-105 absolute inset-0 rounded-[calc(2rem-0.375rem)]"
            />
          </motion.div>
        </motion.div>

        {/* Detailed Timeline Module from MBA Section */}
        <div className="border-t border-white/[0.05] pt-16">
          <MbaSection />
        </div>

      </div>
    </section>
  );
}
export default About;
