/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      black: "#02111b",
      white: "#f7f5fb",
      yellow: "#f3f9d2",
    },
    extend: {
      gridTemplateRows: {
        layout: "100px 1fr 50px",
      },
    },
  },
  plugins: [],
};
