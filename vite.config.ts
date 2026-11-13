/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// `pnpm dev` serves the playground; `pnpm build` produces the library bundle.
export default defineConfig(({ command }) => ({
  root: command === 'serve' ? 'playground' : undefined,
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'VueLatexCv',
      formats: ['es'],
      fileName: 'vue-latex-cv',
      cssFileName: 'vue-latex-cv',
    },
    rollupOptions: {
      external: ['vue'],
    },
    sourcemap: true,
  },
  test: {
    root: '.',
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.ts'],
  },
}))
