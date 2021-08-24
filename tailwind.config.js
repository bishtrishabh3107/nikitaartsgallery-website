module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    cursor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['active'],
    screens: {
      sm: { min: '140px', max: '425px' },
      md: { min: '426px', max: '768px' },
      lg: { min: '769px', max: '1024px' },
      xl: { min: '1025px', max: '3000px' },
    },
  },

  plugins: [],
};
