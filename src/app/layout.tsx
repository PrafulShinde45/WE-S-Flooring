import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WE'S Flooring PVT LTD",
  description: "Professional industrial flooring solutions including epoxy flooring, PU coatings, waterproofing, and specialized surface treatments for commercial and industrial applications.",
  keywords: "industrial flooring, epoxy flooring, PU flooring, waterproofing, floor coatings, commercial flooring, industrial coatings",
  authors: [{ name: "WE'S Flooring PVT LTD" }],
  creator: "WE'S Flooring PVT LTD",
  publisher: "WE'S Flooring PVT LTD",
  icons: [{ rel: 'icon', url: '/logo.png' }],
  openGraph: {
    title: "WE'S Flooring PVT LTD",
    description: "Professional industrial flooring solutions including epoxy flooring, PU coatings, waterproofing, and specialized surface treatments for commercial and industrial applications.",
    url: "https://wesflooring.com",
    siteName: "WE'S Flooring PVT LTD",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WE'S Flooring PVT LTD",
    description: "Professional industrial flooring solutions including epoxy flooring, PU coatings, waterproofing, and specialized surface treatments for commercial and industrial applications.",
    images: ["/logo.png"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
