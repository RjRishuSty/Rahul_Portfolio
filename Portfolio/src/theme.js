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
      paper: "#950101",
      main: "#000",
    },
    text: {
      main: "#000",
      primary: "#00b300",
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
      main: "#3d0000",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#000000",
      paper: "#3d0000",
      main: "#fff",
    },
    text: {
      main: "#fff",
      primary: "#000000",
      secondary: "#e60000",
    },
    animation: {
      active: "#ffff00",
      hover: "#00cc00",
      icon: "#fff",
    },
  },
  ...commonSettings,
});
