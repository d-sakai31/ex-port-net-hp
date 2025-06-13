'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronRightIcon, SparklesIcon, RocketLaunchIcon, BoltIcon } from '@heroicons/react/24/outline'
import { useRef, useEffect, useState } from 'react'

const FloatingElement = ({ delay = 0, className = "" }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  />
)

const TypewriterText = ({ text = "", speed = 100 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return <span>{displayText}<span className="animate-pulse">|</span></span>
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative overflow-hidden hero-background min-h-screen flex items-center pt-20">
      {/* Animated background elements */}
      <FloatingElement 
        delay={0}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-xl"
      />
      <FloatingElement 
        delay={2}
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-xl"
      />
      <FloatingElement 
        delay={4}
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full blur-xl"
      />

      <motion.div style={{ y, opacity }} className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <SparklesIcon className="h-6 w-6 text-primary-600" />
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Innovation Meets Excellence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block"
              >
                デジタルの力で
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-gradient font-black"
              >
                <TypewriterText text="未来を創造" speed={150} />
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-neutral-600 leading-relaxed mb-10"
            >
              Ex-Port.netは、AIシステム開発、WEB開発、ホームページ制作、写真撮影、映像制作を通じて、
              お客様のビジネスを次のレベルへと導きます。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center group"
              >
                <RocketLaunchIcon className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                お問い合わせ
                <ChevronRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/portfolio"
                className="btn-secondary inline-flex items-center justify-center group"
              >
                <BoltIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                ポートフォリオを見る
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { number: "100+", label: "プロジェクト実績", icon: "🚀" },
                { number: "50+", label: "満足いただいたお客様", icon: "⭐" },
                { number: "5", label: "サービス領域", icon: "🎯" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gradient-simple mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                rotate: [0, 1, -1, 0],
                scale: [1, 1.02, 1] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 card-gradient p-8 glow-on-hover"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="flex items-center space-x-4"
                >
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-red-500 rounded-full"
                  />
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                  />
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="text-neutral-500 text-sm font-mono">
                    ex-port.net
                  </span>
                </motion.div>
                
                <div className="font-mono text-sm space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-primary-600 font-semibold"
                  >
                    const <span className="text-neutral-700">services</span> = [
                  </motion.div>
                  
                  {[
                    'AI System Development',
                    'Web Development', 
                    'Website Creation',
                    'Photography',
                    'Video Production'
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + index * 0.2 }}
                      className="ml-4 text-neutral-600 hover:text-primary-600 transition-colors cursor-pointer"
                    >
                      &apos;<span className="font-medium">{service}</span>&apos;{index < 4 ? ',' : ''}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.4 }}
                    className="text-primary-600 font-semibold"
                  >
                    ];
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.6 }}
                    className="pt-4 text-secondary-600 font-semibold"
                  >
                    {/* <span className="text-neutral-600">Ready to transform your business?</span> */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating decoration elements */}
            <FloatingElement 
              delay={1}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-xl"
            />
            <FloatingElement 
              delay={3}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent-500/30 to-primary-500/30 rounded-full blur-xl"
            />
            
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-primary-200/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-secondary-200/20 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}