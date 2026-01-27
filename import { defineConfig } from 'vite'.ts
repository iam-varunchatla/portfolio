import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // Change 'portfolio' to your actual repo name
  plugins: [react()],
})

// scripts
// "scripts": {
//   "dev": "vite",
//   "build": "vite build",
//   "preview": "vite preview",
//   "deploy": "npm run build && gh-pages -d dist"
// }

// homepage
"homepage": "https://2025ab05279.github.io/portfolio"