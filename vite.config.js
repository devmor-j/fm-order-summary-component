import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: './',
  build: { target: 'es2015' },
  plugins: [
    WindiCSS(),
    createHtmlPlugin({ minify: true, }),
  ],
});
