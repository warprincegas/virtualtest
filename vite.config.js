import { defineConfig } from "vite";
import {resolve} from 'path;

export default defineConfig({
  base: "/virtualtest/",

  build: {
    chunkSizeWarningLimit: 1000, // Set the chunk size warning limit (in KB)

    rollupOptions: {
      input: {
        main: resolve(__dirname,"index.html"),
        abuja: resolve(__dirname,"abuja/index.html"),
        calabar: resolve(__dirname,"calabar/index.html"),
        obudu: resolve(__dirname,"obudu/index.html"),
        oldestC: resolve(__dirname,"oldest-church/index.html"),
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
