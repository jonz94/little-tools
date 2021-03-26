module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '1-to-2': '1fr 2fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
