const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      name: 'coretools',
      fileName: (format) => `coretools.${format}.js`
    }
  }
});