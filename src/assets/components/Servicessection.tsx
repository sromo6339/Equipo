import React from "react";

const Servicessection: React.FC = () => {
  return (
    <div
      className="
        h-[320px]          /* móvil: menos espacio negro */
        sm:h-[380px]       /* tablet */
        md:h-[450px]       /* tablet grande */
        lg:h-[600px]       /* desktop SIN CAMBIOS */
        bg-black text-white
        relative overflow-hidden
        flex items-center justify-center
      "
    >
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-500/10 to-transparent" />

      {/* Contenido */}
      <div className="text-center px-3">
        <h1
          className="
            whitespace-nowrap
            text-[18px]
            sm:text-[22px]
            md:text-4xl
            lg:text-7xl
            xl:text-7xl
            2xl:text-[100px]
            text-white
            leading-tight
            mb-4
          "
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          Haz que tu marca hable por ti
        </h1>

        {/* Línea SOLO en desktop */}
        <div className="hidden lg:block mt-32">
          <div className="mx-auto w-2/3 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Servicessection;