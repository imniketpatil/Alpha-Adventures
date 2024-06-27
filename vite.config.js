import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/alpha-adventures/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  esbuild: {
    // To handle 404 redirects for GitHub Pages
    target: "es2020",
  },
  server: {
    historyApiFallback: true,
  },
});
