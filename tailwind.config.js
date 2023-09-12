/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['"Roboto"', '"Open Sans"'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

