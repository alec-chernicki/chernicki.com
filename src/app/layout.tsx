import type { Metadata } from "next";
import { Inter, EB_Garamond, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "./navigation";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Alec Chernicki",
  description: "Engineer building tools to scale large JavaScript projects.",
  openGraph: {
    title: "Alec Chernicki",
    description: "Egnineer building tools to scale large JavaScript projects.",
    images: [
      {
        url: "https://chernicki.com/og",
        width: 1200,
        height: 630,
        alt: "Photo of Alec Chernicki",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.variable} ${garamond.variable}`}>
        <Providers>
          <div className="mx-auto max-w-3xl py-8 md:py-12 font-sans px-6">
            <Navigation />
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
