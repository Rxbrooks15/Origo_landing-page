
import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Camera, 
  Map as MapIcon, 
  Compass, 
  Home, 
  Zap, 
  Globe, 
  Smartphone, 
  Star, 
  ChevronRight,
  Clock,
  TrendingUp,
  Bird,
  Store,
  User,
  Menu,
  X
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import OrigamiSection from './components/OrigamiSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <OrigamiSection />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
