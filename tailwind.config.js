module.exports = {
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['active'],
      backgroundColor: ['active'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}