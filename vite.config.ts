import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  server: {
    host: true,  // ESTO ES CLAVE para exponer en red
    port: 5173,
    strictPort: true,
    
    // Permite ngrok y otros hosts
    allowedHosts: [
      'localhost',
      '.ngrok-free.app',
      '.ngrok.io',
      '.ngrok.dev'
    ],
    
    // Hot Reload optimizado
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    }
  }
})