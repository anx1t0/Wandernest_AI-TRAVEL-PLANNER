import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Plan from './pages/Plan';
import { Toaster } from 'react-hot-toast';
import './App.css';

import Community from './pages/Community';
import CommunityPlanDetail from './pages/CommunityPlanDetail';
import Pricing from './pages/Pricing';

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 0', marginTop: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>
    <p>© 2026 WanderNest. All rights reserved.</p>
  </footer>
);

function App() {
  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Toaster position="top-center" />
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/:id" element={<CommunityPlanDetail />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
