import React from "react";
import { MapPin, Phone } from "lucide-react";
import ContactForm from "./Contactform"; // Ajusta la ruta según tu estructura

const Footer: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log("Formulario enviado:", formData);
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/message/SDGY7DDVMQVOM1?autoload=1&app_absent=0", "_blank");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/equipumarcasbranding?rdid=IAXX8a5YCovyCu8M&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A2rKYWu7p%2F#", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/equipu_marcasbranding?igsh=MXdsb3pyYmVheTR3dw%3D%3D", "_blank");
  };

  const openTikTok = () => {
    window.open("https://tiktok.com", "_blank");
  };

  const openEmail = () => {
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=equipue@gmail.com&tf=cm", "_blank");
  };

  return (
    <footer className="relative w-full text-white border-t border-gray-900">
      {/* 🔥 OVERLAY DEGRADADO: de tu color a negro */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#151515] via-[#151515] to-black opacity-100"></div>

      {/* Contenido sobre el degradado */}
      <div className="relative container mx-auto px-6 md:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* COLUMNA 1 */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              EQUIPU
            </h3>
          <ul className="space-y-2">
  {[
    { label: 'Inicio', section: 'inicio' },
    { label: 'Innovation', section: 'innovation' },
    { label: 'Conócenos', section: 'conocenos' },
    { label: 'Contacto', section: 'contacto' },
  ].map((item) => (
    <li key={item.section}>
      <a
        href={`#${item.section}`}
        className="text-white hover:text-gray-300 transition-colors duration-200 text-xs"
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>


          </div>

          {/* COLUMNA 2 */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              QUIÉNES SOMOS
            </h3>
            <p className="text-white text-xs leading-relaxed mb-3">
              EQUIPU es una agencia de marketing integral especializada en branding, 
              publicidad digital y estrategias comerciales. Trabajamos con equipos 
              creativos y estratégicos para llevar tu marca al siguiente nivel.
            </p>
            <span className="text-xs text-white italic">Empresa Ecuatoriana</span>
          </div>

          {/* COLUMNA 3 */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              ¿NECESITAS ASISTENCIA?
            </h3>

            <div className="mb-4">
              <p className="text-gray-400 text-xs font-medium mb-1">Te atendemos de:</p>
              <div className="text-white text-xs space-y-1">
                <p>Lunes - Viernes: 8:30 AM - 7:30 PM</p>
                <p>Sábados y Domingos: 9:00 AM - 13:00 PM</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-white" />
                <p className="text-gray-400 text-xs font-medium">Visítanos:</p>
              </div>
              <div className="text-white text-xs space-y-1 mb-2">
                <p>Teodoro Gomez de la Torre. Nro. 7-46 y Calixto Miranda (2da. Planta, Of. 1-4)</p>
                <p>Ibarra, Ecuador</p>
              </div>
              <div className="w-full mt-3">
                <div className="h-32 w-full rounded-lg overflow-hidden border border-gray-800 shadow-md">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3792.3376941811507!2d-78.12318802503535!3d0.34245629965418517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjAnMzIuOCJOIDc4wrAwNycxNC4yIlc!5e1!3m2!1ses!2sec!4v1769315420676!5m2!1ses!2sec"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>

                <p className="text-gray-400 text-[10px] mt-1 text-center">
                  Ver ubicación exacta en Google Maps
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={16} className="text-white" />
                <p className="text-gray-400 text-xs font-medium">Teléfono:</p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white text-sm font-semibold">095 884 8624</p>
                <button
                  onClick={openWhatsApp}
                  className="bg-[#2A2A2A] hover:bg-gray-800 text-white text-xs font-medium py-1.5 px-3 rounded border border-gray-800 hover:border-gray-700 transition-all duration-200 flex items-center gap-1"
                >
                  <Phone size={12} />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* COLUMNA 4 - Usando el componente ContactForm con todo incluido */}
          <ContactForm 
            onFacebookClick={openFacebook}
            onInstagramClick={openInstagram}
            onWhatsAppClick={openWhatsApp}
            onEmailClick={openEmail}
            onTikTokClick={openTikTok}
          />
        </div>

        <div className="w-full h-px bg-gray-100 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white text-xs">© 2026 EQUIPU. Todos los derechos reservados.</p>

          <div className="flex gap-4 text-white text-xs">
            <span>Aviso Legal</span>
            <span>Política de Privacidad</span>
            <span>Términos y Condiciones</span>
          </div>
          <div className="text-white text-xs">
            <a 
              href="https://mail.google.com/mail/u/0/?fs=1&to=equipue@gmail.com&tf=cm"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              equipue@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;