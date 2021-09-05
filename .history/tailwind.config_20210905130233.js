module.exports = {
  prefix: '',
  purge: {
    enabled: false,
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './src/**/*.js'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled']
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
