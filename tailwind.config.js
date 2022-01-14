module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      normal: "0",
      wider: ".05em",
      widest: ".25em",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    maxWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      width: {
        btn: "29%",
      },
      colors: {
        cyan: {
          strong: "hsl(172, 67%, 45%)",
          dark: "hsl(183, 100%, 15%)",
          dark_btn: "hsl(183, 60%, 25%)",
          dark_gray: "hsl(184, 14%, 56%)",
          light_gray: "hsl(189, 41%, 97%)",
          light_gray_f: "hsl(185, 41%, 84%)",
          title: "hsl(186, 14%, 43%)",
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
