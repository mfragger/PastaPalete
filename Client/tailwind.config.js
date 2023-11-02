/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {
      height: {
        '26rem':'26rem',
        '28rem':'28rem',
      },
      width:{
        '440px' : '440px',
        '460px' : '460px',
      },
      objectPosition: {
        'center-n48px': 'center -48px',
      },
      fontFamily:{
        source:['source-serif-pro', 'serif'],
        libre:['libre-franklin', 'sans-serif'],
        averia:['Averia Serif Libre', 'serif'],
        work: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        'pp-5xl': '46px',
        'pp-4xl': '32px',
        'pp-3xl': '28px',
        'pp-2xl': '26px',
        'pp-xl': '24px',
        'pp-l': '18px',
        'pp-base': '16px',
        'pp-sm':'12px',
        'pp-xsm': '10px',
      },
      screens: {
          'xsm' : '533px',
          '2xsm' : '444px'
      },
      colors: {
        'pasta-palete-yellow': '#FAF3D4',
        'pasta-palete-black': '#231F20',
        'pasta-palete-orange': '#E3B746',
        'pasta-palete-yellow-2': '#EDB72D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
],
}

