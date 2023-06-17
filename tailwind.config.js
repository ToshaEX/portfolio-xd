/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      secular: ['Secular One', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
