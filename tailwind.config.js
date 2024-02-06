/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login-page-background':"url('/images/loginBgImage.png')"
      },
      screens: {
        'sm': {'max':'930px'},
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
    },
    colors:{
      'purple':'#190019',
      'white':'#FBE4D8',
      'pink':'#DFB6B2',
      'dark-pink':"#854F6C",
      'pure-white':"#FFFFFF"
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

