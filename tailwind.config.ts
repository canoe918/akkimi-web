import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F2F6F8",
        wht: "#ffffff",
        transparent: "transparent",
      },
      spacing: {
        0: "0",
        2: "0.2rem",
        4: "0.4rem",
        6: "0.6rem",
        8: "0.8rem",
        10: "1rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2rem",
        22: "2.2rem",
        24: "2.4rem",
        26: "2.6rem",
        28: "2.8rem",
        30: "3.0rem",
        32: "3.2rem",
        34: "3.4rem",
        36: "3.6rem",
        38: "3.8rem",
        40: "4rem",
        44: "4.4rem",
        48: "4.8rem",
        52: "5.2rem",
        56: "5.6rem",
        60: "6.0rem",
        64: "6.4rem",
        68: "6.8rem",
        72: "7.2rem",
        76: "7.6rem",
        80: "8.0rem",
        84: "8.5rem",
        88: "8.8rem",
        92: "9.2rem",
        96: "9.6rem",
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
          // https://juyeol.tistory.com/30 > ios safari 확대 이슈 방지
          touchAction: "pan-y",
        },
        body: {
          fontSize: "1.4rem",
          color: theme("colors.d_point"),
          fontWeight: "400",
          lineHeight: "120%",
          userSelect: "none",
        },
      }),
        addComponents({
          ".text_10": {
            fontSize: "1rem",
            fontWeight: "400",
          },
          ".text_11": {
            fontSize: "1.1rem",
            fontWeight: "400",
          },
          ".text_12": {
            fontSize: "1.2rem",
            fontWeight: "400",
          },
          ".text_13": {
            fontSize: "1.3rem",
            fontWeight: "400",
          },
          ".text_14": {
            fontSize: "1.4rem",
            fontWeight: "400",
          },
          ".text_14_b": {
            fontSize: "1.4rem",
            fontWeight: "700",
          },
          ".text_16": {
            fontSize: "1.6rem",
            fontWeight: "400",
          },
          ".text_16_b": {
            fontSize: "1.6rem",
            fontWeight: "700",
          },
          ".text_18": {
            fontSize: "1.8rem",
            fontWeight: "400",
          },
          ".text_18_b": {
            fontSize: "1.8rem",
            fontWeight: "700",
          },
          ".text_22": {
            fontSize: "2.2rem",
            lineHeight: "120%",
            fontWeight: "400",
          },
          ".text_22_b": {
            fontSize: "2.2rem",
            lineHeight: "120%",
            fontWeight: "700",
          },
          ".text_12_b": {
            fontSize: "1.2rem",
            fontWeight: "700",
          },
          ".text_15_b": {
            fontSize: "1.5rem",
            fontWeight: "700",
          },
          ".text_20_b": {
            fontSize: "2.0rem",
            fontWeight: "700",
          },
          ".break-word": {
            wordBreak: "break-word",
          },
        });
    }),
  ],
};
export default config;
