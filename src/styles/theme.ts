import { openSans, iceberg, inter, jetBrainsMono } from "@/app/layout";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  white: "#ffffff",
  black: "#141515",
  brand: {
    primary: "#660000",
    secondary: "#e78707",
    graya: "#292828",
    grayb: "#343435",
    lightsecondary: "#667085",
    dark: {
      100: "#000000",
      200: "#1e1e1e",
      300: "#2d2d2d",
      400: "#3c3c3c",
      500: "#4b4b4b",
      600: "#5a5a5a",
      700: "#696969",
      800: "#787878",
      900: "#878787",
      1000: "#D0D5DD",
    },
    accent: { 100: "#A7FF37", 900: "#426A00" },
    success: "#8ADD21",
    danger: "#DD2121",
  },
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  r: "1280px",
  xll: "1440px",
  "2xl": "1536px",
};

const fonts = {
  iceberg: iceberg.style.fontFamily,
  inter: inter.style.fontFamily,
  jetBrainsMono: jetBrainsMono.style.fontFamily
};

const styles = {
  global: () => ({
    html: {
      scrollBehaivor: "smooth",
    },
    body: {
      // fontFamily: '"Raleway", sans-serif',
      fontWeight: "400",
      background: "white",
      color: "black",
      transition: "all 0.2s ease-in-out",
      fontSize: "1rem",
    },
    button: {
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        outline: "none",
      },
    },
    a: {
      cursor: "pointer",
      padding: "unset",
      margin: "unset",
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        outline: "none",
      },
      textDecoration: "none",
    },
    img: {
      userSelect: "none",
    },
    select: {
      background: "none",
      boxShadow: "none",
      border: "none",
      hover: "unset",
      cursor: "pointer",
    },
  }),
};

export const theme = extendTheme({ styles, fonts, colors, breakpoints });
