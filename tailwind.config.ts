import type { Config } from 'tailwindcss';
import tailwindDarkAware from 'tailwind-dark-aware';

export default {
  content: ['./{app,components}/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: 'Poppins, sans-serif',
      'roboto-mono': 'Roboto Mono, sans-serif',
    },
    extend: {
      colors: {
        palette: {
          100: '#ffffff',
          200: '#fefefe',
          300: '#b9bbbe',
          400: '#8e9297',
          500: '#4f545c',
          600: '#36393f',
          700: '#2f3136',
          800: '#292b2f',
          900: '#202225',
        },
        hyperlink: '#0cbc8b',
      },
    },
  },
  plugins: [tailwindDarkAware],
} satisfies Config;
