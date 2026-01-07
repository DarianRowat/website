import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Custom domain on GitHub Pages => root path is "/"
  base: "/",
});
