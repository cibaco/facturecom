import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Ambassadeur et partenaire régulier de Facture communication événementielle, je peux attester de leur excellence. Leur niveau de prestation transcende les attentes. Un partenaire qui élève chaque projet !",
    name: "Sékouba Bambino",
    role: "Artiste chanteur",
    image: "/images/galerie/IMG-20260316-WA0014.jpg",
  },
  {
    quote: "Une équipe passionnée et experte qui a su concrétiser notre vision avec créativité. Leur professionnalisme a dépassé nos attentes, tout en respectant les enjeux environnementaux. Un partenaire clé pour des événements à impact positif.",
    name: "Malick Kebe",
    role: "Directeur du fonds de développement des arts et de la culture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Malick_K%C3%A9b%C3%A9.jpg/250px-Malick_K%C3%A9b%C3%A9.jpg",
  },
];

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-fce-orange mb-4 opacity-80" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-12 md:py-20 bg-fce-green text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fce-orange opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
            Ils témoignent
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Témoignages
          </h2>
          <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300"
            >
              <QuoteIcon />
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-1">
                {t.quote}
              </p>
              <div className="flex flex-col items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-fce-orange shadow-lg"
                />
                <div>
                  <p className="font-bold text-fce-orange font-serif text-sm sm:text-base">{t.name}</p>
                  <p className="text-white/60 text-xs sm:text-sm leading-snug max-w-[200px]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
