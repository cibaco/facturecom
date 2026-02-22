import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Ambassadors from '@/components/Ambassadors';
import Contact from '@/components/Contact';
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
          <Services />
          <Portfolio />
          <Ambassadors />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;