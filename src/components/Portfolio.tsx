'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = ['全て', 'AI開発', 'WEB開発', 'HP制作', '写真撮影', '映像制作']

const projects = [
  {
    id: 1,
    title: 'AIチャットボットシステム',
    category: 'AI開発',
    description: '自然言語処理を活用した高度なカスタマーサポート用チャットボット',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
  },
  {
    id: 2,
    title: 'Eコマースプラットフォーム',
    category: 'WEB開発',
    description: 'モダンなReact/Next.jsを使用したスケーラブルなECサイト',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'コーポレートサイト',
    category: 'HP制作',
    description: 'SEO最適化されたレスポンシブなコーポレートウェブサイト',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['WordPress', 'PHP', 'MySQL', 'SEO'],
  },
  {
    id: 4,
    title: '商品撮影プロジェクト',
    category: '写真撮影',
    description: '高級ブランドの商品カタログ用プロフェッショナル撮影',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    technologies: ['商品撮影', 'ライティング', 'レタッチ', 'カタログ制作'],
  },
  {
    id: 5,
    title: 'プロモーション動画',
    category: '映像制作',
    description: '企業ブランディング用の高品質プロモーション映像',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    technologies: ['動画撮影', '動画編集', 'モーショングラフィックス', 'サウンドデザイン'],
  },
  {
    id: 6,
    title: 'データ分析ダッシュボード',
    category: 'AI開発',
    description: 'リアルタイムデータ可視化と予測分析機能を持つダッシュボード',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('全て')

  const filteredProjects = activeCategory === '全て' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ポートフォリオ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            これまでに手がけた多様なプロジェクトをご紹介します。
            各分野での豊富な経験と実績をご確認ください。
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}