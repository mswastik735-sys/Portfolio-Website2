import UpcomingSection from '../../sections/upcoming/UpcomingSection';

export function Projects() {
  return (
    <section 
      id="projects" 
      className="py-24 px-6 md:px-12 border-t border-white/[0.05] bg-neutral-bg1"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">
            05 FEATURED PROJECTS
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Creations & Experiments
          </h2>
        </div>

        {/* Dynamic Project Grid Cards */}
        <UpcomingSection />

      </div>
    </section>
  );
}
export default Projects;
