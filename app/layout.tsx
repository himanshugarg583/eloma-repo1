import "./globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { Providers } from "./providers";
import { groupName } from "@/lib/data";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: groupName,
    template: `%s | ${groupName}`
  },
  description:
    "Premium global group building logistics, infrastructure, and technology at scale.",
  keywords: [
    "corporate group",
    "logistics",
    "infrastructure",
    "global services",
    "warehousing",
    "distribution"
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
