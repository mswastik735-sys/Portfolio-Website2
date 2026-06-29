import ProjectLayout from './ProjectLayout';

export default function FlowerhornProject() {
  return (
    <ProjectLayout title="Flowerhorn Breeding">
      <div className="prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-white prose-a:text-cream">
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop" 
            alt="Flowerhorn Cichlid" 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Research Report: Breeding & Fattening</h2>
        <p className="mb-8 leading-relaxed">
          This project outlines the systematic approach developed to breed, select, and grow high-grade Flowerhorn cichlids. The study focuses on genetic trait isolation (specifically nuchal hump size and pearling), water chemistry optimization, and high-protein feed formulations.
        </p>

        <h3 className="text-xl font-bold mb-4">Water Chemistry & Environment</h3>
        <p className="mb-6 leading-relaxed">
          Flowerhorns require highly specific water conditions for optimal metabolic rates and color expression. The breeding tanks were maintained at:
        </p>
        <ul className="mb-8 space-y-2 text-text-secondary list-disc pl-6">
          <li><strong>Temperature:</strong> 29.5°C to 31°C (Higher temperatures stimulate metabolic activity and hump growth).</li>
          <li><strong>pH:</strong> 7.4 - 7.8 (Buffered using crushed coral substrate).</li>
          <li><strong>Water Changes:</strong> 30% bi-weekly to maintain sub-10ppm Nitrate levels.</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1517594422361-5e18d03c80e1?q=80&w=800&auto=format&fit=crop" alt="Breeding Setup" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop" alt="Fry Rearing" className="w-full h-full object-cover" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">Feed Formulation & Fattening</h3>
        <p className="mb-6 leading-relaxed">
          To maximize growth potential, a custom diet protocol was implemented. The diet rotated between high-protein pellets (60%+ crude protein), freeze-dried bloodworms, and fresh shrimp enriched with astaxanthin to promote red coloration.
        </p>

        <h3 className="text-xl font-bold mb-4">Genetic Selection</h3>
        <p className="mb-8 leading-relaxed">
          Only fry exhibiting aggressive pearling patterns and early signs of nuchal hump development by week 8 were selected for the grow-out phase. This rigorous culling process ensured only top-tier genetics were passed to subsequent generations.
        </p>
      </div>
    </ProjectLayout>
  );
}
