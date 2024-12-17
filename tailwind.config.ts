import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
        "5xl": "2100px",
      },
      colors: {
        primary: {
          "50": "#effaff",
          "100": "#def4ff",
          "200": "#b6eaff",
          "300": "#75dcff",
          "400": "#2cccff",
          "500": "#00adeb",
          "600": "#0092d4",
          "700": "#0074ab",
          "800": "#00628d",
          "900": "#065174",
          "950": "#04334d",
        },

        secondary: {
          "50": "#fafcea",
          "100": "#f3f8c9",
          "200": "#ebf296",
          "300": "#e6eb59",
          "400": "#e3e22c",
          "500": "#d3ca1f",
          "600": "#b6a218",
          "700": "#a18419",
          "800": "#795f1a",
          "900": "#674f1c",
          "950": "#3c2a0c",
        },

        terciary: {
          "50": "#fff0f0",
          "100": "#ffdddd",
          "200": "#ffc0c0",
          "300": "#ff9494",
          "400": "#ff5757",
          "500": "#ff2323",
          "600": "#ec0000",
          "700": "#d70000",
          "800": "#b10303",
          "900": "#920a0a",
          "950": "#500000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
