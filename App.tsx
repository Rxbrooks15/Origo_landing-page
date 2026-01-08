
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import OrigamiSection from './components/OrigamiSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-500/30 overflow-x-hidden">
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
