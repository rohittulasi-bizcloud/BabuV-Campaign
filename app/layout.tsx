import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const canela = localFont({
  src: [
    {
      path: "../public/canela-font-family/Canela-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/canela-font-family/Canela-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/canela-font-family/Canela-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/canela-font-family/Canela-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-canela",
});

export const metadata: Metadata = {
  title: "Strong Schools. Bright Futures. | Babu Vekant for Frisco ISD",
  description:
    "Babu Vekant is running for Frisco ISD Board of Trustees to put students first, support teachers, partner with parents, and responsibly steward our schools. Learn more and get involved.",
  icons: {
    icon: "/Media/Favicon.svg",
  },
  keywords: [
    "Frisco ISD",
    "Board of Trustees",
    "school board",
    "Frisco Texas",
    "education",
    "students first",
    "Babu Vekant",
    "Babu for FISD",
  ],
  openGraph: {
    title: "Strong Schools. Bright Futures. | Babu Vekant for Frisco ISD",
    description:
      "Babu Vekant is running for Frisco ISD Board of Trustees to put students first, support teachers, and partner with parents.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#152238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${canela.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
