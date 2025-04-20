// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "berkeley-blue": "#042a57",
        moonstone: "#5eb1bf",
        "fluorescent-cyan": "#54f2f2",
        white: "#fcfcfc",
        maize: "#f4e04d",
      },
      backgroundImage: {
        "gradient-top":
          "linear-gradient(0deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-right":
          "linear-gradient(90deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-bottom":
          "linear-gradient(180deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-left":
          "linear-gradient(270deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-top-right":
          "linear-gradient(45deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-bottom-right":
          "linear-gradient(135deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-top-left":
          "linear-gradient(225deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-bottom-left":
          "linear-gradient(315deg, #042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
        "gradient-radial":
          "radial-gradient(#042a57, #5eb1bf, #54f2f2, #fcfcfc, #f4e04d)",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Adicionando a fonte Roboto
      },
    },
  },
  plugins: [],
};
