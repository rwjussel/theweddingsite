import bgImage from "../images/hexbackground.svg"

const theme = Object.freeze({
  fonts: {
    main: "'Montserrat', sans-serif",
    heading: "'Great Vibes', cursive"
  },
  colors: {
    primary: "#C78E3A",
    secondary: "#1D2951",
    gradient: "linear-gradient(180deg, #009efd 0%, #2af598  100%)",
    light: "#F7E7CE"
  },
  footer: {
    height: "16rem"
  },
  images:{
    background: {bgImage},
  }
});

export default theme;
