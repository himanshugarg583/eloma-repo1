import "./globals.css";
import "swiper/css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { groupName } from "@/lib/data";

// Single typeface for the whole site. Mapped to BOTH --font-display and
// --font-sans so every `font-display` / `font-sans` / `font-serif` usage
// resolves to Inter (see tailwind.config.ts).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${groupName} — Building Global Businesses`,
    template: `%s | ${groupName}`
  },
  description:
    "Eloma Group is a global parent company building premium logistics, infrastructure, and supply-chain technology businesses across continents.",
  keywords: [
    "corporate group",
    "logistics",
    "infrastructure",
    "global services",
    "warehousing",
    "distribution",
    "supply chain"
  ],
  openGraph: {
    title: groupName,
    description:
      "Building global businesses with vision, scale, and excellence across industries.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/assset/New Eloma Group Logo/JPEG/Final Eloma Group icon blue.jpg",
    shortcut: "/assset/New Eloma Group Logo/JPEG/Final Eloma Group icon white.jpg",
    apple: "/assset/New Eloma Group Logo/JPEG/Final Eloma Group icon white.jpg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
