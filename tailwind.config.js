/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        beige: '#EDE4D5',
        charcoal: '#171513',
        muted: '#6E6860',
        brass: '#A98245',
        earth: '#4B382A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}
