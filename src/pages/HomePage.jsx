import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Ambassadors from '@/components/Ambassadors';
import Contact from '@/components/Contact';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Facture Communication Événementielle | Agence Artistique & Production</title>
        <meta 
          name="description" 
          content="Agence de communication événementielle et diffusion de spectacles. Fondée par M. SANOH Alhassane. Concerts, festivals, marketing et promotion d'artistes." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Hero />
          <About />

          {/* Video Section */}
          <section className="py-20 bg-fce-green overflow-hidden">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
                  À l'affiche
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
                  Sékouba Bambino en concert
                </h2>
                <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full"></div>
              </motion.div>

              <motion.div
                className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <video
                  className="w-full aspect-video"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/bambino-presente.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </section>

          <Artists />
          <Services />
          <Portfolio />
          <Ambassadors />
          <Contact />
          <Partners />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;