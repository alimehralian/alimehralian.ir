/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-black': '#111111',
        'my-yellow' : '#ffb400',
      },
      backgroundImage: {
        'alimehralian': "url('/src/assets/images/alimehralian.jpg')",
      },
      height: {
        '100vh-80': 'calc(100vh - 80px)',
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'] 
      },      
    }
  },
  plugins: [],
}
