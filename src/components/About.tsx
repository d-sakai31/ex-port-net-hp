'use client'

import { motion } from 'framer-motion'
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    name: 'イノベーション',
    description: '最新技術を活用し、常に革新的なソリューションを提供します。',
    icon: LightBulbIcon,
  },
  {
    name: 'スピード',
    description: '迅速な対応とアジャイルな開発プロセスで、お客様の時間を大切にします。',
    icon: RocketLaunchIcon,
  },
  {
    name: 'チームワーク',
    description: '多様な専門知識を持つメンバーが連携し、最高の成果を生み出します。',
    icon: UserGroupIcon,
  },
  {
    name: '信頼性',
    description: '高品質なサービスと継続的なサポートで、長期的な信頼関係を築きます。',
    icon: ShieldCheckIcon,
  },
]

export default function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              テクノロジーで未来を切り拓く
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ex-Port.netは、AIからWeb開発、映像制作まで幅広い分野で専門性を持つ
              プロフェッショナル集団です。お客様のビジネス課題を深く理解し、
              最適なソリューションを提供することで、共に成長していくことを目指しています。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">要件定義・分析</h3>
                  <p className="text-gray-600">お客様のニーズを詳細にヒアリングし、最適なソリューションを設計します。</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">開発・制作</h3>
                  <p className="text-gray-600">最新技術とベストプラクティスに基づいて、高品質な成果物を提供します。</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">運用・サポート</h3>
                  <p className="text-gray-600">継続的なメンテナンスとサポートで、長期的な成功をお約束します。</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{value.name}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}