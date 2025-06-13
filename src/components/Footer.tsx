import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'ホーム', href: '/' },
    { name: 'アバウト', href: '/about' },
    { name: 'ポートフォリオ', href: '/portfolio' },
    { name: 'お問い合わせ', href: '/contact' },
  ],
  services: [
    { name: 'AIシステム開発', href: '/#services' },
    { name: 'WEB開発', href: '/#services' },
    { name: 'HP制作', href: '/#services' },
    { name: '写真撮影', href: '/#services' },
    { name: '映像制作', href: '/#services' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container-width section-padding">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Ex-Port.net
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              AIシステム開発、WEB開発、ホームページ制作、写真撮影、映像制作を手がける
              総合デジタルソリューション企業です。
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">メニュー</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">サービス</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">お問い合わせ</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-300">info@ex-port.net</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-300">080-6939-4131</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; 2024 Ex-Port.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}