/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      borderWidth: {
        "1":"1px",
      },
      height: {
        '26rem':'26rem',
        '28rem':'28rem',
        '32rem':'32rem',
        '300px':'300px',
        '611px':'611px',
        '675px': '675px'
      },
      width:{
        '400px':'400px',
        '440px' : '440px',
        '450px' : '450px',
        '460px' : '460px',
        '480px' : '480px',
      },
      objectPosition: {
        'center-n48px': 'center -48px',
        'center-n225px': 'center -225px',
        'center-n300px': 'center -300px',
        'bottom-p30px': 'bottom 30px'
      },
      fontFamily:{
        source:['source-serif-pro', 'serif'],
        libre:['libre-franklin', 'sans-serif'],
        averia:['Averia Serif Libre', 'serif'],
        work: ['Work Sans', 'sans-serif'],
        open:['Open Sans', 'sans-serif']
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
          '2xsm' : '444px',
          '3xsm' : '361px',
      },
      padding: {
        '58px' : '58px',
        '100px': '100px'
      },
      spacing: {
        '1px': '1px',
        '28px': '28px'
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

