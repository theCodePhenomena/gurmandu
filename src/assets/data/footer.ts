import type { Locale } from '@/i18n/ui'

export type FooterLink = {
  title: Record<Locale, string>
  href: string
}

export const footerData: FooterLink[] = [
  { title: { ro: 'Meniu', en: 'Menu' }, href: '#menu' },
  { title: { ro: 'Despre noi', en: 'About us' }, href: '#about-us' },
  { title: { ro: 'Delivery', en: 'Delivery' }, href: '#delivery' },
  { title: { ro: 'Contact', en: 'Contact' }, href: '#contact-us' }
]
