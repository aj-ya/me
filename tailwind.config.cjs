/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      black: "#02111b",
      jet: "#2f2f2f",
      cinnabar: "#ef3e36",
      blue: "#4357AD",
      white: "#f7f5fb",
      nyanza: "#E4DFDA",
    },
    extend: {
      gridTemplateRows: {
        layout: "60px 1fr 50px",
      },
      width: {
        content: "min(740px,100%)",
      },
    },
  },
  plugins: [],
};
