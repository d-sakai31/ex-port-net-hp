import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ポートフォリオ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              これまでに手がけた様々なプロジェクトを、カテゴリー別にご紹介します。
              お客様のニーズに合わせたソリューションをご覧ください。
            </p>
          </div>
        </div>
      </section>
      
      <Portfolio />
      
      <Footer />
    </main>
  )
}