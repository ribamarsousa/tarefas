/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // bg-img-tarefas
      backgroundImage: theme => ({
        "img-tarefas": "url('/images/background.png')"
      })
    },
  },
  plugins: [],
}
