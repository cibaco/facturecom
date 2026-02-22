import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const TicketCard = ({ tier, price, features, isSelected, onSelect }) => {
  return (
    <motion.div
      onClick={onSelect}
      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
        isSelected
          ? 'bg-fce-green text-white shadow-2xl scale-105 border-2 border-fce-orange'
          : 'bg-white text-gray-800 hover:shadow-xl border border-gray-200 hover:border-fce-orange/50'
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {isSelected && (
        <div className="absolute top-4 right-4">
          <div className="bg-fce-orange rounded-full p-1">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-fce-green'}`}>
        {tier}
      </h3>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}€</span>
        <span className={`text-sm ml-1 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>/ billet</span>
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-fce-orange' : 'text-fce-green'}`} />
            <span className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full mt-6 py-2 rounded-lg font-semibold transition-colors ${
          isSelected 
            ? 'bg-fce-orange text-white hover:bg-white hover:text-fce-orange'
            : 'bg-gray-100 text-gray-800 hover:bg-fce-green hover:text-white'
        }`}
      >
        {isSelected ? 'Sélectionné' : 'Choisir'}
      </button>
    </motion.div>
  );
};

export default TicketCard;