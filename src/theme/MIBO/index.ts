import type { Theme } from "theme-ui";
import Colors from "./colors";
import baseTheme, { breakpointMap } from "./base";

const buttonBaseStyles = {
  padding: "10px 20px 10px 19px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
  "&&": {
    borderRadius: "15px",
  },
};

const Apeswap: Theme = {
  ...baseTheme,
  breakpoints: ["576px", "852px", "968px"],
  colors: Colors,
  text: {
    heading: {
      fontFamily: "poppins",
      fontWeight: "bold",
    },
    lg: { fontSize: 6, lineHeight: "33px" },
    md: { fontSize: 3, lineHeight: "24px" },
    sm: { fontSize: 1, lineHeight: "18px" },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      color: "text",
      bg: "background",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    nav: {
      breakpoints: [`@media screen and (min-width: ${breakpointMap.lg}px)`],
    },
    progress: {
      primary: "primary",
      color: "green",
      background: "#DAA628",
      height: "20px",
    },
    hr: {
      background: "dividerColor",
      height: "1px",
      border: "none",
    },
    h1: {
      variant: "text.heading",
      fontSize: "30px",
      lineHeight: "45px",
    },
    h2: {
      variant: "text.heading",
      fontSize: "25px",
      lineHeight: "37px",
    },
    h3: {
      variant: "text.heading",
      fontSize: "22px",
      lineHeight: "33px",
    },
    h4: {
      variant: "text.heading",
      fontSize: "20px",
      lineHeight: "30px",
    },
    h5: {
      variant: "text.heading",
      fontSize: "16px",
      lineHeight: "24px",
    },
    banner: {
      variant: "text.heading",
      fontWeight: "800",
      fontSize: "60px",
      lineHeight: "66px",
    },
  },
  forms: {
    input: {
      sm: {
        background: "white3",
        borderRadius: 10,
        height: "32px",
        width: "200px",
      },
      md: {
        background: "white3",
        borderRadius: 10,
        height: "36px",
        width: "200px",
      },
      lg: {
        background: "white3",
        borderRadius: 14,
        height: "48px",
        width: "200px",
      },
    },
    textarea: {
      padding: "10px 13px 10px 10px",
      borderRadius: "normal",
      border: "none",
      fontWeight: "normal",
      background: "lvl1",
      resize: "none",
      color: "textareaColor",
      "&:focus": {
        outline: "none !important",
      },
    },
    checkbox: {
      background: "lvl1",
      borderRadius: "5px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "lvl2",
      boxShadow: "none",
      outline: "none",
      appearance: "none",
      width: "inherit",
      height: "inherit",
      margin: "0px",
      cursor: "pointer",
      "& + svg": {
        display: "none",
        position: "absolute",
        pointerEvents: "none",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
      },
      "&:checked ": {
        background: "radial-gradient(100% 100% at 53.13% 0%, #31e7fa 0%, #4477ff 52.6%, #74cdff 100%)",
        borderColor: "transparent",
        "& + svg": {
          display: "block",
        },
      },
      "&:focus:not(:checked)": {
        outline: "none",
        boxShadow: "none",
      },
      "&:focus": {
        outline: "none",
        boxShadow: "0px 0px 0px 1px #000, 0px 0px 0px 4px rgb(255, 255, 255, .4)",
      },
      "&:hover:not(:disabled):not(:checked)": {
        borderColor: "lvl1",
        boxShadow: "0px 0px 0px 1px #000, 0px 0px 0px 4px rgb(255, 255, 255, .4)",
      },
    },
    radio: {
      background: "lvl1",
      borderRadius: "50px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "lvl2",
      boxShadow: "none",
      outline: "none",
      appearance: "none",
      width: "inherit",
      height: "inherit",
      margin: "0px",
      cursor: "pointer",
      "& + span": {
        display: "none",
        position: "absolute",
        pointerEvents: "none",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "auto",
        backgroundColor: "radioChecked",
        borderRadius: "50px",
      },
      "&:checked ": {
        background: "radial-gradient(100% 100% at 53.13% 0%, #31e7fa 0%, #4477ff 52.6%, #74cdff 100%)",
        borderColor: "transparent",
        "& + span": {
          display: "block",
        },
      },
      "&:focus": {
        outline: "none",
        boxShadow: "0px 0px 0px 1px #000, 0px 0px 0px 4px rgb(255, 179, 0, .2)",
      },
      "&:hover:not(:disabled):not(:checked)": {
        borderColor: "#f8f8fc",
      },
    },
    label: {
      inline: {
        display: "inline-flex",
        alignItems: "center",
        columnGap: 2,
      },
    },
  },
  borders: {
    primaryButton: "3px solid #000",
    buttonGradient: "radial-gradient(100% 100% at 53.13% 0%, #31e7fa 0%, #4477ff 52.6%, #74cdff 100%)",
    primaryBtnDisable: "3px solid transparent",
    secondaryButton: "3px solid #000",
    secondaryButtonDisable: "3px solid #FDFBF5",
    mode: {
      dark: {
        secondaryButtonDisable: "3px solid #F9F4E7",
      },
    },
  },
  buttons: {
    primary: {
      ...buttonBaseStyles,
      background: "radial-gradient(100% 100% at 53.13% 0%, #31e7fa 0%, #4477ff 52.6%, #74cdff 100%)",
      border: "transparent",
      color: "primaryBright",

      "&:disabled": {
        cursor: "not-allowed",
        background: "white",
        border: "solid 1px rgba(10, 33, 65, 0.05)",
        color: "#ccc",
        fontWeight: "600",
        // boxShadow: "0px 2px 4px #7e8eb11f"
      },

      "&:hover": {
        "&:not([disabled])": {
          borderColor: "hoveredPink",
          background: "hoveredPink",
        },
        "&:disabled": {},
      },
    },
    secondary: {
      ...buttonBaseStyles,
      background: "#183b56",
      color: "#fff",
      border: "solid 1px #183b56",
      fontWeight: "600",

      "&:disabled": {
        cursor: "not-allowed",
        background: "",
        color: "#ccc",
        fontWeight: "600",
      },

      "&&:hover": {
        "&:not([disabled])": {
          borderColor: "black",
          background: "black",
        },
        "&:disabled": {},
      },
    },
    tertiary: {
      ...buttonBaseStyles,
      background: "transparent",
      border: "none",
      color: "text",
      fontWeight: "600",
      boxShadow: "0px 2px 4px #7e8eb11f",

      "&:disabled": {
        cursor: "not-allowed",
        background: "transparent",
        border: "solid 1px rgba(10, 33, 65, 0.05)",
        color: "#ccc",
        fontWeight: "600",
      },

      "&&:hover": {
        "&:not([disabled])": {
          borderColor: "black",
          background: "black",
          color: "#fff"
        },
        "&:disabled": {},
      },
    },
    text: {
      ...buttonBaseStyles,
      background: "transparent",
      color: "text",

      "&:hover": {
        "&:not([disabled])": {
          color: "black",
        },
        "&:disabled": {},
      },

      "&:disabled": {
        cursor: "not-allowed",
        background: "transparent",
        color: "primaryButtonDisable",
      },
    },
    success: {
      ...buttonBaseStyles,
      background: "success",
      color: "primaryBright",

      "&:disabled": {
        cursor: "not-allowed",
        background: "white3",
        color: "primaryButtonDisable",
      },

      "&:hover": {
        "&:not([disabled])": {
          background: "hoveredSuccess",
        },
        "&:disabled": {},
      },
    },
    danger: {
      ...buttonBaseStyles,
      background: "error",
      color: "primaryBright",

      "&:disabled": {
        cursor: "not-allowed",
        background: "white3",
        color: "primaryButtonDisable",
      },

      "&:hover": {
        "&:not([disabled])": {
          background: "hoveredDanger",
        },
        "&:disabled": {},
      },
    },
    circular: {
      width: "40px",
      height: "40px",
      background: "white3",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      cursor: "pointer",
      padding: "1px",
      transition: "all .3s linear",

      "&:hover": {
        filter: "brightness(85%)",
      },

      "&:active": {
        transform: "scale(0.9)",
      },
    },
  },
  cards: {
    primary: {
      background: "navbar",
      borderRadius: "normal",
    },
  },
};

export default Apeswap;
