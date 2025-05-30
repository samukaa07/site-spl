/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7bc7fd',
          400: '#36aef8',
          500: '#0e96e9',
          600: '#0077c7',
          700: '#0062a3',
          800: '#1e40af',
          900: '#0a2463',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};