/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        button:{
          primary:"#5046e4",
          secondary:"#e0e7ff",
          textSecondary:"#5046e4",
          tag:"#eff3ff",
          back:"#f9fbfc",
          alpha:"#5046e4",
          beta:"#383c48"
        },
        
      }
    },
  },
  plugins: [],
}

