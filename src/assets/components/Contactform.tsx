import React, { useState } from "react";
import { Facebook, Instagram, Mail, MessageCircle, Send } from "lucide-react";

interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
}

interface ContactFormProps {
  onFacebookClick?: () => void;
  onInstagramClick?: () => void;
  onWhatsAppClick?: () => void;
  onEmailClick?: () => void;
  onTikTokClick?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onFacebookClick,
  onInstagramClick,
  onWhatsAppClick,
  onEmailClick,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!formData.mensaje.trim()) return false;
    if (!/\S+@\S+\.\S+/.test(formData.email)) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/equipue@gmail.com", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuevo mensaje de ${formData.nombre} desde EQUIPU`,
          _captcha: 'false',
          _template: 'table',
          _next: "https://mail.google.com/mail/u/0/#inbox"
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Limpia el formulario
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          mensaje: "",
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error al enviar el formulario:', error);
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-2">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
        ¿TIENES ALGUNA CONSULTA?
      </h3>

      <form 
        onSubmit={handleSubmit} 
        className="space-y-3"
        action="https://formsubmit.co/equipue@gmail.com" 
        method="POST"
      >
        {/* Campos ocultos necesarios para FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://mail.google.com/mail/u/0/#inbox" />
        <input type="text" name="_honey" style={{display: 'none'}} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre *"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#2A2A2A] border border-gray-800 rounded text-white text-xs placeholder-white/70 focus:outline-none focus:border-gray-700"
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#2A2A2A] border border-gray-800 rounded text-white text-xs placeholder-white/70 focus:outline-none focus:border-gray-700"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-[#2A2A2A] border border-gray-800 rounded text-white text-xs placeholder-white/70 focus:outline-none focus:border-gray-700"
        />

        <textarea
          name="mensaje"
          placeholder="Mensaje *"
          required
          rows={2}
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-[#2A2A2A] border border-gray-800 rounded text-white text-xs placeholder-white/70 focus:outline-none focus:border-gray-700 resize-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-medium py-2 px-4 rounded border border-gray-800 hover:border-gray-700 transition-all text-xs tracking-wide flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            'Enviando...'
          ) : (
            <>
              <Send size={14} />
              Enviar Mensaje
            </>
          )}
        </button>

        {/* MENSAJES DE CONFIRMACIÓN AHORA DEBAJO DEL BOTÓN */}
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-900/30 border border-green-700 text-green-400 text-xs rounded text-center animate-fadeIn">
            ✓ Mensaje enviado correctamente. Te responderemos pronto.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-900/30 border border-red-700 text-red-400 text-xs rounded text-center animate-fadeIn">
            ✗ Error al enviar el mensaje. Por favor intenta nuevamente.
          </div>
        )}
      </form>

      {/* Redes sociales */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-gray-400 text-sm text-center mb-3">
          Síguenos en nuestras redes
        </p>

        <div className="flex justify-center gap-2">
          <button
            onClick={onFacebookClick}
            className="w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110"
          >
            <Facebook size={18} className="text-black" />
          </button>

          <button
            onClick={onInstagramClick}
            className="w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110"
          >
            <Instagram size={18} className="text-black" />
          </button>

          <button
            onClick={onWhatsAppClick}
            className="w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110"
          >
            <MessageCircle size={18} className="text-black" />
          </button>

          <button
            onClick={onEmailClick}
            className="w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110"
          >
            <Mail size={18} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;