import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /**
   * GitHub Pages serves from `/<repo>/`, not `/`.
   * Set `GITHUB_PAGES=true` in CI to build with the correct base.
   */
  base: '/manidhar-portfolio/',
})
