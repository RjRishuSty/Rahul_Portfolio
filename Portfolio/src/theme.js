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
      main: "#FFFFFF",
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      default: "#FFFFFF",
      main: "#000",
      primary: "#1eb997",
    },
    text: {
      default:'#ffff',
      main: "#000",
      primary: "#1eb997",
      secondary: "#333333"
    },
    animation: {
      active: "#ffff00",
      hover: "#00cc00",
      icon: "#000",
    },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4d0000",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#000000",
      main: "#fff",
      primary: "#4d0000",
    },
    text: {
      default:'#ffff',
      main: "#1eb997",
      primary: "#fff",
      secondary: "#fff"
    },
    animation: {
      active: "#ffff00",
      hover: "#00cc00",
      icon: "#fff",
    },
  },
  ...commonSettings,
});
