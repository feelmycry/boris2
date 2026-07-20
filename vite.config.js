import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'video1.mov', dest: '.' },
        { src: 'video2.mov', dest: '.' },
        { src: 'video3.mov', dest: '.' },
      ],
    }),
  ],
})
