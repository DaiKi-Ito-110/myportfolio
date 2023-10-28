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
      'screen-8/10' : '80vh',
    },
  },
  plugins: [
    '@tailwindcss/line-clamp',
    require('@tailwindcss/aspect-ratio'),
  ],
}


