import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/images/leslogosdespartenaires/env-FR.jpg',
  '/images/leslogosdespartenaires/env-GN.jpg',
   '/images/leslogosdespartenaires/culture-FR.jpg',
  '/images/leslogosdespartenaires/Etrang-GN.jpg',
  '/images/leslogosdespartenaires/mine-GN.jpg',
  '/images/leslogosdespartenaires/transport-GN.jpg',
   '/images/leslogosdespartenaires/sacem.jpg',
  '/images/leslogosdespartenaires/PHOTO-2026-01-04-19-26-38.jpg',
  '/images/leslogosdespartenaires/PHOTO-2026-01-04-19-32-11.jpg',
  '/images/leslogosdespartenaires/PHOTO-2026-01-04-19-38-02.jpg',
  '/images/leslogosdespartenaires/PHOTO-2026-01-04-19-39-20.jpg',
  '/images/leslogosdespartenaires/PHOTO-2026-01-04-19-40-03.jpg',
  '/images/leslogosdespartenaires/iyo-concept-logo.jpg',
  '/images/leslogosdespartenaires/LOGO-CITE-DES-ART-2021.png',
  '/images/leslogosdespartenaires/jose-prod-logo.jpg',
];

const Partners = () => {
  return (
    <section id="partenaires" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fce-green mb-4 font-serif">
            Nos Partenaires
          </h2>
          <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* Slider track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <div className="flex overflow-hidden">
          <div className="flex gap-4 sm:gap-6 md:gap-10 animate-marquee shrink-0">
            {logos.map((src, i) => (
              <div
                key={`a-${i}`}
                className="flex-none w-28 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-2 sm:p-3 hover:shadow-md hover:border-fce-orange transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Partenaire ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-10 animate-marquee shrink-0" aria-hidden="true">
            {logos.map((src, i) => (
              <div
                key={`b-${i}`}
                className="flex-none w-28 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-2 sm:p-3 hover:shadow-md hover:border-fce-orange transition-all duration-300"
              >
                <img
                  src={src}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
