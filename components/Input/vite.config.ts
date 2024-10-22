import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: './src/input.styles.scss', dest: 'dist' }
      ],
      hook: 'writeBundle'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'B2bUiInput',
      fileName: (format) => `b2b-ui-input.${format}.js`
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
});
