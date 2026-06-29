import ProjectLayout from './ProjectLayout';

export default function SpirulinaProject() {
  return (
    <ProjectLayout title="Spirulina Culture System">
      <div className="prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-white prose-a:text-cream">
        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop" 
            alt="Spirulina Bioreactor" 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Research Abstract</h2>
        <p className="mb-8 leading-relaxed">
          The primary objective of this project was to design, construct, and optimize an indoor microalgae cultivation system capable of sustaining high-density Spirulina (Arthrospira platensis) cultures. Through meticulous control of photobioreactor parameters, we achieved a consistent yield of 202g of fresh biomass per day.
        </p>

        <h3 className="text-xl font-bold mb-4">Methodology & System Design</h3>
        <p className="mb-6 leading-relaxed">
          The system utilizes a custom-built tubular photobioreactor setup, maximizing surface area-to-volume ratio for optimal light penetration. Lighting is provided by a precisely tuned LED array featuring specialized red and blue spectrums to enhance photosynthetic efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1582719202047-76d3330364d2?q=80&w=800&auto=format&fit=crop" alt="Lab Equipment" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1579169472621-122e28325a2f?q=80&w=800&auto=format&fit=crop" alt="Microscope view" className="w-full h-full object-cover" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Yield Optimization</h3>
        <p className="mb-6 leading-relaxed">
          By adjusting nutrient feed rates based on daily optical density readings, we mitigated culture crash risks and maintained exponential growth phases longer than traditional batch cultures. The pH was strictly monitored and buffered at 9.5-10.5 using a bicarbonate-based Zarrouk medium.
        </p>

        <h3 className="text-xl font-bold mb-4">Conclusion & Future Scope</h3>
        <p className="mb-8 leading-relaxed">
          This experiment proves the viability of decentralized, high-efficiency microalgae production in controlled indoor environments. Future iterations will focus on automating the harvesting process and integrating AI-driven optical density monitoring.
        </p>
      </div>
    </ProjectLayout>
  );
}
