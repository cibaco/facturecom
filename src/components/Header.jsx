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
    { name: 'Ambassadeurs', href: '/#ambassadeurs' },
    { name: 'À propos', href: '/#apropos' },
    { name: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);
    
    // If it's an anchor link and we are on homepage
    if (href.startsWith('/#') && isHomePage) {
      e.preventDefault();
      const id = href.replace('/', '');
      const element = document.querySelector(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // If we are not on homepage, let the Link component handle the navigation to /#id
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-fce-green/95 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-gradient-to-r from-fce-green via-fce-lightGreen to-fce-darkOrange/20 backdrop-blur-sm py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src="/images/logo.jpg"
              alt="Facture Communication Événementielle"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-medium text-white hover:text-fce-orange transition-colors relative group text-sm uppercase tracking-wide"
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-fce-orange transition-all duration-300 group-hover:w-full"></span>
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
            ))}
            
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

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 px-2 space-y-2">
                {navItems.map((item, index) => (
                   item.href.startsWith('/#') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-3 px-4 text-fce-green font-bold hover:bg-fce-orange/10 hover:text-fce-orange rounded-lg transition-colors"
                    >
                      {item.name}
                    </a>
                   ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-fce-green font-bold hover:bg-fce-orange/10 hover:text-fce-orange rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                   )
                ))}
                <Link 
                  to="/billets" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 bg-fce-orange text-white font-bold rounded-lg text-center mt-4 mx-4 shadow-md"
                >
                  Billetterie
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;