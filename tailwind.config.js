module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
