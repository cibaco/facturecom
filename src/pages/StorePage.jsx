import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsList from '@/components/ProductsList';
import ShoppingCart from '@/components/ShoppingCart';

const StorePage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Boutique Officielle | Facture Communication Événementielle</title>
        <meta 
          name="description" 
          content="Découvrez les produits exclusifs et le merchandising officiel de Facture Communication Événementielle." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header setIsCartOpen={setIsCartOpen} />
        
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        <main className="flex-grow pt-32 pb-20">
          {/* Hero / Header Section */}
          <div className="bg-fce-green text-white py-16 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-fce-green via-fce-green/90 to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">La Boutique Officielle</h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                  Retrouvez nos produits exclusifs, billets d'événements et merchandising. 
                  Soutenez vos artistes préférés !
                </p>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-4">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-2 bg-fce-orange rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800">Nos Produits</h2>
             </div>
             
             <ProductsList />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default StorePage;