import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PaymentMethods = ({ total }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handlePayment = (method) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Paiement simulé réussi! 🎉",
        description: `Votre commande de ${total}€ a été traitée avec succès via ${method}.`,
      });
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Moyen de paiement</h3>
      
      {/* Stripe Button */}
      <motion.button
        onClick={() => handlePayment('Carte Bancaire (Stripe)')}
        disabled={loading}
        className="w-full bg-[#635bff] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <CreditCard className="w-5 h-5" />
        {loading ? 'Traitement...' : 'Payer par Carte (Stripe)'}
      </motion.button>

      {/* PayPal Button */}
      <motion.button
        onClick={() => handlePayment('PayPal')}
        disabled={loading}
        className="w-full bg-[#ffc439] text-blue-900 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <Wallet className="w-5 h-5" />
        {loading ? 'Traitement...' : 'Payer avec PayPal'}
      </motion.button>
      
      <p className="text-center text-xs text-gray-500 mt-4">
        En procédant au paiement, vous acceptez nos conditions générales de vente.
      </p>
    </div>
  );
};

export default PaymentMethods;