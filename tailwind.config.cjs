/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sftext: ['SF Pro Text', 'Helvetica Neue', 'Helvetica', ...defaultTheme.fontFamily.sans],
        sfdisplay: ['SF Pro Display', 'Helvetica Neue', 'Helvetica', ...defaultTheme.fontFamily.sans]
      }
    }
  },

  plugins: [forms]
};

module.exports = config;