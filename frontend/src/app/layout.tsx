import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unicorn of One - Build a Billion Dollar Business Solo',
  description: 'Radical focus methodology and AI leverage for exponential growth. One Person. One Vision. $1 Billion Impact.',
  keywords: ['unicorn startup', 'solopreneur', 'billion dollar business', 'AI productivity', 'exponential growth'],
  authors: [{ name: 'Utlyze' }],
  openGraph: {
    title: 'Unicorn of One - Build a Billion Dollar Business Solo',
    description: 'Radical focus methodology and AI leverage for exponential growth',
    url: 'https://unicornofone.ai',
    siteName: 'Unicorn of One',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Unicorn of One',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unicorn of One - Build a Billion Dollar Business Solo',
    description: 'Radical focus methodology and AI leverage for exponential growth',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}