import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Detectar si el elemento bajo el cursor es clickeable
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick !== null
      );
    };

    window.addEventListener('mousemove', updateCursor);
    
    // Ocultar cursor original
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Cursor principal - círculo azul claro */}
      <div 
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`
          w-4 h-4 rounded-full border-2 
          transition-all duration-200
          ${isPointer 
            ? 'bg-white border-white scale-150' 
            : 'bg-blue-300/80 border-blue-200 backdrop-blur-sm'
          }
          shadow-lg
        `} />
      </div>

      {/* Efecto de aura blanca */}
      <div 
        className="fixed pointer-events-none z-40 transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`
          rounded-full transition-all duration-300
          ${isPointer 
            ? 'w-8 h-8 bg-white/30' 
            : 'w-6 h-6 bg-white/20'
          }
          blur-sm
        `} />
      </div>
    </>
  );
};

export default CursorEffect;