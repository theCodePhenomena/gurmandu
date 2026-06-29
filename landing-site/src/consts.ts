// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = "GurMANDU — Foodie? You've come to the right place."
export const SITE_DESCRIPTION =
  'Authentic Romanian cuisine, Mediterranean refinement, Italian passion and modern Asian influences. From succulent burgers and crispy bites to original desserts crafted with care for every detail — every dish here has its own personality.'

export const SITE_URL = 'https://gurmandu-bucuresti.ro/'

export const SITE_METADATA = {
  title: {
    default: "GurMANDU — Foodie? You've come to the right place."
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'GurMANDU',
    'restaurant',
    'fusion',
    'bucătărie românească',
    'mediterranean',
    'italian',
    'modern',
    'fine dining',
    'București'
  ],
  authors: [{ name: 'GurMANDU', url: SITE_URL }],
  creator: 'GurMANDU',
  publisher: 'GurMANDU',
  robots: {
    index: true,
    follow: true
  },
  language: 'ro-RO',
  locale: 'ro_RO',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'GurMANDU',
    title: "GurMANDU — Foodie? You've come to the right place.",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/gurmandu-logo.png',
        width: 1200,
        height: 630,
        alt: 'GurMANDU — Fusion Restaurant',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gurmandu',
    creator: '@gurmandu',
    title: "GurMANDU — Foodie? You've come to the right place.",
    description: SITE_DESCRIPTION,
    images: ['/images/gurmandu-logo.png']
  },
  verification: {
    google: '',
    yandex: '',
    bing: ''
  }
}

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61572017660461',
  instagram: 'https://www.instagram.com/gurmandu25/',
  tiktok: 'https://www.tiktok.com/@gurmandu25'
}

export const ANPC_LINKS = {
  anpc: 'https://anpc.ro/',
  sal: 'https://anpc.ro/ce-este-sal/',
  sol: 'https://ec.europa.eu/consumers/odr/'
}

export const COMPANY_INFO = {
  name: 'GurMANDU',
  legalName: 'GurMANDU',
  url: SITE_URL,
  logo: '/images/gurmandu-logo.png',
  foundingDate: '2026',
  address: {
    streetAddress: 'Bulevardul Decebal 20',
    addressLocality: 'București',
    addressRegion: 'București',
    postalCode: '030969',
    addressCountry: 'RO'
  },
  contactPoint: {
    telephone: '+40730376165',
    contactType: 'customer service',
    email: 'gurmandu2026@gmail.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
