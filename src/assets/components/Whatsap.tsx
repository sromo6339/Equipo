import React, { useState } from 'react';

interface WhatsapProps {
  link: string;
  label?: string;
}

const Whatsap: React.FC<WhatsapProps> = ({ link, label = "Comprar ahora" }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleMouseEnter = () => {
    setIsHovering(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setLoadingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 30);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setLoadingProgress(0);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block px-6 py-3 rounded-md overflow-hidden transition-all duration-200 font-medium ${
        isHovering ? 'text-white' : 'text-gray-700 bg-white border border-gray-300'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">{label}</span>
      {isHovering && (
        <div
          className="absolute inset-0 bg-gray-700 z-0 transition-all"
          style={{ width: `${loadingProgress}%` }}
        />
      )}
    </a>
  );
};

export default Whatsap;