
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Origo 2.0: Now with Origami Marketplace
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          The Ultimate App for <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-fuchsia-400">
            Tracking the Sun
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          For Photography, Outdoor Adventures, Real Estate, Landscaping, and Solar Energy. Collect light-powered digital origami cranes as you explore.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#" className="w-full sm:w-auto hover:scale-105 transition-transform active:scale-95">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-[52px]" />
          </a>
          <a href="#" className="w-full sm:w-auto hover:scale-105 transition-transform active:scale-95">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[52px]" />
          </a>
        </div>

        <div className="relative max-w-5xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
             <div className="hidden md:block transform rotate-[-5deg] opacity-60">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" alt="App Interface" className="rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl" />
             </div>
             <div className="relative z-10 scale-110">
                <img src="https://images.unsplash.com/photo-1556656793-062ff98782ee?auto=format&fit=crop&q=80&w=400" alt="Origo Mobile" className="rounded-[3.5rem] border-[10px] border-zinc-900 shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#a3b1a2] rounded-[2rem] flex items-center justify-center shadow-2xl rotate-12 border-4 border-white">
                   <Logo className="w-18 h-18 transform translate-x-1" />
                </div>
             </div>
             <div className="hidden md:block transform rotate-[5deg] opacity-60">
                <img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=400" alt="Sun Tracking" className="rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
