import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ex-Port.net - AIシステム開発・WEB開発・映像制作',
  description: 'AIシステム開発、WEB開発、ホームページ制作、写真撮影、映像制作を手がける総合デジタルソリューション企業です。',
  keywords: 'AI開発, WEB開発, ホームページ制作, 写真撮影, 映像制作, システム開発',
  openGraph: {
    title: 'Ex-Port.net - AIシステム開発・WEB開発・映像制作',
    description: 'AIシステム開発、WEB開発、ホームページ制作、写真撮影、映像制作を手がける総合デジタルソリューション企業です。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}