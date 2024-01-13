module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          listStyleType: {      
            none: 'none',      
            disc: 'disc',      
            decimal: 'decimal',      
            square: 'square',      
            roman: 'upper-roman',    }
        },
        
      },
      "dark",
      "cupcake",
    ],
  
  },
  plugins: [require("daisyui")],
  
}