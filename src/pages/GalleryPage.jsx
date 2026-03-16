import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Galerie | Facture Communication Événementielle</title>
        <meta
          name="description"
          content="Découvrez les photos de nos événements : concerts, galas, conférences et soirées corporate organisés par Facture Communication Événementielle."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          <Gallery />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
