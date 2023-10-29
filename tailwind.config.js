/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1536px',
    },
    colors: {
      Primary: '#262262',
      Secondary: '#2E5E98',
      Tertiary: '#A6B0B5',
      WhiteOp5: '#ffffff80',
      White: '#fff',
      Draft: '#C41212',
      DraftOp5: '#c412121a',
      Published: '#40982E',
      PublishedOp01: '#40982e1a',
      ButtonBorderColor: '#B3C4CE',
      ButtonBorderColorOp2: '#b3c4ce33',
      colorP: '#5F7D8E',
      color1: '#92a1ba1a',
      transparent: 'transparent',
    },
    fontFamily: {
      muli: ['Muli'],
    },
    extend: {
      spacing: {
        '10px': '0.625rem',
        '11px': '0.6875rem',
        '14px': '0.875rem',
        '22px': '1.375rem',
        '15px': '0.9375rem',
        '25px': '1.5625rem',
        '30px': '1.875rem',
        '35px': '2.188rem',
        '66px': '4.125rem',
        '188px': '11.75rem',
      },
      fontSize: {
        xsm: '0.9375rem',
        '22px': '1.375rem',
      },

      borderRadius: {
        '10px': '0.625rem',
      },

      flex: {
        '0auto': '0 0 auto',
      },
    },
  },
  plugins: [],
};
