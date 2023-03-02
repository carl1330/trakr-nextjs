/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      spacing: {
        'default-paddingx': '400px',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};

module.exports = config;
