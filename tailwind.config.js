/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7fa',
          100: '#e0eff5',
          200: '#c5e0ea',
          300: '#9cc7da',
          400: '#6da7c3',
          500: '#4b8aab',
          600: '#326C98', // Logo Astranova text color
          700: '#2b587d',
          800: '#254a69',
          900: '#233e57',
          950: '#172739',
        },
        secondary: {
          50: '#fbf8eb',
          100: '#f6efcd',
          200: '#efdf9b',
          300: '#e5c95e',
          400: '#deba32',
          500: '#D4AF37', // Logo gold color
          600: '#b88d22',
          700: '#94671e',
          800: '#7a511e',
          900: '#67431e',
          950: '#3b220d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
