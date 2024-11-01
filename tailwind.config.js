/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE6E6',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF6B6B',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        secondary: {
          50: '#E6FFF9',
          100: '#CCFFF4',
          200: '#99FFE8',
          300: '#66FFDD',
          400: '#33FFD1',
          500: '#4ECDC4',
          600: '#00CC99',
          700: '#009973',
          800: '#00664D',
          900: '#003326',
        },
        accent: {
          50: '#FFF9E6',
          100: '#FFF4CC',
          200: '#FFE899',
          300: '#FFDD66',
          400: '#FFD133',
          500: '#FFE66D',
          600: '#CCA300',
          700: '#997A00',
          800: '#665200',
          900: '#332900',
        },
        pop: {
          orange: '#FF8C42',
          pink: '#FF5E78',
          yellow: '#FFE66D',
          cyan: '#4ECDC4',
          blue: '#45B7D1',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rainbow': 'rainbow-text 3s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'pop-up': 'popUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'rainbow-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
        },
        popUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};