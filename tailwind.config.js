// tailwind.config.js

import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

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
      'poppins': ["Poppins", " sans-serif"],
      'fairs': ["Playfair Display", 'serif'],
      'merri': ["Merriweather", 'serif']
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};

