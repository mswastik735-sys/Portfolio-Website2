import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  category: 'Photography' | 'Aquascaping' | 'Fashion Editorial' | 'Travel';
  alt: string;
}

export function Gallery() {
  const [selectedTab, setSelectedTab] = useState<'All' | 'Photography' | 'Aquascaping' | 'AI Influencer' | 'Travel'>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);
  const [activeImages, setActiveImages] = useState<Record<number, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const tabs: ('All' | 'Photography' | 'Aquascaping' | 'AI Influencer' | 'Travel')[] = [
    'All',
    'Photography',
    'Aquascaping',
    'AI Influencer',
    'Travel'
  ];

  const galleryItems: GalleryItem[] = [
    { id: 1, src: "/assets/portfolio/gallery/preview-01.png", category: "Photography", alt: "Swastik Mondal Portrait Photography" },
    { id: 2, src: "/assets/portfolio/gallery/preview-02.png", category: "Photography", alt: "Cinematic portrait close-up" },
    { id: 3, src: "/assets/portfolio/gallery/preview-03.png", category: "Photography", alt: "Dramatic monochrome landscape" },
    { id: 4, src: "/assets/portfolio/gallery/preview-04.png", category: "Photography", alt: "Abstract lights and shadows" },
    { id: 5, src: "/assets/portfolio/gallery/preview-05.png", category: "Aquascaping", alt: "Planted freshwater aquarium setup" },
    { id: 6, src: "/assets/portfolio/gallery/preview-06.png", category: "Aquascaping", alt: "Close-up of aquatic moss and plants" },
    { id: 7, src: "/assets/portfolio/gallery/preview-07.jpg", category: "Aquascaping", alt: "Nano aquarium aquascape detail" },
    { id: 8, src: "/assets/portfolio/gallery/preview-08.jpg", category: "Aquascaping", alt: "Vibrant planted fish tank design" },
    { id: 9, src: "/assets/portfolio/gallery/reva-1.png", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 1" },
    { id: 10, src: "/assets/portfolio/gallery/reva-11.jpeg", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 2" },
    { id: 11, src: "/assets/portfolio/gallery/reva-3.png", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 3" },
    { id: 14, src: "/assets/portfolio/gallery/reva-4.png", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 4" },
    { id: 15, src: "/assets/portfolio/gallery/reva-5.png", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 5" },
    { id: 16, src: "/assets/portfolio/gallery/reva-6.jpeg", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 6" },
    { id: 17, src: "/assets/portfolio/gallery/reva-7.jpeg", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 7" },
    { id: 18, src: "/assets/portfolio/gallery/reva-8.jpeg", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 8" },
    { id: 19, src: "/assets/portfolio/gallery/reva-9.jpeg", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 9" },
    { id: 20, src: "/assets/portfolio/gallery/reva-10.jpeg", category: "AI Influencer", alt: "Reva AI Influencer Photoshoot 10" },
    { id: 12, src: "/assets/portfolio/gallery/preview-12.jpg", category: "Travel", alt: "Landscape photo from travels" },
    { id: 13, src: "/assets/portfolio/gallery/preview-13.jpg", category: "Travel", alt: "Scenic view of river delta" }
  ];

  const filteredItems = selectedTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedTab);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-24 px-6 md:px-12 border-t border-white/[0.05] bg-neutral-bg1"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">
            07 GALLERY
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Visual Portfolio
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 select-none border-b border-white/[0.05] pb-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => { setSelectedTab(tab); setShowAll(false); }}
              className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedTab === tab 
                  ? 'bg-cream text-neutral-bg1 border-cream' 
                  : 'bg-white/[0.02] border-white/[0.05] text-text-secondary hover:text-white hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="double-bezel-outer group hover:shadow-glow cursor-pointer aspect-square w-full flex"
                onMouseEnter={() => setHoveredImageId(item.id)}
                onMouseLeave={() => setHoveredImageId(null)}
                onClick={() => {
                  setActiveImageIndex(index);
                  setActiveImages(prev => ({
                    ...prev,
                    [item.id]: !prev[item.id]
                  }));
                }}
                onTouchStart={() => {
                  setActiveImages(prev => ({
                    ...prev,
                    [item.id]: true
                  }));
                }}
              >
                <div className="double-bezel-inner !p-0 w-full h-full relative overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={`w-full h-full object-cover spring-transition ${
                      (hoveredImageId === item.id || activeImages[item.id])
                        ? 'scale-105 filter-none grayscale-0 contrast-100 brightness-100'
                        : 'grayscale contrast-105 brightness-[0.85] group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center spring-transition">
                    <Eye className="text-cream" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery footer action */}
        {!showAll && filteredItems.length > 8 && (
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => setShowAll(true)}
              className="text-xs font-bold text-cream hover:underline uppercase"
            >
              View Full Gallery
            </button>
          </div>
        )}

        {/* Image Lightbox Dialog overlay */}
        <AnimatePresence>
          {activeImageIndex !== null && filteredItems[activeImageIndex] && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageIndex(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] flex flex-col items-center justify-center p-4 sm:p-8"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveImageIndex(null); }}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[110]"
              >
                <X size={32} />
              </button>
              
              <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl h-full gap-4">
                <button 
                  onClick={handlePrev}
                  className="hidden sm:flex text-white/50 hover:text-white p-4 transition-colors"
                >
                  <ChevronLeft size={48} />
                </button>
                
                <motion.div 
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative flex-1 flex flex-col items-center justify-center h-full max-h-full overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={filteredItems[activeImageIndex].src} 
                    alt={filteredItems[activeImageIndex].alt} 
                    className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-white font-medium">{filteredItems[activeImageIndex].category}</p>
                    <p className="text-white/60 text-sm mt-1">{filteredItems[activeImageIndex].alt}</p>
                    <p className="text-white/40 text-xs mt-2">{activeImageIndex + 1} / {filteredItems.length}</p>
                  </div>
                </motion.div>

                <button 
                  onClick={handleNext}
                  className="hidden sm:flex text-white/50 hover:text-white p-4 transition-colors"
                >
                  <ChevronRight size={48} />
                </button>

                {/* Mobile navigation */}
                <div className="flex sm:hidden w-full justify-between mt-4">
                  <button 
                    onClick={handlePrev}
                    className="text-white/70 hover:text-white p-2"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="text-white/70 hover:text-white p-2"
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
export default Gallery;
