import type { Locale } from '@/i18n/ui'

export type ContactIcon = 'clock' | 'map' | 'mail' | 'phone'

export type ContactItem = {
  title: Record<Locale, string>
  icon: ContactIcon
  description: string
}

export const contactInfo: ContactItem[] = [
  {
    title: { ro: 'Program', en: 'Hours' },
    icon: 'clock',
    description: 'Zilnic\n12:00 — 23:00'
  },
  {
    title: { ro: 'Adresă', en: 'Address' },
    icon: 'map',
    description: 'Bulevardul Decebal 20\n030969 București'
  },
  {
    title: { ro: 'Email', en: 'Email' },
    icon: 'mail',
    description: 'gurmandu2026@gmail.com'
  },
  {
    title: { ro: 'Telefon', en: 'Phone' },
    icon: 'phone',
    description: '+40 730 376 165'
  }
]
