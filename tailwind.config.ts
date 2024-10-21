import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      maskImage: {
        'fade-mask': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
        'fade-maskk': 'linear-gradient(to right, transparent, black 10%, black 70%, transparent)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'
      }
    },
  },
  plugins: [ 
     // @ts-ignore: Suppress TypeScript type error for the addUtilities argument
      function ({ addUtilities }) {
    addUtilities({
      '.fade-mask': {
        '-webkit-mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
        'mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
      },
    });
  },],
};
export default config;
