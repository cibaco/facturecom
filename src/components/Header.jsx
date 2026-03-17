import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ticket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Accueil', href: '/#accueil' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Ambassadeurs', href: '/#ambassadeurs' },
    { name: 'À propos', href: '/#apropos' },
    { name: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu si on change de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Bloquer le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && isHomePage) {
      e.preventDefault();
      const id = href.replace('/', '');
      const element = document.querySelector(id);
      if (element) {
        const offset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-fce-green/95 backdrop-blur-lg shadow-lg py-2'
            : 'bg-gradient-to-r from-fce-green via-fce-lightGreen to-fce-darkOrange/20 backdrop-blur-sm py-3'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Slogan Bar */}
        <div className="overflow-hidden border-b border-white/10 py-1">
          <div className="slogan-marquee flex whitespace-nowrap" style={{ width: 'max-content' }}>
            {[0, 1].map((i) => (
              <span key={i} className="inline-block px-16 text-fce-orange text-xs font-semibold italic tracking-wide">
                🌿 FestiEnvironnement &nbsp;·&nbsp; c'est pour sauver la planète &nbsp;·&nbsp; qui sauve la planète &nbsp;·&nbsp; protège l'Humanité
              </span>
            ))}
          </div>
        </div>

        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/logo.jpg"
                alt="Facture Communication Événementielle"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) =>
                item.href.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-medium text-white hover:text-fce-orange transition-colors relative group text-sm uppercase tracking-wide"
                  >
                    {item.name}
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-fce-orange transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-medium text-white hover:text-fce-orange transition-colors relative group text-sm uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link to="/billets">
                <motion.button
                  className="bg-fce-orange text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Ticket className="w-4 h-4" />
                  Billetterie
                </motion.button>
              </Link>
            </div>

            {/* Mobile: Billetterie + Hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link to="/billets" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="bg-fce-orange text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5" />
                  Billets
                </span>
              </Link>
              <button
                className="p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu — panel fixe indépendant du header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay sombre */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Panel menu */}
            <motion.div
              className="fixed top-0 left-0 right-0 z-40 lg:hidden bg-fce-green pt-28 pb-6 px-4 shadow-2xl"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="space-y-1">
                {navItems.map((item) =>
                  item.href.startsWith('/#') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex items-center py-3.5 px-4 text-white font-semibold text-lg hover:bg-white/10 rounded-xl transition-colors border-b border-white/10 last:border-0"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center py-3.5 px-4 text-white font-semibold text-lg hover:bg-white/10 rounded-xl transition-colors border-b border-white/10 last:border-0"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="pt-4">
                  <Link
                    to="/billets"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-fce-orange text-white font-bold text-lg rounded-xl shadow-lg"
                  >
                    <Ticket className="w-5 h-5" />
                    Réserver mes billets
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
