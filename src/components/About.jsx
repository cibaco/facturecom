import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="apropos" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16">

          {/* Image Side */}
          <motion.div
            className="w-full md:w-5/12 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white z-10">
              <img
                src="/images/festi-pied.jpg"
                alt="M. SANOH Alhassane - Founder"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 -left-10 w-24 h-24 bg-fce-orange rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fce-green rounded-full opacity-20 blur-xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full md:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
              Notre Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-fce-green mb-6 font-serif leading-tight">
              Festi'Environnement
              <br />
              <span className="text-fce-orange">Quand la musique s'engage pour la planète</span>
            </h2>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
              Le Dôme de Paris accueille Festi'Environnement, une soirée musicale caritative dédiée à la protection de notre planète.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
              Sur scène, des artistes engagés unissent leurs voix pour défendre une cause qui nous concerne tous : la préservation de l'environnement et de la biodiversité.
            </p>
            <p className="text-gray-700 font-semibold mb-3">
              L'objectif, c'est pour :
            </p>
            <ul className="space-y-2 mb-6 text-gray-600 text-sm lg:text-base">
              <li>🌳 La reforestation et la protection des écosystèmes</li>
              <li>🌊 La préservation des océans et de la vie marine</li>
              <li>♻️ L'économie circulaire et le zéro déchet</li>
              <li>🐝 La sauvegarde de la biodiversité</li>
            </ul>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-2">
              Plus qu'un concert, c'est un mouvement. Rejoignez-nous pour une soirée où chaque note compte et où votre présence fait la différence.
            </p>
            <p className="text-fce-green font-bold text-base lg:text-lg mb-6">
              Ensemble, faisons résonner l'urgence climatique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/pdf/dossier-de-presse-3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-fce-green text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-green-500/50 hover:bg-fce-orange transition-all duration-300 text-center"
              >
                En savoir plus
              </a>
              <a
                href="https://www.ledomedeparis.com/fr/spectacle/345/festi-environnement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-fce-orange text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-orange-500/50 hover:bg-fce-green transition-all duration-300 text-center"
              >
                Voir le spectacle
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
