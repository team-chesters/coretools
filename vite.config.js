import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './coretools.default.js'),
      name: 'coretools',
      fileName: (format) => `coretools.${format}.js`
    }
  },
  output: {
    exports: "named"
  }
});