import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './Languages/i18n'; // i18n yapılandırması
import AppRoutes from './Routes/Routes';
import './App.css';

// Rota değişimlerinde en üste kaydırma için bir yardımcı komponent
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Yumuşak kaydırma efekti
    });
  }, [pathname]); // Her rota değiştiğinde çalışır

  return null; // Görsel bir çıktı yok
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop /> {/* Rota değişimlerinde otomatik kaydırma */}
        <AppRoutes />
      </Router>
    </I18nextProvider>
  );
}

export default App;