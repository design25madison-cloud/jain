import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves the site from /jain/
  base: command === 'build' ? '/jain/' : '/',
  server: {
    port: 5180,
    strictPort: true,
  },
}))
