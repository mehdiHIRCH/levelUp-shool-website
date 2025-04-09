// import React, { useEffect } from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import { useTranslation } from './hooks/useTranslation';
import { Header, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Legal } from './pages/Legal';
import { Admin } from './pages/Admin';

function App() {
  const { language, direction } = useLanguage();
  const { t } = useTranslation(language as any);
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section after navigation
    if (location.state?.scrollTo) {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to prevent scrolling on subsequent renders
          window.history.replaceState({}, document.title);
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className={`min-h-screen bg-white ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
      <Header content={t('nav')} />
      
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/register" element={<Register t={t} />} />
        <Route path="/legal/:page" element={<Legal t={t} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;