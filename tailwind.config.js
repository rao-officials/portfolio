module.exports = {

  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Dark: '#040b14',
      }
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    // require('@tailwindcss/forms'),

  ],
}
