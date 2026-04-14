/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: 'class', 
   theme: {
    maxWidth:{
      container:"1488px",
    },
   
    screens:{
      xs:"320px",
      sm:"375px",
      sml:"500px",
      md:"660px",
     
      lg:"667px",
      lgl:"1024px",
      xl:"1280px",
    },
    extend: {
backdropBlur: {
        'xs': '2px',
        '2xl': '40px', // تضبيب قوي جداً للزجاج
      },
      colors: {
        'glass-white': 'rgba(255, 255, 255, 0.03)', // لون أبيض خفيف جداً شفاف
        'main-purple': '#7c3aed', // لون الموف الصريح للزر
      },

    },
  },
  plugins: [],
}