import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    host: true, // expone la app en red
    port: 5173,
    strictPort: true,

    // Permite ngrok y dominios externos
    allowedHosts: [
      'localhost',
      '.ngrok-free.app',
      '.ngrok.io',
      '.ngrok.dev',
    ],

    // HMR estable con HTTPS (ngrok)
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },
})
