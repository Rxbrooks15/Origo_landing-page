
import React from "react";

interface LogoProps {
  className?: string;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  // Placeholder logo (kept for future use if needed)
  const logoUrl =
    "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/sunquest-logo-placeholder.png";

  return (
    <div
      className={`${className} relative overflow-hidden rounded-[22%] bg-[#a3b1a2] flex items-center justify-center border border-white/20 shadow-inner`}
    >
      {/* Subtle background texture */}
      <img
        src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Foreground icon */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-1">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Globe */}
          <circle cx="50" cy="50" r="35" fill="#3b82f6" opacity="0.85" />

          {/* Paper plane */}
          <path
            d="M20 50 L80 20 L50 80 L45 55 Z"
            fill="#d946ef"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
