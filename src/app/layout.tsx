import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gravixel Digital Solutions | Web Development & Digital Marketing Agency",
  description: "Transform your business with Gravixel Digital Solutions. Expert web development, mobile apps, UI/UX design, digital marketing, and cloud integration services. Innovative solutions for modern businesses.",
  keywords: "web development, digital marketing, mobile apps, UI/UX design, cloud integration, e-commerce solutions, digital transformation, Gravixel",
  authors: [{ name: "Gravixel Digital Solutions" }],
  creator: "Gravixel Digital Solutions",
  publisher: "Gravixel Digital Solutions",
  openGraph: {
    title: "Gravixel Digital Solutions | Digital Innovation & Web Development",
    description: "Leading digital transformation with innovative web solutions, mobile applications, and cutting-edge technology services.",
    type: "website",
    locale: "en_US",
    siteName: "Gravixel Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravixel Digital Solutions | Digital Innovation",
    description: "Transform your business with our expert digital solutions and web development services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    </html>
  );
}
