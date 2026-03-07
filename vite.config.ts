import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const useNgrokHmr = env.VITE_USE_NGROK_HMR === 'true';

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],

    server: {
      host: true,
      port: 5173,
      strictPort: true,
      allowedHosts: [
        'localhost',
        '.ngrok-free.app',
        '.ngrok.io',
        '.ngrok.dev',
      ],
      // Local: ws normal. Ngrok: wss por 443.
      hmr: useNgrokHmr
        ? {
            protocol: 'wss',
            clientPort: 443,
          }
        : undefined,
    },
  };
});
