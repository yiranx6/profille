module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'backgroundImageTest' : "url('https://images7.alphacoders.com/347/347549.jpg')",
        'school': "url('https://s.abcnews.com/images/US/usc-campus_hpMain_20211021-214640_16x9_992.jpg')",
        'placeholder' : "url('https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png')",
        'fullStack' : "url('https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg')",
        
      },
      transitionDelay:{
        '1100': '1100ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionDuration:{
        '1200': '1200ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      boxShadow:{
        'left':'-25px 20px 15px 10px rgb(0 0 0 /0.15)'
      }
      
    },
  },
  plugins: [],
}
