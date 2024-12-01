import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
      'bootstrap': 'bootstrap',
      '@apollo/client': '@apollo/client',
      'react-bootstrap': 'react-bootstrap',
    },
  },
})
