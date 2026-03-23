import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t-4 border-fce-orange">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif mb-2 text-white">Facture</h2>
            <p className="text-xs font-bold text-fce-orange tracking-wide sm:tracking-widest mb-4 md:mb-6 uppercase">Communication Événementielle</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour des événements inoubliables. 
              Expertise, passion et professionnalisme depuis plus de 15 ans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-fce-orange transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-fce-orange transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-fce-orange transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 font-serif">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-fce-orange transition-colors">Accueil</Link></li>
              <li><a href="#services" className="hover:text-fce-orange transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-fce-orange transition-colors">Portfolio</a></li>
              <li><a href="#apropos" className="hover:text-fce-orange transition-colors">À propos</a></li>
              <li><Link to="/galerie" className="hover:text-fce-orange transition-colors">Galerie</Link></li>
              <li><Link to="/billets" className="hover:text-fce-orange transition-colors">Billetterie</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 font-serif">Nos Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Diffusion de spectacles</li>
              <li>Marketing & Promotion</li>
              <li>Communication événementielle</li>
              <li>Gestion d'artistes</li>
              <li>Organisation de festivals</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 font-serif">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fce-orange mt-0.5 flex-shrink-0" />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-fce-orange flex-shrink-0" />
                <a href="tel:+33605801648" className="hover:text-white">+33 6 05 80 16 48</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-fce-orange flex-shrink-0" />
                <a href="mailto:fce@facturecommunicationevent.fr" className="hover:text-white break-all">fce@facturecommunicationevent.fr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs text-gray-500">
          <p>© 2026 Facture Communication Événementielle. Tous droits réservés.</p>
          <p>Site réalisé par <a href="https://iyoconcept.com/" target="_blank" rel="noopener noreferrer" className="text-fce-orange hover:text-white transition-colors">IYOConcept</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;