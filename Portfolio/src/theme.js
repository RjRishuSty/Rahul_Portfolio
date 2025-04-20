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
      main: "#e60000",
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      default: "#FFFF",
      paper: "#ffffff",
    },
    text: {
      main: "#fff",
      primary: "#000000",
      secondary: "#3d0000",
    },
    animation: {
      active: "#ffff00",
      hover: "#00cc00",
      icon:'#000'
    },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#950101",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#000000",
      paper: "#FFF",
    },
    text: {
      main: "#fff",
      primary: "#000000",
      secondary: "#e60000",
    },
    animation: {
      active: "#ffff00",
      hover: "#00cc00",
      icon:'#fff'
    },
  },
  ...commonSettings,
});
