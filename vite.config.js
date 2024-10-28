import { defineConfig } from "vite";

export default defineConfig({
  base: "/virtualtest/",

  build: {
    chunkSizeWarningLimit: 1000, // Set the chunk size warning limit (in KB)

    rollupOptions: {
      input: {
        main: "index.html",
        abuja: "/Abuja/index.html",
        calabar: "/Calabar/index.html",
        obudu: "/Obudu/index.html",
        oldestC: "/Oldest-church/index.html",
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
