/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 40
    },
    colors: {
      white: {
        100: '#FFFF',
        200: '#F7F8FA'
      },
      gray: {
        100: '#F4E9E9',
        300: '#CEC2C2',
        400: '#8D8D99',
        800: '#494D4B'
      },
      blue: {
        700: '#1E2522'
      },
      green: {
        700: '#0A9B10'
      },
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        msMadi: 'Ms Madi, cursive',
        greatVibes: 'Great Vibes, cursive'
      },
      backgroundImage: {
        header: "url('/assets/images/header-xs.svg')"
      }
    }
  },
  plugins: []
};
