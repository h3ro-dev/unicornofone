import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unicornofone.ai"),
  title: "Unicorn of One — Build a Billion-Dollar Business Solo",
  description:
    "One Person. One Vision. $1 Billion Impact. Build and scale a billion-dollar business with AI-powered tools, radical focus methodology, and an elite community of solo founders.",
  keywords: [
    "unicorn",
    "solopreneur",
    "AI business",
    "billion dollar business",
    "solo founder",
    "startup",
    "Of One",
    "Utlyze",
  ],
  authors: [{ name: "Utlyze" }],
  openGraph: {
    title: "Unicorn of One — One Person. One Vision. $1 Billion Impact.",
    description:
      "Build and scale a billion-dollar business with AI-powered tools, radical focus methodology, and an elite community.",
    url: "https://unicornofone.ai",
    siteName: "Unicorn of One",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unicorn of One",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unicorn of One — One Person. One Vision. $1 Billion Impact.",
    description:
      "Build and scale a billion-dollar business solo with AI-powered tools and radical focus.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
