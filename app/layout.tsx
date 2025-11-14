import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rosie’s Janitorial Services",
  description: "Professional janitorial cleaning services in Orange County.",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#9DE8AD",
  openGraph: {
    title: "Rosie’s Janitorial Services",
    description: "Professional cleaning services for homes and businesses.",
    url: "https://rosiesjanitorialoc.com",
    siteName: "Rosies Janitorial",
    locale: "en_US",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
