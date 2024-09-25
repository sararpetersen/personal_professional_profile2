/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "font-color": "#f5f5f5",
        "font-color_dark": "#171717",
        "bg-color": "#171717",
        "bg-color_dark": "#2f2f2f",
        "hover-header": "#464646",
        "hover-header_dark": "#2f2f2f",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
