import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    base:"/newlist/",
    proxy: {
      "/api": {//接口可匹配多个域名，为/api时走这个域名
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: "http://3.xlchatbox.top:8300/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),// 将 /api 重写
      },
      
    },
  },
  build: {
    outDir: "../../backend/resource/public/newlist",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  }
})
