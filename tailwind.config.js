/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",   // Navy Blue for "Adik" text
        violet: "#7A3FF2",    // Gradient start
        blue: "#2D9CDB",      // Gradient end / Primary Button
        muted: "#4F4F4F",     // Tagline / Dark Gray
        bg: "#F7F9FC",        // Light Gray background
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Inter', 'sans-serif'], // Set Poppins as primary
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}