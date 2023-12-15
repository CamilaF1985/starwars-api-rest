// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'), 
    },
  },
});



