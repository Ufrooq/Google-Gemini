
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDotenv } from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_REACT_APP_GEMINI_API_KEY": JSON.stringify(process.env.VITE_REACT_APP_GEMINI_API_KEY)
  }
})
