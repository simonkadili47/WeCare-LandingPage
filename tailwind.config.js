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
        'custom-green': '#296b64',
        'gray-custom':'#e9edf1',
        'custom-gray':'#6aa49d',
        'gray-color': '#f3f5f7',
        'blue-custom': '#192939',
        'blue-custom': '#48545c',
      },
    },
  },
  plugins: [],
}



