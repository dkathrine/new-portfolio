/** @type {import('tailwindcss').Config} */
export default {
  experimental: {
    containerQueries: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

