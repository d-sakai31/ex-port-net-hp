'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline'

// カスタムSVGアイコン
const HomeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 9V20C3 20.5523 3.44772 21 4 21H9V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V21H20C20.5523 21 21 20.5523 21 20V9L12 2Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V16H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ServiceIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M19.4 15A1.65 1.65 0 0 0 21 13.09V10.91A1.65 1.65 0 0 0 19.4 9A1.65 1.65 0 0 0 17.73 7.5A3 3 0 0 0 15 4.06A1.65 1.65 0 0 0 13.09 3H10.91A1.65 1.65 0 0 0 9 4.6A1.65 1.65 0 0 0 7.5 6.27A3 3 0 0 0 4.06 9A1.65 1.65 0 0 0 3 10.91V13.09A1.65 1.65 0 0 0 4.6 15A1.65 1.65 0 0 0 6.27 16.5A3 3 0 0 0 9 19.94A1.65 1.65 0 0 0 10.91 21H13.09A1.65 1.65 0 0 0 15 19.4A1.65 1.65 0 0 0 16.5 17.73A3 3 0 0 0 19.94 15Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AboutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 3.13A4 4 0 0 1 16 10.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 3.13A4 4 0 0 0 8 10.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PortfolioIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="15" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 12L18 9L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ContactIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="8" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
)

const RocketIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L12 14L22 4L18 8L22 4L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 3L11 13L8.5 15.5L9.5 16.5L12 14L14 16L16.5 13.5L18 11L21 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8.5 15.5L9.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11.5 17.5L12.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const navigation = [
  { name: 'ホーム', href: '/', icon: HomeIcon },
  { name: 'サービス', href: '/#services', icon: ServiceIcon },
  { name: 'アバウト', href: '/about', icon: AboutIcon },
  { name: 'ポートフォリオ', href: '/portfolio', icon: PortfolioIcon },
  { name: 'お問い合わせ', href: '/contact', icon: ContactIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-lg border-b border-neutral-200/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-width flex items-center justify-between py-4" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="-m-1.5 p-1.5 group">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Ex-Port.net ロゴ"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-gradient group-hover:text-gradient-simple transition-all duration-300">
                Ex-Port.net
              </span>
            </div>
          </Link>
        </motion.div>
        
        <div className="flex lg:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="p-2.5 rounded-xl text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">メニューを開く</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="nav-link group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="btn-primary text-sm group flex items-center gap-2"
            >
              <RocketIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              お問い合わせ
            </Link>
          </motion.div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Ex-Port.net ロゴ"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                    <span className="text-2xl font-bold text-gradient">Ex-Port.net</span>
                  </div>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="p-2.5 rounded-xl text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">メニューを閉じる</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              
              <div className="mt-8 flow-root">
                <div className="space-y-3">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-neutral-900 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="pt-6 border-t border-neutral-200"
                  >
                    <Link
                      href="/contact"
                      className="btn-primary w-full flex items-center justify-center gap-2 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <RocketIcon className="w-4 h-4" />
                      お問い合わせ
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}