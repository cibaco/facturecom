import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const OrderSummary = ({ tier, price, quantity, total }) => {
  return (
    <motion.div
      //className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-24"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="bg-fce-green/10 p-3 rounded-full">
          <ShoppingCart className="w-6 h-6 text-fce-green" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">Résumé de la commande</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Type de billet</span>
          <span className="font-semibold text-fce-green">{tier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Prix unitaire</span>
          <span className="font-semibold">{price}€</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Quantité</span>
          <span className="font-semibold">x {quantity}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-lg font-bold text-gray-800">Total</span>
          <span className="text-2xl font-bold text-fce-orange">{total}€</span>
        </div>
      </div>

      <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-lg mb-4">
        🔒 Paiement sécurisé par SSL. Vos données sont protégées.
      </div> */}
    </motion.div>
  );
};

export default OrderSummary;