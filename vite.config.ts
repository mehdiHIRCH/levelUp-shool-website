import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'development' ? '/' : '/levelUp-shool-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
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
}));
