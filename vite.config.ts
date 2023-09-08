import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.tsx',
      treeshake: true,
      targets: ["esm", "cjs"],
    },
  },
  plugins: [solid()],
})
