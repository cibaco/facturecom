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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/images/baniere.jpg"
          alt="Concert crowd with vibrant lights"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 border border-fce-orange/50 rounded-full bg-black/30 backdrop-blur-sm text-fce-orange font-medium mb-6"
        >
          L'EXCELLENCE ÉVÉNEMENTIELLE
        </motion.div> */}

     {/*    <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transformez vos idées en
          <br />
          <span className="bg-gradient-to-r from-fce-orange to-yellow-400 bg-clip-text text-transparent">
            Expériences Mémorables
          </span>
        </motion.h1> */}

      {/*   <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Facture Communication Événementielle : Une expertise unique pour donner vie à vos projets les plus ambitieux.
        </motion.p> */}

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-0.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/billets">
            <motion.button
              className="bg-fce-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 hover:bg-white hover:text-fce-orange transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Ticket className="w-5 h-5" />
              Réserver vos Billets
            </motion.button>
          </Link>
          
          <a href="#contact" style={{ position: 'relative', left: '400px' }}>
            <motion.button
              className="bg-fce-green border-2 border-fce-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-fce-green transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous Contacter
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;