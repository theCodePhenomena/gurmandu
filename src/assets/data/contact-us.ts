import { Clock8Icon, MapPinIcon, Mail, PhoneIcon } from 'lucide-react'
import type { Locale } from '@/i18n/ui'
import type { ComponentType } from 'react'

export type ContactItem = {
  title: Record<Locale, string>
  icon: ComponentType
  description: string
}

export const contactInfo: ContactItem[] = [
  {
    title: { ro: 'Program', en: 'Hours' },
    icon: Clock8Icon,
    description: 'Zilnic\n12:00 — 23:00'
  },
  {
    title: { ro: 'Adresă', en: 'Address' },
    icon: MapPinIcon,
    description: 'Bulevardul Decebal 20\n030969 București'
  },
  {
    title: { ro: 'Email', en: 'Email' },
    icon: Mail,
    description: 'gurmandu2026@gmail.com'
  },
  {
    title: { ro: 'Telefon', en: 'Phone' },
    icon: PhoneIcon,
    description: '+40 730 376 165'
  }
]
