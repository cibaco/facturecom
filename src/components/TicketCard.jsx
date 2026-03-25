import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const TIER_STYLES = {
  'Super VIP CARRE OR': {
    gradient: 'linear-gradient(135deg, #b8860b 0%, #f5d060 50%, #b8860b 100%)',
    border: '#C9A84C',
    shadow: '0 0 18px rgba(201,168,76,0.25)',
    badge: 'bg-yellow-100 text-yellow-800',
  },
  'Super VIP CARRE ARGENT': {
    gradient: 'linear-gradient(135deg, #707070 0%, #d4d8dd 50%, #707070 100%)',
    border: '#9EA3A8',
    shadow: '0 0 18px rgba(158,163,168,0.25)',
    badge: 'bg-gray-100 text-gray-600',
  },
};

const TicketCard = ({ tier, price, features, isSelected, onSelect }) => {
  const tierStyle = TIER_STYLES[tier];

  const titleStyle =
    !isSelected && tierStyle
      ? {
          background: tierStyle.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }
      : {};

  const cardStyle =
    !isSelected && tierStyle
      ? {
          borderColor: tierStyle.border,
          boxShadow: tierStyle.shadow,
        }
      : {};

  return (
    <motion.div
      onClick={onSelect}
      style={cardStyle}
      className={`relative p-4 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
        isSelected
          ? 'bg-fce-green text-white shadow-2xl scale-100 sm:scale-105 border-2 border-fce-orange'
          : `bg-white text-gray-800 hover:shadow-xl border ${tierStyle ? 'border' : 'border-gray-200 hover:border-fce-orange/50'}`
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

      <h3
        className={`text-sm sm:text-base md:text-lg font-bold mb-2 leading-tight break-words ${isSelected ? 'text-white' : !tierStyle ? 'text-fce-green' : ''}`}
        style={titleStyle}
      >
        {tier}
      </h3>

     {/*  <div className="mb-6">
        <span className="text-3xl font-bold">{price}€</span>
        <span className={`text-sm ml-1 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>/ billet</span>
      </div>
 */}
      <ul className="space-y-2 sm:space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 sm:gap-3">
            <Check
              className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-fce-orange' : 'text-fce-green'}`}
              style={
                !isSelected && tierStyle
                  ? { color: tierStyle.border }
                  : {}
              }
            />
            <span className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full mt-4 sm:mt-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors ${
          isSelected
            ? 'bg-fce-orange text-white hover:bg-white hover:text-fce-orange'
            : 'bg-gray-100 text-gray-800 hover:bg-fce-green hover:text-white'
        }`}
        style={
          !isSelected && tierStyle
            ? { borderColor: tierStyle.border }
            : {}
        }
      >
        {isSelected ? 'Sélectionné' : 'Choisir'}
      </button>
    </motion.div>
  );
};

export default TicketCard;
