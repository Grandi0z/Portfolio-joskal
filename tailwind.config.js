/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'xs': '268px',
        'xls': '340px'
      },
      display: {
        math: 'math',
      },
      animation: {
        'text-slide-2': 'text-slide-2 2s cubic-bezier(0.83, 0, 0.17, 1) 1',
      },
      keyframes: {
        'text-slide-2': {
            '0%, 40%': {
                transform: 'translateY(0%)',
            },
            '50%, 90%': {
                transform: 'translateY(-33.33%)',
            },
            '100%': {
                transform: 'translateY(-66.66%)',
                animationTimingFunction: 'steps(1, end)',
            },
        },
      },
    },

  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

