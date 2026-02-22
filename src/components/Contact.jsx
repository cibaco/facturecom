import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-fce-green text-white p-10 md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6">Contactez-nous</h3>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                Notre équipe est à votre disposition pour donner vie à vos projets événementiels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-fce-orange mt-1" />
                  <div>
                    <span className="block text-xs text-gray-400 uppercase">Téléphone</span>
                    <a href="tel:+33605801648" className="font-bold hover:text-fce-orange transition-colors">
                      +33 6 05 80 16 48
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-fce-orange mt-1" />
                  <div>
                    <span className="block text-xs text-gray-400 uppercase">Email</span>
                    <a href="mailto:fce@facturecommunicationevent.fr" className="font-bold hover:text-fce-orange transition-colors break-all">
                      fce@facturecommunicationevent.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-fce-orange mt-1" />
                  <div>
                    <span className="block text-xs text-gray-400 uppercase">Adresse</span>
                    <span className="font-bold">Paris, France</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                 <span className="font-serif font-bold text-2xl text-fce-orange">FCE</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 font-serif mb-6">Envoyez un message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fce-orange focus:border-transparent outline-none bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fce-orange focus:border-transparent outline-none bg-gray-50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fce-orange focus:border-transparent outline-none bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fce-orange focus:border-transparent outline-none bg-gray-50"></textarea>
              </div>
              <button type="submit" className="w-full bg-fce-green text-white py-3 rounded-lg font-bold hover:bg-fce-orange transition-colors shadow-lg">
                Envoyer
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;