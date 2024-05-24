import { createTheme } from "@mui/material/styles";

// x|s, extra-small: 0px
// s|m, small: 600px
// m|d, medium: 900px
// l|g, large: 1200px
// x|l, extra-large: 1536px

export let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 903,
      desktop: 1131,
      monitor: 1551,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5FBF77",
      light: "#3de39e",
      contrastText: "#fff",
    },
    info: {
      main: "#fff",
      contrastText: "#000",
    },
    grey: {
      100: "#CFCFE4",
    },
  },
  typography: {
    fontFamily: `"NunitoRegular", sans-serif`,
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
