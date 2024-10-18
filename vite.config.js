import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, {resolve} from "path"
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include:"**/*.jsx",
    
  }), viteSingleFile()],
  base:"/special/shinnouhai2024/",
  // base:"/_lp-pre/2024/shinnouhai2024/",
  root: "./",
 
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
   
        main:resolve(__dirname, "index.html"),
      },
    },
  },
 
  server: {
    host: true,
 
  }

})
