import {defineConfig} from 'vite'
import solid from 'vite-plugin-solid'
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ("./src/index.tsx"),
      name: 'solid-layout',
      // the proper extensions will be added
      fileName: 'solid-layout',
    },
  },
  plugins: [solid(), vanillaExtractPlugin(), dts()],
})
