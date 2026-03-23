import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",   // Navy
        violet: "#7A3FF2",
        blue: "#2D9CDB",
        muted: "#4F4F4F",
        bg: "#F7F9FC",
      },
    },
  },
  plugins: [typography],
};