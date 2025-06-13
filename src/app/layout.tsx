import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ex-port.net'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ex-Port.net - AI・WEB開発・映像制作 | 長野県長野市',
    template: '%s | Ex-Port.net'
  },
  description: 'Ex-Port.netは長野県長野市を拠点に、AI開発、WEB開発、ホームページ制作、写真撮影、映像制作など、最先端のデジタルソリューションを提供する総合IT企業です。',
  keywords: ['AI開発', 'WEB開発', 'ホームページ制作', '写真撮影', '映像制作', '長野県', '長野市', 'システム開発', 'DX支援', 'Next.js', 'React'],
  authors: [{ name: 'Ex-Port.net' }],
  creator: 'Ex-Port.net',
  publisher: 'Ex-Port.net',
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
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'Ex-Port.net',
    title: 'Ex-Port.net - AI・WEB開発・映像制作 | 長野県長野市',
    description: 'Ex-Port.netは長野県長野市を拠点に、AI開発、WEB開発、ホームページ制作、写真撮影、映像制作など、最先端のデジタルソリューションを提供する総合IT企業です。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ex-Port.net - AI・WEB開発・映像制作',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ex-Port.net - AI・WEB開発・映像制作',
    description: 'Ex-Port.netは長野県長野市を拠点に、最先端のデジタルソリューションを提供する総合IT企業です。',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}