import type { Locale } from '@/i18n/ui'

export type LocalizedNavItem = {
  title: Record<Locale, string>
  href: string
}

export const navigationData: LocalizedNavItem[] = [
  { title: { ro: 'Acasă', en: 'Home' }, href: '/' },
  { title: { ro: 'Preparate populare', en: 'Popular dishes' }, href: '/#popular-dishes' },
  { title: { ro: 'Meniu', en: 'Menu' }, href: '/#menu' },
  { title: { ro: 'Livrare', en: 'Delivery' }, href: '/#delivery' },
  { title: { ro: 'Contact', en: 'Contact' }, href: '/#contact-us' }
]
