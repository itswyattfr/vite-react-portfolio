/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#121212',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#333333',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};