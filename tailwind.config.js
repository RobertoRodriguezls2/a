module.exports = {
  content: [ "./src/**/*.{html,js,jsx}"],
  
  
  theme: {
    themes: ["light"],
    
    extend: {
      colors: {
        'sky-blue': '#CAEBF2',
        'carbon': '#A9A9A9',
        'watermelon': '#FF3B3F',
        'neutral': '#EFEFEF'
      }
      
    },
    
  },
  plugins: [require("daisyui")],

  
}
