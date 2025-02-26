import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'cascarilla',
      fileName: (format) => `cascarilla.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
}); 