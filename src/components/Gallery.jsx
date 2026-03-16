import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { galleryImages, categories } from '../data/galleryData';

const ITEMS_PER_PAGE = 12;

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const touchStartX = useRef(null);

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const currentImage = filtered[lightbox.index];

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const openLightbox = (image) => {
    const index = filtered.findIndex((img) => img.id === image.id);
    setLightbox({ open: true, index });
  };

  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const goPrev = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index - 1 + filtered.length) % filtered.length,
    }));

  const goNext = () =>
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index + 1) % filtered.length,
    }));

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox.open) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open, filtered.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox.open]);

  // Touch swipe handlers for lightbox
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">
            Photos & Souvenirs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-fce-green mb-3 md:mb-4 font-serif">
            Notre Galerie
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Revivez nos événements en images
          </p>
          <div className="w-20 md:w-24 h-1 bg-fce-orange mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Category Filters — scrollable on mobile, wrapping on sm+ */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-x-auto -mx-4 px-4 sm:overflow-visible sm:mx-0 sm:px-0">
            <div className="flex gap-2 sm:flex-wrap sm:justify-center pb-2 sm:pb-0 w-max sm:w-auto mx-auto">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex-shrink-0 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-fce-green text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-fce-green/10 hover:text-fce-green border border-gray-200'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-center text-gray-400 text-xs sm:text-sm mb-6 md:mb-10">
          {filtered.length} photo{filtered.length > 1 ? 's' : ''}
        </p>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {visible.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, delay: (i % ITEMS_PER_PAGE) * 0.04 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200"
                onClick={() => openLightbox(image)}
              >
                {/* Aspect ratio wrapper */}
                <div className="aspect-[4/3] relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Caption — always visible on mobile, hover-only on desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/65 to-transparent
                                  sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                                  transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-white">
                      <Search className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <p className="font-semibold text-xs sm:text-sm truncate">{image.title}</p>
                    </div>
                    <p className="text-white/60 text-xs mt-0.5 hidden sm:block">{formatDate(image.date)}</p>
                  </div>

                  {/* Desktop hover: dark overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 hidden sm:block" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            className="text-center mt-10 md:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-xs sm:text-sm mb-3">
              {Math.min(visibleCount, filtered.length)} / {filtered.length} photos affichées
            </p>
            <motion.button
              onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
              className="bg-fce-green text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold shadow-lg hover:bg-fce-lightGreen transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Charger plus
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox.open && currentImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top bar: counter + close */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <span className="text-white/60 text-sm font-medium select-none">
                {lightbox.index + 1} / {filtered.length}
              </span>
              <button
                className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                onClick={closeLightbox}
                aria-label="Fermer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Image area — fills remaining height */}
            <div className="flex-1 flex items-center justify-center relative min-h-0 px-2 sm:px-14 md:px-20">
              {/* Prev — hidden on mobile (use swipe), visible on sm+ */}
              <button
                className="hidden sm:flex absolute left-2 md:left-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-all z-10 items-center justify-center"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Image + caption */}
              <motion.div
                key={lightbox.index}
                className="flex flex-col items-center w-full max-w-4xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="max-w-full max-h-[58vh] sm:max-h-[65vh] md:max-h-[72vh] w-auto object-contain rounded-lg shadow-2xl"
                />
                <div className="text-center mt-3 px-4">
                  <p className="text-white font-semibold text-sm sm:text-base leading-snug">
                    {currentImage.title}
                  </p>
                  <p className="text-white/50 text-xs sm:text-sm mt-1">{formatDate(currentImage.date)}</p>
                </div>
              </motion.div>

              {/* Next — hidden on mobile (use swipe), visible on sm+ */}
              <button
                className="hidden sm:flex absolute right-2 md:right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-all z-10 items-center justify-center"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Bottom nav bar — mobile only */}
            <div className="flex sm:hidden items-center justify-between px-8 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <button
                className="text-white/70 hover:text-white bg-white/15 active:bg-white/25 rounded-full p-3 transition-all"
                onClick={goPrev}
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <p className="text-white/40 text-xs">Glissez ou utilisez les flèches</p>
              <button
                className="text-white/70 hover:text-white bg-white/15 active:bg-white/25 rounded-full p-3 transition-all"
                onClick={goNext}
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
