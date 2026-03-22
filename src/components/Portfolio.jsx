import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const events = [
    {
      id: 1,
      title: "Festi environnement France",
      category: "Festival & Écologie",
      image: "/images/40X60.jpg",
      description: "Un événement majeur célébrant l'environnement à travers la musique et la culture."
    },
    {
      id: 2,
      title: "Textile guinéen à l'honneur",
      category: "Mode & Culture",
      image: "/images/galerie/IMG-20260316-WA0015.jpg",
      description: "Mise en lumière du savoir-faire artisanal guinéen lors d'un défilé prestigieux."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
            Nos Réalisations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-fce-green mb-4 font-serif">
            Événements Marquants
          </h2>
          <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-fce-green/95 via-fce-green/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-fce-orange font-bold text-sm tracking-wider mb-2 block">
                    {event.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2 font-serif">{event.title}</h3>
                  <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {event.description}
                  </p>
                  {/* <button className="text-white border border-white/30 hover:bg-white hover:text-fce-green px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2">
                    Voir les détails <ExternalLink className="w-3 h-3" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;