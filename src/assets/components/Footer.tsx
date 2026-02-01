import React, { useState } from "react";

export default function Footer() {
  const [pos, setPos] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    setPos({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
  };

  const handleLeave = () => setPos({ x: null, y: null });

  const imageUrl =
    "https://res.cloudinary.com/dqieq3dxq/image/upload/usaxb9nck0hqgdwgellz.png";

  /* 🖥️ Desktop/Tablet style */
  const desktopImageStyle = {
    width: "clamp(600px, 120vw, 1800px)",
    maxWidth: "1800px",
    aspectRatio: "4 / 1",
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  /* 📱 Mobile style */
  const mobileImageStyle = {
    width: "90vw",
    maxWidth: "1600px",
    aspectRatio: "4 / 1",
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
      className="
        relative w-full
        h-[150px] xs:h-[170px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]
        bg-black overflow-hidden flex items-center justify-center
      "
    >
      {/* 🖤 BASE OSCURA PARA TODOS LOS DISPOSITIVOS */}
      <div className="absolute pointer-events-none w-full h-full flex items-center justify-center">
        {/* Base oscura para Desktop/Tablet (sm y superior) */}
        <div
          className="hidden sm:block"
          style={{
            ...desktopImageStyle,
            filter: "brightness(0.25)",
          }}
        />
        {/* Base oscura para Móvil (menor a sm) */}
        <div
          className="block sm:hidden"
          style={{
            ...mobileImageStyle,
            filter: "brightness(0.25)",
          }}
        />
      </div>

      {/* ✨ EFECTO DE LUZ PARA TODOS LOS DISPOSITIVOS */}
      <div className="absolute pointer-events-none w-full h-full flex items-center justify-center">
        {/* Efecto para Desktop/Tablet (sm y superior) */}
        <div
          className="hidden sm:block transition-opacity duration-300"
          style={{
            ...desktopImageStyle,
            opacity: pos.x === null ? 0 : 1,
            filter: "brightness(1)",
            WebkitMaskImage:
              pos.x !== null
                ? `radial-gradient(
                    600px circle at ${pos.x}px ${pos.y}px,
                    white 0%,
                    white 30%,
                    transparent 70%
                  )`
                : "none",
            maskImage:
              pos.x !== null
                ? `radial-gradient(
                    600px circle at ${pos.x}px ${pos.y}px,
                    white 0%,
                    white 30%,
                    transparent 70%
                  )`
                : "none",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
            mixBlendMode: "lighten",
          }}
        />

        {/* 📱 Efecto para Móvil (menor a sm) */}
        <div
          className="block sm:hidden transition-opacity duration-300"
          style={{
            ...mobileImageStyle,
            opacity: pos.x === null ? 0.7 : 1,
            backgroundImage: pos.x
              ? `
                radial-gradient(
                  300px circle at ${pos.x}px ${pos.y}px,
                  rgba(255,255,255,0.35),
                  transparent 70%
                ),
                url(${imageUrl})
              `
              : `url(${imageUrl})`,
            backgroundBlendMode: "screen",
            filter: "brightness(0.9)",
          }}
        />
      </div>
    </div>
  );
}