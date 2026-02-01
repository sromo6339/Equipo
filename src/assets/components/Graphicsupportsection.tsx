import React, { useEffect, useState } from "react";

const images = [
  { id: "vyyl0m7wykzrsj4zabqp", likes: "55K", comments: "155" }, // Imagen grande arriba
  { id: "yt4bwtzzdvr0drteosoj", likes: "229K", comments: "708" }, // Imagen abajo izquierda
  { id: "rjna8fai2epcyhauc6eu", likes: "64K", comments: "237" }, // Imagen abajo derecha
];

const GraphicSupportSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setExpanded(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`w-full bg-black text-white transition-all duration-700 overflow-hidden ${
        expanded ? "h-auto py-8 md:py-20" : "h-24 md:h-32 py-4"
      }`}
    >
      {/* Título responsive */}
      <h1
        className={`font-bold transition-all duration-700 ml-4 md:ml-16 lg:ml-64 ${
          expanded ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl"
        }`}
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        EQUIPU LIVE
      </h1>

      {/* Contenedor principal de imágenes */}
      <div
        className={`max-w-full md:max-w-5xl mx-auto mt-8 md:mt-12 px-4 md:px-0 transition-opacity duration-700 ${
          expanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Imagen grande arriba - ocupa todo el ancho */}
        <div className="relative rounded-lg md:rounded-xl overflow-hidden mb-6">
          <img
            src={`https://res.cloudinary.com/dqieq3dxq/image/upload/${images[0].id}.jpg`}
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[700px] object-cover"
            alt="EQUIPU Live Content"
          />
          
          {/* Stats para la imagen grande */}
          <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 flex items-center gap-3 md:gap-4 text-xs md:text-sm">
            <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
              ❤️ {images[0].likes}
            </span>
            <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
              💬 {images[0].comments}
            </span>
          </div>
        </div>

        {/* Grid de 2 imágenes abajo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-2">
          {images.slice(1).map((img) => (
            <div key={img.id} className="relative rounded-lg md:rounded-xl overflow-hidden">
              <img
                src={`https://res.cloudinary.com/dqieq3dxq/image/upload/${img.id}.jpg`}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[460px] object-cover"
                alt="EQUIPU Live Content"
              />

              {/* Stats para las imágenes pequeñas */}
              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 flex items-center gap-3 md:gap-4 text-xs md:text-sm">
                <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
                  ❤️ {img.likes}
                </span>
                <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
                  💬 {img.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicSupportSection;