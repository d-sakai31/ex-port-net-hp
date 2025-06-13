'use client'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ex-Port.net",
    "legalName": "株式会社Ex-Port.net",
    "url": "https://ex-port.net",
    "logo": "https://ex-port.net/logo.png",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "高田五分一420",
      "addressLocality": "長野市",
      "addressRegion": "長野県",
      "postalCode": "381-0034",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-80-6939-4131",
      "contactType": "customer service",
      "email": "info@ex-port.net",
      "availableLanguage": "Japanese"
    },
    "sameAs": [
      "https://github.com/d-sakai31/ex-port-net-hp"
    ],
    "description": "Ex-Port.netは長野県長野市を拠点に、AI開発、WEB開発、ホームページ制作、写真撮影、映像制作など、最先端のデジタルソリューションを提供する総合IT企業です。",
    "keywords": "AI開発, WEB開発, ホームページ制作, 写真撮影, 映像制作, 長野県, 長野市",
    "areaServed": {
      "@type": "Place",
      "name": "長野県"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "デジタルソリューションサービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AIシステム開発",
            "description": "機械学習、深層学習を活用した最先端のAIシステム開発"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WEB開発",
            "description": "モダンな技術スタックを使用した高性能Webアプリケーション開発"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ホームページ制作",
            "description": "SEO対策やレスポンシブデザインを重視したホームページ制作"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "写真撮影",
            "description": "商品撮影、ポートレート、イベント撮影サービス"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "映像制作",
            "description": "プロモーション動画、説明動画、ドキュメンタリー制作"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ex-Port.net",
    "alternateName": "株式会社Ex-Port.net",
    "url": "https://ex-port.net",
    "description": "Ex-Port.netは長野県長野市を拠点に、AI開発、WEB開発、ホームページ制作、写真撮影、映像制作など、最先端のデジタルソリューションを提供する総合IT企業です。",
    "publisher": {
      "@type": "Organization",
      "name": "Ex-Port.net"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ex-port.net/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ex-Port.net",
    "image": "https://ex-port.net/logo.png",
    "telephone": "+81-80-6939-4131",
    "email": "info@ex-port.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "高田五分一420",
      "addressLocality": "長野市",
      "addressRegion": "長野県",
      "postalCode": "381-0034",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.6513,
      "longitude": 138.1815
    },
    "url": "https://ex-port.net",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "description": "Ex-Port.netは長野県長野市を拠点に、AI開発、WEB開発、ホームページ制作、写真撮影、映像制作など、最先端のデジタルソリューションを提供する総合IT企業です。"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}