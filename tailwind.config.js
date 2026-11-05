/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./news.html", "./startuplar.html", "./esyalar.html", "./roadmap.html", "./terms.html", "./privacy.html", "./about.html"],
  theme: {
    extend: {
      colors: {
        ink: "#17243a",
        muted: "#5c6878",
        orange: "#f47750",
        "orange-dark": "#e96540",
        "orange-strong": "#c2410c",
        "orange-strong-dark": "#9a3412",
        canvas: "#f8fafc",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
