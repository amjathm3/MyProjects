import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Custom logger to filter out React Refresh warnings
  customLogger: {
    warn(msg, options) {
      // Suppress React Refresh dynamic import warnings
      if (msg && msg.includes('import.meta.url') && msg.includes('RefreshRuntime')) {
        return
      }
      if (msg && msg.includes('dynamic import cannot be analyzed')) {
        return
      }
      console.warn(msg, options)
    },
    warnOnce(msg, options) {
      // Suppress React Refresh dynamic import warnings
      if (msg && msg.includes('import.meta.url') && msg.includes('RefreshRuntime')) {
        return
      }
      if (msg && msg.includes('dynamic import cannot be analyzed')) {
        return
      }
      console.warn(msg, options)
    },
    info: console.info,
    error: console.error,
    clearScreen: () => {}
  }
})

