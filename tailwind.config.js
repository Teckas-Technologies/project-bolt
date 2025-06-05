/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(240, 253, 244)',
          100: 'rgb(220, 252, 231)',
          200: 'rgb(187, 247, 208)',
          300: 'rgb(134, 239, 172)',
          400: 'rgb(74, 222, 128)',
          500: 'rgb(var(--color-primary) / <alpha-value>)',
          600: 'rgb(22, 163, 74)',
          700: 'rgb(21, 128, 61)',
          800: 'rgb(22, 101, 52)',
          900: 'rgb(20, 83, 45)',
          950: 'rgb(5, 46, 22)',
        },
        secondary: {
          50: 'rgb(239, 246, 255)',
          100: 'rgb(219, 234, 254)',
          200: 'rgb(191, 219, 254)',
          300: 'rgb(147, 197, 253)',
          400: 'rgb(96, 165, 250)',
          500: 'rgb(var(--color-secondary) / <alpha-value>)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
          800: 'rgb(30, 64, 175)',
          900: 'rgb(30, 58, 138)',
          950: 'rgb(23, 37, 84)',
        },
        accent: {
          50: 'rgb(255, 247, 237)',
          100: 'rgb(255, 237, 213)',
          200: 'rgb(254, 215, 170)',
          300: 'rgb(253, 186, 116)',
          400: 'rgb(251, 146, 60)',
          500: 'rgb(var(--color-accent) / <alpha-value>)',
          600: 'rgb(234, 88, 12)',
          700: 'rgb(194, 65, 12)',
          800: 'rgb(154, 52, 18)',
          900: 'rgb(124, 45, 18)',
          950: 'rgb(67, 20, 7)',
        },
        success: {
          500: 'rgb(var(--color-success) / <alpha-value>)',
        },
        warning: {
          500: 'rgb(var(--color-warning) / <alpha-value>)',
        },
        error: {
          500: 'rgb(var(--color-error) / <alpha-value>)',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neumorphic': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
        'neumorphic-dark': '20px 20px 60px #151515, -20px -20px 60px #353535',
      },
    },
  },
  plugins: [],
};