import ProjectLayout from './ProjectLayout';

export default function InfluencerStudioProject() {
  const influencers = [
    { name: "Long Dress Photoshoot", image: "/assets/portfolio/reeva/red-dress.jpeg" },
    { name: "Vogue Cover", image: "/assets/portfolio/reeva/uploaded-vogue.jpg" },
    { name: "Portugal World Cup 2026", image: "/assets/portfolio/reeva/uploaded-portugal.jpg" },
    { name: "Cinematic Portrait Photoshoot", image: "/assets/portfolio/reeva/cinematic-portrait.jpeg" },
    { name: "Sports / Football", image: "/assets/portfolio/reeva/gemini-01.png" },
    { name: "Studio Glamour Photoshoot", image: "/assets/portfolio/reeva/chatgpt-01.png" },
  ];

  return (
    <ProjectLayout title="AI Influencer Studio">
      <div className="prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-white prose-a:text-cream">
        <h2 className="text-2xl font-bold mb-6">Virtual Identity Generation</h2>
        <p className="mb-8 leading-relaxed">
          The AI Influencer Studio is a visual experiment exploring the creation, marketing, and engagement metrics of virtual models. By leveraging Stable Diffusion and custom LoRAs, we generated hyper-realistic characters based on successful real-world and virtual reference influencers.
        </p>

        <h3 className="text-xl font-bold mb-8">Reference Library & Style Testing</h3>
        
        {/* Masonry-style Grid for Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {influencers.map((inf, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-bg2">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img 
                  src={inf.image} 
                  alt={inf.name} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h4 className="text-sm font-bold text-cream m-0">{inf.name}</h4>
                <p className="text-[10px] text-text-muted mt-1 uppercase tracking-wider">Style Reference</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">Engagement Analytics</h3>
        <p className="mb-8 leading-relaxed">
          The generated content was A/B tested across Instagram and TikTok to determine which visual characteristics (lighting, fashion aesthetics, facial symmetry) drove the highest engagement rates compared to human baselines.
        </p>
      </div>
    </ProjectLayout>
  );
}
