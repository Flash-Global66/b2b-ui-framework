// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

export const tGlobalTheme = {
  extend: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      '8px': '8px',
      '13px': '13px',
    },
    zIndex: {
      100: 100,
    },
    borderRadius: {
      xl: '10px',
    },
    colors: {
      white: '#FFFFFF',
      blue: {
        1: '#2C4398',
        2: '#1433B4',
        3: '#2746C7',
        4: '#3F5EDF',
        5: '#869EFF',
        6: '#9DB0FF',
        7: '#4267B2',
        8: '#8891BD',
        9: '#6A75A9',
        10: '#CCD1EB',
        11: '#4F5694',
        12: '#6F75B8',
        13: '#8386C2',
      },
      gray: {
        1: '#343E68',
        2: '#4F5A95',
        3: '#5D6EB5',
        4: '#8B97CB',
        5: '#9AA5D3',
        6: '#B3BDE5',
        7: '#D7DCF0',
        8: '#E1E5F5',
        9: '#F4F6FE',
        10: '#F5F7FF',
        11: '#FAFBFF',
        12: '#ADADAD',
        13: '#9194A1',
        14: '#EAEDF8',
        15: '#BFBFBF',
        16: '#9C9C9C',
        17: '#EBEBEB',
        18: '#E4E8F6',
        19: '#475694',
      },
      green: {
        1: '#00B682',
        2: '#00C48C',
        3: '#01D196',
        4: '#7CDFC5',
        5: '#DDF2F3',
        6: '#E8F3E6',
        7: '#178406',
      },
      red: {
        1: '#FF647C',
        2: '#FFB1BD',
        3: '#FFEFF2',
        4: '#F6E6E6',
        5: '#A30101',
        6: '#EA596F',
      },
      yellow: {
        1: '#FFD153',
        2: '#FCE5A9',
        3: '#FFFAEE',
        4: '#F7F3E6',
        5: '#CA9400',
        6: '#B08A01',
        7: '#E9B72D',
        8: '#FCBB0A',
      },
    },
    minHeight: (theme) => ({
      ...theme('spacing'),
      '3/4': '75vh',
      '1/2': '50vh',
      '1/4': '25vh',
    }),
    minWidth: {
      '250px': '250px',
    },
    width: {
      fit: 'fit-content',
    },
    maxWidth: {
      '1/5': '20%',
    },
    scale: {
      101: '1.01',
      102: '1.02',
      103: '1.03',
      104: '1.04',
    },
    screens: {
      'md-lg': '950px',
      '3xl': '1900px',
    },
    borderWidth: {
      3: '3px',
    },
    boxShadow: {
      content: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      input: '0px 2px 10px rgba(0, 0, 0, 0.04)',
      input2: 'rgb(0 0 0 / 0.05) 0px 0px 0px 1px, 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      button: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      menu: '0px 4px 4px rgba(0, 0, 0, 0.22);',
      radio: '0px 2px 4px rgba(0, 0, 0, 0.05)',
      customDiverter: '0px 3px 10px rgba(0, 0, 0, 0.14)',
    },
  },
};

export const tGlobalVariants = {
  extend: {
    opacity: ['hover', 'focus', 'active', 'disabled'],
    backgroundColor: [
      'hover',
      'focus',
      'active',
      'disabled',
      'label-checked',
    ],
    borderColor: ['hover', 'focus', 'active', 'disabled'],
    textColor: ['hover', 'focus', 'active', 'disabled', 'label-checked'],
    cursor: ['hover', 'focus', 'active', 'disabled'],
    borderWidth: ['last'],
  },
};

export const tGlobalPlugins = [
  plugin(({ addVariant, e }) => {
    addVariant('label-checked', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const eClassName = e(`label-checked${separator}${className}`); // escape class
        const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
        return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
      });
    });
  }),
];