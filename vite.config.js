import { defineConfig } from "vite";

export default defineConfig({
  base: "/virtualtest/",
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

// git add dist
// git commit -m "Add dist folder for GitHub Pages"
// git push origin main   git remote add origin https://github.com/warprincegas/vtngn.git
