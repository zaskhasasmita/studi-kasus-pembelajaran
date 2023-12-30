/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary' : '#023047',
        'secondary' : '#8ecae6',
        'dark' : '#334155',
        'orange-z' : '#fb8500',
        'blue-z' : '#219ebc',
        'yellow-z' : '#ffb703',
      }
    },
    fontFamily: {
      'inter' : ['Inter', 'sans-serif'],
      'montserrat' : ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}