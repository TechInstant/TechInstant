import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ContactModal } from './components/ContactModal';
import { VideoModal } from './components/VideoModal';
import { AuthModal } from './components/AuthModal';

import { Homepage } from './components/Pages/Homepage';
import { ProductsPage } from './components/Pages/ProductsPage';
import { SolutionsPage } from './components/Pages/SolutionsPage';
import { AIServicesPage } from './components/Pages/AIServicesPage';
import { AboutPage } from './components/Pages/AboutPage';
import { ContactPage } from './components/Pages/ContactPage';
import { ToolsPage } from './components/Pages/ToolsPage';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const AppContent: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [contactProjectType, setContactProjectType] = useState<string>('SaaS Product');

  const handleOpenContact = (projectType?: string) => {
    if (projectType) setContactProjectType(projectType);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070B12] text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-slate-950 transition-colors duration-200">
      <ScrollToTop />
      
      {/* Sticky Global Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={handleOpenContact}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <Homepage 
                onOpenVideo={() => setIsVideoOpen(true)} 
                onOpenContact={handleOpenContact} 
              />
            } 
          />
          <Route path="/products" element={<ProductsPage onOpenContact={handleOpenContact} />} />
          <Route path="/solutions" element={<SolutionsPage onOpenContact={handleOpenContact} />} />
          <Route path="/services" element={<SolutionsPage onOpenContact={handleOpenContact} />} />
          <Route path="/ai-services" element={<AIServicesPage onOpenContact={handleOpenContact} />} />
          <Route path="/insights" element={<AIServicesPage onOpenContact={handleOpenContact} />} />
          <Route path="/about" element={<AboutPage onOpenContact={() => handleOpenContact('Consulting')} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
      </main>

      {/* Global Multi-Column Footer */}
      <Footer />

      {/* Global Modals */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        defaultProjectType={contactProjectType}
      />

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;