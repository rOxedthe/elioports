import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Elio | IT Officer & Digital Growth Portfolio",
  description:
    "Client-facing portfolio for Elio, an IT Head / Officer specializing in modern websites, SEO, SEM, AI workshops, and practical digital systems.",
  openGraph: {
    title: "Elio | IT Officer & Digital Growth Portfolio",
    description:
      "Future-facing portfolio featuring web projects, SEO/SEM wins, AI workshop work, and technical leadership.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
