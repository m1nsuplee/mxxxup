/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F9D58',
        error: '#E3001E',
        disabled: '#EBEBE4',
      },
      backgroundColor: {
        dark: '#1F1F1F',
      },
    },
  },
  plugins: [],
};
