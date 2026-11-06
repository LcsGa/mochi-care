import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite-plus";
import { lazyPlugins } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages sert le site sous /mochi-care/ : le workflow de déploiement définit BASE_PATH.
  base: process.env.BASE_PATH ?? "/",
  plugins: lazyPlugins(() => [vue()]),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
