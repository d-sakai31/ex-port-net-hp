import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              私たちについて
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Ex-Port.netは、最新のテクノロジーとクリエイティブな発想で、
                お客様のビジネスを次のレベルへと導く総合デジタルソリューション企業です。
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">企業理念</h2>
                  <p className="text-gray-600 mb-4">
                    私たちは、テクノロジーの力でお客様の課題を解決し、
                    新たな価値を創造することを使命としています。
                  </p>
                  <p className="text-gray-600">
                    AIからウェブ開発、映像制作まで、幅広い技術領域をカバーし、
                    ワンストップでお客様のニーズにお応えします。
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">私たちの強み</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      最新AI技術を活用したシステム開発
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      モダンなウェブ技術による高品質な開発
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      クリエイティブな映像・写真制作
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      お客様に寄り添ったサポート体制
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}