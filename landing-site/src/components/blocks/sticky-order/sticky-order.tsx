import { Phone } from 'lucide-react'
import { ui, type Locale } from '@/i18n/ui'

const ORDER_PHONE = '+40730376165'

const StickyOrder = ({ lang = 'ro' }: { lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]

  return (
    <a
      href={`tel:${ORDER_PHONE}`}
      aria-label={t('delivery.cta.order')}
      className='group fixed bottom-4 right-4 z-50 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-primary-foreground shadow-2xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:gap-3 sm:px-6 sm:py-3'
    >
      <Phone className='size-5 shrink-0 sm:size-6' />
      <span className='text-xs font-semibold sm:text-sm'>{t('delivery.cta.order')}</span>
    </a>
  )
}

export default StickyOrder
