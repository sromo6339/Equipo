import React from "react";
import { motion } from "framer-motion";

const MarketingSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 mt-[-30px]">
        {/* Encabezado */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Conócenos
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Somos más que una agencia, somos tu aliado estratégico
          </motion.p>
        </div>

        {/* Contenido principal - Unido con línea central */}
        <div className="relative">
          {/* Contenedor unificado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch relative">
            
            {/* Línea central divisoria - SOLO en desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent transform -translate-x-1/2 z-10"></div>

            {/* IZQUIERDA - Imagen sin marco */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full flex items-center justify-center lg:rounded-l-2xl overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/dqieq3dxq/image/upload/pzsagockdcsjpdowwile.png"
                alt="EQUIPU Team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* DERECHA - Contenido sin marco */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-full flex flex-col justify-between mt-6 lg:mt-0 p-6 bg-black"
            >
              {/* Contenido */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Innovación y Estrategia
                    <br />
                    para tu marca
                  </h3>
                  <div className="w-20 h-1 bg-sky-400 mt-4"></div>
                </div>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  EQUIPU es una agencia de marketing integral especializada en branding, 
                  publicidad digital y estrategias comerciales. Trabajamos con equipos 
                  creativos y estratégicos para llevar tu marca al siguiente nivel.
                </p>

                <div className="space-y-6">
                  {/* Servicios personalizados */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Servicios personalizados adaptados a tus objetivos
                      </h4>
                      <p className="text-gray-400">
                        Desarrollamos estrategias a medida que se alinean perfectamente 
                        con tus metas comerciales y visión de marca.
                      </p>
                    </div>
                  </div>

                  {/* Contratos flexibles */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Contratos flexibles a partir de 3 meses
                      </h4>
                      <p className="text-gray-400">
                        Adaptamos nuestros compromisos a tus necesidades, ofreciendo 
                        planes que crecen contigo.
                      </p>
                    </div>
                  </div>

                  {/* Comunicación constante */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Comunicación constante y transparente
                      </h4>
                      <p className="text-gray-400">
                        Mantenemos un diálogo abierto y claro en cada etapa del proyecto, 
                        asegurando que estés siempre informado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;