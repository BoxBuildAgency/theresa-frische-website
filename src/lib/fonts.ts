import { Cormorant_Garamond, Inter } from "next/font/google";

// Display serif for headlines, with an italic for accent words.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// UI + body sans.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = `${cormorant.variable} ${inter.variable}`;
