/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#141414',
        accent: '#7C3AED',
        'accent-hover': '#6D28D9',
        'text-primary': '#f5f0e8',
        'text-secondary': '#a09080',
        border: '#2a2218',
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Google Sans', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
      },
    },
  },
  plugins: [],
}
