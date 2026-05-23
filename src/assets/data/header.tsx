import type { Locale } from '@/i18n/ui'

export type LocalizedNavItem = {
  title: Record<Locale, string>
  href: string
}

export const navigationData: LocalizedNavItem[] = [
  { title: { ro: 'Acasă', en: 'Home' }, href: '#home' },
  { title: { ro: 'Preparate populare', en: 'Popular dishes' }, href: '#popular-dishes' },
  { title: { ro: 'Meniu', en: 'Menu' }, href: '#menu' },
  { title: { ro: 'Despre noi', en: 'About us' }, href: '#about-us' },
  { title: { ro: 'Social', en: 'Social' }, href: '#social' },
  { title: { ro: 'Delivery', en: 'Delivery' }, href: '#delivery' },
  { title: { ro: 'Contact', en: 'Contact' }, href: '#contact-us' }
]
