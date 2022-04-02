import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['./index.html'],
    exclude: ['node_modules', '.git'],
  },
  attributify: { prefix: 'w:' },
  theme: {
    extend: {
      fontFamily: {
        RedHatDisplay: ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        'clr-pale-blue': 'hsl(225, 100%, 94%)', // Pale blue
        'clr-bright-blue': 'hsl(245, 75%, 52%)', // Bright blue
        'clr-very-pale-blue': 'hsl(225, 100%, 98%)', // Very pale blue
        'clr-desat-blue': 'hsl(224, 23%, 55%)', // Desaturated blue
        'clr-dark-blue': 'hsl(223, 47%, 23%)', // Dark blue
      },
    },
  }
});
