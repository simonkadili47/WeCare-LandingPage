/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#192939',
        'custom-blue':'#303f4d',
        'custom-gray': '#414d5a',
      },
    },
  },
  plugins: [],
}

