import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const BotonW = () => {
  const [showMessage, setShowMessage] = useState(true);

  /* ⏱️ Mostrar / ocultar mensaje cada 3s */
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* 💬 MENSAJE - ARRIBA del botón */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="
              bg-white text-black text-sm md:text-base
              px-4 py-2 rounded-xl shadow-lg
              whitespace-nowrap mb-2
            "
          >
            Consulta cualquier auditoría gratuita
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🟢 BOTÓN WHATSAPP LATIENDO - ABAJO del mensaje */}
      <motion.a
        href="https://api.whatsapp.com/message/SDGY7DDVMQVOM1?autoload=1&app_absent=0" // 👉 TU NÚMERO REAL
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-14 h-14 rounded-full
          bg-white border border-gray-300
          flex items-center justify-center
          shadow-xl
        "
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            "0 0 0px rgba(255, 255, 255, 1)",
            "0 0 20px rgba(255, 255, 255, 1)",
            "0 0 0px rgba(255, 255, 255, 1)",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 1.4 }}
      >
        <FaWhatsapp className="text-black-500 text-3xl" />
      </motion.a>
    </div>
  );
};

export default BotonW;