/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '430px',
      // => @media (min-width: 640px) { ... }

      'md': '700px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      backgroundColor: {
        'cbg': 'rgba(128, 129, 145, 0.30)'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '4c': 'repeat(4, minmax(300px, 0fr))',
        '4cs': 'repeat(4, minmax(160px, 0fr))',
        '2c': 'repeat(2, minmax(178px, 0fr))',
        '1c': 'repeat(1, minmax(369px, 0fr))',
      }
    },
  },
  plugins: [],
}

