import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-[22%] bg-[#a3b1a2] flex items-center justify-center border border-white/20 shadow-inner`}
    >
      <img
        src="/new_log.png"
        alt="Origo Logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;
