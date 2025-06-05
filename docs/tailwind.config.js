/** 
 * Tailwind CSS Configuration for Unicorn of One
 * This configuration extends Tailwind with our design system tokens
 */

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
          DEFAULT: '#4169E1',
          light: '#5A7FE8',
          dark: '#2952D4',
          50: '#E6EBFB',
          100: '#E6EBFB',
          200: '#BCC9F5',
          300: '#92A7EE',
          400: '#6985E8',
          500: '#4169E1',
          600: '#3254C4',
          700: '#253F97',
          800: '#192A6A',
          900: '#0C153D',
        },
        accent: {
          DEFAULT: '#8E44AD',
          light: '#A159BE',
          dark: '#7B3A96',
          50: '#F4E9F8',
          100: '#F4E9F8',
          200: '#E2C8EC',
          300: '#D0A7E0',
          400: '#BE86D4',
          500: '#8E44AD',
          600: '#7A3A96',
          700: '#5D2C73',
          800: '#401F50',
          900: '#23112D',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Lexend', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.25' }],
        '6xl': ['3.75rem', { lineHeight: '1.25' }],
        '7xl': ['4.5rem', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'primary': '0 4px 15px rgb(65 105 225 / 0.3)',
        'primary-lg': '0 6px 20px rgb(65 105 225 / 0.4)',
        'accent': '0 4px 15px rgb(142 68 173 / 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4169E1 0%, #8E44AD 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #8E44AD 0%, #4169E1 100%)',
        'gradient-light': 'linear-gradient(135deg, #E6EBFB 0%, #F4E9F8 100%)',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
      },
    },
  },
  plugins: [
    // Add custom plugin for design system utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(135deg, #4169E1 0%, #8E44AD 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
        '.backdrop-blur-nav': {
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
        },
        '.glow': {
          'box-shadow': '0 0 20px rgb(65 105 225 / 0.3), 0 0 40px rgb(65 105 225 / 0.2), 0 0 60px rgb(65 105 225 / 0.1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}