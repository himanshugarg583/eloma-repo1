import "./globals.css";

import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

import { Providers } from "./providers";
import { groupName } from "@/lib/data";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap"
});

const sans = Source_Sans_3({
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
    icon: "/assset/logo/icon-white.png",
    apple: "/assset/logo/icon-white.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
