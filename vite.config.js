import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: '0.0.0.0', // Allows access from any device on the network
    port: 5173,      // Default Vite port (change if needed)
    open: false,     // Prevents auto-opening browser (optional)
  },
})


