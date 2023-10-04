import type { Config } from 'tailwindcss';
import tailwindDarkAware from 'tailwind-dark-aware';

export default {
  content: ['./{app,components}/**/*.{ts,tsx}'],
  theme: {},
  plugins: [tailwindDarkAware],
} satisfies Config;
