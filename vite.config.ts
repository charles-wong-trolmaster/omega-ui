import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Suppress deprecation warnings from dependencies
        quietDeps: true,
        // Specifically silence @import warnings
        silenceDeprecations: ["import"],
        // Optional: Set charset to avoid warnings
        charset: false,
      },
    },
  },
  server: {
    port: 3000,
  },
});
