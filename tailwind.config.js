/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        sand: '#D9C7AA',
        atlantic: '#6F8FA3',
        sage: '#7C8C74',
        terracotta: '#A65F3D',
        night: '#1D2B34',
        stone: '#D8D6CF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(29, 43, 52, 0.12)',
        lift: '0 18px 42px rgba(29, 43, 52, 0.16)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 12% 16%, rgba(166,95,61,.12), transparent 24%), radial-gradient(circle at 88% 10%, rgba(111,143,163,.16), transparent 26%), linear-gradient(135deg, #F7F3EC 0%, #EFE5D6 100%)',
      },
    },
  },
  plugins: [],
};
