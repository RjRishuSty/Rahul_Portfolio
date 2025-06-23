import { createTheme } from "@mui/material/styles";

const commonSettings = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Poetsen One", sans-serif !important',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3398cc", // Blue from photo background
    },
    secondary: {
      main: "#CDDB1B", // Lime Green circle
    },
    background: {
      default: "#FFFFFF",
      main: "#E5E5E5", // Logo background gray
      primary: "#3398cc", // Same blue
    },
    text: {
      default: "#1C1C1C", // Shirt black
      main: "#2B2B2B",    // Logo black
      primary: "#fff", // Logo red
      secondary: "#C52C26"
    },
    animation: {
      active: "#CDDB1B",  // Active lime
      hover: "#2EA8D6",   // Cyan blue from stripes
      icon: "#2B2B2B",    // Logo black
    },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C52C26", // Logo red
    },
    secondary: {
      main: "#CDDB1B", // Lime circle
    },
    background: {
      default: "#1C1C1C", // Deep black from shirt
      main: "#2B2B2B",    // Logo black
      primary: "#000000",
    },
    text: {
      default: "#fff",   // White stripe
      main: "#fff",      // Highlight lime
      primary: "#000",
      secondary: "#2EA8D6", // Silver crown
    },
    animation: {
      active: "#CDDB1B",   // Active highlight
      hover: "#2EA8D6",    // Cyan stripe
      icon: "#FFFFFF",
    },
  },
  ...commonSettings,
});
 