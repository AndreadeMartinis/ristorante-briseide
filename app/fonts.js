import { Montserrat, Playfair_Display, Tangerine } from "next/font/google";

export const fontText = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-text",
});

export const fontCursive = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cursive",
});
export const fontMenuRow = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-menu-row",
});
