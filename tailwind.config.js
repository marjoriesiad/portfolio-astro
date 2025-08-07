/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'windows-teal': '#008080',
        'windows-blue': '#010081',
        'windows-dark-gray': '#818181',
        'windows-light-pink': '#C3C3C3',
        'windows-pink': '#FF0081'
      }
    }
  },
  plugins: []
}