module.exports = {
  prefix: '',
  purge: {
    enabled: true,
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
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
