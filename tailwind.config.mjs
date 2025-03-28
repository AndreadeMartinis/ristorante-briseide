/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        primaryTransparent: "var(--primary-transparent)",
        secondary: "var(--secondary-color)",
        secondaryTransparent: "var(--secondary-transparent)",
        grayColor: "var(--gray-color)",
        backgroundNav: "var(--background-nav)",
        backgroundNavTrans: "var(--background-nav-trans)",
        textColor: "var(--text-color)",
      },
      fontFamily: {
        text: "var(--font-text)",
        cursive: "var(--font-cursive)",
        menuRow: "var(--font-menu-row)",
      },
    },
  },
};
