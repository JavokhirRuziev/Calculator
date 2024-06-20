import { createTheme } from "@mui/material/styles";

// x|s, extra-small: 0px
// s|m, small: 600px
// m|d, medium: 900px
// l|g, large: 1200px
// x|l, extra-large: 1536px

export let theme = createTheme({
  breakpoints: {
    values: {
      sm: 0,
      md: 903,
      lg: 1131,
      xl: 1551,
    },
  },
  palette: {
    primary: {
      main: "#454a4d",
    },
    secondary: {
      main: "#FEA00F",
    },
    info: {
      main: "#67675c",
    },
    warning: {
      main: "#fcd79d",
    },
  },

  typography: {
    fontFamily: `"NunitoBold", sans-serif`,
  },
  shadows: ["none", "0px 10px 13px -4px #23235F30"],
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        fixed: true,
        maxWidth: "xl",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: `"NunitoBold", sans-serif`,
          fontWeight: "bold",
          fontSize: "18px",
          padding: "10px",
          borderRadius: 0,
          border: "0.5px solid black",
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          padding: "24px",
          maxWidth: "100%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: 18,
          fontFamily: `"NunitoExtraBold", sans-serif`,
        },
      },
    },
  },
});
