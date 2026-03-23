import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Megaphone, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Mic2,
      title: "Diffusion de spectacles",
      description: "Production et organisation de concerts, festivals et spectacles vivants avec une qualité technique irréprochable.",
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Megaphone,
      title: "Marketing & Promotion",
      description: "Stratégies publicitaires ciblées pour maximiser la visibilité de vos événements et attirer votre public idéal.",
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Share2,
      title: "Communication événementielle",
      description: "Gestion complète de votre image de marque, relations presse et communication digitale avant, pendant et après l'événement.",
      color: 'bg-green-50 text-green-600'
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-fce-orange font-bold uppercase tracking-wider text-sm mb-2 block">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fce-green mb-4 font-serif">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-fce-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 font-serif group-hover:text-fce-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-fce-green/5 skew-x-12 transform origin-top-right"></div>
    </section>
  );
};

export default Services;