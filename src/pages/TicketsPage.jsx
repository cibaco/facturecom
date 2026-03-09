import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TicketCard from '@/components/TicketCard';
import OrderSummary from '@/components/OrderSummary';
import PaymentMethods from '@/components/PaymentMethods';

const TicketsPage = () => {
  const [selectedTier, setSelectedTier] = useState('Normal');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: ''
  });

  const tiers = [
    { name: 'Normal', price: 100, features: ['Accès standard', 'Placement debout', 'Accès bar payant'] },
    { name: 'Réduit', price: 70, features: ['Étudiants / -18 ans', 'Justificatif requis', 'Placement debout'] },
    { name: 'VIP', price: 200, features: ['Accès prioritaire', 'Espace VIP assis', 'Cocktail dinatoire inclus', 'Rencontre artistes'] }
  ];

  const currentTier = tiers.find(t => t.name === selectedTier);
  const total = currentTier.price * quantity;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Billetterie | Facture Communication Événementielle</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            
            {/* Banner */}
            <div className="bg-fce-orange text-white text-center py-4 px-6 rounded-2xl mb-8 shadow-lg">
              <p className="text-lg font-bold tracking-wide">
                🎟️ La billetterie sera bientôt disponible
              </p>
            </div>

            {/* Header Section */}
            <div className="mb-12">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-fce-orange mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-fce-green font-serif mb-2">
                CONCERT CARITATIF FESTI'ENVIRONNEMENT
              </h1>
              <p className="text-fce-orange font-semibold text-lg italic">Quand la musique s'engage pour la planète</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column: Selection & Form */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Step 1: Choose Ticket */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-fce-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                    <h2 className="text-2xl font-bold text-gray-800">Choisissez vos billets</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {tiers.map((tier) => (
                      <TicketCard
                        key={tier.name}
                        tier={tier.name}
                        price={tier.price}
                        features={tier.features}
                        isSelected={selectedTier === tier.name}
                        onSelect={() => setSelectedTier(tier.name)}
                      />
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between max-w-md">
                    <span className="font-semibold text-gray-700">Nombre de billets</span>
                    <select 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-fce-orange font-bold text-gray-800"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                </section>

                {/* Step 2: Your Info */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-fce-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                    <h2 className="text-2xl font-bold text-gray-800">Vos informations</h2>
                  </div>
                  
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                      <input 
                        type="text" 
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fce-orange/20 focus:border-fce-orange outline-none transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fce-orange/20 focus:border-fce-orange outline-none transition-all"
                        placeholder="jean@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                      <input 
                        type="tel" 
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fce-orange/20 focus:border-fce-orange outline-none transition-all"
                        placeholder="+33 6..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse</label>
                      <input 
                        type="text" 
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fce-orange/20 focus:border-fce-orange outline-none transition-all"
                        placeholder="123 Rue de..."
                      />
                    </div>
                  </div>
                </section>

                {/* Step 3: Payment */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-fce-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                    <h2 className="text-2xl font-bold text-gray-800">Paiement sécurisé</h2>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <PaymentMethods total={total} />
                  </div>
                </section>

              </div>

              {/* Right Column: Order Summary (Sticky) */}
              <div className="lg:col-span-1">
                <OrderSummary 
                  tier={selectedTier} 
                  price={currentTier.price} 
                  quantity={quantity} 
                  total={total} 
                />
              </div>

            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TicketsPage;