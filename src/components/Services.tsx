'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  CpuChipIcon, 
  CodeBracketIcon, 
  GlobeAltIcon,
  CameraIcon,
  VideoCameraIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import { ComponentType } from 'react'

const services = [
  {
    name: 'AIシステム開発',
    description: '機械学習、深層学習を活用した最先端のAIシステムを開発。業界に応じたカスタムソリューションを提供します。',
    icon: CpuChipIcon,
    emoji: '🤖',
    color: 'from-blue-500 to-cyan-500',
    features: ['機械学習モデル構築', 'データ分析・可視化', 'AI API開発', 'チャットボット開発'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API']
  },
  {
    name: 'WEB開発',
    description: 'モダンな技術スタックを使用し、高性能でスケーラブルなWebアプリケーションを開発します。',
    icon: CodeBracketIcon,
    emoji: '💻',
    color: 'from-green-500 to-emerald-500',
    features: ['React/Next.js開発', 'バックエンドAPI構築', 'データベース設計', 'クラウドインフラ構築'],
    technologies: ['React', 'Next.js', 'Node.js', 'AWS']
  },
  {
    name: 'ホームページ制作',
    description: 'SEO対策やレスポンシブデザインを重視した、効果的なホームページを制作します。',
    icon: GlobeAltIcon,
    emoji: '🌐',
    color: 'from-purple-500 to-violet-500',
    features: ['レスポンシブデザイン', 'SEO最適化', 'CMS構築', 'サイト運用サポート'],
    technologies: ['WordPress', 'Shopify', 'Figma', 'Google Analytics']
  },
  {
    name: '写真撮影',
    description: '商品撮影、ポートレート、イベント撮影など、様々なシーンに対応したプロフェッショナルな撮影サービス。',
    icon: CameraIcon,
    emoji: '📸',
    color: 'from-orange-500 to-amber-500',
    features: ['商品撮影', 'ポートレート撮影', 'イベント撮影', '画像レタッチ'],
    technologies: ['Canon EOS R5', 'Sony α7R IV', 'Adobe Lightroom', 'Photoshop']
  },
  {
    name: '映像制作',
    description: 'プロモーション動画、説明動画、ドキュメンタリーなど、目的に応じた高品質な映像を制作します。',
    icon: VideoCameraIcon,
    emoji: '🎬',
    color: 'from-red-500 to-pink-500',
    features: ['プロモーション動画', '商品紹介動画', 'ドキュメンタリー', '動画編集・加工'],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D']
  },
]

interface Service {
  name: string
  description: string
  icon: ComponentType<{ className?: string }>
  emoji: string
  color: string
  features: string[]
  technologies: string[]
}

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [10, -10])
  const rotateY = useTransform(mouseX, [-50, 50], [-10, 10])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="card floating-card relative overflow-hidden h-full"
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl text-white shadow-lg`}
              >
                <service.icon className="h-8 w-8" />
              </motion.div>
              <div>
                <div className="text-3xl mb-2">{service.emoji}</div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-gradient-simple transition-all duration-300">
                  {service.name}
                </h3>
              </div>
            </div>
            
            <motion.div
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </motion.div>
          </div>
          
          {/* Description */}
          <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wider">
              主要サービス
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group/item"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center"
                  >
                    <CheckIcon className="h-3 w-3 text-white" />
                  </motion.div>
                  <span className="text-sm text-neutral-700 group-hover/item:text-primary-600 transition-colors">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wider">
              使用技術
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full border border-primary-200 hover:bg-primary-100 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-neutral-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl" />
      
      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
          >
            <span className="text-lg">⚡</span>
            Our Services
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            私たちの
            <span className="text-gradient"> サービス</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            テクノロジーとクリエイティビティを融合させた幅広いサービスで、
            お客様のビジネス成長を包括的にサポートします。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="card-gradient p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              プロジェクトを始めませんか？
            </h3>
            <p className="text-lg text-neutral-600 mb-8">
              あなたのアイデアを現実に変える最適なソリューションをご提案します。
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <span>🚀</span>
                無料相談を始める
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}