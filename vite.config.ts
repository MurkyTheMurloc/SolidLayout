import {defineConfig} from 'vite'
import solid from 'vite-plugin-solid'
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: ("./src/index.tsx"),
      name: 'solid-layout',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
  },
  plugins: [solid(), vanillaExtractPlugin()],
})
