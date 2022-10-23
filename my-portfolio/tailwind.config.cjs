/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        'my-font': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'pangolin': ['Pangolin', 'cursive'],
      },
     
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}