// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'GurMANDU — Fusion Restaurant'
export const SITE_DESCRIPTION =
  'Bucătărie fusion: rețete românești, mediteraneene și italiene reinventate într-un cadru modern. Ingrediente proaspete, preparate cu pasiune.'

// TODO: replace with the real GitHub repo URL once published.
export const GITHUB_URL = 'https://github.com/theCodePhenomena/gurmandu'
// TODO: replace with the production domain once live.
export const SITE_URL = 'https://gurmandu.ro/'

export const SITE_METADATA = {
  title: {
    default: 'GurMANDU — Fusion Restaurant'
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
    title: 'GurMANDU — Fusion Restaurant',
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
    // TODO: replace with the real handles when the client provides them.
    site: '@gurmandu',
    creator: '@gurmandu',
    title: 'GurMANDU — Fusion Restaurant',
    description: SITE_DESCRIPTION,
    images: ['/images/gurmandu-logo.png']
  },
  verification: {
    google: '',
    yandex: '',
    bing: ''
  }
}

// TODO: fill in real social profile URLs once the client provides them.
export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  twitter: '#',
  youtube: '#'
}

export const COMPANY_INFO = {
  name: 'GurMANDU',
  legalName: 'GurMANDU',
  url: SITE_URL,
  logo: '/images/gurmandu-logo.png',
  foundingDate: '2024',
  // TODO: replace with the restaurant's real address, phone and email.
  address: {
    streetAddress: '',
    addressLocality: 'București',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'RO'
  },
  contactPoint: {
    telephone: '',
    contactType: 'reservations',
    email: ''
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
