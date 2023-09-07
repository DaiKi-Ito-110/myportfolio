/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'youtube-red': '#da1725',
      },
    },
  },
  plugins: [
    '@tailwindcss/line-clamp',
    require('@tailwindcss/aspect-ratio'),
  ],
}


