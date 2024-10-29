import { defineConfig } from "vite";
import { resolve } from "path";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  base: "/virtualtest/",

  build: {
    chunkSizeWarningLimit: 1000,
    plugins: [Inspect()],
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        abuja: resolve(__dirname, "abuja/index.html"),
        calabar: resolve(__dirname, "calabar/index.html"),
        obudu: resolve(__dirname, "obudu/index.html"),
        oldestC: resolve(__dirname, "oldest-church/index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; 
          }
          if (id.includes("src/components")) {
            return "components"; 
          }
        },
      },
    },
  },
});
