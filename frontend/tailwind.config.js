/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#6b00ff",
                  
          "secondary": "#0076d9",
                  
          "accent": "#00bc00",
                  
          "neutral": "#211512",
                  
          "base-100": "#f9f9ff",
                  
          "info": "#00ffff",
                  
          "success": "#00a16c",
                  
          "warning": "#e4bf00",
                  
          "error": "#d30026",
                  },
                },
              ],
    },
  plugins: [require("daisyui")],
}

