// tailwind.config.js

module.exports = {
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Noto Sans', 'sans-serif'],
      'neuton': ['Neuton', 'sans-serif'],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};

