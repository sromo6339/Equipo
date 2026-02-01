import React, { useEffect, useState, useRef } from "react";

const images = [
  { id: "lfl2k2qzsbbyqkwjqbht", title: "COOP A.C" },
  { id: "tl4jsgq9oyxvfkko3bnc", title: "UNO " },
  { id: "zxajertzcsqhcmb0ckku", title: "COOP A.C PIJAL" },
  { id: "zntvhwd5x89vuswvpcld", title: "IBARRA" },
  { id: "bkgqrsbbh5yl2ys1ajqm", title: "BICI" },
  { id: "ufssv9n7wp1lawagplkt", title: "DENTAL BOX" },
  { id: "w2ecn83plmejcfz49sjg", title: "CORPOHEALT" },
  { id: "pdyjbohm7wpefgtyb4ll", title: "BEERTEINS" },
  { id: "ashhigdjj0x0t9afmks5", title: "DERCORSCONS" },
  { id: "dnlednr4wmzzxjukbr1c", title: "ECOOPTIMA" },
  { id: "moacyyajrkh8nntkfevq", title: "MARMONTE" },
  { id: "qlvjzgo3z2lojc6i2b2v", title: "RV" },
  { id: "pkba3rnphlk6pkfrbsac", title: "OURWAYDAY" },
  { id: "yf1dst1c3eaccfcoo10w", title: "GRILLED " },
  { id: "u6pxay4rlp3nhziqgdha", title: "GLOBAL TV" },
  { id: "h8us3la3qqe37sp791xr", title: "SOLO TAMALES" },
  { id: "gaklaip5jcxzwersmpy4", title: "DECORCONS" },
  { id: "xvcpofradzpyzj6fobne", title: "TU MARCA" }, // <-- AQUÍ AGREGUÉ LA IMAGEN FALTANTE
];

// IDs que NO deben tener fondo blanco
const sinFondoBlanco = [
  "bkgqrsbbh5yl2ys1ajqm", // BICI
  "pdyjbohm7wpefgtyb4ll", // BEERTEINS
  "moacyyajrkh8nntkfevq", // MARMONTE
  "xvcpofradzpyzj6fobne", // TU MARCA
  "h8us3la3qqe37sp791xr", // SOLO TAMALES
];

const Innovation = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % Math.ceil(images.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Calcula el número de grupos basado en la cantidad de imágenes
  const totalGroups = Math.ceil(images.length / 3);
  const visibleImages = images.slice(currentGroup * 3, currentGroup * 3 + 3);

  const handleVerMasClick = () => {
    window.open(
      "https://www.facebook.com/equipumarcasbranding",
      "_blank"
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-start pt-16 md:pt-24"
    >
      {/* TÍTULO */}
      <div className="relative text-center mb-8 md:mb-16 w-full">
        <h1
          className="text-4xl sm:text-5xl md:text-8xl font-normal px-4"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Creamos Marcas
        </h1>
      </div>
      
      {/* CONTENEDOR */}
      <div className="relative w-full px-2 sm:px-4 md:px-6 flex-1 flex flex-col">
        <div
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-6 sm:gap-8 md:gap-10 lg:gap-12
            flex-1 min-h-[480px] sm:min-h-[520px] md:min-h-[600px]
            w-full max-w-none
          "
        >
          {visibleImages.map((image) => {
            const tieneFondoBlanco = !sinFondoBlanco.includes(image.id);

            return (
              <div key={image.id} className="flex flex-col items-center w-full px-1 sm:px-2">
                <div className="w-full flex justify-center">
                  <div className="w-full flex justify-center">
                    <img
                      src={`https://res.cloudinary.com/dqieq3dxq/image/upload/${image.id}.png`}
                      className={`
                        w-full
                        h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]
                        object-contain
                        rounded-lg
                        ${tieneFondoBlanco ? "bg-white p-6" : ""}
                      `}
                      alt={image.title}
                    />
                  </div>
                </div>

                <div className="text-center px-6 mb-4 w-full mt-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest">
                    {image.title}
                  </h3>
                </div>

                <button
                  onClick={handleVerMasClick}
                  className="text-white font-semibold text-sm sm:text-base tracking-widest uppercase"
                >
                  Ver Más
                </button>

                <div className="w-20 h-1 mt-2 bg-white opacity-60 rounded-sm transition-all duration-300 hover:-translate-y-2 hover:h-2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Innovation;