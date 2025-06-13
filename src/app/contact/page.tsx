import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'Ex-Port.netへのお問い合わせはこちらから。AI開発、WEB開発、ホームページ制作、写真撮影、映像制作に関するご相談を承ります。',
  openGraph: {
    title: 'お問い合わせ | Ex-Port.net',
    description: 'Ex-Port.netへのお問い合わせはこちらから。AI開発、WEB開発、ホームページ制作、写真撮影、映像制作に関するご相談を承ります。',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              プロジェクトのご相談やお見積もりなど、
              お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします。
            </p>
          </div>
        </div>
      </section>
      
      <Contact />
      
      <Footer />
    </main>
  )
}