/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      xs: 14,
      sn: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      white: '#FFF',
      gray: {
        100: '#f7fafc',
        900: '#1a202c'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
};
