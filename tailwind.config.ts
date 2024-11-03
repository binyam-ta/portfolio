import { transform } from "next/dist/build/swc";
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
      animation:{
        'ping-large':"ping-large 1s ease-in-out infinite",
        'move-left' : "move-left 1s linear infinite",
        'move-right' : "move-right 1s linear infinite",
      },
      keyframes:{
        'ping-large':{
          '75%, 100%':{
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'move-left':{
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%':{
            transform: 'translateX(-50%)',
          },
        },
        'move-right':{
          '0%': {
            transform: 'translateX(-10%)',
          },
          '100%':{
            transform: 'translateX(0%)',
          },
        }
      },
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
