/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#63E1D9",
        "secondary": "#34A0CD"
      }
    },
  },
  plugins: [],
}

