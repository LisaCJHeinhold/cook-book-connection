/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Reddit Sans"', 'sans-serif'],
    },
    colors: {
      'maroon': '#51212B',
      'redish': '#8A112B',
      'pink': '#C6655F',
      'light-pink': '#FFD0CD',
      'white': '#FFFFFF',
      'black': '#000000',
      'light-gray': '#E5E5E5',
    },
  },
  plugins: [],
}

