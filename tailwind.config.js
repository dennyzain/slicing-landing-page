module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-blue-path': "url('/bluepath.svg')",
        'hero-oval-path': "url('/oval.svg')",
        'hero-black': "url('/black-path.svg')",
        'hero-pink-path': "url('/path-3.svg')",
        'def-pink-path': "url('/path-4.svg')",
        'test-blue-path': "url('/oval-small.svg')",
        'quote-pink-path': "url('/path-5.svg')",
      },
      backgroundPosition: {
        'blue-path-pos-xl': '119px 0px',
        'blue-path-pos-sm': 'right 0px',
        'blue-oval-pos-xl': '430px 116px',
        'blue-oval-pos-sm': '-66px 140px',
        'pink-path-pos-xl': '939px bottom',
        'blue-test-oval-sm': '57px 273px',
        'blue-test-oval-xl': '263px 250px',
        'pink-quote-oval-sm': 'left 340px',
      },
    },
  },
  plugins: [],
};
