import { defineConfig } from "vite";

export default defineConfig({
  base: "/vtng/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        abuja: "Abuja/index.html",
        calabar: "Calabar/index.html",
        obudu: "Obudu/index.html",
        oldestC: "Oldest-church/index.html",
      },
    },
  },
});
