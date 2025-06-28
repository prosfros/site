/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
      'spin-slow': 'spin 15s linear infinite',
      'border': 'gradient-border 10s ease infinite',
      },
      keyframes: {
        'gradient-border': {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '100%': { 'background-position': '0% 50%' },
        }     
      },
    },
  },
  plugins: [],
};