/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4169E1', // Utlyze Blue
          50: '#E6EBFB',
          100: '#C2CEF5',
          200: '#9AAEED',
          300: '#728EE5',
          400: '#5477DE',
          500: '#4169E1',
          600: '#3055C7',
          700: '#2641A3',
          800: '#1C2F7F',
          900: '#121E5B',
        },
        accent: {
          DEFAULT: '#8E44AD', // Purple accent
          50: '#F3E9F7',
          100: '#E2C9EC',
          200: '#CFA5DF',
          300: '#BC81D2',
          400: '#A963C8',
          500: '#8E44AD',
          600: '#7A3A96',
          700: '#65317F',
          800: '#512768',
          900: '#3C1E51',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}