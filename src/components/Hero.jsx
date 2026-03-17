import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image — responsive avec WebP + fallback JPEG */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile XS < 480px — portrait 480px WebP */}
          <source
            type="image/webp"
            media="(max-width: 479px)"
            srcSet="/images/bannieres-mobile/hero-mobile-xs.webp"
          />
          <source
            type="image/jpeg"
            media="(max-width: 479px)"
            srcSet="/images/bannieres-mobile/hero-mobile-xs.jpg"
          />

          {/* Mobile SM 480–767px — portrait 768px WebP */}
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcSet="/images/bannieres-mobile/hero-mobile-sm.webp"
          />
          <source
            type="image/jpeg"
            media="(max-width: 767px)"
            srcSet="/images/bannieres-mobile/hero-mobile-sm.jpg"
          />

          {/* Tablette 768–1279px — paysage 1280px WebP */}
          <source
            type="image/webp"
            media="(max-width: 1279px)"
            srcSet="/images/bannieres-mobile/hero-desktop-md.webp"
          />
          <source
            type="image/jpeg"
            media="(max-width: 1279px)"
            srcSet="/images/bannieres-mobile/hero-desktop-md.jpg"
          />

          {/* Grand desktop ≥ 1280px — paysage 1920px WebP */}
          <source
            type="image/webp"
            srcSet="/images/bannieres-mobile/hero-desktop-xl.webp"
          />
          <source
            type="image/jpeg"
            srcSet="/images/bannieres-mobile/hero-desktop-xl.jpg"
          />

          {/* Fallback ultime */}
          <img
            src="/images/baniere.jpg"
            alt="Festi'Environnement — Concert caritatif"
            className="w-full h-full object-cover object-top md:object-center"
            fetchpriority="high"
            decoding="async"
          />
        </picture>

        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content — ancré en bas sur mobile, centré sur desktop */}
      <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center justify-end pb-28 min-h-screen md:justify-center md:pb-0 text-center">

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/billets">
            <motion.button
              className="bg-fce-orange text-white px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-orange-500/50 hover:bg-white hover:text-fce-orange transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Ticket className="w-5 h-5" />
              Réserver vos Billets
            </motion.button>
          </Link>

          <a href="/#contact">
            <motion.button
              className="bg-fce-green/80 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-fce-green transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous Contacter
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Dégradé bas */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
