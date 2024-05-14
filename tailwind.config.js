/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ["*.{html,js}"],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  theme: {
    extend: {
      colors: {
        'my-black': '#111111',
        'my-yellow' : '#aa00ff',
      },
      backgroundImage: {
        'alimehralian': "url('/src/images/alimehi.jpg')",
      },
      height: {
        '100vh-80': 'calc(100vh - 80px)',
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'] 
      },  
      keyframes: {
        progress: {
          '0%': { 'stroke-dasharray': '0 100' },
        }
      },
      animation: {
        progress: 'progress 1s ease-out forwards',
      },    
    }
  },
  plugins: [],
}
