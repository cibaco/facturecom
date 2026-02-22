import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>Commande Confirmée - Facture Communication Événementielle</title>
        <meta name="description" content="Votre commande a été confirmée avec succès." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Simplified Header for Success Page, passing dummy setIsCartOpen */}
        <Header setIsCartOpen={() => {}} />

        <main className="flex-grow container mx-auto px-4 pt-32 pb-20 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center border-t-4 border-fce-green"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-fce-green" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">Merci pour votre commande !</h1>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Votre commande a été traitée avec succès. Vous recevrez bientôt un email de confirmation avec tous les détails.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-2">Prochaines étapes :</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Vérifiez votre boîte de réception pour la confirmation.</li>
                <li>Nous préparons votre commande avec soin.</li>
                <li>Vous serez notifié dès l'expédition.</li>
              </ul>
            </div>
            
            <Link to="/boutique">
              <Button className="w-full bg-gradient-to-r from-fce-green to-fce-lightGreen hover:from-fce-lightGreen hover:to-fce-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                Retour à la Boutique <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SuccessPage;