import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Ensure this is at the top level
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});