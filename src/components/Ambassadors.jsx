import React from 'react';
import { motion } from 'framer-motion';

const Ambassadors = () => {
  const ambassadors = [
    {
      name: "Sékouba Bambino",
      role: "Artiste Musicien",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWy0HIsU1W8jmnTbjrxHW7RrPOJeVZMyM4Lg&s"
    },
    {
      name: "Naby Keïta",
      role: "Footballeur International",
      image: "https://static.wikia.nocookie.net/liverpoolfc/images/c/ce/NKeita2021.jpeg/revision/latest?cb=20210811233428"
    },
    {
      name: "Soul Bang's",
      role: "Artiste R&B",
      image: "https://musique.rfi.fr/sites/default/files/thumbnails/image/soul-bangs.jpg"
    }
  ];

  return (
    <section id="ambassadeurs" className="py-20 bg-fce-green text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-fce-orange opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
            Nos Ambassadeurs
          </h2>
          <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ambassadors.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-fce-orange rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 blur-md"></div>
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full border-4 border-fce-orange relative z-10 shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-serif group-hover:text-fce-orange transition-colors">
                {person.name}
              </h3>
              <p className="text-gray-300 font-medium tracking-wide uppercase text-sm">
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;