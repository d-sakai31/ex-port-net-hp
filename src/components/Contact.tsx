'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    name: 'メール',
    value: 'info@ex-port.net',
    icon: EnvelopeIcon,
    href: 'mailto:info@ex-port.net',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: '電話',
    value: '080-6939-4131',
    icon: PhoneIcon,
    href: 'tel:080-6939-4131',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: '住所',
    value: '〒381-0034 長野県長野市高田五分一420',
    icon: MapPinIcon,
    href: 'https://maps.app.goo.gl/aL4t5XgyqcUqdD4F6',
    color: 'from-purple-500 to-violet-500'
  },
  {
    name: '営業時間',
    value: '平日 9:00-17:00',
    icon: ClockIcon,
    href: '#',
    color: 'from-orange-500 to-amber-500'
  },
]

interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須です'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容は必須です'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    // エラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormState({ 
          status: 'success', 
          message: result.message || 'お問い合わせを受け付けました。ありがとうございます。' 
        })
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        })
      } else {
        throw new Error(result.error || 'エラーが発生しました')
      }
    } catch (error) {
      setFormState({ 
        status: 'error', 
        message: error instanceof Error ? error.message : 'サーバーエラーが発生しました' 
      })
    }
  }

  return (
    <section className="section-padding bg-neutral-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl" />

      <div className="container-width relative z-10">
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
            <span className="text-lg">📧</span>
            Contact Us
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            お問い合わせ
            <span className="text-gradient">・ご相談</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。
            専門スタッフが丁寧に対応いたします。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-8">連絡先情報</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <a 
                      href={item.href}
                      className="flex items-center gap-4 p-4 card hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">{item.name}</h4>
                        <p className="text-neutral-600 group-hover:text-primary-600 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-gradient p-8"
            >
              <h4 className="font-bold text-neutral-900 mb-6 text-lg">お問い合わせの流れ</h4>
              <div className="space-y-4">
                {[
                  'お問い合わせフォームまたはお電話でご連絡',
                  '詳細なヒアリングとご提案',
                  'お見積もりとスケジュール調整',
                  'プロジェクト開始'
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-8">お問い合わせフォーム</h3>
              
              <AnimatePresence>
                {formState.status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800">{formState.message}</p>
                  </motion.div>
                )}

                {formState.status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                  >
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0" />
                    <p className="text-red-800">{formState.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-3">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-modern ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-3">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-modern ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-3">
                    会社名・団体名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-modern"
                    placeholder="株式会社サンプル"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-3">
                    ご希望のサービス
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-modern"
                  >
                    <option value="">選択してください</option>
                    <option value="ai-development">🤖 AIシステム開発</option>
                    <option value="web-development">💻 WEB開発</option>
                    <option value="website-creation">🌐 ホームページ制作</option>
                    <option value="photography">📸 写真撮影</option>
                    <option value="video-production">🎬 映像制作</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-3">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`textarea-modern ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
                    placeholder="プロジェクトの詳細やご質問をお聞かせください..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  whileHover={{ scale: formState.status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: formState.status === 'loading' ? 1 : 0.98 }}
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState.status === 'loading' ? (
                    <>
                      <ArrowPathIcon className="h-5 w-5 animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5" />
                      送信する
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}