/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))', // اضافه کردن رنگ سفارشی برای border
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
