/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'youtube-red': '#da1725',
      },
    },
    maxWidth: {
      '4/5' : '80%',
    },
    maxHeight: {
      '4/5' : '80%',
    },
  },
  plugins: [
    '@tailwindcss/line-clamp',
    require('@tailwindcss/aspect-ratio'),
  ],
}


