import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '../components/layout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Unicorn of One - Build a Billion-Dollar Business Solo',
  description: 'Revolutionary methodology and AI-powered strategies to help solo founders build billion-dollar businesses without massive teams.',
  keywords: 'solo founder, unicorn, billion dollar business, AI productivity, startup methodology',
  authors: [{ name: 'Unicorn of One' }],
  openGraph: {
    title: 'Unicorn of One - Build a Billion-Dollar Business Solo',
    description: 'Revolutionary methodology and AI-powered strategies to help solo founders build billion-dollar businesses without massive teams.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Unicorn of One',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unicorn of One - Build a Billion-Dollar Business Solo',
    description: 'Revolutionary methodology and AI-powered strategies to help solo founders build billion-dollar businesses without massive teams.',
  },
  viewport: 'width=device-width, initial-scale=1',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}