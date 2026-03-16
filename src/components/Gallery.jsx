import React, { useState, useEffect } from 'react';
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

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox.open) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') {
        setLightbox((lb) => ({
          ...lb,
          index: (lb.index - 1 + filtered.length) % filtered.length,
        }));
      }
      if (e.key === 'ArrowRight') {
        setLightbox((lb) => ({
          ...lb,
          index: (lb.index + 1) % filtered.length,
        }));
      }
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open, filtered.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.open]);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
            Photos & Souvenirs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-fce-green mb-4 font-serif">
            Notre Galerie
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Revivez nos événements en images
          </p>
          <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-fce-green text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-fce-green/10 hover:text-fce-green border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Count */}
        <p className="text-center text-gray-400 text-sm mb-10">
          {filtered.length} photo{filtered.length > 1 ? 's' : ''}
        </p>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
                transition={{
                  duration: 0.35,
                  delay: (i % ITEMS_PER_PAGE) * 0.04,
                }}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2 text-white">
                      <Search className="w-4 h-4 flex-shrink-0" />
                      <p className="font-semibold text-sm truncate">{image.title}</p>
                    </div>
                    <p className="text-white/60 text-xs mt-1">{formatDate(image.date)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-sm mb-4">
              {Math.min(visibleCount, filtered.length)} / {filtered.length} photos affichées
            </p>
            <motion.button
              onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
              className="bg-fce-green text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-fce-lightGreen transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Charger plus
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && currentImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium select-none">
              {lightbox.index + 1} / {filtered.length}
            </div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
              onClick={closeLightbox}
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              className="absolute left-3 md:left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lb) => ({
                  ...lb,
                  index: (lb.index - 1 + filtered.length) % filtered.length,
                }));
              }}
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.index}
              className="mx-16 md:mx-24 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-4">
                <p className="text-white font-semibold text-base">{currentImage.title}</p>
                <p className="text-white/50 text-sm mt-1">{formatDate(currentImage.date)}</p>
              </div>
            </motion.div>

            {/* Next button */}
            <button
              className="absolute right-3 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lb) => ({
                  ...lb,
                  index: (lb.index + 1) % filtered.length,
                }));
              }}
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
