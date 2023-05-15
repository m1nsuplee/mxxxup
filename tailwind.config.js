/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005EFE',
        'primary-hover': '#1A6EDD',
        'border-gray': '#C6C6C6',
        error: '#E3001E',
        gray: '#7A7A7A',
        disabled: '#EBEBE4',
      },
    },
  },
  plugins: [],
};
