import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10">
              <img 
                src="/public/images/festi-pied.jpg" 
                alt="M. SANOH Alhassane - Founder" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-fce-green to-transparent p-8 pt-20">
                <h3 className="text-white text-2xl font-bold font-serif">M. SANOH Alhassane</h3>
                <p className="text-fce-orange font-medium">Directeur Général & Fondateur</p>
              </div> */}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 -left-10 w-24 h-24 bg-fce-orange rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fce-green rounded-full opacity-20 blur-xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
              Notre Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-fce-green mb-6 font-serif">
              Une passion pour l'événementiel depuis plus de 25 ans
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Facture Communication Événementielle est née de la vision de M. SANOH Alhassane. 
              Avec une expérience riche et diversifiée dans le monde du showbiz, notre agence 
              se positionne comme le partenaire idéal pour la réussite de vos projets culturels et corporatifs.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-fce-orange/10 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="w-6 h-6 text-fce-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">25+ ans d'expertise</h4>
                  <p className="text-gray-600">Une connaissance approfondie de l'industrie du spectacle et du divertissement.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-fce-orange/10 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="w-6 h-6 text-fce-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">8+ ans en agence</h4>
                  <p className="text-gray-600">Une structure professionnelle dédiée à la communication et l'organisation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-fce-orange/10 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="w-6 h-6 text-fce-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">10+ Événements Majeurs</h4>
                  <p className="text-gray-600">Des succès retentissants qui témoignent de notre savoir-faire.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Button Side */}
          <motion.div
            className="lg:w-1/5 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://www.ledomedeparis.com/fr/spectacle/345/festi-environnement"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fce-orange text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-orange-500/50 hover:bg-fce-green transition-all duration-300 text-center"
            >
              Voir le spectacle
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;