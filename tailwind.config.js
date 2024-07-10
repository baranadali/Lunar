/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { 'max': '768px' },
    },
    fontFamily: {
      'inter' : ['Inter', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'special': '0 1px 24px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'dark-black': 'rgba(0, 0, 0, 1)',
        'text-gray': 'rgba(153, 153, 153, 1)',
        'border-solid': 'rgba(45, 45, 45, 1)',
      },
    },
  },
  plugins: [],
}