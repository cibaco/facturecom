import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import TicketsPage from './pages/TicketsPage';
import GalleryPage from './pages/GalleryPage';
import VideosPage from './pages/VideosPage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/billets" element={<TicketsPage />} />
        <Route path="/galerie" element={<GalleryPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;