/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlueCustom: '#E7F5FA', // Custom color added here
      },
    },
  },
  plugins: [],
}
