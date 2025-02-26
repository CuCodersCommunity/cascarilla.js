import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/cascarilla.js",
      name: "cascarilla",
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
});
