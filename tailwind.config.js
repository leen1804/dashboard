/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: 'rgb(12, 14, 15)', // Or '#13161a' as HEX
         back: 'rgb(19, 21, 23)',
         backy: 'rgb(26, 30, 33)',
         box: 'rgb(24, 28, 31)',
         greeny:"rgb(184, 242, 157)",
         bluey:'rgb(157, 201, 242)',
      },
    },
  },
  plugins: [],
}
