import React, { useState, useEffect, useRef } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill, fit } from "@cloudinary/url-gen/actions/resize";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { Target, Megaphone, TrendingUp, Menu, X } from "lucide-react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dqieq3dxq",
  },
});

// Función helper para crear imágenes de Cloudinary
const cloudinaryImage = (id: string) => {
  return cld.image(id);
};

interface HeroProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Definimos las frases con su estructura completa
interface PhraseStructure {
  prefix: string; // Parte fija (ej: "Desarrollo de", "")
  prefixColor: string; // Color del prefix (ej: "text-white", "")
  mainText: string; // Parte principal que cambia
  mainTextColor: string; // Color del mainText (ej: "text-sky-400", "text-white")
  secondPart?: string; // Segunda parte (solo para Marketing Digital)
  secondPartColor?: string; // Color de la segunda parte
  showPrefix: boolean; // Si muestra el prefix
}

const Hero: React.FC<HeroProps> = ({ onNavigate, activeSection }) => {
  // Logo pequeño de arriba - usa el mismo ID pero tamaño diferente
  const topLogo = cloudinaryImage("zl3aivvgypqxak5ks8je");
  topLogo.resize(fit().width(80).height(80));

  const sideImage = cloudinaryImage("hw51rslmyi6pid02ab4n");
  sideImage.resize(fit().width(800).height(800));

  // IMAGEN EQUIPU COMPLETA (reemplaza la sección de texto)
  const equipuCompleteImage = cloudinaryImage("usaxb9nck0hqgdwgellz");
  equipuCompleteImage.resize(fit().width(1200).height(400));

  // Logos de marcas originales
  const brandLogos = [
    "t5l0tgrnjqzqpfsw0lbv",
    "bektysn57ou75yphh35o",
    "gpsgojlha9dwoadzfwpp",
    "gtfapvenrv12ykgoqmk8",
    "kckpb6xnlpaddntu190u",
    "wjwotkq3iibr4cmyeq4v",
  ].map((id) => cloudinaryImage(id).resize(fill().width(80).height(80)));

  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); // 0 = Imagen, 1 = Servicios
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para menú móvil

  // Refs para manejar clics
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Frases estructuradas
  const phrases: PhraseStructure[] = [
    {
      prefix: "Desarrollo de",
      prefixColor: "text-white",
      mainText: "Marcas",
      mainTextColor: "text-sky-400",
      showPrefix: true
    },
    {
      prefix: "Desarrollo de",
      prefixColor: "text-white",
      mainText: "Identidad",
      mainTextColor: "text-sky-400",
      showPrefix: true
    },
    {
      prefix: "",
      prefixColor: "",
      mainText: "Marketing",
      mainTextColor: "text-white",
      showPrefix: false
    },
    {
      prefix: "Marketing",
      prefixColor: "text-white",
      mainText: "Marketing",
      mainTextColor: "text-white",
      secondPart: "Digital",
      secondPartColor: "text-sky-400",
      showPrefix: false
    },
    {
      prefix: "",
      prefixColor: "",
      mainText: "Publicidad",
      mainTextColor: "text-white",
      showPrefix: false
    }
  ];

  const services: Service[] = [
    {
      icon: <Target className="w-12 h-12 text-sky-400" />,
      title: "Branding y Posicionamiento de Marca",
      description: "Creamos marcas únicas que generan conexiones emocionales, asegurando que tu público te elija cuando más importa.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-sky-400" />,
      title: "Publicidad Creativa",
      description: "Aumentamos la visibilidad de tu marca con campañas impactantes y efectivas que realmente marcan la diferencia.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-sky-400" />,
      title: "Marketing Estratégico",
      description: "Desarrollamos estrategias personalizadas para atraer, fidelizar y maximizar el valor de tus clientes.",
    },
  ];

  // Efecto para cambiar frases cada 4 segundos con transición suave
  useEffect(() => {
    const interval = setInterval(() => {
      // Iniciar transición
      setIsTransitioning(true);
      
      // Cambiar frase después de un breve delay para la animación
      setTimeout(() => {
        setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
        setIsTransitioning(false);
      }, 300); // Duración de la animación de fade
    }, 4000); // Cambia cada 4 segundos
    
    return () => clearInterval(interval);
  }, []);

  // Efecto para el carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Efecto para detectar scroll con debounce
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al hacer clic fuera o en enlaces
  {mobileMenuOpen && (
  <div 
    className="lg:hidden fixed inset-0 bg-black/50 z-30 top-full"
    onClick={() => setMobileMenuOpen(false)}
  />
)}


  // Función para manejar clics en navegación
  const handleNavigation = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false); // Cerrar menú móvil después de hacer clic
  };

  // Función para manejar clic en el logo (volver al inicio)
  const handleLogoClick = () => {
    // Navegar al inicio
    onNavigate("inicio");
    
    // También hacer scroll al inicio de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setMobileMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  // Función para alternar el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  // Función para abrir el catálogo de WhatsApp
  const openWhatsAppCatalog = () => {
    window.open("https://wa.me/c/593958848624", "_blank");
  };

  // Función para abrir WhatsApp directo (para el otro botón)
  const openWhatsAppDirect = () => {
    window.open("https://wa.me/593958848624", "_blank");
  };

  const NavButton = ({
    label,
    section,
  }: {
    label: string;
    section: string;
  }) => {
    const isActive = activeSection === section;

    return (
      <button
        onClick={() => handleNavigation(section)}
        className="relative group py-3 px-4 cursor-pointer bg-transparent border-none"
      >
        <span
          className={`
            text-lg font-medium transition-all duration-300 relative z-10
            ${isActive ? "text-sky-400" : "text-white group-hover:text-sky-400"}
          `}
        >
          {label}
        </span>

        {/* Línea indicadora */}
        <span
          className={`
            absolute bottom-1 left-1/2 -translate-x-1/2
            w-[80%] h-[3px] bg-white rounded-full
            transition-all duration-300 origin-center
            ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            group-hover:opacity-50 group-hover:scale-x-100
          `}
        />
      </button>
    );
  };

  // Componente para botones del menú móvil
  const MobileNavButton = ({
    label,
    section,
  }: {
    label: string;
    section: string;
  }) => {
    const isActive = activeSection === section;

    return (
      <button
        onClick={() => handleNavigation(section)}
        className={`
          w-full text-left py-4 px-6 border-b border-gray-800
          transition-all duration-200
          ${isActive 
            ? 'text-sky-400 bg-gray-900/50' 
            : 'text-white hover:text-sky-400 hover:bg-gray-900/30'
          }
        `}
      >
        <span className="text-lg font-medium">{label}</span>
        {isActive && (
          <span className="ml-2 text-sky-400">●</span>
        )}
      </button>
    );
  };

  // Obtener la frase actual
  const currentPhrase = phrases[currentPhraseIndex];

  return (
    <section 
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden flex flex-col justify-between"
    >

      {/* HEADER COMPLETO CON LOGO Y MENÚ */}
    {/* HEADER COMPLETO */}
      <header className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-300 ease-in-out
        ${scrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}
      `}>
        <div className="container mx-auto px-4">
          
          {/* VERSIÓN MÓVIL */}
          <div className="lg:hidden flex items-center justify-between h-20">
            {/* Botón hamburguesa */}
            <button
              ref={hamburgerRef}
              onClick={toggleMobileMenu}
              className="p-3 rounded-md hover:bg-white/10 transition-all duration-200 z-50"
              aria-label="Menu"
              type="button"
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8 text-sky-400" />
              ) : (
                <Menu className="w-8 h-8 text-white" />
              )}
            </button>

            {/* Logo centrado */}
            <button
              onClick={handleLogoClick}
              className="flex justify-center items-center py-3 bg-transparent border-0"
            >
              <AdvancedImage
                cldImg={topLogo}
                className="w-14 h-14 object-contain"
                alt="Logo"
              />
            </button>

            {/* Espaciador para centrar logo */}
            <div className="w-12"></div>
          </div>

          {/* VERSIÓN DESKTOP */}
          <div className="hidden lg:block">
            <button
              onClick={handleLogoClick}
              className="flex justify-center items-center py-3 w-full bg-transparent border-0"
            >
              <AdvancedImage
                cldImg={topLogo}
                className="w-16 h-16 object-contain"
                alt="Logo"
              />
            </button>

            <div className="flex justify-center gap-10 pb-4">
              <NavButton label="INICIO" section="inicio" />
              <NavButton label="INNOVATION" section="innovation" />
              <NavButton label="CONÓCENOS" section="conocenos" />
              <NavButton label="CONTACTO" section="contacto" />
            </div>
          </div>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        <div 
          ref={mobileMenuRef}
          className={`
            lg:hidden fixed left-0 right-0 bg-black/98 backdrop-blur-lg
            transition-all duration-300 ease-in-out border-t border-white/10
            ${mobileMenuOpen 
              ? 'top-[80px] opacity-100 visible h-auto pb-10' 
              : 'top-[-100%] opacity-0 invisible h-0'
            }
          `}
        >
          <div className="flex flex-col p-4">
            <MobileNavButton label="INICIO" section="inicio" />
            <MobileNavButton label="INNOVATION" section="innovation" />
            <MobileNavButton label="CONÓCENOS" section="conocenos" />
            <MobileNavButton label="CONTACTO" section="contacto" />
            
           
          </div>
        </div>
      </header>
      {/* Espacio para compensar el header fijo */}
      <div className="h-[120px] lg:h-[140px]"></div>

      {/* Contenido principal - SIN CAMBIOS */}
      <div className="
        relative z-10 flex flex-col lg:flex-row justify-between items-center 
        min-h-[70vh] 
        px-4 sm:px-6 md:px-10 lg:px-20 
        mt-6 sm:mt-8 md:mt-10 lg:mt-0 
        gap-10 
        pb-20 lg:pb-36
      ">

        {/* IZQUIERDA - Contenido principal */}
        <div className="flex-1 flex flex-col justify-center w-full items-center lg:items-start">

          {/* EQUIPU + LOGO + Branding - REEMPLAZADO POR IMAGEN */}
          <div
            className="
              flex items-center w-full justify-center lg:justify-start
              mt-8 sm:mt-10 md:mt-12 lg:mt-0
              lg:-ml-4 xl:-ml-6 2xl:-ml-8
            "
          >
            <AdvancedImage
              cldImg={equipuCompleteImage}
              className="
                w-full max-w-[1200px] sm:max-w-[800px] md:max-w-[700px] lg:max-w-[900px]
                h-auto
                object-contain
                opacity-95
                lg:ml-[-20px] xl:ml-[-0px]
              "
              alt="EQUIPU Branding"
            />
          </div>

          {/* Texto animado con frases estructuradas - SIMPLIFICADO */}
          <div className="flex items-center justify-center lg:justify-start w-full mt-6 sm:mt-4 lg:ml-[-10px]">
            
            {/* Parte fija - Siempre visible */}
            {currentPhrase.showPrefix ? (
              <div className="flex items-center">
                <span className={`text-xl sm:text-3xl md:text-4xl font-light uppercase ${currentPhrase.prefixColor}`}>
                  {currentPhrase.prefix}
                </span>
                <span className="text-xl sm:text-3xl md:text-4xl font-light uppercase">&nbsp;</span> {/* ESPACIO FIJO */}
              </div>
            ) : null}

            {/* Contenedor para la parte que cambia */}
            <div className={`relative ${currentPhrase.showPrefix ? 'ml-0' : ''}`}>
              <div 
                className={`
                  flex items-center text-xl sm:text-3xl md:text-4xl font-semibold uppercase
                  transition-opacity duration-300 min-h-[36px] sm:min-h-[44px]
                  ${isTransitioning ? 'opacity-0' : 'opacity-100'}
                `}
              >
                {currentPhrase.secondPart ? (
                  <>
                    <span className={currentPhrase.mainTextColor}>{currentPhrase.mainText}</span>
                    <span className="mx-1"> </span>
                    <span className={currentPhrase.secondPartColor}>{currentPhrase.secondPart}</span>
                  </>
                ) : (
                  <span className={currentPhrase.mainTextColor}>
                    {currentPhrase.mainText}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Botones + Logos + Estrellas */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 space-y-6 w-full lg:ml-[-5px]">

            {/* Botones */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* Botón Ver Nuestro Catálogo - Ahora abre el catálogo de WhatsApp */}
              <button 
                onClick={openWhatsAppCatalog}
                className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg text-base sm:text-lg transition-transform hover:scale-105"
              >
                Ver Nuestro Catálogo
              </button>

              {/* Botón WhatsApp - Ahora abre WhatsApp directo */}
              <button 
                onClick={openWhatsAppDirect}
                className="bg-white text-gray-800 font-semibold py-2.5 px-5 rounded-xl shadow-lg flex items-center gap-2 text-base sm:text-lg transition-transform hover:scale-105"
              >
                <FaWhatsapp className="text-green-500 text-2xl" />
                WhatsApp
              </button>
            </div>

            {/* Logos y estrellas */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex flex-col items-center lg:items-start gap-3">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  {brandLogos.map((img, index) => (
                    <AdvancedImage
                      key={index}
                      cldImg={img}
                      className="
                        w-10 h-10
                        sm:w-12 sm:h-12
                        md:w-14 md:h-14
                        lg:w-16 lg:h-16
                        rounded-full 
                        border-4 border-white
                        shadow-lg
                        object-contain
                        bg-white
                        p-1
                      "
                      alt={`brand-${index}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl sm:text-2xl md:text-3xl" />
                  ))}
                </div>
                <p className="text-white/90 text-base sm:text-lg md:text-xl">+500 Clientes confiaron en nosotros</p>
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA - Carrusel de contenido */}
        <div className="flex-1 flex justify-center items-center w-full mt-6 md:mt-4">
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[4/5]">
            
            {/* SLIDE 1: Imagen original (teléfono/tablet) */}
            <div className={`
              absolute inset-0 transition-all duration-500 ease-in-out
              ${activeSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}>
              <div className="relative w-full h-full animate-float">
                <AdvancedImage
                  cldImg={sideImage}
                  className="w-full h-full object-contain opacity-95"
                  alt="Tablet y teléfono Equipu"
                />
              </div>
            </div>

            {/* SLIDE 2: Servicios - ¿Qué hacemos? - SIN FONDO NEGRO */}
            <div className={`
              absolute inset-0 transition-all duration-500 ease-in-out
              ${activeSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}>
              <div className="
                relative w-full h-full
                p-6 sm:p-8
                overflow-y-auto
              ">
                {/* Encabezado */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                    ¿Qué <span className="text-sky-400">hacemos</span>?
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base">
                    Especialistas en posicionar tu marca para que conecte emocionalmente y se convierta en la opción preferida.
                  </p>
                </div>

                {/* Servicios - TARJETAS TRANSPARENTES */}
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group 
                        backdrop-blur-sm
                        bg-gradient-to-br from-gray-900/30 to-black/40
                        rounded-2xl 
                        p-5 
                        border border-gray-800/50 
                        hover:border-sky-400/50 
                        transition-all duration-300
                        shadow-lg hover:shadow-xl hover:shadow-sky-400/10
                      "
                    >
                      <div className="flex items-start gap-4">
                        <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-sky-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-white/70 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <p className="text-xl font-bold mb-6 text-white">
                    ¡Lleva tu marca al{" "}
                    <span className="text-sky-400">siguiente nivel</span>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;