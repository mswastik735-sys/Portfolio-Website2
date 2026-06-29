import ProjectLayout from './ProjectLayout';

export default function HomeAquaProject() {
  return (
    <ProjectLayout title="Home Aqua">
      <div className="prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-white prose-a:text-cream">
        <h2 className="text-2xl font-bold mb-6">Aquascaping & Ecosystem Design</h2>
        <p className="mb-8 leading-relaxed">
          Home Aqua is an entrepreneurial pursuit focusing on the art and science of aquascaping. We design, build, and maintain custom freshwater ecosystems that act as living art pieces for residential and commercial environments.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div className="aspect-square rounded-xl overflow-hidden border border-white/10 group relative">
            <img src="https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=800&auto=format&fit=crop" alt="Aquascape 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-sm font-bold tracking-widest text-cream">Iwagumi Style</span>
            </div>
          </div>
          <div className="aspect-square rounded-xl overflow-hidden border border-white/10 group relative">
            <img src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop" alt="Aquascape 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-sm font-bold tracking-widest text-cream">Dutch Style</span>
            </div>
          </div>
          <div className="aspect-square rounded-xl overflow-hidden border border-white/10 group relative md:hidden lg:block">
            <img src="https://images.unsplash.com/photo-1542385262-cea2c96fbc62?q=80&w=800&auto=format&fit=crop" alt="Aquascape 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-sm font-bold tracking-widest text-cream">Nature Aquarium</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">The Creation Process</h3>
        <p className="mb-6 leading-relaxed">
          Every tank starts with a hardscape conceptualization using seiryu stone, dragon stone, or spider wood. The substrate is layered with active soil to promote rapid root growth for carpeting plants.
        </p>

        <h3 className="text-xl font-bold mb-4">Botanical Balance</h3>
        <p className="mb-6 leading-relaxed">
          Maintaining these environments requires a deep understanding of the nitrogen cycle, CO2 injection metrics, and macro/micro nutrient dosing regimens. The goal is to reach an equilibrium where the ecosystem requires minimal human intervention while thriving visually.
        </p>
      </div>
    </ProjectLayout>
  );
}
