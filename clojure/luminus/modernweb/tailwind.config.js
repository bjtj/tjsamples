/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  // in prod look at shadow-cljs output file in dev look at runtime, which will change files that are actually compiled; postcss watch should be a whole lot faster
  content: process.env.NODE_ENV == 'production' ? ["./target/public/js/app.js"] : [
    // "./src/cljs/**/*.cljs",
    "./target/cljsbuild/public/js/app.js",
    "./target/cljsbuild/public/js/cljs-runtime/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
