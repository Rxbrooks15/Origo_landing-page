
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Globe Gradient */}
      <radialGradient id="globeGrad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" style={{ stopColor: '#5ac8fa', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0047bb', stopOpacity: 1 }} />
      </radialGradient>
      {/* Continental Lighter Blue */}
      <filter id="glow">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Main Globe */}
    <circle cx="50" cy="50" r="38" fill="url(#globeGrad)" />
    
    {/* Continental Shapes (Simplified but stylized) */}
    <path d="M35 25 Q40 35 55 30 T70 45 Q60 60 45 65 T25 50 Z" fill="#7ed6ff" opacity="0.5" />
    <path d="M50 20 Q60 25 65 15 T80 25 Q75 40 60 45 Z" fill="#7ed6ff" opacity="0.4" />
    
    {/* Orbital Swooshes wrapping the globe */}
    <path d="M15 55 C15 75 40 90 85 55" fill="none" stroke="#2b88ff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
    <path d="M10 50 C10 70 35 85 80 50" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    
    {/* Magenta Origami Paper Plane / Bird */}
    {/* Fly-in path on the right side */}
    <g transform="translate(62, 28) rotate(-15)">
      {/* Main Body */}
      <path d="M0 0 L32 12 L12 28 L10 16 Z" fill="#d946ef" stroke="#eab308" strokeWidth="0.5" />
      {/* Inner Fold Shadow */}
      <path d="M12 28 L14 16 L32 12 Z" fill="#a21caf" />
      {/* Bottom Wing / Flap */}
      <path d="M10 16 L0 0 L14 16 Z" fill="#c026d3" />
    </g>

    {/* Small Light Speculars */}
    <circle cx="35" cy="35" r="3" fill="white" opacity="0.2" />
  </svg>
);

export default Logo;
