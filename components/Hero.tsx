import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Origo 2.0: The Quest Continues
        </div>

        {/* Headline (slightly smaller) */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] max-w-5xl mx-auto">
          <span className="block text-white">Staying inside is</span>
          <span className="block text-white">
            <span className="text-red-500">draining</span> your energy.
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-fuchsia-400 block py-1">
            Go outside and grow your assets.
          </span>
        </h1>

        {/* Subtext (slightly smaller) */}
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore the outdoors to collect digital assets.
        </p>

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#" className="hover:scale-105 transition-transform active:scale-95">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-[52px]"
            />
          </a>
          <a href="#" className="hover:scale-105 transition-transform active:scale-95">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-[52px]"
            />
          </a>
        </div>

        {/* Single Center Image */}
        <div className="relative max-w-5xl mx-auto flex justify-center">
          <div className="relative z-20 scale-110">
            <img
              src="https://images.unsplash.com/photo-1556656793-062ff98782ee?auto=format&fit=crop&q=80&w=400"
              alt="Origo Mobile"
              className="rounded-[3.5rem] border-[10px] border-zinc-900 shadow-2xl"
            />

            {/* Logo Overlay */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 z-30 transform rotate-12 transition-transform hover:rotate-0 duration-300">
              <Logo className="w-24 h-24 border-4 border-white shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
