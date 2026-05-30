import type { Locale } from '@/i18n/ui'

export type ContactIcon = 'clock' | 'map' | 'mail' | 'phone'

export type ContactItem = {
  title: Record<Locale, string>
  icon: ContactIcon
  description: Record<Locale, string>
}

export const contactInfo: ContactItem[] = [
  {
    title: { ro: 'Program', en: 'Hours' },
    icon: 'clock',
    description: {
      ro: 'Luni - Vineri: 10:00 - 01:00\nSâmbătă - Duminică: 11:00 - 01:00\nLivrare: 10:00 - 23:30',
      en: 'Monday - Friday: 10:00 - 01:00\nSaturday - Sunday: 11:00 - 01:00\nDelivery: 10:00 - 23:30'
    }
  },
  {
    title: { ro: 'Adresă', en: 'Address' },
    icon: 'map',
    description: {
      ro: 'Bulevardul Decebal 20\n030969 București',
      en: '20 Decebal Boulevard\nBucharest 030969'
    }
  },
  {
    title: { ro: 'Email', en: 'Email' },
    icon: 'mail',
    description: {
      ro: 'gurmandu2026@gmail.com',
      en: 'gurmandu2026@gmail.com'
    }
  },
  {
    title: { ro: 'Telefon', en: 'Phone' },
    icon: 'phone',
    description: {
      ro: '+40 730 376 165',
      en: '+40 730 376 165'
    }
  }
]
