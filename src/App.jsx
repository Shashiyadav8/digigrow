
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CollaborationPage from './pages/CollaborationPage';
import AboutFeaturePage from './pages/AboutFeaturePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Loader from './components/Loader';
import ScrollToTopButton from './components/ScrollToTopButton';

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Start loading
    setLoading(true);

    // Scroll to top instantly when page changes
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Stop loading after delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 0.8s for faster transitions

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on path change only

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:featureId" element={<AboutFeaturePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
