/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        vestiora: {
          royalBlue: '#1D4ED8',
          softBlue: '#E7F0FF',
          silver: '#D1D5DB',
          smoke: '#F3F4F6',
          veryLightBlue: '#E7F0FF',
        },
      },
      boxShadow: {
        luxury: '0 20px 60px rgba(29,78,216,0.12), 0 2px 10px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

