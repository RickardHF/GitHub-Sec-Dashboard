/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // or 'media' to respect system preferences
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb', // blue-600
          DEFAULT: '#1d4ed8', // blue-700
          dark: '#1e40af', // blue-800
        },
      },
    },
  },
  plugins: [],
};