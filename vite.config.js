import { defineConfig } from "vite";
import {resolve} from 'path';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  base: "/virtualtest/",

  build: {
    chunkSizeWarningLimit: 1000,
    plugins: [Inspect()],
    rollupOptions: {
      input: {
        main: resolve(__dirname,"index.html"),
        abuja: resolve(__dirname,"Abuja/index.html"),
        calabar: resolve(__dirname,"Calabar/index.html"),
        obudu: resolve(__dirname,"Obudu/index.html"),
        oldestC: resolve(__dirname,"Oldest-church/index.html"),
      },
      output: {
        manualChunks(id) {
          // Custom chunking for dependencies
          if (id.includes("node_modules")) {
            return "vendor"; // Bundles all dependencies from node_modules in a single 'vendor' chunk
          }
          if (id.includes("src/components")) {
            return "components"; // Groups components into a separate chunk
          }
        },
      },
    },
  },
});
