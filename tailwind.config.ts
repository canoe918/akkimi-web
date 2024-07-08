import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "blue-gray-0": "#FFFFFF",
        "blue-gray-25": "#FCFCFD",
        "blue-gray-50": "#F9FAFB",
        "blue-gray-100": "#F2F4F7",
        "blue-gray-200": "#EAECF0",
        "blue-gray-300": "#D0D5DD",
        "blue-gray-400": "#98A2B3",
        "blue-gray-500": "#667085",
        "blue-gray-600": "#475462",
        "blue-gray-700": "#344054",
        "blue-gray-800": "#1D2939",
        "blue-gray-900": "#101828",
        "red-1": "#FFF1F0",
        "red-2": "#ffccc7",
        "red-3": "#ffa39e",
        "red-4": "#ff7875",
        "red-5": "#ff4d4f",
        "red-6": "#f5222d",
        "red-7": "#cf1322",
        "red-8": "#a8071a",
        "red-9": "#820014",
        "red-10": "#5c0011",
        "gold-1": "#fffbe6",
        "gold-2": "#fff1b8",
        "gold-3": "#ffe58f",
        "gold-4": "#ffd666",
        "gold-5": "#ffc53d",
        "gold-6": "#faad14",
        "gold-7": "#d48806",
        "gold-8": "#ad6800",
        "gold-9": "#874d00",
        "gold-10": "#613400",
        "green-1": "#f6ffed",
        "green-2": "#d9f7be",
        "green-3": "#b7eb8f",
        "green-4": "#95de64",
        "green-5": "#73d13d",
        "green-6": "#52c41a",
        "green-7": "#389e0d",
        "green-8": "#237804",
        "green-9": "#135200",
        "green-10": "#092b00",
        "geekblue-1": "#f0f5ff",
        "geekblue-2": "#d6e4ff",
        "geekblue-3": "#adc6ff",
        "geekblue-4": "#85a5ff",
        "geekblue-5": "#597ef7",
        "geekblue-6": "#2f54eb",
        "geekblue-7": "#1d39c4",
        "geekblue-8": "#10239e",
        "geekblue-9": "#061178",
        "geekblue-10": "#030852",
        transparent: "transparent",
      },
      spacing: {
        0: "0.0rem",
        2: "0.2rem",
        4: "0.4rem",
        6: "0.6rem",
        8: "0.8rem",
        10: "1.0rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2.0rem",
        22: "2.2rem",
        24: "2.4rem",
        26: "2.6rem",
        28: "2.8rem",
        30: "3.0rem",
        32: "3.2rem",
        34: "3.4rem",
        36: "3.6rem",
        38: "3.8rem",
        40: "4.0rem",
        42: "4.2rem",
        44: "4.4rem",
        46: "4.6rem",
        48: "4.8rem",
        50: "5.0rem",
        52: "5.2rem",
        54: "5.4rem",
        56: "5.6rem",
        58: "5.8rem",
        60: "6.0rem",
        62: "6.2rem",
        64: "6.4rem",
        66: "6.6rem",
        68: "6.8rem",
        70: "7.0rem",
        72: "7.2rem",
        74: "7.4rem",
        76: "7.6rem",
        78: "7.8rem",
        80: "8.0rem",
        82: "8.2rem",
        84: "8.4rem",
        86: "8.6rem",
        88: "8.8rem",
        90: "9.0rem",
        92: "9.2rem",
        94: "9.4rem",
        96: "9.6rem",
        98: "9.8rem",
        100: "10.0rem",
      },
      borderRadius: {
        sm: "0.4rem",
        DEFAULT: "0.8rem",
        lg: "1.6rem",
        xl: "2.4rem",
        half: "250px",
        full: "9999px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        html: {
          fontSize: "62.5%",
        },
      }),
        addComponents({
          ".heading1-b": {
            fontSize: "6rem",
            fontWeight: "700",
            lineHeight: "5.2rem",
            letterSpacing: "-4%",
          },
          ".heading2-b": {
            fontSize: "4.8rem",
            fontWeight: "700",
            lineHeight: "4.6rem",
            letterSpacing: "-4%",
          },
          ".heading3-b": {
            fontSize: "3.6rem",
            fontWeight: "700",
            lineHeight: "4.2rem",
            letterSpacing: "-4%",
          },
          ".heading4-b": {
            fontSize: "3.2rem",
            fontWeight: "700",
            lineHeight: "3.2rem",
            letterSpacing: "-4%",
          },
          ".heading5-b": {
            fontSize: "2.8rem",
            fontWeight: "700",
            lineHeight: "3.8rem",
            letterSpacing: "-4%",
          },
          ".heading6-b": {
            fontSize: "2.4rem",
            fontWeight: "700",
            lineHeight: "3.4rem",
            letterSpacing: "-4%",
          },
          ".headline-b": {
            fontSize: "2rem",
            fontWeight: "700",
            lineHeight: "2.8rem",
            letterSpacing: "-4%",
          },
          ".subhead3-b": {
            fontSize: "1.8rem",
            fontWeight: "700",
            lineHeight: "2.2rem",
            letterSpacing: "-4%",
          },
          ".subhead3-m": {
            fontSize: "1.8rem",
            fontWeight: "500",
            lineHeight: "2.2rem",
            letterSpacing: "-4%",
          },
          ".subhead2-b": {
            fontSize: "1.6rem",
            fontWeight: "700",
            lineHeight: "2.2rem",
            letterSpacing: "-4%",
          },
          ".subhead2-m": {
            fontSize: "1.6rem",
            fontWeight: "500",
            lineHeight: "2.2rem",
            letterSpacing: "-4%",
          },
          ".subhead1-b": {
            fontSize: "1.4rem",
            fontWeight: "700",
            lineHeight: "2rem",
            letterSpacing: "-4%",
          },
          ".subhead1-m": {
            fontSize: "1.4rem",
            fontWeight: "500",
            lineHeight: "2rem",
            letterSpacing: "-4%",
          },
          ".body3-r": {
            fontSize: "1.8rem",
            fontWeight: "400",
            lineHeight: "2.4rem",
            letterSpacing: "-4%",
          },
          ".body2-r": {
            fontSize: "1.6rem",
            fontWeight: "400",
            lineHeight: "2.4rem",
            letterSpacing: "-4%",
          },
          ".body1-r": {
            fontSize: "1.4rem",
            fontWeight: "400",
            lineHeight: "2.0rem",
            letterSpacing: "-4%",
          },
          ".caption-r": {
            fontSize: "1.2rem",
            fontWeight: "400",
            lineHeight: "1.8rem",
            letterSpacing: "-4%",
          },
          ".caption-b": {
            fontSize: "1.2rem",
            fontWeight: "700",
            lineHeight: "1.8rem",
            letterSpacing: "-4%",
          },
          ".caption-m": {
            fontSize: "1.2rem",
            fontWeight: "500",
            lineHeight: "1.8rem",
            letterSpacing: "-4%",
          },
        });
    }),
  ],
};
export default config;
