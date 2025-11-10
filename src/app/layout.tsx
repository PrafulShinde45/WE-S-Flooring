import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

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
  title: "We's Flooring & Interior Design",
  description: "Transform your space with premium craftsmanship and style. Specializing in hardwood, vinyl, laminate, and marble flooring.",
  keywords: "flooring, interior design, hardwood, vinyl, laminate, marble, luxury flooring",
  authors: [{ name: "We's Flooring & Interior Design" }],
  creator: "We's Flooring & Interior Design",
  publisher: "We's Flooring & Interior Design",
  openGraph: {
    title: "We's Flooring & Interior Design",
    description: "Transform your space with premium craftsmanship and style.",
    url: "https://wesflooring.com",
    siteName: "We's Flooring & Interior Design",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", // Placeholder OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We's Flooring & Interior Design",
    description: "Transform your space with premium craftsmanship and style.",
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7"],
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
      </body>
    </html>
  );
}
