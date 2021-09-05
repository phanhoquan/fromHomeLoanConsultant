import { createTheme } from "@material-ui/core/styles"

// generate color accents: http://scg.ar-ch.org/
const palette = {
  blue: "#ecf2fb", // default blue
  blue1: "#0065ff",
  blue2: "#ebf3ff",

  black1: "#212121", // default black

  white: "#ffffff",
  white2: "#f4f4f4",
  white3: "#fcfcfc", // default white

  red2: "#cc0133",
  yellow2: "#ffc413",
  green2: "#00865a",

  grey: "#989898",
  grey1: "#e5e5e5",
}

// custom colors
const color = {
  ...palette,

  primary: palette.blue1,
  secondary: palette.grey1,
  error: palette.red2,
  warning: palette.yellow2,
  success: palette.green2,
}

// custom spacings margins and paddings
const spacing = {
  xxs: "1px",
  xs: "2px",
  s: "4px",
  m: "8px",
  l: "16px",
  xl: "32px",
  xxl: "64px",
}

const deviceWidth = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
}

const font = {
  regular: "Rubik Regular",
  bold: "Rubik Bold",
}

const fontSize = {
  xxl: "28px",
  xl: "20px",
  l: "15px",
  m: "13px",
  s: "10px",
  xs: "10px",
}

// Material UI theme
const mui = createTheme({
  typography: {
    fontFamily: font.regular,
    htmlFontSize: parseInt(fontSize.m),
    h6: {
      fontSize: fontSize.l,
    },
    body1: {
      fontSize: fontSize.m,
      lineHeight: "24px",
    },
    body2: {
      fontSize: fontSize.s,
      lineHeight: "16px",
    },
    button: {
      fontSize: fontSize.m,
    },
  },
  palette: {
    common: {
      white: color.white,
    },
    background: {
      default: color.white2,
      paper: color.white3,
    },

    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
      contrastText: color.black1,
    },
    error: {
      main: color.error,
    },
    warning: {
      main: color.warning,
    },
    success: {
      main: color.success,
    },
  },
  shape: {
    borderRadius: 1,
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        height: 0,
        fontSize: fontSize.m,
        backgroundColor: color.white,
      },
      adornedEnd: {
        backgroundColor: color.white,
      },
      root: {
        width: "100%",
      },
    },
    MuiSelect: {
      selectMenu: {
        height: 0,
        display: "flex",
        alignItems: "center",
        minHeight: 0,
      },
      iconOutlined: {
        height: "1.5em",
        width: "1.5em",
      },
    },
    MuiPaper: {
      root: {
        marginBottom: spacing.l,
      },
    },
  },
})

// combine all theme objects into one, make sure there are no name conflicts
// with the Material UI theme properties, since they all share the same object
export const theme = {
  color,
  spacing,
  deviceWidth,
  font,
  fontSize,
  mui,
}
