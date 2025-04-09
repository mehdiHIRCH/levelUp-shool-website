import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/levelUp-shool-website/',  // Add this line to set the base path for GitHub Pages
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: true
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true
  }
});
