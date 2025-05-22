// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://examination.24x7retail.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api/v1.0'),
      },
    },
  },
});

