import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['./index.html'],
    exclude: ['node_modules', '.git'],
  },
  attributify: { prefix: 'w:' },
});
